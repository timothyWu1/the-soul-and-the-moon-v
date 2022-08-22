import React, { useState, useEffect } from "react"
import Link from "next/link"

import { CartContext } from "../CartContext"
import { commerce } from "../../lib/commerce"

import SidebarCart from "../SidebarCart"
import ModalLogin from "../ModalLogin"
import SidebarRight from "../SidebarRight"

import Icon from "../Icon"
import { WishlistContext } from "../WishlistContext"

const MainIcons = (props) => {
  const [vignette, addVignette] = useState(0)
  const [modal, setModal] = React.useState({})
  const toggleModal = (name) => {
    setModal({ ...modal, [name]: !modal[name] })
  }
  const preventAnchor = (e, func) => {
    e.preventDefault()
    func()
  }

  const [cartContext, dispatch2] = useState([])
  const [wishlistContext] = React.useContext(WishlistContext)
  const [cartItems, dispatch1] = useState([])

  const fetchCard = async (data2) => {
    
    if (data2 == undefined){
      console.log("Data null")
      return;
    }
    
    //const data2 = await commerce.cart.contents()
    data2 = data2.filter((item) => item.product_id !== null);
    var nb = 0
    data2.map((item) => (nb += item.quantity))

    addVignette(nb)
    dispatch1(data2)
    dispatch2(data2)
  }
  // fetchCard();

  useEffect(() => {
    document.addEventListener("newCardItem", (e) => fetchCard(e.detail));
  }, [])

  return (
    <React.Fragment>
      <ul className={`list-inline d-block mb-0 ${props.className}`}>
        <li className="list-inline-item  position-relative me-5">
          <a
            className={`d-block text-${
              props.light ? "light" : "dark"
            } text-hover-primary `}
            href="#"
            aria-label="show cart "
            onClick={(e) => preventAnchor(e, () => toggleModal("sidebarCart"))}
          >
            <Icon icon="cart-1" className=" navbar-icon d-block" />
            {cartItems.map((item) => (
            <div className="navbar-icon-badge d-block">{vignette}</div>
        ))}
      
          </a>
        </li>
      </ul>
      <SidebarCart
        toggle={() => toggleModal("sidebarCart")}
        isOpen={modal.sidebarCart}
      />
    </React.Fragment>
  )
}

export default MainIcons
