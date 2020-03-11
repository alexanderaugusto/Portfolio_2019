import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap"

export default function HeaderNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false)
  const [collapseOut, setCollapseOut] = useState("")
  const [color, setColor] = useState("navbar-transparent")

  useEffect(() => {
    const changeColor = () => {
      console.log("entrou")
      if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
        setColor("bg-info")
      } else if (document.documentElement.scrollTop < 100 || document.body.scrollTop < 100) {
        setColor("navbar-transparent")
      }
    }

    window.addEventListener("scroll", changeColor, false)

    return () => window.removeEventListener("scroll", changeColor)
  })

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open")
    setCollapseOpen(!collapseOpen)
  }

  const onCollapseExiting = () => setCollapseOut("collapsing-out")

  const onCollapseExited = () => setCollapseOut("")

  return (
    <Navbar
      className={"fixed-top " + color}
      color-on-scroll="100"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            to="/"
            tag={Link}
          >
            Alexander Augusto
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="/" onClick={e => e.preventDefault()}>
                  Alexander Augusto
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/alexaasf_10"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me in twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/profile.php?id=100004918871887"
                rel="noopener noreferrer"
                target="_blank"
                title="Like me in facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/alexânder-augusto-5b8719149"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me in linkedin"
              >
                <i className="fab fa-linkedin"></i>
                <p className="d-lg-none d-xl-none">Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://github.com/alexanderaugusto"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me on github"
              >
                <i className="fab fa-github"></i>
                <p className="d-lg-none d-xl-none">Github</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
