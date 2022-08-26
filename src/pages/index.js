import React, { useState, useEffect } from "react"

import Link from "next/link"

import { Container, Row, Col, Card, Button } from "react-bootstrap"

import NewArrivals from "../components/NewArrivals"

import Image from "../components/Image"
import { commerce } from "../lib/commerce"

import Figure from "react-bootstrap/Figure"

export async function getStaticProps() {
  return {
    props: {
      header: {
        absolute: true,
        transparentBar: false,
        transparentNavbar: false,
      },
      title: "The soul and the moon",
    },
  }
}

const Index = () => {
  const [productsFull, setProductsFull] = useState([])
  const [categoryList, setCategory] = useState([])


  var impair = commerce.categories.retrieve('category', { type: 'slug' })
  // .then(categories4)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProductsFull(data)
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
        <Container className="py-8 categories">
        {window.innerWidth >= 992 ?
          <Row>
            <div id="boutique"></div>
            <Card className=" shadow-1 border-0 text-muted text-hover-gray-800 text-center">
              <div>
                <Image
                  className="img-scale card-img mb-5 mt-5"
                  src="/img/product/E.png"
                  width={40}
                  height={30}
                  sizes="(max-width: 150px) calc(150vw - 30px), 50vw"
                />
                  <Card.ImgOverlay className="d-flex opacity-25 mt-2 align-items-center ">
                  <div className="w-100 py-1">
                    {" "}
                    <Figure>
                      {" "}
                      <Figure.Image
                        width={600}
                        height={120}
                        src="/img/product/greyr.png"
                        sizes="(max-width: 200px) calc(150vw - 30px), 50vw"
                      />
                    </Figure>
                  </div>
                </Card.ImgOverlay>

                <Card.ImgOverlay className="d-flex align-items-center ">
                <div className="w-100 py-1">
                    <Button className="bg-transparent border-0">
                      <a href="#ok">
                        <h1 className="display-4 text-white fw-light  opacity-100">
                          LA BOUTIQUE
                        </h1>
                      </a>
                    </Button>
                  </div>
                </Card.ImgOverlay>
              </div>
            </Card>
          </Row>
          :
          <Row>
          <div id="boutique"></div>
          <Card className=" shadow-1 border-0 text-muted text-hover-gray-800 text-center">
            <div>
              <Image
                className="img-scale card-img mb-5 mt-5"
                src="/img/product/E.png"
                width={40}
                height={30}
                sizes="(max-width: 150px) calc(150vw - 30px), 50vw"
              />
              <Card.ImgOverlay className="d-flex opacity-25 align-items-center ">
                <div className="w-100 mt-6  pb-3">
                  {" "}
                  <Figure>
                    {" "}
                    <Figure.Image
                      width={220}
                      height={120}
                      src="/img/product/grey.jpg"
                      sizes="(max-width: 200px) calc(150vw - 30px), 50vw"
                    />
                  </Figure>
                </div>
              </Card.ImgOverlay>
              <Card.ImgOverlay className="d-flex align-items-center ">
                <div className="w-100 py-1">
                  <Button className="bg-transparent border-0">
                    <a href="#ok">
                      <h2 className="display-9 text-white fw-light mb-1 mt-5 opacity-100">
                        LA BOUTIQUE
                      </h2>
                    </a>
                  </Button>
                </div>
              </Card.ImgOverlay>
            </div>
          </Card>
        </Row>
        }
        </Container>
        


        
        {categoryList && (
          <div className="bg-gray-200 position-sticky ">
            <Container fluid className="py-6 categories">
              
              <Row className="justify-content-center">
              {categoryList.map((category) => (
                  <Col
                    key={category.name}
                    xs="6"
                    sm="5"
                    md="5"
                    lg="3"
                    xl="2"
                    className="mb-5 mb-sm-0"
                  >
                    {/* {window.innerWidth >= 992 ? */}
                      <Card className="d-flex card-scale shadow-0 border-0 bg-gray-200  overlay-hover-light text-center ">
                        <div>
                          <Image
                            className="img-scale card-img mb-2 "
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
                              <Link href={category.url} >
                                <a className="stretched-link">
                                  <span className="sr-only" >
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
