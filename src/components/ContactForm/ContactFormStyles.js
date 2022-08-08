import styled from "styled-components";

export const StyledContactSection = styled.section`
  background: var(--clr-grey-10);
  display: grid;
  place-items: center;
  padding: 2.5rem 0;
`;

export const StyledContactForm = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 35rem;

  :hover {
    box-shadow: var(--dark-shadow);
  }
  h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
`;
