$(function(){
	
     $(".other").hover(function(){
			$(".menu-content").toggle();
	});
	
	 $(".zhikuother").hover(function(){
			$(".zhiku-menu-content").toggle();
	});
	
	$(".evlauteMy span").mouseover(function(){
            var _this = $(this).index();
             $(this).addClass("current").siblings().removeClass("current");
             $(this).parent(".evlauteMy").siblings(".evlautCont").find("div.con").eq(_this).fadeIn(0).siblings().fadeOut(0);
    }); 
    $(".evlauteMy span").on("mouseenter mouseleave",function(event){
            if (event.type == "mouseenter") {
                $(this).addClass("active").siblings().removeClass("active");
            }
    });
    
    /*service begin*/
    $(".service-tab li").mouseover(function(){
    	var _this=$(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".service-con>div").eq(_this).show().siblings().hide();
    })
    /*service end*/
    
    $(".blcl-tab li").mouseover(function(){
    	var _this=$(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".blcl-con>div").eq(_this).show().siblings().hide();
    })
    $(".dzblcl-tab li").mouseover(function(){
    	var _this=$(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".dzblcl-con>div").eq(_this).show().siblings().hide();
    })
    
    $(".sblc-tab>li.sblc1").mouseover(function(){
    	var _this=$(this).index();
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".sblc-con div.innercon").eq(_this).show().siblings().hide();
    })  
    
    $("ul.cityqh>li").hover(function(){
    	$(".city-content").slideDown(300);
    },function(){
    	$(".city-content").slideUp(300);
    })
    
    $(".menu-content li").hover(function(){
    	$(this).addClass("active");
    	$(this).find("div.listbox").show();
    },function(){
    	$(this).removeClass("active");
    	$(this).find("div.listbox").hide();
    })
    
    $(".zhiku-menu-content li").hover(function(){
    	$(this).addClass("active");
    	$(this).find("div.zhiku-listbox").show();
    },function(){
    	$(this).removeClass("active");
    	$(this).find("div.zhiku-listbox").hide();
    })
    
   
   
    /*banner begin*/
     
    /*banner end*/
    $("#fwqynum").prop('number',0).animateNumber({number:8528},2000);
    $("#snzcnum").prop('number',0).animateNumber({number:5923},2000);
    $("#flfwnum").prop('number',0).animateNumber({number:3289},2000);
   
    
    var count = 0, timer;
    var rotate = function() {
        var elem = document.getElementById('gear');
        elem.style.MozTransform = 'rotate('+count+'deg)';
        elem.style.WebkitTransform = 'rotate('+count+'deg)';
        if (count==360) { count = 0 }
        count += -10;
    }
    $('#gear').on('mouseover',function(){
        timer = setInterval(rotate, 65);
    }).on('mouseout',function(){
        timer = clearInterval(timer);
    });
    var rotate = function() {
        var elem = document.getElementById('gear1');
        elem.style.MozTransform = 'rotate('+count+'deg)';
        elem.style.WebkitTransform = 'rotate('+count+'deg)';
        if (count==360) { count = 0 }
        count += -10;
    }
    $('#gear1').on('mouseover',function(){
        timer = setInterval(rotate, 65);
    }).on('mouseout',function(){
        timer = clearInterval(timer);
    });
	
	$('#close_im').bind('click',function(){

		$('#main-im').css("height","0");

		$('#im_main').hide();

		$('#open_im').show();

	});

	$('#open_im').bind('click',function(e){

		$('#main-im').css("height","272");

		$('#im_main').show();

		$(this).hide();

	});

	$('.go-top').bind('click',function(){

		$(window).scrollTop(0);

	});

	$(".weixing-container").bind('mouseenter',function(){

		$('.weixing-show').show();

	})

	$(".weixing-container").bind('mouseleave',function(){        

		$('.weixing-show').hide();

	});
	

	 var isactive = true;

    $(".nav a").each(function(){

        if($(this).attr('class')=="rednav"){

            isactive = false;

        }

    });

    if(isactive){

        $(".nav a:eq(0)").attr('class', "rednav");

    }
	
	
	
	
	 $(".sbtab li").mouseover(function(){

            var _this = $(this).index();

            $(this).addClass("fred").siblings().removeClass("fred");

            $(".sbtab-con > div").eq(_this).show().siblings().hide();

        });
	
	
	$(".szcon li").click(function(){
		if($(this).find("div").is(":visible")){
			$(this).find("div").slideUp();
		}else{
			$(this).find("div").slideDown();
			$(this).siblings().find("div").slideUp();
		}
	});
	
	$(".rhfw-con").mouseenter(function(){
		$lines=$(this).find(".line");
		$lines.each(function(index){
            switch (index) {
            case 0:
                $(this).animate({left:0},'500');
                break;
            case 1:
                $(this).animate({top:0},'500');
                break;
            case 2:
                $(this).animate({right:0},'500');
                break;
            case 3:
                $(this).animate({bottom:0},'500');
                break;
            }
        });
	}).mouseleave(function(){
		$lines=$(this).find(".line");
		$lines.each(function(index){
           switch (index) {
            case 0:
                $(this).animate({left:260},'500');
                break;
            case 1:
                $(this).animate({top:250},'500');
                break;
            case 2:
                $(this).animate({right:260},'500');
                break;
            case 3:
                $(this).animate({bottom:250},'500');
                break;
            }
        });
	})
	
	
	
    
    /*智库*/
   jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
   
   
    
   
   
   
})



