import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Lab from '../components/Lab'
import Copyright from '../components/Copyright';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
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
            <Lab />
            <Newsletter />
            <Footer />
            <Copyright />
        </>
    )
}

export default Labor
