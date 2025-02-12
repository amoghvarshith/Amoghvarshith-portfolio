import React from 'react';
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="green">Projects</span></h1>
            <p>I have recently completed projects utilizing the MERN stack (MongoDB, Express.js, React, and Node.js), I have also worked extensively on Java full-stack development, leveraging technologies such as Spring Boot for backend services </p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
        transition: color 0.3s ease, transform 0.3s ease;

        &:hover {
            color: #00ff00; // Change to your preferred hover color
            transform: scale(1.1); // Slightly enlarges the text on hover
        }
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
`;

const Slide = styled.div``;
