fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  data.forEach(showBrand);
}

function showBrand(brand) {
  //grab the template
  const template = document.querySelector("template").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("a").textContent = brand.brandname;

  //grab parent
  const topParent = document.querySelector("#letter_a");
  const elemParent = topParent.querySelector("ol");

  //append
  elemParent.appendChild(copy);
}
