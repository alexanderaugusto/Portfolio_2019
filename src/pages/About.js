import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap'
import { Footer, Navbar, VerticalTimeline, ScrollingModal } from '../components'
//import { jobTimeline, academic, job, projects } from '../constants/about'
import cv from '../assets/doc/cv.pdf'

export default function About({ language, setLanguage }) {
  const [tab, setTab] = useState("tab2")
  const [modal, setModal] = useState({ isOpen: false, title: "", body: null })

  // Import texts by current language
  const { aboutMe, jobTimeline, academic, job, projects, knowledge, aboutCentralModas } = require("../translation/" + language + "/about")

  useEffect(() => {
    document.body.classList.toggle("landing-page")

    return () => document.body.classList.toggle("landing-page")
  }, [])

  const isSelected = (card) => card === tab ? "upper bg-default" : ""

  const handleSelect = (card) => setTab(card)

  const handleShow = (e, card) => {
    e.preventDefault()

    setModal({ ...modal, title: card.title, body: card.fullText, isOpen: true })
  }

  const renderTabs = () => {
    if (tab === "tab1") {
      return (
        <>
          <h1>{academic.title}</h1>
          <p>{academic.introduction}</p>
          <br />
          <a
            className="font-weight-bold text-info mt-5"
            href=" #"
            onClick={e => handleShow(e, academic)}
          >
            Show all{" "}
            <i className="tim-icons icon-minimal-right text-info" />
          </a>
        </>
      )
    }
    else if (tab === "tab2") {
      return (
        <>
          <h1>{job.title}</h1>
          <p>{job.introduction}</p>
          <br />
          <a
            className="font-weight-bold text-info mt-5"
            href=" #"
            onClick={e => handleShow(e, job)}
          >
            Show all{" "}
            <i className="tim-icons icon-minimal-right text-info" />
          </a>
        </>
      )
    }
    else if (tab === "tab3") {
      return (
        <>
          <h1>{projects.title}</h1>
          <ul className="list-unstyled mt-5">
            {projects.introduction.map((project, index) => {
              return (
                <li key={index} className="py-2" style={{ marginBottom: -5 }}>
                  <div className="d-flex align-items-center" >
                    <div className="icon icon-success mb-2">
                      <i className="tim-icons icon-tap-02" />
                    </div>
                    <div className="ml-3">
                      <a href={project.route} rel="noopener noreferrer" target="_blank">{project.title}</a>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <br />
          <a
            className="font-weight-bold text-info mt-5"
            href=" #"
            onClick={e => handleShow(e, projects)}
          >
            Show all{" "}
            <i className="tim-icons icon-minimal-right text-info" />
          </a>
        </>
      )
    }
    else {
      return null
    }
  }

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../assets//img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets//img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("../assets//img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("../assets//img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("../assets//img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../assets//img/cercuri.png")}
          />

          <div className="content-center section-safe">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  About me
                </h1>
                <p className="text-white mb-3">
                  {aboutMe}
                </p>
                <div className="btn-wrapper mb-3">
                  <a href={cv} download><Button color="info">Download CV</Button></a>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("../assets/img/alexander_augusto.jpg")}
                  width="350"
                />
              </Col>
            </Row>
          </div>
        </div>

        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("../assets//img/path4.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className={"card-stats cursor-pointer " + isSelected("tab1")}>
                        <CardBody onClick={() => handleSelect("tab1")}>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-bank text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <CardTitle tag="h4">Academic</CardTitle>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className={"card-stats cursor-pointer " + isSelected("tab2")}>
                        <CardBody onClick={() => handleSelect("tab2")}>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-success">
                                <i className="tim-icons icon-money-coins text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <CardTitle tag="h4">Job</CardTitle>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className={"card-stats cursor-pointer " + isSelected("tab3")}>
                        <CardBody onClick={() => handleSelect("tab3")}>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-spaceship text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <CardTitle tag="h4">Projects</CardTitle>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    {renderTabs()}
                    <ScrollingModal isOpen={modal.isOpen} title={modal.title} body={modal.body}
                      toggle={() => setModal({ ...modal, isOpen: false })} />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>

        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../assets//img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets//img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("../assets//img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">What I know?</h1>
                <Row className="row-grid justify-content-center">
                  {knowledge.map((know, index) => {
                    return (
                      <Col key={index} lg="3">
                        <div className="info">
                          <div className={"icon icon-" + know.color}>
                            <i className={know.icon} />
                          </div>
                          <h4 className="info-title">{know.title}</h4>
                          <hr className={"line-" + know.color} />
                          <p>
                            {know.body}
                          </p>
                        </div>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("../assets//img/path5.png")}
          />
          <h1 className="text-center">Professional history</h1>
          <VerticalTimeline stories={jobTimeline} />
        </section>

        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../assets//img/path5.png")}
          />

          <Container>
            <h2 className="mb-5">Central Modas</h2>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <a href={aboutCentralModas.link} target="blank">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../assets//img/central_modas.png")}
                  />
                </a>
              </Col>
              <Col md="7">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>{aboutCentralModas.title}</h3>
                  <p>
                    {aboutCentralModas.body}
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <a href={aboutCentralModas.link} rel="noopener noreferrer" target="_blank">Visit the store</a>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <Row>
                    {aboutCentralModas.partners.map((partner, index) => {
                      return (
                        <Col key={index} className="text-center">
                          <small className="d-block text-uppercase font-weight-bold mb-4">
                            {partner.name}
                          </small>
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={partner.image}
                            style={{ width: "150px" }}
                          />
                          <p style={{ height: 90 }}>
                            {partner.description}
                          </p>
                          <div className="btn-wrapper profile">
                            <Button
                              className="btn-icon btn-neutral btn-round btn-simple"
                              color="default"
                              href={partner.twitter}
                              id="tooltip11"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip11">
                              Follow them
                            </UncontrolledTooltip>
                            <Button
                              className="btn-icon btn-neutral btn-round btn-simple"
                              color="default"
                              href={partner.facebook}
                              id="tooltip12"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-square" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip12">
                              Like them
                            </UncontrolledTooltip>
                            <Button
                              className="btn-icon btn-neutral btn-round btn-simple"
                              color="default"
                              href={partner.linkedin}
                              id="tooltip13"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip13">
                              Follow them
                            </UncontrolledTooltip>
                          </div>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  )
}