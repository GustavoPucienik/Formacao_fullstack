import React from 'react';
import logoAlura from '../../imagens/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImg = styled.img`
  margin-right: 10px;
`

const Logo = () => {
  return (
          <Link to={`/`}>
    <LogoContainer className='logo'>
            <LogoImg src={logoAlura} alt="Logo do site" />
          <p><strong>Alura</strong> books</p>
        </LogoContainer>
          </Link>
  );
}

export default Logo;