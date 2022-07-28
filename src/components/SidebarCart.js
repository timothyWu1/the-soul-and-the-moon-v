 import React, {useState, useEffect } from "react"

import { Button, CloseButton, Modal, Toast } from "react-bootstrap"

import Icon from "./Icon"
import Image from "./Image"
import getStripe, { commerce } from '../lib/commerce';
import Link from "next/link"
import { loadStripe } from '@stripe/stripe-js';



const stripe = require('stripe')('pk_live_51L4DlCGZOykemseI7QGccARPB0ifDIwTrNv1ucgchguUdEEYhGd2JxunYC7Zr4inB22OC9zLyDD6ptjHHOMvKcCh00iujxFfz0');

const  handleCheckout = async () => {
  const stripe = await getStripe();

  const response = await fetch('/api/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItems),
  });

  if(response.statusCode === 500) return;
  // console.log ('OK');

  const data = await response.json();

  console.log ('OK');
  toast.loading('Redirecting...');

  stripe.redirectToCheckout({ sessionId: data.id });
}
const SidebarCart =  (props) => {
  const [cartItems, dispatch] = useState([]);
  const [total, addTotal] = useState(0);
  console.log((cartItems))

  const getPrice = async () => {
    var pTab = [];

    cartItems.map( async (item) => {
     

      stripe.products.create({
        name: item.name,
      }).then((response) => {});
      
      var price = await stripe.prices.create({
        currency: 'eur',
        unit_amount: "{item.price.raw}",
        product: item.id,
      });

      if (price != undefined) {
        pTab.push({price: price, quantity: 1})
      }
      
      
    })
    


    const paymentLink = await stripe.paymentLinks.create({line_items: pTab});
  
    window.location.href = paymentLink;
  }

  const removeFromCart = (product) => {
    commerce.cart.remove(product.id).then((response) => fetchCard());

    var removeId = cartItems.indexOf(product);
 
    cartItems.splice(removeId, 1)
    
    dispatch(cartItems);
    fetchCard();

    
    // console.log ('OK');

  }
  const headerClose = (
    <CloseButton
      className="modal-close  btn-close-lg btn-close-rotate opacity-8"
      type="button"
      onClick={props.toggle}
      
    />
    
  )

  

  const fetchCard = async () => {
    
      const data2 = await commerce.cart.contents();
      var price = 0;
      data2.map((item) => (
        price += (item.price.raw * item.quantity) 
      ))
      addTotal(price)
      dispatch(data2)

  }
  
// fetchCard();

  useEffect(() => {
    fetchCard();
    document.addEventListener('newCardItem', (e) => fetchCard());
  }, []);

  

  if (cartItems != undefined ){
  return (
    <Modal
      className="modal-right"
      contentClassName="sidebar-cart-content"
      show={props.isOpen}
      onHide={props.toggle}
    >
      <Modal.Header className="border-0 mb-3">{headerClose}</Modal.Header>
      <Modal.Body className="px-5 sidebar-cart-body">
        {cartItems.length > 0 ? (
          <div className="sidebar-cart-product-wrapper custom-scrollbar">
            {cartItems.map((item) => (
              <div key={item.slug} className="navbar-cart-product">
                <div className="d-flex align-items-center">
                  {/* <Link href={`/${item.category[1]}/${item.slug}`}>
                    <a> */}
                      <Image
                        className="img-fluid navbar-cart-product-image"
                        src={item.image.url}
                        // alt={item.img.category[0].alt}
                        width={80}
                        height={103}
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
                     
                      <small className="d-block text-muted">
                        Quantité: {item.quantity ? item.quantity : 1}
                      </small>
                      <strong className="d-block text-sm">
                        
                        {item.quantity
                          ? item.price.raw * item.quantity
                          : item.price.raw}
                          €
                      </strong>
                    </div>
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
          
          
          <Link passHref href="/">
            <Button 
            // onClick={handleCheckout}
            variant="dark"
            className="w-100">
              Payer
            </Button>
          </Link>
          
        </div>
      </Modal.Footer>
    </Modal>
  )
        }
}

export default SidebarCart
