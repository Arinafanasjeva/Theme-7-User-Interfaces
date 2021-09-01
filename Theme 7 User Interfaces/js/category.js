const url = "https://kea-alt-del.dk/t7/api/products/";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //grab the template
  const template = document.querySelector("#smallProductTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content

  //grab parent
  const parent = document.querySelector("main");

  //append
  parent.appendChild(copy);
}
