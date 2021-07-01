// @ts-nocheck
import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Close } from "../../assets/close-icon.svg";
import { Container, UserName, BrandWrapper, LogoutButton } from "./styles";
import { useAuth } from "../../contexts/auth";

export default function Header() {
  const context = useAuth();

  function handleLogout() {
    context.Logout();
  }

  return (
    <Container>
      <BrandWrapper>
        <Logo width={126} />
        <UserName>Olá, {context.user.name}</UserName>
      </BrandWrapper>
      <LogoutButton onClick={handleLogout}>
        <Close />
      </LogoutButton>
    </Container>
  );
}
