import React from "react";
import './AboutCard.css';

import { useTranslation } from 'react-i18next';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cardImage from '../../assets/images/about_image.jfif';

export default function AboutCard() {

    const { t } = useTranslation();

    const html = document.querySelector('html');

    return (
        <>
            <Container>
                <Row>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }} className={`${html.getAttribute('lang') === 'en' ? 'rounded-div-left' : 'rounded-div-right'} no-padding`}>
                        <img className={`${html.getAttribute('lang') === 'en' ? 'rounded-div-left' : 'rounded-div-right'} image-height`} src={cardImage} alt='about' />
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }} className={`${html.getAttribute('lang') === 'en' ? 'rounded-div-right' : 'rounded-div-left'} card-text`}>
                        <h3 className="text-margin about-card-h3 pb-2">{t('ABOUT')}</h3>
                        <p className="text-margin body-2">{t('ABOUT-TXT')}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}