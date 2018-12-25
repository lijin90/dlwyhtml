$(function () {
    var setting = {
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            onClick: function (event, treeId, treeNode) {
                // alert(treeNode)
                // alert(treeNode.id)
                //判断影像
                if (treeNode.id == 42) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-0');
                } else if (treeNode.id == 43) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-01');
                }
                //判断检测
                if (treeNode.id == 46) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-4');
                } else if (treeNode.id == 47) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-41');
                }else if (treeNode.id == 48) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-42');
                }
                //判断对比图
                if (treeNode.id == 49) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-48');
                } else if (treeNode.id == 50) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-49');
                }else if (treeNode.id == 51) {
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-50');
                }

            }
        },
    };
    var zNodes = [
        {id: 11, pId: 1, name: "监测站点分布图"},
        {id: 111, pId: 11, name: "监测站点分布图1"},


        {id: 12, pId: 1, name: "气候分析专题图"},
        {id: 121, pId: 12, name: "气候分析专题图"},


        {id: 13, pId: 1, name: "实时数据"},
        {id: 131, pId: 13, name: "气温"},
        {id: 132, pId: 13, name: "降水量"},
        {id: 133, pId: 13, name: "风速"},
        {id: 134, pId: 13, name: "相对湿度"},

        {id: 14, pId: 1, name: "历史数据", open: true, chkDisabled: true},
        {id: 141, pId: 14, name: "气温"},
        {id: 142, pId: 14, name: "降水量"},
        {id: 143, pId: 14, name: "风速"},
        {id: 144, pId: 14, name: "相对湿度"},

        {id: 15, pId: 1, name: "蒸腾数据分布专题图"},
        {id: 151, pId: 15, name: "蒸腾数据分布专题图1"},

        {id: 16, pId: 1, name: "干湿指数专题图"},
        {id: 161, pId: 16, name: "干湿指数专题图1"}
    ];

    var zNodes2 = [
        {"id":1, "pId":0, "name":"全国",open: true, chkDisabled: true},
        {"id":11, "pId":1, "name":"北京市"},
        {"id":12, "pId":1, "name":"天津市"},
        {"id":13, "pId":1, "name":"上海市"},
        {"id":14, "pId":1, "name":"重庆市"},
        {"id":15, "pId":1, "name":"河北省"},
        {"id":16, "pId":1, "name":"山西省"},
        {"id":17, "pId":1, "name":"辽宁省"},
        {"id":18, "pId":1, "name":"吉林省"},
        {"id":19, "pId":1, "name":"黑龙江省"},
        {"id":20, "pId":1, "name":"江苏省"},
        {"id":21, "pId":1, "name":"浙江省"},
        {"id":22, "pId":1, "name":"安徽省"},
        {"id":23, "pId":1, "name":"福建省"},
        {"id":24, "pId":1, "name":"江西省"},
        {"id":25, "pId":1, "name":"山东省"},
        {"id":26, "pId":1, "name":"河南省"},
        {"id":27, "pId":1, "name":"湖北省"},
        {"id":28, "pId":1, "name":"湖南省"},
        {"id":29, "pId":1, "name":"广东省"},
        {"id":30, "pId":1, "name":"海南省"},
        {"id":31, "pId":1, "name":"四川省"},
        {"id":32, "pId":1, "name":"贵州省"},
        {"id":33, "pId":1, "name":"云南省"},
        {"id":34, "pId":1, "name":"陕西省"},
        {"id":35, "pId":1, "name":"甘肃省"},
        {"id":36, "pId":1, "name":"青海省"},
        {"id":37, "pId":1, "name":"台湾省"},
        {"id":38, "pId":1, "name":"内蒙古自治区"},
        {"id":39, "pId":1, "name":"广西壮族自治区"},
        {"id":40, "pId":1, "name":"内蒙古自治区"},
        {"id":41, "pId":1, "name":"西藏自治区"},
        {"id":42, "pId":1, "name":"宁夏回族自治区"},
        {"id":43, "pId":1, "name":"新疆维吾尔自治区"},
        {"id":44, "pId":1, "name":"香港特别行政区"},
        {"id":45, "pId":1, "name":"澳门特别行政区"},
        // {"id":111, "pId":11, "name":"海淀区"},
        // {"id":112, "pId":11, "name":"朝阳区"},
        // {"id":113, "pId":11, "name":"丰台区"},


        // {"id":121, "pId":12, "name":"北辰区"},
        // {"id":122, "pId":12, "name":"西青区"},
        // {"id":123, "pId":12, "name":"武清区"},


        // {"id":131, "pId":13, "name":"宿州"},
        // {"id":132, "pId":13, "name":"合肥"},
        // {"id":133, "pId":13, "name":"芜湖"},
        // {"id":134, "pId":13, "name":"池州"},
        // {"id":135, "pId":13, "name":"马鞍山"},
        // {"id":1311, "pId":131, "name":"萧县"},
        // {"id":1312, "pId":131, "name":"灵璧"},
        // {"id":1321, "pId":132, "name":"包河区"},
        // {"id":1322, "pId":132, "name":"滨湖区"},
        // {"id":1323, "pId":132, "name":"瑶海区"},
        // {"id":1324, "pId":132, "name":"天鹅湖"},



        // {"id":141, "pId":14, "name":"南京"},
        // {"id":142, "pId":14, "name":"镇江"},
        // {"id":143, "pId":14, "name":"无锡"},
        // {"id":144, "pId":14, "name":"盐城"},
        // {"id":145, "pId":14, "name":"南通"},
        // {"id":1411, "pId":141, "name":"萧县"},
        // {"id":1412, "pId":141, "name":"灵璧"},
    ];
    var zNodes4 = [

        {id: 11, pId:1, name: "影像专题图", open: true, chkDisabled: true},
        {id: 42, pId: 11, name: "第五期影像"},
        {id: 43, pId: 11, name: "第三期影像"},

        {id: 12, pId: 1, name: "监测专题图"},
        {id: 46, pId: 12, name: "第五次监测数据"},
        {id: 47, pId: 12, name: "第四次监测数据"},
        {id: 48, pId: 12, name: "第三次监测数据"},

        // { id: 4, pId: 0, name: "影像专题图", open: true },
        // { id: 5, pId: 4, name: "第五次监测对比" },
        // { id: 6, pId: 4, name: "第四次监测对比", open: false },
        // { id: 61, pId: 6, name: "四级部门1" },
        // { id: 62, pId: 6, name: "四级部门2" },
        // { id: 6, pId: 4, name: "第三次监测对比", open: false },
        // { id: 7, pId: 6, name: "四级部门1" },
        // { id: 8, pId: 6, name: "四级部门2" },
        {id: 13, pId: 1, name: "动态对比专题图"},
        {id: 49, pId: 13, name: "第五次监测对比","children": [
                { "name":"荒漠化土地利用类型及程度专题图", "id":130},
                { "name":"荒漠化监测区土地利用专题图", "id":131, },
                { "name":"荒漠化监测区土地利用专题植被盖度专题图", "id":132},
                { "name":"沙化土地类型专题图", "id":133, },
                { "name":"沙化土地类型程度专题图", "id":134},
                { "name":"沙化土地土地分布区土地利用专题图", "id":135,},
                { "name":"沙化土地土地分布区土地植被盖度专题图", "id":135,},
            ]},
        {id: 50, pId: 13, name: "第四次监测对比","children": [
                { "name":"沙化类型动态变化专题图", "id":136},
                { "name":"沙化程度动态变化专题图", "id":137, },
                { "name":"沙化土地土地分布区土地利用动态专题图", "id":138},
                { "name":"沙化土地土地分布区植被盖度动态专题图", "id":139,},
                { "name":"荒漠化土程度动态变化专题图", "id":140},
                { "name":"荒漠化监测区土地利用动态变化专题图", "id":141,},
                { "name":"荒漠化监测区植被盖度动态变化专题图", "id":142,},
            ]},
        {id: 51, pId: 13, name: "第三次监测对比"},
    ];
    var zNodes3 = [
        {id: 11, pId: 1, name: "沙漠化土地面积统计表", open: true, chkDisabled: true},
        {id: 31, pId: 11, name: "按土地利用类型分"},
        {id: 32, pId: 11, name: "按林地部分利用类型分"},
        {id: 33, pId: 11, name: "按治理措施类型分"},
        {id: 34, pId: 11, name: "按治理程度分"},
        {id: 35, pId: 11, name: "按植被盖度级分"},
        {id: 36, pId: 11, name: "按主要植物种分"},
        {id: 37, pId: 11, name: "按植被覆盖类型"},

        {id: 12, pId: 1, name: "荒漠化土地面积统计表"},
        {id: 61, pId: 12, name: "沙化土地动态变化表"},
        {id: 62, pId: 12, name: "沙化程度动态变化表"},
        {id: 63, pId: 12, name: "沙化土地分布区土地利用动态变化表（不包含分沙化）"},
        {id: 64, pId: 12, name: "沙化土地土地利用动态变化表"},
        {id: 65, pId: 12, name: "沙化土地分布区植被度动态变化表（不包含分沙化）"},
        {id: 66, pId: 12, name: "荒漠化土地动态变化表"},
        {id: 67, pId: 12, name: "荒漠化土地程度变化表"},
        {id: 68, pId: 12, name: "荒漠化分布区土地利用动态变化表"},
    ];


    // $.fn.zTree.init($("#tree-list"), setting, zNodes);
    $.fn.zTree.init($("#tree-list2"), setting, zNodes2);
    $.fn.zTree.init($("#tree-list20"), setting, zNodes3);
    $.fn.zTree.init($("#tree-list4"), setting, zNodes4);

    $.fn.zTree.init($("#tree-list5"), setting, zNodes2);
    /*导航标签切换样式*/
    $(".zs-nav-list ul li").on('click', function () {
        $(this).addClass('active-nav').siblings('').removeClass('active-nav')
    })

    /*二级导航切换*/
    $(".fun-btn1 ul li").on('click', function () {
        // $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
        $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
        $(".map2").hide().eq($(this).index()).show();
        $(".zs-tree-list").hide().eq($(this).index()).show();
    });

    $(".chioce-zq-content").on('click', function () {
        $('.chioce-i').toggleClass('chioce_activ');
        $(".zqList").slideToggle();
    })
    /*条件过滤*/
    $('.search-tj span').on('click', function () {
        $(this).children('i').toggleClass('span-i-icon');
        $(".search-tj-content").eq($(this).index()).slideToggle();
    });
    $(".chioce-zq-content").on('click', function () {
        $('.chioce-i').toggleClass('chioce_activ');
        $(".zqList").slideToggle();
    })
    // 变化分析
    $('.zs-tree-search ul li').click(function () {
        $('.zs-tree-search ul li').removeClass('current')
        $(this).addClass('current');
        $('.tjb').removeClass('show');
        $('.tjb').eq($(this).index()).addClass('show');
        // $('#map2-2').removeClass().addClass('map2 clear');
        // $('#tab').show();
        // $('.ztree li a').removeClass('curSelectedNode')
    })


    // 统计图切换
    $('#tab li').click(function(){
        $('#tab li').removeClass('current')
        $(this).addClass('current');
        $(".tjt img").eq($(this).index()).addClass('show').siblings().removeClass('show');
    })
    var zqList = [
        {
            "id": "1",
            "name": "北京市",
        },
        {
            "id": "2",
            "name": "天津市",

        },
        {
            "id": "3",
            "name": "上海市",

        },
        {
            "id": "4",
            "name": "重庆市",

        },
        {
            "id": "5",
            "name": "河北省",

        },
        {
            "id": "6",
            "name": "山西省",

        },
        {
            "id": "7",
            "name": "吉林省",

        },
        {
            "id": "8",
            "name": "辽宁省",

        },
        {
            "id": "9",
            "name": "陕西省",

        },
        {
            "id": "10",
            "name": "甘肃省",

        },
        {
            "id": "11",
            "name": "青海省",

        },
        {
            "id": "12",
            "name": "山东省",

        },
        {
            "id": "13",
            "name": "河南省",

        },
        {
            "id": "14",
            "name": "江苏省",

        },
        {
            "id": "15",
            "name": "浙江省",

        },
        {
            "id": "16",
            "name": "安徽省",

        },
        {
            "id": "17",
            "name": "江西省",

        },
        {
            "id": "18",
            "name": "福建省",

        },
        {
            "id": "19",
            "name": "台湾省",

        },
        {
            "id": "20",
            "name": "湖北省",

        },
        {
            "id": "21",
            "name": "湖南省",

        },
        {
            "id": "22",
            "name": "广东省",

        },
        {
            "id": "23",
            "name": "海南省",

        },
        {
            "id": "24",
            "name": "四川省",

        },
        {
            "id": "25",
            "name": "云南省",

        },
        {
            "id": "26",
            "name": "贵州省",

        },
        {
            "id": "27",
            "name": "黑龙江省",

        },
        {
            "id": "28",
            "name": "西藏自治区",

        },
        {
            "id": "29",
            "name": "宁夏回族自治区",

        },
        {
            "id": "30",
            "name": "内蒙古省",

        }
        ,
        {
            "id": "31",
            "name": "广西壮族省",

        },
        {
            "id": "32",
            "name": "新疆维吾尔自治区",

        },
    ]

    //数据列表
    function fillTable(zqList) {
        zqList.forEach(function (item) {
            var li = "<li class='clear' id='fs_org_li_" + item.id + "'>" +
                "<div class='xh-icon'></div>" +
                "<div class='xh-contant'>" +
                "<p class='contant-title'>" + item.name + "</p>" +
                "</li>"
            $("#zqList").append(li);
            $("#fs_org_li_" + item.id).on("click", function () {
                $(this).addClass('zqList-li').siblings('').removeClass('zqList-li');
                var listText = $(this).text();
                $('.thisZq').text(listText)
            })
        });
    }

    fillTable(zqList);
})