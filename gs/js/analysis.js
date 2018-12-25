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
        callback: {
            onClick: function (event, treeId, treeNode) {
                // alert(treeNode)
                // alert(treeNode.id)
                //判断变化分析
                if(treeNode.id==21){
                    $('#tab').hide();
                    $('.zs-tree-search li').removeClass();
                    $('#map2-2').removeClass();
                    $('#map2-2').addClass('map2 clear map2-20');
                }else if(treeNode.id==22){
                    $('#tab').hide();
                    $('.zs-tree-search li').removeClass();
                    $('#map2-2').removeClass();
                    $('#map2-2').addClass('map2 clear map2-21');
                }else if(treeNode.id==23){
                    $('#tab').hide();
                    $('.zs-tree-search li').removeClass();
                    $('#map2-2').removeClass();
                    $('#map2-2').addClass('map2 clear map2-22');
                }else if(treeNode.id==24){
                    $('#tab').hide();
                    $('.zs-tree-search li').removeClass();
                    $('#map2-2').removeClass();
                    $('#map2-2').addClass('map2 clear map2-23');
                }else if(treeNode.id==25){
                    $('#tab').hide();
                    $('.zs-tree-search li').removeClass();
                    $('#map2-2').removeClass();
                    $('#map2-2').addClass('map2 clear map2-24');
                }
                //判断预测分析
                if(treeNode.id==42){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-4');
                }else if(treeNode.id==43){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-41');
                }else if(treeNode.id==44){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-42');
                }else if(treeNode.id==45){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-43');
                }else if(treeNode.id==46){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-44');
                }else if(treeNode.id==47){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-45');
                }else if(treeNode.id==48){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-46');
                }else if(treeNode.id==49){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-47');
                }else if(treeNode.id==50){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-48');
                }else if(treeNode.id==51){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-49');
                }else if(treeNode.id==52){
                    $('#map2-4').removeClass();
                    $('#map2-4').addClass('map2 clear map2-50');
                }


            }
        },
    };
     var zNodes =[
      { id:11, pId:1, name:"监测站点分布图"},
      { id:111, pId:11, name:"监测站点分布图1"},
      

      { id:12, pId:1, name:"气候分析专题图"},
      { id:121, pId:12, name:"气候分析专题图"},
      

      { id:13, pId:1, name:"实时数据"},
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

    var zNodes2 =[
        { id:21, pId:1, name:"极端干事件频率变换趋势图"},
        { id:22, pId:1, name:"极端湿事件频率变换趋势图"},
        { id:23, pId:1, name:"气温、降水实况分析"},
        { id:24, pId:1, name:"地面观测土壤适度分析"},
        { id:25, pId:1, name:"数据同化系统"},
    ];

    var zNodes3 =[
        { id:31, pId:1, name:"极端干事件频率变换趋势图"},
        { id:32, pId:1, name:"极端湿事件频率变换趋势图"},
        { id:33, pId:1, name:"气温、降水实况分析"},
        { id:34, pId:1, name:"地面观测土壤适度分析"},
    ];

    var zNodes4 =[
        // { id:11, pId:1, name:"监测站点分布图"},
        // { id:111, pId:11, name:"监测站点分布图1"},
        { id:11, pId:1, name:"预警",open:true,chkDisabled:true},
        { id:42, pId:11, name:"3H"},
        { id:43, pId:11, name:"6H"},
        { id:44, pId:11, name:"12H"},
        { id:45, pId:11, name:"24H"},


        { id:12, pId:1, name:"预报"},
        { id:46, pId:12, name:"气温"},
        { id:47, pId:12, name:"降水"},

        { id:13, pId:1, name:"实测"},
        { id:48, pId:13, name:"气温"},
        { id:49, pId:13, name:"气压"},
        { id:50, pId:13, name:"相对湿度"},
        { id:51, pId:13, name:"风"},
        { id:52, pId:13, name:"降水"},

        // { id:14, pId:1, name:"综合"},
    ];
    $.fn.zTree.init($("#tree-list"), setting, zNodes);
    $.fn.zTree.init($("#tree-list2"), setting, zNodes2);
    $.fn.zTree.init($("#tree-list4"), setting, zNodes4);

 
  /*导航标签切换样式*/
   $(".zs-nav-list ul li").on('click',function(){
		$(this).addClass('active-nav').siblings('').removeClass('active-nav')
   })
    
   /*二级导航切换*/
   $(".fun-btn1 ul li").on('click',function(){
      // $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
       $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
       $(".map2").hide().eq($(this).index()).show();
       $(".zs-tree-list").hide().eq($(this).index()).show();
   });
   
   $(".chioce-zq-content").on('click',function(){
      $('.chioce-i').toggleClass('chioce_activ');
      $(".zqList").slideToggle();
   })
    /*条件过滤*/
    $('.search-tj span').on('click',function(){
        $(this).children('i').toggleClass('span-i-icon');
        $(".search-tj-content").eq($(this).index()).slideToggle();
    });
    $(".chioce-zq-content").on('click',function(){
        $('.chioce-i').toggleClass('chioce_activ');
        $(".zqList").slideToggle();
    })
    // 变化分析
    $('.zs-tree-search ul li').click(function(){
        $('.zs-tree-search ul li').removeClass('current')
        $(this).addClass('current');
        $('#map2-2').removeClass().addClass('map2 clear');
        $('#tab').show();
        $('.ztree li a').removeClass('curSelectedNode')
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