import React from "react";
import './CarouselGCD.css';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import { useTranslation } from 'react-i18next';

export default function CarouselGCD(props) {

    const { t } = useTranslation();

    return (
        <Carousel interval={null} indicators={false} className="carousel-general">
            <Carousel.Item className="">
                <Image className="w-100 rounded" src={props.img} alt="First slide" />
                <Carousel.Caption className={`${props.bg} carousel-body rounded text-end py-0 px-3`}>
                    <h4 className={`${props.bg === 'bg-white' ? 'text-black' : 'text-white'} pt-2`}>{t('N&A-H')}</h4>
                    <p className={`${props.bg === 'bg-white' ? 'text-black' : 'text-white'} text-truncate mb-0 subtitle-3`}>{t('N&A-TXT')}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={props.img} alt="Second slide" />
                <Carousel.Caption className="bg-white carousel-body">
                    <h4 className="text-black">Second slide label</h4>
                    <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={props.img} alt="Third slide" />
                <Carousel.Caption className="bg-white carousel-body">
                    <h4 className="text-black">Third slide label</h4>
                    <p className="text-black">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}