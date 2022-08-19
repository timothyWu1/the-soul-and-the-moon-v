import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Alert,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap"

import NewArrivals from "../components/NewArrivals"

import Icon from "../components/Icon"

import CardProduct from "../components/CardProduct"

import Image from "../components/Image"

import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export async function getStaticProps() {
  return {
    props: {
      title: "Produit",
    },
  }
}

const detail = (id, props) => {
  const products = props.products
  const [alert, setAlert] = useState(true)
  const [activeType, setActiveType] = useState("material_0")
  if (products != []) {
    return (
      <React.Fragment>
        <section>
          <Container className="pt-5">
            <div className="d-block" id="addToCartAlert">
              <Alert
                variant="success"
                className="mb-4 mb-lg-5"
                role="alert"
                show={alert}
                onClose={() => setAlert(false)}
                dismissible
              >
                <div className="d-flex align-items-center pe-3">
                  <Icon
                    icon="checked-circle-1"
                    className="d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 me-3"
                  />
                </div>
              </Alert>
            </div>
            <Breadcrumb>
              <Link href="/" passHref>
                <Breadcrumb.Item>Accueil</Breadcrumb.Item>
              </Link>
              <Link href="#" passHref>
                <Breadcrumb.Item active>Produit</Breadcrumb.Item>
              </Link>
            </Breadcrumb>

            <Row>
              <Col lg="7" className="order-2 order-lg-1">
                <Image
                  className="img-scale card-img mb-2"
                  src="/img/product/E.png"
                  width={40}
                  height={30}
                  sizes="(max-width: 150px) calc(150vw - 30px), 50vw"
                />

                {/* -------------------------------------------------------------------------------------------- */}

                {/* <NewArrivals fluid headCenter products={productsFull} /> */}




                {/* {props.masonry ? (
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      500: 2,
                      900: 3,
                      1000: 4,
                    }}
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
                    {products.map((product, index) =>
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
                )} */}

                {/* -------------------------------------------------------------------------------------------- */}
              </Col>
              <Col lg="5" className="ps-lg-4 order-1 order-lg-2">
                {/* <h1 className="h2 mb-4">{product.name}</h1> */}
                <h2>Nom de produit</h2>
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                  <ul className="list-inline mb-2 mb-sm-0">
                    <li className="list-inline-item h4 fw-light mb-0">
                      {/* ${dummyProduct.pricesale.toFixed(2)} */}
                    </li>
                    <li className="list-inline-item text-muted fw-light">
                      {/* <del>${dummyProduct.price.toFixed(2)}</del> */}
                    </li>
                  </ul>
                </div>
                <p className="mb-4 text-muted">
                  {/* {dummyProduct.description.short} */}
                </p>

                <Form>
                  <InputGroup className="w-100 mb-4">
                    <Button
                      variant="dark"
                      type="submit"
                      className=" text-sm"
                      aria-label="add to cart"
                      // onClick={() => {
                      //   commerce.cart.add(product.id, 1).then((response) => document.dispatchEvent(new Event('newCardItem')))
                      //     .add(product.id, 1)
                      //     .then((response) =>
                      //       document.dispatchEvent(new Event("newCardItem"))
                      //     )
                      // }}
                    >
                      <Icon
                        className="text-hover-primary svg-icon-heavy d-sm-none"
                        icon="retail-bag-1"
                      />
                      <span className="d-none d-sm-inline">
                        {" "}
                        <Icon className="svg-icon-heavy" icon="add-1" />
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="me-2"
                        />{" "}
                        Ajouter au panier
                      </span>
                    </Button>
                    <a
              className="text-dark text-hover-primary me-2"
              href="#"
              onClick={(e) => addToWishlist(e, product)}
              aria-label="add to wishlist"
            >
             
            </a>
                  </InputGroup>

                  <ul className="list-unstyled">
                    <li>
                      <strong>Description:&nbsp;</strong>
                      <p>description a créer dynamiquement relier a la base</p>
                      {/* {dummyProduct.tags.map((tag, index) => (
                      <React.Fragment key={tag.name}>
                        <a className="text-muted" href={tag.link}>
                          {tag.name}
                        </a>
                        {index < dummyProduct.tags.length - 1 ? ",\u00A0" : ""}
                      </React.Fragment>
                    ))} */}
                    </li>
                  </ul>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <ProductBottomTabs product={dummyProduct} /> */}
      </React.Fragment>
    )
  }
}

export default detail
