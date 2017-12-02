$(window).scroll(function(){
    let winW = $(window).width();
	navMainScroll();
	progressBar();
    if(winW > 768) {
        introDishScroll();
        originFirstAnimation();
        originSecondAnimation();
        originThirdAnimation();
        potFirstAnimation();
        potSecondAnimation();
        soupFirstTrigger();
        ingredientAnimation();
    }
});

$(document).ready(function(e) {
    let winW = $(window).width(),
        winH = $(window).height(),
        scrollTop = $(window).scrollTop(),
        originOffset = $('#origin').offset().top,
        originSVGOffset = $('#origin .map').offset().top,
        originHistoryOffset = $("#origin .history").offset().top,
        potPotOffset = $("#pot .pot-1").offset().top,
        originDistance = (originOffset - scrollTop),
        originSVGDistance = (originSVGOffset - scrollTop),
        originHistoryDistance = (originHistoryOffset - scrollTop),
        potPotDistance = (potPotOffset - scrollTop);
    
    navMainScroll();
    progressBar();
    soupIngredients();

    if(winW >= 768) {
        introDishAnimation();
    }
    
    if(originDistance < winH) {
        $("#origin .intro-text").css({"opacity": 1});
        $("#origin .gif-holder").css({"left": "10%"});
        $("#origin .img-holder").css({"left": "63%"});
    }
    
    if(originSVGDistance < 0) {
        $("#origin svg").css({"transform": "scale(3)"});
        $("#origin .map-vector").css({"left": "20%", top: "-40%"});
        $("#Sichuan-2").css({opacity: 1});
        $("#origin .map .map-text").css({opacity: 1});
        $(".map-curtain").css({height: "100vh"});
    }
    
    if(originHistoryDistance < 0) {
        $(".history-cover").css({"opacity": 0});
        $("#origin .layer-1").css({"opacity": 0});
        $("#origin .layer-2").css({"opacity": 0});
        $("#origin .layer-3").css({"opacity": 0});
        $("#origin .layer-4").css({"opacity": 0});
        $("#origin .layer-5").css({"opacity": 0});
        $("#origin .layer-6").css({"opacity": 0});
        $("#origin .layer-7").css({"opacity": 0});
        $("#origin .layer-8").css({"opacity": 0});
        $("#origin .layer-9").css({"transform": "scale(1.2)"});
        $(".history-text").css({opacity: 1});
        $(".history-curtain").css({height: "100vh"}); 
    }
    
    if(potPotDistance < 0) {
        $(".pot-cover").css({"opacity": 0});
        $("#pot .layer-1").css({"opacity": 0});
        $("#pot .layer-2").css({"opacity": 0});
        $("#pot .layer-3").css({"opacity": 0});
        $("#pot .layer-4").css({"opacity": 0});
        $("#pot .layer-5").css({"opacity": 0});
        $("#pot .layer-6").css({"opacity": 0});
        $("#pot .layer-7").css({"opacity": 0});
        $("#pot .layer-8").css({"opacity": 0});
        $("#pot .layer-9").css({"opacity": 0});
        $(".pot-text").css({opacity: 1});
        $(".pot-curtain").css({height: "100vh", "opacity": 1});
        $(".yuan-yang").css({transform: "scale(1)", "margin-left": "0%", "opacity": 1});
        $(".yuan").css({left: "15%"});
        $(".yang").css({left: "29%"});
        $("#pot .content-wrapper p").css({"opacity": 1});
    }
        
});

function navMainScroll() {
    let scrol = $(window).scrollTop();
    
    $(".nav-main").each(function(e,i){
        let sec = $("#"+$(this).data("section"));
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
    let scrol = $(window).scrollTop();
    sec = $('.nav-main.active').data('section');
	secOf = $('#'+sec).offset().top;
	
	winHeight = $(window).height() / 2;
	docHeight = $('#'+sec).height();

	maxi = docHeight - winHeight;
	value = scrol - ( secOf - winHeight);
	
	width = (value/maxi) * 100;
	if(sec === 'intro'){
		width = width - 50;	
	}
	width = width + '%';
	$('.nav-main.active em').css('height',width);
}

function soupIngredients() {
    var image = $("#soup-ingredient-pic");
    $("#bean-paste").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/bean-paste.png");
            image.fadeIn("fast");
        });
    });
    $("#cinnamon").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/cinnamon.png");
            image.fadeIn("fast");
        });
    });
    $("#ginger").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/ginger.png");
            image.fadeIn("fast");
        });
    });
    $("#garlic").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/garlic.png");
            image.fadeIn("fast");
        });
    });
    $("#fennel").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/fennel.png");
            image.fadeIn("fast");
        });
    });
    $("#sand-ginger").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/sand-ginger.png");
            image.fadeIn("fast");
        });
    });
    $("#dried-chili").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/dried-chili.png");
            image.fadeIn("fast");
        });
    });
    $("#star-anise").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/star-anise.png");
            image.fadeIn("fast");
        });
    });
    $("#sichuan-peppercorn").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/peppercorns.png");
            image.fadeIn("fast");
        });
    });
    $("#black-cardamom").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/black-cardamom.png");
            image.fadeIn("fast");
        });
    });
    $("#green-cardamom").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/green-cardamom.png");
            image.fadeIn("fast");
        });
    });
    $("#liquorice").mouseover(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/licorice.png");
            image.fadeIn("fast");
        });
    });
    $("#soup .container ul li").mouseout(function() {
        image.fadeOut("fast", function() {
            image.attr("src", "img/soup-ingredient.png");
            image.fadeIn("fast");
        });
    });
}

