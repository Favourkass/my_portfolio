import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import ReviewsSetion from "../Components/ReviewsSection";
import ServicesSection from "../Components/ServicesSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

function AboutPage() {
  return (
    <MainLayout>
      <ABoutStyled>
          <Title title={"About Me"} span={"about Me"}/>
            <ImageSection/>
            <ServicesSection/>
            <ReviewsSetion/>
      </ABoutStyled>
    </MainLayout>
  );
}
const ABoutStyled = styled.section`

`;

export default AboutPage;
