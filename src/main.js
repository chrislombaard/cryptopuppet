console.log("Hello from app.js!");

require("./styles.scss");

require("jquery-serializejson");
var $ = require("jquery");

// Load Highcharts
var Highcharts = require('highcharts');

// Alternatively, this is how to load Highstock or Highmaps
var Highcharts = require('highcharts/highstock');
// var Highcharts = require('highcharts/highmaps');

// This is how a module is loaded. Pass in Highcharts as a parameter.
require('highcharts/modules/exporting')(Highcharts);

/**
 * Javascript for View WorkFlows Page
 */

var ajaxForm = document.getElementById("ajax-form");

if (ajaxForm) {
    ajaxForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log("I just clicked!");
        processRequest();
    });
}

function processRequest() {

    let myHeaders = new Headers();
    myHeaders.append('X-CSRFToken', readCookie('csrftoken'));

    fetch(ajaxForm.getAttribute('action'), {
        method: 'post',
        headers: myHeaders,
        credentials: 'same-origin',
        body: new FormData(ajaxForm)
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success!');
            processChart(data)
        })
        .catch(function (err) {
        });
}

function processChart(data) {
    console.log('Graph successfully entered!');
    data = JSON.parse(data);

    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        chart: {
            height: 600
        },
        title: {
            text: 'Closing Price'
        },
        plotOptions: {
            series: {
                turboThreshold: 0
            }
        },
        series: [
            {
                name: "Close",
                data: data["close"],
                tooltip: {
                    valueDecimals: 9
                },
                color: '#000000',
            },
            {
                name: "SMA",
                data: data["sma"],
                tooltip: {
                    valueDecimals: 9
                },
                color: '#FF0000',
            },
            {
                name: "EMA",
                data: data["ema"],
                tooltip: {
                    valueDecimals: 9
                },
                color: '#00FF00',
            },
            {
                name: 'buys',
                data: data["buys"],
                lineWidth: 0,
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: '#00ff00',
                    symbol: 'circle',
                    lineColor: '#FFFFFF'
                },
                tooltip: {
                    valueDecimals: 9
                },
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            },
            {
                name: 'sells',
                data: data["sells"],
                lineWidth: 0,
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: '#ff0000',
                    symbol: 'circle',
                    lineColor: '#FFFFFF'
                },
                tooltip: {
                    valueDecimals: 9
                },
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            }
        ]
    });
}

function readCookie(name, c, C, i) {
    let cookies;

    if (cookies) {
        return cookies[name];
    }

    c = document.cookie.split('; ');
    cookies = {};

    for (let i = c.length - 1; i >= 0; i--) {
        C = c[i].split('=');
        cookies[C[0]] = C[1];
    }

    return cookies[name];
}
