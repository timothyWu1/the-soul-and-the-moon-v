import React, { useState } from "react"
import {
  Container,
  Row,
  Col,

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
            
            <Col lg="5" className="text-center text-lg-start">
              
              <p className="mb-lg-0">
                &copy; {new Date().getFullYear()} The Soul And The Moon. Tout droits réservés.
              </p>
              
            </Col>
            <Col lg="3" className="text-center mx-auto">
            <li className="list-inline-item text-center d-flex align-items-center">
              
                <a
                  className="text-reset text-hover-primary text-center display-6"
                  href="https://www.instagram.com/the.soul.and.the.moon"
                  aria-label="Go to instagram"
                >
                  
                  <FontAwesomeIcon icon={faInstagram} />

                  <h6> Visiter notre instagram </h6>
                  </a>
              </li>

            </Col>
            <Col lg="4">
              
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-lg-end">
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/a-propos.html">
                  |  A propos de nous{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/cvg.html">
                  |  Condition générale de vente{" "}
                  </a>
                </li>
           
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/privacy.html">
                  |  Politique de confidentialité{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/contact.html">
                  |  Nous contacter{" "}
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
