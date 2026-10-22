import Link from 'next/link';
import LouisProfile from '@/components/louis-profile';
import CinematicMotion from '@/components/cinematic-motion';
import { Arrow, Button, Label, Photo, CTASection } from '@/components/ui';
import { groups } from '@/lib/content';
import { metadata as pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Antel Solutions | International Business, Trade & Strategic Relationships',
  'More than 30 years of trusted international relationships. Antel Solutions connects people, resources and opportunities across trade, finance, technology and business development.',
  '/',
);

const principles = [
  ['Strategic Perspective', 'Experience to help you understand the opportunity and shape a practical path forward.'],
  ['Trusted Relationships', 'Connections developed through more than three decades of international business.'],
  ['Practical Engagement', 'Support as an opportunity moves from an introduction toward execution.'],
  ['Global Understanding', 'International experience and cultural understanding brought to each conversation.'],
];

export default function Home() {
  return <>
    <CinematicMotion />
    <section className="home-hero intimate-hero">
      <Photo name="conversation" className="cover-photo conversation-photo" priority />
      <div className="hero-shade" />
      <div className="container hero-content">
        <h1>The right relationships.<br /><span>A world of possibility.</span></h1>
        <p className="hero-copy">International business starts with a conversation.<br className="desktop-break" /> We help bring the right people and opportunities together.</p>
        <div className="button-row">
          <Button href="/contact/">Let’s Talk</Button>
          <Link href="#approach" className="hero-approach">Our Approach <Arrow /></Link>
        </div>
        <p className="relationship-line">30+ years of trusted international relationships</p>
      </div>
    </section>

    <section id="approach" className="section boutique-approach">
      <div className="container">
        <div className="split">
          <div data-reveal>
            <Label>OUR APPROACH</Label>
            <h2>Built on trust.<br /><span className="blue-text">Personal by nature.</span></h2>
            <p className="approach-intro">Experience, discretion and thoughtful connections.</p>
            <p className="muted">We start by understanding what you want to achieve. Then we consider the people, resources and relationships that can help move it forward.</p>
            <Link href="/about/" className="text-link">Get to Know Antel <Arrow /></Link>
          </div>
          <Photo name="architecture" className="boutique-photo" alt="Illustrative blue-hour glass architecture" />
        </div>
        <ol className="principle-grid">
          {principles.map(([title, copy], index) => <li key={title} data-reveal>
            <span className="principle-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <LouisProfile />

    <section className="section boutique-capabilities">
      <div className="container">
        <div className="section-top">
          <div><Label>WHERE WE CAN HELP</Label><h2>A clear focus.<br />An open perspective.</h2></div>
          <p className="narrow muted">Whether you are sourcing a product, exploring a market or looking for the right strategic partner, we start with your objective.</p>
        </div>
        <div className="boutique-capability-list">
          {groups.map((group, index) => <Link href={`/capabilities/#${group.id}`} key={group.id} data-reveal>
            <span className="capability-row-number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.copy}</p>
            <Arrow />
          </Link>)}
        </div>
      </div>
    </section>

    <section className="section boutique-network">
      <div className="container split">
        <div data-reveal><Label>THE VALUE OF RELATIONSHIPS</Label><h2>Knowing who to call.<br /><span className="blue-text">Understanding what matters.</span></h2></div>
        <div className="prose" data-reveal>
          <p className="lead">Markets change. Trusted relationships endure.</p>
          <p>For more than 30 years, we have developed an international network through direct business relationships, long-term partnerships and real-world experience.</p>
          <p>We bring that perspective to each opportunity, helping connect the right people at the right time.</p>
          <Link href="/our-network/" className="text-link">Our Network <Arrow /></Link>
        </div>
      </div>
    </section>
    <CTASection image="home-invitation" />
  </>;
}
