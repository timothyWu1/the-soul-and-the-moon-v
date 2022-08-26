import React, { useState } from "react"
import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  InputGroup,
  CloseButton,
} from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { CartContext } from "./CartContext"
import { addCartItem } from "../hooks/UseCart"
import { addWishlistItem } from "../hooks/UseWishlist"
import { WishlistContext } from "./WishlistContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import Image from "./Image"
import { commerce } from "../lib/commerce"
import { CircleSpinnerOverlay, FerrisWheelSpinner } from "react-spinner-overlay"
// swiper core styles
import "swiper/css"
import Popup from './Popup'
const Popups = ({ isOpen, toggle, product }) => {
  const [loading, setLoading] = useState(false)
  const swiperRef = React.useRef(null) // Swiper reference for slideTo method
  const [quantity, setQuantity] = React.useState("1") // Product quantity state
  const [currentIndex, updateCurrentIndex] = React.useState(0) // Swiper current image index
  const [cartItems, dispatch] = React.useContext(CartContext) // Cart context
  const [wishlistItems, wishlistDispatch] = React.useContext(WishlistContext) // Wishlist context
  let qtt = +quantity
// -------------------------------------------test----------------------------------------------------------------
const url = new URL(
  "https://api.chec.io/v1/checkouts/chkt_L5z3kmQpdpkGlA/check/item_7RyWOwmK5nEa2V/quantity"
);

const param = {
  "amount": qtt,
};
Object.keys(param)
  .forEach(key => url.searchParam.append(key, param[key]));

const headers = {
  "X-Authorization": "{token}",
  "Accept": "application/json",
  "Content-Type": "application/json",
};

fetch(url, {
  method: "GET",
  headers: headers,
})
  .then(response => response.json());
// -------------------------------------------test----------------------------------------------------------------

  const [activeType, setActiveType] = useState("material_0_modal")

  // Add item to cart
  const addToCart = (e, product) => {
    e.preventDefault()
    addCartItem(product, quantity)
    dispatch({ type: "add", payload: product, quantity: quantity })
  }

  // Swiper params
  const params = {
    on: {
      slideChange: () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    },
  }

  // Slide to Swiper slide
  const slideTo = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index + 1)
      updateCurrentIndex(index)
    }
  }


  // const looker = (product) => {
  //   if (qtt <= product.inventory.available  ) {

  // }

  const increaseQuantity = async (product) => {
    if (qtt <= product.inventory.available  ) {
      setLoading(true)
      var response = await commerce.cart.add(product.id, qtt)
      setLoading(false)
    } else {

    }
  }

 
  // On quantity change
  const onChange = (e) => {
    
    const value = e.target.value
    setQuantity(value)
    togglePopup()
  }

  return (
    <Modal show={isOpen} onHide={toggle} size="xl">
      {/* CLOSE BUTTON */}
      <CloseButton
        className="btn-close-absolute btn-close-rotate"
        onClick={toggle}
        type="button"
      />
      {/* END CLOSE BUTTON */}
    

      {/* MODAL BODY */}
      <Modal.Body className="quickview-body">
      <CircleSpinnerOverlay
            loading={loading}
            overlayColor="rgba(0,0,0,0.7)"
            zIndex={99999}
          />
        <Row>
          <Col lg="6">
            <div className="detail-carousel">
              {/* PRODUCT BADGES */}
              {product.sale && <Badge className="product-badge">Sale</Badge>}
              {product.new && (
                <Badge bg="secondary" className="product-badge">
                  Fresh
                </Badge>
              )}
              {product.soldout && (
                <Badge className="product-badge" bg="dark">
                  Sold out
                </Badge>
              )}
              {/* END PRODUCT BADGES */}

                
              {/* SWIPER GALLERY */}
              <Swiper {...params} loop ref={swiperRef}>
                {product.assets.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="img-fluid"
                      src={image.url}
                      width={538}
                      height={538}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* SWIPER THUMBS */}
              <div className="swiper-thumbs">
                {product.assets.map((image, index) => (
                  <button
                    key={image.url}
                    onClick={() => slideTo(index)}
                    className={`swiper-thumb-item detail-thumb-item mb-3 ${
                      currentIndex === index ? "active" : ""
                    }`}
                  >
                    <Image
                      className="img-fluid"
                      src={image.url}
                      width={82}
                      height={82}
                    />
                  </button>
                ))}
              </div>
              {/* END SWIPER THUMBS */}

              {/* END SWIPER GALLERY */}
            </div>
          </Col>
          <Col lg="6" className="p-lg-5">
            <h2 className="mb-4 mt-4 mt-lg-1">{product.name}</h2>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
              {/* PRODUCT PRICES */}
              <ul className="list-inline mb-2 mb-sm-0">
                <li className="list-inline-item h4 fw-light mb-0">
                  {product.price.raw} €
                </li>
              </ul>
              {/* END PRODUCT PRICES */}
            </div>

            {/* PRODUCT DESRIPTION */}
            <p
              className="mb-4 text-muted"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
            {/* END PRODUCT DESCRIPTION */}
            { product.inventory.available !== 0 ?
            
            <Form>
              {/* ADD TO CART BUTTON */}
              <InputGroup className="w-100 mb-4">
                {/* QUANTITY INPUT */}
                <Form.Control
                  size="lg"
                  className="detail-quantity"
                  name="items"
                  type="number"
                  value={(quantity > 0 && quantity) || ""}
                  onChange={(e) => onChange(e)}
                />
                {/* END QUANTITY INPUT */}
                

                {/* ADD TO CART */}

                <Button
                  size="lg"
                  onClick={() => increaseQuantity(product)}
                
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="me-2 flex-grow-1 "
                  />
                  Ajouter au panier
                </Button>
                {/* END ADD TO CART */}
              </InputGroup>
              {/* END ADD TO CART BUTTON */}

             
            </Form>
            : null
            }
             <ul className="list-unstyled">
                {/* PRODUCT CATEGORIES */}
                <li>
                  <strong>categorie: </strong>
                  {product.categories.map((c) => c.name).join(", ")}
                </li>
                {/* END PRODUCT CATEGORIES */}
              </ul>
          </Col>
        </Row>
      </Modal.Body>
      {/* END MODAL BODY */}
    </Modal>
  )
}

export default Popups