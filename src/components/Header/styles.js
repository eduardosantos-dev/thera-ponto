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
`;

export const UserName = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-left: 100px;
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
