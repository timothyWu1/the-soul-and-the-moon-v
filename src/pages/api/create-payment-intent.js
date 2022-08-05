// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  
  var qtt = 0;
  var rep = 1000;
    for (let i = 0; i < req.body.length; i++) {
      qtt = req.body[i].line_total.raw ;
      rep = rep + qtt;
    }
  // console.log(typeof rep)
  // console.log('rep is equal to :', rep)
  // console.log("test")


  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: rep,
    currency: "eur",
    
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

