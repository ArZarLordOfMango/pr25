function generateProducts() {
  const productList = document.getElementById('product-list');

  // Загрузка продуктов из внешнего JSON файла
  fetch('products.json')
      .then(response => response.json())
      .then(products => {
          products.forEach(product => {
              const productDiv = document.createElement('div');
              productDiv.className = 'product';
              productDiv.style.backgroundImage = `url('${product.image}')`;

              // Добавляем название и цену продукта
              const productInfo = document.createElement('div');
              productInfo.className = 'product-info';
              productInfo.innerHTML = `<p>${product.name}</p><p>${product.price}</p>`;

              productDiv.appendChild(productInfo);
              productList.appendChild(productDiv);
          });
      })
      .catch(error => console.error('Error loading products:', error));
}

// Функция прокрутки продуктов
function scrollProducts() {
  const productList = document.getElementById('product-list');
  productList.scrollBy(200, 0);
}

// Вызываем генерацию продуктов при загрузке страницы
window.onload = generateProducts;