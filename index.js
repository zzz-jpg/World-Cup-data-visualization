// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["France","Uruguay","Germany","England","Spain","Argentina","Italy","Brazil"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '夺冠次数',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [
        { value:2.0,
          itemStyle: {
          color: '#FFFF00'}
        },
        {
         value:2.0, 
         itemStyle: {
        color: '#FFFF00'}
        },
       {
        value:4.0, 
         itemStyle: {
        color: '#F57474'}
       },
       {
        value:1.0, 
         itemStyle: {
        color: '#56D0E3'}
       },
       {
        value:1.0, 
         itemStyle: {
        color: '#56D0E3'}
       },
       {
        value:3.0, 
         itemStyle: {
        color: '#8B78F6'}
       },
       {
        value:4.0, 
         itemStyle: {
        color: '#F57474'}
       },
       {
        value:5.0, 
         itemStyle: {
        color: '#0000CC'}
       },],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
//11112351516516516516511211111111111
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['Argentina', 'Brazil', 'Croatia', 'Czechoslovakia', 'England',
      'France','Germany','Hungary', 'Italy','Netherlands','Spain','Sweden','Uruguay'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '夺冠次数',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [
        { value:6,
          itemStyle: {
          color: '#FFFF00'}
        },
        {
         value:7, 
         itemStyle: {
        color: '#1089E7'}
        },
       {
        value:1, 
         itemStyle: {
        color: '#F57474'}
       },
       {
        value:2, 
         itemStyle: {
        color: '#56D0E3'}
       },
       {
        value:1, 
         itemStyle: {
        color: '#F57474'}
       },
       {
        value:4, 
         itemStyle: {
        color: '#8B78F6'}
       },
       {
        value:8, 
         itemStyle: {
        color: '#FF0000'}
       },
       {
        value:2, 
         itemStyle: {
        color: '#56D0E3'}
       },
       {
        value:6, 
         itemStyle: {
        color: '#FFFF00'}
       },
       {
        value:3, 
         itemStyle: {
        color: '#CCCCFF'}
       },
       {
        value:1, 
         itemStyle: {
        color: '#F57474'}
       },

       {
        value:1, 
         itemStyle: {
        color: '#F57474'}
       },
       {
        value:2, 
         itemStyle: {
        color: '#56D0E3'}
       },],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
//1231232333333333333333333333333333333333333
// // 柱状图模块2
// (function () {
//   // 1.实例化对象
//   var myChart = echarts.init(document.querySelector(".bar3 .chart"));

//   // 声明颜色数组
//   var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
//   // 2.指定配置项和数据
//   var option = {
//     grid: {
//       top: "10%",
//       left: '22%',
//       bottom: '10%',
//       // containLabel: true
//     },
//     xAxis: {
//       // 不显示x轴相关信息
//       show: false
//     },
//     yAxis: [{
//       type: 'category',
//       // y轴数据反转，与数组的顺序一致
//       inverse: true,
//       // 不显示y轴线和刻度
//       axisLine: {
//         show: false
//       },
//       axisTick: {
//         show: false
//       },
//       // 将刻度标签文字设置为白色
//       axisLabel: {
//         color: "#fff"
//       },
//       data: ['Argentina', 'Brazil', 'Croatia', 'Czechoslovakia', 'England',
//        'France','Germany','Hungary', 'Italy','Netherlands','Spain','Sweden','Uruguay']
//     }, {
//       // y轴数据反转，与数组的顺序一致
//       inverse: true,
//       show: true,
//       // 不显示y轴线和刻度
//       axisLine: {
//         show: false
//       },
//       axisTick: {
//         show: false
//       },
//       // 将刻度标签文字设置为白色
//       axisLabel: {
//         color: "#fff"
//       },
//       data: [6,7,1,2,1,4,8,2,6,3,1,1,2]
//     }],
//     series: [{
//         // 第一组柱子（条状）
//         name: '条',
//         type: 'bar',
//         // 柱子之间的距离
//         barCategoryGap: 50,
//         // 柱子的宽度
//         barWidth: 10,
//         // 层级 相当于z-index
//         yAxisIndex: 0,
//         // 柱子更改样式
//         itemStyle: {
//           barBorderRadius: 20,
//           // 此时的color可以修改柱子的颜色
//           color: function (params) {
//             // params 传进来的是柱子的对象
//             // dataIndex 是当前柱子的索引号
//             // console.log(params);
//             return myColor[params.dataIndex];
//           }
//         },
//         // data: [70, 34, 60, 78, 69],
//         // // 显示柱子内的百分比文字
//         // label: {
//         //   show: true,
//         //   position: "inside",
//         //   // {c} 会自动解析为数据（data内的数据）
//         //   formatter: "{c}%"
//         // }
//       },
//       {
//         // 第二组柱子（框状 border）
//         name: '框',
//         type: 'bar',
//         // 柱子之间的距离
//         barCategoryGap: 50,
//         // 柱子的宽度
//         barWidth: 5,
//         // 层级 相当于z-index
//         yAxisIndex: 1,
//         // 柱子修改样式
//         itemStyle: {
//           color: "none",
//           borderColor: "#00c1de",
//           borderWidth: 2,
//           barBorderRadius: 15,
//         },
//         data: [100, 100, 100, 100, 100,100,100,100, 100, 100, 100, 100,100,100]
//       }
//     ]
//   };
//   // 3.把配置项给实例对象
//   myChart.setOption(option);

//   // 4.让图表随屏幕自适应
//   window.addEventListener('resize', function () {
//     myChart.resize();
//   })
// })();

// 折线图模块1
(function () {
  // 年份对应数据
  var yearData = [{
      year: "2022", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ["1930","1934","1938","1950","1954","1958","1962","1966","1970","1974","1978","1982","1986","1990","1994","1998","2002","2006","2010","2014","2018",
      "2022"],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '历年现场观众人数变化趋势',
        data: [[
                    "1930",
                    590549
                ],
                [
                    "1934",
                    363000
                ],
                [
                    "1938",
                    375700
                ],
                [
                    "1950",
                    1045246
                ],
                [
                    "1954",
                    768607
                ],
                [
                    "1958",
                    819810
                ],
                [
                    "1962",
                    893172
                ],
                [
                    "1966",
                    1563135
                ],
                [
                    "1970",
                    1603975
                ],
                [
                    "1974",
                    1865753
                ],
                [
                    "1978",
                    1545791
                ],
                [
                    "1982",
                    2109723
                ],
                [
                    "1986",
                    2394031
                ],
                [
                    "1990",
                    2516215
                ],
                [
                    "1994",
                    3587538
                ],
                [
                    "1998",
                    2785100
                ],
                [
                    "2002",
                    2705197
                ],
                [
                    "2006",
                    3359439
                ],
                [
                    "2010",
                    3178856
                ],
                [
                    "2014",
                    3386810
                ],
                [
                    "2018",
                    3031768
                ],
                [
                    "2022",
                    2450000
                ]]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    // option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折线图模块2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '20',
      left: '0',
      right: '20',
      bottom: '0',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["1930",
      "1934",
      "1938",
      "1950",
      "1954",
      "1958",
      "1962",
      "1966",
      "1970",
      "1974",
      "1978",
      "1982",
      "1986",
      "1990",
      "1994",
      "1998",
      "2002",
      "2006",
      "2010",
      "2014",
      "2018",
      "2022"]
      
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: "进球数",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [70,70,84, 88,140,126,89,89,95,97,102,146,132,115,141,171,161,147,145,171,169,172]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '大洲分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 45,
          name: "America"
        },
        {
          value: 55,
          name: "Europe"
        },
        
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10
      }
    },
    series: [{
      name: '东道主夺冠概率',
      type: 'pie',
      radius: ["20%", "60%"],
      center: ['50%', '40%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 6,
        // 连接文字线长(横线)
        length2: 8
      },
      data: [{
          value: 73,
          name: 'False'
        },
        {
          value: 27,
          name: 'True'
        },
        
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


// 模拟飞行路线地图
(function () {
  let chart = echarts.init(document.getElementById('echartsMap'));
  var geoCoordMap = {
    '广州': [113.5107, 23.2196],
    '马来西亚': [101.975766, 4.210484],
    '印度尼西亚': [113.921327, -0.789275],
    '泰国': [100.992541, 15.870032],
    '菲律宾': [121.774017, 12.879721],
    '文莱': [114.727669, 4.535277],
    '越南': [108.277199, 14.058324],
    '老挝': [102.495496, 19.85627],
    '缅甸': [95.956223, 21.913965],
    '柬埔寨': [104.990963, 12.565679],
    '新加坡': [103.51, 1.17],
    //一带一路
    '广州': [113.5107, 23.2196],
    '中国': [116.40, 39.90],
    '蒙古': [103.846656, 46.862496],
    '俄罗斯': [105.318756, 61.52401],
    '东帝汶': [125.727539, -8.874217],
    '印度': [78.96288, 20.593684],
    '巴基斯坦': [69.34511599999999, 30.375321],
    '孟加拉国': [90.356331, 23.684994],
    '斯里兰卡': [80.77179699999999, 7.873053999999999],
    '阿富汗': [67.709953, 33.93911],
    '尼泊尔': [84.12400799999999, 28.394857],
    '马尔代夫': [73.5, 4.2],
    '不丹': [90.433601, 27.514162],
    '沙特阿拉伯': [45.079162, 23.885942],
    '阿联酋': [53.847818, 23.424076],
    '阿曼': [55.923255, 21.512583],
    '伊朗': [53.688046, 32.427908],
    '土耳其': [35.243322, 38.963745],
    '以色列': [34.851612, 31.046051],
    '埃及': [30.802498, 26.820553],
    '科威特': [47.481766, 29.31166],
    '伊拉克': [43.679291, 33.223191],
    '卡塔尔': [51.183884, 25.354826],
    '约旦': [36.238414, 30.585164],
    '黎巴嫩': [35.862285, 33.854721],
    '巴林': [50.36, 26.12],
    '也门': [48.516388, 15.552727],
    '叙利亚': [38.996815, 34.80207499999999],
    '巴勒斯坦': [34.28, 31.30],
    '波兰': [19.145136, 51.919438],
    '罗马尼亚': [24.96676, 45.943161],
    '捷克共和国': [15.472962, 49.81749199999999],
    '斯洛伐克': [19.699024, 48.669026],
    '保加利亚': [25.48583, 42.733883],
    '匈牙利': [19.503304, 47.162494],
    '拉脱维亚': [24.603189, 56.879635],
    '立陶宛': [23.881275, 55.169438],
    '斯洛文尼亚': [14.995463, 46.151241],
    '爱沙尼亚': [25.013607, 58.595272],
    '克罗地亚': [15.2, 45.1],
    '阿尔巴尼亚': [20.168331, 41.153332],
    '塞尔维亚': [21.005859, 44.016521],
    '马其顿': [21.745275, 41.608635],
    '波黑': [43.52, 18.26],
    '黑山': [19.37439, 42.708678],
    '哈萨克斯坦': [66.923684, 48.019573],
    '乌兹别克斯坦': [64.585262, 41.377491],
    '土库曼斯坦': [59.556278, 38.969719],
    '吉尔吉斯斯坦': [74.766098, 41.20438],
    '塔吉克斯坦': [71.276093, 38.861034],
    '乌克兰': [31.16558, 48.379433],
    '白俄罗斯': [27.953389, 53.709807],
    '格鲁吉亚': [43.356892, 42.315407],
    '阿塞拜疆': [47.576927, 40.143105],
    '亚美尼亚': [45.038189, 40.069099],
    '摩尔多瓦': [28.369885, 47.411631],
    //欧美国家
    '挪威': [8.468945999999999, 60.47202399999999],
    '丹麦': [9.501785, 56.26392],
    '瑞典': [18.643501, 60.12816100000001],
    '芬兰': [25.748151, 61.92410999999999],
    '英国': [-3.435973, 55.378051],
    '荷兰': [5.291265999999999, 52.132633],
    '爱尔兰': [-8.24389, 53.41291],
    '比利时': [4.469936, 50.503887],
    '卢森堡': [6.129582999999999, 49.815273],
    '法国': [2.213749, 46.227638],
    '西班牙': [-3.74922, 40.46366700000001],
    '葡萄牙': [-8.224454, 39.39987199999999],
    '德国': [10.451526, 51.165691],
    '奥地利': [14.550072, 47.516231],
    '瑞士': [8.227511999999999, 46.818188],
    '美国': [-95.712891, 37.09024],
    '加拿大': [-102.646409, 59.994255],
    '澳大利亚': [133.775136, -25.274398],
    '新西兰': [174.885971, -40.900557]
  };

  var XAData = [
    [{
      name: '中国'
    }, {
      name: "马来西亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "印度尼西亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "泰国",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "菲律宾",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "文莱",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "越南",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "老挝",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "缅甸",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "柬埔寨",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "新加坡",
      value: 30
    }]
  ];

  var XNData = [
    [{
      name: '中国'
    }, {
      name: "蒙古",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "俄罗斯",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "东帝汶",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "印度",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "巴基斯坦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "孟加拉国",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "斯里兰卡",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "阿富汗",
      value: 30
    }],
    [{
      name: '广州'
    }, {
      name: "尼泊尔",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "马尔代夫",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "不丹",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "沙特阿拉伯",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "阿联酋",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "阿曼",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "伊朗",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "土耳其",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "以色列",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "埃及",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "科威特",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "伊拉克",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "卡塔尔",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "约旦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "黎巴嫩",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "巴林",
      value: 30
    }],
    [{
      name: '广州'
    }, {
      name: "也门",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "叙利亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "巴勒斯坦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "波兰",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "罗马尼亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "捷克共和国",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "斯洛伐克",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "保加利亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "匈牙利",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "拉脱维亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "立陶宛",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "斯洛文尼亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "爱沙尼亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "克罗地亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "阿尔巴尼亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "塞尔维亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "马其顿",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "波黑",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "黑山",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "哈萨克斯坦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "乌兹别克斯坦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "土库曼斯坦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "吉尔吉斯斯坦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "塔吉克斯坦",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "乌克兰",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "白俄罗斯",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "格鲁吉亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "阿塞拜疆",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "亚美尼亚",
      value: 30
    }],
    [{
      name: '中国'
    }, {
      name: "摩尔多瓦",
      value: 30
    }]
  ];

  var YCData = [
    [{
      name: '卡塔尔'
    }, {
      name: "中国",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "挪威",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "丹麦",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "瑞典",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "芬兰",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "英国",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "荷兰",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "爱尔兰",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "比利时",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "卢森堡",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "法国",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "西班牙",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "葡萄牙",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "德国",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "奥地利",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "瑞士",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "美国",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "加拿大",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "澳大利亚",
      value: 30
    }],
    [{
      name: '卡塔尔'
    }, {
      name: "新西兰",
      value: 30
    }]
  ];

  var planePath =
  'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

// 获取地图中起点和终点的坐标，以数组形式保存下来
var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push([{
        coord: fromCoord // 起点坐标
      }, {
        coord: toCoord // 终点坐标
      }])
    }
  }
  return res;
};

  var color = ['#9ae5fc', '#dcbf71']; // 自定义图中要用到的颜色
  var series = []; // 用来存储地图数据

  [
    
    ['卡塔尔', YCData]
  ].forEach(function(item, i) {
    series.push({
      // 白色航线特效图
      type: 'lines',
      zlevel: 1, // 用于分层，z-index的效果
      effect: {
        show: true, // 动效是否显示
        period: 6, // 特效动画时间
        trailLength: 0.7, // 特效尾迹的长度
        color: '#fff', // 特效颜色
        symbolSize: 3 // 特效大小
      },
      lineStyle: {
        normal: { // 正常情况下的线条样式
          color: color[0],
          width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
          curveness: -0.2 // 线条曲度
        }
      },
      data: convertData(item[1]) // 特效的起始、终点位置
    }, { // 小飞机航线效果
      type: 'lines',
      zlevel: 2,
      //symbol: ['none', 'arrow'],   // 用于设置箭头
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        // symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
        symbolSize: 5
      },
      lineStyle: {
        normal: {
          color: color[0],
          width: 1,
          opacity: 0.6,
          curveness: -0.2
        }
      },
      data: convertData(item[1]) // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    }, { // 散点效果
      type: 'effectScatter',
      coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
      zlevel: 3,
      rippleEffect: {
        brushType: 'stroke' // 波纹绘制效果
      },
      label: {
        normal: { // 默认的文本标签显示样式
          show: true,
          position: 'left', // 标签显示的位置
          formatter: '{b}' // 标签内容格式器
        }
      },
      itemStyle: {
        normal: {
          color: color[0]
        }
      },
      data: item[1].map(function(dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name], // 起点的位置
          symbolSize: dataItem[1].value / 4, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
        };
      })
    });
  });
  
		// 显示终点位置,类似于上面最后一个效果，放在外面写，是为了防止被循环执行多次
		series.push({
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 3,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'left',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[1]
				}
			},
			data: [{
				name: '卡塔尔',
				value: [51.183884, 25.354826],
				label: {
					normal: {
						position: 'right'
					}
				}
			}]
		});
    chart.setOption({
			backgroundColor: '#0a1443',
			title: {
				
				textStyle: {
					color: '#fff',
					fontSize: 20
				},
				top: '10px',
				left: '10px'
			},
			geo: {
				map: 'world', // 与引用进来的地图js名字一致
				roam: false, // 禁止缩放平移
				itemStyle: { // 每个区域的样式
					normal: {
						areaColor: '#7d7d7d'
					},
					emphasis: {
						areaColor: '#2a333d'
					}
				},
				regions: [{ // 选中的区域
					name: 'China',
					selected: false,
					itemStyle: { // 高亮时候的样式
						emphasis: {
							
              areaColor: '#fc0'
						}
					},
					label: { // 高亮的时候不显示标签
						emphasis: {
							show: false
						}
					}
				}]
			},
			series: series, // 将之前处理的数据放到这里
			textStyle: {
				fontSize: 12
			}
		});
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'multiple'
    },
    geo: {
      map: 'china',
      // 把地图放大1.2倍
      zoom: 1.2,
      label: {
        // 鼠标移动显示区域名称
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: true,
      // 地图样式修改
      itemStyle: {
        normal: {
          areaColor: 'rgba(34, 70, 168, 0.7)',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: 'rgba(119, 139, 224, 0.548)'
        }
      }
    },
    series: series
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();