import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import myimage from '../../assets/hero/prof.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello!!!</h1>
            <h1 className="weight800 font60">
              I am Ishaan Srivastav
            </h1>
            <p className="font12">
            I'm a final year Engineering student 
            completing my Bachelors Degree<br></br> in Electronics 
            and Communication from Netaji Subas University of Technology
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={myimage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
