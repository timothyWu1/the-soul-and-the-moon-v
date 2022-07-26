import React, { useState, useEffect } from "react"

import Link from "next/link"

import { Container, Row, Col, Card, Button } from "react-bootstrap"

import NewArrivals from "../components/NewArrivals"

import Image from "../components/Image"
import { commerce } from "../lib/commerce"

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


        
       

{/* <Container className="py-6 categories">

</Container> */}


        <Container className="py-8 categories">
          
        <Row >
          
          <Card className=" shadow-0 border-0 text-muted text-hover-gray-800  text-center">
            <div>
              <Image
                className="img-scale card-img mb-2"
                src="/img/product/E.png"
                width={40}
                height={30}
                sizes="(max-width: 150px) calc(150vw - 30px), 50vw"
              />

              <Card.ImgOverlay className="d-flex align-items-center">
                <div className="w-100 py-3">
                  <Button variant="outline-dark">
                      <a href="#ok">
                        <h1 className="display-3 fw-bold mb-2">
                            LA BOUTIQUE
                          </h1>
                          </a>
                          </Button>
                          {/* <Link >
                            <a className="stretched-link" href="#ok">
                           
                            </a>
                          </Link> */}
                        </div>
           
              </Card.ImgOverlay>
            </div>
          </Card>
        </Row>
        </Container>

        {categoryList && (
          <div className="bg-gray-200 position-sticky ">
          
            <Container fluid className="py-6 categories">
              <Row  className="justify-content-center">
                {categoryList.map((category) => (
                  <Col key={category.name} sm="2" xs="6" md="2" className="mb-5 mb-sm-0">
                    <Card className="card-scale shadow-0 border-0  text-hover-gray-900 overlay-hover-light text-center">
                      <div>
                        <Image
                          className="img-scale card-img mb-2"
                          src={category.image}
                          alt={category.name}
                          width={10}
                          height={10}
                          sizes="(max-width: 576px) calc(100vw - 30px), 50vw"
                        />
                        <Card.ImgOverlay className="d-flex align-items-center">
                          <div className="w-100 py-3">
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
                        </Card.ImgOverlay>
                      </div>
                    </Card>
                  </Col>
                  
                ))} 
                <div id="ok">
                </div>
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
