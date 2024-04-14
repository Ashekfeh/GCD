import React from "react";
import "./CardBottomArrow.css";

import Card from "react-bootstrap/Card"
// import Image from "react-bootstrap/Image"

// import testImage from "../../assets/images/testimage.jpg"

export default function CardBottomArrow(props) {
    return (
        <Card className="about-card">
            <Card.Img variant="top" src={props.img} thumbnail="true" className="about-card-img" />
            <Card.Body className="about-card-body">
                <Card.Text className="about-card-text">
                    {props.name}
                </Card.Text>
                <Card.Link className="about-card-link">
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5002 2.83333C9.68016 2.83333 3.3335 9.18 3.3335 17C3.3335 24.82 9.68016 31.1667 17.5002 31.1667C25.3202 31.1667 31.6668 24.82 31.6668 17C31.6668 9.18 25.3202 2.83333 17.5002 2.83333ZM22.4585 18.0625H15.106L17.5427 20.4992C17.9535 20.91 17.9535 21.59 17.5427 22.0008C17.3302 22.2133 17.061 22.3125 16.7918 22.3125C16.5227 22.3125 16.2535 22.2133 16.041 22.0008L11.791 17.7508C11.3802 17.34 11.3802 16.66 11.791 16.2492L16.041 11.9992C16.4518 11.5883 17.1318 11.5883 17.5427 11.9992C17.9535 12.41 17.9535 13.09 17.5427 13.5008L15.106 15.9375H22.4585C23.0393 15.9375 23.521 16.4192 23.521 17C23.521 17.5808 23.0393 18.0625 22.4585 18.0625Z" fill="#24245D" />
                    </svg>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}