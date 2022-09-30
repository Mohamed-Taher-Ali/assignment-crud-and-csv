const { checkCSVFileNameCorrectAndExist } = require('./checkCSVFileNameCorrectAndExist');
const { BusinessCalcsContext } = require('./businessCalcs/BusinessCalcsContext');
const { TaskStrategy } = require('./businessCalcs/TaskStrategy');
const { readFileLineByLine } = require('./readFileLineByLine');
const { inputsDirPath, outputsDirPath } = require('./paths');
const { writeCSVFile } = require('./writeCSVFile');
const { join } = require('path');


module.exports.main = () => {
    const processArgs = process.argv;
    const csvInputFileName = processArgs[processArgs.length - 1];
    const csvInputFileFullPath = join(inputsDirPath, csvInputFileName);
    
    const taskStrategy = new TaskStrategy();
    const businessCalcsContext = new BusinessCalcsContext(taskStrategy);

    const onReadRow = (rowData) => {
        businessCalcsContext.readRow(rowData);
    };

    const onEnd = () => {
        const limits = { min: 1, max: Math.pow(10, 4) };
        const ordersCount = businessCalcsContext.getOrdersCount();

        if(ordersCount < limits.min || ordersCount > limits.max)
            throw new Error(`Orders count must between [${limits.min},${limits.max}]`);

        const productsAverageRes = businessCalcsContext.calcAverage();
        const mostPopularRes = businessCalcsContext.calcMostPopular();

        writeCSVFile((join(outputsDirPath, `1_${csvInputFileName}`)), productsAverageRes, () => {
            writeCSVFile((join(outputsDirPath, `0_${csvInputFileName}`)), mostPopularRes, () => {
                console.log("Program finished successfully You can goto outputs directory .. Thanks");
                process.exit(1);
            });
        });
    };

    checkCSVFileNameCorrectAndExist(csvInputFileFullPath);
    readFileLineByLine(csvInputFileFullPath, onReadRow, onEnd);
}