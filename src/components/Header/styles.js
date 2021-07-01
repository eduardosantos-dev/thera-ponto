import styled from "styled-components";

export const Container = styled.div`
  padding: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    h1 {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const UserName = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 6.25rem;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.3;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
