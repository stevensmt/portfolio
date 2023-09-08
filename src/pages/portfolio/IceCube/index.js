import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { 
  meta, 
  icecube,
  dataportfolio, 
} from "../../../content_option";
import { Link } from "react-router-dom";

export const Research = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Ice Cube | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Ice Cube</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bgg-image"
              style={{ backgroundImage: `url(${icecube.Img1})` }}
            ></div>
          </div>
          <div><br></br></div>
        </section>

        <section id="home" className="home">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <Col lg="4">
              <div className="intro mx-auto">
                <p className="mb-1x"><i>{icecube.Where}</i></p>
                <p className="mb-1x"><i>{icecube.Where2}</i></p>
                <p className="mb-1x"><b>{icecube.Title01}</b></p>
                <p className="mb-1x"><i>{icecube.info01}</i></p>
                <p className="mb-1x"><i>{icecube.info012}</i></p>
                <p className="mb-1x"><b>{icecube.Title02}</b></p>
                <p className="mb-1x"><i>{icecube.info02}</i></p>
                <p className="mb-1x"><i>{icecube.info022}</i></p>
                <p className="mb-1x"><b>{icecube.Title03}</b></p>
                <p className="mb-1x"><i>{icecube.info03}</i></p>

              </div>
            </Col>
            <Col lg="1"></Col>
            <Col lg="7">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{icecube.ResumeTitle}</h2>
                <br></br>
                <p className="mb-1x">{icecube.ResumeTxt}</p>
                <br></br>
                <p className="mb-1x"><b>{icecube.Title04}</b></p>
                <p className="mb-1x"><i>{icecube.info04}</i></p>
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
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bgg-image"
              style={{ backgroundImage: `url(${icecube.Img2})` }}
            ></div>
          </div>
        </section>

        <section>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <Col lg="10">
                <div className="intro mx-auto justify-content-center">
                  <p className="mb-1x">{icecube.GoalsTxt}</p>
                  <p className="mb-1x">{icecube.GoalsTxt2}</p>
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
          <Col lg="7"> 
          <div className="intro_sec d-block d-lg-flex align-items-center "> 
            <div
              className="h_bgg-image order-1 order-lg-3 h-100"
              style={{ backgroundImage: `url(${icecube.Img3})` }}
            ></div>
            </div>
          </Col>
          <Col lg="1"></Col>
          <Col lg="4"> 
            <div className="intro mx-auto">
              <p className="mb-1x">{icecube.DeroulementTxt}</p>
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
          <Col lg="4"> 
            <div className="intro mx-auto">

              <p className="mb-1x">{icecube.DeroulementTxt2}</p> 

            </div>
          </Col> 
          <Col lg="1"></Col>
          <Col lg="7">
          <div className="intro_sec d-block d-lg-flex "> 
            <div
              className="h_bgg-image order-1 order-lg-3 h-100"
              style={{ backgroundImage: `url(${icecube.Img4})` }}
            ></div>
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
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bgg-image"
              style={{ backgroundImage: `url(${icecube.Img5})` }}
            ></div>
          </div>
          <div className="d-block d-lg-flex align-items-center ">
            <div className="intro mx-auto">
              <a href={icecube.backLink}><b>Previous project</b></a>
            </div>
            <div className="intro mx-auto"></div>
            <div className="intro mx-auto">
              <a href={icecube.nextLink}><b>Next project</b></a>
            </div>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
         </div>
      </section>
      </Container>
    </HelmetProvider>
  );
};

