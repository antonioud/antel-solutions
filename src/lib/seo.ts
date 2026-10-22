import type { Metadata } from 'next';
export const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://antel-solutions.vercel.app').replace(/\/$/,'');
export function metadata(title:string, description:string, path:string):Metadata { return {title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:'website',siteName:'Antel Solutions',images:[{url:'/images/conversation.webp',width:1536,height:864,alt:'An intimate conversation setting at blue hour'}]},twitter:{card:'summary_large_image',title,description,images:['/images/conversation.webp']}}; }
