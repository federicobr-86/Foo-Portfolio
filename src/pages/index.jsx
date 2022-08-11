import React from "react";
import Seo from "../components/Seo";
import Hero from "../components/Hero/index";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <main>
        <Seo />
        <Hero />
        <AboutMe />
        <Experience />
        <ContactForm />
      </main>
    </>
  );
}

export default Home;
