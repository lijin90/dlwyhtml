$(function(){
	$('.zs-main-l .control').on('click',function(){
		$('.zs-main-l').toggleClass('toggleHide');
		$('.zs-main-r').toggleClass('showHide');
	})
	$(".zs-nav h4").on('click',function(){
		$(".zs-nav ul").toggle();
	})
	$('.zs-nav ul li').on('click',function(){
		$(this).addClass('selected').siblings('').removeClass('selected');
		$('.zs-subside-container').hide().eq($(this).index()).show();
		$('.r-map-box').hide().eq($(this).index()).show();
	})

	$('.zs-main-m .controls').on('click',function(){
		$(".zs-main-m").toggleClass('showHide');
		$('.zs-subside-container').toggleClass('showHide');
		$('.r-map').toggleClass('showHide');
	})
	$('.zs-ibox .up').on('click',function(){
		$('.content').toggle();
	})
	$('.zs-iboxs .up').on('click',function(){
		$('.contents').toggle();
	})
	$('.cot-tjs li').on('click',function(){
		$(this).addClass('selectedd').siblings('').removeClass('selectedd');
		$('.zhgl-table').hide().eq($(this).index()).show();
		$('.dwsh-content').hide().eq($(this).index()).show();
		$(".cx-header").hide().eq($(this).index()).show();
	})
	$(".cot-tj li").on('click',function(){
		$(this).addClass('selectedd').siblings('').removeClass('selectedd');
		$('.tjfx-table').hide().eq($(this).index()).show();
	})

	$('.yxList ul li').on('click',function(){
		$(this).children('.atrue').toggleClass('atrues');
	})
	$(".closes").on('click',function(){
		$('.yxList').hide();
	})
	$('.c12').on('click',function(){
		$('.yxList').toggle();
	})

})