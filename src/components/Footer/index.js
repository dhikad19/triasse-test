import React from 'react'
import logo from '../../assets/img/img-brand-logo-white@3x.png';
import media1 from '../../assets/img/img-icon-facebook.svg';
import media2 from '../../assets/img/img-icon-instagram.svg';
import media3 from '../../assets/img/img-icon-linkedin.svg';
import media4 from '../../assets/img/img-icon-pinteres.svg';
import media5 from '../../assets/img/img-icon-twitter.svg';
import media6 from '../../assets/img/img-icon-youtube.svg';
import {
    FooterContainer,
    FooterContent,
    FooterLeft,
    FooterLogo,
    FooterDsc,
    FooterCenter,
    FooterWrapper,
    FooterList,
    FooterLinksTitle,
    FooterLinks,
    FooterRight,
    FooterMedia,
    FooterMediaTitle,
    FooterMediaLink,
    FooterImg
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLeft>
                    <FooterLogo src={logo} alt="logo" />
                    <FooterDsc>
                        Platform pertama untuk tes laboratorium dan pemeriksaan kesehatan
                        di Indonesia yang memberikan pelanggan kemampuan untuk membuat keputusan
                        yang lebih baik bagi kesehatan mereka.
                    </FooterDsc>
                </FooterLeft>
                <FooterCenter>
                    <FooterWrapper>
                        <FooterList>
                            <FooterLinksTitle>Lainya</FooterLinksTitle>
                            <FooterLinks>Syarat & Ketentuan</FooterLinks>
                            <FooterLinks>Karir</FooterLinks>
                            <FooterLinks>Kebijakan Privasi</FooterLinks>
                            <FooterLinks>Cara Kerja</FooterLinks>
                            <FooterLinks>Login</FooterLinks>
                        </FooterList>
                    </FooterWrapper>
                    <FooterWrapper>
                        <FooterList>
                            <FooterLinksTitle>Hubungi Kami</FooterLinksTitle>
                            <FooterLinks>cs@triasse.com</FooterLinks>
                            <FooterLinks>021-35760497</FooterLinks>
                            <FooterLinks>08-1111-22-015</FooterLinks>
                            <FooterLinks>Senin-Jumat</FooterLinks>
                            <FooterLinks>(09:00-18:00 WIB)</FooterLinks>
                        </FooterList>
                    </FooterWrapper>
                    <FooterWrapper>
                        <FooterList>
                            <FooterLinksTitle>Alamat</FooterLinksTitle>
                            <FooterLinks>Gedung Perkantoran Madison Park,</FooterLinks>
                            <FooterLinks>Lantai 6 Unit B. No. 02. Jl. Letjen S. Parman</FooterLinks>
                            <FooterLinks>Kav 28, Jakarta 11470</FooterLinks>
                        </FooterList>
                    </FooterWrapper>
                </FooterCenter>
                <FooterRight>
                    <FooterMedia>
                        <FooterMediaTitle>Media Sosial</FooterMediaTitle>
                        <FooterMediaLink>
                            <FooterImg src={media1} alt="media1" />
                            <FooterImg src={media2} alt="media2" />
                            <FooterImg src={media3} alt="media3" />
                        </FooterMediaLink>
                        <FooterMediaLink>
                            <FooterImg src={media4} alt="media4" />
                            <FooterImg src={media5} alt="media5" />
                            <FooterImg src={media6} alt="media6" />
                        </FooterMediaLink>
                    </FooterMedia>
                </FooterRight>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
