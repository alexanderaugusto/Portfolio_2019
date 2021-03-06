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
import ClipLoader from "react-spinners/ClipLoader"
import emailjs from 'emailjs-com'
import SweetAlert from 'react-bootstrap-sweetalert';

export default function Contact({ location, language, setLanguage }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({
    type: "default",
    show: false,
    message: ""
  })

  useEffect(() => {
    document.body.classList.toggle("landing-page")

    return () => document.body.classList.toggle("landing-page")
  }, [])

  const checkData = (e) => {
    e.preventDefault()

    if (name.length && email.length && phone.length && message) {
      handleEmail()
    } else {
      setAlert({ type: "danger", message: "Sorry! Some fields are mandatory.", show: true })

      let error = inputError

      if (!name.length) {
        error.name = true
      }
      if (!email.length) {
        error.email = true
      }
      if (!phone.length) {
        error.phone = true
      }
      if (!message.length) {
        error.message = true
      }

      setInputError(error)
    }
  }

  const handleEmail = async () => {
    const templateParams = {
      name,
      email,
      phone,
      company,
      message,
      service: location.state
    }

    setLoading(true)

    await emailjs.send('outlook', 'template_H3QRI4gm', templateParams, 'user_9WxJaovQiOTodWI5Bb6Bk')
      .then((response) => {
        setAlert({ type: "success", message: "Your message was sended to Alexander! Thank you for contact.", show: true })
      }, (err) => {
        setAlert({ type: "danger", message: "An error ocurred when send a message! Plese, try again late.", show: true })
      })

    setLoading(false)
  }

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <SweetAlert
        timeout={5000}
        title="Message"
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

          <section className="section section-safe">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact Alexander</h1>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={(e) => checkData(e)}>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input
                                style={{ borderColor: inputError.name && "red" }}
                                placeholder="Ex: Alexander Augusto"
                                type="text"
                                onChange={e => {
                                  setName(e.target.value)                          
                                  setInputError({ ...inputError, name: false })
                                }} />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                style={{ borderColor: inputError.email && "red" }}
                                placeholder="Ex: alexander@email.com"
                                type="email"
                                onChange={e => {
                                  setEmail(e.target.value)                          
                                  setInputError({ ...inputError, email: false })
                                }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input
                                style={{ borderColor: inputError.phone && "red" }}
                                placeholder="Ex: (99) 99999-9999"
                                type="text"
                                onChange={e => {
                                  setPhone(e.target.value)                          
                                  setInputError({ ...inputError, phone: false })
                                }} />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input
                                placeholder="Ex: Central Modas"
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
                                style={{ borderColor: inputError.message && "red" }}
                                placeholder="Ex: Hello there!"
                                type="textarea"
                                onChange={e => {
                                  setMessage(e.target.value)                          
                                  setInputError({ ...inputError, message: false })
                                }} />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            {location.state &&
                              <h4>Service:
                              <span style={{ fontSize: 14, marginLeft: 10, color: "#ffc107" }}>{location.state}
                                </span>
                              </h4>
                            }
                          </Col>
                          <Col className="text-right">
                            <Button
                              type="submit"
                              className="btn-round float-right"
                              color="info"
                              data-placement="right"
                              id="tooltip341148792"
                              disabled={loading}
                            // onClick={e => e.preventDefault()}
                            >
                              {!loading ? "Send message" :
                                <ClipLoader
                                  size={25}
                                  color="white"
                                  loading={loading}

                                />
                              }
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="right"
                              target="tooltip341148792"
                            >
                              Send message to Alexander
                            </UncontrolledTooltip>
                          </Col>
                        </Row>
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