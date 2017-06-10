console.log("Hello from app.js!");

require("./styles.scss");
// var $ = require("jquery");

var Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);
var Highcharts = require('highcharts/highstock');

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
            let container = document.createElement('div');
            container.innerHTML = data;
            console.log(data)
            let newForm = container.children[0];
            let parent = document.getElementById("ajax-page")
            parent.replaceChild(newForm, ajaxForm);
        })
        .catch(function (err) {
        });

}

Highcharts.chart('container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]

});

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

export default readCookie;
