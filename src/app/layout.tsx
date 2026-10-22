import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Reveal from '@/components/reveal';
import NavigationScroll from '@/components/navigation-scroll';
import {origin} from '@/lib/seo';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:'Antel Solutions | International Business, Trade & Strategic Relationships',template:'%s | Antel Solutions'},description:'Antel Solutions brings more than 30 years of trusted international relationships to opportunities in trade, finance, technology, commodities, investment and global business development.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><NavigationScroll/><Header/><main id="main">{children}</main><Footer/><Reveal/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:'Antel Solutions',url:origin,description:'International business development, trade, finance and strategic relationships.'}).replace(/</g,'\\u003c')}}/></body></html>}
