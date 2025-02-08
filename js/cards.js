class CardManager {
  static addCard(cardData) {
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push(cardData);
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.href = 'index.html';
  }

  static loadCards() {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    const cardContainer = document.getElementById('cardContainer');
    
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <h2>${card.name}</h2>
        <p><strong>类别:</strong> ${card.category}</p>
        <p><strong>等级:</strong> ${card.level}</p>
        <p><strong>详细信息:</strong> ${card.details}</p>
        <p><strong>相关链接:</strong> <a href="${card.link}" target="_blank">${card.link}</a></p>
      `;
      cardContainer.appendChild(cardElement);
    });
  }
}

// 如果在添加卡片页面，添加表单提交处理
if (document.getElementById('cardForm')) {
  document.getElementById('cardForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cardData = {
      name: document.getElementById('name').value,
      category: document.getElementById('category').value,
      details: document.getElementById('details').value,
      link: document.getElementById('link').value
    };
    CardManager.addCard(cardData);
  });
} 