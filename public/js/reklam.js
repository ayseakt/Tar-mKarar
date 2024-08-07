// Örnek veriler
const zamanDilimi = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'];
const mevcutSatislar = [100, 120, 90, 80, 110, 130];
const mevcutReklamHarcamalari = [200, 180, 220, 240, 200, 180];

// Grafik oluşturma fonksiyonu
function grafikOlustur() {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: zamanDilimi,
            datasets: [
                {
                    label: 'Mevcut Satışlar',
                    data: mevcutSatislar,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: 'Mevcut Reklam Harcamaları',
                    data: mevcutReklamHarcamalari,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    return myChart; // Grafik nesnesini döndür
}

// Sayfa yüklendiğinde grafik oluştur
const myChart = grafikOlustur();
