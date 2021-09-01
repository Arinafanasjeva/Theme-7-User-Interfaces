const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(
    "img.productimage"
  ).alt = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  // SoldOut
  if (product.soldout) {
    document.querySelector(".soldOut span").textContent = "ITEM IS SOLDOUT";
  }
  // Gender
  document.querySelector(".gender span").textContent = product.gender;
  //Discount and prices
  if (product.discount) {
    document.querySelector(".discount").classList.add("onSale");
    document.querySelector(".newPrice span").textContent =
      "Now DKK " +
      Math.round(product.price - (product.price * product.discount) / 100) +
      ",-";
    document.querySelector(".discount span").textContent =
      "-" + product.discount + "%";
    document.querySelector(".price").textContent =
      "Prev. DKK " + product.price + ",-";
  } else {
    document.querySelector(".price span").textContent = product.price;
    document.querySelector(".discount").textContent = "";
  }
  //Category
  document.querySelector(".category span").textContent = product.category;
  //Subcategory
  document.querySelector(".subcategory span").textContent = product.subcategory;
  //Production year
  document.querySelector(".productionyear span").textContent =
    product.productionyear;
}
