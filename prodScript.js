const productData = require("./utils/productData");
const fs = require('fs')

const newProductData = productData.map((product, index) => ({'id': index +1, ...product}))

fs.writeFileSync("./productData.json", JSON.stringify(newProductData, null, 4));
      console.log("File is created!");