export default async (req, res) => {
  res.json({ planId: process.env.PAYPAL_PLAN_ID });
}