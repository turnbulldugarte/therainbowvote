import { mkdir, readFile, writeFile } from 'node:fs/promises'

// GitHub Pages serves files, so every BrowserRouter page needs an HTML entry.
// Keep this list in sync with the routes in src/App.tsx when adding pages.
const routes = ['chapters', 'author']
const output = new URL('../dist/', import.meta.url)
const html = await readFile(new URL('index.html', output), 'utf8')

for (const route of routes) {
  const directory = new URL(`${route}/`, output)
  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), html)
}

console.log(`Generated static route entries: ${routes.join(', ')}`)
