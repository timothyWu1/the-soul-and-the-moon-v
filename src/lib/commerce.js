import Commerce from '@chec/commerce.js';
import Stripe  from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

// export const stripe = new Stripe('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');

let stripePromise = null;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
};



export default getStripe;

// liason ecommerce
export const commerce = new Commerce("pk_435478f33b2ad656c1add83105b412ff1b25851d700c4", true);

