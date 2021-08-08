import React from "react";
import Typical from "react-typical";
import {titles} from "../data";
import pdf from "../Jackie-Ye-Resume.pdf";

const IntroductionHero = () => {

  const HeaderTitleAnimation = React.memo(() => {
    const returnedTitles = titles.map(title => [title.toUpperCase(), 1500]).flat();
    return (
      <Typical className="title-styles" steps={returnedTitles} loop={50}/>
    )
  });

   const onResumeClick = () => {
    window.open(pdf);
  }
  
  return (
    <header id="home" style={{height: window.innerHeight-140, display: "block"}}>
      <div className="row aligner" style={{height: "100%"}}>
        <div className="col-md-12">
          <div>
          <span className="iconify header-icon" data-icon="mdi:ghost" data-inline="false"></span>           
          <br />
            <h1 className="mb-0">
              <Typical steps={["Jackie Ye"]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleAnimation />
            </div>
            <h1 className="mb-0" style={{cursor: "pointer"}} onClick={onResumeClick}>
              <Typical steps={["RESUME"]} wrapper="p"/>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default IntroductionHero;