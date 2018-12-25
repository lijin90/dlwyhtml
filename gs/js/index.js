$(function(){
    var setting = {
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callBack:{
            onCheck: zTreeOnCheck,

        }
    };
    var zNodes =[
        { id:11, pId:1, name:"公共基础数据"},
        { id:111, pId:11, name:"测绘部门基础地理信息"},


        { id:12, pId:1, name:"林业资源数据"},
        { id:121, pId:12, name:"土地资源图"},
        { id:122, pId:12, name:"草地资源图"},
        { id:123, pId:12, name:"森林资源分布数据"},
        { id:124, pId:12, name:"林地资源分布数据"},
        { id:125, pId:12, name:"土壤类型分布数据 "},

        { id:13, pId:1, name:"气象数据",open:true,chkDisabled:true},
        { id:131, pId:13, name:"气温"},
        { id:132, pId:13, name:"气压"},
        { id:133, pId:13, name:"相对湿度"},
        { id:134, pId:13, name:"风"},
        { id:135, pId:13, name:"降水"},
        { id:136, pId:13, name:"历年气象数据"},

        { id:14, pId:1, name:"荒漠化沙化监测数据",open:true,chkDisabled:true},
        { id:141, pId:14, name:"第一次荒漠化和沙化调查数据"},
        { id:142, pId:14, name:"第二次荒漠化和沙化调查数据"},
        { id:143, pId:14, name:"第三次荒漠化和沙化调查数据"},
        { id:144, pId:14, name:"第四次荒漠化和沙化调查数据"},
        { id:145, pId:14, name:"第五次荒漠化和沙化调查数据"},
        { id:146, pId:14, name:"监测区划数据"},
        { id:147, pId:14, name:"动态变化数据"},



    ];
    $.fn.zTree.init($("#tree-list"), setting, zNodes);
    $("#tree-list_1_span ").css('color','orange');

    function zTreeOnCheck(event, treeId, treeNode) {
        var treeObj=$.fn.zTree.getZTreeObj("tree-list"),
            nodes=treeObj.getCheckedNodes(true),
            v="";
        console.log(nodes)
        for(var i=0;i<nodes.length;i++){
            v+=nodes[i].name + ",";
            console.log(nodes[i].id); //获取选中节点的值
        }
    };

    /*导航标签切换样式*/
    $(".zs-nav-list ul li").on('click',function(){
        $(this).addClass('active-nav').siblings('').removeClass('active-nav')
    })

    /*二级导航切换*/
    $(".fun-btn1 ul li").on('click',function(){
        $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
    });

    $(".chioce-zq-content").on('click',function(){
        $('.chioce-i').toggleClass('chioce_activ');
        $(".zqList").slideToggle();
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
            $("#fs_org_li_"+item.id).on("click", function () {
                $(this).addClass('zqList-li').siblings('').removeClass('zqList-li');
                var listText = $(this).text();
                $('.thisZq').text(listText)
            })
        });
    }
    fillTable(zqList);
})