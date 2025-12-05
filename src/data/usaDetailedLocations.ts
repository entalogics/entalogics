// Detailed USA locations - States, Cities, and Specific Areas
// Most comprehensive coverage for USA market

export interface USState {
  name: string
  abbreviation: string
  majorCities: string[]
  techHubs?: string[] // Specific tech hubs/neighborhoods within cities
  secondaryCities?: string[] // Additional important cities
}

export interface CityDetail {
  city: string
  neighborhoods?: string[] // Specific neighborhoods/districts
  techHubs?: string[] // Tech hubs within the city
}

// Comprehensive USA States with detailed cities and locations
export const usaDetailedStates: USState[] = [
  {
    name: "California",
    abbreviation: "CA",
    majorCities: [
      "San Francisco", "Los Angeles", "San Diego", "San Jose", "Sacramento",
      "Oakland", "Fresno", "Long Beach", "Santa Ana", "Anaheim", "Riverside",
      "Stockton", "Irvine", "Chula Vista", "Fremont", "San Bernardino", "Modesto",
      "Fontana", "Oxnard", "Moreno Valley", "Huntington Beach", "Glendale", "Santa Clarita"
    ],
    techHubs: [
      "Silicon Valley", "Palo Alto", "Mountain View", "Sunnyvale", "Cupertino",
      "Santa Monica", "Venice", "Playa Vista", "Beverly Hills", "Hollywood",
      "Downtown LA", "Westside", "South Bay", "East Bay", "Marina District",
      "Mission Bay", "SOMA", "Financial District SF", "Hayes Valley"
    ],
    secondaryCities: [
      "Bakersfield", "Santa Barbara", "Santa Cruz", "Berkeley", "Pasadena",
      "Torrance", "Orange", "Fullerton", "Garden Grove", "Oceanside"
    ]
  },
  {
    name: "Texas",
    abbreviation: "TX",
    majorCities: [
      "Austin", "Dallas", "Houston", "San Antonio", "Fort Worth", "Plano",
      "Irving", "Arlington", "Corpus Christi", "Laredo", "Lubbock", "Garland",
      "Amarillo", "Frisco", "McKinney", "Grand Prairie", "Brownsville", "Killeen",
      "Pasadena", "Round Rock", "Denton", "Abilene", "Beaumont", "Carrollton"
    ],
    techHubs: [
      "Silicon Hills", "Domain", "East Austin", "South Austin", "Downtown Austin",
      "Uptown Dallas", "Deep Ellum", "Bishop Arts", "Design District", "Medical Center",
      "The Woodlands", "Sugar Land", "Katy", "Energy Corridor", "Galleria"
    ],
    secondaryCities: [
      "El Paso", "McAllen", "Waco", "Tyler", "College Station", "Midland",
      "Odessa", "Temple", "Longview", "Wichita Falls"
    ]
  },
  {
    name: "New York",
    abbreviation: "NY",
    majorCities: [
      "New York City", "Buffalo", "Rochester", "Albany", "Syracuse", "Yonkers",
      "Utica", "New Rochelle", "Mount Vernon", "Schenectady", "White Plains",
      "Troy", "Niagara Falls", "Binghamton", "Freeport", "Valley Stream"
    ],
    techHubs: [
      "Silicon Alley", "Flatiron District", "SoHo", "Tribeca", "Chelsea",
      "Greenwich Village", "Upper East Side", "Upper West Side", "Brooklyn Heights",
      "DUMBO", "Williamsburg", "Long Island City", "Astoria", "Flushing",
      "Financial District", "Midtown", "Lower East Side", "East Village"
    ],
    secondaryCities: [
      "Ithaca", "Saratoga Springs", "Kingston", "Poughkeepsie", "Watertown",
      "Elmira", "Jamestown", "Rome", "Cortland", "Oswego"
    ]
  },
  {
    name: "Florida",
    abbreviation: "FL",
    majorCities: [
      "Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale", "Tallahassee",
      "St. Petersburg", "Hialeah", "Port St. Lucie", "Cape Coral", "Pembroke Pines",
      "Hollywood", "Miramar", "Gainesville", "Coral Springs", "Miami Gardens",
      "Clearwater", "Palm Bay", "West Palm Beach", "Lakeland", "Pompano Beach"
    ],
    techHubs: [
      "Wynwood", "Brickell", "Downtown Miami", "South Beach", "Coconut Grove",
      "Aventura", "Doral", "Coral Gables", "Key Biscayne", "Tampa Bay",
      "Ybor City", "Hyde Park", "South Tampa", "Downtown Orlando", "Lake Nona",
      "Winter Park", "Celebration", "Dr. Phillips"
    ],
    secondaryCities: [
      "Deltona", "Boynton Beach", "Fort Myers", "Kissimmee", "Plantation",
      "Davie", "Boca Raton", "Melbourne", "Pensacola", "Sarasota"
    ]
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    majorCities: [
      "Chicago", "Aurora", "Naperville", "Peoria", "Rockford", "Elgin",
      "Springfield", "Joliet", "Waukegan", "Cicero", "Champaign", "Bloomington",
      "Arlington Heights", "Evanston", "Schaumburg", "Bolingbrook", "Palatine",
      "Skokie", "Des Plaines", "Orland Park", "Tinley Park", "Oak Lawn"
    ],
    techHubs: [
      "Silicon Prairie", "River North", "West Loop", "Loop", "Gold Coast",
      "Lincoln Park", "Wicker Park", "Bucktown", "Lakeview", "Lincoln Square",
      "Old Town", "Streeterville", "Near North Side", "Fulton Market",
      "Naperville Tech Corridor", "Schaumburg Business District"
    ],
    secondaryCities: [
      "Normal", "Decatur", "Wheaton", "Crystal Lake", "Buffalo Grove",
      "Bartlett", "Urbana", "Carbondale", "Quincy", "Mount Prospect"
    ]
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    majorCities: [
      "Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford",
      "Brockton", "Quincy", "Lynn", "Fall River", "Newton", "Lawrence",
      "Somerville", "Framingham", "Haverhill", "Waltham", "Malden", "Brookline"
    ],
    techHubs: [
      "Kendall Square", "Seaport District", "Back Bay", "Financial District",
      "South End", "Fenway", "Allston", "Brighton", "Cambridgeport", "East Cambridge",
      "Innovation District", "Fort Point", "Charlestown", "Somerville Union Square",
      "Route 128 Corridor", "Waltham Tech Hub"
    ],
    secondaryCities: [
      "Beverly", "Peabody", "Medford", "Taunton", "Barnstable",
      "Pittsfield", "Attleboro", "Everett", "Salem", "Methuen"
    ]
  },
  {
    name: "Washington",
    abbreviation: "WA",
    majorCities: [
      "Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Everett",
      "Kent", "Yakima", "Renton", "Spokane Valley", "Federal Way", "Bellingham",
      "Kennewick", "Auburn", "Pasco", "Marysville", "Lakewood", "Redmond"
    ],
    techHubs: [
      "South Lake Union", "Pioneer Square", "Capitol Hill", "Fremont", "Ballard",
      "Queen Anne", "Downtown Seattle", "Belltown", "Denny Triangle", "SLU",
      "Bellevue Downtown", "Redmond Tech Corridor", "Kirkland", "Issaquah",
      "Eastside", "Microsoft Campus", "Amazon HQ"
    ],
    secondaryCities: [
      "Olympia", "Richland", "Shoreline", "Burien", "Lacey",
      "Longview", "Pullman", "Wenatchee", "Mount Vernon", "Tukwila"
    ]
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    majorCities: [
      "Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood",
      "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial", "Boulder",
      "Greeley", "Longmont", "Loveland", "Grand Junction", "Broomfield"
    ],
    techHubs: [
      "LoDo", "RiNo", "Highlands", "Cherry Creek", "Tech Center",
      "Boulder Tech Hub", "Fort Collins Old Town", "Downtown Denver",
      "Golden Triangle", "Capitol Hill", "Five Points", "Platte Valley"
    ],
    secondaryCities: [
      "Commerce City", "Parker", "Littleton", "Northglenn", "Brighton",
      "Englewood", "Wheat Ridge", "Montrose", "Durango", "Grand Junction"
    ]
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    majorCities: [
      "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem",
      "Fayetteville", "Cary", "Wilmington", "High Point", "Concord", "Asheville",
      "Gastonia", "Jacksonville", "Chapel Hill", "Rocky Mount", "Burlington"
    ],
    techHubs: [
      "Research Triangle Park", "Uptown Charlotte", "South End", "NoDa",
      "Plaza Midwood", "Downtown Raleigh", "North Hills", "Cameron Village",
      "Durham Downtown", "American Tobacco District", "Brier Creek"
    ],
    secondaryCities: [
      "Hickory", "Goldsboro", "Mooresville", "Salisbury", "Greenville",
      "Kannapolis", "Apex", "Matthews", "Sanford", "Thomasville"
    ]
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    majorCities: [
      "Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Sandy Springs",
      "Roswell", "Macon", "Johns Creek", "Albany", "Warner Robins", "Alpharetta",
      "Marietta", "Valdosta", "Smyrna", "Dunwoody", "Rome", "Gainesville"
    ],
    techHubs: [
      "Tech Square", "Midtown", "Buckhead", "Old Fourth Ward", "Poncey-Highland",
      "Virginia-Highland", "Inman Park", "Westside", "Downtown Atlanta",
      "Alpharetta Tech Corridor", "Perimeter", "Cumberland", "Gwinnett Tech"
    ],
    secondaryCities: [
      "Peachtree Corners", "Kennesaw", "Lawrenceville", "Duluth", "Carrollton",
      "Statesboro", "Dalton", "Griffin", "Newnan", "Douglasville"
    ]
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    majorCities: [
      "Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton",
      "Bethlehem", "Lancaster", "Harrisburg", "Altoona", "York", "State College",
      "Wilkes-Barre", "Chester", "Williamsport", "Johnstown", "Easton"
    ],
    techHubs: [
      "University City", "Old City", "Fishtown", "Northern Liberties",
      "Center City", "Rittenhouse", "Society Hill", "South Philly",
      "Strip District", "Lawrenceville", "Shadyside", "Oakland", "Downtown Pittsburgh"
    ],
    secondaryCities: [
      "Norristown", "Pottstown", "Chambersburg", "Lebanon", "New Castle",
      "Butler", "McKeesport", "Monroeville", "Bensalem", "Lower Merion"
    ]
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    majorCities: [
      "Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton",
      "Parma", "Canton", "Youngstown", "Lorain", "Hamilton", "Springfield",
      "Kettering", "Elyria", "Lakewood", "Cuyahoga Falls", "Middletown"
    ],
    techHubs: [
      "Short North", "Arena District", "Downtown Columbus", "German Village",
      "Italian Village", "Franklinton", "Easton", "Polaris",
      "Downtown Cleveland", "Flats", "Tremont", "Ohio City",
      "Over-the-Rhine", "Downtown Cincinnati", "Hyde Park"
    ],
    secondaryCities: [
      "Newark", "Mansfield", "Findlay", "Warren", "Lancaster",
      "Lima", "Huber Heights", "Marion", "Grove City", "Stow"
    ]
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    majorCities: [
      "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Lansing",
      "Ann Arbor", "Flint", "Dearborn", "Livonia", "Troy", "Westland",
      "Farmington Hills", "Kalamazoo", "Wyoming", "Southfield", "Rochester Hills"
    ],
    techHubs: [
      "Downtown Detroit", "Midtown", "Corktown", "New Center", "Eastern Market",
      "Downtown Ann Arbor", "Campus District", "Kerrytown",
      "Downtown Grand Rapids", "Eastown", "Heritage Hill"
    ],
    secondaryCities: [
      "Taylor", "St. Clair Shores", "Pontiac", "Battle Creek", "Saginaw",
      "Jackson", "Muskegon", "Bay City", "Holland", "Mount Pleasant"
    ]
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    majorCities: [
      "Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Woodbridge",
      "Lakewood", "Toms River", "Hamilton", "Trenton", "Clifton", "Camden",
      "Brick", "Cherry Hill", "Passaic", "Union City", "Old Bridge"
    ],
    techHubs: [
      "Newark Downtown", "Journal Square", "Exchange Place", "Hoboken",
      "Jersey City Waterfront", "Princeton", "New Brunswick", "Edison Tech Corridor"
    ],
    secondaryCities: [
      "Bayonne", "Vineland", "New Brunswick", "Hackensack", "Sayreville",
      "Atlantic City", "Plainfield", "West New York", "Bergenfield", "Garfield"
    ]
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    majorCities: [
      "Virginia Beach", "Norfolk", "Richmond", "Chesapeake", "Newport News",
      "Alexandria", "Hampton", "Portsmouth", "Suffolk", "Roanoke", "Lynchburg",
      "Harrisonburg", "Leesburg", "Charlottesville", "Blacksburg", "Danville"
    ],
    techHubs: [
      "Tysons Corner", "Reston", "Arlington", "Crystal City", "Ballston",
      "Rosslyn", "Old Town Alexandria", "Shockoe Bottom", "Scott's Addition",
      "Virginia Tech Corridor", "Dulles Tech Corridor"
    ],
    secondaryCities: [
      "Manassas", "Petersburg", "Fredericksburg", "Winchester", "Staunton",
      "Salem", "Martinsville", "Fairfax", "Falls Church", "Vienna"
    ]
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    majorCities: [
      "Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale",
      "Gilbert", "Tempe", "Peoria", "Surprise", "Yuma", "Avondale",
      "Goodyear", "Flagstaff", "Buckeye", "Lake Havasu City", "Casa Grande"
    ],
    techHubs: [
      "Downtown Phoenix", "Tempe Town Lake", "Scottsdale Old Town",
      "Chandler Tech Corridor", "Arizona State University", "Downtown Tempe",
      "Camelback Corridor", "Biltmore", "Arcadia"
    ],
    secondaryCities: [
      "Prescott", "Sierra Vista", "Oro Valley", "Maricopa", "Bullhead City",
      "Apache Junction", "Nogales", "Kingman", "Sedona", "Show Low"
    ]
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    majorCities: [
      "Nashville", "Memphis", "Knoxville", "Chattanooga", "Murfreesboro",
      "Clarksville", "Franklin", "Jackson", "Johnson City", "Bartlett",
      "Hendersonville", "Kingsport", "Collierville", "Smyrna", "Cleveland"
    ],
    techHubs: [
      "Music Row", "Gulch", "Downtown Nashville", "Germantown", "12 South",
      "East Nashville", "Midtown", "Downtown Memphis", "Beale Street",
      "Chattanooga Innovation District", "Southside"
    ],
    secondaryCities: [
      "Brentwood", "Columbia", "Spring Hill", "La Vergne", "Gallatin",
      "Cookeville", "Tullahoma", "Maryville", "Bristol", "Shelbyville"
    ]
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    majorCities: [
      "Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel",
      "Fishers", "Bloomington", "Hammond", "Gary", "Muncie", "Terre Haute",
      "Anderson", "Elkhart", "Kokomo", "Lafayette", "Noblesville"
    ],
    techHubs: [
      "Downtown Indianapolis", "Mass Ave", "Fountain Square", "Broad Ripple",
      "Carmel Arts District", "Fishers", "Purdue Research Park", "Notre Dame Area"
    ],
    secondaryCities: [
      "Greenwood", "Richmond", "Columbus", "Mishawaka", "Jeffersonville",
      "New Albany", "Michigan City", "Marion", "East Chicago", "Goshen"
    ]
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    majorCities: [
      "Kansas City", "St. Louis", "Springfield", "Columbia", "Independence",
      "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "St. Peters",
      "Blue Springs", "Florissant", "Joplin", "Chesterfield", "Jefferson City"
    ],
    techHubs: [
      "Crossroads", "Power & Light", "River Market", "Downtown KC",
      "Central West End", "The Loop", "Cortex Innovation Community",
      "Downtown St. Louis", "Clayton", "Chesterfield Valley"
    ],
    secondaryCities: [
      "Cape Girardeau", "O'Fallon", "St. Peters", "Ballwin", "Raytown",
      "Liberty", "Nixa", "Ozark", "Sedalia", "Ferguson"
    ]
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    majorCities: [
      "Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie",
      "Annapolis", "College Park", "Salisbury", "Laurel", "Greenbelt",
      "Cumberland", "Hagerstown", "Westminster", "Hyattsville", "Takoma Park"
    ],
    techHubs: [
      "Inner Harbor", "Fells Point", "Canton", "Federal Hill", "Mount Vernon",
      "Downtown Baltimore", "Bethesda", "Silver Spring", "Columbia",
      "Fort Meade Area", "National Harbor"
    ],
    secondaryCities: [
      "Elkton", "Aberdeen", "Bel Air", "Easton", "Ocean City",
      "Cambridge", "Frostburg", "Leonardtown", "Prince Frederick", "Waldorf"
    ]
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    majorCities: [
      "Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine",
      "Appleton", "Waukesha", "Oshkosh", "Eau Claire", "Janesville",
      "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac"
    ],
    techHubs: [
      "Third Ward", "East Side", "Downtown Milwaukee", "Water Street",
      "Capitol Square", "State Street", "University Avenue", "Downtown Madison"
    ],
    secondaryCities: [
      "Beloit", "Fitchburg", "Menomonee Falls", "Neenah", "Stevens Point",
      "Superior", "Beloit", "Middleton", "Beaver Dam", "Sun Prairie"
    ]
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    majorCities: [
      "Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington",
      "Brooklyn Park", "Plymouth", "St. Cloud", "Eagan", "Woodbury",
      "Maple Grove", "Coon Rapids", "Eden Prairie", "Minnetonka", "Burnsville"
    ],
    techHubs: [
      "North Loop", "Warehouse District", "Downtown East", "Uptown",
      "Northeast", "Downtown Minneapolis", "Lowertown", "Downtown St. Paul",
      "Mayo Clinic Area", "Rochester Downtown"
    ],
    secondaryCities: [
      "Mankato", "Moorhead", "Winona", "Richfield", "Apple Valley",
      "Blaine", "Lakeville", "Roseville", "Cottage Grove", "Inver Grove Heights"
    ]
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    majorCities: [
      "Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill",
      "Greenville", "Summerville", "Sumter", "Hilton Head Island", "Spartanburg",
      "Florence", "Aiken", "Myrtle Beach", "Anderson", "Greer"
    ],
    techHubs: [
      "Downtown Charleston", "Historic District", "Upper King", "East Side",
      "Downtown Greenville", "Main Street", "Falls Park", "West End",
      "Columbia Vista", "Congaree Vista", "Innovista"
    ],
    secondaryCities: [
      "Goose Creek", "Taylors", "Simpsonville", "Hanahan", "Lexington",
      "Conway", "Cayce", "Orangeburg", "Beaufort", "Georgetown"
    ]
  },
  {
    name: "Alabama",
    abbreviation: "AL",
    majorCities: [
      "Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa",
      "Hoover", "Dothan", "Auburn", "Decatur", "Madison", "Florence",
      "Gadsden", "Vestavia Hills", "Prattville", "Phenix City"
    ],
    techHubs: [
      "Downtown Birmingham", "Uptown", "Lakeview", "Five Points South",
      "Research Park", "Cummings Research Park", "Downtown Huntsville",
      "Auburn University Area", "Downtown Mobile"
    ],
    secondaryCities: [
      "Opelika", "Anniston", "Bessemer", "Homewood", "Fairhope",
      "Enterprise", "Athens", "Selma", "Oxford", "Troy"
    ]
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    majorCities: [
      "New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles",
      "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma", "Marrero",
      "Central", "Laplace", "Prairieville", "Metairie"
    ],
    techHubs: [
      "French Quarter", "CBD", "Warehouse District", "Garden District",
      "Uptown", "Marigny", "Bywater", "Downtown Baton Rouge", "Perkins Rowe"
    ],
    secondaryCities: [
      "Slidell", "Chalmette", "Harvey", "Terrytown", "Gretna",
      "Ruston", "Sulphur", "Natchitoches", "Thibodaux", "Hammond"
    ]
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    majorCities: [
      "Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington",
      "Hopkinsville", "Richmond", "Florence", "Georgetown", "Henderson",
      "Elizabethtown", "Nicholasville", "Jeffersontown", "Paducah", "Radcliff"
    ],
    techHubs: [
      "NuLu", "Downtown Louisville", "Highlands", "Butchertown",
      "Downtown Lexington", "Distillery District", "Chevy Chase"
    ],
    secondaryCities: [
      "Ashland", "Madisonville", "Murray", "St. Matthews", "Shively",
      "Newport", "Fort Thomas", "Fort Wright", "Independence", "Burlington"
    ]
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    majorCities: [
      "Portland", "Eugene", "Salem", "Gresham", "Hillsboro",
      "Bend", "Beaverton", "Medford", "Springfield", "Corvallis",
      "Albany", "Tigard", "Lake Oswego", "Keizer", "Grants Pass"
    ],
    techHubs: [
      "Pearl District", "Old Town", "Downtown Portland", "Lloyd District",
      "South Waterfront", "Eastside", "Silicon Forest", "Beaverton Tech",
      "Downtown Eugene", "University District"
    ],
    secondaryCities: [
      "McMinnville", "Redmond", "Tualatin", "Oregon City", "West Linn",
      "Roseburg", "Klamath Falls", "The Dalles", "Pendleton", "Coos Bay"
    ]
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    majorCities: [
      "Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton",
      "Edmond", "Moore", "Midwest City", "Enid", "Stillwater",
      "Muskogee", "Bartlesville", "Shawnee", "Owasso", "Ponca City"
    ],
    techHubs: [
      "Bricktown", "Downtown OKC", "Automobile Alley", "Plaza District",
      "Midtown", "Deep Deuce", "Downtown Tulsa", "Blue Dome", "Brady Arts"
    ],
    secondaryCities: [
      "McAlester", "Duncan", "Claremore", "Ada", "Durant",
      "Sapulpa", "Jenks", "Sand Springs", "Guthrie", "El Reno"
    ]
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    majorCities: [
      "Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury",
      "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich",
      "Hamden", "Meriden", "Bristol", "Milford", "West Haven"
    ],
    techHubs: [
      "Downtown Stamford", "Harbor Point", "Downtown Hartford", "Asylum Hill",
      "Downtown New Haven", "Yale Area", "Greenwich", "Norwalk SoNo"
    ],
    secondaryCities: [
      "Manchester", "Stratford", "Enfield", "Fairfield", "Glastonbury",
      "Branford", "Trumbull", "Wallingford", "Torrington", "Middletown"
    ]
  },
  {
    name: "Utah",
    abbreviation: "UT",
    majorCities: [
      "Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem",
      "Sandy", "Ogden", "St. George", "Layton", "Taylorsville",
      "South Jordan", "Lehi", "Murray", "Draper", "Logan"
    ],
    techHubs: [
      "Silicon Slopes", "Downtown SLC", "Sugar House", "The Avenues",
      "9th & 9th", "Liberty Wells", "Provo Downtown", "Orem Tech Corridor",
      "Lehi Tech Park", "Thanksgiving Point"
    ],
    secondaryCities: [
      "American Fork", "Riverton", "Roy", "Pleasant Grove", "Spanish Fork",
      "Cedar City", "Tooele", "Midvale", "Bountiful", "Clearfield"
    ]
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    majorCities: [
      "Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City",
      "Waterloo", "Council Bluffs", "Ames", "West Des Moines", "Dubuque",
      "Ankeny", "Urbandale", "Cedar Falls", "Marion", "Bettendorf"
    ],
    techHubs: [
      "East Village", "Court Avenue", "Downtown Des Moines", "Western Gateway",
      "Iowa City Downtown", "Ped Mall", "Coralville", "Ames Campus"
    ],
    secondaryCities: [
      "Mason City", "Burlington", "Marshalltown", "Ottumwa", "Fort Dodge",
      "Muscatine", "Clinton", "Cedar Rapids Metro", "Newton", "Keokuk"
    ]
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    majorCities: [
      "Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks",
      "Carson City", "Fernley", "Elko", "Mesquite", "Boulder City",
      "Fallon", "Winnemucca", "West Wendover", "Pahrump", "Ely"
    ],
    techHubs: [
      "Downtown Las Vegas", "Arts District", "Fremont East", "Summerlin",
      "Henderson Tech Corridor", "Reno Midtown", "Downtown Reno", "Tahoe-Reno"
    ],
    secondaryCities: [
      "Sunrise Manor", "Paradise", "Spring Valley", "Enterprise", "Sun Valley",
      "Incline Village", "Gardnerville", "Minden", "Yerington", "Caliente"
    ]
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    majorCities: [
      "Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro",
      "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville",
      "Hot Springs", "Texarkana", "Sherwood", "Jacksonville", "Russellville"
    ],
    techHubs: [
      "River Market", "Downtown Little Rock", "Argenta", "SoMa",
      "Fayetteville Downtown", "Dickson Street", "Bentonville Square",
      "Crystal Bridges Area", "Rogers Pinnacle Hills"
    ],
    secondaryCities: [
      "Paragould", "Cabot", "Searcy", "Van Buren", "Batesville",
      "El Dorado", "Blytheville", "Harrison", "Mountain Home", "Forrest City"
    ]
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    majorCities: [
      "Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi",
      "Meridian", "Tupelo", "Greenville", "Olive Branch", "Horn Lake",
      "Madison", "Starkville", "Columbus", "Pascagoula", "Vicksburg"
    ],
    techHubs: [
      "Downtown Jackson", "Fondren", "Belhaven", "Ridgeland",
      "Gulfport Downtown", "Biloxi Beach", "Hattiesburg Downtown"
    ],
    secondaryCities: [
      "Clinton", "Pearl", "Ocean Springs", "Laurel", "Natchez",
      "Gautier", "Long Beach", "Corinth", "McComb", "Brookhaven"
    ]
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    majorCities: [
      "Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka",
      "Lawrence", "Shawnee", "Manhattan", "Lenexa", "Salina",
      "Hutchinson", "Leavenworth", "Leawood", "Dodge City", "Garden City"
    ],
    techHubs: [
      "Downtown Wichita", "Old Town", "Delano", "Downtown Lawrence",
      "Mass Street", "Overland Park Tech", "Lenexa Tech Corridor"
    ],
    secondaryCities: [
      "Emporia", "Junction City", "Pittsburg", "Newton", "Great Bend",
      "McPherson", "Hays", "Coffeyville", "Arkansas City", "Atchison"
    ]
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    majorCities: [
      "Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell",
      "Farmington", "Clovis", "Hobbs", "Alamogordo", "Carlsbad",
      "Gallup", "Deming", "Los Alamos", "Chaparral", "Sunland Park"
    ],
    techHubs: [
      "Downtown Albuquerque", "Nob Hill", "Old Town", "Uptown",
      "Santa Fe Railyard", "Canyon Road", "Los Alamos Labs Area"
    ],
    secondaryCities: [
      "Las Vegas", "Portales", "Artesia", "Silver City", "Bloomfield",
      "Anthony", "Aztec", "Bernalillo", "Truth or Consequences", "Ruidoso"
    ]
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    majorCities: [
      "Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney",
      "Fremont", "Hastings", "North Platte", "Norfolk", "Columbus",
      "Papillion", "La Vista", "Scottsbluff", "South Sioux City", "Beatrice"
    ],
    techHubs: [
      "Old Market", "Downtown Omaha", "Aksarben", "Midtown",
      "Haymarket", "Downtown Lincoln", "Railyard", "Antelope Valley"
    ],
    secondaryCities: [
      "Chalco", "Gretna", "Blair", "York", "McCook",
      "Seward", "Falls City", "Nebraska City", "Schuyler", "Plattsmouth"
    ]
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    majorCities: [
      "Charleston", "Huntington", "Parkersburg", "Morgantown", "Wheeling",
      "Martinsburg", "Fairmont", "Beckley", "Clarksburg", "South Charleston",
      "St. Albans", "Vienna", "Cross Lanes", "Hurricane", "Teays Valley"
    ],
    techHubs: [
      "Downtown Charleston", "East End", "Downtown Morgantown",
      "WVU Area", "Downtown Huntington"
    ],
    secondaryCities: [
      "Bridgeport", "Dunbar", "Nitro", "Ripley", "Lewisburg",
      "Buckhannon", "Elkins", "Keyser", "Oak Hill", "Weirton"
    ]
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    majorCities: [
      "Boise", "Nampa", "Meridian", "Idaho Falls", "Pocatello",
      "Caldwell", "Coeur d'Alene", "Twin Falls", "Lewiston", "Post Falls",
      "Rexburg", "Ammon", "Chubbuck", "Mountain Home", "Jerome"
    ],
    techHubs: [
      "Downtown Boise", "Boise Bench", "North End", "Garden City",
      "Idaho Falls Downtown", "Coeur d'Alene Resort Area"
    ],
    secondaryCities: [
      "Eagle", "Kuna", "Sandpoint", "Burley", "Blackfoot",
      "Payette", "Moscow", "Weiser", "Fruitland", "Rathdrum"
    ]
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    majorCities: [
      "Honolulu", "Pearl City", "Hilo", "Kailua", "Kaneohe",
      "Kahului", "Ewa Gentry", "Mililani Town", "Kihei", "Makakilo",
      "Waipahu", "Schofield Barracks", "Royal Kunia", "Halawa", "Waimalu"
    ],
    techHubs: [
      "Downtown Honolulu", "Kakaako", "Ala Moana", "Waikiki",
      "Manoa", "Kailua Town", "Hilo Downtown"
    ],
    secondaryCities: [
      "Kapolei", "Lahaina", "Wailuku", "Lihue", "Aiea",
      "Waianae", "Nanakuli", "Pukalani", "Haiku", "Makawao"
    ]
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    majorCities: [
      "Manchester", "Nashua", "Concord", "Derry", "Rochester",
      "Dover", "Salem", "Merrimack", "Londonderry", "Hudson",
      "Keene", "Portsmouth", "Goffstown", "Bedford", "Exeter"
    ],
    techHubs: [
      "Downtown Manchester", "Milky Way", "Downtown Nashua",
      "Portsmouth Downtown", "Seacoast", "Dartmouth Area"
    ],
    secondaryCities: [
      "Laconia", "Hampton", "Durham", "Hanover", "Lebanon",
      "Claremont", "Berlin", "Somersworth", "Conway", "Plymouth"
    ]
  },
  {
    name: "Maine",
    abbreviation: "ME",
    majorCities: [
      "Portland", "Lewiston", "Bangor", "South Portland", "Auburn",
      "Biddeford", "Sanford", "Saco", "Augusta", "Westbrook",
      "Waterville", "Presque Isle", "Caribou", "Ellsworth", "Gorham"
    ],
    techHubs: [
      "Old Port", "Downtown Portland", "Arts District", "East Bayside",
      "Bangor Downtown", "Waterfront"
    ],
    secondaryCities: [
      "Scarborough", "Windham", "York", "Orono", "Brewer",
      "Bath", "Calais", "Rockland", "Bar Harbor", "Farmington"
    ]
  },
  {
    name: "Montana",
    abbreviation: "MT",
    majorCities: [
      "Billings", "Missoula", "Great Falls", "Bozeman", "Butte",
      "Helena", "Kalispell", "Havre", "Anaconda", "Miles City",
      "Livingston", "Laurel", "Belgrade", "Sidney", "Glendive"
    ],
    techHubs: [
      "Downtown Billings", "Downtown Missoula", "University District",
      "Downtown Bozeman", "Main Street", "Downtown Helena"
    ],
    secondaryCities: [
      "Whitefish", "Hamilton", "Polson", "Columbia Falls", "Lewistown",
      "Cut Bank", "Shelby", "Dillon", "Stevensville", "Red Lodge"
    ]
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    majorCities: [
      "Providence", "Warwick", "Cranston", "Pawtucket", "East Providence",
      "Woonsocket", "Newport", "Central Falls", "Westerly", "Cumberland",
      "North Providence", "South Kingstown", "Barrington", "Portsmouth", "Middletown"
    ],
    techHubs: [
      "Downtown Providence", "Federal Hill", "College Hill", "Wayland Square",
      "Newport Downtown", "Thames Street", "Bowen's Wharf"
    ],
    secondaryCities: [
      "Tiverton", "Smithfield", "Johnston", "Lincoln", "North Kingstown",
      "Bristol", "Narragansett", "Warren", "Glocester", "Scituate"
    ]
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    majorCities: [
      "Wilmington", "Dover", "Newark", "Middletown", "Smyrna",
      "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle",
      "Laurel", "Harrington", "Lewes", "Rehoboth Beach", "Dover Base"
    ],
    techHubs: [
      "Downtown Wilmington", "Riverfront", "Trolley Square",
      "University of Delaware Area", "Downtown Dover"
    ],
    secondaryCities: [
      "Bear", "Glasgow", "Hockessin", "Pike Creek", "Clayton",
      "Bridgeville", "Camden", "Felton", "Milton", "Ocean View"
    ]
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    majorCities: [
      "Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown",
      "Mitchell", "Yankton", "Pierre", "Huron", "Vermillion",
      "Spearfish", "Sturgis", "Madison", "Belle Fourche", "Hot Springs"
    ],
    techHubs: [
      "Downtown Sioux Falls", "Falls Park", "Downtown Rapid City",
      "Main Street", "Downtown Brookings"
    ],
    secondaryCities: [
      "Lead", "Deadwood", "Custer", "Chamberlain", "Winner",
      "Mobridge", "Milbank", "Sisseton", "Flandreau", "Redfield"
    ]
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    majorCities: [
      "Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo",
      "Williston", "Dickinson", "Mandan", "Jamestown", "Wahpeton",
      "Devils Lake", "Valley City", "Grafton", "Beulah", "Rugby"
    ],
    techHubs: [
      "Downtown Fargo", "Broadway", "Downtown Bismarck",
      "Downtown Grand Forks", "Downtown Minot"
    ],
    secondaryCities: [
      "Watford City", "New Town", "Stanley", "Carrington", "Mayville",
      "Lisbon", "Oakes", "Hazen", "Garrison", "Park River"
    ]
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    majorCities: [
      "Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan",
      "Wasilla", "Kenai", "Kodiak", "Bethel", "Palmer",
      "Homer", "Barrow", "Nome", "Unalaska", "Soldotna"
    ],
    techHubs: [
      "Downtown Anchorage", "Midtown", "Spenard", "Downtown Fairbanks",
      "Downtown Juneau", "Waterfront"
    ],
    secondaryCities: [
      "Eagle River", "Chugiak", "Girdwood", "Seward", "Valdez",
      "Cordova", "Dillingham", "Kotzebue", "Wrangell", "Petersburg"
    ]
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    majorCities: [
      "Burlington", "Essex", "South Burlington", "Colchester", "Rutland",
      "Montpelier", "Barre", "St. Albans", "Brattleboro", "Milton",
      "Hartford", "Williston", "Middlebury", "Bennington", "Swanton"
    ],
    techHubs: [
      "Downtown Burlington", "Church Street", "Waterfront",
      "Downtown Montpelier", "Downtown Rutland"
    ],
    secondaryCities: [
      "Winooski", "Shelburne", "Essex Junction", "Springfield", "Randolph",
      "Bellows Falls", "White River Junction", "Morrisville", "Northfield", "St. Johnsbury"
    ]
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    majorCities: [
      "Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs",
      "Sheridan", "Green River", "Evanston", "Riverton", "Jackson",
      "Rawlins", "Lander", "Torrington", "Douglas", "Worland"
    ],
    techHubs: [
      "Downtown Cheyenne", "Downtown Casper", "Downtown Laramie",
      "University of Wyoming Area", "Jackson Town Square"
    ],
    secondaryCities: [
      "Powell", "Cody", "Buffalo", "Wheatland", "Kemmerer",
      "Newcastle", "Thermopolis", "Afton", "Pinedale", "Saratoga"
    ]
  },
]

