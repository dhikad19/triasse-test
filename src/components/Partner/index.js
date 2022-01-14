import React from 'react'
import {
    PartnerContainer,
    TopPartner,
    TopTitle,
    TopDsc,
    BottomPartner,
    PartnerImg
} from './PartnerElements'
import prodia from '../../assets/img/img-mitra-1.png'
import parahita from '../../assets/img/img-mitra-2.png'
import kimiafarma from '../../assets/img/img-mitra-3.png'
import biotest from '../../assets/img/img-mitra-4.png'
import gislab from '../../assets/img/img-mitra-5.png'

const Partner = () => {
    return (
        <PartnerContainer id="lab">
            <TopPartner>
                <TopTitle>Mitra Laboratorium Terbaik di Indonesia</TopTitle>
                <TopDsc>Triasse tersedia di 44 cabang di Indonesia, dengan sebaran di 16 kota besar yang bisa dipesan secara <i>online.</i></TopDsc>
            </TopPartner>
            <BottomPartner>
                <PartnerImg src={prodia} alt="prodia" />
                <PartnerImg src={parahita} alt="parahita" />
                <PartnerImg src={kimiafarma} alt="kimiafarma" />
                <PartnerImg src={biotest} alt="biotest" />
                <PartnerImg src={gislab} alt="gislab" />
            </BottomPartner>
        </PartnerContainer>
    )
}

export default Partner
