//__________________________HEADER__________________________//

$(".header-burger").click(function () {
  $(".header-nav").toggleClass("active");
});
$(".header .close").click(function () {
  $(".header-nav").toggleClass("active");
});
$(".nav-link").click(function (event) {
  $(this).closest(".nav-item").find(".sub-menu").toggleClass("open");
  $(this).find("svg").toggleClass("open");
});

//__________________________SLIDERS__________________________//

$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});
if ($(window).width() <= 1024) {
  $(".services-list").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $(".services-section").closest("section").find(".prev"),
    nextArrow: $(".services-section").closest("section").find(".next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
if ($(window).width() <= 768) {
  $(".benefits-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".benefits").find(".prev"),
    nextArrow: $(".benefits").find(".next"),
  });
}
$(".other-blog-list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".other-blog").closest("section").find(".prev"),
  nextArrow: $(".other-blog").closest("section").find(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//__________________________COUNTER__________________________//

$(document).ready(function () {
  let counterShown = false;

  $(window).on("scroll", function () {
    if (!counterShown && isScrolledIntoView($(".count"))) {
      $(".count").each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate(
          { Counter: $this.text().replace(/\D/g, "") },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.ceil(this.Counter));
            },
          }
        );
      });

      counterShown = true;
    }
  });

  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height() - 200;
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return elemTop <= docViewBottom && elemBottom >= docViewTop;
  }
});

//_____________________________FAQ_____________________________//

$(".faq-item").on("click", function () {
  var $parentListItem = $(this).closest("li");
  var $plusIcon = $parentListItem.find(".plus");
  var $answer = $parentListItem.find(".answer");
  $(this).toggleClass("open");
  $plusIcon.toggleClass("open");
  $answer.toggleClass("open");
  if ($answer.hasClass("open")) {
    $(".answer").not($answer).removeClass("open");
    $(".plus").not($plusIcon).removeClass("open");
    $(".faq-item").not(this).removeClass("open");
  }
});
//_____________________________FILTER_____________________________//

$(".area-filter-item").on("click", function () {
  $(".area-filter-item").removeClass("open");
  $(this).addClass("open");
  const filter = $(this).data("filter");
  $(".about-service").each(function () {
    const category = $(this).data("category");
    if (category === filter) {
      $(this).addClass("open");
    } else {
      $(this).removeClass("open");
    }
  });
});

//_____________________________FORM_____________________________//

$(document).ready(function () {
  var $phoneInput = $("#tel");
  var $myForm = $("#myForm");

  $phoneInput.on("input", function (e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

const validation = new JustValidate(".form");
validation
  .addField(".inputName", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField(".phoneInput", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
