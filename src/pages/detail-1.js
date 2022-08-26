import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Breadcrumbproduct,
  Alert,
  Form,
  Button,
  Input,
  InputGroup,
} from "react-bootstrap"
import "react-image-lightbox/style.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import { commerce } from "../lib/commerce"
import Carousel from "react-bootstrap/Carousel"

const Detail1 = () => {
  const [product, setProduct] = useState({})
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const fetchProducts = async () => {
    let vars = {}
    window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value
      }
    )
    let articleId = vars.article

    commerce.products.retrieve(articleId).then((article) => {
      if (article != undefined) {
        setProduct(article)
        console.log(article)
      }
    })
  }


  useEffect(() => {
    fetchProducts()
  })

  if (product != undefined) {
    if (product.image != undefined) {
      return (
        <div>
          <section>
            <div className=".d-none .d-md-block .d-lg-none">
              <Container className="py-6 categories 	.d-none"></Container>
            </div>
            <Container fluid className="px-xl-7 pt-5 pb-3 pb-lg-6">
              <div key={product.slug}>
                <Row>
                  <Col
                    lg="6"
                    xl="7"
                    className="pt-4 order-2 order-lg-1 photoswipe-gallery"
                  >
                    {product.assets[2] !== null ? (
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={product.assets[0].url}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={product.assets[1]?.url}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={product.assets[2]?.url}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    ) : (
                       
                      <div>
                        <img
                          class="d-block w-100"
                          src={product.assets[0].url}
                          alt="First slide"
                        />
                      </div>
                    )}
                  </Col>

                  <Col
                    lg="6"
                    xl="4"
                    className="pt-4 order-1 order-lg-2 ms-lg-auto"
                  >
                    <div
                      className="sticky-top"
                      style={{ top: "100px", zIndex: "1" }}
                    >
                      <h1 className="mb-4"> {product.name}</h1>

                      <div className="d-flex flex-column flex-sm-row align-products-sm-center justify-content-sm-between mb-4">
                        <ul className="list-inline mb-2 mb-sm-0">
                          <li className="list-inline-product h4 fw-light mb-0">
                            <strong className="d-block text-sm">
                              <h4>
                                {product.quantity
                                  ? product.price.raw * product.quantity
                                  : product.price.raw}
                                €
                              </h4>
                            </strong>
                          </li>
                        </ul>
                      </div>
                      
                        
                          <div className="flex-grow-1">
                            <div className="d-grid h-100">
                              <Button
                                variant="dark"                                
                                size="lg"
                                
                                
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="me-2 flex-grow-1 w-1rem"
                                />
                                Ajouter au panier
                              </Button>
                            </div>
                          </div>
                        
                        <Row className="mb-4">
                          <Col xs="12">
                            <p className="mb-4 ">
                              <h4>Le produit :</h4>
                            </p>
                            <p className="mb-2">
                              <h5 className="mb-4"> <div className="content" dangerouslySetInnerHTML={{__html: product.description}}></div></h5>
                            </p>
                          </Col>
                        </Row>
                      
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      )
    } else {
      return <div></div>
    }
  } else {
    return <React.Fragment></React.Fragment>
  }
}

export default Detail1
