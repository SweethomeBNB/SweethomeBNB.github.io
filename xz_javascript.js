/*下拉選單*/
var IO = true;

function toggle() {
    $('.phoneBox').click(function () {
        if (IO == 1) {
            $('header').show();
            $('.phoneBox .bookingBox ').hide();
        }
        else {
            $('header').hide();
            $('.phoneBox .bookingBox ').show();
        }
        IO = -IO;
    })
}
toggle();

    /*phone logo出現消失*/
/*var windowW = $(window).width();
$(window).resize(function () {
    var windowW = $(window).width();
})
if (windowW < 450) {
    $(window).scroll(function () {
        
        var scrollH = $(window).scrollTop();
        if (scrollH > 200) {
            $('.logoB').css({
                'display': 'block'
            });
        }
        else {
            $('.logoB').css({
                'display': 'none'
            });
        }
    })
}*/

/*goTop 捲到最上面*/
$('.goTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
})

       /*header 圖片輪播*/
       $(function(){
	// 圖片張數 
	var count = $(".slide ul li").length;
	
	// 目前顯示的圖片（初始為第1張圖）
	var current = 1;
	
	// 下一張要顯示的圖片
	var next = 2;
	
	// 淡入／淡出效果的時間間隔（每隔幾秒更換圖片。設定為3000毫秒）
	var interval = 3000;
	
	// 淡入／淡出的速度（設定為500毫秒）
	var duration = 1000;
	
	// 用於計時器的變數
	var timer;

	// 隱藏第1張以外的圖片
	$(".slide li:not(:first-child)").hide();

	// 每隔3000毫秒（變數interval的值）執行slideTimer函式
	timer = setInterval(slideTimer, interval);
	
	// slideTimer函式
	function slideTimer(){
		// 將目前顯示的圖片淡出
		$(".slide ul li:nth-child(+" + current + ")").fadeOut(duration);
		//將下一張要顯示的圖片淡入
		$(".slide ul li:nth-child(+" + next + ")").fadeIn(duration);

		// 變數current的新值：變數next原本的值
		current = next;
		// 變數next的新值：變數current的新值+1 
		next = ++next;

		// 當變數next值超過圖片數量時，將值改回1
		if(next > count){
			next = 1;
		}

	}


});

