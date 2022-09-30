const { checkCSVFileNameCorrectAndExist } = require('./checkCSVFileNameCorrectAndExist');
const { readFileLineByLine } = require('./readFileLineByLine');
const { BusinessCalcsContext } = require('./businessCalcs/Context');
const { TaskStrategy } = require('./businessCalcs/taskStrategy');
const { inputsDirPath } = require('./paths');
const path = require('path');


module.exports.main = () => {
    const processArgs = process.argv;
    const csvInputFileName = processArgs[processArgs.length - 1];
    const csvInputFileFullPath = path.join(inputsDirPath, csvInputFileName);
    
    const taskStrategy = new TaskStrategy();
    const businessCalcsContext = new BusinessCalcsContext(taskStrategy);

    const onReadRow = (rowData) => {
        businessCalcsContext.readRow(rowData);
    };

    const onEnd = () => {
        const ordersCount = businessCalcsContext.getOrdersCount();
        if(ordersCount < 1 || ordersCount > Math.pow(10, 4))
            throw new Error('Orders count must between (1,${Math.pow(10, 4)})');

        
    };

    checkCSVFileNameCorrectAndExist(csvInputFileFullPath);
    readFileLineByLine(csvInputFileFullPath, onReadRow, onEnd);


    
}