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
                if (treeNode.id == 111) {
                    $(".table-box").hide();
                    $(".map-box").show();
                } else if (treeNode.id == 121) {
                    $(".table-box").show();
                    $(".map-box").hide();
                }
            }
        },


    };
    var zNodes = [
        {id: 11, pId: 1, name: "公共基础数据", open: true, chkDisabled: true},
        {id: 111, pId: 11, name: "基础地理信息"},
        {id: 112, pId: 11, name: "卫星遥感数据"},

        {id: 12, pId: 1, name: "干湿监测数据", open: true, chkDisabled: true},
        {id: 121, pId: 12, name: "监测站点"},
        {id: 122, pId: 12, name: "年度监测数据"},
        {id: 123, pId: 12, name: "实时监测数据"},
        {id: 124, pId: 12, name: "气候分区数据"},

        {id: 13, pId: 1, name: "林地资源数据"},
        {id: 131, pId: 13, name: "林地资源数据1"},

        {id: 14, pId: 1, name: "干湿指数分析"},
        {id: 141, pId: 14, name: "干湿指数分析2"},

        {id: 15, pId: 1, name: "最大可能蒸散量分析"},
        {id: 151, pId: 15, name: "最大可能蒸散量分析1"}
    ];


    $.fn.zTree.init($("#tree-list"), setting, zNodes);


    /*table切换*/
    // $("#tree-list_5_span").on('click', function () {
    //     $(this).css('color', 'orange')
    //     $(".table-box").show();
    //     $(".map-box").hide();
    // })

    /*政区显示隐藏*/
    $(".chioce-zq-content").on('click', function () {
        $('.chioce-i').toggleClass('chioce_activ');
        $(".zqList").slideToggle();
    })
    /*导航标签切换样式*/
    $(".zs-nav-list ul li").on('click', function () {
        $(this).addClass('active-nav').siblings('').removeClass('active-nav');

    });
    // 点击右上角菜单弹框
    //  结构转换
    $('.shuju').click(function () {
        layer.open({
            title: '数据格式转换',
            type: 1,
            area: ['560px', '350px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/tk1.png" alt=""></div>'
        });
    })
    //  结构转换
    $('.geshi').click(function () {
        layer.open({
            title: '数据转换',
            type: 1,
            area: ['710px', '360px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/tk2.png" alt=""></div>'
        });
    })
    //  质检
    $('.zhijian').click(function () {
        layer.open({
            title: '数据质检',
            type: 1,
            area: ['420px', '580px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/tk3.png" alt=""></div>'
        });
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