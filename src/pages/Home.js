import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Medical from '../components/Medical';
import Banner from '../components/Banner';
import Partner from '../components/Partner';
import Articles from '../components/Articles';
import Media from '../components/Media';
import MediaText from '../components/MediaText';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero />
            <About />
            <Medical />
            <Banner />
            <Partner />
            <Articles />
            <Media />
            <MediaText />
            <Newsletter />
            <Footer />
            <Copyright />
        </>
    )
}

export default Home
