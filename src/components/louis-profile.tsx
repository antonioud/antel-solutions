import Link from 'next/link';
import { Arrow, Label } from './ui';
import { louisProfile } from '@/lib/profile';

export default function LouisProfile({ full = false }: { full?: boolean }) {
  return <section id="louis-antoniou" className={`section louis-section ${full ? 'louis-full' : 'louis-intro'}`} aria-labelledby={full ? 'louis-bio-heading' : 'louis-intro-heading'}>
    <div className="container louis-layout">
      <figure className="louis-figure" data-reveal>
        <picture>
          <source type="image/webp" srcSet="/images/louis-antoniou-confident-560.webp 560w, /images/louis-antoniou-confident.webp 1120w" sizes="(max-width: 760px) 85vw, 430px" />
          <img src="/images/louis-antoniou-confident.webp" width="1120" height="1400" alt="Louis Antoniou" loading="lazy" />
        </picture>
        <figcaption>{louisProfile.name}<span>{louisProfile.role}</span></figcaption>
      </figure>
      <div className="louis-copy" data-reveal>
        <Label>LEADERSHIP</Label>
        <h2 id={full ? 'louis-bio-heading' : 'louis-intro-heading'}>{full ? 'Louis Antoniou' : <>An international outlook.<br /><span className="blue-text">A personal approach.</span></>}</h2>
        <p className="lead">{louisProfile.introduction}</p>
        <div className="prose">
          {full ? <><p>{louisProfile.summary}</p><details className="leadership-details"><summary>Career background</summary>{louisProfile.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</details></> : <p>{louisProfile.summary}</p>}
        </div>
        {!full && <Link href="/about/#louis-antoniou" className="text-link">Meet Louis Antoniou <Arrow /></Link>}
      </div>
    </div>
  </section>;
}
