'use client';

import { useEffect, useRef, useState } from 'react';
import world from '@/data/world-map.json';
import { businessMarkets, networkWaves, experienceStats, type ConnectionPair } from '@/lib/network';
import { Label } from './ui';

const points = new Map(world.countries.map(country => [country.id, country.point]));
const initialPairs: ConnectionPair[] = [{ from: 'USA', to: 'CHN' }];
const waveLabels = ['USA → China', 'China → Japan & Singapore', 'Connections multiply', 'Across markets', 'A worldwide network'];

function arcPath(pair: ConnectionPair) {
  const a = points.get(pair.from), b = points.get(pair.to);
  if (!a || !b) return '';
  const lift = Math.max(26, Math.hypot(b[0] - a[0], b[1] - a[1]) * 0.23);
  return `M${a[0]},${a[1]} Q${(a[0] + b[0]) / 2},${Math.max(8, (a[1] + b[1]) / 2 - lift)} ${b[0]},${b[1]}`;
}

export default function InternationalExperience() {
  const section = useRef<HTMLElement>(null);
  const arcs = useRef<SVGGElement>(null);
  const animationFrame = useRef(0);
  const pauseAction = useRef<() => void>(() => {});
  const [playing, setPlaying] = useState(false);
  const [waveIndex, setWaveIndex] = useState(0);
  const [highlighted, setHighlighted] = useState<string[]>(['USA']);
  const [complete, setComplete] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const numbers = [...root.querySelectorAll<HTMLElement>('[data-experience-count]')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const waves = networkWaves();
    const waveDuration = 1500;
    const arcDuration = 1100;
    const waveStagger = 150;
    let visible = false, started = false, running = false, lastTime = 0, elapsed = 0, previousWave = -1, displayedCount = 1;
    const reached = new Set<string>(['USA']);
    const drawn: {path: SVGPathElement; length: number; start: number; to: string; arrived: boolean}[] = [];
    arcs.current?.replaceChildren();
    const finishNumbers = () => numbers.forEach(number => { number.textContent = number.dataset.experienceCount ?? ''; });
    function appendArcs(pairs: ConnectionPair[], start: number, animate: boolean) {
      const group = arcs.current;
      if (!group) return;
      pairs.forEach((pair, i) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', arcPath(pair));
        path.setAttribute('class', animate ? 'experience-arc' : 'experience-arc is-settled');
        path.dataset.from = pair.from;
        path.dataset.to = pair.to;
        group.append(path);
        const length = path.getTotalLength();
        if (animate) {
          path.style.strokeDasharray = String(length);
          path.style.strokeDashoffset = String(length);
        }
        drawn.push({path, length, start: start + i / Math.max(1, pairs.length - 1) * waveStagger, to: pair.to, arrived: !animate});
      });
    }
    function stop() {
      running = false;
      cancelAnimationFrame(animationFrame.current);
      setPlaying(false);
      finishNumbers();
    }
    function showOverview() {
      stop();
      // Preserve the existing paths; append only branches not yet drawn.
      const existing = new Set(drawn.map(arc => arc.to));
      appendArcs(waves.flat().filter(pair => !existing.has(pair.to)), 0, false);
      drawn.forEach(arc => {
        arc.path.style.strokeDashoffset = '0';
        arc.path.classList.add('is-settled');
        arc.arrived = true;
      });
      setHighlighted(businessMarkets.map(market => market.id));
      setComplete(true);
      setStatus('All 61 business markets connected.');
    }
    function tick(now: number) {
      if (!running) return;
      const delta = visible && !document.hidden ? Math.min(now - lastTime, 100) : 0;
      elapsed += delta;
      lastTime = now;
      const index = Math.min(waves.length - 1, Math.floor(elapsed / waveDuration));
      if (index !== previousWave) {
        setWaveIndex(index);
        appendArcs(waves[index], index * waveDuration, true);
        previousWave = index;
      }
      let arrivals = false;
      drawn.forEach(arc => {
        if (arc.arrived) return;
        const t = Math.max(0, Math.min(1, (elapsed - arc.start) / arcDuration));
        arc.path.style.strokeDashoffset = String(arc.length * Math.pow(1 - t, 3));
        if (t === 1) {
          arc.arrived = true;
          arc.path.classList.add('is-settled');
          reached.add(arc.to);
          arrivals = true;
        }
      });
      if (arrivals) setHighlighted([...reached]);
      displayedCount += (reached.size - displayedCount) * (1 - Math.exp(-delta / 100));
      numbers[0].textContent = String(Math.round(displayedCount));
      numbers.slice(1).forEach((number, i) => {
        const t = Math.max(0, Math.min(1, (elapsed - 400 - i * 160) / 1900));
        number.textContent = String(Math.round(Number(number.dataset.experienceCount) * (1 - Math.pow(1 - t, 4))));
      });
      if (elapsed < waves.length * waveDuration) animationFrame.current = requestAnimationFrame(tick);
      else showOverview();
    }
    function start() {
      if (reduced.matches) { showOverview(); return; }
      // Clear the server-rendered fallback only before the animation begins.
      arcs.current?.replaceChildren();
      elapsed = 0; previousWave = -1; lastTime = performance.now(); running = true;
      numbers.forEach((number, i) => { number.textContent = i === 0 ? '1' : '0'; });
      setPlaying(true); setStatus('');
      animationFrame.current = requestAnimationFrame(tick);
    }
    pauseAction.current = showOverview;
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible && !started) { started = true; start(); }
    }, { threshold: 0.2 });
    observer.observe(root);
    const motionChanged = () => { if (reduced.matches) showOverview(); };
    reduced.addEventListener('change', motionChanged);
    return () => { observer.disconnect(); reduced.removeEventListener('change', motionChanged); running = false; cancelAnimationFrame(animationFrame.current); };
  }, []);

  return <section ref={section} id="international-experience" className="section international-experience" aria-labelledby="experience-heading">
    <div className="container">
      <Label>LOUIS ANTONIOU · INTERNATIONAL PERSPECTIVE</Label>
      <h2 id="experience-heading">Experience beyond borders.</h2>
      <div className="experience-top">
        <div className={`experience-map${complete ? ' is-overview' : ''}`}>
          <svg viewBox="0 0 1000 540" role="img" aria-labelledby="experience-map-title experience-map-description">
            <defs>
              <filter id="experience-arc-glow" filterUnits="userSpaceOnUse" x="-40" y="-40" width="1080" height="620" colorInterpolationFilters="sRGB">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="softGlow" />
                <feMerge><feMergeNode in="softGlow" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <title id="experience-map-title">International connections</title>
            <desc id="experience-map-description">Louis’s 61 business markets: 60 countries and Puerto Rico. A branching network begins with USA to China, then China to Japan and Singapore. New connections grow outward from already connected markets. All arches remain visible and the final network includes every business market. Connections illustrate reach, not historical routes or specific transactions.</desc>
            <g>{world.countries.map(country => <path key={country.id} d={country.path} className={`experience-land ${highlighted.includes(country.id) ? 'is-featured' : ''}`} />)}</g>
            <g ref={arcs} filter="url(#experience-arc-glow)" aria-hidden="true">{initialPairs.map(pair => <path key={pair.to} d={arcPath(pair)} className="experience-arc" data-from={pair.from} data-to={pair.to} />)}</g>
          </svg>
        </div>
        <div className="experience-total">
          <div className="experience-big" aria-hidden="true" data-experience-count={experienceStats.countries}>{experienceStats.countries}</div>
          <p className="experience-total-label">Countries &amp; territories</p>
          <p className="experience-context">in which Louis has conducted business</p>
          <span className="sr-only">Louis has conducted business in {experienceStats.countries} countries and territories: 60 countries plus Puerto Rico.</span>
          <div className="experience-stats">
        <div><div className="experience-number" aria-hidden="true"><span data-experience-count={experienceStats.relationshipYears}>{experienceStats.relationshipYears}</span><span className="experience-plus">+</span></div><p>Years behind Antel’s<br />international relationships</p><span className="sr-only">More than 30 years behind Antel’s international relationships.</span></div>
        <div><div className="experience-number" aria-hidden="true" data-experience-count={experienceStats.languages}>{experienceStats.languages}</div><p>Languages spoken<br />by Louis</p><span className="sr-only">Louis speaks {experienceStats.languages} languages.</span></div>
          </div>
          <div className="experience-feature">
            <p className="experience-feature-label">{complete ? 'INTERNATIONAL PERSPECTIVE' : 'THE NETWORK GROWS'}</p>
            <p className={`experience-feature-name${complete ? ' is-overview' : ''}`} key={complete ? 'overview' : waveIndex}>{complete ? '61 connected business markets' : waveLabels[waveIndex]}</p>

          </div>
        </div>
      </div>
      <div className="experience-bottom">
        <p className="experience-note">60 countries plus Puerto Rico, based on Louis’s business experience. Airport connections and personal-only visits are excluded. Arches illustrate international reach, not specific transactions or office locations.</p>
        {playing && <button className="experience-pause" type="button" onClick={() => pauseAction.current()}>Skip animation<span aria-hidden="true">↗</span></button>}
      </div>
      <details className="experience-directory">
        <summary>View all {experienceStats.countries} business markets</summary>
        <ul>{businessMarkets.map(market => <li key={market.id}>{market.name}</li>)}</ul>
      </details>
      <span className="sr-only" role="status" aria-live="polite">{status}</span>
    </div>
  </section>;
}
