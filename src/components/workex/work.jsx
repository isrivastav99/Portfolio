import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./work.scss";
//Assets

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
      <div id="work">
        <div className="wrapper">
          <Title title="WORK EXPERIENCE." />
          <div className="col-md-6">
            <h2>SHORTHILLS TECH.</h2>
          </div>
          <Row className="lmargin">
            <div className="col-md-6 ">
              <h3>SDE & SEO ANALYST INTERN</h3>
            </div>
            <div className="col-md-6">
              <time className="period">May-June 2020</time>
            </div>
          </Row>
          <div className="col-md-9" style={{ marginBottom: 15 }}>
            <p className="font15 ">
              Worked on bug fixes for the products website
              www.bestviewsreviews.com. Led the SEO analysis team for both the
              main website and the blog content leading to a 30% increase in
              daily users
            </p>
          </div>
          <div className="col-md-6">
            <h2>BHARTI FOUNDATION</h2>
          </div>
          <Row className="lmargin">
            <div className="col-md-6">
              <h3>RESEARCH & DATA ANALYST INTERN</h3>
            </div>
            <div className="col-md-6">
              <time className="period">Dec 2019-Jan 2020</time>
            </div>
          </Row>
          <div className="col-md-9" style={{ marginBottom: 15 }}>
            <p className="font15">
              Successfully Implemented Data Analytics tools like Pandas and
              NumPy in the field of gender stratification and its impact on
              employment of future generations. Efficiently analyzed diverse
              data of over 30,000 students from 200 schools ranging over 30
              cities across 8 states.
            </p>
          </div>

          {/* <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
              <p>Constructed a word predictor application 
              optimising it with an integrated Genetic Algorithm in Javascript on the P5.js framework</p>
              </div>
            </Col> */}
        </div>
      </div>
    );
  }
}

export default Portfolio;
