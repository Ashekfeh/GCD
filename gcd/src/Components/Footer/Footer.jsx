import React from "react";
import './Footer.css';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { useTranslation } from "react-i18next";

import footerLogo from '../../assets/images/logo_light.png';
import IgLogo from '../../assets/icons/IgLogo';
import YtLogo from '../../assets/icons/ytLogo';
import LinkedinLogo from "../../assets/icons/linkedinLogo";
import TwLogo from "../../assets/icons/twLogo";
import FbLogo from "../../assets/icons/fbLogo";

export default function Footer() {

    const { t } = useTranslation();


    return (
        <Container fluid className="bg-primary pt-16 footer">
            <Container className="pb-20">
                <Row sm={2} md={5} lg={4} className="pt-5 mt-5">
                    <Col md={4} lg={{ span: 4, offset: 2 }} className="mb-3 mr-">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <Image src={footerLogo} />
                        </a>
                        <p className="text-white">{t('DEFINE')}</p>
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                        <h5 className="text-white">{t('N&A')}</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" to="/">{t('N&A-H')}</a></li>
                            <li><a className="link-secondary" to="/">{t('N&A-H')}</a></li>
                            <li><a className="link-secondary" to="/">{t('N&A-H')}</a></li>
                        </ul>
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                        <h5 className="text-white">{t('JEEL')}</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" to="/">{t('JEEL')}</a></li>
                            <li><a className="link-secondary" to="/">{t('JEEL')}</a></li>
                            <li><a className="link-secondary" to="/">{t('JEEL')}</a></li>
                            <li><a className="link-secondary" to="/">{t('JEEL')}</a></li>
                        </ul>
                    </Col>
                    <Col md={4} lg={2} className="mb-3">
                        <h5 className="text-white">{t('JOINUS-BTN')}</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" to="/">{t('JOINUSNOW')}</a></li>
                            <li><a className="link-secondary" to="/">{t('JOINUSNOW')}</a></li>
                            <li><a className="link-secondary" to="/">{t('JOINUSNOW')}</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-20 border-top border-secondary">
                <Row className="text-start text-white pt-5">
                    <Col>
                        <p className={`text-white ${document.querySelector('html').getAttribute('dir') === 'ltr' ? 'text-start' : 'text-end' }`}>{t('COPYRIGHT')}</p>
                    </Col>
                    <Col className="d-flex gap-6 width justify-content-end">
                        <a href="/" className="mb-3 link-dark text-decoration-none">
                            <IgLogo />
                        </a>
                        <a href="/" className="text-decoration-none">
                            <YtLogo />
                        </a>
                        <a href="/" className="text-decoration-none">
                            <LinkedinLogo />
                        </a>
                        <a href="/" className="text-decoration-none">
                            <TwLogo />
                        </a>
                        <a href="/" className="text-decoration-none">
                            <FbLogo />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}