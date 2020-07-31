import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from './Button';
import './Menu.css';
import { MenuWrapper, LogoImage } from './style';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="ViniFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;