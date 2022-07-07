 import React, {useState, useEffect } from "react"
import Link from "next/link"

import { CartContext } from "../CartContext"
import { commerce } from '../../lib/commerce';


import SidebarCart from "../SidebarCart"
import ModalLogin from "../ModalLogin"
import SidebarRight from "../SidebarRight"

import Icon from "../Icon"
import { WishlistContext } from "../WishlistContext"

const MainIcons = (props) => {
  const [modal, setModal] = React.useState({})
  const toggleModal = (name) => {
    setModal({ ...modal, [name]: !modal[name] })
  }
  const preventAnchor = (e, func) => {
    e.preventDefault()
    func()
  }

  const [cartContext, dispatch2] = useState([]);
  const [wishlistContext] = React.useContext(WishlistContext)
  const [cartItems, dispatch1] = useState([]);
  
  const fetchCard = async () => {
      const data2 = await commerce.cart.contents();
      dispatch1(data2)
      dispatch2(data2)
      
  }
  // fetchCard();

  useEffect(() => {

    fetchCard();
  }, [])
  return (
    <React.Fragment>
      <ul className={`list-inline mb-0 ${props.className}`}>
        {/* <li className="list-inline-item me-3">
          <a
            className={`text-${
              props.light ? "light" : "dark"
            } text-hover-primary`}
            href="#"
            aria-label="open login modal"
            onClick={(e) => preventAnchor(e, () => toggleModal("login"))}
          >
            <Icon icon="avatar-1" className="navbar-icon" />
          </a>
        </li> */}
        {/* <li className="list-inline-item me-3">
          <Link href="/wishlist">
            <a
              className={`text-${
                props.light ? "light" : "dark"
              } text-hover-primary position-relative`}
              aria-label="go to whishlist"
            >
              <Icon icon="heart-1" className="navbar-icon" />
              <div className="navbar-icon-badge">{wishlistContext.length}</div>
            </a>
          </Link>
        </li> */}
        <li className="list-inline-item position-relative me-5">
          <a
            className={`text-${
              props.light ? "light" : "dark"
            } text-hover-primary`}
            href="#"
            aria-label="show cart"
            onClick={(e) => preventAnchor(e, () => toggleModal("sidebarCart"))}
          >
            <Icon icon="cart-1" className="navbar-icon" />
            <div className="navbar-icon-badge">{cartContext.length}</div>
          </a>
        </li>
        {/* <li className="list-inline-item position-relative me-3">
          <a
            className={`text-${
              props.light ? "light" : "dark"
            } text-hover-primary`}
            href="https://buy.stripe.com/test_8wM7uzfDi3xJ0MMfYY"
            aria-label="show cart"
           
          >
            <Icon icon="cart-1" className="navbar-icon" />
          
          </a>
        </li> */}
        {/* {props.sidebarRight && (
          <li className="list-inline-item">
            <a
              className={`text-${
                props.light ? "light" : "dark"
              } text-hover-primary`}
              href="#"
              onClick={(e) =>
                preventAnchor(e, () => toggleModal("sidebarRight"))
              }
              aria-label="open right sidebar"
            >
              <Icon className="navbar-icon" icon="menu-hamburger-1" />
            </a>
          </li>
        )} */}
      </ul>
      <ModalLogin toggle={() => toggleModal("login")} isOpen={modal.login} />
      <SidebarCart
        toggle={() => toggleModal("sidebarCart")}
        isOpen={modal.sidebarCart}
      />
      <SidebarRight
        toggle={() => toggleModal("sidebarRight")}
        isOpen={modal.sidebarRight}
      />
    </React.Fragment>
  )
}

export default MainIcons
