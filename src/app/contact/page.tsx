import {PageHero,Label} from '@/components/ui';
import ContactForm from '@/components/contact-form';
import {metadata as pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Contact','Tell us what you are looking to build, finance, source, expand or bring to market. Start a conversation with Antel Solutions.','/contact/');
export default function Contact(){return <><PageHero label="LET’S TALK" title="Start a Conversation" copy="Tell us what you are looking to build, finance, source, expand or bring to market." image="contact-desk"/><section className="section"><div className="container contact-layout"><aside><Label>EXPLORE THE POSSIBILITIES</Label><h2>Let’s start with<br/>what matters to you.</h2><p className="muted">Tell us what you have in mind, where you want to go and the relationships or resources you are looking for.</p><p className="contact-statement">Experience.<br/>Relationships.<br/><span>Opportunity.</span></p></aside><ContactForm/></div></section></>}
