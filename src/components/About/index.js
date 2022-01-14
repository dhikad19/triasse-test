import React from 'react';
import {
    AboutContainer,
    AboutTop,
    AboutTitle,
    AboutDsc,
    AboutBottom,
    AboutLeft,
    LeftImg,
    AboutRight,
    RightContent,
    RightImg,
    RightText,
    RightTitle,
    RightDsc
} from './AboutElements';
import img1 from '../../assets/img/aboutimg1.jpg';
import img2 from '../../assets/img/aboutimg2.jpg';
import img3 from '../../assets/img/aboutimg3.jpg';
import img4 from '../../assets/img/aboutimg4.jpg';
import img5 from '../../assets/img/aboutimg5.jpg';

const About = () => {
    return (
        <AboutContainer>
            <AboutTop>
                <AboutTitle>Mengapa harus Triasse?</AboutTitle>
                <AboutDsc>Platform pertama untuk tes laboratorium dan pemeriksaan kesehatan di Indonesia</AboutDsc>
            </AboutTop>
            <AboutBottom>
            <AboutLeft>
                <LeftImg
                src={img1}
                to='#'
                />
            </AboutLeft>
            <AboutRight>
                <RightContent>
                    <RightImg 
                    src={img2}
                    to='#'
                    />
                    <RightText>
                        <RightTitle>Jaminan harga terbaik</RightTitle>
                        <RightDsc>
                            Harga kompetitif di Laboratorium terbesar dan terpercaya di Indonesia
                            seperti Prodia, Kimia Farma, Parahita, GS Lab & Biotest.
                            </RightDsc>
                    </RightText>
                </RightContent>
                <RightContent>
                    <RightImg 
                    src={img3}
                    to='#'
                    />
                    <RightText>
                        <RightTitle>Layanan home service</RightTitle>
                        <RightDsc>
                            Pemeriksaan bisa dilakukan dari rumah sendiri dengan layanan Home Service,
                            Petugas datang melakukan pengecekan dan test.
                            </RightDsc>
                    </RightText>
                </RightContent>
                <RightContent>
                    <RightImg 
                    src={img4}
                    to='#'
                    />
                    <RightText>
                        <RightTitle>Cicilan 4x dengan bunga 0%</RightTitle>
                        <RightDsc>
                            Pembayaran pake pemeriksaan lebih ringan karena bisa dicicil sebanyak
                            empat kali, dan tanpa bunga tambahan.
                        </RightDsc>
                    </RightText>
                </RightContent>
                <RightContent>
                    <RightImg
                    src={img5}
                    to='#'
                    />
                    <RightText>
                        <RightTitle>Pesan dan hasil online</RightTitle>
                        <RightDsc>
                            Pesan dan hasil pemeriksaan bisa dilakukan secara online, proses lebih cepat
                            tanpa perlu antri dari lab.
                        </RightDsc>
                    </RightText>
                </RightContent>
            </AboutRight>
            </AboutBottom>
        </AboutContainer>
    )
};

export default About;
