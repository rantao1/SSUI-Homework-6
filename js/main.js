$(window).scroll(function(){
	navMainScroll();
	progressBar();
});

$(document).ready(function(e) {
//    skrollr.init();
    navMainScroll();
    progressBar();
    introAnimation();
});

function navMainScroll() {
    var scrol = $(window).scrollTop();
    
    $(".nav-main").each(function(e,i){
        var sec = $("#"+$(this).data("section"));
            secClass = $(this).data("section");
        
        if (!sec.offset()) return

			if( (scrol+$(window).height()/2) >= sec.offset().top && (sec.offset().top+sec.height()) > scrol && !sec.hasClass("active")){

			$(".nav-main").removeClass("active");
			$("nav li").removeClass("active");

			$(this).addClass("active");
			$("nav li."+secClass).addClass("active");
            }
    });
}

function progressBar() {
    var scrol = $(window).scrollTop();
    sec = $('.nav-main.active').data('section');
	secOf = $('#'+sec).offset().top;
	
	winHeight = $(window).height() / 2;
	docHeight = $('#'+sec).height();

	maxi = docHeight - winHeight;
	value = scrol - ( secOf - winHeight);
	
	width = (value/maxi) * 100;
	if(sec == 'intro'){
		width = width - 50;	
	}
	width = width + '%';
	$('.nav-main.active em').css('height',width);
}

function introAnimation() {
    TweenMax.to(".sauce-1", .2, {top: "15%", delay: 0.1, ease:Power2.easeInOut});
    TweenMax.to(".sauce-2", .2, {top: "5%", delay: 0.1, ease:Power2.easeInOut});
    TweenMax.to(".veg", .25, {top: "1%", delay: 0.15, ease:Power2.easeInOut});
    TweenMax.to(".fruit", .25, {top: "1.5%", delay: 0.1, ease:Power2.easeInOut});
    TweenMax.to(".dessert", .25, {left: "10%", delay: 0.15, ease:Power2.easeInOut});
    TweenMax.to(".meat-1", .25, {left: "77%", delay: 0.15, ease:Power2.easeInOut});
    TweenMax.to(".sauce-3", .2, {left: "75%", delay: 0.1, ease:Power2.easeInOut});
    TweenMax.to(".sauce-4", .2, {left: "25%", delay: 0.1, ease:Power2.easeInOut});
    TweenMax.to(".meat-2", .25, {top: "54%", delay: 0.15, ease:Power2.easeInOut});
    TweenMax.to(".fish", .25, {top: "56%", delay: 0.15, ease:Power2.easeInOut});
    TweenMax.to(".dumpling", .25, {top: "49%", delay: 0.15, ease:Power2.easeInOut});
    TweenMax.to(".pot", .25, {top: "12%", delay: 0.5, ease:Power4.easeInOut});
    TweenMax.to(".wp", .5, {right: 0, delay: 1.5, ease:Power2.easeInOut});
    TweenMax.fromTo([".scroll-hint", "#intro h3", ".title"], .8, {scale:0, opacity:0}, {scale:1, opacity:1, delay: 2, ease:Power4.easeInOut});
    TweenMax.fromTo(".steam", .7, {scale:.5, opacity:0}, {scale:1, opacity:0.3, delay: 2.5, ease:Power4.easeInOut});
}
