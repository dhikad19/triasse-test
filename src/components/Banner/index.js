import React from 'react';
import banner1 from '../../assets/img/img-banner2-1.jpg';
import banner2 from '../../assets/img/img-banner2-2.jpg';
import {
    BannerContainer,
    BannerImg
} from './BannerElements'

const Banner = () => {
    return (
        <BannerContainer>
            <BannerImg src={banner1} alt='banner1' />
            <BannerImg src={banner2} alt='banner2' />
        </BannerContainer>
    )
}

export default Banner
