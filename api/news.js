export default async (req, res) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.NEWSAPI_KEY}`);
  res.json(await response.json());
}