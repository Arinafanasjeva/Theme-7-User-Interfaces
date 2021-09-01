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
  copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent =
      "Now DKK " +
      Math.round(product.price - (product.price * product.discount) / 100) +
      ",-";
    copy.querySelector(".procents").textContent = "-" + product.discount + "%";
    copy.querySelector(".price").textContent =
      "Prev. DKK " + product.price + ",-";
  } else {
    copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  }

  copy.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("img.productImage").alt = product.productdisplayname;

  //grab parent
  const parent = document.querySelector("main");

  //append
  parent.appendChild(copy);
}
