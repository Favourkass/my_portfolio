import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import avatar from "../img/avatar.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={avatar} alt="resume" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            I am <span>Nnabue Favour</span>
          </h4>
        </div>
        <p className="paragraphy">
          I am a full stack developer with a passion for building beautiful and
          intuitive user interfaces. I have a background in QA and a love for
          technology. I have worked on a few projects both frontend and backend.
          on my free time I like to read, watch movies and play video games. if
          i run into a problem, i will always try to solve it. and i will always
          try to learn something new.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name </p>
            <p>Age </p>
            <p>Email </p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location </p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Nnabue Favour</p>
            <p>: 26</p>
            <p>:Nnabuekassidy@gmail.com</p>
            <p>: Nigerian </p>
            <p>: English </p>
            <p>: Ajah Lagos </p>
            <p>: Freelance</p>
          </div>
        </div>
        <Link to="contact">
          <PrimaryButton title={"Contact me"} />
        </Link>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraphy {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
