const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const file = process.argv[3];
const path = file.substr(0, file.lastIndexOf('/'));

request(URL, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    return console.log(`Error, could not write to file`);
  }
  if (fs.existsSync(path)) {
    fs.writeFile(file, body, () => {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${file}`);
    });
  } else {
    console.log(`${path} not found`);
  };
});