function introDishAnimation() {
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
    TweenMax.fromTo(".steam", .7, {scale:.5, opacity:0}, {scale:1.1, opacity:0.3, delay: 2.5, ease:Power4.easeInOut});
}

function introDishScroll() {
    let st = $(window).scrollTop();
    $("#intro .sauce-1").css({"top": 15 - st * 0.01 + "%"});
    $("#intro .sauce-2").css({"top": 5 - st * 0.01 + "%"});
    $("#intro .sauce-3").css({"top": 45 - st * 0.01 + "%"});
    $("#intro .sauce-4").css({"top": 45 - st * 0.01 + "%"});
    $("#intro .pot").css({"top": 12 - st * 0.015 + "%"});
    $("#intro .steam").css({"top": 8 - st * 0.015 + "%"});
    $("#intro .meat-1").css({"top": 15 - st * 0.02 + "%"});
    $("#intro .meat-2").css({"top": 54 - st * 0.02 + "%"});
    $("#intro .veg").css({"top": 1 - st * 0.02 + "%"});
    $("#intro .fish").css({"top": 56 - st * 0.02 + "%"});
    $("#intro .dumpling").css({"top": 49 - st * 0.02 + "%"});
    $("#intro .fruit").css({"top": 1.5 - st * 0.02 + "%"});
    $("#intro .dessert").css({"top": 25 - st * 0.02 + "%"});
}

function originFirstAnimation() {
    let winH = $(window).height(),
        st = $(window).scrollTop(),
        originOffset = $('#origin').offset().top,
        originDistance = originOffset - st,
        originTextOpacity = $("#origin .intro-text").css("opacity");
    
    if(originDistance <= 50 && originTextOpacity === "0") {
        $("#origin").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to("#origin .intro-text", 1.0, {opacity: 1, ease:Power4.easeInOut});
            TweenMax.to("#origin .gif-holder", 1.8, {left:"10%", delay: 0.8, ease:Elastic.easeInOut});
            TweenMax.to("#origin .img-holder", 1.8, {left:"63%", delay: 0.8, ease:Elastic.easeInOut});
            setTimeout(resumeScroll, 3000);
        });
        
        function resumeScroll() {
            $("#origin").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
    }}
    
    $("#origin .gif-holder").css({"top": 85 - st * 0.02 + "%"});
    $("#origin .img-holder").css({"top": 20 - st * 0.01 + "%"});
}

function originSecondAnimation() {
    let st = $(window).scrollTop(),
        originSVGOffset = $("#origin .map").offset().top,
        originDistance = originSVGOffset - st,
        originPOpacity = $("#origin .map-text").css("opacity");

    if(originDistance <= 10 && originPOpacity === "0") {
        $("#origin .map").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to("#origin svg", 2.0, {transform: "scale(3)", ease: SlowMo.ease.config(0.4, 0.4, false)});
            TweenMax.to("#origin .map-vector", 2.0, {left: "20%", top: "-40%", delay:0.4, ease: Power4.easeInOut});
            TweenMax.to("#origin #Sichuan-2", 2.0, {opacity: 1, delay: 2.0, ease:Power4.easeInOut});
            TweenMax.to("#origin .map .map-text", 1.0, {opacity: 1, delay: 3.5, ease:Power4.easeInOut});
            TweenMax.to(".map-curtain", 1.0, {height: "100vh", delay: 4.0, ease:Power4.easeInOut});
            setTimeout(resumeScroll, 5000);
        }); 
        
        function resumeScroll() {
            $("#origin .map").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
        }
    }
}

