import React, { useEffect } from 'react'
import { Container, Row, Col, CardFooter, Button, Card, CardHeader, CardBody } from 'reactstrap'
import { Footer, Navbar, MultiCarousel } from '../components'
import { myProjects, plans } from '../constants/services'

export default function Services({ history }) {
  useEffect(() => {
    document.body.classList.toggle("landing-page")

    return () => document.body.classList.toggle("landing-page")
  }, [])

  function goToContact(plan) {
    history.push({
      pathname: "/contact",
      state: plan.title
    })
  }

  return (
    <>
      <Navbar />

      <div className="wrapper">
        {/* <div className="page-header">
        </div> */}
        <section className="section section-lg" style={{ marginTop: 50 }}>
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <h1 className="text-left">Do you want to hire me for a service? </h1>
              </Col>
            </Row>
            <MultiCarousel
              items={plans.map((plan, index) => {
                return (
                  <div key={index} style={{ padding: 20 }}>
                    <Card>
                      <CardHeader className="text-center">
                        <div className={"icon icon-" + plan.color} style={{ padding: 20 }}>
                          <i className={plan.icon} style={{ fontSize: 30 }} />
                        </div>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col className="text-center" md="12">
                            <h4 className="text-uppercase">{plan.title}</h4>
                            <span>{plan.subtitle}</span>
                            <hr className={"line-" + plan.color} style={{ marginLeft: "45%", marginRight: "45%" }} />
                          </Col>
                        </Row>
                        <Row style={{ marginTop: 50 }}>
                          <Col className="text-center" md="6">
                            {plan.features.left.map((feature, index) => {
                              return (
                                <p key={index} className="text-center" md="6">{feature}</p>
                              )
                            })}
                          </Col>
                          <Col className="text-center" md="6">
                            {plan.features.right.map((feature, index) => {
                              return (
                                <p key={index} className="text-center" md="6">{feature}</p>
                              )
                            })}
                          </Col>
                        </Row>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button className="btn-simple" color={plan.color} onClick={() => goToContact(plan)}>
                          Contact
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                )
              })}
            />
          </Container>
        </section>

        <section className="section section-lg">
          <Container>
            <Row>
              <Col md="4">
                <h1 className="text-left">Projects I've done</h1>
              </Col>
            </Row>
            <Row>
              {myProjects.map((project, index) => {
                return (
                  <Col key={index} sm="4">
                    <Card>
                      <CardBody className="my-projects-services-body">
                        <img
                          alt={index + "..."}
                          className="img-raised"
                          height={200}
                          src={project.img}
                        />
                      </CardBody>
                      <CardFooter className="my-projects-services-footer">
                        {project.description}
                        <div className="btn-wrapper mb-3">
                          <a href={project.link} rel="noopener noreferrer" target="_blank"><Button color="info">View Project</Button></a>
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  )
}