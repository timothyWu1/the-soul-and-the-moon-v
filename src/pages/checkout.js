// import React, { useState, useEffect } from 'react';
// import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

// import { commerce } from '../lib/commerce';
// import AddressForm from '../components/CheckoutForm/AddressForm';
// import PaymentForm from '../components/CheckoutForm/PaymentForm';
// import useStyles from './styles';

// const steps = ['Adresse de livraison', 'Détails de paiement'];

// const Checkout = () => {
//   const [checkoutToken, setCheckoutToken] = useState(null);
//   const [activeStep, setActiveStep] = useState(0);
//   const [shippingData, setShippingData] = useState({});
//   const classes = useStyles();
//   var error = false;
//   const [cart, dispatch] = useState([]);

//   const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const getCard = async () => {
    
//       const data2 = await commerce.cart.retrieve();

      
//       dispatch(data2)

      
//   }

//   useEffect(() => {

//     getCard();
  
//     if (cart.id) {
//       const generateToken = async () => {
//         try { 
//           const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

//           setCheckoutToken(token);

//         } catch {
//           if (activeStep !== steps.length) history.push('/');
//         }
//       };

//       generateToken();
      
//     } else {
//       error = true;
//     }
//   }, []);

  
//   const test = (data) => {
//     setShippingData(data);

//     nextStep();
//   };

//   let Confirmation = () => (order.customer ? (
//     <>
//       <div>
//         <Typography variant="h5">Merci pour votre achat, {order.customer.firstname} {order.customer.lastname}!</Typography>
//         <Divider className={classes.divider} />
//         <Typography variant="subtitle2">
// Réference de commande : {order.customer_reference}</Typography>
//       </div>
//       <br />
//       <Button component={Link} variant="outlined" type="button" to="/">Retour à la page d'accueil</Button>
//     </>
//   ) : (
//     <div className={classes.spinner}>
//       <CircularProgress />
//     </div>
//   ));

//   if (error) {
//     Confirmation = () => (
//       <>
//         <Typography variant="h5">Erreur: {error}</Typography>
//         <br />
//         <Button component={Link} variant="outlined" type="button" to="/">Retour à la page d'accueil</Button>
//       </>
//     );
//   }

//   const Form = () => (activeStep === 0
//     ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
//     : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);

//   return (
//     <>
//       <CssBaseline />
//       <div className={classes.toolbar} />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>    
//           <Typography variant="h4" align="center">Vérifier</Typography>
//           <Stepper activeStep={activeStep} className={classes.stepper}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
//         </Paper>
//       </main>
//     </>
//   );
// };

// export default Checkout;

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1K3TfMA4B8Maa00LFZ4EFwdX",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>
   
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
      
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
