import React from "react";
import Hero from "../components/Hero/index";
import ServiceList from "../components/Lists/ServiceList";
import StackList from "../components/Lists/StackList";
import AboutMe from "../components/AboutMe";
import ContactForm from "../components/ContactForm";

const Home = () => {
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
          <ServiceList />
          <StackList />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default Home;
