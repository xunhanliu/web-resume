(function(){

    var dom = document.getElementById("skill-sunburst");
    var myChart = echarts.init(dom,null,{'renderer':'svg'});
    var app = {};
    option = null;
    var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
//var bgColor = '#2E2733';


    var itemlabelMap={'☆☆☆':{color: colors[0]},'☆☆':{color: colors[1]},'☆':{color: colors[2]},}

    var data = [{
        name: 'Languages',
        children: [{
            name: 'C',
            children: [{
                name: '☆☆',
                value: 2
            },]
        }, {
            name: 'C++',
            children: [{
                name: 'MFC',
                value: 2,
                children: [{
                    name: '☆☆',
                    value: 2
                },]
            },
                {
                    name: 'ohers',
                    value: 2,
                    children: [{
                        name: '☆☆',
                        value: 2,

                    },]
                },
            ]

        },
            {
                name: 'C#',
                children: [{
                    name: '☆☆',
                    value: 2
                },]
            },
            {
                name: 'VB',
                children: [{
                    name: '☆☆',
                    value: 2
                },]
            },
            {
                name: 'ASM',
                children: [{
                    name: '☆',
                    value: 1
                },]
            },
            {
                name: 'HTML',
                children: [{
                    name: '☆☆☆',
                    value: 6
                },]
            }
            ,
            {
                name: 'SVG',
                children: [{
                    name: '☆☆☆',
                    value: 6
                },]
            },
            {
                name: 'JS',
                children: [{
                    name: 'nodejs',
                    children: [{
                        name: '☆☆',
                        value: 4
                    },]
                },
                    {
                        name: 'vue',

                        children: [{
                            name: '☆☆',
                            value: 4
                        },]
                    },
                    {
                        name: 'jquery',

                        children: [{
                            name: '☆☆☆',
                            value: 6
                        },]
                    },
                    {
                        name: 'd3',

                        children: [{
                            name: '☆☆☆',
                            value: 4
                        },]
                    },
                ]

            }

        ]
    }, {
        name: 'tools',
        children: [{
            name: 'GIT',
            children: [{
                name: '☆☆☆',
                value: 2
            }]
        },
            {
                name: 'MYSQL',
                children: [{
                    name: '☆☆☆',
                    value: 2
                }]
            },
            {
                name: 'mongodb',
                children: [{
                    name: '☆',
                    value: 1
                }]
            },

        ]
    },

    ];


    for (var j = 0; j < data.length; ++j) {
        var level1 = data[j].children;
        for (var i = 0; i < level1.length; ++i) {
            var block = level1[i].children;
            var bookScore = [];
            var bookScoreId;
            var itemStyle= {
                shadowBlur: 2,
                shadowColor: '#CC3F57',
                color: 'transparent'
            };
            for (var star = 0; star < block.length; ++star) {
                var style =itemlabelMap[block[star].name];
                if (style){
                    block[star].label = {
                        color: style.color,
                    };
                    block[star].itemStyle=itemStyle
                }


                if (block[star].children) {

                    block[star].children.forEach(function (book) {

                        var style =itemlabelMap[book.name];
                        if (style){
                            book.label = {
                                color: style.color,
                            };
                            book.itemStyle=itemStyle
                        }


                    });
                }
            }

            // level1[i].itemStyle = {
            //     color: data[j].itemStyle.color
            // };
        }
    }

    option = {
        series: {
            type: 'sunburst',
            // highlightPolicy: 'ancestor',
            data: data,
            radius: [0, '100%'],
            label: {
                rotate: 'radial',

            },
            itemStyle: {

                borderWidth: 2
            },
            levels: [{
                r0: 0,
                r: '1%',

            }, {
                r0: '1%',
                r: '24%',
                label: {
                    rotate: 0
                },

            }, {
                r0: '25%',
                r: '68%'
            }, {
                r0: '69%',
                r: '84%',
                itemStyle: {
                    shadowBlur: 2,
                    // shadowColor: colors[2],
                    // color: 'transparent'
                },
                label: {
                    rotate: 'tangential',
                    fontSize: 10,
                    // color: colors[0]
                }
            }, {
                r0: '85%',
                r: '100%',
                itemStyle: {
                    shadowBlur: 80,
                    // shadowColor: colors[0]
                },


            }]
        }
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }



})();


