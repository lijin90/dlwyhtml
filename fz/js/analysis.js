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
        callBack: {
            onCheck: zTreeOnCheck,

        }
    };
    var zNodes = [
        {id: 11, pId: 1, name: "监测站点分布图"},
        {id: 111, pId: 11, name: "监测站点分布图1"},


        {id: 12, pId: 1, name: "气候分析专题图"},
        {id: 121, pId: 12, name: "气候分析专题图"},


        {id: 13, pId: 1, name: "实时数据", open: true, chkDisabled: true},
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


    $.fn.zTree.init($("#tree-list"), setting, zNodes);
    $("#tree-list_9_span").css('color', 'orange');

    function zTreeOnCheck(event, treeId, treeNode) {
    };

    /*导航标签切换样式*/
    $(".zs-nav-list ul li").on('click', function () {
        $(this).addClass('active-nav').siblings('').removeClass('active-nav')
    })

    /*二级导航切换*/
    $(".fun-btn1 ul li").on('click', function () {
        $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
    });

    $(".chioce-zq-content").on('click', function () {
        $('.chioce-i').toggleClass('chioce_activ');
        $(".zqList").slideToggle();
    })
    //分类管理
    $('.status-list ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.map1').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })

    //表格
    $('#table').bootstrapTable({
        striped: true,
        striped: true, //是否显示行间隔色
        pageNumber: 1, //初始化加载第一页
        pagination: true,//是否分页
        sidePagination: 'client',//server:服务器端分页|client：前端分页
        pageSize: 7,//单页记录数
        pageList: [5, 10, 20, 30],//可选择单页记录数
        columns: [
            {field: "user_email", title: "政区", align: "center", valign: "middle", sortable: "true"},
            {field: "user_company", title: "耕地", align: "center", valign: "middle", sortable: "true"},
            {field: "user_dates", title: "园地", align: "center", valign: "middle", sortable: "true"},
            {field: "user_lastlogintime", title: "林地", align: "center", valign: "middle", sortable: "true"},
            {field: "user_version", title: "草地", align: "center", valign: "middle", sortable: "true"},
            {field: "user_isv2", title: "商服用地", align: "center", valign: "middle", sortable: "true"},
            {field: "userstatus_usertype", title: "工矿仓储用地", align: "center", valign: "middle", sortable: "true"},
            {field: "userstatus_package_id", title: "住宅用地", align: "center", valign: "middle", sortable: "true"},
            {field: "userstatus_end_time", title: "公共管理与公共服务用地", align: "center", valign: "middle", sortable: "true"},
            {field: "sun_end_time", title: "特殊用地", align: "center", valign: "middle", sortable: "true"},
            {field: "jiaotong", title: "交通运输用地", align: "center", valign: "middle", sortable: "true"},
            {field: "shui", title: "水域及水利设施用地", align: "center", valign: "middle", sortable: "true"},
            {field: "other", title: "其他土地", align: "center", valign: "middle", sortable: "true"}
        ],
        data: [
            {
                "user_email": "北京市",
                "user_company": "23",
                "user_dates": "30",
                "user_lastlogintime": "12",
                "user_version": "12",
                "user_isv2": "20",
                "userstatus_usertype": "10",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "15",
                'sun_end_time': '4',
                'jiaotong': '4',
                'shui': '7',
                'other': '4'
            },

            {
                "user_email": "天津市",
                "user_company": "20",
                "user_dates": "20",
                "user_lastlogintime": "52",
                "user_version": "11",
                "user_isv2": "30",
                "userstatus_usertype": "20",
                "userstatus_package_id": "2.1",
                "userstatus_end_time": "15",
                'sun_end_time': '4',
                'jiaotong': '1',
                'shui': '5',
                'other': '1'
            },

            {
                "user_email": "河北省",
                "user_company": "30",
                "user_dates": "26",
                "user_lastlogintime": "3",
                "user_version": "0",
                "user_isv2": "31",
                "userstatus_usertype": "20",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "0",
                'sun_end_time': '8',
                'jiaotong': '5',
                'shui': '4',
                'other': '2'
            },

            {
                "user_email": "河南省",
                "user_company": "35",
                "user_dates": "52",
                "user_lastlogintime": "8",
                "user_version": "5",
                "user_isv2": "20",
                "userstatus_usertype": "10",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "15",
                'sun_end_time': '4',
                'jiaotong': '6',
                'shui': '1',
                'other': '7'
            },


            {
                "user_email": "吉林省",
                "user_company": "56",
                "user_dates": "34",
                "user_lastlogintime": "4",
                "user_version": "3",
                "user_isv2": "30",
                "userstatus_usertype": "22",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "15",
                'sun_end_time': '4',
                'jiaotong': '2',
                'shui': '3',
                'other': '1'
            },

            {
                "user_email": "黑龙江",
                "user_company": "46",
                "user_dates": "49",
                "user_lastlogintime": "3",
                "user_version": "2",
                "user_isv2": "20",
                "userstatus_usertype": "23",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "15",
                'sun_end_time': '4',
                'jiaotong': '6',
                'shui': '1',
                'other': '4'
            },

            {
                "user_email": "安徽",
                "user_company": "16",
                "user_dates": "66",
                "user_lastlogintime": "4",
                "user_version": "1",
                "user_isv2": "10",
                "userstatus_usertype": "26",
                "userstatus_package_id": "2.1",
                "userstatus_end_time": "15",
                'sun_end_time': '6',
                'jiaotong': '7',
                'shui': '4',
                'other': '5'
            },

            {
                "user_email": "山东",
                "user_company": "30",
                "user_dates": "44",
                "user_lastlogintime": "5",
                "user_version": "1",
                "user_isv2": "20",
                "userstatus_usertype": "34",
                "userstatus_package_id": "2.1",
                "userstatus_end_time": "15",
                'sun_end_time': '4',
                'jiaotong': '4',
                'shui': '1',
                'other': '8'
            },

            {
                "user_email": "江苏",
                "user_company": "25",
                "user_dates": "35",
                "user_lastlogintime": "10",
                "user_version": "0",
                "user_isv2": "20",
                "userstatus_usertype": "50",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "0",
                'sun_end_time': '4',
                'jiaotong': '3',
                'shui': '4',
                'other': '9'
            },

            {
                "user_email": "江西",
                "user_company": "38",
                "user_dates": "15",
                "user_lastlogintime": "0",
                "user_version": "0",
                "user_isv2": "23",
                "userstatus_usertype": "20",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "0",
                'sun_end_time': '4',
                'jiaotong': '5',
                'shui': '7',
                'other': '7'
            },

            {
                "user_email": "四川",
                "user_company": "52",
                "user_dates": "14",
                "user_lastlogintime": "12",
                "user_version": "0",
                "user_isv2": "31",
                "userstatus_usertype": "0",
                "userstatus_package_id": "2.5",
                "userstatus_end_time": "0",
                'sun_end_time': '4',
                'jiaotong': '2',
                'shui': '5',
                'other': '4'
            },
        ],
    });
    //表格
    $('#table2').bootstrapTable({
        striped: true,
        striped: true, //是否显示行间隔色
        pageNumber: 1, //初始化加载第一页
        pagination: true,//是否分页
        sidePagination: 'client',//server:服务器端分页|client：前端分页
        pageSize: 5,//单页记录数
        pageList: [5, 10, 20, 30],//可选择单页记录数
        columns: [
            {field: "user_email", title: "省", align: "center", valign: "middle", sortable: "true"},
            {field: "user_company", title: "裸沙地（%）", align: "center", valign: "middle", sortable: "true"},
            {field: "user_dates", title: "植被覆盖度（%）", align: "center", valign: "middle", sortable: "true"},
            {field: "user_lastlogintime", title: "土壤质地（得分）", align: "center", valign: "middle", sortable: "true"},
            {field: "user_version", title: "极强度沙化土地（%）", align: "center", valign: "middle", sortable: "true"},
            {field: "user_isv2", title: "强度沙化土地（%）", align: "center", valign: "middle", sortable: "true"},
            {field: "userstatus_usertype", title: "中度沙化土地（%）", align: "center", valign: "middle", sortable: "true"},
            {field: "userstatus_package_id", title: "轻度沙化土地（%）", align: "center", valign: "middle", sortable: "true"},
        ],
        data: [
            {
                "user_email": "北京市",
                "user_company": "23",
                "user_dates": "30",
                "user_lastlogintime": "12",
                "user_version": "12",
                "user_isv2": "20",
                "userstatus_usertype": "10",
                "userstatus_package_id": "2.5"
            },

            {
                "user_email": "天津市",
                "user_company": "20",
                "user_dates": "20",
                "user_lastlogintime": "52",
                "user_version": "11",
                "user_isv2": "30",
                "userstatus_usertype": "20",
                "userstatus_package_id": "2.1"
            },

            {
                "user_email": "河北省",
                "user_company": "30",
                "user_dates": "26",
                "user_lastlogintime": "3",
                "user_version": "0",
                "user_isv2": "31",
                "userstatus_usertype": "20",
                "userstatus_package_id": "2.5"
            },

            {
                "user_email": "河南省",
                "user_company": "35",
                "user_dates": "52",
                "user_lastlogintime": "8",
                "user_version": "5",
                "user_isv2": "20",
                "userstatus_usertype": "10",
                "userstatus_package_id": "2.5"
            },


            {
                "user_email": "吉林省",
                "user_company": "56",
                "user_dates": "34",
                "user_lastlogintime": "4",
                "user_version": "3",
                "user_isv2": "30",
                "userstatus_usertype": "22",
                "userstatus_package_id": "2.5"
            },

            {
                "user_email": "黑龙江",
                "user_company": "46",
                "user_dates": "49",
                "user_lastlogintime": "3",
                "user_version": "2",
                "user_isv2": "20",
                "userstatus_usertype": "23",
                "userstatus_package_id": "2.5"
            },

            {
                "user_email": "安徽",
                "user_company": "16",
                "user_dates": "66",
                "user_lastlogintime": "4",
                "user_version": "1",
                "user_isv2": "10",
                "userstatus_usertype": "26",
                "userstatus_package_id": "2.1"
            },

            {
                "user_email": "山东",
                "user_company": "30",
                "user_dates": "44",
                "user_lastlogintime": "5",
                "user_version": "1",
                "user_isv2": "20",
                "userstatus_usertype": "34",
                "userstatus_package_id": "2.1"
            },

            {
                "user_email": "江苏",
                "user_company": "25",
                "user_dates": "35",
                "user_lastlogintime": "10",
                "user_version": "0",
                "user_isv2": "20",
                "userstatus_usertype": "50",
                "userstatus_package_id": "2.5"
            },

            {
                "user_email": "江西",
                "user_company": "38",
                "user_dates": "15",
                "user_lastlogintime": "0",
                "user_version": "0",
                "user_isv2": "23",
                "userstatus_usertype": "20",
                "userstatus_package_id": "2.5"
            },

            {
                "user_email": "四川",
                "user_company": "52",
                "user_dates": "14",
                "user_lastlogintime": "12",
                "user_version": "0",
                "user_isv2": "31",
                "userstatus_usertype": "0",
                "userstatus_package_id": "2.5"
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