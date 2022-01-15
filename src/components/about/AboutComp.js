import React from 'react';
import {Container, Row} from "react-bootstrap";
import BgComp from "../../assets/imgs/slimeBg.jpg";
import AdventureLandImg from '../../assets/imgs/subAboutBg.png';
import {Parallax} from "react-parallax";

import './AboutComp.scss';

const AboutComp = () => {
  return (
    <Parallax bgImage={BgComp} strength={500} className="about-comp comp-height-with-parallax">
      <div className="blur-dark-bg"/>
      <Container className="about-comp-container d-flex justify-content-center align-items-center">
        <Row className="about-comp-content">
          {/*<div className="content-img">*/}
          {/*  <img data-aos="fade-up" src={AdventureLandImg} alt="fruity-fools"/>*/}
          {/*</div>*/}
          <div className="content-detail">
            <div data-aos="zoom-in" className="content-title d-flex justify-content-center align-items-center">
                <h6 className="title">About us</h6>
            </div>
            <div data-aos="fade-right" className="content">
              <p className="desc">Fruity Fools collection is being introduced to the NFT community by a team of
                enthusiasts by taking our own comedic edge on Fruit becoming characterized. With the goal of bringing
                out the inner child of our community members we intend on creating art collections of Fruity Fools as
                bragging rights for our Holders. Fruity Fools plans to launch with a variety of collections across all
                other commodities and giving a unique spin on each one. We plan to acquire a plot of land in Sandbox to
                plant our Fruity Fools in the Metaverse. Fruity Fools will be hanging in the Metaverse as actual fruit
                in the Metaverse. Our community will own a percentage of what we acquire and build in the Metaverse
                (upon sellout). This Launch is more than a destination, it is a path for a fruitful future.</p>
            </div>
          </div>
        </Row>
      </Container>
    </Parallax>
  );
};

export default AboutComp;