import Stripe from "stripe";
export const createCheckout=async(req,res)=>{
  const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
  const session=await stripe.checkout.sessions.create({
    mode:"subscription",
    line_items:[{price:"price_xxx",quantity:1}],
    success_url:"https://example.com",
    cancel_url:"https://example.com"
  });
  res.json({url:session.url});
};