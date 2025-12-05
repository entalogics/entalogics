import React from 'react'
import { topLocations, getTopCountries } from '../data/topLocationsData'
import { usaDetailedStates, getAllUSACities, getAllUSATechHubs } from '../data/usaDetailedLocations'

interface LocationSEOProps {
  techStack?: string
  serviceType?: string
  className?: string
}

const LocationSEO: React.FC<LocationSEOProps> = ({ 
  techStack = "software development", 
  serviceType = "services",
  className = "" 
}) => {
  // Get top 20 countries focused on actual buyer markets
  const top20Countries = getTopCountries(20)
  const usaLocation = top20Countries.find(l => l.country === "United States")
  const ukLocation = top20Countries.find(l => l.country === "United Kingdom")
  const otherCountries = top20Countries.filter(l => 
    l.country !== "United States" && l.country !== "United Kingdom"
  )

  return (
    <section className={`py-12 md:py-16 bg-gray-50 dark:bg-gray-900/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Top {techStack} Company Serving Top Global Markets
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Entalogics provides expert {techStack} {serviceType} to clients in the world's top tech markets. 
            We work with businesses in USA (all 50 states), UK (all regions), Singapore, Japan, China, Canada, 
            Australia, Germany, and 15+ more high-value markets where actual buyers are available.
          </p>
        </div>

        {/* USA States - Comprehensive Coverage */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Comprehensive USA Coverage - All 50 States, 500+ Cities, Tech Hubs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {usaDetailedStates.slice(0, 20).map((state) => (
              <div 
                key={state.abbreviation}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {state.name} ({state.abbreviation})
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {techStack} in {state.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  <strong>Cities:</strong> {state.majorCities.slice(0, 4).join(", ")}
                  {state.majorCities.length > 4 && "..."}
                </p>
                {state.techHubs && state.techHubs.length > 0 && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Tech Hubs:</strong> {state.techHubs.slice(0, 2).join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          {/* Show remaining 30 states in compact format */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">
              <strong className="text-gray-900 dark:text-white">All 50 States Coverage:</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {usaDetailedStates.map((state) => (
                <span key={state.abbreviation} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300">
                  {state.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Top States with Detailed Cities and Tech Hubs */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Top States with Detailed City & Tech Hub Coverage
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {usaDetailedStates.slice(0, 6).map((state) => (
                <div 
                  key={state.abbreviation}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="font-bold text-gray-900 dark:text-white mb-2">
                    {state.name} ({state.abbreviation})
                  </p>
                  <div className="text-xs space-y-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong>Cities:</strong> {state.majorCities.slice(0, 6).join(", ")}
                      {state.majorCities.length > 6 && ` +${state.majorCities.length - 6} more`}
                    </p>
                    {state.secondaryCities && state.secondaryCities.length > 0 && (
                      <p className="text-gray-500 dark:text-gray-500">
                        <strong>Also:</strong> {state.secondaryCities.slice(0, 3).join(", ")}
                        {state.secondaryCities.length > 3 && ` +${state.secondaryCities.length - 3} more`}
                      </p>
                    )}
                    {state.techHubs && state.techHubs.length > 0 && (
                      <p className="text-gray-500 dark:text-gray-500">
                        <strong>Tech Hubs:</strong> {state.techHubs.slice(0, 4).join(", ")}
                        {state.techHubs.length > 4 && ` +${state.techHubs.length - 4} more`}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center">
            <strong className="text-gray-900 dark:text-white">Comprehensive USA coverage:</strong> Serving {getAllUSACities().length}+ cities across all 50 states, including major tech hubs like Silicon Valley, Silicon Alley, Silicon Prairie, Research Triangle Park, and {getAllUSATechHubs().length}+ specific tech districts and neighborhoods. From startups in San Francisco to enterprises in New York, from tech companies in Austin to innovation centers in Seattle.
          </p>
        </div>

        {/* UK Regions */}
        {ukLocation && ukLocation.states && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Serving All UK Regions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ukLocation.states.map((region) => (
                <div 
                  key={region.name}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {region.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {techStack} in {region.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    {region.majorCities.slice(0, 4).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top Global Countries */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Top Global Markets - 20 Countries with Highest Buyer Concentration
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {top20Countries.map((location) => (
              <div 
                key={location.code}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {location.country}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {techStack} in {location.country}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  {location.majorCities.slice(0, 3).join(", ")}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
            <strong className="text-gray-900 dark:text-white">Top markets:</strong> United States, United Kingdom, Canada, Australia, Germany, Singapore, Japan, France, Netherlands, Switzerland, Sweden, UAE, India, China, Israel, Ireland, Spain, Italy, South Korea, Belgium - focused on countries with highest concentration of software development buyers and tech companies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LocationSEO
