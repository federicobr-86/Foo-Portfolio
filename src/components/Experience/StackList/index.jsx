import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  StyledStackSection,
  StyledStackList,
  StyledStackCard,
} from "./StackListStyles";
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
    <StyledStackSection>
      <Title title={stackTitle} />
      <StyledStackList>
        {StackList.map((item) => {
          return (
            <StyledStackCard key={item.id}>{item.StackList}</StyledStackCard>
          );
        })}
      </StyledStackList>
    </StyledStackSection>
  );
};

export default StackList;
