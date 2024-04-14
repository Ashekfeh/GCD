import React from "react";
import './Home.css';

import { useTranslation } from 'react-i18next';

import Hero from "../../Components/Hero/Hero";
import AboutCard from "../../Components/AboutCard/AboutCard";
import CarouselGCD from "../../Components/Carousel/CarouselGCD";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlaceHolder from "react-bootstrap/Placeholder";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import CardBottomArrow from "../../Components/CardBottomArrow/CardBottomArrow";

import testImage from "../../assets/images/testimage.jpg"
import SponsorCard from "../../Components/SponsorCard/SponsorCard";
import Footer from "../../Components/Footer/Footer";
import carouselSmall from '../../assets/images/carousel_small.jpg';
import carouselBig from '../../assets/images/carousel_big.jpg';


export default function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Container className="home-container d-flex flex-column justify-content-evenly gap-36">
                <Hero />
                <AboutCard />
                <Container>
                    <h3 className="pb-8">{t('N&A')}</h3>
                    <Row>
                        <Col>
                            <CarouselGCD bg="bg-white" img={carouselBig} />
                        </Col>
                        <Col lg={4}>
                            {/* bg-white or dark-background */}
                            <CarouselGCD bg="dark-background" img={carouselSmall} />
                        </Col>
                    </Row>
                </Container>

                <Container className="">
                    <h3 className="pb-8">Programs and stuff</h3>
                    <Row className="pb-18">
                        <Col>
                            <CardBottomArrow name="Program 1" img={testImage} />
                        </Col>
                        <Col>
                            <CardBottomArrow name="Program 2" img={testImage} />
                        </Col>
                        <Col>
                            <CardBottomArrow name="Program 3" img={testImage} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardBottomArrow name="Program 4" img={testImage} />
                        </Col>
                        <Col>
                            <CardBottomArrow name="Program 5" img={testImage} />
                        </Col>
                        <Col>
                            <CardBottomArrow name="Program 6" img={testImage} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="container-test px-0 my-36">
                <Row className="row-test">
                    <Col>
                        <PlaceHolder md={2} bg="primary" />
                    </Col>
                    <Col>
                        <PlaceHolder md={2} bg="secondary" />
                    </Col>
                    <Col>
                        <PlaceHolder md={2} bg="primary" />
                    </Col>
                    <Col>
                        <PlaceHolder md={2} bg="secondary" />
                    </Col>
                    <Col>
                        <PlaceHolder md={2} bg="primary" />
                    </Col>
                    <Col className="colson">
                        <PlaceHolder md={2} bg="primary" />
                    </Col>
                </Row>
            </Container>
            <SponsorCard />
            <Container className="join-section d-flex flex-column justify-content-center align-items-center text-nowrap py-36">
                <Row>
                    <Col lg={4}>
                        <h3>{t('MIDC')}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <h3>{t('JOINUSNOW')}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="support-btn" variant="outline-primary">{t('SUPPORT')}</Button>
                    </Col>
                    <Col>
                        <Button className="join-btn" variant="secondary">{t('JOINUS-BTN')}</Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}