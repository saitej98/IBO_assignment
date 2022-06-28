const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];
function getUniqueProductCount(listOfProducts) {
  let obj = {};
  let L = listOfProducts.length;

  for (let i = 0; i < L; i++) {
    if (obj[listOfProducts[i].productName] == undefined) {
      obj[listOfProducts[i].productName] = 1;
    } else {
      obj[listOfProducts[i].productName] += 1;
    }
  }

  console.log(obj);
}

getUniqueProductCount(listOfProducts);
