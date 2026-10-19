# GitHub Pages routing

Run `npm run build` to produce the `dist` directory uploaded by the Pages workflow.
The build generates `chapters/index.html` and `author/index.html` from Vite's
homepage entry. These load the same React app, whose BrowserRouter selects the
page from the URL. Asset URLs are absolute, so they also work on nested paths.

These files allow direct visits and refreshes on GitHub Pages, which does not
provide a configurable fallback to the homepage for client-side routes. A static
host may redirect `/chapters` to `/chapters/`; both URLs work with the router.

When adding a page in `src/App.tsx`, also add its path to the `routes` list in
`scripts/generate-route-pages.mjs`. Unknown paths continue to return a real 404.

To test the production build without a development server's SPA fallback:

```sh
npm run build
python3 -m http.server 4173 --directory dist --bind 127.0.0.1
```

Open `/`, `/chapters`, and `/author`, then refresh each page. A push to `main`
triggers the existing GitHub Actions deployment.
