document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('product-list');
  
  const products = [
      { 
          name: 'Щелепи життя синдикату', 
          price: 2, 
          description: 'Комбінація лома і кусачок. Купуйте, якщо не вистачає на ЕМАГ. Розкриває будь-які двері (навіть броньовані) за 5 секунд, не потрібен електрозахист рук для розкриття.', 
          image: 'images/product1.png'
      },
      { 
          name: 'Ключ шифрування Синдикату', 
          price: 2, 
          description: '2 ключі шифрування Синдикату, для доступу до спеціальної частоти, що працює на будь-якій відстані та незалежно від наявності електроенергії, не потребує сервера. Сам канал Синдикату не має вбудованого шифрування вашого голосу, рекомендується користуватися для цього голосовою маскою. Поставляються в коробці.', 
          image: 'images/product2.png'
      },
      { 
          name: 'Імплант сховища', 
          price: 8, 
          description: 'Цей імплант додає вам приховану підшкірну кишеню, даючи змогу ховати всередині предмети вагою до 20 одиниць.', 
          image: 'images/product3.gif'
      },
      { 
        name: 'Костюм джаггернаута Кіберсан', 
        price: 12, 
        description: 'Повністю броньований скафандр, що має хороший захист! Знижує швидкість бігу на 35%.', 
        image: 'images/product4.png'
    },
  ];

  products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';
      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Ціна: ${product.price} ТК</p>
          <p>${product.description}</p>
      `;
      productList.appendChild(productElement);
  });
});
