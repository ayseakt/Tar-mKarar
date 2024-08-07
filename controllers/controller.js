const dbConn = require("../db/mysql_connect");

const login = (req, res) => {
    const mail = req.body.mail;
    const sifre = req.body.sifre;

    dbConn.query("SELECT * FROM kullanici WHERE mail=? AND sifre=?", [mail, sifre], (error, results) => {
        if (results.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Giriş başarılı!"
            });
        } else {
            return res.status(203).json({
                success: false,
                message: "Kullanıcı veya Şifre Uyumsuz"
            });
        }
    });
}

const register = (req, res) => {
    const mail = req.body.mail;
    const sifre = req.body.sifre;

    dbConn.query("SELECT * FROM kullanici WHERE mail=?", mail, (err, result) => {
        if (result.length > 0) {
            return res.status(409).json({
                success: false,
                message: "Böyle bir kayıt var"
            });
        } else {
            dbConn.query("INSERT INTO kullanici (mail, sifre) VALUES (?, ?)", [mail, sifre], (err, result) => {
                if (!err) {
                    return res.status(201).json({
                        success: true,
                        message: "Kayıt başarılı"
                    });
                } else {
                    console.log(err);
                    return res.status(500).json({
                        success: false,
                        message: "Sunucu hatası"
                    });
                }
            });
        }
    });
}
// dbConn.connect(err => {
//     if (err) {
//       console.log('Veritabanına bağlanılamadı: ', err);
//       return;
//     }
//     console.log('Veritabanına bağlantı başarılı');
//   });
  
  // Yıllık maliyetleri çeken endpoint
//   app.get('/api/yillik-maliyet', (req, res) => {
//     const sube = req.query.sube; // Şube adını query parametresinden al
  
//     // Şube adına göre yıllık maliyet verilerini çek
//     const sql = `
//       SELECT su.sube, u.yil, u.maliyet
//       FROM sube_urun su
//       INNER JOIN urun u ON su.urun_id = u.urun_id
//       WHERE su.sube = ?`;
    
//     dbConn.query(sql, [sube], (error, results) => {
//       if (error) {
//         return res.status(500).json({
//           success: false,
//           message: "Sunucu hatası"
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         data: results
//       });
//     });
//   });

module.exports = { login, register };
