console.log("Hello from app.js!");

require("./styles.scss");

var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
