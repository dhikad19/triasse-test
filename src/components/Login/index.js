import React from 'react'
import facebook from '../../assets/img/img-facebook@3x.png'
import google from '../../assets/img/img-google@3x.png'
import { Link } from 'react-router-dom'
import {
    LoginContainer,
    LoginWrapper,
    LoginTop,
    TopText,
    TopLink,
    LoginCenter,
    LoginInput,
    LoginButton,
    CenterLink,
    CenterTextLink,
    LoginH2,
    LoginSpan,
    LoginBottom,
    ButtonFb,
    ButtonGoogle,
    ButtonBottom,
    ButtonImg
} from './LoginElements'

const LogIn = () => {
    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginTop>
                    <TopText>Masuk</TopText>
                    <TopLink>Belum punya akun? <Link to='signup'>Daftar</Link></TopLink>
                </LoginTop>
                <LoginCenter>
                    <LoginInput type="text" placeholder="Nomor Telepon/Username/Email" required />
                    <LoginInput type="password" placeholder="Password" required />
                    <LoginButton>Masuk</LoginButton>
                </LoginCenter>
                <CenterLink>
                    <CenterTextLink>Lupa password</CenterTextLink>
                    <CenterTextLink>Masuk dengan SMS</CenterTextLink>
                </CenterLink>
                <LoginH2><LoginSpan>atau masuk dengan</LoginSpan></LoginH2>
                <LoginBottom>
                    <ButtonBottom>
                        <ButtonFb><ButtonImg src={facebook} alt="facebook" />Facebook</ButtonFb>
                        <ButtonGoogle><ButtonImg src={google} alt="google" />Google</ButtonGoogle>
                    </ButtonBottom>
                </LoginBottom>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default LogIn
