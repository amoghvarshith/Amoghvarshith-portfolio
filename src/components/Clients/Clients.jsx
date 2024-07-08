import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';

let clients = [
    {
        name: "AWS CLOUD PRACTITIONER",
        img: "amoghcloud.jpg",
        verifylink: "https://www.credly.com/badges/14b26199-9520-4514-ba69-655e3bfbd9df/public_url",
    },
    {
        name: "REDHAT",
        img: "redhatamogh.jpg",
        verifylink: "https://www.credly.com/badges/f539df8f-5480-43f2-8c33-9d7ef91b2ee2/public_url",
    },
    {
        name: "AZ-900",
        img: "amogh az-900.jpg",
        verifylink: "https://www.credly.com/badges/2674e7f6-a486-4529-a1da-b9e2fbb145ee/public_url",
    },
    {
        name: "AI-900",
        img: "amogh ai-900.jpg",
        verifylink: "https://www.credly.com/badges/0b21eb75-941b-405c-9a96-2d4a3a34bab2/public_url",
    },
];

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 1000, // Set auto-scrolling speed (in milliseconds)
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ));
    return (
        <Container id='client'>
            <Slide direction="right">
                <Zoom>
                    <h1><span className="green">Certifications</span></h1>
                </Zoom>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button onClick={() => arrowRef.current.slickPrev()}><IoIosArrowBack /></button>
                    <button onClick={() => arrowRef.current.slickNext()}><IoIosArrowForward /></button>
                </Buttons>
            </Testimonials>
        </Container>
    )
}

export default Clients;

const Container = styled.div`
    width: 1000px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 15px;
        height: 10px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`

const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`
