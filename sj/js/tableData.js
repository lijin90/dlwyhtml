$(function () {
			$('#reportTable').bootstrapTable({
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
					//$("#pageSizeInput").val(size);
					//$("#pageNumberInput").val(number);
					
					//var form = $('#tableForm');
					//form.action= '${base}/showReport';
					//form.submit();
                },
				//onSort: function (name, order) {
               // },
				//formatShowingRows: function (pageFrom, pageTo, totalRows) {
				//	return '';
               // },
				//formatRecordsPerPage: function () {
				//	return '';
              //  },
                formatNoMatches: function(){
                	return '无符合条件的记录';
                }
			});
								
			$(window).resize(function () {
				$('#reportTable').bootstrapTable('resetView');
			});
		});