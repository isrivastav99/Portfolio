import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Keylogger from "../../assets/portfolio/project01/keylogger.jpg";
import MBoard from "../../assets/portfolio/project02/mboard.jpg";
import GA from "../../assets/portfolio/project03/GA.jpg";
import FaceRecog from "../../assets/portfolio/project04/facerecog.jpg";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      // projects: [
      //   {
      //     id: "1",
      //     preview: Keylogger,
      //     title: "Keylogger",
      //   },
      //   {
      //     id: "2",
      //     preview: MBoard,
      //     title: "Message Board",

      //   },
      //   {
      //     id: "3",
      //     preview: GA,
      //     title: "Path Finder",

      //   },
      //   {
      //     id: "4",
      //     preview: FaceRecog,
      //     title: "Face Recognition WebApp",

      //   },
      //  /* {
      //     id: "5",
      //     preview: Keylogger,
      //     title: "Label",
      //     tag: "illustrations",
      //   },
      //   {
      //     id: "6",
      //     preview: Keylogger,
      //     title: "lemons",
      //     tag: "branding",
      //   },*/
      // ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
    };
  }

  // // FIRST LOAD
  // componentDidMount() {
  //   this.filterGallery("all");
  // }

  // //FILTER PORTFOLIO FUNCTION
  // filterGallery = (target) => {
  //   let projectsArr = [...this.state.projects];
  //   let result;

  //   if (target !== "all") {
  //     result = projectsArr.filter((project) => project.tag === target);
  //   } else {
  //     result = projectsArr;
  //   }

  //   this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  // };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };
  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    //  let projectsRender = null;
    //     if (this.state.filterResult) {
    //       projectsRender = this.state.filterResult.map((project) => (
    //         <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
    //       ));
    //     }
    //     // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    //     // PORTFOLIO FILTER DROPDOWN MENY RENDER
    //     let filterDroppDown = null;
    //     if(this.state.filterMenuActive) {
    //       filterDroppDown = (
    //         <div className="portfolio__filter-menu shadow">
    //           <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
    //             NEWEST
    //           </p>
    //           <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
    //             OLDEST
    //           </p>
    //         </div>
    //       );
    //     }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="PROJECTS." />
          <Row>
            <div className="col-md-6 ">
              <h2>KeyLogger</h2>
            </div>
            <div className="col-md-6">
              <time className="period">October 2020</time>
            </div>
          </Row>
          <div className="col-md-9" style={{ marginBottom: 15 }}>
            <p className="text-muted">
              Designing an advanced key-logger in C++ capable of recording
              keystrokes and mouse clicks from the host computer. The software
              maintains an custom encrypted timestamped log file which can be
              shared with any email id atregular defined intervals
            </p>
          </div>
          <Row>
            <div className="col-md-6 ">
              <h2>Live Message Board</h2>
            </div>
            <div className="col-md-6">
              <time className="period">June 2020</time>
            </div>
          </Row>
          <div className="col-md-9" style={{ marginBottom: 15 }}>
            <p className="text-muted">
              Designed a live message board using Flutter and Firebase which can
              be used as a discussion forum or as a group chat. The application
              was successfully utilised in IntraMun’20 for inter-participant
              communication between 200 users.
            </p>
          </div>
          <Row>
            <div className="col-md-6">
              <h2>Word Predictor</h2>
            </div>
            <div className="col-md-6">
              <time className="period">December 2019</time>
            </div>
          </Row>
          <div className="col-md-9" style={{ marginBottom: 15 }}>
            <p>
              Constructed a word predictor application optimising it with an
              integrated Genetic Algorithm in Javascript on the P5.js framework
            </p>
          </div>

          <Row>
            <div className="col-md-6">
              <h2>Object Path Optimizer</h2>
            </div>
            <div className="col-md-6">
              <time className="period">Jan 2020</time>
            </div>
          </Row>
          <div className="col-md-9" style={{ marginBottom: 15 }}>
            <p className="text-muted">
              Implemented a Path Planning routine in P5.js. The goal for agents
              was to find the shortest path between two defined position
              co-ordinates in presence of obstacles. I utilised Genetic
              Algorithm to optimize individual behaviour while maintaining the
              required constraints.
            </p>
          </div>

          <Row>
            <div className="col-md-6 pmargin">
              <h2>Face-Recognition App</h2>
            </div>
            <div className="col-md-6">
              <time className="period">June 2019 </time>
            </div>
          </Row>
          <div className="col-md-9" style={{ marginBottom: 15 }}>
            <p className="text-muted">
              A facial recognition app made on ReactJs using the Clarifai API
              with the backend using Node and Express. The app is currently
              deployed on heroku :
              <a href="https://facerecognition-ishaan.herokuapp.com/">
                {" https://facerecognition-ishaan.herokuapp.com/"}
              </a>
            </p>
          </div>

          {/* <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
              <p>Constructed a word predictor application 
              optimising it with an integrated Genetic Algorithm in Javascript on the P5.js framework</p>
              </div>
            </Col> */}

          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR ME?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
