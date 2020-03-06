import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Recommendation from "../Recommendation/Recommendation";
import "./Template.css";
import "./Template2.css";
import Navigation from "../Navigation/Navigation";
export default class Template extends Component {
  render() {
    return (
      <>
        <Navigation />
        <header className="masthead text-center text-white">
          <div className="masthead-content">
            <Container fluid>
              <Row>
                <Col
                  sm={12}
                  md={{ span: 12, offset: 0 }}
                  lg={{ span: 10, offset: 1 }}
                  xl={{ span: 7, offset: 0 }}
                >
                  <VideoPlayer />
                </Col>

                <Col sm={12} md={12} lg={12} xl={{ span: 4, offset: -1 }}>
                  <Recommendation />
                </Col>
              </Row>
              {/* <h1 className="masthead-heading mb-0">One Page Wonder</h1>
              <h2 className="masthead-subheading mb-0">
                Will Rock Your Socks Off
              </h2>
              <Link to="#" className="btn btn-primary btn-xl rounded-pill mt-5">
                Learn More
              </Link> */}
            </Container>
          </div>

          <div className="bg-circle-1 bg-circle"></div>
          <div className="bg-circle-2 bg-circle"></div>
          <div className="bg-circle-3 bg-circle"></div>
          <div className="bg-circle-4 bg-circle"></div>
        </header>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="img/01.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">For those about to rock...</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-5 bg-black">
          <div className="container">
            <p className="m-0 text-center text-white small">
              Copyright &copy; Ryan and Olgy 2020
            </p>
          </div>
        </footer>
      </>
    );
  }
}