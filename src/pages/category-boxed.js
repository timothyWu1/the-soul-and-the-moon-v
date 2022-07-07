import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import Link from "next/link"

import CardProduct from "../components/CardProduct"

import Pagination from "../components/Pagination"
import CategoryTopBar from "../components/CategoryTopBar"
import { commerce } from '../lib/commerce';


export async function getStaticProps() {
  return {
    props: {
      title: "Category Fixed Width",
    },
  }
}

const CategoryBoxed = () => {

  const [productsFull, setProductsFull] = useState([]);

  const fetchProducts = async () => {

    const { data } = await commerce.products.list();
    var products = [];
    

    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

    data.map((item) => {
      if (vars.category == item.categories[0].slug){
        products.push(item)
      }

    })

    setProductsFull(products);

  };

  
    

  


  fetchProducts();

  

  if (productsFull != []){
  return (
    <Container className="py-6">
      <div className="products-grid">
        <div className="hero-content pb-5">
          <h1>Jackets and tops</h1>
          <Row>
            <Col xl="8">
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Col>
          </Row>
        </div>
        <Breadcrumb>
          <Link href="/" passHref>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>
        <CategoryTopBar filter />
        <Row>
          {productsFull.slice(0, -2).map((product, index) => (
            <Col key={index} sm="4" xl="3" xs="6">
              <CardProduct product={product} cardType={4} />
            </Col>
          ))}
        </Row>
        <Pagination />
      </div>
    </Container>
  )
}
}

export default CategoryBoxed
