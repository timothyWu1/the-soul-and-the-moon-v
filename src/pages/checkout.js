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

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}