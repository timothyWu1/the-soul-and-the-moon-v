import Commerce from '@chec/commerce.js';
import Stripe  from 'stripe';


export const commerce = new Commerce("pk_test_435476a44dead90a7892a70f98719c7349a741cfa265a", true);

export const stripe = new Stripe('pk_live_51L4DlCGZOykemseI7QGccARPB0ifDIwTrNv1ucgchguUdEEYhGd2JxunYC7Zr4inB22OC9zLyDD6ptjHHOMvKcCh00iujxFfz0');

// liason ecommerce