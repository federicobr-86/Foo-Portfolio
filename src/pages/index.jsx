import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero/index";
import ServiceList from "../components/Lists/ServiceList";
import StackList from "../components/Lists/StackList";
import AboutMe from "../components/AboutMe";
import ContactForm from "../components/ContactForm";
import text from "../data/text";

export default function home({ data }) {
  const { contact_title, contact_submit, contact_thanks } = text;
  const endpoint = `${data.contentfulPortfolio.url}`;

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
          <ContactForm
            title={contact_title}
            mailTo={endpoint}
            buttonLabel={contact_submit}
            response={contact_thanks}
          />
        </div>
      </main>
    </>
  );
}

export const query = graphql`
  {
    contentfulPortfolio {
      url
    }
  }
`;
