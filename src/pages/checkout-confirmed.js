import React from "react"
import { Container, Row, Col, Breadcrumb, Button, Alert } from "react-bootstrap"

import { FormContext } from "../components/FormContext"

import Icon from "../components/Icon"

import Link from "next/link"
export async function getStaticProps() {
  return {
    props: {
      title: "Checkout confirmed",
      checkout: true,
    },
  }
}

const CheckoutConfirmed = () => {
  const [formInputs, setFormInputs] = React.useContext(FormContext) // Checkout inputs context
  
  const today = new Date() // Demo date
  const day = today.getDate() // Demo day
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ] // DEMO ONLY - English month names
  const month = months[today.getMonth()] // Demo month
  const year = today.getFullYear() // Demo year

  // Remove on production
  const finalPrice = formInputs.cart
    ? formInputs.shipping[2] +
      formInputs.cart.reduce(
        (sum, { price, quantity }) => sum + price * quantity,
        0
      )
    : 450

  // Uncomment on production - final sum of cart items plus shipping
  // const finalPrice = formInputs.shipping[2] + formInputs.cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)

  // Remove on production
  const shipping = formInputs.shipping ? formInputs.shipping[1] : "DHL"

  // Uncomment on production - selected shipping option
  //const shipping = formInputs.shipping[1]

  // Order details - fill Order no. & date with real data on production
  const order = [
    {
      label: "Order no.",
      value: "2019",
    },
    {
      label: "Date",
      value: `${month} ${day}, ${year}`,
    },
    {
      label: "Total",
      value: "$" + finalPrice,
    },
    {
      label: "Shipping",
      value: shipping,
    },
  ]
  return (
    <React.Fragment>
      
      <section className="hero py-6">
           <div className="p-5 "></div>
        <Container>
          <Breadcrumb>
            <Link href="/" passHref>
              <Breadcrumb.Item>Accueil</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>Achat réussi</Breadcrumb.Item>
          </Breadcrumb>
          <div className="hero-content">
            <h1 className="hero-heading">Merci de votre achat</h1>
            <Alert variant="success" className="d-flex align-items-center">
              <Icon
                icon="checked-circle-1"
                className="w-3rem h-3rem svg-icon-light flex-shrink-0 me-3"
              />
              Votre achat est réussi
            </Alert>
          </div>
        </Container>
      </section>
      <section className="pb-6">
        <Container>
          <p className="lead">The soul and the moon vous remercie de votre achat.</p>
          <p className="lead mb-5">
            Vous allez recevoir un email concernant les formalités de l'achat.
          </p>
          <p className="mb-6">
            <Link href="/" passHref>
              <Button variant="outline-dark">Revenir dans la boutique</Button>
            </Link>
          </p>
          {/* <div className="p-5 bg-gray-100">
            <Row>
              {order.map((item) => (
                // Order details
                <Col key={item.label} xs="6" lg="3" className="mb-5 mb-lg-0">
                  <div className="text-sm text-uppercase text-muted mb-3">
                    {item.label}
                  </div>
                  <span className="h5">{item.value}</span>
                </Col>
              ))}
            </Row>
          </div> */}
        </Container>
      </section>
    </React.Fragment>
  )
}

export default CheckoutConfirmed
