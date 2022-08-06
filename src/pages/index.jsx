import React from "react";
import Hero from "../components/Hero/index";
import Services from "../components/Services/index";
import AboutMe from "../components/AboutMe";
import StackList from "../components/StackList";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function home() {
  return (
    <>
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="experience">
          <Services />
          <StackList />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
