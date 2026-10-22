import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { businessMarkets, experienceStats, networkWaves, overviewConnections } from '../src/lib/network.ts';

const world=JSON.parse(await readFile('src/data/world-map.json','utf8'));
const geometry=new Map(world.countries.map(country=>[country.id,country]));
const confirmed=new Set(businessMarkets.map(market=>market.id));

test('business list determines the total and excludes personal-only visits',()=>{
  assert.equal(businessMarkets.length,61);
  assert.equal(confirmed.size,61);
  assert.equal(experienceStats.countries,businessMarkets.length);
  assert.equal(experienceStats.languages,2);
  assert.ok(confirmed.has('PRI'));
  assert.ok(confirmed.has('SLV'));
  for(const id of ['BGR','ROU','PRY','NGA','GHA'])assert.ok(!confirmed.has(id));
});

test('each confirmed destination has local geometry and a usable arc endpoint',()=>{
  for(const market of businessMarkets){
    const country=geometry.get(market.id);
    assert.ok(country,market.name);
    assert.ok(country.path.length>0,market.name);
    assert.equal(country.point.length,2);
    assert.ok(country.point.every(Number.isFinite),market.name);
  }
});

test('the network starts USA to China, then branches only from markets reached in previous waves',()=>{
  const waves=networkWaves();
  assert.deepEqual(waves[0],[{from:'USA',to:'CHN'}]);
  assert.deepEqual(waves[1],[{from:'CHN',to:'JPN'},{from:'CHN',to:'SGP'}]);
  const reached=new Set(['USA']);
  for(const wave of waves){
    const newDestinations=new Set();
    for(const pair of wave){
      assert.ok(reached.has(pair.from),'parent must already be connected');
      assert.ok(confirmed.has(pair.to));
      assert.ok(!reached.has(pair.to),'destination must be new');
      assert.ok(!newDestinations.has(pair.to),'no duplicate arrival within a wave');
      newDestinations.add(pair.to);
    }
    newDestinations.forEach(id=>reached.add(id));
  }
  assert.deepEqual([...reached].sort(),[...confirmed].sort());
});

test('the final tree has 60 persistent arcs and two or three children per branching market after USA',()=>{
  const pairs=overviewConnections();
  assert.equal(pairs.length,60);
  const children=new Map();
  for(const pair of pairs){
    assert.notEqual(pair.from,pair.to);
    children.set(pair.from,(children.get(pair.from)??0)+1);
  }
  assert.equal(children.get('USA'),1);
  assert.equal(children.get('CHN'),2);
  for(const [id,count] of children)if(id!=='USA')assert.ok(count===2||count===3);
  const endpoints=new Set(pairs.flatMap(pair=>[pair.from,pair.to]));
  assert.deepEqual([...endpoints].sort(),[...confirmed].sort());
});
