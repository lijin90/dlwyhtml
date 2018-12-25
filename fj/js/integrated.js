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
      { id:11, pId:1, name:"综合查询"},
      { id:111, pId:11, name:"综合查询1"},
     
      { id:12, pId:1, name:"分区管理"},
      { id:121, pId:12, name:"分区管理1"},
      

      { id:13, pId:1, name:"项目管理",open:true,chkDisabled:true},
      { id:131, pId:13, name:"项目基本信息"},
      { id:131, pId:13, name:"计划管理"},
      { id:131, pId:13, name:"资金管理"},
      { id:131, pId:13, name:"进度管理"},
      { id:131, pId:13, name:"检查验收"},     

      { id:14, pId:1, name:"专题图"},
      { id:141, pId:14, name:"专题图1"},

      { id:15, pId:1, name:"统计报表"},
      { id:151, pId:15, name:"统计报表1"}    
    ];
    $("#tree-list2_6_a").attr('class','list-a')
      $.fn.zTree.init($("#tree-list"), setting, zNodes);
      $.fn.zTree.init($("#tree-list2"), setting, zNodes);
      $.fn.zTree.init($("#tree-list3"), setting, zNodes);
      $.fn.zTree.init($("#tree-list4"), setting, zNodes);
   
    
   function zTreeOnCheck(event, treeId, treeNode) {
   };
   /*点击左侧切换table*/
   $("#tree-list2 li a").click(function(){
        $(this).addClass('list-a').parent().siblings('li').children('a').removeClass('list-a')
        $('.table').show();
        $(".show-map").hide().removeClass('jcdwImg');
        var _title = $(this).attr('title');
        $('.gh-modle').hide();
        switch(_title) {
            case '项目基本信息':
                $('.xmjbxx').show();
                break;
            case '计划管理':
                $('.jhgl').show();
                break;
            case '资金管理':
                $('.zijin').show();
                break;
            case '进度管理':
                $('.jindu').show();
                break;

            case '检查验收':
                $('.jiancha').show();
                break;
        }
   })
  /*政区显示隐藏*/
  $(".chioce-zq-content").on('click',function(){
        $('.chioce-i').toggleClass('chioce_activ');
        $(".zqList").slideToggle();
  })
  /*导航标签切换样式*/
   $(".zs-nav-list ul li").on('click',function(){
        $(this).addClass('active-nav').siblings('').removeClass('active-nav');

   });
   /*二级切换*/
   $('.fun-btn ul li').on('click',function(){
        $('#tree-list2_6_a').addClass('list-a')
        $(this).addClass('fun-liActiv').siblings('').removeClass('fun-liActiv');
        $(".map-box-tab").hide().eq($(this).index()).show();
        $(".zs-left-main").hide().eq($(this).index()).show();
        $('.table').show();
        $(".show-map").hide().removeClass('jcdwImg');
   })

   /*三级切换*/
   $(".map-btn ul li").on('click',function(){
        $(this).addClass("btn-activeLi").siblings('').removeClass('btn-activeLi');
        var _class = $(this).attr('data-show');
        if(_class == 'map-show'){
            $('.table').hide();
            $(".show-map").show().removeClass('jcdwImg');
        }
   })

   /*定位*/
   $(".jcysdw").on('click',function(){
   		$('.table').hide();
        $(".show-map").show();
        $(".show-map").addClass('jcdwImg')
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
   $('#addT').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['1020px', '580px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/ghxz.png" alt=""></div>'
        });
    })
   $('#addR').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['860px', '400px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/ysxz.png" alt=""></div>'
        });
    })
   $('#zjbj').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['860px', '400px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/zjbj.png" alt=""></div>'
        });
    })
   $('#zjxz').click(function(){
     layer.open({
            title: '规划管理',
            type: 1,
            area: ['860px', '400px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/zjxz.png" alt=""></div>'
        });
   })
   $('#zhcx').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['500px', '260px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/cx.png" alt=""></div>'
        });
    })
   $('#jdxz').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['1020px', '520px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/jdxz.png" alt=""></div>'
        });
    })
   /*$('#ghxz').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['1020px', '520px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/ghxz.png" alt=""></div>'
        });
    })*/

})