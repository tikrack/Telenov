const express = require("express");
const bodyParser = require("body-parser");
const {Telenov} = require("../index");

const bot = new Telenov("7690980872:AAHuLwq6QvBD3wYv4y_PzRWUmUOH-NP-Y5Q");

const app = express();
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Server running on port 3000...");
    // bot.setWebhook("https://YOUR_DOMAIN/webhook");
});
