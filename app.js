const express = require("express");
const shortid = require("shortid");

const app = express();
app.use(express.json());

const urlDatabase = {};

// Home route
app.get("/", (req, res) => {
  res.send("URL Shortener is running and ready to shorten your URLs!");
});

// Create short URL
app.post("/shorten", (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortCode = shortid.generate();
  urlDatabase[shortCode] = longUrl;

  res.json({
    shortUrl: `http://localhost:3000/${shortCode}`
  });
});

// Redirect
app.get("/:code", (req, res) => {
  const longUrl = urlDatabase[req.params.code];

  if (longUrl) {
    return res.redirect(longUrl);
  } else {
    return res.status(404).send("URL not found");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});