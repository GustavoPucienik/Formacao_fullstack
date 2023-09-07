import React from 'react';
import IconesHeader from '../IconesHeader';

import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;

`

const Header = () => {
  return (
    <HeaderContainer>
        <Logo/>
          <OpcoesHeader/>
        <IconesHeader/>
      </HeaderContainer>
  )
}

export default Header