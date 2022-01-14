import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/img-brand-logo.png';
import styled from 'styled-components'
import Copyright from '../components/Copyright';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SignUp from '../components/Signup';

const Signup = () => {
    return (
        <>
        <NavbarContainer>
            <Link to="/">
                <NavLogo src={logo} alt="logo"/>
            </Link>
        </NavbarContainer>
        <SignUp />
        <Newsletter />
        <Footer />
        <Copyright />
        </>
    )
}

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    top: 0;
    position: sticky;
    z-index: 99;
    width: 100%;
    height: 90px;
    background-color: var(--white-color);
`
export const NavLogo = styled.img`
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
    width: 100px;
    display: flex;
    position: fixed;
    left: 15.5%;
    top: 3%;
`
export default Signup
