import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Title from "../../Title";

export const query = graphql`
  {
    contentfulStackTitle {
      stackTitle
    }
    allContentfulStack {
      nodes {
        StackList
        id
      }
    }
  }
`;

const StackList = () => {
  const data = useStaticQuery(query);
  const {
    contentfulStackTitle: { stackTitle },

    allContentfulStack: { nodes: StackList },
  } = data;

  return (
    <section className="section about-page">
      <div className="section-center about-page">
        <Title title={stackTitle} />
        <div className="about-stack">
          {StackList.map((item) => {
            return <span key={item.id}>{item.StackList}</span>;
          })}
        </div>
      </div>
    </section>
  );
};

export default StackList;
