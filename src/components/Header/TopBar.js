
import React from "react"
import { Container, Row } from "react-bootstrap"


const TopBar = ({ header }) => {
  return (
    <div
      className={`top-bar text-sm ${
        header && header.transparentBar ? "bg-transparent" : ""
      }`}
    >
      <Container className="px-lg-5" fluid>
        <Row className="align-items-center">
          

          

  
        </Row>
      </Container>
    </div>
  )
}

export default TopBar