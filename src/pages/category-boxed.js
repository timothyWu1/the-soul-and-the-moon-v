import React, { useState, useEffect } from "react"
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap"
import Link from "next/link"

import CardProduct from "../components/CardProduct"
import { useHistory, useLocation } from 'react-router-dom';

import { commerce } from "../lib/commerce"
import Image from "../components/Image"

export async function getStaticProps() {
  return {
    props: {
      title: "Category Fixed Width",
    },
  }
}

const CategoryBoxed = () => {
  const [productsFull, setProductsFull] = useState([])
  const [categoryList, setCategory] = useState([])
  // const history = useHistory();
  // const location = useLocation();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    var products = []

    var vars = {}
    window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value
      }
    )

    data.map((item) => {
      if (item.categories[0] !== undefined) {
        if (vars.category == item.categories[0].slug) {
          products.push(item)
        }
      }
    })
    setProductsFull(products)
  }

  function refreshPage() {
    setTimeout(() => {
      location.reload(false)
      console.log("refreshed")
    }, 500)
    console.log("page to reload")
  }

  const getCategories = async () => {
    commerce.categories.list().then((categorylist) => {
      // console.log(categorylist.data[0].assets[0].url)
      var list = []
      categorylist.data.map((category) => {
        list.push({
          name: category.name,
          image: category.assets[0].url,
          url: "/category-boxed?category=" + category.slug,
        })
        // console.log(category.url)
      })
      setCategory(list)
    })
  }

  useEffect(() => {
    fetchProducts()
    getCategories()
  }, [])

  if (categoryList[0] != undefined) {
    if (productsFull != []) {
      return (
        <Container className="py-8">
          {window.innerWidth >= 992 ? (
            <Container className="py-7"></Container>
          ) : null}
          {categoryList && (
            <div className=" position-sticky ">
              <Container fluid className="py-5 categories">
                <Row className="justify-content-center">
                  {categoryList.map((category) => (
                    <Col
                      key={category.name}
                      xs="6"
                      sm="5"
                      md="5"
                      lg="3"
                      xl="3"
                      className="mb-5 mb-sm-0"
                    >
                      <Card className="d-flex card-scale shadow-0 border-0 overlay-hover-light text-center">
                        <div>
                          <Image
                            className="img-scale card-img mb-1"
                            src={category.image}
                            alt={category.name}
                            width={10}
                            height={10}
                            sizes="(max-width: 576px) calc(100vw - 30px), 50vw"
                          />
                          <Card.ImgOverlay className="d-flex align-items-center">
                            <div className="w-100 py-3">
                              <h2 className="display-0 fw-lighter mb-1 text-white">
                                {category.name}
                              </h2>
                              <Link href={category.url}>
                                <a
                                  className="stretched-link"
                                  onClick={refreshPage}
                                >
                                  <span className="sr-only">
                                    {category.button}
                                  </span>
                                </a>
                              </Link>
                            </div>
                          </Card.ImgOverlay>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          )}
          <div className="products-grid">
            {/* {categoryList.map((category) => ( */}
            <div className="hero-content pb-5">
              {/* <h1>Nos {category.name}</h1> */}
              <h1>Nos produits</h1>
              <Row>
                <Col xl="8">
                  <p className="lead text-muted"></p>
                </Col>
              </Row>
            </div>
            {/* ))} */}
            <Breadcrumb>
              <Link href="/" passHref>
                <Breadcrumb.Item>Accueil</Breadcrumb.Item>
              </Link>
              <Breadcrumb.Item active>Nos produits</Breadcrumb.Item>
            </Breadcrumb>
            {/* <CategoryTopBar filter /> */}
            <Row>
              {productsFull.slice(0, 100).map((product, index) => (
                <Col key={index} sm="4" xl="3" xs="6">
                  <CardProduct product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      )
    }
  } else {
    return null
  }
}

export default CategoryBoxed
