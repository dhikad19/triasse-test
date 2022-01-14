import React from 'react';
import {
    DetailContainer,
    LeftDetail,
    DetailContent,
    LeftDetailWrapper,
    LeftDetailImg,
    LeftDetailContent,
    LeftDetailTitle,
    LeftDetailDsc,
    LeftDetailParagraph,
    RightDetail,
    RightDetailWrapper,
    RightDetailTitle,
    RightDetailBottomWrapper,
    RightDetailImg,
    RightDetailContent,
    RightDetailContentTitle,
    RightDetailContentRating,
    RightDetailContentImg,
    RightDetailContentsImg,
    RightDetailContentDsc,
    RightDetailContentLocation,
    RightDetailContentMap,
    RightDetailContentText,
    ListWrapper,
    ListContent,
    RightDetailBottomPrice,
    RightDetailBottomDiscount,
    DiscountPrice,
    Discount,
    FixedPrice,
    ContentButton
} from './DetailElements'
import banner from '../../assets/img/img-article-1.jpg';
import place from '../../assets/img/img-dummy-48.png';
import pin from '../../assets/img/img-icon-pin-blue.svg';
import stars from '../../assets/img/img-star-yellow.svg';

const Detail = () => {
    return (
        <DetailContainer>
            <DetailContent>
            <LeftDetail>
                <LeftDetailWrapper>
                    <LeftDetailImg src={banner} alt="title" />
                    <LeftDetailContent>
                        <LeftDetailTitle>Paket Skrining Diabetes Melitus</LeftDetailTitle>
                        <LeftDetailDsc>Informasi Detil</LeftDetailDsc>
                        <LeftDetailParagraph>
                            Diabetes Melitus yang juga dikenal di Indonesia dengan istilah penyakit kencing manis
                            atau penyakit gula. Tubuh pasien yang menderita diabetes melitus tidak dapat memproduksi
                            atau tidak dapat merespon hormon insulin yang dihasilkan oleh organ pankreas, sehingga kadar
                            gula darah meningkat dan menyebabkan komplikasi jangka pendek maupun jangka panjang.
                            <br />
                            <br />
                            Diabetes merupakan salah satu penyebab kematian tertinggin di dunia, bahkan di Indonesia.
                            <br />
                            <br />
                            Paket Skrining Diabetes Melitus yang disediakan Triasse terdiri dari tiga jenis tes, yaitu.
                            <br/>
                            <br/>
                            1. Glukosa Puasa: Pemeriksaan glukosa dalam darah ini baru bisa dilakukan setelah Anda puasa selama
                            8-10 jam untuk mendapatkan hasil yang akurat. Pengecekan glukosa ini dilakukan untuk mengetahui hipoglikemik
                            atau hiperglikemik untuk membantu memastikan diagnosis diabetes atau untuk memantau kadar glukosa 
                            diabetasi. Tes glukosa puasa juga dapat membantu mendiagnosis prediabetes.
                            <br/>
                            <br/>
                            2. HbA1c(A1c): Tes hemoglobin terglikasi (HbA1c) dapat membantu mengecek rata-rata kadar gula darah Anda dalam periode
                            2-4 bulan. HbA1c adalah gugus heterogen yang terbentuk dari reaksi kimia antara hemoglobin
                            dan glukosa. Pemeriksaan ini perlu dilakukan saat baru terdiagnosis DM, DM berada pada kondisi harus tergantung
                            pada insulin, dan kondisi DM yang tidak tergantung insulin. Tes ini juga diperlukan untuk mengendalikan kondisi DM dan memperkecil
                            resiko komplikasi diabetes.
                            <br />
                            <br />
                            3. Urine Lengkap/Rutin: Tes urine untuk pemeriksaan diabetes adalah untuk mendeteksi glukosa lewat urine.
                        </LeftDetailParagraph>
                        <LeftDetailDsc>Persiapan</LeftDetailDsc>
                        <LeftDetailParagraph>Perlu Puasa 10 - 12 Jam</LeftDetailParagraph>
                    </LeftDetailContent>
                </LeftDetailWrapper>
            </LeftDetail>
            <RightDetail>
                <RightDetailWrapper>
                    <RightDetailTitle>Paket Skrining Diabetes Melitus</RightDetailTitle>
                    <RightDetailBottomWrapper>
                        <RightDetailImg src={place} alt="place" />
                        <RightDetailContent>
                            <RightDetailContentTitle>Parahita Buncit</RightDetailContentTitle>
                            <RightDetailContentRating>
                                <RightDetailContentImg src={stars} alt="stars" />
                                <RightDetailContentDsc>4.8</RightDetailContentDsc>
                            </RightDetailContentRating>
                            <RightDetailContentLocation>Jl. Warung Buncit Raya 150 Jakarta Selatan</RightDetailContentLocation>
                            <RightDetailContentMap>
                                <RightDetailContentsImg src={pin} alt="pin" />
                                <RightDetailContentText>Lihat Peta</RightDetailContentText>
                            </RightDetailContentMap>
                        </RightDetailContent>
                    </RightDetailBottomWrapper>
                    <ListWrapper>
                        <ListContent>Tidak bisa reschedule</ListContent>
                        <ListContent>Tidak bisa refund</ListContent>
                    </ListWrapper>
                    <RightDetailBottomPrice>
                        <RightDetailBottomDiscount>
                            <DiscountPrice>Hemat 20%</DiscountPrice>
                            <Discount>Rp270.500</Discount>
                        </RightDetailBottomDiscount>
                        <FixedPrice>Rp150.578</FixedPrice>
                        <ContentButton>Pesan Sekarang</ContentButton>
                    </RightDetailBottomPrice>
                </RightDetailWrapper>
            </RightDetail>
            </DetailContent>
        </DetailContainer>
    )
}

export default Detail
