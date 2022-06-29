import React from 'react';
import { Menu, ShoppingCart, User } from 'react-feather';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { OutlineButton, PrimaryButton, UnstyledButton } from '../Buttons';

type Props = {};

function Header({}: Props) {
  return (
    <Wrapper>
      <UnstyledButton>
        <Menu />
      </UnstyledButton>
      <Logo src={logo} alt="Logo Cookchef" />
      <ActionButtons>
        <OutlineButton>
          <ShoppingCart />
          Panier
        </OutlineButton>
        <PrimaryButton>
          <User />
          Connexion
        </PrimaryButton>
      </ActionButtons>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  box-shadow: var(--box-shadow-nav);
  color: var(--primary);
  background-color: var(--white);
`;

const Logo = styled.img`
  height: 4rem;
  border-radius: 100vmax;
`;

const ActionButtons = styled.ul`
  margin-inline-start: auto;
  display: flex;
  gap: 0.5rem;
`;

export default Header;
