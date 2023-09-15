/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay
        style={{ background: "rgba(255, 255, 255, 0.5)", position: "absolute", width: '100%', height: '100%', top: 0 }}
        isOpen={isOpen}
        onDismiss={onDismiss}
        >
        <DialogContent
        aria-label="Mobile menu"
          style={{ padding: '44px 32px 32px 32px', backdropFilter: 'blur(8px)',borderRadius: '0 0 24px 24px', background: "linear-gradient(-50deg, var(--primary), var(--secondary))", boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}
        >
        <div>
          <UnstyledButton style={{margin: '12px 12px 12px auto'}} onClick={onDismiss}>
            <VisuallyHidden>Close</VisuallyHidden>
            <Icon id="close" strokeWidth={4} aria-hidden />
          </UnstyledButton>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </div>
      </DialogContent>
    </DialogOverlay>
    
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: right;
  font-size: 1.5rem;
  margin-right: 32px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 32px;
  a {
    color: #333;
  }
`;

export default MobileMenu;
