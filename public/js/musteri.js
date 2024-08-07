// Müşteri detay sayfasına yönlendiren fonksiyon
function redirectToCustomerDetail(customerId) {
    // Gerçek yönlendirme işlemi burada gerçekleştirilecek
    // Örneğin:
    window.location.href = 'musteri' + customerId + '.html';
}

// Pazarlama sayfasına yönlendiren fonksiyon
function redirectToMarketing() {
    // Gerçek yönlendirme işlemi burada gerçekleştirilecek
    // Örneğin:
    window.location.href = 'pazarlama.html';
}

// Örnek müşteri verileri (gerçek verilerinizle değiştirin)
const customers = [
    { id: 1, name: 'Sosyal Medya Satışları', description: 'Açıklama 1' },
    { id: 2, name: 'Şube Satışları', description: 'Açıklama 2' },
    // { id: 3, name: 'Web Sayfası Satışları', description: 'Açıklama 3' }
];

// Müşterileri sayfaya ekleyen fonksiyon
function renderCustomers() {
    const customerSection = document.getElementById('productSection');

    customers.forEach(customer => {
        const customerButton = document.createElement('button');
        customerButton.classList.add('customer-button');
        customerButton.style.width = '100%'; // Butonun genişliğini ayarla
        customerButton.style.height = '90px';
        customerButton.style.margin = '40px';
        customerButton.textContent = customer.name;
        customerButton.addEventListener('click', () => {
            if (customer.name === 'Sosyal Medya Satışları') {
                redirectToMarketing(); // Sosyal Medya Satışları'na tıklandığında pazarlama sayfasına yönlendir
            } else {
                redirectToCustomerDetail(customer.id);
            }
        });
        customerSection.appendChild(customerButton);
    });
}

// Müşteri kutularını render et
renderCustomers();
