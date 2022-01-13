import React from 'react';
import {Parallax} from "react-parallax";
import {Container, Row} from "react-bootstrap";
import BgWelcome from '../../assets/imgs/bgWelcome.png';

import './WelcomeComp.scss';

const WelcomeComp = () => {
  return (
    <Parallax bgImage={BgWelcome} strength={500} className="welcome-comp comp-height-with-parallax">
      <div className="blur-dark-bg"/>
      <Container className="welcome-comp-container d-flex justify-content-center align-items-center">
        <Row className="welcome-comp-title">
          <h1 data-aos="fade-up" className="title">Welcome</h1>
          <h1 data-aos="fade-up" className="title">Fruity Fools Collection</h1>
          <p data-aos="fade-up" className="sub-title">Fruity Fools collection is being introduced to the NFT community
            by a team of
            enthusiasts by taking our own comedic edge on Fruit becoming characterized.</p>
        </Row>
      </Container>
    </Parallax>
  );
};

export default WelcomeComp;