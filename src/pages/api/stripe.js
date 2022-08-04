import { Card } from 'react-bootstrap';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    var qtt = 0;
    var rep = 0;
    for (let i = 0; i < req.body.length; i++) {
      qtt = req.body[i].line_total.raw 
      rep = rep + qtt
    }
    console.log(req.body.length)
    console.log("test")
    console.log(rep)

    try {
        const params = {
            cancel_url: 'http://localhost:3000',
            submit_type: 'pay',
            mode: 'payement',
            currency: 'eur',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {shipping_rate: "shr_1LRzVIAubXoYV6csx1iVopWh"},
            ],
            line_items: [
              {
                
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price_data: {
                  
                  currency: 'eur',
                  product: req.body[0].product_name,
                  product_data: req.body[0].product_name*100,

                  unit_amount: req.body[0].line_total.raw,
                  unit_amount_decimal: req.body[0].line-total.formatted,
                  product_data: {
                    name: req.body[0].name,
                  },
              },
            }
            ],
            mode: 'payment',
            billing_address_collection: 'required',
            shipping_address_collection: 'FR',

            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session.id);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}