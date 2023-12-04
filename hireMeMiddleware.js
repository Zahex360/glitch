const bodyParser = require('body-parser');
const path = require('path');


const processHireForm = (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../thank_you.html'));
  res.send("Thank you! We have processed you form submission!")
};

module.exports = processHireForm;
