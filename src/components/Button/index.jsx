// @ts-nocheck
import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  font-size: 30px;
  border-radius: 5px;
  margin-top: 30px;
  min-width: 189px;
  padding: 10px 20px;
  height: 63px;
  background: ${(props) =>
    props.primary ? `var(--thera-yellow)` : `transparent`};
  color: ${(props) => (props.primary ? `var(--thera-blue)` : "white")};

  border: ${(props) =>
    props.primary ? "none" : `4px solid var(--thera-yellow)`};

  transition: 0.3s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    background: var(--thera-yellow);
    color: var(--thera-blue);
  }
`;

export default Button;
