import React from 'react';
import {
    MedicalContainer,
    MedicalTop,
    MedicalTitle,
    MedicalDsc,
    MedicalBottom,
    MedicalCard,
    CardImg,
    CardWrapper,
    CardTitle,
    CardDsc,
    CardSpan,
    CardPrice
} from './MedicalElements';
import basic from '../../assets/img/paketbasic.png';
import silver from '../../assets/img/paketsilver.png';
import gold from '../../assets/img/paketgold.png';
import diabetes from '../../assets/img/example1.png';
import jantung from '../../assets/img/example3.png';
import torch from '../../assets/img/example2.png';


const Medical = () => {
    return (
        <MedicalContainer id="test">
            <MedicalTop>
                <MedicalTitle>Pilihan Paket Lab</MedicalTitle>
                <MedicalDsc>Paket Lab Populer</MedicalDsc>
            </MedicalTop>
            <MedicalBottom>
                <MedicalCard to="test">
                    <CardImg src={basic} alt="basic" />
                    <CardWrapper>
                    <CardTitle>Paket Medical Check-up Basic</CardTitle>
                        <CardDsc>Harga mulai dari
                        <CardSpan>Rp416.000</CardSpan>
                        </CardDsc>
                    <CardPrice>Rp364.001</CardPrice>
                    </CardWrapper>
                </MedicalCard>
                <MedicalCard to="test">
                    <CardImg src={silver} alt="silver" />
                    <CardWrapper>
                    <CardTitle>Paket Medical Check-up Silver</CardTitle>
                        <CardDsc>Harga mulai dari
                        <CardSpan>Rp600.000</CardSpan>
                        </CardDsc>
                    <CardPrice>Rp573.000</CardPrice>
                    </CardWrapper>
                </MedicalCard>
                <MedicalCard to="test">
                    <CardImg src={gold} alt="gold" />
                    <CardWrapper>
                    <CardTitle>Paket Medical Check-up Gold</CardTitle>
                        <CardDsc>Harga mulai dari
                        <CardSpan>Rp1.288.000</CardSpan>
                        </CardDsc>
                    <CardPrice>Rp1.127.000</CardPrice>
                    </CardWrapper>
                </MedicalCard>
                <MedicalCard to="test">
                    <CardImg src={diabetes} alt={diabetes} />
                    <CardWrapper>
                    <CardTitle>Paket Skrining Diabetes Melitus</CardTitle>
                        <CardDsc>Harga mulai dari
                        <CardSpan>Rp261.625</CardSpan>
                        </CardDsc>
                    <CardPrice>Rp249.375</CardPrice>
                    </CardWrapper>
                </MedicalCard>
                <MedicalCard to="test">
                    <CardImg src={jantung} alt='jantung' />
                    <CardWrapper>
                    <CardTitle>Paket Risiko Penyakit Jantung</CardTitle>
                        <CardDsc>Harga mulai dari
                        <CardSpan>Rp1.162.000</CardSpan>
                        </CardDsc>
                    <CardPrice>Rp1.016.750</CardPrice>
                    </CardWrapper>
                </MedicalCard>
                <MedicalCard to="test">
                    <CardImg src={torch} alt='torch' />
                    <CardWrapper>
                    <CardTitle>Paket TORCH</CardTitle>
                        <CardDsc>Harga mulai dari
                        <CardSpan>Rp2.480.000</CardSpan>
                        </CardDsc>
                    <CardPrice>Rp2.417.000</CardPrice>
                    </CardWrapper>
                </MedicalCard>
            </MedicalBottom>
        </MedicalContainer>
    )
}

export default Medical
