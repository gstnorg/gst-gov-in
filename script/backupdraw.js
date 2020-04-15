//start for india map
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
  ["madhya pradesh", 0],
  ["uttar pradesh", 1],
  ["karnataka", 2],
  ["nagaland", 3],
  ["bihar", 4],
  ["lakshadweep", 5],
  ["andaman and nicobar", 6],
  ["assam", 7],
  ["west bengal", 8],
  ["puducherry", 9],
  ["daman and diu", 10],
  ["gujarat", 11],
  ["rajasthan", 12],
  ["dadara and nagar havelli", 13],
  ["chhattisgarh", 14],
  ["tamil nadu", 15],
  ["chandigarh", 16],
  ["punjab", 17],
  ["haryana", 18],
  ["andhra pradesh", 19],
  ["maharashtra", 20],
  ["himachal pradesh", 21],
  ["meghalaya", 22],
  ["kerala", 23],
  ["telangana", 24],
  ["mizoram", 25],
  ["tripura", 26],
  ["manipur", 27],
  ["arunanchal pradesh", 28],
  ["jharkhand", 29],
  ["goa", 30],
  ["nct of delhi", 31],
  ["odisha", 32],
  ["jammu and kashmir", 33],
  ["sikkim", 34],
  ["uttarakhand", 35]
];

// Create the chart
Highcharts.mapChart("chart-india", {
  chart: {
    map: "countries/in/custom/in-all-disputed"
  },
  credits: {
    enabled: false
  },
  exporting: { enabled: false },
  title: {
    text: "GST Statistics (All States)"
  },

  subtitle: {
    text: "Click on the state for which you want to see the stats"
  },

  mapNavigation: {
    enabled: false,
    buttonOptions: {
      verticalAlign: "bottom"
    }
  },

  colorAxis: {
    min: 0,
    stops: [
      [0, "#3f7cac"],
      [0.67, "#274c77"],
      [1, "#86bbd8"]
    ]
  },
  plotOptions: {
    series: {
      point: {
        events: {
          click: function() {
            //alert(this.name);
            //console.log(this.value);
          }
        }
      }
    }
  },
  series: [
    {
      data: data,
      name: "GST Statistics",
      states: {
        hover: {
          color: "#3da5d9"
        }
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}"
      }
    }
  ]
});
//end for ind map

//chart One start
Highcharts.chart("chartContainer1", {
  title: {
    text: "GST Registration"
  },
  credits: {
    enabled: false
  },
  exporting: { enabled: false },
  yAxis: {
    title: {
      text: "Lacs"
    }
  },

  subtitle: {
    text: ""
  },

  xAxis: {
    categories: ["FY20 Q1", "FY20 Q2", "FY20 Q3", "FY20 Q4"]
  },

  series: [
    {
      type: "column",
      colorByPoint: false,
      data: [29.9, 71.5, 106.4, 129.2],
      showInLegend: false
    }
  ]
});
//chart one end

