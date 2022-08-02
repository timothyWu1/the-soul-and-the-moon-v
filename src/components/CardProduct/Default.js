 import React, {useState, useEffect } from "react"
import Link from "next/link"

import { Badge } from "react-bootstrap"

import Stars from "../Stars"
import Icon from "../Icon"

import Image from "../Image"
import { commerce } from '../../lib/commerce';
import Popup from '../Popup'
 

const CardProductDefault = ({
  product,
  masonry,
  addToCart,
  addToWishlist,
  setQuickView,
}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [cartItems, dispatch] = useState([]);

  const fetchCard = async () => {
      const data2 = await commerce.cart.contents();
      dispatch(data2)
  }


  useEffect(() => {

    
  }, [])

  return (
    <div
      className={`product product-type-0`}
      data-aos="zoom-in"
      data-aos-delay="0"
    >
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
    
            
            <Image
              className="img-fluid"
              src={product.image.url}
              href=""
              // alt={product.img.category[0].alt}
              layout="responsive"
              width={408}
              height={523}
            />
            
          {/* </a>
        </Link> */}
        <div className="product-hover-overlay">
          <button
            className="text-dark text-sm"
            aria-label="add to cart"
            onClick={() => {
              commerce.cart.add(product.id, 1).then((response) => document.dispatchEvent(new Event('newCardItem')))
              
            }}
          >
            <Icon
              className="text-hover-primary svg-icon-heavy d-sm-none"
              icon="retail-bag-1"
            />
            <span className="d-none d-sm-inline"       onClick={togglePopup}
> <Icon className="svg-icon-heavy" icon="add-1" />Ajouter</span>
          </button>

          {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        
      </>}
      handleClose={togglePopup}
    />}

      
          <div>
            <a
              className="text-dark text-hover-primary me-2"
              href="#"
              onClick={(e) => addToWishlist(e, product)}
              aria-label="add to wishlist"
            >
             
            </a>
            <a
              className="text-dark text-hover-primary text-decoration-none"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setQuickView(!quickView)
              }}
              aria-label="open quickview"
            >
              {/* <Icon className="svg-icon-heavy" icon="expand-1" /> */}
            </a>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <h3 className="text-base mb-1">
          {product.name}
      
        </h3>
        <span className="text-gray-500 text-sm">{product.price.formatted_with_symbol}</span>
     
      </div>
    </div>
  )
}

export default CardProductDefault
