import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {teamData} from "../../configs/teamData";
import BgComp from "../../assets/imgs/bgTeam.png";
import {Parallax} from "react-parallax";

import './TeamComp.scss';

const TeamComp = () => {
  return (
    <Parallax bgImage={BgComp} strength={500} className="about-comp comp-height-with-parallax">
      <Container className="team-comp-container d-flex justify-content-center align-items-center">
        <Row className="team-comp-content">
          <h6 data-aos="fade-up" className="team-comp-title">Team member</h6>
          {
            teamData.map((val, index) => (
              <Col xl={4} lg={4} md={4} sm={12} data-aos="zoom-in" className="item">
                <div className="item-img">
                  <img src={val.ava} alt={`${val.name.replaceAll(" ", "")}-${val.title.replaceAll(" ", "")}`}/>
                </div>
                <div className="item-content">
                  <p className="name">{val.name}</p>
                  <p className="title">{val.title}</p>
                  <p className="about">{val.about}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </Parallax>
  );
};

export default TeamComp;