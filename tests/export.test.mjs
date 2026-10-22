import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import path from 'node:path';
const routes=['','about','capabilities','our-network','contact','privacy','terms'];
test('every route exports a unique title, canonical URL, primary heading and main landmark',async()=>{const titles=new Set();for(const route of routes){const html=await readFile(path.join('out',route,'index.html'),'utf8');assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,route);assert.match(html,/<main id="main">/);assert.match(html,/<link rel="canonical" href="https:\/\//);assert.match(html,/<meta property="og:title"/);const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title);assert.ok(!titles.has(title));titles.add(title)}});
test('exported internal links and images resolve, including capability anchors',async()=>{for(const route of routes){const html=await readFile(path.join('out',route,'index.html'),'utf8');for(const match of html.matchAll(/(?:href|src)="(\/[^"?]*)"/g)){const [pathname,fragment]=match[1].split('#');const file=path.join('out',pathname.endsWith('/')?pathname+'index.html':pathname);await access(file);if(fragment&&pathname.endsWith('/')){const target=await readFile(file,'utf8');assert.ok(target.includes(`id="${fragment}"`),`Missing ${match[1]}`)}}}});
test('contact fields, honest delivery fallback and discovery files are present',async()=>{const html=await readFile('out/contact/index.html','utf8');for(const field of ['name','company','email','phone','interest','message']){assert.ok(html.includes(`name="${field}"`),field)}assert.match(html,/Initial conversations are handled with discretion/);await access('out/robots.txt');await access('out/sitemap.xml');await access('out/404.html');const chunks=(await readdir('out/_next/static/chunks',{recursive:true})).filter(x=>x.endsWith('.js'));const js=(await Promise.all(chunks.map(x=>readFile('out/_next/static/chunks/'+x,'utf8')))).join('');assert.ok(js.includes('Your message has not been sent'))});


test('editorial and background photos have distinct placements across the site',async()=>{
  const placements=new Map();
  for(const route of routes){
    const html=await readFile(path.join('out',route,'index.html'),'utf8');
    for(const match of html.matchAll(/<img[^>]+src="(\/images\/[^" ]+\.webp)"/g)){
      const image=match[1];
      if(image.includes('louis-antoniou'))continue; // The same person’s introduction and full biography.
      assert.ok(!placements.has(image),`${image} repeats on ${route||'Home'} and ${placements.get(image)}`);
      placements.set(image,route||'Home');
    }
  }
  assert.ok(placements.size>=15);
});