function originThirdAnimation() {
    let st = $(window).scrollTop(),
        originHistoryOffset = $("#origin .history").offset().top,
        originDistance = originHistoryOffset - st,
        originPOpacity = $("#origin .history-text").css("opacity");
    
    if(originDistance <= 10 && originPOpacity === "0") {
        $("#origin .history").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to(".history-cover", 0.3, {opacity: 0, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-1", 0.3, {opacity: 0, delay: 0.3, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-2", 0.3, {opacity: 0, delay: 0.6, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-3", 0.3, {opacity: 0, delay: 0.9, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-4", 0.3, {opacity: 0, delay: 1.2, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-5", 0.3, {opacity: 0, delay: 1.5, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-6", 0.3, {opacity: 0, delay: 1.8, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-7", 0.3, {opacity: 0, delay: 2.1, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-8", 0.3, {opacity: 0, delay: 2.4, ease:Power0.easeNone});
            TweenMax.to("#origin .layer-9", 2.2, {transform: "scale(1.2)", delay: 2.6, ease:Power3.easeInOut});
            TweenMax.to(".history-text", 1.0, {opacity: 1, delay: 3.8, ease:Power4.easeInOut});
            TweenMax.to(".history-curtain", 1.0, {height: "100vh", delay: 4.5, ease:Power4.easeInOut});
            setTimeout(resumeScroll, 4500);
        }); 
        
        function resumeScroll() {
            $("#origin .history").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
        }
    }
}

function potFirstAnimation() {
    let st = $(window).scrollTop(),
        potPotOffset = $("#pot .pot-0").offset().top,
        potDistance = potPotOffset - st,
        potOpacity = $("#pot .layer-1").css("opacity");
    
    if(potDistance <= 10 && potOpacity === "1") {
        $("#pot").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            TweenMax.to(".pot-cover", 1.0, {opacity: 0, ease:Power3.easeInOut});
            TweenMax.to("#pot .layer-1", 0.3, {opacity: 0, delay: 1.0, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-2", 0.3, {opacity: 0, delay: 1.3, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-3", 0.3, {opacity: 0, delay: 1.6, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-4", 0.3, {opacity: 0, delay: 1.9, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-5", 0.3, {opacity: 0, delay: 2.2, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-6", 0.3, {opacity: 0, delay: 2.5, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-7", 0.3, {opacity: 0, delay: 2.8, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-8", 0.3, {opacity: 0, delay: 3.1, ease:Power0.easeNone});
            TweenMax.to("#pot .layer-9", 0.3, {opacity: 0, delay: 3.4, ease:Power0.easeNone});
            TweenMax.to(".pot-text", 1.0, {opacity: 1, delay: 3.5, ease:Power4.easeInOut});
            TweenMax.to(".pot-curtain", 1.0, {height: "100vh", delay: 4.3, ease:Power4.easeInOut});
            setTimeout(resumeScroll, 4300);
            $(".pot-1").css({"position": "fixed"});
            $(".pot-2").css({"position": "fixed", "bottom":"0%"});
        }); 
        
        function resumeScroll() {
            $("#pot").on("scroll touchmove mousewheel", function(e) { 
                $(this).unbind(); 
            });
        }
    }
}

function potSecondAnimation() {
    let winH = $(window).height(),
        st = $(window).scrollTop(),
        potPotOffset = $("#pot .pot-3").offset().top,
        potDistance = potPotOffset - st,
        potPosition = $(".pot-1").css("position");
    
    if(potPosition === "fixed" && potDistance < winH - 30) {
        let percent = (potDistance) / winH;
        percent = Math.max(0, percent);
        $(".pot-text").css({"opacity": percent});
        $(".pot-curtain").css({"opacity": percent});
        $("#pot .img-wrapper").css({"opacity": percent});
        TweenMax.to(".yuan-yang", 2, {opacity:1, ease:Power0.easeInOut});
        
        if(potDistance < 20 && potPosition === "fixed") {
            $("#pot").on("scroll touchmove mousewheel", function(e) {
                e.preventDefault();
                TweenMax.to(".yuan-yang", 0.7, {transform: "scale(1)", marginLeft: "0%", delay: .5, ease:Power0.easeInOut});
                TweenMax.to(".yuan", 1.5, {left:"15%", delay:0.5, ease:Power4.easeInOut});
                TweenMax.to(".yang", 1.5, {left:"29%", delay:0.5, ease:Power4.easeInOut});
                TweenMax.to("#pot .content-wrapper p", 1, {opacity:1, delay:0.5, ease:Power4.easeInOut});
                setTimeout(resumeScroll, 1500);
            });
            
            function resumeScroll() {
            $("#pot").on("scroll touchmove mousewheel", function(e) { $(this).unbind(); })
            }
        }
    }
}

function soupFirstTrigger() {
    let winH = $(window).height(),
        st = $(window).scrollTop(),
        soupOffset = $("#soup .container").offset().top,
        soupDistance = soupOffset - st,
        potPosition = $(".pot-1").css("position");;
        
    if(soupDistance < winH && potPosition === "fixed") {
        $(".pot-1").css({"position": "absolute"});
        $(".pot-2").css({"position": "absolute"});
        $(".pot-cover").css({"opacity": 0});
        $("#pot .layer-1").css({"opacity": 0});
        $("#pot .layer-2").css({"opacity": 0});
        $("#pot .layer-3").css({"opacity": 0});
        $("#pot .layer-4").css({"opacity": 0});
        $("#pot .layer-5").css({"opacity": 0});
        $("#pot .layer-6").css({"opacity": 0});
        $("#pot .layer-7").css({"opacity": 0});
        $("#pot .layer-8").css({"opacity": 0});
        $("#pot .layer-9").css({"opacity": 0});
        $(".pot-text").css({"opacity": 1});
        $(".pot-curtain").css({"height": "100vh", "opacity": 1});
        $("#pot .img-wrapper").css({"opacity": 1});
    }
}

function ingredientAnimation() {
    
}










