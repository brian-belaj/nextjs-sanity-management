# Studio Rental App

## Overview
Studio Rental App is a modern web application built with Next.js for the frontend and Sanity.io as a headless CMS for managing content. The project provides an intuitive platform for users to explore and book rental spaces.

## Features
- **Next.js Frontend**: Fast, server-rendered pages for a smooth user experience.
- **Sanity.io Backend**: Schema-based content management for rooms, bookings, and user reviews.
- **Dynamic Routing**: Room details and booking pages are generated dynamically.
- **Reusable Components**: Modular UI components for better maintainability.

## Tech Stack
- **Frontend**: Next.js, React, CSS Modules
- **Backend**: Sanity.io (Headless CMS)
- **Styling**: Tailwind
- **Linting & Formatting**: ESLint, Prettier

## Project Structure
```
.
├── src
│   ├── app
│   │   ├── home (Homepage components)
│   │   ├── rooms (Rooms listing and details pages)
│   │   ├── layout.js (Global layout file)
│   │   ├── globals.css (Global styles)
│   ├── components (Reusable UI components like Navbar, Footer, etc.)
│   ├── lib
│   │   └── sanity.js (Sanity API integration)
├── public (Static assets)
├── studio-rental-app (Sanity CMS setup)
│   ├── schemaTypes (Sanity schemas for rooms, bookings, etc.)
│   ├── sanity.config.ts (Sanity project configuration)
│   ├── sanity.cli.ts (Sanity CLI configuration)
├── next.config.mjs (Next.js configuration)
├── package.json (Project dependencies)
└── README.md (Project documentation)
```

## Installation
### Prerequisites
- Node.js (>= 16)
- npm or yarn

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/brian-belaj/studio-rental-app.git
   cd studio-rental-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add required environment variables such as:
     ```sh
     NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
     NEXT_PUBLIC_SANITY_DATASET=production
     ```
4. Run the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

5. Run the Sanity Studio:
   ```sh
   cd studio-rental-app
   sanity start
   ```
   The studio will be available at `http://localhost:3333`

## Deployment
### Next.js App
To build and deploy the frontend:
```sh
npm run build
npm run dev
```

### Sanity Studio
To deploy the Sanity Studio:
```sh
sanity deploy
```

## Contributing
Feel free to submit issues and pull requests to improve the project.

## License
This project is licensed under the MIT License.

---

### Author
[Brian Belaj] - [https://brianbelaj.netlify.app/]

