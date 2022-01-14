import React from 'react';
import {
    CopyrightContainer,
    CopyrightText
} from './CopyrightElements';

const Copyright = () => {
    return (
        <CopyrightContainer>
            <CopyrightText>Copyright © {new Date().getFullYear()} PT. Digital Medika Informatik. All rights reserved.</CopyrightText>
        </CopyrightContainer>
    )
}

export default Copyright
