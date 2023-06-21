import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { 
  meta, 
  icecube, 
} from "../../../content_option";
import { Link } from "react-router-dom";

export const IceCube = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Ice Cube | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${icecube.img_link01})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{icecube.title}</h2>
                  <p className="mb-1x">{icecube.none}</p>
                  <p className="mb-1x">{icecube.resumeEN}</p>
                  <p className="mb-1x"><i>{icecube.resume}</i></p>
                  <p className="mb-1x">{icecube.description}</p>
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
                  <h2 className="mb-1x">{icecube.titleObj}</h2>
                  <p className="mb-1x">{icecube.none}</p>
                  <p className="mb-1x">{icecube.objectifEN}</p>
                  <p className="mb-1x"><i>{icecube.objectif}</i></p>
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
                  <h2 className="mb-1x">{icecube.title03}</h2>
                  <p className="mb-1x">{icecube.none}</p>
                  <p className="mb-1x">{icecube.ENtext03}</p>
                  <p className="mb-1x">{icecube.ENtxt33}</p>
                  <p className="mb-1x">{icecube.ENtxt34}</p>
                  <p className="mb-1x">{icecube.ENtxt35}</p>
                  <p className="mb-1x">{icecube.ENtxt36}</p>
                  <p className="mb-1x">{icecube.none}</p>
                  <p className="mb-1x"><i>{icecube.text03}</i></p>
                  <p className="mb-1x"><i>{icecube.txt33}</i></p>
                  <p className="mb-1x"><i>{icecube.txt34}</i></p>
                  <p className="mb-1x"><i>{icecube.txt35}</i></p>
                  <p className="mb-1x"><i>{icecube.txt36}</i></p>
                </div>
              </div>
            </div>
            <div
              className="h_bg-image order-2 order-lg-1 h-100 "
              style={{ backgroundImage: `url(${icecube.img_link02})` }}
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
              style={{ backgroundImage: `url(${icecube.img_link03})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{icecube.title02}</h2>
                  <p className="mb-1x">{icecube.none}</p>
                  <p className="mb-1x">{icecube.ENtext02}</p>
                  <p className="mb-1x">{icecube.ENtxt23}</p>
                  <p className="mb-1x">{icecube.ENtxt24}</p>
                  <p className="mb-1x">{icecube.ENtxt25}</p>
                  <p className="mb-1x">{icecube.ENtxt26}</p>
                  <p className="mb-1x">{icecube.none}</p>
                  <p className="mb-1x"><i>{icecube.text02}</i></p>
                  <p className="mb-1x"><i>{icecube.txt23}</i></p>
                  <p className="mb-1x"><i>{icecube.txt24}</i></p>
                  <p className="mb-1x"><i>{icecube.txt25}</i></p>
                  <p className="mb-1x"><i>{icecube.txt26}</i></p>                </div>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </HelmetProvider>
  );
};

