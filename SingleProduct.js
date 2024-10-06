function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(param => {
        const [key, value] = param.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}


function loadSingleProduct() {
    const queryParams = getQueryParams(); 
    const productId = queryParams.productId; 

    
    let selectedProduct;
    Object.values(productData).forEach(category => {
        const product = category.products.find(p => p.id === productId);
        if (product) {
            selectedProduct = product;
        }
    });

  
    if (selectedProduct) {
        document.getElementById("mainimg").src = selectedProduct.image;
        document.querySelector('.single-pro-details h2').textContent = `Rs ${selectedProduct.price}`;
        document.querySelector('.single-pro-details h4').textContent = selectedProduct.detailedName;
        document.querySelector('.single-pro-details span').textContent = selectedProduct.description || ''; 
    } else {
        
        document.querySelector('.single-pro-details h4').textContent = 'Product not found!';
    }
}


window.onload = loadSingleProduct;
