import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Image from "../components/Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export async function getStaticProps() {
  return {
    props: {
      title: "About person",
    },
  }
}

const About2 = () => {
  return (
    
    <section>
      <Container className="py-6 categories">
                        </Container>
      <Container fluid>
        <Row className="my-lg-3">
          <Col lg="7" xl="6" className="order-lg-2 mb-3 mb-lg-0">
            <div className="d-flex align-items-center p-5 p-xl-6 bg-gray-100 h-100">
              <div>
                <h4 className="text-uppercase text-primary letter-spacing-5 mb-3">
                  {" "}
                  à propos de nous
                </h4>
                <h1 className="display-3 fw-bold mb-5">Qui sommes-nous</h1>
                <Row>
                  <Col xl="10">
                    <p className="text-lg text-muted mb-lg-0">
                    The Soul & The Moon a vu le jour en 2022
                    avec un objectif : proposer des
                    accessoires et objets decoratifs durable et de qualité dans la région de
                    Paris. Notre passion pour l'excellence a
                    toujours été et restera notre moteur. Les créations thesoulandthemoon sont réalisées en jesmonite, une éco-résine qui n'émet aucune particule toxique et qui participe au parapluie écologique en permettant la création d'objets design et durable. Voyez par vous-même et
                    passez nous voir lors de nos exposition et sur notre instagram.
                    </p>
                  </Col>
                  {/* <Col xl="6">
                    <p className="text-lg text-muted mb-0">
                      The bedding was hardly able to cover it and seemed ready
                      to slide off any moment. His many legs, pitifully thin
                      compared with the size of the rest of{" "}
                    </p>
                  </Col> */}
                </Row>
                <hr className="my-5" />
                <Row>
                  <Col xl="6">
                    <h6 className="text-uppercase text-primary letter-spacing-3 mb-4">
                      Notre instagram
                    </h6>
                    <ul className="list-inline h3 mb-6 mb-lg-0">
               
            
               <li className="list-inline-item me-4">
                 <a href="https://www.instagram.com/the.soul.and.the.moon">
                   <FontAwesomeIcon icon={faInstagram} size="6x"/>
                 </a>
               </li>
             </ul>
                    <p className="text-muted mb-5 mb-xl-0">
                      
                    </p>
                  </Col>
                  {/* <Col xl="6">
                    <h6 className="text-uppercase text-primary letter-spacing-3 mb-4">
                      Company details
                    </h6>
                    <p className="text-muted mb-0">
                      Reg.Id: 15456456
                      <br />
                      VAT Id: 646643463546
                    </p>
                  </Col> */}
                </Row>
              </div>
            </div>
          </Col>
          <Col lg="5" xl="6" className="pe-lg-0 order-lg-1">
            <div className="dark-overlay mh-full-screen-with-header h-100">
              <Image
                className="bg-image"
                src="/img/product/C.png"
                alt=""
                layout="fill"
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About2
