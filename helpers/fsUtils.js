const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);
 
const writeToFile = (content) =>
    writeFileAsync('./db/db.json', JSON.stringify(content, null, 4));

  const readAndAppend = (content) => {
    readFromFile('./db/db.json', 'utf8')
    .then (data => {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(parsedData);
    });
  };

module.exports = { readFromFile, readAndAppend };