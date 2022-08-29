// console.log("process.env:", process.env);
// console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'ci') {
  module.exports = require('./ci');
} else {
  module.exports = require('./dev');
}
