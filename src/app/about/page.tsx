import InternationalExperience from '@/components/international-experience';
import LouisProfile from '@/components/louis-profile';
import { PageHero, Label, Photo, ProcessSection, CTASection } from '@/components/ui';
import { metadata as pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('About', 'Antel Solutions brings together international consulting, trade, business development and strategic relationships. Learn about our approach and leadership.', '/about/');

const values = [
  ['Commercial perspective', 'An understanding of international markets, business priorities and the relationships an opportunity requires.'],
  ['Discretion', 'A considered approach to commercial information, business discussions and strategic relationships.'],
  ['Long-term relationships', 'Trust developed through continuity, cultural understanding and shared objectives.'],
  ['Practical engagement', 'A focus on the resources, partners and next steps needed to move an opportunity forward.'],
];

export default function About() {
  return <>
    <PageHero label="ABOUT ANTEL SOLUTIONS" title="International Perspective. Commercial Focus." copy="Connecting businesses, resources and strategic partners across industries and markets." image="about-journey" />
    <section className="section">
      <div className="container split">
        <div data-reveal><Label>THE COMPANY</Label><h2>Built on relationships.<br /><span className="blue-text">Focused on business.</span></h2></div>
        <div className="prose" data-reveal>
          <p className="lead">Antel Solutions brings together international consulting, business development, trade, finance and strategic relationships.</p>
          <p>Our work draws on more than 30 years of international business relationships, connecting commercial objectives with relevant market knowledge, resources and partners.</p>
          <p>We work across industries to help businesses explore sourcing, distribution, market access and strategic partnerships. Each engagement starts with understanding the objective and identifying a practical path forward.</p>
        </div>
      </div>
    </section>
    <section className="section pale">
      <div className="container split">
        <Photo name="values-craft" alt="Carefully crafted walnut handrail and stone staircase in soft window light" className="feature-photo" />
        <div data-reveal><Label>OUR VALUES</Label><h2>A considered approach<br />to every opportunity.</h2><div className="value-list">{values.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></div>
      </div>
    </section>
    <ProcessSection />
    <LouisProfile full />
    <InternationalExperience />
    <CTASection image="about-reflection" company />
  </>;
}
