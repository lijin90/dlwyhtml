$(function () {
			$('#reportTable,#reportTable2,#reportTable3,#reportTable4,#reportTable5,#reportTable6,#reportTable7,#reportTable07,#reportTable08').bootstrapTable({
				method: 'get',
				cache: false,
				height: 400,
				striped: false,
				pagination: true,//分页
				paginationShowPageGo: true,
				pageSize: 20,
				pageNumber:1,
				pageList: [10, 20, 50, 100, 200, 500],
				search: false,
				showColumns: false,//th（toggle）
				showRefresh: false,//刷新
				showExport: false,
				exportTypes: ['csv','txt','xml'],
				search: false,//搜索
				clickToSelect: true,

				columns: [	
							{ field: 'checked', checkbox: true },
							{field:"user_email",title:"序号",align:"center",valign:"middle",sortable:"true"},
							{field:"user_company",title:"省",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"市",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"保护区名称",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"管理单位",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"建设年度",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"封禁类别",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_package_id",title:"面积",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_end_time",title:"经度",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time",title:"纬度",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming",title:"小地名",align:"center",valign:"middle",sortable:"true"}
						],
				data : [
					{"user_email":"1","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"2","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"3","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"4","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"5","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"6","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"7","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"8","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"9","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					{"user_email":"10","user_company":"内蒙古","user_dates":"阿拉善","user_lastlogintime":"内蒙古自治区新巴尔虎左旗嵯岗国家沙化土地封禁保护区","user_version":"国家林业局","user_isv2":"2018","userstatus_usertype":"固沙压沙","userstatus_package_id":"12122","userstatus_end_time":"123.45",'sun_end_time':'125.65','xiao_di_ming':'阿拉善'},
					
					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
			$('#reportTable2,#reportTable2-2,#reportTable2-3,#reportTable2-4').bootstrapTable({
				method: 'get',
				cache: false,
				height: 400,
				striped: false,
				pagination: true,//分页
				paginationShowPageGo: true,
				pageSize: 20,
				pageNumber:1,
				pageList: [10, 20, 50, 100, 200, 500],
				search: false,
				showColumns: false,//th（toggle）
				showRefresh: false,//刷新
				showExport: false,
				exportTypes: ['csv','txt','xml'],
				search: false,//搜索
				clickToSelect: true,

				columns: [	
							{ field: 'checked', checkbox: true },
							{field:"user_email",title:"序号",align:"center",valign:"middle",sortable:"true"},
							{field:"user_company",title:"项目名称",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"作业年度",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"市",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"区名称",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"乡镇名称",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"村名",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_package_id",title:"验收小班号",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_end_time",title:"设计小班号",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time",title:"原地类",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming",title:"坡度",align:"center",valign:"middle",sortable:"true"},

							{field:"xiao_di_ming2",title:"土层厚度",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming3",title:"立地特征是否合格",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming4",title:"整地方式",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming5",title:"整地规格",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming6",title:"整地是否合格",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming7",title:"林种",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming8",title:"造林林种",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming9",title:"栽植方式",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming10",title:"造林时间",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming11",title:"初值密度",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming12",title:"成活率%",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming13",title:"保护率%",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming14",title:"上报面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming15",title:"核实面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming16",title:"合格面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming17",title:"补植面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming18",title:"重造面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming19",title:"苗木合格面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming20",title:"检查验收人员",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming",title:"验收时间",align:"center",valign:"middle",sortable:"true"},
							{field:"xiao_di_ming",title:"备注",align:"center",valign:"middle",sortable:"true"}

							
						],
				data : [
					{"user_email":"1","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'},
					{"user_email":"2","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"3","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"4","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"5","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"6","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"7","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"8","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"9","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"10","user_company":"武汉市换成","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					
					
					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
			$('#reportTable3,#reportTable4').bootstrapTable({
				method: 'get',
				cache: false,
				height: 400,
				striped: false,
				pagination: true,//分页
				paginationShowPageGo: true,
				pageSize: 20,
				pageNumber:1,
				pageList: [10, 20, 50, 100, 200, 500],
				search: false,
				showColumns: false,//th（toggle）
				showRefresh: false,//刷新
				showExport: false,
				exportTypes: ['csv','txt','xml'],
				search: false,//搜索
				clickToSelect: true,

				columns: [	
							{ field: 'checked', checkbox: true },
							{field:"user_email",title:"序号",align:"center",valign:"middle",sortable:"true"},
							{field:"user_company",title:"年份",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"经纬度",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"海拔高度(km)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"年度最低气温(°C)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"年度最高气温(°C)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"降水量(mm)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_package_id",title:"平均风速(m/s)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_end_time",title:"相对湿度(%)",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time",title:"日照时数(h)",align:"center",valign:"middle",sortable:"true"}
						],
				data : [
					{"user_email":"1","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"12","user_version":"12","user_isv2":"20","userstatus_usertype":"10","userstatus_package_id":"2.5","userstatus_end_time":"15",'sun_end_time':'4'},

					{"user_email":"2","user_company":"2011-05-05","user_dates":"98°16'13.21","user_lastlogintime":"52","user_version":"11","user_isv2":"30","userstatus_usertype":"20","userstatus_package_id":"2.1","userstatus_end_time":"15",'sun_end_time':'4'},

					{"user_email":"3","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"3","user_version":"0","user_isv2":"31","userstatus_usertype":"20","userstatus_package_id":"2.5","userstatus_end_time":"0",'sun_end_time':'8'},

					{"user_email":"4","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"8","user_version":"5","user_isv2":"20","userstatus_usertype":"10","userstatus_package_id":"2.5","userstatus_end_time":"15",'sun_end_time':'4'},


					{"user_email":"5","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"4","user_version":"3","user_isv2":"30","userstatus_usertype":"22","userstatus_package_id":"2.5","userstatus_end_time":"15",'sun_end_time':'4'},

					{"user_email":"6","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"3","user_version":"2","user_isv2":"20","userstatus_usertype":"23","userstatus_package_id":"2.5","userstatus_end_time":"15",'sun_end_time':'4'},

					{"user_email":"7","user_company":"2011-05-05","user_dates":"98°16'13.21","user_lastlogintime":"4","user_version":"1","user_isv2":"10","userstatus_usertype":"26","userstatus_package_id":"2.1","userstatus_end_time":"15",'sun_end_time':'6'},

					{"user_email":"8","user_company":"2011-05-05","user_dates":"98°16'13.21","user_lastlogintime":"5","user_version":"1","user_isv2":"20","userstatus_usertype":"34","userstatus_package_id":"2.1","userstatus_end_time":"15",'sun_end_time':'4'},

					{"user_email":"9","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"10","user_version":"0","user_isv2":"20","userstatus_usertype":"50","userstatus_package_id":"2.5","userstatus_end_time":"0",'sun_end_time':'4'},

					{"user_email":"10","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"0","user_version":"0","user_isv2":"23","userstatus_usertype":"20","userstatus_package_id":"2.5","userstatus_end_time":"0",'sun_end_time':'4'},

					{"user_email":"11","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"12","user_version":"0","user_isv2":"31","userstatus_usertype":"0","userstatus_package_id":"2.5","userstatus_end_time":"0",'sun_end_time':'4'},

					{"user_email":"12","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"16","user_version":"0","user_isv2":"36","userstatus_usertype":"10","userstatus_package_id":"2.5","userstatus_end_time":"15",'sun_end_time':'16'},

					{"user_email":"13","user_company":"2016-15-20","user_dates":"98°16'13.21","user_lastlogintime":"21","user_version":"0","user_isv2":"28","userstatus_usertype":"20","userstatus_package_id":"2.5","userstatus_end_time":"0",'sun_end_time':'4'},
					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
			$(window).resize(function () {
				$('#reportTable,#reportTable1,#reportTable2,#reportTable3,#reportTable5,#reportTable6,#reportTable7,#reportTable08').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable2').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable3,#reportTable4').bootstrapTable('resetView');
			});
			
		});