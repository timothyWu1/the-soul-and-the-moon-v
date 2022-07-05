import React, { useState, useEffect } from 'react';

import Link from "next/link"

import { Container, Row, Col, Card } from "react-bootstrap"

import NewArrivals from "../components/NewArrivals"
import Swiper from "../components/Swiper"

import info from "../data/index.json"

import Sale from "../components/Sale"
import OurHistory from "../components/OurHistory"
import Brands from "../components/Brands"
import Image from "../components/Image"
import { commerce } from '../lib/commerce';


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
  const [productsFull, setProductsFull] = useState([]);

  const fetchProducts = async () => {

    const { data } = await commerce.products.list();
    
    setProductsFull(data);

    console.log(productsFull)
  };

  


  fetchProducts();
  

  if (productsFull[0] != null){
    return (
      <React.Fragment>
        {/* <Swiper
          info={info.swiper}
          autoplay={{
            delay: 5000,
          }}
          loop
          centeredSlides
          speed={1500}
          parallax
          navigation
          pagination
          style={{ height: "95vh", minHeight: "600px" }}
          containerclass="px-lg-7"
        /> */}
        {info.maincategories && (
          <div className="bg-gray-100 position-relative">
            <Container className="py-6">
              <Row>
                {info.maincategories.map((category) => (
                  <Col key={category.name} sm="6" className="mb-5 mb-sm-0">
                    <Card className="card-scale shadow-0 border-0 text-white text-hover-gray-900 overlay-hover-light text-center">
                      <div>
                        <Image
                          className="img-scale card-img"
                          src={category.img}
                          alt={category.name}
                          width={630}
                          height={807}
                          sizes="(max-width: 576px) calc(100vw - 30px), 50vw"
                        />
                      </div>
                      <Card.ImgOverlay className="d-flex align-items-center">
                        <div className="w-100 py-3">
                          <h2 className="display-3 fw-bold mb-0">
                            {category.name}
                          </h2>
                          <Link href={category.link}>
                            <a className="stretched-link">
                              <span className="sr-only">{category.button}</span>
                            </a>
                          </Link>
                        </div>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
        <NewArrivals fluid headCenter products={productsFull} />
        {/* <Sale className="py-6" backgroundImage="/img/photo/deal-plain.jpg" /> */}
        {/* <OurHistory /> */}
        {/* <Brands className="pb-6" /> */}
      </React.Fragment>
    )
  } else {return null}
}

export default Index
