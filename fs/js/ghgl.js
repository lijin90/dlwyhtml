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
      { id:11, pId:1, name:"监测站点分布图"},
      { id:111, pId:11, name:"监测站点分布图1"},
      

      { id:12, pId:1, name:"气候分析专题图"},
      { id:121, pId:12, name:"气候分析专题图"},
      

      { id:13, pId:1, name:"实时数据",open:true,chkDisabled:true},
      { id:131, pId:13, name:"气温"},
      { id:132, pId:13, name:"降水量"},
      { id:133, pId:13, name:"风速"},
      { id:134, pId:13, name:"相对湿度"},    

      { id:14, pId:1, name:"历史数据",open:true,chkDisabled:true},
      { id:141, pId:14, name:"气温"},
      { id:142, pId:14, name:"降水量"},
      { id:143, pId:14, name:"风速"},
      { id:144, pId:14, name:"相对湿度"},

      { id:15, pId:1, name:"蒸腾数据分布专题图"},
      { id:151, pId:15, name:"蒸腾数据分布专题图1"},

      { id:16, pId:1, name:"干湿指数专题图"},
      { id:161, pId:16, name:"干湿指数专题图1"}        
    ];
     
   
      $.fn.zTree.init($("#tree-list"), setting, zNodes);
    
   function zTreeOnCheck(event, treeId, treeNode) {
   };
   $(".map-btn ul li").on('click',function(){
        $(this).addClass("btn-activeLi").siblings('').removeClass('btn-activeLi');
        var _class = $(this).attr('data-show');
        if(_class == 'map-show'){
            $('.table').hide();
            $(".show-map").show();
        }
   }) 
  /*导航标签切换样式*/
   $(".zs-nav-list ul li").on('click',function(){
		$(this).addClass('active-nav').siblings('').removeClass('active-nav')
   })
    
   /*二级导航切换*/
   $(".fun-btn1 ul li").on('click',function(){
      $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active');
      $('.map1').hide().eq($(this).index()).show();
      $('.ulShow').hide().eq($(this).index()).show();
      $("#tjfx1,#tjfx").hide();
      $('.table').show();
            $(".show-map").hide();
   });
   /*zhengqu*/
   $(".chioce-zq-content").on('click',function(){
      $('.chioce-i').toggleClass('chioce_activ');
      $(".zqList").slideToggle();
   })

   /*左侧li*/
   $('.zs-tree-list .clears li').on('click',function(){
      $(this).addClass('active').siblings('').removeClass('active');
      $('.map-div1').hide().eq($(this).index()).show();
      $('.map-div2').hide().eq($(this).index()).show();
      $('.map-div3').hide().eq($(this).index()).show();
      $(".map-div4").hide().eq($(this).index()).show();
      $(".map-div5").hide().eq($(this).index()).show();

   })
   $("#tjfxList").on('click',function(){
      $("#tjfx1,#tjfx").show()
   })
   
   $("#tjfx1 li").on('click',function(){
      $('.tj_table').hide().eq($(this).index()).show();
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
    
    $('#tjsz').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['650px', '180px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/tjsz.png" alt=""></div>'
        });
    })
    $('#wgwjxz').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['620px', '480px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/wgwj.png" alt=""></div>'
        });
    })
    $('#newAd').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['650px', '580px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/jcys.png" alt=""></div>'
        });
    })
    $('#cgAdd').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['650px', '500px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/ac.png" alt=""></div>'
        });
    })
    $('#lxgl').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['680px', '520px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/chlxgl.png" alt=""></div>'
        });
    })
    $('#jdxmlx').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['680px', '520px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/jdxmlx.png" alt=""></div>'
        });
    })
     $('#sqys').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['680px', '320px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/sqys.png" alt=""></div>'
        });
    })
    $('#ztb').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['680px', '320px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/zbgl.png" alt=""></div>'
        });
    })
    $('#xmys').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['680px', '320px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/xmys.png" alt=""></div>'
        });
    })
    $('#jdck').click(function () {
        layer.open({
            title: '规划管理',
            type: 1,
            area: ['320px', '620px'],
            shade: 0.6,
            shadeClose: true, //点击遮罩关闭
            content: '<div style="padding:20px;"><img src="images/xmck1.png" alt=""></div>'
        });
    })
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