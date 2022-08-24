import React, { useState, useEffect } from "react"

import { Button, CloseButton, Modal, Toast } from "react-bootstrap"

import Icon from "./Icon"
import Image from "./Image"
import getStripe, { commerce } from "../lib/commerce"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"
import { CircleSpinnerOverlay, FerrisWheelSpinner } from "react-spinner-overlay"
import Commerce from "@chec/commerce.js"

// const stripe = require('stripe')('pk_live_51L4DlCGZOykemseI7QGccARPB0ifDIwTrNv1ucgchguUdEEYhGd2JxunYC7Zr4inB22OC9zLyDD6ptjHHOMvKcCh00iujxFfz0');

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

// function Cart() {

const SidebarCart = (props) => {
  const [loading, setLoading] = useState(false)
  const [cartItems, dispatch] = useState([])
  const [total, addTotal] = useState(0)
  const [cart, setCart] = useState([])


  const fetchCart = () => {
    setLoading(true)
    commerce.cart
      .retrieve()
      .then((cart) => {
        console.log(cart)
        window.location.replace(
          "https://checkout.chec.io/cart/" +
            cart.id +
            "?return_url=" +
            window.location.origin
        )
      })
      .catch((error) => {
        console.log("erreur de fetching :", error)
      })
  }

  const testQuantity = () => {
    if (cartItems[0] !== undefined) {
      
    }
    // console.log("false")
    // return false
  }

//   if (product.inventory.available < item.quantity) {
//     console.log("test")
//     item.isDisabled = true;
//   }else {
//     item.isDisabled = false
//   }
//   console.log(" ")


// if (product.inventory.available < item.quantity) {
//   item.isDisabled = true
//   console.log("true")
//   return true
// }
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

  // Increase product quantity
  const increaseQuantity = async (product) => {
    // if (testQuantity() == true) {
      
      setLoading(true)
      var response = await commerce.cart.add(product.product_id, 1)
      document.dispatchEvent(
        
        new CustomEvent("newCardItem", { detail: { Cart: response.cart.line_items, Products: responseProduct } })
        
      )

      setLoading(false)
    // } else {
    //   console.log("bloqués")
      
    // }
  }

  const decreaseQuantity = async (product) => {
    if (product.quantity > 1) {
      setLoading(true)
      console.log(product.quantity)

      var response = await commerce.cart.add(product.product_id, -1)
      document.dispatchEvent(
        new CustomEvent("newCardItem", { detail: { Cart: response.cart.line_items, Products: responseProduct } })
      )

      setLoading(false)
    } else {
      await removeFromCart(product)
    }
  }

  const removeFromCart = async (product) => {
    setLoading(true)

    var responseCart = await commerce.cart.remove(product.id)
    var responseProduct = await commerce.products.retrieve();

    document.dispatchEvent(
      new CustomEvent("newCardItem", { detail: { Cart: response.cart.line_items, Products: responseProduct }})
    )

    setLoading(false)
  }


  const fetchCard = async (data2, products) => {
    if (data2 == undefined) {
      console.log("Data null")
      return
    }
    data2.map((item) => {
      var product = products.filter(p => p.product_id == item.product_id);
      if (product != null && product.inventory.available <= item.quantity) {
        //  console.log("test")
         item.isDisabled = true
       } else {
         item.isDisabled = false
       }
      // commerce.products.retrieve(item.product_id).then((product) => {
      //   // console.log("quantité panier :", item.quantity)
      //   // console.log("stock :", product.inventory.available)
      //    if (product.inventory.available <= item.quantity) {
      //     //  console.log("test")
      //      item.isDisabled = true
      //    } else {
      //      item.isDisabled = false
      //    }
      //    console.log(" ")
      // })
    })
    //const data2 = await commerce.cart.contents()
    data2 = data2.filter((item) => item.product_id !== null)

    var price = 0
    data2.map((item) => (price += item.price.raw * item.quantity))

    addTotal(price)
    dispatch(data2)
  }

  useEffect(() => {
   
    commerce.cart
      .contents()
      .then((d) =>
        document.dispatchEvent(new CustomEvent("newCardItem", { detail: d }))
      )

    document.addEventListener("newCardItem", (e) => fetchCard(e.detail.Cart, e.detail.Products))
  }, [])

  if (cartItems != []) {
    return (
      <Modal
        className="modal-right"
        contentClassName="sidebar-cart-content"
        show={props.isOpen}
        onHide={props.toggle}
      >
        <Modal.Header className="border-0 mb-3">
          <CloseButton
            className="modal-close  btn-close-lg btn-close-rotate opacity-8"
            type="button"
            onClick={props.toggle}
          />
        </Modal.Header>

        <Modal.Body className="px-5 sidebar-cart-body">
          {/* <FerrisWheelSpinner loading={loading} size={20} /> */}
          <CircleSpinnerOverlay
            loading={loading}
            overlayColor="rgba(0,0,0,0.7)"
            zIndex={99999}
          />
          {cartItems.length > 0 ? (
            <div className="sidebar-cart-product-wrapper custom-scrollbar">
              {cartItems.map((item) => (
                
                <div key={item.slug} className="navbar-cart-product">
                  {console.log(item.isDisabled)}
                  <div className="d-flex align-items-center">
                    {/* <Link href={`/${item.category[1]}/${item.slug}`}>
                    <a> */}

                    <Image
                      className="img-fluid navbar-cart-product-image"
                      src={item.image?.url}
                      // alt={item.img.category[0].alt}
                      width={100}
                      height={100}
                    />
                    {/* </a>
                  </Link> */}

                    <div className="w-100">
                      <a
                        className="navbar-cart-product-remove"
                        onClick={() => removeFromCart(item)}
                        href="#"
                      >
                        <Icon className="sidebar-cart-icon" icon="close-1" />
                      </a>
                      <div className="ps-3">
                        {item.name}
                        <strong className="d-block text-sm">
                          {item.quantity ? item.price.raw : item.price.raw}€
                        </strong>
                      </div>
                      <Button
                        onClick={() => decreaseQuantity(item)}
                        // variant="dark"
                        className="w-20 m-1 rounded-pill"
                      >
                        - 1
                      </Button>
                      <small className=" text-muted">
                        Quantité: {item.quantity ? item.quantity : 1}
                      </small>
                      <Button
                        onClick={() => increaseQuantity(item)}
                        //  variant="dark"
                        disabled={item.isDisabled}
                        className="w-20 m-1 rounded-pill"
                      >
                        + 1
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mb-5">
              <Icon
                className="w-3rem h-3rem svg-icon-light mb-4 text-muted"
                icon="cart-1"
              />
              <p>Votre panier est vide </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="sidebar-cart-footer">
          <div className="w-100">
            <h5 className="mb-4">
              Total: <span className="float-end">{total}€</span>
            </h5>
            {cartItems.length > 0 ? (
              <Link passHref href="/">
                {/* <Link passHref href="/payement.html"> */}
                <Button
                  // href="/payement.html"
                  onClick={fetchCart}
                  // variant="dark"
                  className="w-100 rounded-pill"
                >
                  Payer
                </Button>
              </Link>
            ) : (
              <Link passHref href="/">
                {/* <Link passHref href="/payement.html"> */}
                <Button
                  // href="/payement.html"
                  onClick={fetchCart}
                  // variant="dark"
                  className="w-100 rounded-pill"
                  disabled
                >
                  Payer
                </Button>
              </Link>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SidebarCart
