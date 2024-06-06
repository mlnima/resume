
# Resume Builder

A simple, mobile-friendly resume builder application built with React, TypeScript, and Styled-components. The app displays a resume based on the provided JSON file and allows the user to print it on a single A4 page.

## Live Demo

[https://mlnima.github.io/resume](https://mlnima.github.io/resume)

## Features

- Mobile-friendly layout
- A4 print-ready layout
- Easily customizable JSON data
- Deployed on GitHub Pages

## Skills

- React
- TypeScript
- Styled-components
- GitHub Pages for deployment

## Local Development

1. Clone the repository:

```sh
git clone https://github.com/mlnima/resume.git
```

2. Go to the project directory:

```sh
cd resume
```

3. Install dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm start
```

The app will open in your default web browser at [http://localhost:3000](http://localhost:3000).

## Deployment

To deploy the app to GitHub Pages, follow these steps:

1. Install the `gh-pages` package:

```sh
npm install gh-pages --save-dev
```

2. Add the following properties to your `package.json` file:

```json
{
  ...
  "homepage": "https://mlnima.github.io/resume",
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  ...
}
```

3. Deploy the app:

```sh
npm run deploy
```

The app will be available at [https://mlnima.github.io/resume](https://mlnima.github.io/resume).

## License

MIT License
