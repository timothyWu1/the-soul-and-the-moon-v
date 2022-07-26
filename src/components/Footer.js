import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Collapse,
} from "react-bootstrap"



import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

import Icon from "./Icon"
import Link from "next/link"
import ServicesBlock from "./ServicesBlock"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  const [columnOpen, setColumnOpen] = useState({})

  const toggleColumn = (e, name) => {
    e.preventDefault()
    setColumnOpen({ ...columnOpen, [name]: !columnOpen[name] })
  }
  return (
    <footer>
      <ServicesBlock />
     
      <div className="py-4 fw-light text-muted">
        <Container>
          <Row className="align-items-center text-sm text-gray-500">
            
            <Col lg="4" className="text-center text-lg-start">
              
              <p className="mb-lg-0">
                &copy; {new Date().getFullYear()} The Soul And The Moon. Tout droits réservés.
              </p>
              
            </Col>
            <Col lg="4">
            <li className="list-inline-item ">
              
                <a
                  className="text-reset text-hover-primary"
                  href="https://www.instagram.com/the.soul.and.the.moon"
                  aria-label="Go to instagram"
                >
                  
                  <FontAwesomeIcon icon={faInstagram} />

                  <h7> | Visiter mon instagram </h7>
                  </a>
              </li>

            </Col>
            <Col lg="4">
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-lg-end">
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/about-2">
                  Nous contacter{" "}
                  </a>
                </li>
           
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/privacy">
                  |  Condition générale de vente{" "}
                  </a>
                </li>
                   
                
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
