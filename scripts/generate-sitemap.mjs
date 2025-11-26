import { register } from 'tsx/esm/api'
import { pathToFileURL } from 'url'
import { resolve } from 'path'

// Register TypeScript loader
register()

// Import and run next-sitemap config
const configPath = resolve(process.cwd(), 'next-sitemap.config.ts')
const configUrl = pathToFileURL(configPath).href
const config = await import(configUrl)

// Export config for next-sitemap
export default config.default

