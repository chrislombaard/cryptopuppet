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
// $(document).ready(function () {
//
//     //########################################################################
//     // Upload Image Code
//     //########################################################################
//
//     // Submit post on submit
//     $('#ajax-form').on('submit', function (event) {
//         event.preventDefault();
//         console.log("form submitted!");  // sanity check
//         create_post();
//     });
//
//     // AJAX for posting
//     function create_post() {
//         console.log("create post is working!") // sanity check
//         var form_data = $('#ajax-form').serializeJSON()
//         console.log(form_data);
//         $.ajax({
//             url: $('#ajax-form').attr('action'), // the endpoint
//             type: $('#ajax-form').attr('method'), // http method
//             data: form_data,
//
//             // handle a successful response
//             success: function (json) {
//
//                 var oneval = $(json).filter('#container').text();
//
//                 // var result = $(json).find('#container');
//                 // var data = $.parseHTML(json)
//
//                 // $("#container").html(json.);
//                 // var html = $(document).find('#container').innerHTML;
//                 console.log(oneval); // log the returned json to the console
//                 console.log("success"); // another sanity check
//             },
//
//             // handle a non-successful response
//             error: function(json) {
//                 $("#container").html("Something went wrong!");
//             }
//         });
//     }
//
//      // This function gets cookie with a given name
//     function getCookie(name) {
//         var cookieValue = null;
//         if (document.cookie && document.cookie != '') {
//             var cookies = document.cookie.split(';');
//             for (var i = 0; i < cookies.length; i++) {
//                 var cookie = $.trim(cookies[i]);
//                 // Does this cookie string begin with the name we want?
//                 if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
//         return cookieValue;
//     }
//     var csrftoken = getCookie('csrftoken');
//
//     /*
//     The functions below will create a header with csrftoken
//     */
//
//     function csrfSafeMethod(method) {
//         // these HTTP methods do not require CSRF protection
//         return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
//     }
//     function sameOrigin(url) {
//         // test that a given url is a same-origin URL
//         // url could be relative or scheme relative or absolute
//         var host = document.location.host; // host + port
//         var protocol = document.location.protocol;
//         var sr_origin = '//' + host;
//         var origin = protocol + sr_origin;
//         // Allow absolute or scheme relative URLs to same origin
//         return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
//             (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
//             // or any other URL that isn't scheme relative or absolute i.e relative.
//             !(/^(\/\/|http:|https:).*/.test(url));
//     }
//
//     $.ajaxSetup({
//         beforeSend: function(xhr, settings) {
//             if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
//                 // Send the token to same-origin, relative URLs only.
//                 // Send the token only if the method warrants CSRF protection
//                 // Using the CSRFToken value acquired earlier
//                 xhr.setRequestHeader("X-CSRFToken", csrftoken);
//             }
//         }
//     });
//
// });

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
                }
            },
            {
                name: "SMA",
                data: data["sma"],
                tooltip: {
                    valueDecimals: 9
                }
            },
            {
                name: "SMA",
                data: data["ema"],
                tooltip: {
                    valueDecimals: 9
                }
            },
            {
                name: 'buys',
                data: data["buys"],
                lineWidth: null,
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
                lineWidth: null,
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
