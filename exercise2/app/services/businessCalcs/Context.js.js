class BusinessCalcsContext {
  strategyInstance = null;

  constructor(strategy) {
    this.strategyInstance = strategy;
  }

  readRow = (...params) => {
    return this.strategyInstance.readRow(...params);
  }

  getOrdersCount = (...params) => {
    return this.strategyInstance.getOrdersCount(...params);
  }

  calcAverage = (...params) => {
    return this.strategyInstance.calcAverage(...params);
  }

  calcMostPopular = (...params) => {
    return this.strategyInstance.calcMostPopular(...params);
  }
}

module.exports = { BusinessCalcsContext };