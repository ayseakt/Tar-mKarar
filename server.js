
const express = require('express');
const app = express();
require('dotenv').config(); // .env dosyasını yüklemek için

// .env dosyasındaki PORT değişkenini kullan
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// app.use(express.static('public')); // 'public' klasörünü statik dosya servis etmek için kullan

app.get('/', (req, res) => {
    // Bu kısımda veritabanından verileri çekme işlemini gerçekleştirmeniz gerekiyor
    // Veritabanına bağlantı, sorgu işlemleri vs.

    // Örnek olarak sabit bir liste dönelim
    res.render("/views/login.html")
    const pazarlamaTurleri = ['Online Pazarlama', 'Offline Pazarlama'];

    res.json(pazarlamaTurleri);
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
