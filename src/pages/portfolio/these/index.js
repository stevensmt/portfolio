import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { 
  meta, 
  these, 
} from "../../../content_option";
import { Link } from "react-router-dom";

export const These = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Thèse | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Thèse</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${these.img_link01})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{these.title}</h2>
                  <p className="mb-1x">{these.none}</p>
                  <p className="mb-1x">{these.resumeEN}</p>
                  <p className="mb-1x"><i>{these.resume}</i></p>
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
                  <h2 className="mb-1x">{these.titleObj}</h2>
                  <p className="mb-1x">{these.none}</p>
                  <p className="mb-1x">{these.objectifEN}</p>
                  <p className="mb-1x"><i>{these.objectif}</i></p>
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
                  <h2 className="mb-1x">{these.title03}</h2>
                  <p className="mb-1x">{these.none}</p>
                  <p className="mb-1x">{these.ENtext03}</p>
                  <p className="mb-1x">{these.ENtxt33}</p>
                  <p className="mb-1x">{these.ENtxt34}</p>
                  <p className="mb-1x">{these.ENtxt35}</p>
                  <p className="mb-1x">{these.ENtxt36}</p>
                  <p className="mb-1x">{these.none}</p>
                  <p className="mb-1x"><i>{these.text03}</i></p>
                  <p className="mb-1x"><i>{these.txt33}</i></p>
                  <p className="mb-1x"><i>{these.txt34}</i></p>
                  <p className="mb-1x"><i>{these.txt35}</i></p>
                  <p className="mb-1x"><i>{these.txt36}</i></p>
                </div>
              </div>
            </div>
            <div
              className="h_bg-image order-2 order-lg-1 h-100 "
              style={{ backgroundImage: `url(${these.img_link02})` }}
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
              style={{ backgroundImage: `url(${these.img_link03})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{these.title02}</h2>
                  <p className="mb-1x">{these.none}</p>
                  <p className="mb-1x">{these.ENtext02}</p>
                  <p className="mb-1x">{these.ENtxt23}</p>
                  <p className="mb-1x">{these.ENtxt24}</p>
                  <p className="mb-1x">{these.ENtxt25}</p>
                  <p className="mb-1x">{these.ENtxt26}</p>
                  <p className="mb-1x">{these.none}</p>
                  <p className="mb-1x"><i>{these.text02}</i></p>
                  <p className="mb-1x"><i>{these.txt23}</i></p>
                  <p className="mb-1x"><i>{these.txt24}</i></p>
                  <p className="mb-1x"><i>{these.txt25}</i></p>
                  <p className="mb-1x"><i>{these.txt26}</i></p>                </div>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </HelmetProvider>
  );
};

