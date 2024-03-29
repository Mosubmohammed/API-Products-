var name1 = document.getElementById("name");
var price = document.getElementById("price");
var description = document.getElementById("des");
var image = document.getElementById("image");
var id = localStorage.getItem("id");

function getDataById(id) {
  fetch("http://127.0.0.1:8000/products/" + id, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error1");
      }
      return response.json();
    })
    .then((data) => {
      name1.value = data.name;
      price.value = data.price;
      description.value = data.description;

      // Assuming data.image contains a URL or base64 representation of the image
      // Display the image associated with the file
      if (data.image) {
        // Assuming imagePreview is an img element where you want to display the image
        imagePreview.src = data.image;
      }
    })
    .catch((error) => {
      console.log("Error2");
    });
}

getDataById(id);

var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var prod = new FormData();
  prod.append("name", name1.value);
  prod.append("price", price.value);
  prod.append("description", description.value);
  prod.append("images", image.files[0]);

  fetch("http://127.0.0.1:8000/products/" + id, {
    method: "PUT",
    body: prod,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Server returned " + response.status + " " + response.statusText
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      // Handle success here
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
});
