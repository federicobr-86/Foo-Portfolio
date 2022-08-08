import styled from "styled-components";

export const StyledStackSection = styled.section`
  padding: 3rem 0;
  display: grid;
  place-items: center;
  padding: 2rem 0;
  text-align: center;
`;

export const StyledStackList = styled.div``;

export const StyledStackCard = styled.span`
  display: inline-block;
  background: white;
  color: var(--clr-grey-5);
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;

  :hover {
    color: white;
    background: var(--clr-primary-2);
  }

  @media screen and (min-width: 576px) {
    margin-top: 0.5rem;
    :hover {
      color: white;
      background: var(--clr-primary-2);
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 0.5rem;
    :hover {
      color: white;
      background: var(--clr-primary-2);
    }
  }
`;
