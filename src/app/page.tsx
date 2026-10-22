import Link from 'next/link';
import CinematicMotion from '@/components/cinematic-motion';
import { Arrow, Button, Label, Photo, CTASection } from '@/components/ui';
import { groups, sectors } from '@/lib/content';
import { metadata as pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Antel Solutions | International Business, Trade & Strategic Relationships',
  'Antel Solutions supports international business through trade, finance, technology and business development, backed by decades of commercial relationships.',
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
        <h1>International business.<br /><span>Connected opportunity.</span></h1>
        <p className="hero-copy">Antel Solutions connects businesses, resources and strategic partners across international trade, finance and technology.</p>
        <div className="button-row">
          <Button href="/capabilities/">Explore Capabilities</Button>
          <Link href="/contact/" className="hero-approach">Contact Antel <Arrow /></Link>
        </div>
        <p className="relationship-line">30+ years of trusted international relationships</p>
      </div>
    </section>

    <section className="section boutique-capabilities">
      <div className="container">
        <div className="section-top">
          <div><Label>OUR CAPABILITIES</Label><h2>Capabilities across<br />international business.</h2></div>
          <p className="narrow muted">From sourcing and market access to strategic partnerships and business development, our work connects commercial objectives with relevant resources.</p>
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

    <section id="approach" className="section boutique-approach">
      <div className="container">
        <div className="split">
          <div data-reveal>
            <Label>OUR APPROACH</Label>
            <h2>Commercial understanding.<br /><span className="blue-text">Practical direction.</span></h2>
            <p className="approach-intro">A clear objective. The right relationships. A practical plan.</p>
            <p className="muted">Antel Solutions brings together international consulting, business development and commercial relationships. We assess each objective, identify relevant resources and partners, and help shape the steps needed to move an opportunity forward.</p>
            <Link href="/about/" className="text-link">About Antel Solutions <Arrow /></Link>
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

    <section className="section company-sectors" aria-labelledby="sectors-heading">
      <div className="container">
        <Label>SECTORS</Label>
        <h2 id="sectors-heading">Cross-sector perspective.</h2>
        <p className="muted sector-intro">Antel’s areas of focus span established industries and emerging technologies.</p>
        <ul className="company-sector-list">{sectors.map(sector => <li key={sector.title}><Link href={`/capabilities/#${sector.anchor}`}>{sector.title}<Arrow /></Link></li>)}</ul>
      </div>
    </section>

    <section className="section boutique-network">
      <div className="container split">
        <div data-reveal><Label>THE VALUE OF RELATIONSHIPS</Label><h2>International reach.<br /><span className="blue-text">Commercial perspective.</span></h2></div>
        <div className="prose" data-reveal>
          <p className="lead">Markets change. Trusted relationships endure.</p>
          <p>For more than 30 years, we have developed an international network through direct business relationships, long-term partnerships and real-world experience.</p>
          <p>We bring that perspective to each opportunity, helping connect the right people at the right time.</p>
          <Link href="/our-network/" className="text-link">Our Network <Arrow /></Link>
        </div>
      </div>
    </section>
    <CTASection image="home-invitation" company />
  </>;
}
