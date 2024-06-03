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