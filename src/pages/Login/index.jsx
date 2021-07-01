// @ts-nocheck
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Container, InputWrapper, LoginWrapper, FormWrapper } from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as UserNameIcon } from "../../assets/username-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/password-icon.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login(props) {
  const context = useAuth();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  }

  function handleLogin(e) {
    e.preventDefault();
    context.Login(state);
  }

  return (
    <Container>
      <LoginWrapper>
        <Logo />
        <FormWrapper onSubmit={handleLogin}>
          <InputWrapper>
            <UserNameIcon />
            <Input
              type="email"
              placeholder="Usuário"
              value={state.username}
              onChange={handleChange}
              id="username"
            />
          </InputWrapper>
          <InputWrapper>
            <PasswordIcon />
            <Input
              type="password"
              placeholder="Senha"
              value={state.password}
              onChange={handleChange}
              id="password"
            />
          </InputWrapper>
          <Button primary type="submit">
            login
          </Button>
        </FormWrapper>
      </LoginWrapper>
    </Container>
  );
}
