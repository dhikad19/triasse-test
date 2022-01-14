import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    BarWrapper,
    NavLogo,
    SidebarMenu,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SideBtnLogin,
    SideBtnSignup
} from './SidebarElements';
import logo from '../../assets/img/img-brand-logo.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <BarWrapper>
            <Link>
            <NavLogo to="/" src={logo} alt="logo" />
            </Link>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            </BarWrapper>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    to="test" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Paket Test Darah
                    </SidebarLink>
                    <SidebarLink 
                    to="lab" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Laboratorium
                    </SidebarLink>
                    <SidebarLink 
                    to="artikel" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Artikel
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBtnLogin to='login'>Masuk</SideBtnLogin>
                    <SideBtnSignup to='signup'>Daftar</SideBtnSignup>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
