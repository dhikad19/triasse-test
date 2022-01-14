import React from 'react';
import {
    NewsContainer,
    NewsText,
    NewsWrapper,
    NewsInput,
    NewsButton
} from './NewsletterElements';

const Newsletter = () => {
    return (
        <NewsContainer>
            <NewsText>Berlangganan newsletter spesial promo dan penawaran terbaik</NewsText>
            <NewsWrapper>
                <NewsInput type="email" placeholder="Masukan email anda" />
                <NewsButton>Berlangganan</NewsButton>
            </NewsWrapper>
        </NewsContainer>
    )
};

export default Newsletter;
