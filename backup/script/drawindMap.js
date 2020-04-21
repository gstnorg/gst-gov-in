//start for india map
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
//var vv="abc";
$(function() {

 function fun(){
   console.log("downloading")
    fetch("./server/newdata.json")
    .then(response =>response.json())
    .then((fr) => {
      sessionStorage.setItem('added' , JSON.stringify(fr));
      //console.log("111")
      })
    .catch(err=> console.log(err))
 }
//adddata();
fun();




 
   function adddata(stateId){
    setTimeout(() => {
     
    
    var x = sessionStorage.getItem("added");
    var da = JSON.parse(x)
    console.log("da2")
    console.log(da)

    stateId = stateId || 0;
   // var data =  fetch("./server/newdata.json")
   // var data2 = await data.json();
    //console.log(data2)
    var result = da.filter(function(element){
      if (element.stateId == stateId){
          return true;
      } else {
        return false;
      }
  });
  //console.log(result)
  //console.log(Object.values(result[0].paymentStatus[0]))
  //console.log(Object.values(result[0].paymentStatus[1]))
 
  let registrationVal = Object.values(result[0].registration[0]);
  let collectionVal = Object.values(result[0].registration[0]);
  let paymentStatusVal = Object.values(result[0].paymentStatus[0]);
  let paymentStatusVal2 = Object.values(result[0].paymentStatus[1]);
  let   paymentsTrendVal = Object.values(result[0].registration[0]);

  let chart1 = $("#chartContainer1").highcharts(),
      chart2 = $("#chartContainer2").highcharts(),
      chart3 = $("#chartContainer3").highcharts(),
      chart4 = $("#chartContainer4").highcharts();

  chart1.series[0].update(
    {
      data: registrationVal
    },
    false
  ); 
  chart2.series[0].update(
    {
      data: paymentStatusVal
    },
    false
  );
chart2.series[1].update(
  {
    data: paymentStatusVal2
  },
  false
);
chart3.series[0].update(
  {
    data: paymentsTrendVal
  },
  false
);

chart4.series[0].update(
  {
    data: collectionVal
  },
  false
);

  chart1.redraw();
  chart2.redraw();
  chart3.redraw();
  chart4.redraw();
}, 0);
  }
  
//   async function populate(stcode) {
//     console.log(stcode);
//     var data = await fetch("./server/newdata.json")
//     console.log("data1")
//     console.log(data)
//     var data2 = await data.json();
    
//     console.log(data2)
//     var data3 = data2.response;
//     console.log(data3)
//     document.getElementById("json").innerHTML = JSON.stringify(data2, undefined, 2);

//     var xx = data3.map(function(value){
//       return [value.Q1Results,value.Q2Results,value.Q3Results,value.Q4Results]
//     })

//     console.log(xx);
    
//     //this.chart1.series.data = xx;

   
    

    
 
    
   

  
 
//   //console.log(this.value);
// }





    // return new Promise(function(resolve,reject){
    //   setTimeout(function(){
    //     $.getJSON("http://localhost:3000/api/gstregistration/23", function(result){
    //       var arr = result.response;
      //  myPromise=  arr.map(function(value){
      //     chart1.series[0].data = [value.Q1Results,value.Q2Results,value.Q3Results,value.Q4Results];

      //   })
    //     resolve(arr)
    //   });
    //     }, 1000);
    // })

  

  var data = [
    ["madhya pradesh", 23],
    ["uttar pradesh", 9],
    ["karnataka", 29],
    ["nagaland", 13],
    ["bihar", 10],
    ["lakshadweep", 31],
    ["andaman and nicobar", 35],
    ["assam", 18],
    ["west bengal", 19],
    ["puducherry", 34],
    ["daman and diu", 25],
    ["gujarat", 24],
    ["rajasthan", 8],
    ["dadara and nagar havelli", 26],
    ["chhattisgarh", 22],
    ["tamil nadu", 33],
    ["chandigarh", 4],
    ["punjab", 3],
    ["haryana", 6],
    ["andhra pradesh", 37],
    ["maharashtra", 27],
    ["himachal pradesh", 2],
    ["meghalaya", 17],
    ["kerala", 32],
    ["telangana", 36],
    ["mizoram", 15],
    ["tripura", 16],
    ["manipur", 14],
    ["arunanchal pradesh", 12],
    ["jharkhand", 20],
    ["goa", 30],
    ["nct of delhi", 7],
    ["odisha", 21],
    ["jammu and kashmir", 1],
    ["sikkim", 11],
    ["uttarakhand", 5]
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
      enabled: true,
      buttonOptions: {
        verticalAlign: "top"
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
              console.log(this.name);
              console.log(this.value);
              adddata(this.value);
            }
             
          }
        }
      }
    },
    series: [
      {
        data: data,
        name: "Statistics for",
        states: {
          hover: {
            color: "#3da5d9"
          }
        },
        dataLabels: {
          enabled: true,
          // format: "{point.name}"
          format: ""
        }
      }
    ]
  });

  //end for ind map
  //chart One start

  // let chart1 = new Highcharts.Chart({
  //   chart: {
  //     renderTo: "chartContainer33",
  //     type: "spline",
  //     events: {
  //       load: populate
  //     }
  //   },
  //   title: {
  //     text: "GST Registration"
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   exporting: { enabled: false },
  //   yAxis: {
  //     title: {
  //       text: "Lacs"
  //     }
  //   },

  //   subtitle: {
  //     text: ""
  //   },

  //   xAxis: {
  //     categories: ["FY20 Q1", "FY20 Q2", "FY20 Q3", "FY20 Q4"]
  //   },

  //   series: [
  //     {
  //       type: "column",
  //       colorByPoint: false,
  //       data: [],
  //       showInLegend: false
  //     }
  //   ]
  // });

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
        data: [52, 32, 42, 72]
      },
      {
        name: "Success",
        data: [32, 24, 24, 22]
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
  console.log($);

  jQuery("#allstates").on("change", function(){
   // alert("sdf");
     adddata(this.value);

  })

});
