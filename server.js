const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const path = require("path");
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_51MMa6iLrVEr2jlD62PUpgyZsl82H07ZTPkwyaOz59IHFID0hI4yKBNwtcJWOO37axD3TtaZj3pifexpDbAhzEqte00fjB4cBiE");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.static("client/build"));
app.use(bodyParser.json());

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Mongoose setup --------------------------------

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

// Routes --------------------------------

app.get("/api/floorPrices/:contractAddress", async (req, res) => {
  console.log("Route /api/floorPrices/ called with contract address:", req.params.contractAddress);
  try {
    const contractAddress = req.params.contractAddress;
    const response = await axios.get(`https://polygonapi.nftscan.com/api/v2/collections/${contractAddress}`, {
      headers: {
        'X-API-KEY': 'UpHv9E2zqy9TValq6VhoRUXd'
      }
    });

    const floorPrice = response.data.data.floor_price;
    console.log("Route /api/floorPrices/ called with contract address:", req.params.contractAddress);
    res.send({ contractAddress, floorPrice });

  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from API");
  }
});

app.get('/success', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
});

app.post("/checkout", async (req, res) => {

  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push(
      {
        price: item.stripeKey,
        quantity: item.quantity
      }
    )
  });

  const MY_DOMAIN = "https://oryon-merch.com";

  const session = await stripe.checkout.sessions.create({
    customer_email: 'customer@example.com',
    submit_type: 'pay',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['AU', 'AT', 'BE', 'CA', 'DK', 'FI', 'FR', 'DE', 'IE', 'IT', 'JP', 'LU', 'MX', 'NL', 'NZ', 'NO', 'ES', 'SE', 'CH', 'GB', 'US'],
    },
    line_items: lineItems,
    mode: 'payment',
    success_url: `${MY_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${MY_DOMAIN}?canceled=true`,
  });

  res.send(JSON.stringify({
    url: session.url
  }));

});

// Default route --------------------------------

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
