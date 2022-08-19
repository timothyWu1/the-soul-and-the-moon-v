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
import Image from "../components/Image"
import { commerce } from "../lib/commerce"





const Detail1 = () => {

  const [product, setProduct] = useState({});



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
    });

    

  } 
  fetchProducts()

  
  
  if(product != undefined){
    if(product.image != undefined){

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
                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src={product.assets[0].url} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={product.assets[1].url} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src={product.assets[2].url} alt="Third slide"/>
                    </div>
                  </div>
                  <a class="carousel-control-prev" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
          
          
                </Col>
                
                <Col lg="6" xl="4" className="pt-4 order-1 order-lg-2 ms-lg-auto">
                  <div
                    className="sticky-top"
                    style={{ top: "100px", zIndex: "1" }}
                  >
                    <h1 className="mb-4"> {product.name}</h1>
              

                    <div className="d-flex flex-column flex-sm-row align-products-sm-center justify-content-sm-between mb-4">
                      <ul className="list-inline mb-2 mb-sm-0">
                        <li className="list-inline-product h4 fw-light mb-0">
                        <strong className="d-block text-sm">
                            {product.quantity
                              ? product.price.raw * product.quantity
                              : product.price.raw}
                            €
                          </strong>
                        
                        </li>
                      </ul>
                    </div>
                    <Form>
                      <InputGroup className="w-100 mb-4">
                        <div className="flex-grow-1">
                          <div className="d-grid h-100">
                            <Button
                              variant="dark"
                              type="submit"
                              size="lg"
                              onClick={() => {
                                commerce.cart.add(product.id, 1).then((response) => document.dispatchEvent(new CustomEvent("newCardItem", { detail:response.cart.line_items })))
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="me-2 flex-grow-1 w-1rem"
                              />
                              Ajouter au panier
                            </Button>
                          </div>
                        </div>
                      </InputGroup>
                      <Row className="mb-4">
                        <Col xs="12">
                          <p className="mb-4 text-muted">Le produit :</p>
                          <p className="mb-2 text-muted">
                          <h5 className="mb-4"> {product.description}</h5>
                          </p>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
              
            </div>
            
          </Container>
        </section>
      </div>
    )
    } else {
    return(
      <div></div>
    );
  }
  } else {
    return(
      <React.Fragment></React.Fragment>
    );
  }
}

export default Detail1