import React from 'react';
import {
    LabContainer,
    LabTitle,
    LabWrapper,
    LabLeft,
    LeftWrapper,
    LeftTitle,
    LeftCheck,
    LeftInput,
    LeftLabel,
    LabRight,
    LeftContent,
    WrapperLeft,
    RightContainer,
    WrapperImg,
    TextLine,
    CenterWrapper,
    CenterTop,
    CenterTopLeft,
    CenterTopRight,
    CenterContent,
    CenterContentTitle,
    CenterContentDsc,
    CenterBottom,
    BottomRatingImg,
    BottomRating,
    CenterBottomList,
    CenterBottomContent,
    VerticalLine,
    RightWrapper,
    RightWrapperDiscount,
    RightWrapperPrice,
    RightWrapperPriceFix
} from './LabElements';
import place from '../../assets/img/img-search-post-1.png';
import stars from '../../assets/img/img-star-yellow.svg'

const Lab = () => {
    return (
        <LabContainer>
            <LabTitle>Filter hasil pencairan</LabTitle>
            <LabWrapper>
            <LabLeft>
                <LeftWrapper>
                    <LeftTitle>Harga</LeftTitle>
                    <LeftCheck>
                        <LeftInput type="checkbox" name="checkbox" value="terendah" />
                        <LeftLabel>Terendah - Tertinggi</LeftLabel>
                    </LeftCheck>
                    <LeftCheck>
                        <LeftInput type="checkbox" name="checkbox" value="tertinggi"  />
                        <LeftLabel>Tertinggi - Terendah</LeftLabel>
                    </LeftCheck>
                </LeftWrapper>
                <TextLine />
                <LeftWrapper>
                    <LeftTitle>Jenis Layanan</LeftTitle>
                    <LeftCheck>
                        <LeftInput type="checkbox" name="checkbox" value="home"  />
                        <LeftLabel>Home Service</LeftLabel>
                    </LeftCheck>
                    <LeftCheck>
                        <LeftInput type="checkbox" name="checkbox" value="lab"  />
                        <LeftLabel>Datang ke Lab</LeftLabel>
                    </LeftCheck>
                </LeftWrapper>
            </LabLeft>
            <RightContainer>
            <LabRight>
                <LeftContent>
                    <WrapperLeft>
                        <WrapperImg src={place} alt='place' />
                    </WrapperLeft>
                </LeftContent>
                <CenterWrapper>
                    <CenterTop>
                        <CenterTopLeft>Datang ke Lab</CenterTopLeft>
                        <CenterTopRight>Home service</CenterTopRight>
                    </CenterTop>
                    <CenterContent>
                        <CenterContentTitle>Parahita Buncit</CenterContentTitle>
                        <CenterContentDsc>Jl. Warung Buncit Raya 150 Jakarta Selatan</CenterContentDsc>
                    </CenterContent>
                    <CenterBottom>
                        <BottomRatingImg src={stars} alt='rating' />
                        <BottomRating>4.8/5</BottomRating>
                        <CenterBottomList>
                            <CenterBottomContent>Tidak bisa reschedule</CenterBottomContent>
                            <CenterBottomContent>Tidak bisa refund</CenterBottomContent>
                        </CenterBottomList>
                    </CenterBottom>
                </CenterWrapper>
                <VerticalLine />
                <RightWrapper>
                    <RightWrapperDiscount>Hemat 20%</RightWrapperDiscount>
                    <RightWrapperPrice>Rp370.500</RightWrapperPrice>
                    <RightWrapperPriceFix>Rp250.578</RightWrapperPriceFix>
                </RightWrapper>
            </LabRight>
            <LabRight>
                <LeftContent>
                    <WrapperLeft>
                        <WrapperImg src={place} alt='place' />
                    </WrapperLeft>
                </LeftContent>
                <CenterWrapper>
                    <CenterTop>
                        <CenterTopLeft>Datang ke Lab</CenterTopLeft>
                        <CenterTopRight>Home service</CenterTopRight>
                    </CenterTop>
                    <CenterContent>
                        <CenterContentTitle>Parahita Buncit</CenterContentTitle>
                        <CenterContentDsc>Jl. Warung Buncit Raya 150 Jakarta Selatan</CenterContentDsc>
                    </CenterContent>
                    <CenterBottom>
                        <BottomRatingImg src={stars} alt='rating' />
                        <BottomRating>4.8/5</BottomRating>
                        <CenterBottomList>
                            <CenterBottomContent>Tidak bisa reschedule</CenterBottomContent>
                            <CenterBottomContent>Tidak bisa refund</CenterBottomContent>
                        </CenterBottomList>
                    </CenterBottom>
                </CenterWrapper>
                <VerticalLine />
                <RightWrapper>
                    <RightWrapperDiscount>Hemat 20%</RightWrapperDiscount>
                    <RightWrapperPrice>Rp370.500</RightWrapperPrice>
                    <RightWrapperPriceFix>Rp250.578</RightWrapperPriceFix>
                </RightWrapper>
            </LabRight>
            <LabRight>
                <LeftContent>
                    <WrapperLeft>
                        <WrapperImg src={place} alt='place' />
                    </WrapperLeft>
                </LeftContent>
                <CenterWrapper>
                    <CenterTop>
                        <CenterTopLeft>Datang ke Lab</CenterTopLeft>
                        <CenterTopRight>Home service</CenterTopRight>
                    </CenterTop>
                    <CenterContent>
                        <CenterContentTitle>Parahita Buncit</CenterContentTitle>
                        <CenterContentDsc>Jl. Warung Buncit Raya 150 Jakarta Selatan</CenterContentDsc>
                    </CenterContent>
                    <CenterBottom>
                        <BottomRatingImg src={stars} alt='rating' />
                        <BottomRating>4.8/5</BottomRating>
                        <CenterBottomList>
                            <CenterBottomContent>Tidak bisa reschedule</CenterBottomContent>
                            <CenterBottomContent>Tidak bisa refund</CenterBottomContent>
                        </CenterBottomList>
                    </CenterBottom>
                </CenterWrapper>
                <VerticalLine />
                <RightWrapper>
                    <RightWrapperDiscount>Hemat 20%</RightWrapperDiscount>
                    <RightWrapperPrice>Rp370.500</RightWrapperPrice>
                    <RightWrapperPriceFix>Rp250.578</RightWrapperPriceFix>
                </RightWrapper>
            </LabRight>
            <LabRight>
                <LeftContent>
                    <WrapperLeft>
                        <WrapperImg src={place} alt='place' />
                    </WrapperLeft>
                </LeftContent>
                <CenterWrapper>
                    <CenterTop>
                        <CenterTopLeft>Datang ke Lab</CenterTopLeft>
                        <CenterTopRight>Home service</CenterTopRight>
                    </CenterTop>
                    <CenterContent>
                        <CenterContentTitle>Parahita Buncit</CenterContentTitle>
                        <CenterContentDsc>Jl. Warung Buncit Raya 150 Jakarta Selatan</CenterContentDsc>
                    </CenterContent>
                    <CenterBottom>
                        <BottomRatingImg src={stars} alt='rating' />
                        <BottomRating>4.8/5</BottomRating>
                        <CenterBottomList>
                            <CenterBottomContent>Tidak bisa reschedule</CenterBottomContent>
                            <CenterBottomContent>Tidak bisa refund</CenterBottomContent>
                        </CenterBottomList>
                    </CenterBottom>
                </CenterWrapper>
                <VerticalLine />
                <RightWrapper>
                    <RightWrapperDiscount>Hemat 20%</RightWrapperDiscount>
                    <RightWrapperPrice>Rp370.500</RightWrapperPrice>
                    <RightWrapperPriceFix>Rp250.578</RightWrapperPriceFix>
                </RightWrapper>
            </LabRight>
            <LabRight>
                <LeftContent>
                    <WrapperLeft>
                        <WrapperImg src={place} alt='place' />
                    </WrapperLeft>
                </LeftContent>
                <CenterWrapper>
                    <CenterTop>
                        <CenterTopLeft>Datang ke Lab</CenterTopLeft>
                        <CenterTopRight>Home service</CenterTopRight>
                    </CenterTop>
                    <CenterContent>
                        <CenterContentTitle>Parahita Buncit</CenterContentTitle>
                        <CenterContentDsc>Jl. Warung Buncit Raya 150 Jakarta Selatan</CenterContentDsc>
                    </CenterContent>
                    <CenterBottom>
                        <BottomRatingImg src={stars} alt='rating' />
                        <BottomRating>4.8/5</BottomRating>
                        <CenterBottomList>
                            <CenterBottomContent>Tidak bisa reschedule</CenterBottomContent>
                            <CenterBottomContent>Tidak bisa refund</CenterBottomContent>
                        </CenterBottomList>
                    </CenterBottom>
                </CenterWrapper>
                <VerticalLine />
                <RightWrapper>
                    <RightWrapperDiscount>Hemat 20%</RightWrapperDiscount>
                    <RightWrapperPrice>Rp370.500</RightWrapperPrice>
                    <RightWrapperPriceFix>Rp250.578</RightWrapperPriceFix>
                </RightWrapper>
            </LabRight>
            <LabRight>
                <LeftContent>
                    <WrapperLeft>
                        <WrapperImg src={place} alt='place' />
                    </WrapperLeft>
                </LeftContent>
                <CenterWrapper>
                    <CenterTop>
                        <CenterTopLeft>Datang ke Lab</CenterTopLeft>
                        <CenterTopRight>Home service</CenterTopRight>
                    </CenterTop>
                    <CenterContent>
                        <CenterContentTitle>Parahita Buncit</CenterContentTitle>
                        <CenterContentDsc>Jl. Warung Buncit Raya 150 Jakarta Selatan</CenterContentDsc>
                    </CenterContent>
                    <CenterBottom>
                        <BottomRatingImg src={stars} alt='rating' />
                        <BottomRating>4.8/5</BottomRating>
                        <CenterBottomList>
                            <CenterBottomContent>Tidak bisa reschedule</CenterBottomContent>
                            <CenterBottomContent>Tidak bisa refund</CenterBottomContent>
                        </CenterBottomList>
                    </CenterBottom>
                </CenterWrapper>
                <VerticalLine />
                <RightWrapper>
                    <RightWrapperDiscount>Hemat 20%</RightWrapperDiscount>
                    <RightWrapperPrice>Rp370.500</RightWrapperPrice>
                    <RightWrapperPriceFix>Rp250.578</RightWrapperPriceFix>
                </RightWrapper>
            </LabRight>
            </RightContainer>
            </LabWrapper>
        </LabContainer>
    )
}

export default Lab
