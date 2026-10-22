// Business destinations supplied directly by Louis via the user, October 2026.
// San Salvador interpreted as El Salvador; Holland normalized to Netherlands.
// Puerto Rico is recorded as a territory, not an additional sovereign country.
export const businessMarkets = [
  {
    "name": "Canada",
    "id": "CAN"
  },
  {
    "name": "United States",
    "id": "USA"
  },
  {
    "name": "Mexico",
    "id": "MEX"
  },
  {
    "name": "Guatemala",
    "id": "GTM"
  },
  {
    "name": "Honduras",
    "id": "HND"
  },
  {
    "name": "El Salvador",
    "id": "SLV"
  },
  {
    "name": "Nicaragua",
    "id": "NIC"
  },
  {
    "name": "Costa Rica",
    "id": "CRI"
  },
  {
    "name": "Panama",
    "id": "PAN"
  },
  {
    "name": "Colombia",
    "id": "COL"
  },
  {
    "name": "Peru",
    "id": "PER"
  },
  {
    "name": "Bolivia",
    "id": "BOL"
  },
  {
    "name": "Chile",
    "id": "CHL"
  },
  {
    "name": "Argentina",
    "id": "ARG"
  },
  {
    "name": "Brazil",
    "id": "BRA"
  },
  {
    "name": "Uruguay",
    "id": "URY"
  },
  {
    "name": "Venezuela",
    "id": "VEN"
  },
  {
    "name": "Puerto Rico",
    "id": "PRI"
  },
  {
    "name": "United Kingdom",
    "id": "GBR"
  },
  {
    "name": "Sweden",
    "id": "SWE"
  },
  {
    "name": "Norway",
    "id": "NOR"
  },
  {
    "name": "Denmark",
    "id": "DNK"
  },
  {
    "name": "Finland",
    "id": "FIN"
  },
  {
    "name": "Poland",
    "id": "POL"
  },
  {
    "name": "Germany",
    "id": "DEU"
  },
  {
    "name": "Netherlands",
    "id": "NLD"
  },
  {
    "name": "Belgium",
    "id": "BEL"
  },
  {
    "name": "France",
    "id": "FRA"
  },
  {
    "name": "Spain",
    "id": "ESP"
  },
  {
    "name": "Portugal",
    "id": "PRT"
  },
  {
    "name": "Italy",
    "id": "ITA"
  },
  {
    "name": "Greece",
    "id": "GRC"
  },
  {
    "name": "Serbia",
    "id": "SRB"
  },
  {
    "name": "Croatia",
    "id": "HRV"
  },
  {
    "name": "Slovenia",
    "id": "SVN"
  },
  {
    "name": "Austria",
    "id": "AUT"
  },
  {
    "name": "Switzerland",
    "id": "CHE"
  },
  {
    "name": "Lithuania",
    "id": "LTU"
  },
  {
    "name": "Russia",
    "id": "RUS"
  },
  {
    "name": "Hungary",
    "id": "HUN"
  },
  {
    "name": "Türkiye",
    "id": "TUR"
  },
  {
    "name": "Lebanon",
    "id": "LBN"
  },
  {
    "name": "Cyprus",
    "id": "CYP"
  },
  {
    "name": "Israel",
    "id": "ISR"
  },
  {
    "name": "Kuwait",
    "id": "KWT"
  },
  {
    "name": "United Arab Emirates",
    "id": "ARE"
  },
  {
    "name": "Saudi Arabia",
    "id": "SAU"
  },
  {
    "name": "India",
    "id": "IND"
  },
  {
    "name": "Thailand",
    "id": "THA"
  },
  {
    "name": "Malaysia",
    "id": "MYS"
  },
  {
    "name": "Philippines",
    "id": "PHL"
  },
  {
    "name": "Singapore",
    "id": "SGP"
  },
  {
    "name": "Indonesia",
    "id": "IDN"
  },
  {
    "name": "Australia",
    "id": "AUS"
  },
  {
    "name": "New Zealand",
    "id": "NZL"
  },
  {
    "name": "Japan",
    "id": "JPN"
  },
  {
    "name": "China",
    "id": "CHN"
  },
  {
    "name": "Morocco",
    "id": "MAR"
  },
  {
    "name": "Egypt",
    "id": "EGY"
  },
  {
    "name": "South Africa",
    "id": "ZAF"
  },
  {
    "name": "Kenya",
    "id": "KEN"
  }
] as const;
export const experienceStats = { countries: businessMarkets.length, languages: 2, relationshipYears: 30 } as const;
export type ConnectionPair = { from: string; to: string };

// A visual branching tree, not a historical sequence of business transactions.
// Each frontier reaches new markets only, so every market has one arrival.
export function networkWaves(): ConnectionPair[][] {
  const priority = ['JPN', 'SGP', 'AUS', 'NZL', 'PHL', 'IND', 'MYS', 'THA'];
  const remaining: string[] = [...priority, ...businessMarkets.map(market => market.id).filter(id => !['USA', 'CHN', ...priority].includes(id))];
  const waves: ConnectionPair[][] = [[{from: 'USA', to: 'CHN'}], [{from: 'CHN', to: remaining.shift()!}, {from: 'CHN', to: remaining.shift()!}]];
  let frontier = waves[1].map(pair => pair.to);
  while (remaining.length) {
    const parentCount = Math.min(frontier.length, Math.max(1, Math.floor(remaining.length / 2)));
    const targetCount = Math.min(remaining.length, parentCount * 3);
    const branches = Array(parentCount).fill(Math.floor(targetCount / parentCount));
    for (let i = 0; i < targetCount % parentCount; i++) branches[i]++;
    const wave: ConnectionPair[] = [];
    frontier.slice(0, parentCount).forEach((from, i) => {
      for (let n = 0; n < branches[i]; n++) wave.push({from, to: remaining.shift()!});
    });
    waves.push(wave);
    frontier = wave.map(pair => pair.to);
  }
  return waves;
}
export function overviewConnections(): ConnectionPair[] { return networkWaves().flat(); }
