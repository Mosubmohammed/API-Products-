var productsData = [];
document.body.style.backgroundColor = "lightgray";

const url = "http://127.0.0.1:8000/productsss/";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then((Data) => {
    productsData = Data;
    renderProduct(productsData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function renderProduct(productsData) {
  var container = document.getElementById("productList");
  var row;

  for (var i = 0; i < productsData.length; i++) {
    if (i % 3 === 0) {
      // Start a new row for every third item
      row = document.createElement("div");
      row.className = "row";
      container.appendChild(row);
    }

    var col = document.createElement("div");
    col.className = "col";
    var card = document.createElement("div");
    card.className = "card";
    card.style.width = "300px";
    card.style.margin = "90px";

    var image = document.createElement("img");
    image.className = "card-img-top";
    image.style.width = "300px";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.style.textAlign = "center";

    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.style.textAlign = "center";

    var price = document.createElement("p");
    price.className = "card-price";
    price.style.textAlign = "center";
    price.innerHTML = "Price: $" + productsData[i].price; // Set the price directly

    var btnContainer = document.createElement("div");
    btnContainer.className = "d-flex justify-content-center"; // Flexbox utility class to center the buttons

    var update = document.createElement("button");
    update.className = "btn btn-success";
    update.setAttribute("onclick", `UpdateProduct(productsData[${i}].id)`);
    update.innerHTML = "Update";

    var delet = document.createElement("button");
    delet.className = "btn btn-danger";
    delet.setAttribute("onclick", `DeleteProduct(productsData[${i}].id)`);
    delet.innerHTML = "Delete";

    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(price); // Append price to card body
    cardBody.appendChild(btnContainer); // Append button container to card body
    btnContainer.appendChild(update); // Append update button to button container
    btnContainer.appendChild(delet); // Append delete button to button container
    image.src = productsData[i].images;
    cardTitle.innerHTML = productsData[i].name;
    cardText.innerHTML = productsData[i].description;

    col.appendChild(card);
    row.appendChild(col);
  }
}

function DeleteProduct(id) {
  if (window.confirm("Are you sure you want to delete this product")) {
    fetch("http://127.0.0.1:8000/products/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        window.location.reload();
        return "Item deleted successfully";
      })
      .catch((error) => {
        console.log("Error");
      });
  } else {
    console.log("Error");
  }
}

function UpdateProduct(id) {
  localStorage.setItem("id", id);

  window.location.href = "updateProducts.html";
}
