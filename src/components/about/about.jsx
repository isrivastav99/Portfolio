import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font16">
        Im highly passionate about software, video games and basketball. If you
        were to take a gander, I'd be doing one of those at this very moment.
        <br></br>I also like to take a dab at sketching and music in my free
        time.
      </p>
      {/* <Row>
        <Col md={12} lg={4}>
          <TeamBox
            avatar={Person01}
            name="Ishaan Srivastav"
            job="Software Developer"
          />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row> */}
    </div>
  </div>
);

export default about;
