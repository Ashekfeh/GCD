import React from "react";
import './Hero.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useTranslation } from 'react-i18next';

import cardImage from '../../assets/images/contact_image.jfif';

export default function Hero() {

    const { t } = useTranslation();

    const html = document.querySelector('html');

    return (<>
        <Container className="hero-card-container">
            <Row className="hero-card-row">
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 5, order: 1 }} className={`${html.getAttribute('lang') === 'en' ? 'rounded-div-left' : 'rounded-div-right'} hero-card-text bg-primary px-0`}>
                    <h3 className="text-margin text-white">{t('INSPIRE')}</h3>
                    <Button variant="secondary" className="text-margin">{t("CONTACT")}</Button>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 7, order: 2 }} className="no-padding">
                    <img className={`${html.getAttribute('lang') === 'en' ? 'rounded-div-right' : 'rounded-div-left'} image-height`} src={cardImage} alt='about' />
                </Col>
            </Row>
        </Container>
    </>
    );
}
