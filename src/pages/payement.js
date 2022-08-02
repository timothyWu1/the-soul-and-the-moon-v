
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, {useState, useEffect } from "react"

import CheckoutForm from "../components/CheckoutForm";
import { Container } from "react-bootstrap";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");
  const [cartItems] = useState([]);
 
 
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

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#f6e2df',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      <Container className="py-6 categories"></Container>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}