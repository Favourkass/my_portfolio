import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm<span> Nnabue Favour </span>
        </h1>
        <p>
          I am a fullstack developer specialized in React Native for mobile frontend and
          Python django restframework for backend
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/favour.kassidy" className="icon i-facebook">
            <FacebookIcon />
          </a>
          <a href="https://github.com/Favourkass" className="icon i-github">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/nnabue-favour-47b972120/"
            className="icon i-youtube"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particle-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
