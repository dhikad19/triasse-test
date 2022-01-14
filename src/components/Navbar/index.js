import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../assets/img/img-brand-logo.png';
import calendar from '../../assets/img/img-calendar.svg';
import chat from '../../assets/img/img-message.svg';
import email from '../../assets/img/img-email.svg'
import {TopBar,
        TopBarContent,
        TopBarList,
        TopBarImg,
        TopText,
        Nav,
        NavbarContainer,
        NavLogo,
        NavMobile,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtnLogin,
        NavBtnSignup
    } from './NavbarElement';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 50) {
            setScrollNav(true)
        } else {
            setScrollNav(false) 
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[]);

    return (
        <>
            <TopBar>
                <TopBarContent>
                <TopBarList>
                    <TopBarImg src={calendar}/>
                    <TopText>
                        Senin - Jumat (09:00 - 18:00 WIB)
                    </TopText>
                </TopBarList>
                <TopBarList>
                    <TopBarImg src={chat}/>
                        <TopText>
                            +62811 1122 015
                        </TopText>
                </TopBarList>
                <TopBarList>
                        <TopBarImg src={email}/>
                        <TopText>
                            cs@triasse.com
                        </TopText>
                </TopBarList>
                </TopBarContent>
            </TopBar>

            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Link>
                    <NavLogo
                    src={logo}
                    alt="logo"
                    to="/"
                    />
                    </Link>
                    <NavMobile onClick={toggle}>
                        <FaBars />
                    </NavMobile>
                        <NavMenu>
                        <NavItem>
                            <NavLinks
                            to='test'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Paket Test Darah</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='lab'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Laboratorium</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='artikel'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Artikel</NavLinks>
                        </NavItem>
                            <NavBtnLogin to='login'>Masuk</NavBtnLogin>
                            <NavBtnSignup to='signup'>Daftar</NavBtnSignup>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
