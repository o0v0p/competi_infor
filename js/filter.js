class CategoryFilter {
  static init() {
    const categoryItems = document.querySelectorAll('.category-item');
    const cards = document.querySelectorAll('.competition-card');
    
    categoryItems.forEach(item => {
      item.addEventListener('click', () => this.filterCards(item, categoryItems, cards));
    });
  }

  static filterCards(selectedItem, categoryItems, cards) {
    const selectedCategory = selectedItem.getAttribute('data-category');
    
    categoryItems.forEach(cat => cat.classList.remove('active'));
    selectedItem.classList.add('active');
    
    cards.forEach(card => {
      const cardParent = card.parentElement;
      if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
        cardParent.style.display = '';
      } else {
        cardParent.style.display = 'none';
      }
    });
  }
} 