// Get all cities from all states
export const getAllUSACities = (): string[] => {
  const cities: string[] = []
  usaDetailedStates.forEach(state => {
    cities.push(...state.majorCities)
    if (state.secondaryCities) {
      cities.push(...state.secondaryCities)
    }
  })
  return [...new Set(cities)]
}

// Get all tech hubs
export const getAllUSATechHubs = (): string[] => {
  const techHubs: string[] = []
  usaDetailedStates.forEach(state => {
    if (state.techHubs) {
      techHubs.push(...state.techHubs)
    }
  })
  return [...new Set(techHubs)]
}

// Get cities for a specific state
export const getCitiesByState = (stateName: string): string[] => {
  const state = usaDetailedStates.find(s => s.name === stateName)
  if (!state) return []
  
  return [
    ...state.majorCities,
    ...(state.secondaryCities || []),
    ...(state.techHubs || [])
  ]
}

// Generate comprehensive USA location keywords
export const generateUSALocationKeywords = (techStack: string): string => {
  const keywords: string[] = [
    `top ${techStack} developers USA`,
    `best ${techStack} developers United States`,
    `hire ${techStack} developers USA`,
  ]
  
  // Add top 20 states
  usaDetailedStates.slice(0, 20).forEach(state => {
    keywords.push(
      `${techStack} developers ${state.name}`,
      `top ${techStack} company ${state.name}`,
      `hire ${techStack} developers ${state.name}`
    )
    
    // Add top 5 cities per state
    state.majorCities.slice(0, 5).forEach(city => {
      keywords.push(
        `${techStack} developers ${city}`,
        `${techStack} developers ${city}, ${state.abbreviation}`,
        `hire ${techStack} developers ${city}`
      )
    })
    
    // Add tech hubs
    if (state.techHubs) {
      state.techHubs.slice(0, 3).forEach(hub => {
        keywords.push(`${techStack} developers ${hub}`)
      })
    }
  })
  
  return keywords.join(", ")
}

