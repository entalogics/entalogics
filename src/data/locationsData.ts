// US States and major cities for location-based SEO
export const usStates = [
  { name: "California", abbreviation: "CA", majorCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento"] },
  { name: "Texas", abbreviation: "TX", majorCities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"] },
  { name: "Florida", abbreviation: "FL", majorCities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale"] },
  { name: "New York", abbreviation: "NY", majorCities: ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse"] },
  { name: "Illinois", abbreviation: "IL", majorCities: ["Chicago", "Aurora", "Naperville", "Peoria", "Rockford"] },
  { name: "Pennsylvania", abbreviation: "PA", majorCities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"] },
  { name: "Ohio", abbreviation: "OH", majorCities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"] },
  { name: "Georgia", abbreviation: "GA", majorCities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens"] },
  { name: "North Carolina", abbreviation: "NC", majorCities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"] },
  { name: "Michigan", abbreviation: "MI", majorCities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Lansing"] },
  { name: "New Jersey", abbreviation: "NJ", majorCities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"] },
  { name: "Virginia", abbreviation: "VA", majorCities: ["Virginia Beach", "Norfolk", "Richmond", "Chesapeake", "Newport News"] },
  { name: "Washington", abbreviation: "WA", majorCities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"] },
  { name: "Arizona", abbreviation: "AZ", majorCities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"] },
  { name: "Massachusetts", abbreviation: "MA", majorCities: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge"] },
  { name: "Tennessee", abbreviation: "TN", majorCities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Murfreesboro"] },
  { name: "Indiana", abbreviation: "IN", majorCities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"] },
  { name: "Missouri", abbreviation: "MO", majorCities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence"] },
  { name: "Maryland", abbreviation: "MD", majorCities: ["Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie"] },
  { name: "Wisconsin", abbreviation: "WI", majorCities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"] },
  { name: "Colorado", abbreviation: "CO", majorCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"] },
  { name: "Minnesota", abbreviation: "MN", majorCities: ["Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington"] },
  { name: "South Carolina", abbreviation: "SC", majorCities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill"] },
  { name: "Alabama", abbreviation: "AL", majorCities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"] },
  { name: "Louisiana", abbreviation: "LA", majorCities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"] },
  { name: "Kentucky", abbreviation: "KY", majorCities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"] },
  { name: "Oregon", abbreviation: "OR", majorCities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro"] },
  { name: "Oklahoma", abbreviation: "OK", majorCities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton"] },
  { name: "Connecticut", abbreviation: "CT", majorCities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"] },
  { name: "Utah", abbreviation: "UT", majorCities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"] },
  { name: "Iowa", abbreviation: "IA", majorCities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"] },
  { name: "Nevada", abbreviation: "NV", majorCities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"] },
  { name: "Arkansas", abbreviation: "AR", majorCities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"] },
  { name: "Mississippi", abbreviation: "MS", majorCities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"] },
  { name: "Kansas", abbreviation: "KS", majorCities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"] },
  { name: "New Mexico", abbreviation: "NM", majorCities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"] },
  { name: "Nebraska", abbreviation: "NE", majorCities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"] },
  { name: "West Virginia", abbreviation: "WV", majorCities: ["Charleston", "Huntington", "Parkersburg", "Morgantown", "Wheeling"] },
  { name: "Idaho", abbreviation: "ID", majorCities: ["Boise", "Nampa", "Meridian", "Idaho Falls", "Pocatello"] },
  { name: "Hawaii", abbreviation: "HI", majorCities: ["Honolulu", "Pearl City", "Hilo", "Kailua", "Kaneohe"] },
  { name: "New Hampshire", abbreviation: "NH", majorCities: ["Manchester", "Nashua", "Concord", "Derry", "Rochester"] },
  { name: "Maine", abbreviation: "ME", majorCities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"] },
  { name: "Montana", abbreviation: "MT", majorCities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte"] },
  { name: "Rhode Island", abbreviation: "RI", majorCities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"] },
  { name: "Delaware", abbreviation: "DE", majorCities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"] },
  { name: "South Dakota", abbreviation: "SD", majorCities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"] },
  { name: "North Dakota", abbreviation: "ND", majorCities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"] },
  { name: "Alaska", abbreviation: "AK", majorCities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"] },
  { name: "Vermont", abbreviation: "VT", majorCities: ["Burlington", "Essex", "South Burlington", "Colchester", "Rutland"] },
  { name: "Wyoming", abbreviation: "WY", majorCities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"] },
]

// Generate location-based SEO keywords
export const generateLocationKeywords = (techStack: string, state?: string, city?: string): string => {
  const baseKeywords = [
    `top ${techStack} developers`,
    `best ${techStack} developers`,
    `hire ${techStack} developers`,
    `${techStack} development company`,
    `expert ${techStack} developers`,
    `professional ${techStack} developers`,
  ]

  if (state) {
    const stateKeywords = [
      ...baseKeywords.map(k => `${k} in ${state}`),
      `${techStack} developers ${state}`,
      `top ${techStack} company ${state}`,
      `best ${techStack} developers ${state}`,
    ]
    
    if (city) {
      return [
        ...stateKeywords,
        ...baseKeywords.map(k => `${k} in ${city}, ${state}`),
        `${techStack} developers ${city}`,
        `top ${techStack} company ${city}`,
      ].join(", ")
    }
    
    return stateKeywords.join(", ")
  }

  return [
    ...baseKeywords,
    `${techStack} developers USA`,
    `top ${techStack} company USA`,
    `best ${techStack} developers United States`,
  ].join(", ")
}

// Generate location-based meta description
export const generateLocationDescription = (
  techStack: string,
  state?: string,
  city?: string
): string => {
  if (city && state) {
    return `Hire top ${techStack} developers in ${city}, ${state}. Entalogics provides expert ${techStack} development services with senior developers. Best ${techStack} company serving ${city} and ${state}.`
  }
  
  if (state) {
    return `Hire top ${techStack} developers in ${state}. Entalogics provides expert ${techStack} development services with senior developers. Best ${techStack} company serving ${state} and nationwide.`
  }
  
  return `Hire top ${techStack} developers in the USA. Entalogics provides expert ${techStack} development services with senior developers. Best ${techStack} company serving clients nationwide.`
}

// Get all states as array of strings
export const getAllStates = (): string[] => {
  return usStates.map(state => state.name)
}

// Get cities for a specific state
export const getCitiesByState = (stateName: string): string[] => {
  const state = usStates.find(s => s.name === stateName)
  return state?.majorCities || []
}

