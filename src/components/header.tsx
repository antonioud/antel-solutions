'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/lib/content';
export function Brand(){return <span className="brand"><svg className="brand-logo" viewBox="0 0 310 82" aria-hidden="true" focusable="false"><path d="M0 78 43 4H66L25 78Z" fill="currentColor"/><path d="M69 10 95 78H69L55 43Z" fill="#8dbbfa"/><text x="112" y="48" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="38" fontWeight="500" letterSpacing="4">ANTEL</text><text x="115" y="76" fill="#8dbbfa" fontFamily="Arial, Helvetica, sans-serif" fontSize="14" letterSpacing="6">SOLUTIONS</text></svg></span>}

export default function Header(){
 const [scrolled,setScrolled]=useState(false);const [open,setOpen]=useState(false);const path=usePathname();const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>24);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{if(!open)return;const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}};document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape)},[open]);
 return <header className={`site-header ${scrolled||open?'solid':''}`}><div className="header-inner"><Link href="/" aria-label="Antel Solutions home"><Brand/></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label,href])=><Link key={href} href={href} aria-current={path===href||path+'/'===href?'page':undefined}>{label}</Link>)}</nav><Link className="header-cta" href="/contact/">Let’s Talk <span aria-hidden="true">↗</span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'×':'☰'}</span></button></div><nav id="mobile-navigation" hidden={!open} className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={path===href||path+'/'===href?'page':undefined}>{label}<span aria-hidden="true">↗</span></Link>)}</nav></header>
}
