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

function getUniquePrducts(product) {
  let obj = {};
  let L = product.length;

  for (let i = 0; i < L; i++) {
    if (obj[product[i].productName] === undefined) {
      obj[product[i].productName] = product[i];
    } else {
      obj[product[i].productName].quantity += product[i].quantity;
    }
  }
  let UniqueObj = Object.values(obj);
  console.log(UniqueObj);
}

getUniquePrducts(listOfProducts);
