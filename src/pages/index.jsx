import React from "react";
import Hero from "../components/Hero/index";
import Services from "../components/Services/index";
import AboutMe from "../components/AboutMe";

export default function home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <AboutMe />
      </main>
    </>
  );
}