//chart two start
Highcharts.chart("chartContainer2", {
  chart: {
    type: "column"
  },
  credits: {
    enabled: false
  },
  exporting: { enabled: false },
  title: {
    text: "Payment Status"
  },

  xAxis: {
    categories: ["FY20 Q1", "FY20 Q2", "FY20 Q3", "FY20 Q4"]
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Lacs"
    }
  },

  tooltip: {
    formatter: function() {
      return (
        "<b>" +
        this.x +
        "</b><br/>" +
        this.series.name +
        ": " +
        this.y +
        "<br/>" +
        "Total: " +
        this.point.stackTotal
      );
    }
  },

  plotOptions: {
    column: {
      stacking: "normal"
    }
  },

  series: [
    {
      name: "Failed",
      data: [5, 3, 4, 7],
      stack: "male"
    },
    {
      name: "Success",
      data: [3, 4, 4, 2],
      stack: "male"
    }
  ]
});
// Highcharts.chart("chartContainer2", {
//   chart: {
//     type: "line"
//   },
//   credits: {
//     enabled: false
//   },
//   exporting: { enabled: false },
//   title: {
//     text: "Payment Status"
//   },
//   subtitle: {
//     text: ""
//   },
//   xAxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec"
//     ],
//     crosshair: true
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: "Amount in Crores"
//     }
//   },
//   tooltip: {
//     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//     pointFormat:
//       '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//     footerFormat: "</table>",
//     shared: true,
//     useHTML: true
//   },
//   plotOptions: {
//     column: {
//       pointPadding: 0.2,
//       borderWidth: 0
//     }
//   },
//   series: [
//     {
//       name: "Delhi",
//       data: [
//         49.9,
//         71.5,
//         106.4,
//         129.2,
//         144.0,
//         176.0,
//         135.6,
//         148.5,
//         216.4,
//         194.1,
//         95.6,
//         54.4
//       ]
//     }
//   ]
// });
//chart two end
//chart three start
var chart = Highcharts.chart("chartContainer3", {
  title: {
    text: "Return Filing Trend"
  },
  credits: {
    enabled: false
  },
  exporting: { enabled: false },

  subtitle: {
    text: ""
  },
  yAxis: {
    title: {
      text: "Transactions In Lacs"
    }
  },
  xAxis: {
    categories: ["FY20 Q1", "FY20 Q2", "FY20 Q3", "FY20 Q4"]
  },

  series: [
    {
      type: "spline",
      name: "Average",
      data: [29.9, 71.5, 106.4, 309.2],
      marker: {
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[3],
        fillColor: "white"
      }
    }
  ]
});
// Highcharts.chart("chartContainer3", {
//   title: {
//     text: "Return Filing Trend"
//   },
//   credits: {
//     enabled: false
//   },
//   exporting: { enabled: false },
//   xAxis: {
//     categories: ["FY20 Q1", "FY20 Q2", "FY20 Q3", "FY20 Q4"]
//   },
//   yAxis: {
//     title: {
//       text: "No. Of Transactions"
//     }
//   },
//   series: [
//     {
//       type: "column",
//       name: "FY",
//       data: [4, 3, 3, 9]
//     },
//     {
//       type: "spline",
//       name: "Average",
//       data: [3, 2.67, 3, 6.33],
//       marker: {
//         lineWidth: 2,
//         lineColor: Highcharts.getOptions().colors[3],
//         fillColor: "white"
//       }
//     }
//   ]
// });
// Highcharts.chart("chartContainer3", {
//   chart: {
//     type: "scatter",
//     zoomType: "xy"
//   },
//   credits: {
//     enabled: false
//   },
//   exporting: { enabled: false },
//   title: {
//     text: "Return Filing Trend"
//   },
//   subtitle: {
//     text: ""
//   },
//   xAxis: {
//     categories: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec"
//     ],
//     crosshair: true
//   },
//   yAxis: {
//     min: 0,
//     title: {
//       text: "Amount in Crores"
//     }
//   },
//   tooltip: {
//     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//     pointFormat:
//       '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//     footerFormat: "</table>",
//     shared: true,
//     useHTML: true
//   },
//   plotOptions: {
//     column: {
//       pointPadding: 0.2,
//       borderWidth: 0
//     }
//   },
//   series: [
//     {
//       name: "Delhi",
//       data: [
//         49.9,
//         71.5,
//         106.4,
//         129.2,
//         144.0,
//         176.0,
//         135.6,
//         148.5,
//         216.4,
//         194.1,
//         95.6,
//         54.4
//       ]
//     }
//   ]
// });
//chart three end
//chart four start

var chart = Highcharts.chart("chartContainer4", {
  title: {
    text: "Tax Collection"
  },
  credits: {
    enabled: false
  },
  exporting: { enabled: false },

  subtitle: {
    text: ""
  },
  yAxis: {
    title: {
      text: "Amount In Crores"
    }
  },
  xAxis: {
    categories: ["FY20 Q1", "FY20 Q2", "FY20 Q3", "FY20 Q4"]
  },

  series: [
    {
      type: "column",
      colorByPoint: true,
      data: [29.9, 71.5, 106.4, 129.2],
      showInLegend: false
    }
  ]
});
//chart four end
