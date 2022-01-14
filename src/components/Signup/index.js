import React from 'react'
import facebook from '../../assets/img/img-facebook@3x.png'
import google from '../../assets/img/img-google@3x.png'
import { Link } from 'react-router-dom'
import {
    SignupContainer,
    SignupWrapper,
    SignupTop,
    TopText,
    TopLink,
    SignupCenter,
    SignupInput,
    SignupButton,
    SignupH2,
    SignupSpan,
    SignupBottom,
    ButtonFb,
    ButtonGoogle,
    ButtonBottom,
    ButtonImg,
    BottomCredit,
    BottomText,
    Label,
    Submit
} from './SignupElements'

const SignUp = () => {
    return (
        <SignupContainer>
            <SignupWrapper>
                <SignupTop>
                    <TopText>Daftar</TopText>
                    <TopLink>Sudah punya akun? <Link to='login'>Masuk</Link></TopLink>
                </SignupTop>
                <SignupCenter>
                    <SignupInput type="text" placeholder="Nomor Telepon" required />
                    <SignupButton>Kirim Kode OTP</SignupButton>
                </SignupCenter>
                <SignupH2><SignupSpan>atau daftar dengan</SignupSpan></SignupH2>
                <SignupBottom>
                    <ButtonBottom>
                        <ButtonFb><ButtonImg src={facebook} alt="facebook" />Facebook</ButtonFb>
                        <ButtonGoogle><ButtonImg src={google} alt="google" />Google</ButtonGoogle>
                    </ButtonBottom>
                </SignupBottom>
                <BottomCredit>
                    <BottomText>
                        Dengan mendaftar, <Link to='#'>Saya setuju dengan syarat, 
                        ketentuan dan kebijakan dari Triasse,</Link> & <Link to="#">Kebijakan Privasi</Link>
                        </BottomText>
                    </BottomCredit>
            </SignupWrapper>
            <Label><Submit type="checkbox" value="agreed" /> Saya ingin mendapatkan penawaran eksklusif dan promosi dari Triasse</Label>
        </SignupContainer>
    )
}

export default SignUp;
