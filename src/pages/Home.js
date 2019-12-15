import React from "react";
import { ButtonContainer } from "../components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeWrapper>
      <div className="u-margin-bottom-lg">
        <section className="hero">
          <div className="hero-inner">
            <h1>Golden Shoe Store</h1>
            <h2>Come visit our wide range of shoes!</h2>
            <Link to="/Products">
              <ButtonContainer>Our Products</ButtonContainer>
            </Link>
          </div>
        </section>
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.nav`
  .hero {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:var(--white);
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(/image/home_image_1.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  .hero h1 {
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .hero h2 {
    margin-bottom: 2rem;
  }
`;
