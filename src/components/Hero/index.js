import React from 'react';
import {
    Container,
    HeroImg,
    HeroContent,
    TopContent,
    TopText,
    TopTitle,
    TopDesc,
    TopImg,
    BottomContent,
    Dropdown,
    BottomList,
    ListLabel,
    ButtonWrapper,
    BottomButton
} from './HeroElement';
import {province, city, medic} from '../../data/MedicalData';
import makeAnimated from 'react-select/animated';
import banner from '../../assets/img/img-big-banner.jpg';

const Hero = () => {
    const animatedComponents = makeAnimated();
    return (
        <Container>
            <HeroImg src={banner} alt="banner" />
            <HeroContent>
                <TopContent>
                    <TopText>
                        <TopTitle>Pilih Jenis Pemeriksaan</TopTitle>
                        <TopDesc>Jenis Pemeriksaan dan lokasi</TopDesc>
                    </TopText>
                    <TopImg/>
                </TopContent>
                <BottomContent>
                    <BottomList>
                        <ListLabel>Provinsi</ListLabel>
                        <Dropdown
                        placeholder={'Pilih Provinsi'}
                        options={province}
                        />
                    </BottomList>
                    <BottomList>
                        <ListLabel>Kota/Kabupaten</ListLabel>
                        <Dropdown
                        placeholder={'Pilih Kota/Kabupaten'}
                        options={city}
                        />
                    </BottomList>
                    <BottomList>
                        <ListLabel>Paket & jenis pemeriksaan</ListLabel>
                        <Dropdown
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        placeholder={'Pilih jenis pemeriksaan'}
                        isMulti
                        options={medic}
                        />
                    </BottomList>
                </BottomContent>
                <ButtonWrapper>
                        <BottomButton to="labor">Cari lab</BottomButton>
                    </ButtonWrapper>
            </HeroContent>
        </Container>
    )
}

export default Hero
