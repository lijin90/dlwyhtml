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
    ];

    var zNodes2 =[
      { id:11, pId:1, name:"实时降水专题图"},
      { id:12, pId:1, name:"实时气压专题图"},
      { id:13, pId:1, name:"实时风速专题图"},
      { id:14, pId:1, name:"实时相对专题图"},
      { id:15, pId:1, name:"气象统计表"},
       { id:15, pId:1, name:"气象统计图"},
      
    ];

    var zNodes3 =[
      { id:11, pId:1, name:"实时干湿度指数"},
      { id:12, pId:1, name:"实时干湿度专题图"},
      { id:13, pId:1, name:"实时干湿指数预警专题图"},
      { id:14, pId:1, name:"实时干湿指数变化图"},
      { id:15, pId:1, name:"年度干湿指数演讲变化图"},
       { id:15, pId:1, name:"干湿指数发展预测分布图"},    
    ];
     
   
      $.fn.zTree.init($("#tree-list"), setting, zNodes);
      $.fn.zTree.init($("#tree-list5"), setting, zNodes);
      $.fn.zTree.init($("#tree-list6"), setting, zNodes);
   function zTreeOnCheck(event, treeId, treeNode) {

   };
    $('#tree-list2_1_span,#tree-list3_1_span').css('color','orange')
  /*导航标签切换样式*/
   $(".zs-nav-list ul li").on('click',function(){
		$(this).addClass('active-nav').siblings('').removeClass('active-nav')
   })
   /*table切换*/
   $(".fun-btn2 ul li").click(function(){
       /* $("ul li").eq($(this).index()).addClass("select").siblings().removeClass('select');*/
        $(this).addClass("fun-btn2-active").siblings().removeClass('fun-btn2-active')
        $(".map2").hide().eq($(this).index()).show();
        $(".zs-tree-list").hide().eq($(this).index()).show();
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