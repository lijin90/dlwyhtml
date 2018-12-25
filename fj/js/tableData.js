$(function () {
			$('#reportTable,#reportTable01,#reportTable03,#reportTable04,#reportTable05,#reportTable06,#reportTable07,#reportTable08').bootstrapTable({
				method: 'get',
				cache: false,
				height: 400,
				striped: false,
				pagination: true,//分页
				paginationShowPageGo: false,
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
							/*{field:"xiao_di_ming",title:"小地名",align:"center",valign:"middle",sortable:"true"}*/
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
			$('#reportTable2,#reportTable2-2,#reportTable2-3').bootstrapTable({
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
					{"user_email":"1","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'},
					{"user_email":"2","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"3","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"4","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"5","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"6","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"7","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"8","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"9","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					,
					{"user_email":"10","user_company":"武汉市环城森林","user_dates":"2018","user_lastlogintime":"北京市","user_version":"海淀区","user_isv2":"清河街道","userstatus_usertype":"清和","userstatus_package_id":"123","userstatus_end_time":"123",'sun_end_time':'地类','xiao_di_ming':'25','xiao_di_ming2':'25','xiao_di_ming3':'是','xiao_di_ming4':'NULL','xiao_di_ming6':'null'}
					
					
					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
			$('#reportTable3-1').bootstrapTable({
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
							{field:"user_email",title:"工程项目",align:"center",valign:"middle",sortable:"true"},
							{field:"user_company",title:"档案名称",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"档案类别",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"简要说明",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"上传人员",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"上传日期",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"附件",align:"center",valign:"middle",sortable:"true"},
						],
				data : [
					{"user_email":"武汉市环城森林生态工程","user_company":"项目实施方案","user_dates":"其他档案","user_lastlogintime":"","user_version":"","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市环城森林生态工程","user_company":"作业设计资料","user_dates":"作业设计类","user_lastlogintime":"","user_version":"张三","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市退耕还林","user_company":"演示文档","user_dates":"检查验收","user_lastlogintime":"","user_version":"","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市天然资源保护","user_company":"设计资料","user_dates":"作业设计类","user_lastlogintime":"","user_version":"李四","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市长防项目","user_company":"演示文档","user_dates":"检查验收","user_lastlogintime":"","user_version":"王五","user_isv2":"2017-04-19","userstatus_usertype":"下载"},
					{"user_email":"武汉市环城森林生态工程","user_company":"项目实施方案","user_dates":"其他档案","user_lastlogintime":"","user_version":"","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市环城森林生态工程","user_company":"作业设计资料","user_dates":"作业设计类","user_lastlogintime":"","user_version":"张三","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市退耕还林","user_company":"演示文档","user_dates":"检查验收","user_lastlogintime":"","user_version":"","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市天然资源保护","user_company":"设计资料","user_dates":"作业设计类","user_lastlogintime":"","user_version":"李四","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市长防项目","user_company":"演示文档","user_dates":"检查验收","user_lastlogintime":"","user_version":"王五","user_isv2":"2017-04-19","userstatus_usertype":"下载"},
					{"user_email":"武汉市天然资源保护","user_company":"设计资料","user_dates":"作业设计类","user_lastlogintime":"","user_version":"李四","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市长防项目","user_company":"演示文档","user_dates":"检查验收","user_lastlogintime":"","user_version":"王五","user_isv2":"2017-04-19","userstatus_usertype":"下载"},
					{"user_email":"武汉市天然资源保护","user_company":"设计资料","user_dates":"作业设计类","user_lastlogintime":"","user_version":"李四","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					{"user_email":"武汉市长防项目","user_company":"演示文档","user_dates":"检查验收","user_lastlogintime":"","user_version":"王五","user_isv2":"2017-04-19","userstatus_usertype":"下载"},

					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
$('#reportTable022').bootstrapTable({
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
							{field:"user_company",title:"巡护员",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"日志日期",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"日志类型",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"日志内容",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"提交时间",align:"center",valign:"middle",sortable:"true"},
						],
				data : [
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"值班","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"值班","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"值班","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"值班","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},
					{"user_email":"张三","user_company":"2017-12-12","user_dates":"巡山","user_lastlogintime":"日志详细内容","user_version":"2017-12-12 14:07:08",},


					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
			$('#reportTable2-41').bootstrapTable({
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
							{field:"user_email",title:"工程项目",align:"center",valign:"middle",sortable:"true"},
							{field:"user_company",title:"验收时间",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"验收单位",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"验收界别",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"规划设计是否齐全",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"抽查面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"核实面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_package_id",title:"核实率(%)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_end_time",title:"合格面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time",title:"合格率(%)",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time1",title:"档案管理情况",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time2",title:"验收结果",align:"center",valign:"middle",sortable:"true"},
						],
				data : [
					{"user_email":"武汉市退耕还林","user_company":"2017-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"150","userstatus_usertype":"150","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},

					{"user_email":"武汉市环城森林","user_company":"2016-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"150","userstatus_usertype":"150","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},

					{"user_email":"武汉市长防","user_company":"2015-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"1500","userstatus_usertype":"1500","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},
					{"user_email":"武汉市退耕还林","user_company":"2017-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"150","userstatus_usertype":"150","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},

					{"user_email":"武汉市环城森林","user_company":"2016-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"150","userstatus_usertype":"150","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},

					{"user_email":"武汉市长防","user_company":"2015-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"1500","userstatus_usertype":"1500","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},
					{"user_email":"武汉市退耕还林","user_company":"2017-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"150","userstatus_usertype":"150","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},

					{"user_email":"武汉市环城森林","user_company":"2016-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"150","userstatus_usertype":"150","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},

					{"user_email":"武汉市长防","user_company":"2015-02-15","user_dates":"武汉市园林","user_lastlogintime":"市级检查","user_version":"规划设计齐全","user_isv2":"1500","userstatus_usertype":"1500","userstatus_package_id":"100","userstatus_end_time":"149",'sun_end_time':'99','sun_end_time1':'档案管理规范','sun_end_time2':'验收通过'},

					
					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
$('#reportTable2-42').bootstrapTable({
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
							{field:"user_email",title:"",align:"center",valign:"middle",sortable:"true"},
							{field:"user_company",title:"项目名称",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"支出年度",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"支出日期",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"资金来源",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"资金用途",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"资金额度(万元)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_package_id",title:"经办人",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_end_time",title:"申报时间",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time",title:"申报单位",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time1",title:"审批人",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time2",title:"审批时间",align:"center",valign:"middle",sortable:"true"},
							{field:"sun_end_time3",title:"其他说明",align:"center",valign:"middle",sortable:"true"},
						],
				data : [
					{"user_email":"1","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"上级政府投资","user_isv2":"项目管理费","userstatus_usertype":"10","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"2","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"上级政府投资","user_isv2":"作业设计费","userstatus_usertype":"10","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"3","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"上级政府投资","user_isv2":"文档材料费","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"4","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"地方配套","user_isv2":"苗木费用费","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"5","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"地方配套","user_isv2":"作业设计","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"6","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"地方配套","user_isv2":"作业设计","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'青山区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"1","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"上级政府投资","user_isv2":"项目管理费","userstatus_usertype":"10","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"2","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"上级政府投资","user_isv2":"作业设计费","userstatus_usertype":"10","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"3","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"上级政府投资","user_isv2":"文档材料费","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"4","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"地方配套","user_isv2":"苗木费用费","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"5","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"地方配套","user_isv2":"作业设计","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'江夏区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},
					{"user_email":"6","user_company":"武汉市环城森林","user_dates":"2017","user_lastlogintime":"2017-02-02","user_version":"地方配套","user_isv2":"作业设计","userstatus_usertype":"5","userstatus_package_id":"2刘明","userstatus_end_time":"2017-02-02",'sun_end_time':'青山区','sun_end_time1':'王敏','sun_end_time2':'2017-01-05','sun_end_time3':''},

					

					
					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});

$('#reportTable001').bootstrapTable({
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
							{field:"user_company",title:"GPS坐标X",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"GPS坐标Y",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"宣传牌标题",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"时间",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"地名",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv3",title:"规格",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv4",title:"材质",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv5",title:"附件",align:"center",valign:"middle",sortable:"true"},
						],
				data : [
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"保护区管**","user_isv3":"4米*6米","user_isv4":"铁架结构","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"保护区管**","user_isv3":"4米*6米","user_isv4":"铁架结构","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"张树","user_isv3":"4米*6米","user_isv4":"不锈钢","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"保护区管**","user_isv3":"4米*6米","user_isv4":"铁架结构","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"保护区管**","user_isv3":"4米*6米","user_isv4":"铁架结构","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"保护区管**","user_isv3":"4米*6米","user_isv4":"铁架结构","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"法规宣传","user_version":"2015-11-11","user_isv2":"保护区管**","user_isv3":"4米*6米","user_isv4":"铁架结构","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"张树","user_isv3":"4米*6米","user_isv4":"不锈钢","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"环保宣传","user_version":"2015-11-11","user_isv2":"张树","user_isv3":"4米*6米","user_isv4":"不锈钢","user_isv5":"浏览",},
					{"user_company":"113.254","user_dates":"24.58441","user_lastlogintime":"防火宣传","user_version":"2015-11-11","user_isv2":"张树","user_isv3":"4米*6米","user_isv4":"不锈钢","user_isv5":"浏览",},


					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
$('#reportTable2-5').bootstrapTable({
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
							{field:"user_email",title:"工程项目",align:"center",valign:"middle",sortable:"true",},
							{field:"user_company",title:"项目性质",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"工程类别",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"项目立项时间",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"项目批准单位",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"项目批准时间",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"计划投资(万元)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv3",title:"实施面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv4",title:"项目批准文号",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv5",title:"项目建设单位",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv6",title:"项目负责人",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv7",title:"施工周期",align:"center",valign:"middle",sortable:"true"},
							/*{field:"user_isv8",title:"项目进度状态",align:"center",valign:"middle",sortable:"true"},*/
						],
				data : [
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},
					{"user_email":"长防林工程","user_company":"省级重点项目","user_dates":"长方林工程","user_lastlogintime":"2017-04-03","user_version":"发改委","user_isv2":"2012-05-02","userstatus_usertype":"500","user_isv3":"2800","user_isv4":"","user_isv5":"青山区","user_isv6":"","user_isv7":"2002年",},

					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
$('#reportTable2-6').bootstrapTable({
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
							{field:"user_email",title:"工程项目",align:"center",valign:"middle",sortable:"true"},
							{field:"user_company",title:"计划年度",align:"center",valign:"middle",sortable:"true"},
							{field:"user_dates",title:"所在区",align:"center",valign:"middle",sortable:"true"},
							{field:"user_lastlogintime",title:"计划投资(万元)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_version",title:"上级政府投资(万元)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv2",title:"地方配套(万元)",align:"center",valign:"middle",sortable:"true"},
							{field:"userstatus_usertype",title:"建设单位自筹(万元)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv3",title:"社会投入(万元)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv4",title:"人工造林计划面积(亩)",align:"center",valign:"middle",sortable:"true"},
							{field:"user_isv5",title:"封山育林计划面积(亩)",align:"center",valign:"middle",sortable:"true"},
							/*{field:"user_isv6",title:"其他说明",align:"center",valign:"middle",sortable:"true"},*/
						],
				data : [
					{"user_email":"武汉市环城森林","user_company":"2015","user_dates":"青山区","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2014","user_dates":"汉阳","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2013","user_dates":"江夏","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2012","user_dates":"青山区","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2015","user_dates":"青山区","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2014","user_dates":"汉阳","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2013","user_dates":"江夏","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2012","user_dates":"青山区","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2015","user_dates":"青山区","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2014","user_dates":"汉阳","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2013","user_dates":"江夏","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					{"user_email":"武汉市环城森林","user_company":"2012","user_dates":"青山区","user_lastlogintime":"500","user_version":"300","user_isv2":"100","userstatus_usertype":"100","user_isv3":"0","user_isv4":"5000","user_isv5":"",},
					

					],
				onPageChange: function (size, number) {
                },
				
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
			$(window).resize(function () {
				$('#reportTable,#reportTable01,#reportTable03,#reportTable04,#reportTable05,#reportTable06,#reportTable07,#reportTable08').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable2').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable3-1').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable2-41').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable2-42').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable022').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable001').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable2-5').bootstrapTable('resetView');
			});
			$(window).resize(function () {
				$('#reportTable2-6').bootstrapTable('resetView');
			});
			
		});