function sortProducts() {
   
    const productGrid = document.querySelector('.product-grid');
  
  
    const sortOrder = document.getElementById('sortPriceAndStar').value;
  

    const products = Array.from(document.querySelectorAll('.product-box'));
  
 
    products.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));
        const ratingA = parseInt(a.getAttribute('data-stars'));
        const ratingB = parseInt(b.getAttribute('data-stars'));
  
        if (sortOrder === 'asc') {
          return priceA - priceB;  
        } else if (sortOrder === 'desc') {
          return priceB - priceA; 
        } else if (sortOrder === 'star-asc') {
          return ratingA - ratingB;  
        } else if (sortOrder === 'star-desc') {
          return ratingB - ratingA; 
        }

    });
  
    
    products.forEach(product => productGrid.removeChild(product));
  
    
    products.forEach(product => productGrid.appendChild(product));
  }
  