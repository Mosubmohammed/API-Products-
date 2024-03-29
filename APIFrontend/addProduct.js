var ProdName = document.getElementById("name");
var price = document.getElementById("price");
var description = document.getElementById("des");
var image = document.getElementById("image");

var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var prod = new FormData();
  prod.append("name", ProdName.value);
  prod.append("price", price.value);
  prod.append("description", description.value);
  prod.append("images", image.files[0]);

  console.log(prod);

  var json = JSON.stringify(prod);
  console.log(json);

  fetch("http://127.0.0.1:8000/productsss/", {
    method: "POST",
    body: prod,
  }).catch((error) => {
    console.error(error);
  });
});
