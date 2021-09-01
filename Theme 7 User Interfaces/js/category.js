//create navigation
const letters = "abcdefghijklmnopqrstuvwxyz";
const letterArray = letters.split("");

letterArray.forEach(handleLetter);

function handleLetter(letter) {
  createNavLink(letter);

  //create section
  createBrandSection(letter);
}

function createNavLink(letter) {
  //create nav link
  const temp = document.querySelector("#linkTemplate").content;

  const copy = temp.cloneNode(true);

  copy.querySelector("a").textContent = letter;
  copy.querySelector("a").href = `#letter_${letter}`;

  document.querySelector(".letterLinks ol").appendChild(copy);
}

function createBrandSection(letter) {
  const template = document.querySelector("#sectionTemplate").content;

  const clone = template.cloneNode(true);

  clone.querySelector("h2").textContent = letter;
  clone.querySelector("section").id = `letter_${letter}`;

  document.querySelector(".brandList").appendChild(clone);
}

//fetch data
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  data.forEach(showBrand);
}

function showBrand(brand) {
  //grab the template
  const template = document.querySelector("#linkTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${brand.brandname}`;

  //grab parent
  const firstLetter = brand.brandname[0].toLowerCase();
  const topParent = document.querySelector(`#letter_${firstLetter}`);
  const elemParent = topParent.querySelector("ol");

  //append
  elemParent.appendChild(copy);
}
