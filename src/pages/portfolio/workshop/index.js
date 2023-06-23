import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { 
  meta, 
  workshop, 
} from "../../../content_option";
import { Link } from "react-router-dom";

export const Workshop = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Workshop & Design thinking project | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Workshop & Design thinking project</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${workshop.img_link01})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{workshop.title}</h2>
                  <p className="mb-1x">{workshop.none}</p>
                  <p className="mb-1x">{workshop.resumeEN}</p>
                  <p className="mb-1x"><i>{workshop.resume}</i></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div className="text order-2 order-lg-2 h-200 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{workshop.titleObj}</h2>
                  <p className="mb-1x">{workshop.none}</p>
                  <p className="mb-1x">{workshop.objectifEN}</p>
                  <p className="mb-1x"><i>{workshop.objectif}</i></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div  className="text order-1 order-lg-2 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{workshop.title03}</h2>
                  <p className="mb-1x">{workshop.none}</p>
                  <p className="mb-1x">{workshop.ENtext03}</p>
                  <p className="mb-1x">{workshop.ENtxt33}</p>
                  <p className="mb-1x">{workshop.ENtxt34}</p>
                  <p className="mb-1x">{workshop.ENtxt35}</p>
                  <p className="mb-1x">{workshop.ENtxt36}</p>
                  <p className="mb-1x">{workshop.none}</p>
                  <p className="mb-1x"><i>{workshop.text03}</i></p>
                  <p className="mb-1x"><i>{workshop.txt33}</i></p>
                  <p className="mb-1x"><i>{workshop.txt34}</i></p>
                  <p className="mb-1x"><i>{workshop.txt35}</i></p>
                  <p className="mb-1x"><i>{workshop.txt36}</i></p>
                </div>
              </div>
            </div>
            <div
              className="h_bg-image order-2 order-lg-1 h-100 "
              style={{ backgroundImage: `url(${workshop.img_link02})` }}
            ></div>
          </div>
        </section>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
          </Col>
        </Row>
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${workshop.img_link03})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{workshop.title02}</h2>
                  <p className="mb-1x">{workshop.none}</p>
                  <p className="mb-1x">{workshop.ENtext02}</p>
                  <p className="mb-1x">{workshop.ENtxt23}</p>
                  <p className="mb-1x">{workshop.ENtxt24}</p>
                  <p className="mb-1x">{workshop.ENtxt25}</p>
                  <p className="mb-1x">{workshop.ENtxt26}</p>
                  <p className="mb-1x">{workshop.none}</p>
                  <p className="mb-1x"><i>{workshop.text02}</i></p>
                  <p className="mb-1x"><i>{workshop.txt23}</i></p>
                  <p className="mb-1x"><i>{workshop.txt24}</i></p>
                  <p className="mb-1x"><i>{workshop.txt25}</i></p>
                  <p className="mb-1x"><i>{workshop.txt26}</i></p>                </div>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </HelmetProvider>
  );
};

