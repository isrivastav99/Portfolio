import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";

import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import LinkedinIcon from "../../../assets/contact/linkedin.svg";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <p>
            <a
              href="https://www.facebook.com/srivastav.ishaan/"
              target="_blank"
            >
              <img src={FacebookIcon} alt="facebook" />
            </a>
          </p>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <p>
            <a href="https://twitter.com/isrivastav99" target="_blank">
              <img src={TwitterIcons} alt="Twitter" />
            </a>
          </p>
        </Col>
        <Col xs={12} lg={1} className="contact__social linkedin">
          <p>
            <a
              href="https://www.linkedin.com/in/ishaan-srivastav/"
              target="_blank"
            >
              <img
                src={LinkedinIcon}
                alt="Linkedin"
                style={{ maxWidth: "35%" }}
              />
            </a>
          </p>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
