// app.js

const express = require('express');
const router = require('./routers');
const path = require("path");
require('dotenv/config');

const app = express();

app.use(express.static("public"));
app.use(express.static("node_modules"));
app.use(express.static("views"));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/urunler', function (req, res) {
  res.sendFile(path.join(__dirname, "views/urunler.html"));
});

app.get('/yorumlar', function (req, res) {
  res.sendFile(path.join(__dirname, "views/yorumlar.html"));
});

app.get('/musteri', function (req, res) {
  res.sendFile(path.join(__dirname, "views/musteri.html"));
});

// app.get('/musteri_getir', function (req, res) {
//   res.sendFile(path.join(__dirname, "views/musteri_getir.html"));
// });

// Middlewares
app.use(express.json({ limit: '50mb', extended: true, parameterLimit: 50000 }));

// API endpointlerini kullan
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
