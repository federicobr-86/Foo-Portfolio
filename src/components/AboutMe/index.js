import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import text from "../../data/text";
import Title from "../Title";

export default function AboutMe() {
  const { about_title, about_intro, about_experience, about_currently } = text;
  return (
    <main>
      <section className="section about-page">
        <div className="section-center about-page">
          <Title title={about_title} />
          <p>{about_intro}</p>
          <p>{about_experience}</p>
          <p>{about_currently}</p>
          <StaticImage
            src="../../assets/images/about.JPG"
            alt="portfolio image of federico"
            className="about-img"
            placeholder="blurred"
          />
        </div>
      </section>
    </main>
  );
}
