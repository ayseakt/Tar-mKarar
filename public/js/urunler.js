// Menüyü açma ve kapama fonksiyonu
function toggleMenu() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
}

// Menüyü açma ve kapama fonksiyonunu sayfa yüklendiğinde çağır
const sidebarBtn = document.querySelector(".bx-menu");
if (sidebarBtn) {
    sidebarBtn.addEventListener("click", toggleMenu);
}

// Sayfa boyutu değiştiğinde menüyü kapat
window.addEventListener("resize", function () {
    let sidebar = document.querySelector(".sidebar");
    if (window.innerWidth > 768) {
        sidebar.classList.remove("close");
    }
});

// İçeriğe tıklandığında menüyü kapat
document.addEventListener("click", function (e) {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    
    // Eğer sayfa küçükse veya menü düğmesine tıklanmadıysa
    if (window.innerWidth <= 768 && !e.target.closest(".sidebar") && !e.target.closest(".bx-menu")) {
        sidebar.classList.remove("close");
    }
});
// Ürün detay sayfasına yönlendiren fonksiyon
function redirectToProductDetail(productId) {
    // Gerçek yönlendirme işlemi burada gerçekleştirilecek
    // Örneğin:
    window.location.href = 'urun' + productId + '.html';
}

// Örnek ürün verileri (gerçek verilerinizle değiştirin)
const products = [
    { id: 1, name: 'Toprak işleme makineleri', description: 'Açıklama 1' },
    { id: 2, name: 'Ekim ,Dikim Gübreleme Makineleri', description: 'Açıklama 2' },
    { id: 3, name: 'Sulama', description: 'Açıklama 3' },
    { id: 4, name: 'Hasat , Harman ', description: 'Açıklama 4' },
    { id: 5, name: 'Römork ve Tanker', description: 'Açıklama 5' }
];

// Ürünleri sayfaya ekleyen fonksiyon
function renderProducts() {
    const productSection = document.getElementById('productSection');

    products.forEach(product => {
        const productButton = document.createElement('button');
        productButton.classList.add('product-button');
        productButton.textContent = product.name;
        productButton.addEventListener('click', () => redirectToProductDetail(product.id));
        productSection.appendChild(productButton);
    });
}

