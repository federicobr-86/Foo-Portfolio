import React from "react";
import Title from "../../Title";
import { stackTitle, stackText } from "../../../data/stack";

const StackList = () => {
  const experience_title = `${stackTitle}`;
  return (
    <section className="section about-page">
      <div className="section-center about-page">
        <Title title={experience_title} />
        <div className="about-stack">
          {stackText.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
      </div>
    </section>
  );
};

export default StackList;
