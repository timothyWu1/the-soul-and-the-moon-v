import Commerce from '@chec/commerce.js';
import Stripe  from 'stripe';


export const commerce = new Commerce("pk_test_435476a44dead90a7892a70f98719c7349a741cfa265a", true);

export const stripe = new Stripe('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');

// liason ecommerce