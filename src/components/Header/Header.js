import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, BRAKEPOINTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // 

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        
        <Button>
          <Icon strokeWidth={2} id={'shopping-bag'} />  
        </Button>
        <Button>
          <Icon strokeWidth={2} id={'search'} />  
        </Button>
        <Button onClick={() => setShowMobileMenu(true)}>
          <Icon strokeWidth={2} id={'menu'} />  
        </Button>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (max-width: ${BRAKEPOINTS.tablet}) {
    border-top: 4px solid ${COLORS.secondary};
  }

  @media (max-width: ${BRAKEPOINTS.phone}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: none;
  margin-left: 12px;
  align-self: center;

  @media (max-width: ${BRAKEPOINTS.tablet}) {
  display: inline-block;
  margin-left: 12px;
  }
  @media (max-width: ${BRAKEPOINTS.phone}) {
  display: inline-block;
  margin-left: 6px;
  }
`;
const Nav = styled.nav`
  display: flex;

  gap: clamp(
    0.1rem,
    4.2vw - 1.5rem,
    3rem
  );
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  max-width: 100%;
  overflow: auto;

  @media (max-width: ${BRAKEPOINTS.tablet}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
