import React from 'react';
import {Parallax} from "react-parallax";
import {Container, Row} from "react-bootstrap";
import BgBanner from '../../assets/imgs/bgBanner.jpeg';
import HeaderComp from "../header/HeaderComp";

import './BannerComp.scss';
import {SiDiscord} from "react-icons/all";

const BannerComp = () => {
  return (
    <Parallax bgImage={BgBanner} strength={500} className="banner-comp">
      <HeaderComp/>
      <div className="blur-bg"/>
      <Container className="banner-comp-container d-flex justify-content-center align-items-center">
        <Row className="banner-comp-content">
          <div className="banner-comp-title">
            <h2 data-aos="flip-left" className="title">Fruity Fools collection is being introduced to the NFT community</h2>
          </div>
          <div className="banner-comp-button d-flex justify-content-center align-items-center">
            <button data-aos="fade-up-left" className="button-item d-flex justify-content-center align-items-center">
              <SiDiscord/>
              JOIN OUT DISCORD
            </button>
          </div>
        </Row>
      </Container>
    </Parallax>
  );
};

export default BannerComp;