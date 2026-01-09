let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function displayProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((p, index) => {
        list.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>${p.quantity}</td>
                <td>${p.price}</td>
                <td>
                    <button onclick="deleteProduct(${index})">Supprimer</button>
                </td>
            </tr>
        `;
    });
}

function addProduct() {
    const name = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    if (!name || !quantity || !price) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    products.push({ name, quantity, price });
    saveProducts();
    displayProducts();

    document.getElementById("name").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}

function deleteProduct(index) {
    products.splice(index, 1);
    saveProducts();
    displayProducts();
}

displayProducts();
