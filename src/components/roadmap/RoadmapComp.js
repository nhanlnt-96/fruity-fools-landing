import React from 'react';
import {Container, Row} from "react-bootstrap";
import {roadmapData} from "../../configs/roadmapData";
import BgRoadmap from "../../assets/imgs/bgRoadmap.jpeg";
import {Parallax} from "react-parallax";

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Parallax bgImage={BgRoadmap} strength={500} className="roadmap-comp comp-height-with-parallax">
      <div className="blur-dark-bg"/>
      <Container className="roadmap-comp-container d-flex flex-column justify-content-center align-items-center">
        {
          roadmapData.map((main, index) => (
            <Row key={index} className="item-container">
              {
                main.title && (<h6 data-aos="fade-up" className="item-title">{main.title}</h6>)
              }
              {
                main.content.map((val, key) => (
                  <div key={key} className="roadmap-detail">
                    <p data-aos="fade-up" className="roadmap-percent">{val.percent}</p>
                    {
                      val.detail.map((detail, detailKey) => (
                        <p data-aos="fade-up" key={detailKey} className="desc">{detail}</p>
                      ))
                    }
                  </div>
                ))
              }
            </Row>
          ))
        }
      </Container>
    </Parallax>
  );
};

export default RoadmapComp;