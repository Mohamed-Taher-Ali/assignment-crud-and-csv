class TaskStrategy {
  #productsTotalQuantityObj = {};
  #mostPopularObj = {};
  ordersCount = 0;

  constructor() { }


  readRow = (strRow) => {
    const rowDataArr = this.#extractDataFromRow(strRow);
    if (rowDataArr.length !== 5) return;

    let [
      orderId, area, productName, productQuantity, brand
    ] = rowDataArr;

    productQuantity = +productQuantity;

    const productBrand = this.#joinProductBrand(productName, brand);
    this.#assignProductBrandToMostPopularObj(productBrand);

    this.#assignDataToProductTotalQuantityObj(productName, productQuantity);

    this.ordersCount += 1;
  }


  calcAverage = () => {
    const productQuantityAverageArr = [];
    for (const [product, totalQuantity] of Object.entries(this.#productsTotalQuantityObj)) {
      productQuantityAverageArr.push([product, totalQuantity / this.ordersCount]);
    }

    return productQuantityAverageArr;
  }


  calcMostPopular = () => {
    const mapProductBrandsCount = {};
    const ret = [];

    for (const [productBrand, ordersCount] of Object.entries(this.#mostPopularObj)) {
      const [product, brand] = this.#splitProductBrand(productBrand);

      if (!mapProductBrandsCount[product]) {
        mapProductBrandsCount[product] = {
          [brand]: ordersCount
        };
      }
      else {
        mapProductBrandsCount[product][brand] = ordersCount;
      }
    }

    for (const [product, brandsOrdersCountObj] of Object.entries(mapProductBrandsCount)) {
      let mostPopularBrandName = Object.keys(brandsOrdersCountObj)[0];
      let mostPopularBrandCount = brandsOrdersCountObj[mostPopularBrandName];

      for (const [brand, ordersCount] of Object.entries(brandsOrdersCountObj)) {
        if (mostPopularBrandCount >= ordersCount) continue;

        mostPopularBrandName = brand;
        mostPopularBrandCount = ordersCount;
      }

      ret.push([product, mostPopularBrandName]);
    }
    
    return ret;
  }


  getOrdersCount = () => {
    return this.ordersCount;
  }


  #assignDataToProductTotalQuantityObj = (product, quantity) => {
    if (!this.#productsTotalQuantityObj[product]) {
      this.#productsTotalQuantityObj[product] = quantity;
    } else {
      this.#productsTotalQuantityObj[product] += quantity;
    }
  }


  #assignProductBrandToMostPopularObj = (productBrand) => {
    if (!this.#mostPopularObj[productBrand]) {
      this.#mostPopularObj[productBrand] = 1;
    } else {
      this.#mostPopularObj[productBrand] += 1;
    }
  }


  #joinProductBrand = (product, brand) => {
    return (`${product}|${brand}`);
  }


  #splitProductBrand = (productBrand) => {
    return productBrand.split('|');
  }


  #extractDataFromRow = (strRow) => {
    return strRow.split(',');
  }
}

module.exports = { TaskStrategy };