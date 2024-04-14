import React from "react";
import './SponsorCard.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { useTranslation } from 'react-i18next';

import cardImage from '../../assets/images/sponsor_card.png'

export default function SponsorCard() {

    const { t } = useTranslation();

    const html = document.querySelector('html');

    return (
        <>
            <Container fluid className="sponsor-card">
                <Row>
                    <Col className="bg-primary text-white py-10 px-10">
                        <h2>{t('SPONSORCARD')}</h2>
                        <p>{t('SPONSORCARD-TXT')}</p>
                        <a className="btn btn-secondary">{t('JOINUS-BTN')}</a>
                    </Col>
                    <Col lg="auto" className="">
                        <Image src={cardImage} alt="sponsor card" className="object-fit-cover" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}