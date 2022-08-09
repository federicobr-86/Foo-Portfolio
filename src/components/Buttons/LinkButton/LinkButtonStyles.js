import styled from "styled-components";

export const StyledLinkButton = styled.button`
  @media screen and (max-width: 720px) {
    width: 30%;
    padding: 1rem;
    background: var(--clr-primary-5);
    border: 2px solid transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);

    a {
      text-transform: uppercase;
      text-align: center;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.375rem 0.75rem;
      letter-spacing: var(--spacing);
      display: inline-block;
    }

    :hover {
      background: var(--clr-primary-4);
    }
  }

  @media screen and (min-width: 720px) {
    width: 50%;
    padding: 1.5rem;
    background: var(--clr-primary-5);
    border: 2px solid transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);

    a {
      text-transform: uppercase;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.375rem 0.75rem;
      letter-spacing: var(--spacing);
      display: inline-block;
    }

    :hover {
      background: var(--clr-primary-4);
    }
  }
`;
