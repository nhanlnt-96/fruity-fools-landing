import React from 'react';
import {Accordion, Container} from "react-bootstrap";
import {faqData} from "../../configs/faqData";

import './FAQComp.scss';

const FaqComp = () => {
  return (
    <Container fluid className="faq-comp comp-height-without-parallax">
      <Container className="faq-comp-container d-flex flex-column justify-content-center align-items-center">
        <h6 data-aos="fade-up" className="title">FAQ</h6>
        <Accordion className="accordion-custom">
          {
            faqData.map((main, index) => (
              <Accordion.Item data-aos={!(index === faqData.length - 1) ? "fade-up" : null} key={index}
                              eventKey={index.toString()}>
                <Accordion.Header>{main.question}</Accordion.Header>
                <Accordion.Body>
                  {
                    main.answer.map((item, key) => (
                      <p key={key} className="answer-content">{item}</p>
                    ))
                  }
                </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </Container>
    </Container>
  );
};

export default FaqComp;