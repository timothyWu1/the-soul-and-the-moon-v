import React, { useState } from "react"
import Link from "next/link"

import { Button, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap"

import Icon from "../Icon"

import Image from "../Image"
import Colors from "./Colors"

const CardProduct4 = ({
  product,
  addToCart,
  addToWishlist,
  setQuickView,
  quickView,
}) => {
  console.log(product);
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <div
      className={`product product-type-4`}
      data-aos="zoom-in"
      data-aos-delay="0"
    >
      <div className="product-image border-0">
        {product.new && (
          <div className="product-label-boxed py-1 rounded-pill small fw-normal bg-white text-dark">
            Fresh
          </div>
        )}
        {product.sale && (
          <div className="product-label-boxed py-1 rounded-pill small fw-normal bg-primary text-light">
            Sale
          </div>
        )}
        {product.soldout && (
          <div className="product-label-boxed py-1 rounded-pill small fw-normal bg-dark text-light">
            Sold out
          </div>
        )}

        <div className="product-image-holder position-relative">
          
            <Image
              src={product.image.url}
              href=""
              className="image-fluid"
              layout="responsive"
              width={408}
              height={523}
            />
        
        </div>
        <div className="product-hover-overlay">
          {/* <Link
            href={
              product.link
            }
          >
            <a className="product-hover-overlay-link" />
          </Link> */}
          <div className="product-hover-overlay-buttons">
            <ButtonGroup className="shadow">
              <Button
                variant="light"
                size="lg"
                className="bg-white p-0 border-0"
                href="#!"
                onClick={(e) => {
                  e.preventDefault()
                  setQuickView(!quickView)
                }}
                aria-label="open quickview"
              >
                <OverlayTrigger
                  className="d-block p-3"
                  overlay={<Tooltip>Quick view</Tooltip>}
                >
                  <span className="d-block p-3">
                    <Icon className="svg-icon-md" icon="expand-1" />
                  </span>
                </OverlayTrigger>
              </Button>
              <Button
                variant="light"
                size="lg"
                className="bg-white p-0 border-0"
                href="#!"
              >
                <OverlayTrigger overlay={<Tooltip>Compare</Tooltip>}>
                  <span className="d-block p-3">
                    <Icon className="svg-icon-md" icon="stack-1" />
                  </span>
                </OverlayTrigger>
              </Button>
              <Button
                variant="light"
                size="lg"
                className="bg-white p-0 border-0"
                href="#!"
                onClick={(e) => addToWishlist(e, product)}
                aria-label="add to wishlist"
              >
                <OverlayTrigger overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                  <span className="d-block p-3">
                    <Icon className="svg-icon-md" icon="heart-1" />
                  </span>
                </OverlayTrigger>
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className="py-3">
        {/* <h3 className="h6 mb-1">
          <Link
            href={
              product.link
            }
          >
            <a className="text-dark">{product.name}</a>
          </Link>
        </h3> */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="product-info-action">
            <p className="product-price d-flex align-items-center text-muted mb-0">
              <s className="me-2 text-gray-500">${product.price.formatted_with_symbol}.00</s>
              {/* Only for DEMO purposes - change on production */}
              <span>$20.00</span>
            </p>
            <Button
              variant="link"
              className="product-link"
              href="#!"
              onClick={(e) => addToCart(e, product)}
              aria-label="add to cart"
            >
              <Icon className="me-2 svg-icon-sm svg-icon-heavy" icon="cart-1" />
              
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CardProduct4
