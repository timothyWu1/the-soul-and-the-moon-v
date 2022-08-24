import React, { useState, useEffect } from "react"
import Link from "next/link"

import { Badge, Button } from "react-bootstrap"

import Icon from "../Icon"

import Image from "../Image"

import { commerce } from "../../lib/commerce"

import ModalQuickView from "../ModalQuickView"

import { CircleSpinnerOverlay, FerrisWheelSpinner } from "react-spinner-overlay"

const CardProductDefault = ({ product}) => {
  const [quickView, setQuickView] = React.useState(false)
  const [loading, setLoading] = useState(false)
  const [cartItems, dispatch] = useState([])
  var stock = product.inventory.available
  
  const fetchCard = async () => {
    const data2 = await commerce.cart.contents()
    dispatch(data2)
  }

  const decreaseStock = (product) => {
      
      console.log("le produit :",product)
      console.log("le stock :", stock)
      console.log("type :",typeof(product))
      console.log('stock avant modif :',stock)
      stock = stock - 1
      // product.stock= product.stock -1
      console.log('stock apres modif:', stock)
      console.log('stock reduit de 1')
    }
  

  const increaseQuantity = async (product) => {
    setLoading(true)
    decreaseStock(product)
    var response = await commerce.cart.add(product.id, 1)
    document.dispatchEvent(new CustomEvent("newCardItem", { detail:response.cart.line_items }))

    setLoading(false)
  }

  useEffect(() => {}, [])

  return (
    <div className={`product product-type-1`}>
      <CircleSpinnerOverlay
            loading={loading}
            overlayColor="rgba(0,0,0,0.7)"
            zIndex={99999}
          />
      <div className="product-image mb-md-3">
      
        
          <Image
            className="img-fluid"
            src={product.image?.url}
            href="/#"
            
            // alt={product.img.category[0].alt}
            layout="responsive"
            width={500}
            height={500}
          />
      
        <div className="product-hover-overlay">
          <div className="product-hover-overlay-buttons">
            <ul className="list-unstyled">
              <li className="my-2">
                <Button
                  variant="outline-dark"
                  className="product-btn-animated d-sm-inline-block w-100 px-3 py-0"
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
                    className="product-btn-animated d-sm-inline-block w-100 px-3 py-0"
                    onClick={() => increaseQuantity(product)} 
                    aria-label="add to cart"
                  >
                    <span
                      className="product-animated-text"
                     
                    >
                      Ajouter
                    </span>
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
          <br/>
          Disponible : {stock}
          {/* Disponible: {product.inventory.available} */}
        </span>
      </div>
    </div>
  )
}

export default CardProductDefault