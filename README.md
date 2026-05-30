# Shelter
<img width="1806" height="894" alt="preview" src="https://github.com/user-attachments/assets/7c7e1647-5d97-4c63-8b61-f13e02eb7290" />

Responsive multi-page website for an animal shelter focused on pet care.

## Live Demo

https://shelter-zeta.vercel.app/

## Overview

Shelter is a responsive web application that helps users discover pets available for adoption, learn more about them through interactive cards, modal windows, and support the shelter through donations.

The project was migrated from a traditional static setup to Vite-based workflow and organized using a modular architecture.

## Features

- Responsive layout
- Multi-page application structure
- Infinite pets slider
- Pets catalog with pagination
- Dynamic card generation
- Modal windows with pet information
- Cookie consent banner
- Smooth transitions and animations
- Optimized asset handling with Vite

## Tech Stack

### Frontend

- HTML5
- SCSS (Sass)
- JavaScript (ES6 Modules)

### Tooling

- Vite
- npm
- Vercel

## Project Structure

```txt
src/
├── assets/
│
├── js/
│   ├── components/
│   ├── data/
│   └── utils/
│
├── styles/
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── pages/
│
privacy/
│   └── index.html
│
shelter/
│   └── index.html
│
public/
```

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Key Learning Areas

- Migrating an existing project to Vite
- Working with ES Modules
- Organizing scalable SCSS architecture
- Building reusable JavaScript components
- Creating a multi-page Vite configuration
- Deploying and maintaining production builds with Vercel

## Deployment

The project is deployed on Vercel:

https://shelter-zeta.vercel.app/

## Developer

Asya L.

GitHub:
https://github.com/asya-space
