/**
 * @fileoverview Main home page component
 * Serves as the landing page and combines all home page sections
 * Including Hero, FeaturedProducts, and Categories
 */
import React from "react";
import Hero from "./components/Hero";

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}

export default Home;
