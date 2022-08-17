import React, { useState, useEffect } from "react"
import Link from "next/link"

import { Badge, Button } from "react-bootstrap"

import Stars from "../Stars"
import Icon from "../Icon"

import Image from "../Image"
import { commerce } from "../../lib/commerce"

import ModalQuickView from "../ModalQuickView"

import { FaInfo } from "react-icons/fa"

const CardProductDefault = ({ product, masonry, addToCart, addToWishlist }) => {
  const [quickView, setQuickView] = React.useState(false)

  const [cartItems, dispatch] = useState([])

  const fetchCard = async () => {
    const data2 = await commerce.cart.contents()
    dispatch(data2)
  }

  useEffect(() => {}, [])

  return (
    <div className={`product product-type-1`}>
      <div className="product-image mb-md-3">
        {product.new && (
          <Badge bg="secondary" className="product-badge">
            Fresh
          </Badge>
        )}
        {product.sale && (
          <Badge bg="primary" className="product-badge">
            Sale
          </Badge>
        )}
        {product.soldout && (
          <Badge bg="dark" className="product-badge">
            Sold out
          </Badge>
        )}
        <a onClick={() => setQuickView(!quickView)} >
          <Image
            className="img-fluid"
            src={product.image?.url}
            href=""
            onClick={() => setQuickView(!quickView)}
            // alt={product.img.category[0].alt}
            layout="responsive"
            width={500}
            height={500}
          />
        </a>

        <div className="product-hover-overlay">
          <div className="product-hover-overlay-buttons">
            <ul className="list-unstyled">
              <li className="my-2">
                <Button
                  variant="outline-dark"
                  className="product-btn-animated d-none d-sm-inline-block w-100 px-3 py-0"
                  onClick={() => setQuickView(!quickView)}
                  aria-label="open quickview"
                >
                  <span className="product-animated-text">Détail</span>
                  <span className="product-animated-icon">
                    <Icon
                      className="svg-icon-sm svg-icon-heavy"
                      icon="expand-1"
                    />
                  </span>
                </Button>
                <ModalQuickView
                  isOpen={quickView}
                  toggle={() => setQuickView()}
                  product={product}
                />
              </li>
              <li className="my-2">
                {product.inventory.available !== 0 ? (
                  <Button
                    variant="outline-dark"
                    className="product-btn-animated d-none d-sm-inline-block w-100 px-3 py-0"
                    onClick={(e) =>
                      commerce.cart
                        .add(product.id, 1)
                        .then((response) =>
                          document.dispatchEvent(new Event("newCardItem"))
                        )
                    }
                    aria-label="add to cart"
                  >
                    <span className="product-animated-text">Ajouter</span>
                    <span className="product-animated-icon">
                      <Icon
                        className="svg-icon-sm svg-icon-heavy"
                        icon="cart-1"
                      />
                    </span>
                  </Button>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <h3 className="text-base mb-1">{product.name}</h3>
        <span className="text-gray-500 text-sm">
          {product.price.formatted_with_symbol}
        </span>

        <span className="text-gray-500 text-sm ms-4">
          reste: {product.inventory.available}
        </span>
      </div>
    </div>
  )
}

export default CardProductDefault
