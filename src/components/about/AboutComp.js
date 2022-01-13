import React from 'react';
import {Container, Row} from "react-bootstrap";
import SubAboutBg from '../../assets/imgs/subBgAbout.png';

import './AboutComp.scss';

const AboutComp = () => {
  return (
    <Container fluid className="about-comp comp-height-without-parallax">
      <div className="comp-slime-sug-bg">
        <img src={SubAboutBg} alt="fruity-fools"/>
      </div>
      <Container className="about-comp-container d-flex justify-content-center align-items-center">
        <Row className="about-comp-title">
          <h1 data-aos="fade-up" className="title">About us</h1>
          <p data-aos="zoom-in" className="sub-title">Fruity Fools collection is being introduced to the NFT community
            by a team of enthusiasts by taking our own comedic edge on Fruit becoming characterized. With the goal of
            bringing out the inner child of our community members we intend on creating art collections of Fruity Fools
            as bragging rights for our Holders. Fruity Fools plans to launch with a variety of collections across all
            other commodities and giving a unique spin on each one. We plan to acquire a plot of land in Sandbox to
            plant our Fruity Fools in the Metaverse. Fruity Fools will be hanging in the Metaverse as actual fruit in
            the Metaverse. Our community will own a percentage of what we acquire and build in the Metaverse (upon
            sellout). This Launch is more than a destination, it is a path for a fruitful future.</p>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComp;