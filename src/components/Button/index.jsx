// @ts-nocheck
import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  font-size: 2rem;
  border-radius: 0.3125rem;
  margin-top: 2rem;
  min-width: 11.8125rem;
  padding: 0.875rem 1.25rem;
  background: ${(props) =>
    props.primary ? `var(--thera-yellow)` : `transparent`};
  color: ${(props) => (props.primary ? `var(--thera-blue)` : "white")};

  border: ${(props) =>
    props.primary ? "none" : `4px solid var(--thera-yellow)`};

  transition: 0.1s;

  &:enabled:active,
  &:enabled:hover,
  &:enabled:focus {
    background: var(--thera-yellow);
    color: var(--thera-blue);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 40%;
  }
`;

export default Button;
