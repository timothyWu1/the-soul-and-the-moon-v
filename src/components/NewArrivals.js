import React, { useState, useEffect } from "react"

import { Container, Row, Col, Button } from "react-bootstrap"

import Icon from "./Icon"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import CardProduct from "./CardProduct"

const NewArrivals = (props) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const products = props.products
  const [categoryList, setCategory] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProductsFull(data)
  }
  const getCategories = async () => {
    commerce.categories.list().then((categorylist) => {
      // console.log(categorylist.data[0].assets[0].url)
      var list = []
      categorylist.data?.map((category) => {
        list.push({
          name: category.name,
          image: category.assets[0].url,
          url: "/category-boxed?category=" + category.slug,
        })
      })
      setCategory(list)
    })
  }
  
  if (products != []){
    
    return (
      <div
        className={`py-6 ${
          props.masonry ? "position-relative overflow-hidden" : ""
        }`}
      >
        <Container
          fluid={props.fluid}
          className={props.fluid ? "container-fluid-px" : ""}
        >
          {props.blob1 && (
            <Icon
              icon={props.blob1}
              className="svg-blob svg-blob-fill-current d-none d-md-block"
              style={{ left: "-200px", top: "400px", color: props.blob1Color }}
            />
          )}
          {props.blob2 && (
            <Icon
              icon={props.blob2}
              className="svg-blob svg-blob-fill-current d-none d-md-block"
              style={{ right: "-200px", top: "600px", color: props.blob2Color }}
            />
          )}
          {props.fluid ? (
            <Row>
              <Col lg="10" xl="8" className="text-center mx-auto">
                <h2 className="display-3 mb-5">Boutique</h2>
                <p className="lead text-muted mb-6">
                Des bougies, des cendriers et plein d'autres produits en jesmonite à découvrir dans notre boutique!
                </p>
              </Col>
            </Row>
          ) : (
            <div className={props.headCenter ? "text-center" : ""}>
              <h2
                className={props.masonry ? "display-2 fw-bold mb-5" : ""}
                style={{ color: props.masonry && "#efb2af" }}
              >
                New Arrivals
              </h2>
              {!props.masonry && (
                <p className="lead text-muted mb-5">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin. He
                  lay on his armour-like back, and if he lifted his head a little
                  he could see his brown belly, slightly domed and divided by
                  arches into stiff sections
                </p>
              )}
            </div>
          )}

          <Row className="justify-content-between align-items-center mb-4">
            <Col xs="12" sm={props.fluid} md={!props.fluid}>
              {/* <ul
                className={`list-inline text-center text-sm-start mb-3 ${
                  props.fluid ? "mb-sm-0" : "mb-md-0"
                }`}
              >
                <li className="list-inline-item">
                  <a className="text-dark" href="#">
                    Les produits{" "}
                  </a>
                </li>
             
             
                <li className="list-inline-item">
                  <a className="text-muted text-hover-dark" href="/category-boxed?category=cendrier">
                    Les cendriers
                  </a>
                </li>
           
              </ul> */}

{categoryList && (
          <div className="bg-gray-200 position-sticky ">
          
           
              <Row  className="justify-content-center">
                {categoryList.map((category) => (
                  <Col key={category.name} sm="2" xs="6" md="2" className="mb-5 mb-sm-0">                  
                      <div>
                            <h2 className="display-0 fw-bold mb-1">
                              {category.name}
                            </h2>
                            <Link href={category.url}>
                              <a className="stretched-link">
                                <span className="sr-only">
                                  {category.button}
                                </span>
                              </a>
                            </Link>
                      </div>           
                  </Col>
                ))} 
                <div id="ok">
                </div>
              </Row>
          </div>
        )} 

            </Col>
            <Col
              xs="12"
              sm={props.fluid && "auto"}
              md={!props.fluid && "auto"}
              className="text-center"
            >
              <Button variant="link" className="px-0" href="#">
                Tout les produits
              </Button>
            </Col>
          </Row>
          {props.masonry ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3, 1000: 4 }}
            >
              <Masonry className="row">
                {products.map((product, index) => (
                  <Col key={index} className="item">
                    <CardProduct
                      product={product}
                      showQuickView={props.showQuickView}
                    />
                  </Col>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <Row>
              {products?.map((product, index) =>
                props.fluid ? (
                  <Col key={index} xl={2} lg={3} md={4} xs={6}>
                    <CardProduct product={product} />
                  </Col>
                ) : (
                  index < 8 && (
                    <Col key={index} xl={3} lg={3} md={4} xs={6}>
                      <CardProduct key={index} product={product} />
                    </Col>
                  )
                )
              )}
            </Row>
          )}
        </Container>
      </div>
    )
  }
}

export default NewArrivals
