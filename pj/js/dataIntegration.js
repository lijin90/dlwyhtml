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
                $('#tree-list_7 a').css('color', '');
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
        {id: 11, pId: 1, name: "公共基础数据"},
        {id: 111, pId: 11, name: "基础地理信息"},
        {id: 112, pId: 11, name: "遥感数据"},

        {id: 12, pId: 1, name: "沙尘暴数据", open: true, chkDisabled: true},
        {id: 121, pId: 12, name: "监测点数据"},
        {id: 122, pId: 12, name: "沙尘暴影响数据"},
        {id: 123, pId: 12, name: "灾害调查数据"},

        {id: 13, pId: 1, name: "林地资源数据"},
        {id: 131, pId: 13, name: "林地资源数据1"},

        {id: 14, pId: 1, name: "荒漠化监测数据"},
        {id: 141, pId: 14, name: "荒漠化监测数据2"},

        {id: 15, pId: 1, name: "社会经济数据"},
        {id: 151, pId: 15, name: "社会经济数据2"}
    ];


    $.fn.zTree.init($("#tree-list"), setting, zNodes);
    $('#tree-list_7 a').css('color', 'orange');

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
    /*导航标签切换样式*/
    $(".fun-btn ul li").on('click', function () {
        $(this).addClass('fun-btn2-active').siblings('').removeClass('fun-btn2-active');
    });
    // 点击右上角菜单弹框
    //  结构转换
    $('.shuju').click(function () {
        layer.open({
            title: '数据格式转换',
            type: 1,
            area: ['560px', '700px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/tk.png" alt=""></div>'
        });
    })
    //表格
    $('#table2').bootstrapTable({
        striped: true,
        striped: true, //是否显示行间隔色
        pageNumber: 1, //初始化加载第一页
        pagination: true,//是否分页
        sidePagination: 'client',//server:服务器端分页|client：前端分页
        pageSize:8,//单页记录数
        pageList: [5, 10, 20, 30],//可选择单页记录数
        columns: [
            {field: "user_email", title: "序号", align: "center", valign: "middle", sortable: "true"},
            {field: "user_company", title: "省", align: "center", valign: "middle", sortable: "true"},
            {field: "user_wrs", title: "市", align: "center", valign: "middle", sortable: "true"},
            {field: "user_lastlogintime", title: "县", align: "center", valign: "middle", sortable: "true"},
            {field: "user_version", title: "乡", align: "center", valign: "middle", sortable: "true"},
            {field: "user_isv2", title: "村", align: "center", valign: "middle", sortable: "true"},
            {field: "user_diming", title: "小地名", align: "center", valign: "middle", sortable: "true"},
            {field: "user_time", title: "发生时间", align: "center", valign: "middle", sortable: "true"},
            {field: "user_mj", title: "发生面积", align: "center", valign: "middle", sortable: "true"},
            {field: "user_price", title: "财产损失金额", align: "center", valign: "middle", sortable: "true"},
            {field: "user_wr", title: "环境污染面积", align: "center", valign: "middle", sortable: "true"},
            {field: "user_num", title: "人员伤亡数量", align: "center", valign: "middle", sortable: "true"},

        ],
        data: [
            {
                "user_email": "1",
                "user_company": "湖南",
                "user_wrs": "长沙",
                "user_lastlogintime": "宁乡",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "28-",
                "user_time": "2018.11.28",
                "user_price": "-",
                "user_wr": "-",
                "user_num": "-",
            },

            {
                "user_email": "2",
                "user_company": "广东",
                "user_wrs": "广州",
                "user_lastlogintime": "广州",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "23",
                "user_time": "2018.11.20",
                "user_price": "-",
                "user_wr": "1",
                "user_num": "-",
            },

            {
                "user_email": "3",
                "user_company": "河南",
                "user_wrs": "郑州",
                "user_lastlogintime": "邓州",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "113",
                "user_time": "2018.11.13",
                "user_price": "-",
                "user_wr": "1",
                "user_num": "-",
            },

            {
                "user_email": "4",
                "user_company": "湖南",
                "user_wrs": "长沙",
                "user_lastlogintime": "宁乡",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "28-",
                "user_time": "2018.11.28",
                "user_price": "-",
                "user_wr": "-",
                "user_num": "-",
            },

            {
                "user_email": "5",
                "user_company": "广东",
                "user_wrs": "广州",
                "user_lastlogintime": "广州",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "28-",
                "user_time": "2018.11.28",
                "user_price": "-",
                "user_wr": "-",
                "user_num": "-",
            },

            {
                "user_email": "6",
                "user_company": "河南",
                "user_wrs": "郑州",
                "user_lastlogintime": "邓州",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "28-",
                "user_time": "2018.11.28",
                "user_price": "-",
                "user_wr": "-",
                "user_num": "-",
            },
            {
                "user_email": "7",
                "user_company": "湖南",
                "user_wrs": "长沙",
                "user_lastlogintime": "宁乡",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "28-",
                "user_time": "2018.11.28",
                "user_price": "-",
                "user_wr": "-",
                "user_num": "-",
            },

            {
                "user_email": "8",
                "user_company": "广东",
                "user_wrs": "广州",
                "user_lastlogintime": "广州",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "28-",
                "user_time": "2018.11.28",
                "user_price": "-",
                "user_wr": "-",
                "user_num": "-",
            },

            {
                "user_email": "9",
                "user_company": "河南",
                "user_wrs": "郑州",
                "user_lastlogintime": "邓州",
                "user_version": "-",
                "user_isv2": "-",
                "user_diming": "-",
                "user_mj": "28-",
                "user_time": "2018.11.28",
                "user_price": "-",
                "user_wr": "-",
                "user_num": "-",
            },

        ],
    });
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