import styled from "styled-components";

export const StyledLinkButton = styled.div`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: white;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 900;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  :hover {
    color: white;
    background: var(--clr-primary-4);
  }
`;
