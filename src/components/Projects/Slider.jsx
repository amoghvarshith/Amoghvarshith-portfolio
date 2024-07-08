import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img: "amogh-car.jpg",
        disc: "Car rental system using Django Framework. User can login and rent a car and can download the bill generated.",
        link: "https://github.com/amoghvarshith"
    },
    {
        img: "amogh-moive.jpg",
        disc: "The Movie Recommendation System is a web application designed to provide personalized movie recommendations to users based on their preferences and viewing history.",
        link: "https://movie-project-two-flax.vercel.app/"
    },
    {
        img: "amogh-quizz.png",
        disc: "The Quiz App is an interactive web application developed using React, designed to provide users with an engaging way to take quizzes on various topics.",
        link: "https://github.com/amoghvarshith"
    },
    {
        img: "amogh-space.jpg",
        disc: "The Space and Aesthetic Management System is a sophisticated web application developed using the MERN stack (MongoDB, Express.js, React, and Node.js).",
        link: "https://github.com/amoghvarshith"
    },
];

const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000, // Set auto-scrolling speed (in milliseconds)
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

const SliderComp = () => {
    const arrowRef = useRef(null);

    return (
        <Container>
            <Slider ref={arrowRef} {...settings}>
                {data.map((item, i) => (
                    <Project item={item} key={i} />
                ))}
            </Slider>
            <Buttons>
                <button onClick={() => arrowRef.current.slickPrev()} className='back'>
                    <IoIosArrowBack />
                </button>
                <button onClick={() => arrowRef.current.slickNext()} className='next'>
                    <IoIosArrowForward />
                </button>
            </Buttons>
        </Container>
    );
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;

    &.back {
      left: -1rem;
      right: auto;
    }
  }
`
