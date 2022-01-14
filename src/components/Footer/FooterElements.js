import styled from 'styled-components';
import { Link } from 'react-router-dom';

    export const FooterContainer = styled.div`
        padding: 48px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        text-align: left;
        color: var(--white-color);
        background-color: #0a315f;
        overflow: hidden;
    `
    export const FooterContent = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        flex-wrap: wrap;
        padding: 2rem;
    `
    export const FooterLeft = styled.div`
    
    `
    export const FooterLogo = styled.img`
        height: 50px;
        width: 100px;
        margin-top: -60px;
        margin-bottom: 20px;
    `
    export const FooterDsc = styled.p`
        max-width: 400px;
    `
    export const FooterCenter = styled.div`
        display: flex;
        gap: 2rem;
    `
    export const FooterWrapper = styled.div`
    
    `
    export const FooterList = styled.ul`
        list-style: none;
    `
    export const FooterLinksTitle = styled.h3`
        margin-bottom: 35px;
        letter-spacing: 1px;
    `
    export const FooterLinks = styled(Link)`
        text-decoration: none;
        display: flex;
        flex-direction: column;
        color: var(--white-color);
        margin-bottom: 15px;
    `
    export const FooterRight = styled.div`
        align-items: center;
        justify-content: center;
        margin-top: -40px;
    `
    export const FooterMedia = styled.div`
        @media screen and (max-width: 1000px){
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
        }
    `
    export const FooterMediaTitle = styled.h3`
        margin-bottom: 35px;
        letter-spacing: 1px;

        @media screen and (max-width: 1000px){
            text-align: center;
        }
    `
    export const FooterMediaLink = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `
    export const FooterImg = styled.img`
        width: 45px;
        height: 45px;
        margin-right: 20px;
        margin-bottom: 15px;

        @media screen and (max-width: 1000px){
            margin: 10px;
        }
    `