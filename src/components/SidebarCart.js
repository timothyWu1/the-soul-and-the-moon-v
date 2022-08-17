import React, { useState, useEffect } from "react"

import { Button, CloseButton, Modal, Toast } from "react-bootstrap"

import Icon from "./Icon"
import Image from "./Image"
import getStripe, { commerce } from "../lib/commerce"
import Link from "next/link"
import { loadStripe } from "@stripe/stripe-js"
import toast from "react-hot-toast"
import { CircleSpinnerOverlay, FerrisWheelSpinner } from "react-spinner-overlay"

// const stripe = require('stripe')('pk_live_51L4DlCGZOykemseI7QGccARPB0ifDIwTrNv1ucgchguUdEEYhGd2JxunYC7Zr4inB22OC9zLyDD6ptjHHOMvKcCh00iujxFfz0');

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

// function Cart() {


const SidebarCart = (props) => {
  const [loading, setLoading] = useState(false)
  const [cartItems, dispatch] = useState([])
  const [total, addTotal] = useState(0)
  const [cart, setCart] = useState([])

  const getPrice = async () => {
    var pTab = []

    cartItems.map(async (item) => {
      stripe.products
        .create({
          name: item.name,
        })
        .then((response) => {})

      var price = await stripe.prices.create({
        currency: "eur",
        unit_amount: "{item.price.raw}",
        product: item.id,
      })

      if (price != undefined) {
        pTab.push({ price: price, quantity: 1 })
      }
    })

    const paymentLink = await stripe.paymentLinks.create({ line_items: pTab })

    window.location.href = paymentLink
  }

  const fetchCart = () => {
    setLoading(true)
    commerce.cart
      .retrieve()
      .then((cart) => {
        console.log(cart)
        window.location.replace(
          "https://checkout.chec.io/cart/" +
            cart.id +
            "?return_url=http://20.199.80.153"
        )
        setLoading(false)
      })
      .catch((error) => {
        console.log("erreur de fetching :", error)
      })
  }

  const handleCheckout = async () => {
    const [cartItems, dispatch] = useContext(CartContext) // Cart context
    const stripe = await getStripe()

    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    })
  

    if (response.statusCode === 500) return

    const data = await response.json()

    // console.log ('OK');
    toast.loading("Redirecting...")

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  const decreaseQuantity = async (product) => {
    
    if (product.quantity > 1) {
      setLoading(true)

      const response = await commerce.cart.add(product.product_id, -1)
      document.dispatchEvent(new Event("newCardItem"))

      setLoading(false)
      // commerce.cart.add(product.product_id, -1).then((response) => {
      //   document.dispatchEvent(new Event("newCardItem"))
      //   setLoading(false)
      // })
    } else {
      removeFromCart(product)
    }
  }


  // Increase product quantity
  const increaseQuantity = async (product) => {
    console.log(product.price.formatted_with_symbol)

    // if (product.quantity < product.inventory.available) {
    setLoading(true)
    
    const response = await commerce.cart.add(product.product_id, 1)
    // commerce.cart.add(product.product_id, 1).then((response) => {
    //   document.dispatchEvent(new Event("newCardItem"))
    //   setLoading(false)
    // })
    document.dispatchEvent(new Event("newCardItem"))
    setLoading(false)
    // fetchCard()
  // }
  }

  const deleteFromCart = (product) => {
    commerce.cart.remove(product).then((response) => fetchCard())

    var length = cartItems.length - 1
    console.log(length)
    console.log(product)
    cartItems.splice(0, length)

    dispatch(cartItems)
    // fetchCard()
    // document.dispatchEvent(new Event("newCardItem"))
  }

  const removeFromCart = (product) => {
    commerce.cart.remove(product.id).then((response) => fetchCard())

    var removeId = cartItems.indexOf(product)

    cartItems.splice(removeId, 1)

    dispatch(cartItems)
    // fetchCard()
    // document.dispatchEvent(new Event("newCardItem"))

    // console.log("OK sidebarCart")
  }
  const headerClose = (
    <CloseButton
      className="modal-close  btn-close-lg btn-close-rotate opacity-8"
      type="button"
      onClick={props.toggle}
    />
  )

  const fetchCard = async () => {
    const data2 = await commerce.cart.contents()
    data2 = data2.filter((item) => item.product_id !== null)

    var price = 0
    data2.map((item) => (price += item.price.raw * item.quantity))

    addTotal(price)
    dispatch(data2)
  }

  useEffect(() => {
    fetchCard()
    document.addEventListener("newCardItem", (e) => fetchCard())
  }, [])

  if (cartItems != []) {
    
   

    
    return (
      <Modal
        className="modal-right"
        contentClassName="sidebar-cart-content"
        show={props.isOpen}
        onHide={props.toggle}
      >
       
        <Modal.Header className="border-0 mb-3" onClick={fetchCard}>{headerClose}</Modal.Header>

        <Modal.Body className="px-5 sidebar-cart-body">
        {/* <FerrisWheelSpinner loading={loading} size={20} /> */}
          <CircleSpinnerOverlay
            loading={loading}
            overlayColor="rgba(0,153,255,0.2)"
            zIndex={99999}
          />
          {cartItems.length > 0 ? (
            <div className="sidebar-cart-product-wrapper custom-scrollbar">
              {cartItems.map((item) => (
                <div key={item.slug} className="navbar-cart-product">
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
                  className="w-100"
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
