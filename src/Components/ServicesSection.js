import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ServiceCard from './ServiceCard';
import Title from './Title';
import webdev from "../img/webdev.jpeg";
import qualityassurance from "../img/qualityassurance.jpeg";
import devOps from "../img/devOps.jpeg";

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'}/>
                <div className="services">
                    <ServiceCard 
                    image={webdev} 
                    title={'web development'}
                    paragraph={"i build web applications using ReactJS for frontend and python Django RestFramework for backend"}
                    />
                    <div className="mid-card">
                    <ServiceCard 
                    image={qualityassurance} 
                    title={'Quality Assurance'}
                    paragraph={"i perform QA test on api collections and designed systems using 42crunch, selenium and postman"}
                    />
                    </div>
                    <ServiceCard 
                    image={devOps} 
                    title={'DevOps'}
                    paragraph={"i can create automated workflows for projects using CICD and AWS Codepipeline"}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }

`;
export default ServicesSection
