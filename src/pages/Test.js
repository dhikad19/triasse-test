import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Copyright from '../components/Copyright';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Detail from '../components/Detail';
import Sidebar from '../components/Sidebar';

const Labor = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero />
            <Detail />
            <Newsletter />
            <Footer />
            <Copyright />
        </>
    )
}

export default Labor
