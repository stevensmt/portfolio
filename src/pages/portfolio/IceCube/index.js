import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { 
  meta, 
  icecube, 
} from "../../../content_option";

export const IceCube = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Ice Cube | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <section id="part1" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${icecube.img_link01})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{icecube.title}</h2>
                  <p className="mb-1x">{icecube.resume}</p>
                  <p className="mb-1x">{icecube.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="part2" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{icecube.titleObj}</h2>
                  <p className="mb-1x">{icecube.objectif}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="part3" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${icecube.img_link02})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{icecube.title02}</h2>
                  <p className="mb-1x">{icecube.text02}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="part4" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
              className="h_bg-image order-1 order-lg-2 h-100 "
              style={{ backgroundImage: `url(${icecube.img_link03})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{icecube.title03}</h2>
                  <p className="mb-1x">{icecube.text03}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};

