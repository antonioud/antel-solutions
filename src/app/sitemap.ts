import type { MetadataRoute } from 'next';
import {origin} from '@/lib/seo';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/about/','/capabilities/','/our-network/','/contact/','/privacy/','/terms/'].map(path=>({url:origin+path,changeFrequency:'monthly',priority:path==='/'?1:0.7}))}
