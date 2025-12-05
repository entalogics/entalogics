// Top 15-20 Countries with Highest Software Development Buyer Markets
// Focused on countries where actual buyers and high-value clients are available

export interface TopLocation {
  country: string
  code: string
  priority: number // 1 = highest priority
  states?: State[]
  majorCities: string[]
  description: string
}

export interface State {
  name: string
  abbreviation?: string
  majorCities: string[]
}

// Top Priority Locations - Based on actual buyer markets
export const topLocations: TopLocation[] = [
  // Tier 1: Highest Buyer Markets
  {
    country: "United States",
    code: "US",
    priority: 1,
    description: "Largest software development market globally with highest buyer concentration",
    states: [
      { name: "California", abbreviation: "CA", majorCities: ["San Francisco", "Los Angeles", "San Diego", "San Jose", "Sacramento", "Oakland", "Fresno", "Long Beach", "Santa Ana", "Anaheim"] },
      { name: "Texas", abbreviation: "TX", majorCities: ["Austin", "Dallas", "Houston", "San Antonio", "Fort Worth", "Plano", "Irving", "Arlington", "Corpus Christi", "Laredo"] },
      { name: "New York", abbreviation: "NY", majorCities: ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse", "Yonkers", "Utica", "New Rochelle", "Mount Vernon"] },
      { name: "Florida", abbreviation: "FL", majorCities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale", "Tallahassee", "St. Petersburg", "Hialeah", "Port St. Lucie"] },
      { name: "Illinois", abbreviation: "IL", majorCities: ["Chicago", "Aurora", "Naperville", "Peoria", "Rockford", "Elgin", "Springfield", "Joliet", "Waukegan"] },
      { name: "Massachusetts", abbreviation: "MA", majorCities: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford", "Brockton", "Quincy", "Lynn"] },
      { name: "Washington", abbreviation: "WA", majorCities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Everett", "Kent", "Yakima", "Renton"] },
      { name: "Colorado", abbreviation: "CO", majorCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo"] },
      { name: "North Carolina", abbreviation: "NC", majorCities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington"] },
      { name: "Georgia", abbreviation: "GA", majorCities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Sandy Springs", "Roswell", "Macon"] },
    ],
    majorCities: ["San Francisco", "New York City", "Los Angeles", "Austin", "Seattle", "Boston", "Chicago", "Denver", "Atlanta", "Miami"]
  },
  
  // Tier 2: High-Value Markets
  {
    country: "United Kingdom",
    code: "GB",
    priority: 2,
    description: "Second largest software market in Europe with strong startup ecosystem",
    states: [
      { name: "England", majorCities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Sheffield", "Bristol", "Leicester", "Coventry", "Nottingham", "Newcastle", "Southampton", "Portsmouth", "Brighton", "Reading"] },
      { name: "Scotland", majorCities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness", "Perth", "Stirling", "Ayr"] },
      { name: "Wales", majorCities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Barry", "Caerphilly"] },
      { name: "Northern Ireland", majorCities: ["Belfast", "Derry", "Lisburn", "Newry", "Bangor"] },
    ],
    majorCities: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Liverpool", "Leeds", "Bristol", "Cardiff", "Belfast"]
  },
  
  {
    country: "Canada",
    code: "CA",
    priority: 3,
    description: "Strong tech hubs with high-value enterprise clients",
    majorCities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener"]
  },
  
  {
    country: "Australia",
    code: "AU",
    priority: 4,
    description: "Growing tech market with enterprise and startup buyers",
    majorCities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Sunshine Coast", "Wollongong"]
  },
  
  {
    country: "Germany",
    code: "DE",
    priority: 5,
    description: "Largest European economy with strong enterprise software demand",
    majorCities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"]
  },
  
  {
    country: "Singapore",
    code: "SG",
    priority: 6,
    description: "Tech hub of Southeast Asia with high concentration of tech companies",
    majorCities: ["Singapore"]
  },
  
  {
    country: "Japan",
    code: "JP",
    priority: 7,
    description: "Third largest economy with strong enterprise software market",
    majorCities: ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama"]
  },
  
  {
    country: "France",
    code: "FR",
    priority: 8,
    description: "Major European tech hub with growing startup ecosystem",
    majorCities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"]
  },
  
  {
    country: "Netherlands",
    code: "NL",
    priority: 9,
    description: "Tech-forward country with high startup density",
    majorCities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Groningen", "Tilburg", "Almere", "Breda"]
  },
  
  {
    country: "Switzerland",
    code: "CH",
    priority: 10,
    description: "High-value enterprise market with financial services tech demand",
    majorCities: ["Zurich", "Geneva", "Basel", "Bern", "Lausanne", "Winterthur", "Lucerne", "St. Gallen"]
  },
  
  {
    country: "Sweden",
    code: "SE",
    priority: 11,
    description: "Strong tech ecosystem with unicorn startups",
    majorCities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg"]
  },
  
  {
    country: "United Arab Emirates",
    code: "AE",
    priority: 12,
    description: "Middle East tech hub with high-value enterprise clients",
    majorCities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah"]
  },
  
  {
    country: "India",
    code: "IN",
    priority: 13,
    description: "Fast-growing tech market with enterprise and startup buyers",
    majorCities: ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"]
  },
  
  {
    country: "China",
    code: "CN",
    priority: 14,
    description: "Second largest economy with massive tech market",
    majorCities: ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chengdu", "Hangzhou", "Wuhan", "Xi'an", "Nanjing", "Tianjin"]
  },
  
  {
    country: "Israel",
    code: "IL",
    priority: 15,
    description: "Startup nation with high concentration of tech companies",
    majorCities: ["Tel Aviv", "Jerusalem", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beer Sheva"]
  },
  
  {
    country: "Ireland",
    code: "IE",
    priority: 16,
    description: "European tech hub with many multinational tech companies",
    majorCities: ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords"]
  },
  
  {
    country: "Spain",
    code: "ES",
    priority: 17,
    description: "Growing tech ecosystem with startup acceleration",
    majorCities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas"]
  },
  
  {
    country: "Italy",
    code: "IT",
    priority: 18,
    description: "Major European economy with enterprise software demand",
    majorCities: ["Milan", "Rome", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari"]
  },
  
  {
    country: "South Korea",
    code: "KR",
    priority: 19,
    description: "Tech-forward economy with strong enterprise market",
    majorCities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon"]
  },
  
  {
    country: "Belgium",
    code: "BE",
    priority: 20,
    description: "European tech hub with strong enterprise presence",
    majorCities: ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven"]
  },
]

// Get top N countries
export const getTopCountries = (limit: number = 20): TopLocation[] => {
  return topLocations.slice(0, limit)
}

// Get all cities from top locations
export const getAllTopCities = (): string[] => {
  const cities: string[] = []
  topLocations.forEach(location => {
    if (location.states) {
      location.states.forEach(state => {
        cities.push(...state.majorCities)
      })
    }
    cities.push(...location.majorCities)
  })
  return [...new Set(cities)] // Remove duplicates
}

// Generate focused location keywords
export const generateFocusedLocationKeywords = (techStack: string): string => {
  const top10 = topLocations.slice(0, 10)
  const keywords: string[] = [
    `top ${techStack} developers`,
    `best ${techStack} developers`,
    `hire ${techStack} developers`,
  ]
  
  top10.forEach(location => {
    keywords.push(
      `${techStack} developers ${location.country}`,
      `top ${techStack} company ${location.country}`,
      `hire ${techStack} developers ${location.country}`
    )
    
    // Add top cities for USA and UK
    if (location.country === "United States" && location.states) {
      location.states.slice(0, 5).forEach(state => {
        keywords.push(`${techStack} developers ${state.name}`)
        state.majorCities.slice(0, 3).forEach(city => {
          keywords.push(`${techStack} developers ${city}`)
        })
      })
    }
    
    if (location.country === "United Kingdom" && location.states) {
      location.states.forEach(state => {
        keywords.push(`${techStack} developers ${state.name}`)
        state.majorCities.slice(0, 2).forEach(city => {
          keywords.push(`${techStack} developers ${city}`)
        })
      })
    }
    
    // Add top cities for other countries
    location.majorCities.slice(0, 3).forEach(city => {
      keywords.push(`${techStack} developers ${city}`)
    })
  })
  
  return keywords.join(", ")
}

// Generate focused location description
export const generateFocusedLocationDescription = (techStack: string): string => {
  const topCountries = topLocations.slice(0, 10).map(l => l.country).join(", ")
  return `Hire top ${techStack} developers in ${topCountries}, and 10+ more countries. Entalogics provides expert ${techStack} development services with senior developers. Best ${techStack} company serving clients worldwide.`
}

