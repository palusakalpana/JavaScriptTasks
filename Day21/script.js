async function fetchProducts() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayProducts(products) {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" width="100">
            <h2>${product.title}</h2>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Weight:</strong> ${product.weight}g</p>
            <h3>Reviews:</h3>
            <ul>
                ${product.reviews.map(review => `<li><strong>${review.reviewerName}:</strong> ${review.comment} (Rating: ${review.rating})</li>`).join('')}
            </ul>
            <hr>
        `;
        productList.appendChild(listItem);
    });
}

fetchProducts();