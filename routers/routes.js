// routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
// const dbConn = require("./db/mysql_connect"); // Veritabanı bağlantısı

// Login endpoint'i
router.post('/login', controller.login);

// Register endpoint'i
router.post('/register', controller.register);
router.get('/comments', (req, res) => {
    dbConn.query("SELECT * FROM musteri", (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: "Sunucu hatası"
        });
      }
      return res.status(200).json({
        success: true,
        data: results
      });
    });
  });
module.exports = router;


