const { BusinessCalcsContext } = require("../services/businessCalcs/BusinessCalcsContext");
const { TaskStrategy } = require("../services/businessCalcs/TaskStrategy");


describe('test businessCalcs Class', () => {

  const data = [
    "ID944806,Willard Vista,Intelligent Copper Knife,3,Hilll-Gorczany",
    "ID644525,Roger Centers,Intelligent Copper Knife,1,Kunze-Bernhard",
    "ID348204,Roger Centers,Small Granite Shoes,4,Rowe and Legros",
    "ID710139,Roger Centers,Intelligent Copper Knife,4,Hilll-Gorczany",
    "ID426632,Willa Hollow,Intelligent Copper Knife,4,Hilll-Gorczany",
  ];

  const taskStrategy = new TaskStrategy();
  const businessCalcsContext = new BusinessCalcsContext(taskStrategy);

  test("if all data correct", () => {
    data.map(r => businessCalcsContext.readRow(r));

    const productsAverageRes = businessCalcsContext.calcAverage();
    const mostPopularRes = businessCalcsContext.calcMostPopular();
    console.log({
      productsAverageRes,
      mostPopularRes
    });
    const expRes = {
      productsAverageRes: [
        [ 'Intelligent Copper Knife', 2.4 ],
        [ 'Small Granite Shoes', 0.8 ]
      ],
      mostPopularRes: [
        [ 'Intelligent Copper Knife', 'Hilll-Gorczany' ],
        [ 'Small Granite Shoes', 'Rowe and Legros' ]
      ]
    };

    expect(JSON.stringify(productsAverageRes)).toBe(JSON.stringify(expRes.productsAverageRes));
    expect(JSON.stringify(mostPopularRes)).toBe(JSON.stringify(expRes.mostPopularRes));
  });
});