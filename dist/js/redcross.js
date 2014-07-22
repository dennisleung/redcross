$(document).ready(function(){
	detailPSetting();
});


$(window).resize(function(){
	//alert(this instanceof jQuery);
});

$(window).load(function(){
	activeLi = $('#title-panel .tab-pane .active').eq(0);
	setArrow(activeLi);
});

var detailPSetting = function(){
	//titleP position setting
	titleP = $('#title-panel');
	detailP = $('#detail-panel');
	height = titleP.height();
	detailP.css('height',height);

	//a setting
	a = $('#title-panel .tab-pane a');
	str = "";
	a.each(function(index){
		a.eq(index).click(function(){
			//这里通过传递num属性值来动态显示detail,需要后台处理
			item = $(this);
			str = item.html();
			detail = $('.detail-caption').eq(0);
			detail.html(str);

			//点击链接后添加样式，同时移除其他li的样式
			item.parent().addClass('active').siblings().removeClass('active');

			//animate for arrow
			setArrow(item);
		});
	});
}

//animate for arrow
var setArrow = function(obj){
	y = obj.offset().top;
	w = parseInt($('.triangle .back').css('border-right')) + parseInt($('.triangle .back').css('margin-left')) - 3;
	x = $('#detail-panel').offset().left - w;
	arrow = $('.triangle');
	arrow.css('left',x + 'px');
	arrow.css('top',y + 'px');
}