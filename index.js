const express = require("express");
const app = express();

app.use(express.json());

app.post("/user/login", (req, res) => {
  res.json({
    banned: false,
    id: req.body.id,
    username: req.body.username,
    country: req.body.country,
    trophys: req.body.trophys,
    crowns: req.body.crowns,
    experience: req.body.experience,
    gems: 0,
    coins: 0
  });
});

app.listen(3000);
