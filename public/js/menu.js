// menu.js dosyası

document.addEventListener("DOMContentLoaded", function () {
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

    // Ürünler sayfasına yönlendirme
    const urunlerLink = document.querySelector('.link_name[href="ürünler.html"]');
    if (urunlerLink) {
        urunlerLink.addEventListener('click', function () {
            toggleMenu(); // Sayfa yönlendirmesini yapmadan önce menüyü kapat
        });
    }

    // Diğer linkler için benzer şekilde işlem yapabilirsiniz
    // Örneğin:
    /*
    const musterilerLink = document.querySelector('.link_name[href="musteriler.html"]');
    if (musterilerLink) {
        musterilerLink.addEventListener('click', function () {
            toggleMenu(); // Sayfa yönlendirmesini yapmadan önce menüyü kapat
        });
    }
    */
});
