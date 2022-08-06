import React from "react";
import Hero from "../components/Hero/index";
import Services from "../components/Services/index";
import AboutMe from "../components/AboutMe";
import StackList from "../components/StackList";
import ContactForm from "../components/ContactForm";

export default function home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <AboutMe />
        <StackList />
        <ContactForm />
      </main>
    </>
  );
}
