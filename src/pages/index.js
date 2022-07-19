import React, { useState, useEffect } from "react"

import Link from "next/link"

import { Container, Row, Col, Card } from "react-bootstrap"

import NewArrivals from "../components/NewArrivals"

import Image from "../components/Image"
import { commerce } from "../lib/commerce"

export async function getStaticProps() {
  return {
    props: {
      header: {
        absolute: true,
        transparentBar: true,
        transparentNavbar: true,
      },
      title: "Homepage",
    },
  }
}

const Index = () => {
  const [productsFull, setProductsFull] = useState([])
  const [categoryList, setCategory] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProductsFull(data)
  }
  const getCategories = async () => {
    commerce.categories.list().then((categorylist) => {
      console.log(categorylist.data[0].assets[0].url)
      var list = []
      categorylist.data.map((category) => {
        list.push({
          name: category.name,
          image: category.assets[0].url,
          url: "//category-boxed?category=" + category.slug,
        })
      })
      setCategory(list)
    })
  }

  useEffect(() => {
    fetchProducts()
    getCategories()
  }, [])

  if (categoryList[0] != undefined) {
    return (
      <React.Fragment>
        <div>
          <Container className="py-6 categories">
                        </Container>
          <Image
            className="img-scale card-img mb-2"
            src="/img/product/bg.jpg"
            layout="fill"
            // // width={0}
            // height={40}
            sizes="(max-width: 100px) calc(100vw - 30px), 50vw"
          />
        </div>

        <Row>
          <Card className=" shadow-0 border-0 text-muted text-hover-gray-900  text-center">
            <div>
              <Image
                className="img-scale card-img mb-2"
                src="/img/product/E.png"
                width={100}
                height={100}
                sizes="(max-width: 150px) calc(150vw - 30px), 50vw"
              />

              <Card.ImgOverlay className="d-flex align-items-center">
                <div className="w-100 py-3">
                        <h1 className="display-3 fw-bold mb-2">
                            LA BOUTIQUE
                          </h1>
                          <Link href='/'>
                            <a className="stretched-link">
                           
                            </a>
                          </Link>
                        </div>
                {/* <div className="w-100 py-3">
                <button
                  type="button"
                  className="text-muted text-sm bg-transparent btn-outline-secondary"
                  onClick={() => {
                    
                  }}
                >
                  <span className="d-none d-sm-inline text-muted "><h1 > La boutique </h1></span>
                </button>
                </div> */}
              </Card.ImgOverlay>
            </div>
          </Card>
        </Row>

        {categoryList && (
          <div className="bg-gray-100 position-sticky ">
            <Container className="py-6 categories"></Container>
            <Container className="py-6 categories">
              <Row>
                {categoryList.map((category) => (
                  <Col key={category.name} sm="6" className="mb-5 mb-sm-0">
                    <Card className="card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                      <div>
                        <Image
                          className="img-scale card-img mb-2"
                          src={category.image}
                          alt={category.name}
                          width={20}
                          height={20}
                          sizes="(max-width: 576px) calc(100vw - 30px), 50vw"
                        />
                        <Card.ImgOverlay className="d-flex align-items-center">
                          <div className="w-100 py-3">
                            <h2 className="display-3 fw-bold mb-2">
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
                        </Card.ImgOverlay>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
        <NewArrivals fluid headCenter products={productsFull} />
      </React.Fragment>
    )
  } else {
    return null
  }
}

export default Index
