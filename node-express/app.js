<<<<<<< HEAD
const express = require("express");
let axios = require("axios");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async function (req, res, next) {
  try {
    let results = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    let data = await axios.all(results);
    let out = data.map((r) => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
=======
const express = require("express");
let axios = require("axios");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async function (req, res, next) {
  try {
    let results = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    let data = await axios.all(results);
    let out = data.map((r) => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.listen(3000);

>>>>>>> ccaa30df6e9bbce17b84adca21e8159c53fe557d
