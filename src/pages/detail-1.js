import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Alert,
  Form,
  Button,
  Input,
  InputGroup,
} from "react-bootstrap"
import Magnifier from "react-magnifier"

import Icon from "../components/Icon"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import Link from "next/link"
import SelectBox from "../components/SelectBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"


import Image from "../components/Image"

export async function getStaticProps() {
  return {
    props: {
      title: "Product with sticky info",
    },
  }
}

const Detail1 = () => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [activeType, setActiveType] = useState("material_0")
  const [alert, setAlert] = useState(true)
  const onClick = (e, index) => {
    e.preventDefault()
    setActiveImage(index)
    setLightBoxOpen(!lightBoxOpen)
  }

  const customStyles = {
    overlay: {
      zIndex: "1000",
    },
    bodyOpen: {
      position: "fixed",
    },
  }

  // const images = dummyProduct.img.detail

  return (
    <React.Fragment>
      
      <section>
      <div className=".d-none .d-md-block .d-lg-none">
      <Container className="py-6 categories 	.d-none"></Container>
      </div>
        <Container fluid className="px-xl-7 pt-5 pb-3 pb-lg-6">
        
          <Breadcrumb>
            <Link href="/" passHref>
              <Breadcrumb.Item>Accueil</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>Produit</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col
              lg="6"
              xl="7"
              className="pt-4 order-2 order-lg-1 photoswipe-gallery"
            >  <Image
            className="img-scale card-img mb-2"
            src="/img/product/E.png"
            width={40}
            height={30}
            sizes="(max-width: 150px) calc(150vw - 30px), 50vw"
            
          />
             {/* <Magnifier
                    mgShowOverflow={false}
                    mgWidth={2000}
                    mgHeight={2000}
                    className="img-fluid"
                    src={image.img}
                    alt={image.alt}
                    zoomFactor={0.11}
                    style={{ cursor: "pointer" }}
                  /> */}
       
         
              
            </Col>
            <Col lg="6" xl="4" className="pt-4 order-1 order-lg-2 ms-lg-auto">
              <div className="sticky-top" style={{ top: "100px", zIndex: "1" }}>
                <h1 className="mb-4">produit 1</h1>
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                  <ul className="list-inline mb-2 mb-sm-0">
                    <li className="list-inline-item h4 fw-light mb-0">
                      10 €
                    </li>
                 
                  </ul>
    
                </div>
              
                <Form>
                  <Row>
                    
                    <Col sm="6" lg="12" className="detail-option mb-4">
                      
                 
                    </Col>
                  </Row>
                  <InputGroup className="w-100 mb-4">
                    <Form.Control
                      size="lg"
                      className="detail-quantity"
                      defaultValue="1"
                      name="items"
                      type="number"
                    />
                    <div className="flex-grow-1">
                      <div className="d-grid h-100">
                        <Button variant="dark" type="submit">
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="me-2 flex-grow-1 w-1rem"
                          />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </InputGroup>
                  <Row className="mb-4">
                    <Col xs="12">
                    <p className="mb-4 text-muted">
                  Le produit :
                </p>
                <p className="mb-2 text-muted">
                  Produit en jesmonite qui est capable d'être incroyablement charmant et pratique tout en étant ecologique !
                </p>
                    </Col>
                  
                  </Row>
                 
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  
    </React.Fragment>
  )
}

export default Detail1
