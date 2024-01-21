# Movie Carousel

A movie carousel built with React, Next.js, and TypeScript.

## Overview

This movie carousel is constructed without relying on external libraries for its functionality. The only external library utilized is random-words, which generates random search terms for retrieving movies through the OMDB API.

## Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/runefaeroe/carousel.git
   cd movie-carousel
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env.local` file**

   Add the following environment variables:

   ```env
   OMDB_BASE_URL="http://www.omdbapi.com"
   BASE_URL="http://localhost:3000"
   API_KEY="your-omdb-api-key"
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Hosted on Vercel**

   View the deployed version on Vercel: [Movie Carousel on Vercel](https://movie-carousel-project.vercel.app/)

Enjoy! 🎬🍿
