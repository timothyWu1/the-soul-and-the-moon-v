const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { price } = req;

  // const redirectURL =
  //   process.env.NODE_ENV === 'development'
  //     ? 'http://localhost:3000'
  //     : 'https://stripe-checkout-next-js-demo.vercel.app';

  const transformedItem = {
    price_data: {
      currency: 'eur',
      unit_amount: 100,
      product_data: {
        name: "Votre panier",
      },
    },
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
