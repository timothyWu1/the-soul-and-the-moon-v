// import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import React from "react"
// import { Col, Container, Dropdown, Row } from "react-bootstrap"
// import Icon from "../Icon"

// const TopBar = ({ header }) => {
//   return (
//     <div
//       className={`top-bar text-sm ${
//         header && header.transparentBar ? "bg-transparent" : ""
//       }`}
//     >
//       <Container className="px-lg-5 py-3" fluid>
//         <Row className="align-items-center">
//           {/* SOCIAL & PHONE BLOCK */}
//           <Col md="4" className="d-none d-md-block">
//             <ul className="list-inline mb-0">
//               <li className="list-inline-item me-2">
//                 <a
//                   className="text-reset text-hover-primary"
//                   href="#"
//                   aria-label="Go to Facebook"
//                 >
//                   <FontAwesomeIcon icon={faFacebookF} />
//                 </a>
//               </li>
//               <li className="list-inline-item me-4">
//                 <a
//                   className="text-reset text-hover-primary"
//                   href="#"
//                   aria-label="Go to Twitter"
//                 >
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </a>
//               </li>
//               <li className="list-inline-item me-2">
//                 <Icon icon="calls-1" className="me-2" />
//                 020-800-456-747
//               </li>
//             </ul>
//           </Col>
//           {/* END SOCIAL & PHONE BLOCK */}

//           {/* ANNOUNCEMENT */}
//           <Col md="4" sm="6" className="text-start text-md-center">
//             <p className="mb-0">Free in-store delivery</p>
//           </Col>
//           {/* END ANNOUNCEMENT */}

//           <Col md="4" sm="6" className="d-none d-sm-flex justify-content-end">
//             {/* LANGUAGE SWITCHER */}
//             <Dropdown className="border-end px-3">
//               <Dropdown.Toggle
//                 className="topbar-link dropdown-toggle"
//                 as="a"
//                 href="#"
//                 id="langsDropdown"
//               >
//                 English
//               </Dropdown.Toggle>
//               <Dropdown.Menu align="end" aria-labelledby="langsDropdown">
//                 <Dropdown.Item href="#">German</Dropdown.Item>
//                 <Dropdown.Item href="#">French</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             {/* END LANGUAGE SWITCHER */}

//             {/* CURRENCY SWITCHER */}
//             <Dropdown className="ps-3 ms-0">
//               <Dropdown.Toggle
//                 className="topbar-link dropdown-toggle"
//                 as="a"
//                 href="#"
//                 id="currencyDropdown"
//               >
//                 USD
//               </Dropdown.Toggle>
//               <Dropdown.Menu align="end" aria-labelledby="currencyDropdown">
//                 <Dropdown.Item href="#">EUR</Dropdown.Item>
//                 <Dropdown.Item href="#"> GBP</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             {/* END CURRENCY SWITCHER */}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default TopBar
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
import React from "react"
import { Col, Container, Dropdown, Row } from "react-bootstrap"
import Icon from "../Icon"

const TopBar = ({ header }) => {
  return (
    <div
      className={`top-bar text-sm ${
        header && header.transparentBar ? "bg-transparent" : ""
      }`}
    >
      <Container className="px-lg-5" fluid>
        <Row className="align-items-center">

          

          {/* ANNOUNCEMENT */}
          
          <Col md="12" sm="8" className="text-start text-md-center">
           
            <p className="mb-0 py-5"><h1>The Soul & The Moon</h1></p>
            
            
          </Col>
           {/* SOCIAL & PHONE BLOCK */}

           <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a
                  className="text-reset text-hover-primary"
                  href="https://www.instagram.com/the.soul.and.the.moon"
                  aria-label="Go to instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                  {/* <FontAwesomeIcon icon="fa-Instagram" /> */}
                  {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
                </a>
              </li>
              {/* <li className="list-inline-item me-4">
                <a
                  className="text-reset text-hover-primary"
                  href="#"
                  aria-label="Go to Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li> */}
              {/* <li className="list-inline-item me-2">
                <Icon icon="calls-1" className="me-2" />
                020-800-456-747
              </li> */}
            </ul>
          {/* END SOCIAL & PHONE BLOCK */}
          {/* END ANNOUNCEMENT */}

          {/* <Col md="4" sm="6" className="d-none d-sm-flex justify-content-end"> */}
            {/* LANGUAGE SWITCHER */}
            {/* <Dropdown className="border-end px-3">
              <Dropdown.Toggle
                className="topbar-link dropdown-toggle"
                as="a"
                href="#"
                id="langsDropdown"
              >
                English
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" aria-labelledby="langsDropdown">
                <Dropdown.Item href="#">German</Dropdown.Item>
                <Dropdown.Item href="#">French</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            {/* END LANGUAGE SWITCHER */}

            {/* CURRENCY SWITCHER */}
            {/* <Dropdown className="ps-3 ms-0">
              <Dropdown.Toggle
                className="topbar-link dropdown-toggle"
                as="a"
                href="#"
                id="currencyDropdown"
              >
                USD
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" aria-labelledby="currencyDropdown">
                <Dropdown.Item href="#">EUR</Dropdown.Item>
                <Dropdown.Item href="#"> GBP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            {/* END CURRENCY SWITCHER */}
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default TopBar