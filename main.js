// 1. Массив данных (товары из макета)
const products = [
    { name: "Mars rug", price: 100, count: 24, img: "https://via.placeholder.com/150" },
    { name: "Keyboard sticker", price: 49, count: 11, img: "https://via.placeholder.com/150" },
    { name: "Smart watch", price: 899, count: 4, img: "https://via.placeholder.com/150" },
    { name: "Wireless keyboard", price: 350, count: 0, img: "https://via.placeholder.com/150" },
    { name: "Mouse", price: 359, count: 24, img: "https://via.placeholder.com/150" },
    { name: "AirPods", price: 499, count: 11, img: "https://via.placeholder.com/150" },
    { name: "Powerbank", price: 899, count: 5, img: "https://via.placeholder.com/150" },
    { name: "USB flash drive", price: 299, count: 21, img: "https://via.placeholder.com/150" },
    { name: "Smartphone", price: 3699, count: 2, img: "https://via.placeholder.com/150" },
    { name: "Playstation 5", price: 7449, count: "pre-order", img: "https://via.placeholder.com/150" },
    { name: "Yandex Station", price: 1999, count: 4, img: "https://via.placeholder.com/150" },
    { name: "Planshet Samsung", price: 4999, count: 24, img: "https://via.placeholder.com/150" }
];

const grid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');

// 2. Функция вывода товаров в DOM (Выпуск в DOM)
function displayProducts(items) {
    grid.innerHTML = ""; // Очищаем сетку перед выводом

    items.forEach(product => {
        // Создание элемента
        const card = document.createElement('div');
        
        // 3. Стиль данности (Стилизация карточки как на макете)
        card.className = "bg-white p-6 rounded-3xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-gray-100";
        
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="w-32 h-32 object-contain mb-4">
            <h3 class="font-bold text-gray-800 mb-2">${product.name}</h3>
            <div class="flex items-center gap-1 text-yellow-500 font-bold mb-4">
                <span>🟡</span> ${product.price} Coins
            </div>
            <p class="text-gray-400 text-sm">
                ${typeof product.count === 'number' ? product.count + ' dona mavjud' : product.count}
            </p>
        `;
        
        grid.appendChild(card);
    });
}

// 4. Поисковая система (Что поисковая система работает)
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(value));
    displayProducts(filtered);
});

// Первоначальный запуск
displayProducts(products);