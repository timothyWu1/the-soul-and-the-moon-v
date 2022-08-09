import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import React, { useState, useEffect } from "react"

import CheckoutForm from "../components/CheckoutForm"
import { Container } from "react-bootstrap"

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function payement() {
  const [clientSecret, setClientSecret] = React.useState("")
  const [cartItems, dispatch] = useState([])

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

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#f6e2df",
    },
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="App">
      <Container className="py-6 categories"></Container>
      <Container className="py-6 categories">
        <h2>
          Veuillez renseigner vos informations pour procéder au payement par
          carte bancaire
        </h2>
      </Container>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      <Container className="py-6 categories"></Container>
    </div>
  )
}

{/* <script src="https://js.stripe.com/v3/"></script>
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import React, { useState, useEffect } from "react"
import {StripeProvider} from 'react-stripe-elements';
import Commerce from '@chec/commerce.js';


// Create a stripe SDK instance using your test key
// const stripe = Stripe('pk_test_51LHvYZAubXoYV6csTkw9Dp4PpvibMUhdE9c4rryd89q6XLElw5dt8ojqntoSiD3iMdAKQkFjvUfEF9r87hieydbB000mBCQBrE');
const stripe = loadStripe('pk_test_51LHvYZAubXoYV6csTkw9Dp4PpvibMUhdE9c4rryd89q6XLElw5dt8ojqntoSiD3iMdAKQkFjvUfEF9r87hieydbB000mBCQBrE');

// Create a commerce.js instance using your sandbox key
const commerce = new Commerce('pk_test_435476a44dead90a7892a70f98719c7349a741cfa265a');

// When mounting the Stripe elements form to your page, you should have a line like this which provides a card element
const card = elements.create('card')

// ... Integrate Elements onto your page, and other fields required for capturing a checkout with Commerce.js.

// Create a function that can be called when a "complete order" button is clicked
async function captureOrder() {
  // This process includes a few API calls, so now is a good time to show a loading indicator

  // Create a payment method using the card element on the page
  const paymentMethodResponse = await stripe.createPaymentMethod({ type: 'card', card });

  if (paymentMethodResponse.error) {
    // There was some issue with the information that the customer entered into the payment details form.
    alert(paymentMethodResponse.error.message);
    return;
  }

  try {
    // Use a checkout token ID generated that was generated earlier, and any order details that may have been collected
    // on this page. Note that Commerce.js checkout tokens may already have all the information saved against them to
    // capture an order, so this extra detail may be optional.
    const order = await commerce.checkout.capture(checkoutTokenId, {
      ...orderDetails,
      // Include Stripe payment method ID:
      payment: {
        gateway: 'stripe',
        stripe: {
          payment_method_id: paymentMethodResponse.paymentMethod.id,
        },
      },
    })

    // If we get here, the order has been successfully captured and the order detail is part of the `order` variable
    console.log(order);
    return;
  } catch (response) {
    // There was an issue with capturing the order with Commerce.js
    console.log(response);
    alert(response.message);
    return;
  } finally {
    // Any loading state can be removed here.
  }
} */}
