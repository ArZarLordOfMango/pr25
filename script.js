function generateProducts() {
  const productList = document.getElementById('product-list');

  // Загрузка продуктов из внешнего JSON файла
  fetch('products.json')
      .then(response => response.json())
      .then(products => {
          products.forEach(product => {
              const productLink = document.createElement('a');
              productLink.className = 'product';
              productLink.href = '#'; // Замените '#' на реальную ссылку

              const productImage = document.createElement('img');
              productImage.src = product.image;
              productImage.alt = product.name;

              const productInfo = document.createElement('div');
              productInfo.className = 'product-info';
              productInfo.innerHTML = `<p>${product.name}</p><p>${product.price}</p>`;

              productLink.appendChild(productImage);
              productLink.appendChild(productInfo);
              productList.appendChild(productLink);
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