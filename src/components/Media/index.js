import React from 'react';
import media1 from '../../assets/img/img-media-coverage-1.png';
import media2 from '../../assets/img/img-media-coverage-2.png';
import media3 from '../../assets/img/img-media-coverage-3.png';
import media4 from '../../assets/img/img-media-coverage-4.png';
import media5 from '../../assets/img/img-media-coverage-5.png';
import media6 from '../../assets/img/img-media-coverage-6.png';
import media7 from '../../assets/img/img-media-coverage-7.png';
import media8 from '../../assets/img/img-media-coverage-8.png';
import media9 from '../../assets/img/img-media-coverage-9.png';
import media10 from '../../assets/img/img-media-coverage-10.png';
import media11 from '../../assets/img/img-media-coverage-11.png';
import media12 from '../../assets/img/img-media-coverage-12.png';
import {
    MediaContainer,
    MediaTitle,
    MediaWrapper,
    MediaImg,
} from './MediaElements'

const Media = () => {
    return (
        <MediaContainer>
            <MediaTitle>Media Coverage</MediaTitle>
            <MediaWrapper>
                <MediaImg src={media1} alt="media1" />
                <MediaImg src={media2} alt="media2" />
                <MediaImg src={media3} alt="media3" />
                <MediaImg src={media4} alt="media4" />
                <MediaImg src={media5} alt="media5" />
                <MediaImg src={media6} alt="media6" />
                <MediaImg src={media7} alt="media7" />
                <MediaImg src={media8} alt="media8" />
                <MediaImg src={media9} alt="media9" />
                <MediaImg src={media10} alt="media10" />
                <MediaImg src={media11} alt="media11" />
                <MediaImg src={media12} alt="media12" />
            </MediaWrapper>
        </MediaContainer>
    )
}

export default Media
