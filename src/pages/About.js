import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../components'
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

export default function About() {
  useEffect(() => {
    document.body.classList.toggle("landing-page")

    return () => document.body.classList.toggle("landing-page")
  }, [])

  const isSelected = (card) => card === cardSelected.title ? "upper bg-default" : ""

  const handleSelect = (title, component) => setCardSelected({ title, component })

  const academic = () => {
    return (
      <>
        <h1>
          Academic
        </h1>
        <p>
          I am a student of Computer Engineering at the Instituto Nacional de Telecomunicações (Inatel).
          I started studying at 01/2017 and I intend to graduate on 12/2021.I'm a student
        </p>
      </>
    )
  }

  const job = () => {
    return (
      <>
        <h1>
          Job
        </h1>
        <p>
          I am currently doing an internship at Aurem. I work with the development of Aurem Genus, both the
          frontend and the backend.
        </p>
      </>
    )
  }

  const hobbies = () => {
    return (
      <>
        <h1>
          Hobbies
        </h1>
        <p>
          In addition to liking the web and mobile development area, I take part of my time outdoors,
          to play sports, such as football, table tennis, racing and playing electronic games like League Of Legends.
        </p>
      </>
    )
  }

  const [cardSelected, setCardSelected] = useState({ title: "job", component: job })

  return (
    <>
      <Navbar />

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

          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  About me
                </h1>
                <p className="text-white mb-3">
                  Hello everyone, I'm Alexander. I am passionate about technology, and at the moment
                  I am dedicating my career to web and mobile development. In the future, I have plans to
                  become a data scientist, I started to learn about this area and I was already fascinated.
                </p>
                <div className="btn-wrapper mb-3">
                  <Button color="info">Download CV</Button>
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
                      <Card className={"card-stats cursor-pointer " + isSelected("academic")}>
                        <CardBody onClick={() => handleSelect("academic", academic)}>
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
                      <Card className={"card-stats cursor-pointer " + isSelected("job")}>
                        <CardBody onClick={() => handleSelect("job", job)}>
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
                      <Card className={"card-stats cursor-pointer " + isSelected("hobbies")}>
                        <CardBody onClick={() => handleSelect("hobbies", hobbies)}>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-spaceship text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <CardTitle tag="h4">Hobbies</CardTitle>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    {cardSelected.component()}
                    {/* <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Show all{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a> */}
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
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="fas fa-code"></i>
                      </div>
                      <h4 className="info-title">Software Development</h4>
                      <hr className="line-warning" />
                      <p>
                        I have knowledge in C / C ++ programming languages, Java, JavaScript and I know a
                        little about Python, Lua and R. I love creating software with javascript,
                        I use the React library in the application frontend and the Node Js interpreter
                        MySQL database and MongoDB on the backend.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-atom" />
                      </div>
                      <h4 className="info-title">Data Science</h4>
                      <hr className="line-success" />
                      <p>
                        I'm start with learning Python and R. After then I will start to learn IA,
                        Machine Learning and Big Data.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className="fas fa-microchip"></i>
                      </div>
                      <h4 className="info-title">Hardware</h4>
                      <hr className="line-info" />
                      <p>
                        I have an introduction to microcontroller programming, I have already used
                        microcontrollers from the ARM and MSP family. I also know how to create circuit
                        boards with Altium Designer and a brief knowledge of 3D modeling with SolidWorks.
                      </p>
                    </div>
                  </Col>
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

          <Container>
            <h2 className="mb-5">Central Modas</h2>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <a href="https://centralmodas-frontend-web.herokuapp.com/" target="blank">
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
                  <h3>About Central Modas</h3>
                  <p>
                    It all started with the idea of creating a website for a friend's physical store. So I
                    joined two friends: Otavio Augusto (store owner) who was responsible for the financial
                    part of the business and Paulo Júnior who was responsible for marketing the business.
                    I was responsible for the technology and development of e-commerce.
                    There came a time when I had the idea of expanding the website to several stores and
                    not just to a single one, so we adhered to the idea and today Cental Modas is an e-commerce
                    for shoes, fashion and all kinds of accessories.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <a href="https://centralmodas-frontend-web.herokuapp.com/" rel="noopener noreferrer" target="_blank">Visit the store</a>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <Row>
                    <Col className="text-center">
                      <small className="d-block text-uppercase font-weight-bold mb-4">
                        Otavio Augusto
                      </small>
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src={require("../assets/img/otavio_augusto.jpg")}
                        style={{ width: "150px" }}
                      />
                      <p>
                        Civil Engineering student and responsible for the financial part of Central Modas.
                      </p>
                      <div className="btn-wrapper profile">
                        <Button
                          className="btn-icon btn-neutral btn-round btn-simple"
                          color="default"
                          href="https://twitter.com/alexaasf_10"
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
                          href="https://www.facebook.com/profile.php?id=100004918871887"
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
                          href="https://www.linkedin.com/in/alexânder-augusto-5b8719149"
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
                    <Col className="text-center">
                      <small className="d-block text-uppercase font-weight-bold mb-4">
                        Paulo Júnior
                      </small>
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src={require("../assets/img/paulo_junior.jpg")}
                        style={{ width: "150px" }}
                      />
                      <p>
                        Business student and responsible for the commercial and marketing part of Central Modas.
                      </p>
                      <div className="btn-wrapper profile">
                        <Button
                          className="btn-icon btn-neutral btn-round btn-simple"
                          color="default"
                          href="https://twitter.com/alexaasf_10"
                          id="tooltip21"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip21">
                          Follow them
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-neutral btn-round btn-simple"
                          color="default"
                          href="https://www.facebook.com/profile.php?id=100004918871887"
                          id="tooltip22"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip22">
                          Like them
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-neutral btn-round btn-simple"
                          color="default"
                          href="https://www.linkedin.com/in/alexânder-augusto-5b8719149"
                          id="tooltip33"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip33">
                          Follow them
                        </UncontrolledTooltip>
                      </div>
                    </Col>
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