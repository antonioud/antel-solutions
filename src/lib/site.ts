export const site = {
  name: "Antel Solutions",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.antelsolutions.com").replace(/\/$/, ""),
  title: "Antel Solutions | International Business, Trade & Strategic Relationships",
  description:
    "Antel Solutions brings more than 30 years of trusted international relationships to opportunities in trade, finance, technology, commodities, investment and global business development.",
  descriptor: "International business development, trade, finance and strategic relationships.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/network", label: "Our Network" },
  { href: "/contact", label: "Contact" },
];

/** All photography lives in /public/images. Replace files in place to swap imagery. */
export const images = {
  earth: { src: "/images/01_Global_Earth.jpg", alt: "Earth at night from orbit, with city lights connected across continents" },
  relationships: { src: "/images/02_Business_Relationships.jpg", alt: "Business leaders in conversation before a city skyline at sunrise" },
  tradePort: { src: "/images/03_Trade_Port.jpg", alt: "Container port with cranes and a cargo ship at sunset" },
  metals: { src: "/images/04_Metals_Mining.jpg", alt: "Haul trucks working in an open-pit mine" },
  energy: { src: "/images/05_Energy.jpg", alt: "Offshore energy platform at dusk" },
  aiMedical: { src: "/images/06_AI_Medical.jpg", alt: "Researcher working alongside precision laboratory robotics" },
  ecommerce: { src: "/images/07_Ecommerce_Logistics.jpg", alt: "Parcels moving through an automated distribution centre" },
  electronics: { src: "/images/08_Electronics.jpg", alt: "Close view of a processor on an illuminated circuit board" },
  communications: { src: "/images/09_Communications.jpg", alt: "Satellite communications dish against the evening sky" },
  city: { src: "/images/10_Global_City.jpg", alt: "Modern financial district skyline at dusk" },
  architecture: { src: "/images/11_Architecture.jpg", alt: "Figure standing within sweeping glass and steel architecture" },
  network: { src: "/images/12_Global_Network.jpg", alt: "World map of illuminated connections between markets" },
  mountains: { src: "/images/13_Mountains.jpg", alt: "Mountain range above the clouds at first light" },
  worldMap: { src: "/images/14_World_Map.jpg", alt: "" },
  boardroom: { src: "/images/15_Boardroom.jpg", alt: "Boardroom overlooking a city skyline at sunset" },
} as const;

export type Img = { src: string; alt: string };

export const capabilities: { title: string; text: string; image: Img }[] = [
  { title: "Metals & Commodities", text: "Commercial relationships, sourcing, international trade and market opportunities.", image: images.metals },
  { title: "Energy", text: "Strategic relationships, infrastructure, development opportunities and international energy markets.", image: images.energy },
  { title: "AI & Medical Solutions", text: "Advanced technology, AI, medical innovation, strategic partnerships and market development.", image: images.aiMedical },
  { title: "E-Commerce", text: "International commerce, distribution, sourcing and market expansion.", image: images.ecommerce },
  { title: "Electronics", text: "Technology sourcing, distribution, partnerships and international development.", image: images.electronics },
  { title: "Communications", text: "Communications technology, infrastructure, strategic relationships and market opportunities.", image: images.communications },
  { title: "Investment", text: "Investment opportunities, capital relationships and strategic business development.", image: images.city },
  { title: "International Trade", text: "Cross-border sourcing, distribution, buyers, suppliers and market access.", image: images.tradePort },
];

export const processSteps = [
  { n: "01", title: "Identify", text: "Understand the opportunity, objective, market and relationships required." },
  { n: "02", title: "Connect", text: "Bring together qualified partners, capital, suppliers, buyers, technology and expertise." },
  { n: "03", title: "Structure", text: "Help shape the commercial, strategic or financial path forward." },
  { n: "04", title: "Execute", text: "Remain engaged as the opportunity moves from introduction toward execution." },
];

export const interestOptions = [
  "International Trade",
  "Trade Financing",
  "Project Financing",
  "Metals & Commodities",
  "Energy",
  "Investment",
  "AI & Technology",
  "Medical Solutions",
  "Electronics",
  "Communications",
  "E-Commerce",
  "Business Development",
  "Other",
];

/**
 * Leadership profiles for the About page. The section stays hidden until at least one entry is added.
 * Optional `image` should be a portrait placed in /public/images/leadership/.
 */
export const leadership: { name: string; role: string; bio: string; image?: Img }[] = [];

export function pageMeta(path: string, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path },
    twitter: { title: `${title} | ${site.name}`, description },
  };
}
