// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
    var qtt = 0;
    var rep = 0;
    // for (let i = 0; i < items.length; i++) {
    //   qtt = items[i].line_total.raw 
    //   rep = rep + qtt
    // }
    // console.log(items)
    // console.log("test")
    // console.log(rep)
  return 1400;
};

export default async function handler(req, res) {
  const { items } = req.body;
  console.log(req)
  

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    // mode: 'payment',
    // billing_address_collection: 'required',
    // shipping_address_collection: 'FR',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

