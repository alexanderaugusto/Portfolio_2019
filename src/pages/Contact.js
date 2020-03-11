import React, { useEffect, useState } from 'react'
import {
  Footer,
  Navbar,
} from '../components'
import {
  Container,
  Row, Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  UncontrolledTooltip
} from 'reactstrap'
import emailjs from 'emailjs-com'
import SweetAlert from 'react-bootstrap-sweetalert';

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [alert, setAlert] = useState({
    type: "",
    show: false,
    message: ""
  })

  useEffect(() => {
    document.body.classList.toggle("landing-page")

    return () => document.body.classList.toggle("landing-page")
  }, [])

  const handleEmail = async (e) => {
    e.preventDefault()

    const templateParams = {
      name,
      email,
      phone,
      company,
      message
    }

    await emailjs.send('outlook', 'template_H3QRI4gm', templateParams, 'user_9WxJaovQiOTodWI5Bb6Bk')
      .then((response) => {
        setAlert({ type: "success", message: "Your message was sended to Alexander! Thank you for contact.", show: true })
      }, (err) => {
        setAlert({ type: "danger", message: "An error ocurred when send a message! Plese, try again late.", show: true })
      })
  }

  return (
    <>
      <Navbar />

      <SweetAlert
        timeout={5000}
        show={alert.show}
        type={alert.type}
        onConfirm={() => setAlert({ ...alert, show: false })}
        onCancel={() => setAlert({ ...alert, show: false })}
        confirmBtnBsStyle={alert.type}
      >
        {alert.message}
      </SweetAlert>

      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("../assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("../assets/img/path4.png")}
          />

          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact Alexander</h1>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={(e) => handleEmail(e)}>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input
                                placeholder="Alexander Augusto"
                                type="text"
                                onChange={e => setName(e.target.value)} />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder="alexander@email.com"
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input
                                placeholder="(99) 99999-9999"
                                type="text"
                                onChange={e => setPhone(e.target.value)} />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input
                                placeholder="Central Modas"
                                type="text"
                                onChange={e => setCompany(e.target.value)} />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input
                                placeholder="Hello there!"
                                type="textarea"
                                onChange={e => setMessage(e.target.value)} />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          type="submit"
                          className="btn-round float-right"
                          color="info"
                          data-placement="right"
                          id="tooltip341148792"
                        // onClick={e => e.preventDefault()}
                        >
                          Send message
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Send message to Alexander
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" className="text-center">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow"
                    src={require("../assets/img/ripp.png")}
                    width="350"
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}