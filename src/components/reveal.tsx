'use client';
import {useEffect} from 'react';
export default function Reveal(){useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}),{threshold:0.1});document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);return null}
