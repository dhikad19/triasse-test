import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 50px;
    width: 100%;
    background-color: #f2f5f6;
`

export const TopBarContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const TopText = styled.p`
    font-size: 16px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 700px){
        font-size: 12px;
    }
`

export const TopBarList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`

export const TopBarImg = styled.img`
    align-items: center;
    justify-content: center;
    display: flex;
    background-repeat: no-repeat;
    height: 25px;
    width: 25px;
    background-size: contain;
    margin-right: 10px;

    @media screen and (max-width: 700px){
        height: 18px;
        width: 18px;
    }
`

export const Nav = styled.nav `
    background: var(--white-color);
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 99;
    transition: 1s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
    width: 100px;
    display: flex;
    margin-top: 8px;
`

export const NavMobile = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin-right: -11px;
        transform: translate(-100%, 60%);
        font-size: 2.2rem;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    gap: 5px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 70px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 18px;

    &.active {
        border-bottom: 3px solid var(--dark-blue-color);
    }

    &:hover {
        color: var(--dark-blue-color);
    }
`

export const NavBtnLogin = styled(LinkRouter)`
    border-radius: 4px;
    background: var(--light-blue-color);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--dark-blue-color);
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    align-items: center;
    margin-right: 20px;
    margin-left: 8px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #0d6dfd27;
        color: var(--dark-blue-color);
    }
`
export const NavBtnSignup = styled(LinkRouter)`
    border-radius: 4px;
    background: var(--dark-blue-color);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--white-color);
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    align-items: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #0558d3;
        color: #fff;
    }
`