class TaskStrategy {
  ordersCount = 0;
  #mostPopularObj = {};
  #productsTotalQuantityObj = {};

  constructor() { }
  
  
  readRow = (strRow) => {
    const rowDataArr = this.#extractDataFromRow(strRow);
    if (rowDataArr.length !== 5) return;

    const [
      orderId, area, productName, productQuantity, brand
    ] = rowDataArr;

    const productBrand = this.#joinProductBrand(productName, brand);
    this.#assignProductBrandToMostPopularObj(productBrand);

    this.#assignDataToProductTotalQuantityObj(productName, productQuantity);

    this.#ordersCount += 1;
  }


  calcAverage = () => {
    const productQuantityAverage = {};
    for (const [product, totalQuantity] of this.#productsTotalQuantityObj) {
      productQuantityAverage[product] = totalQuantity / this.ordersCount;
    }

    return productQuantityAverage;
  }


  calcMostPopular = () => {
    const mapProductBrandsCount = {};
    const ret = [];

    for (const [productBrand, ordersCount] of this.#mostPopularObj) {
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

    for (const [product, brandsOrdersCountObj] of mapProductBrandsCount) {
      let mostPopularBrandName = Object.keys(brandsOrdersCountObj)[0];
      let mostPopularBrandCount = brandsOrdersCountObj[mostPopularBrandName];

      for (const [brand, ordersCount] of brandsOrdersCountObj) {
        if(mostPopularBrandCount >= ordersCount) return;

        mostPopularBrandName = brand;
        mostPopularBrandCount = ordersCount;
      }

      const retObj = {product, brand: mostPopularBrandName};
      ret.push(retObj);
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
    return strRow.toLowerCase().split(',');
  }
}

module.exports = { TaskStrategy };