import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { 
  meta, 
  research,
  dataportfolio, 
} from "../../../content_option";
import { Link } from "react-router-dom";

export const Research = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Recherche | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Recherche</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bgg-image"
              style={{ backgroundImage: `url(${research.Img1})` }}
            ></div>
          </div>
          <div><br></br></div>
        </section>
        
        <section id="home" className="home">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <Col lg="4">
              <div className="intro mx-auto">

                <p className="mb-1x"><b>{research.Title01}</b></p>
                <p className="mb-1x"><i>{research.info01}</i></p>
                <p className="mb-1x"><i>{research.info012}</i></p>
                <p className="mb-1x"><b>{research.Title02}</b></p>
                <p className="mb-1x"><i>{research.info02}</i></p>
                <p className="mb-1x"><i>{research.info022}</i></p>
                <p className="mb-1x"><i>{research.info023}</i></p>
                <p className="mb-1x"><b>{research.Title03}</b></p>
                <p className="mb-1x"><i>{research.info03}</i></p>

              </div>
            </Col>
            <Col lg="1"></Col>
            <Col lg="7">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{research.ResumeTitle}</h2>
                <br></br>
                <p className="mb-1x">{research.ResumeTxt}</p>
                <br></br>
                <p className="mb-1x"><b>{research.Title04}</b></p>
                <p className="mb-1x"><i>{research.info04}</i></p>
                <br></br>
              </div>
            </Col>
          </div>
          <div>
          <br></br>
          <br></br>
          <br></br>
          </div>
        </section>

        <section id="home" className="home">
        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">  
        <Col lg="7"> 
            <div className="intro mx-auto">
            <h3 className="mb-1x">{research.GoalsTitle}</h3> 
              <br></br>
              <p className="mb-1x">{research.GoalsTxt}</p> 
              <p className="mb-1x">{research.GoalsTxt2}</p> 
              <p className="mb-1x">{research.GoalsTxt3}</p> 
              <p className="mb-1x">{research.GoalsTxt4}</p> 
              <p className="mb-1x">{research.GoalsTxt5}</p> 
              <br></br>
              <br></br>
              <br></br>
            </div>
          </Col> 
          <Col lg="1"></Col>
          <Col lg="4"> 
          <div className="intro_sec d-block d-lg-flex align-items-center "> 
            <div
              className="h_bgg-image order-1 order-lg-3 h-100"
              style={{ backgroundImage: `url(${research.Img3})` }}
            ></div>
            </div>
          </Col>

          </div>
          <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </div>
        </section>

        <section id="home" className="home">
        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
          <Col lg="4">
          <div className="intro_sec d-block d-lg-flex "> 
            <div
              className="h_bgg-image order-1 order-lg-3 h-100"
              style={{ backgroundImage: `url(${research.Img4})` }}
            ></div>
            </div>
          </Col>
          <Col lg="1"></Col>
          <Col lg="7"> 
            <div className="intro mx-auto">
              <h3 className="mb-1x">{research.DeroulementTxt}</h3> 
              <br></br>
              <p className="mb-1x">{research.DeroulementTxt2}</p> 
              <br></br>
              <br></br>
              <br></br>
            </div>
          </Col> 
          </div>
        </section>

        <section id="home" className="home">
          <div className="intro_sec d-lg-flex align-items-center">
            <div className="img-last" style={{ backgroundImage: `url(${research.Img5})` }}
            ></div>
          </div>
          <div className="d-lg-flex align-items-center end-img">
            <div className="intro mx-auto align-items-center">
              <a className="txt" href={research.backLink}><b>Previous project</b></a>
            </div>
            <div className="intro mx-auto align-items-center">
              <a className="txt" href={research.nextLink}><b>Next project</b></a>
            </div> 
          </div>
      </section>
      
      </Container>
    </HelmetProvider>
  );
};

