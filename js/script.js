document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addProduct();
});

let products = [];
function addProduct() {
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const expiryDate = document.getElementById('expiryDate').value;
    const price = parseFloat(document.getElementById('price').value);

    const product = {
        productName,
        category,
        quantity,
        expiryDate,
        price
    };
    products.push(product);
    displayProducts();
    clearForm();
}
function displayProducts() {
    const productTableBody = document.getElementById('productTableBody');
    productTableBody.innerHTML = '';

    products.forEach((product, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${product.productName}</td>
            <td>${product.category}</td>
            <td>${product.quantity}</td>
            <td>${product.expiryDate}</td>
            <td>${product.price.toFixed(2)}</td>
            <td><button onclick="sellProduct(${index})">Vender</button></td>
        `;

        productTableBody.appendChild(row);
    });
}
