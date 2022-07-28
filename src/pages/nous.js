import Link from "next/link"
import dynamic from "next/dynamic"
import React from "react"
import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap"
import { Parallax, Background } from "react-parallax"
import Image from "../components/Image"
import UseWindowSize from "../hooks/UseWindowSize"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { useForm } from 'react-hook-form';
export async function getStaticProps() {
  return {
    props: {
      title: "Contact",
      header: {
        absolute: true,
        transparentNavbar: true,
      },
    },
  }
}

let MapComponent

const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmitHandler = data => {
    console.log(data);
}

  const [mapLoaded, setMapLoaded] = React.useState(false)
  const [dragging, setDragging] = React.useState(false)
  const [tap, setTap] = React.useState(false)
  const size = UseWindowSize()
  React.useEffect(() => {
    MapComponent = dynamic(() => import("../components/MapComponent"), {
      ssr: false,
    })
    setMapLoaded(true)
  }, [])
  React.useEffect(() => {
    if (mapLoaded) {
      setTap(size.width > 700)
      setDragging(size.width > 700)
    }
  }, [size, mapLoaded])

  return (
    <React.Fragment>
      <Parallax
        className="light-overlay position-relative"
        bgStyle={{ height: "120%" }}
        strength={500}
      >
        <Background className="vw-100">
          <Image
            src="/img/product/C.png"
            alt="Autumn vibes"
            layout="fill"
            className="bg-image"
            priority
          />
        </Background>
        <Container className="overlay-content hero hero-page py-7 text-center">
          <div className="pt-5 pt-lg-7">
            <Breadcrumb
              listProps={{
                className: "justify-content-center",
              }}
            >
              <Link href="/" passHref>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Link>
              <Breadcrumb.Item active>Contact</Breadcrumb.Item>
            </Breadcrumb>
            <div className="hero-content">
              <h1 className="hero-heading">Contact</h1>
            </div>
          </div>
        </Container>
      </Parallax>
  
      <section className="py-6">
        <Container>
          <Row>
            <Col lg="3">
              <h5
                className="display-2 fw-bold mb-4 mb-lg-5"
                style={{ lineHeight: "1" }}
              >
                Nous contacter{" "}
              </h5>
              <ul className="list-inline h3 mb-6 mb-lg-0">
               
            
                <li className="list-inline-item me-4">
                  <a href="https://www.instagram.com/the.soul.and.the.moon">
                    <FontAwesomeIcon icon={faInstagram} size="6x"/>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="8" xl="6" className="ms-auto">
              <Form>
                <Row>
                  <Col sm="6">
                    <div className="mb-4">
                      <Form.Label htmlFor="nameContact">
                        Votre prenom
                      </Form.Label>
                      <Form.Control
                        className="form-control-underlined"
                        type="text"
                        name="nameContact"
                        id="name"
                        required="required"
                      />
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="mb-4">
                      <Form.Label htmlFor="surnameContact" placeholder="Adresse Email">
                        Votre nom
                      </Form.Label>
                      <Form.Control
                        className="form-control-underlined"
                        type="text"
                        name="surnameContact"
                        id="surname"
                        required="required"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mb-4">
                  <Form.Label htmlFor="emailContact">Votre mail</Form.Label>
                  <Form.Control
                    className="form-control-underlined"
                    type="email"
                    name="emailContact"
                    id="email"
                    required="required"
                  />
                </div>
                <div className="mb-4">
                  <Form.Label htmlFor="messageContact">
                    Votre message
                  </Form.Label>
             
                </div>
                <div className="mb-4">
                  <textarea class="form-control" name="messageContact" type="textarea" required="required" id="exampleFormControlTextarea1" rows="4"></textarea>
         
         
        </div>
                <Button
                  variant="outline-primary"
                  className="mt-3"
                  type="submit"
                >
                  Envoyer
                </Button>
                <form onSubmit={handleSubmit(onSubmitHandler)}>submit</form>
              </Form>
            </Col>
          </Row>
          
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Contact
