(function () {
    var dom = document.getElementById("sports-pie");
    var myChart = echarts.init(dom,null,{'renderer':'svg'});
    var app = {};
    option = null;
    option = {
        // backgroundColor: '#2c343c',
        title: {
            text: 'My favorite sports',
            left: 'center',
            top: 10,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {d}%"
        },

        visualMap: {
            show: false,
            min: 2,
            max: 6,
            inRange: {
                colorLightness: [0.2, 0.8]
            }
        },
        series : [
            {
                name:'sports',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:5, name:'swimming',rank:''},
                    {value:3, name:'skidding'}, //轮滑
                    {value:4, name:'skiing'}, //滑雪
                    {value:4, name:'freeline'},
                    {value:5, name:'climbing'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.6)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.6)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

})();
