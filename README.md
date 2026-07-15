# Sadman Portfolio with Vite

A responsive React portfolio built with Vite. It includes the landing page, designer gallery placeholder, photographer gallery placeholder, local fonts, supplied social icon assets, and GitHub Pages deployment configuration.

## Pages

The application uses hash based routes so it deploys correctly under a GitHub repository subpath.

* Home: `#/`
* Designer: `#/designer`
* Photographer: `#/photographer`

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages deployment

1. Upload the complete repository contents to a GitHub repository.
2. Open the repository settings.
3. Open Pages.
4. Under Source, select GitHub Actions.
5. Push to the `main` branch.
6. The included workflow builds and deploys the site.

## Project structure

```text
sadman_portfolio_vite
├── .github
│   └── workflows
│       └── deploy.yml
├── public
│   ├── assets
│   │   ├── fonts
│   │   └── icons
│   └── .nojekyll
├── src
│   ├── components
│   ├── pages
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```
