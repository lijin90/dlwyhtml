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
                //判断分析
                if (treeNode.id == 111) {
                    $('.table').removeClass('hide');
                    $('#map1').removeClass().addClass('hide');
                } else if (treeNode.id == 131) {
                    $('.table').addClass('hide');
                    $('#map1').removeClass().addClass('map1');
                } else if (treeNode.id == 132) {
                    $('.table').addClass('hide');
                    $('#map1').removeClass().addClass('map2');
                } else if (treeNode.id == 133) {
                    $('.table').addClass('hide');
                    $('#map1').removeClass().addClass('map3');
                } else if (treeNode.id == 134) {
                    $('.table').addClass('hide');
                    $('#map1').removeClass().addClass('map4');
                }
            }
        },
    };
    var zNodes = [
        {id: 11, pId: 1, name: "沙尘暴分区管理", open: true, chkDisabled: true},
        {id: 111, pId: 11, name: "分类管理"},
        {id: 112, pId: 11, name: "省级分区管理"},
        {id: 113, pId: 11, name: "市级分区管理"},
        {id: 114, pId: 11, name: "县级分区管理"},

        {id: 12, pId: 1, name: "模型管理"},


        {id: 13, pId: 1, name: "预测分析"},
        {id: 131, pId: 13, name: "沙尘暴发生预测分析"},
        {id: 132, pId: 13, name: "沙尘暴预警分析"},
        {id: 133, pId: 13, name: "沙尘暴发展预测分析"},
        {id: 134, pId: 13, name: "沙尘暴灾害损失分析"},

    ];

    $.fn.zTree.init($("#tree-list"), setting, zNodes);


    /*导航标签切换样式*/
    $(".zs-nav-list ul li").on('click', function () {
        $(this).addClass('active-nav').siblings('').removeClass('active-nav')
    })

    /*二级导航切换*/
    $(".fun-btn1 ul li").on('click', function () {
        // $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
        $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
        // $(".map2").hide().eq($(this).index()).show();
        // $(".zs-tree-list").hide().eq($(this).index()).show();
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
    // 变化分析
    $('.zs-checkbox1 ul li').click(function () {
        var i= $('.zs-checkbox1 ul li').index(this);
        if(i==1){
            $('.zs-tree-searchList').removeClass('hide')
        }else{
            $('.zs-tree-searchList').addClass('hide');
        }
        $('.zs-checkbox1 ul li').removeClass('current');
        $(this).addClass('current');
        $('.map-box1 .checkbox').eq($(this).index()).addClass('show').siblings().removeClass('show')
    })
    $.fn.extend({
        tab:function () {
            this.click(function(){
                $(this).addClass('current').siblings().removeClass('current');
            })
        }
    })
    $('.zs-checkbox2 ul li').tab();
    $('.zs-main-right .checkbox ul li').click(function () {
        $('.zs-main-right ul li').removeClass('current');
        $(this).addClass('current');
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