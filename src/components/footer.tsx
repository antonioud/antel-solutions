import Link from 'next/link';
import { navigation } from '@/lib/content';
import { Brand } from './header';
export default function Footer(){return <footer><div className="container"><div className="footer-main"><div><Link href="/" aria-label="Antel Solutions home"><Brand/></Link><p>International business development, trade,<br/>finance and strategic relationships.</p></div><nav aria-label="Footer navigation">{navigation.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Antel Solutions. All rights reserved.</span><div><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link></div><span>Experience. Relationships. Execution.</span></div></div></footer>}
