$(".header-burger").click((function(){$(".header-nav").toggleClass("active")})),$(".header .close").click((function(){$(".header-nav").toggleClass("active")})),$(".nav-link").click((function(e){$(this).closest(".nav-item").find(".sub-menu").toggleClass("open"),$(this).find("svg").toggleClass("open")})),$(".hero-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:5e3,fade:!0,cssEase:"ease-in-out",pauseOnHover:!1}),$(window).width()<=1024&&$(".services-list").slick({slidesToShow:2,slidesToScroll:2,prevArrow:$(".services-section").closest("section").find(".prev"),nextArrow:$(".services-section").closest("section").find(".next"),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(window).width()<=768&&$(".benefits-list").slick({slidesToShow:1,slidesToScroll:1,prevArrow:$(".benefits").find(".prev"),nextArrow:$(".benefits").find(".next")}),$(".other-blog-list").slick({slidesToShow:3,slidesToScroll:1,prevArrow:$(".other-blog").closest("section").find(".prev"),nextArrow:$(".other-blog").closest("section").find(".next"),responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(document).ready((function(){let e=!1;$(window).on("scroll",(function(){var s,o,i,n,t;!e&&(s=$(".count"),o=$(window).scrollTop(),i=o+$(window).height()-0,n=s.offset().top,t=n+s.height(),n<=i&&t>=o)&&($(".count").each((function(){var e=$(this);$({Counter:0}).animate({Counter:e.text().replace(/\D/g,"")},{duration:2e3,easing:"swing",step:function(){e.text(Math.ceil(this.Counter))}})})),e=!0)}))})),$(".faq-item").on("click",(function(){var e=$(this).closest("li"),s=e.find(".plus"),o=e.find(".answer");$(this).toggleClass("open"),s.toggleClass("open"),o.toggleClass("open"),o.hasClass("open")&&($(".answer").not(o).removeClass("open"),$(".plus").not(s).removeClass("open"),$(".faq-item").not(this).removeClass("open"))})),$(document).ready((function(){var e=$("#tel");$("#myForm");e.on("input",(function(e){var s=e.target.value.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);e.target.value=s[2]?"("+s[1]+") "+s[2]+(s[3]?"-"+s[3]:""):s[1]}))}));const validation=new JustValidate(".form");validation.addField(".inputName",[{rule:"required",errorMessage:"Name is required"},{rule:"minLength",value:2}]).addField(".phoneInput",[{rule:"required",errorMessage:"Phone number is required"},{rule:"minLength",value:14,errorMessage:"The field must contain a minimum of 10 characters"}]).addField("#email",[{rule:"required",errorMessage:"Email is required"},{rule:"email",errorMessage:"Email is invalid!"}]);