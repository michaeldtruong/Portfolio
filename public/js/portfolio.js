"use strict";

var transitionTime = 1000;
var contentShowTime = 500;
var contentDelayTime = 800;
var initialAnimationTime = 2000;
var inHome = true;
var inAbout = false;
var inPortfolio = false;
var inBlog = false;
var inContact = false;

function addBlog(blogs) {
    blogs.forEach(function (blog){
        var content = "";
        content += "<h4>" + blog.title + "</h2>";
        content += "<p>" + blog.content + "</p>";
        content += blog.date;
        $(".blog").append(content);
    });
}

function hideAll() {
    $(".name, #goAbout, #goPortfolio, #goBlog, #goContact").css("pointerEvents", "auto");
    $(".about, .aboutPicture, .portfolio, .banner, .contactContent, .contactForm, .blog").animate({
        opacity: "0"
    }, 600);
    setTimeout(function() {
        $(".about, .aboutPicture, .portfolio, .banner, .contactContent, .contactForm, .blog").css("display", "none");
    }, 600);
}

function bannerAnimation() {
    $("#uiux").animate({
        opacity: "1"
    }, 1000);
    $("#designer").animate({
        opacity: "1"
    }, 1000);
    setTimeout(function() {
        $("#uiux").animate({
            opacity: "0"
        }, 500);
        $("#game").animate({
            opacity: "1"
        }, 1000);
    }, 2000);
    setTimeout(function() {
        $("#game").animate({
            opacity: "0"
        }, 500);
        $("#web").animate({
            opacity: "1"
        }, 1000);
    }, 4000);
    setTimeout(function() {
        $("#designer").animate({
            opacity: "0"
        }, 500);
        $("#developer").animate({
            opacity: "1"
        }, 1000);
    }, 6000);
    setTimeout(function() {
        $("#web").animate({
            opacity: "0"
        }, 500);
        $("#php").animate({
            opacity: "1"
        }, 1000);
    }, 8000);
    setTimeout(function() {
        $("#php").animate({
            opacity: "0"
        }, 500);
        $("#fullStack").animate({
            opacity: "1"
        }, 1000);
    }, 10000);
    setTimeout(function() {
        $("#fullStack").animate({
            opacity: "0"
        }, 500);
        $("#developer").animate({
            opacity: "0"
        }, 500);
    }, 12000);
}

$(window).on('resize', function(){
      if ($(window).width() <= 600) {
        $(".aboutPicture").css("display", "none");
        $(".banner").css("display", "block");
        $(".banner").css("opacity", "1");
        $(".portfolio").css("display", "block");
        $(".portfolio").css("opacity", "1");
        $(".about").css("display", "block");
        $(".about").css("opacity", "1");
        $(".contactContent").css("display", "block");
        $(".contactContent").css("opacity", "1");
        $(".contactForm").css("display", "block");
        $(".contactForm").css("opacity", "1");
        $(".blog").css("display", "none");
      }if ($(window).width() >= 601 && inAbout == true) {
        $(".aboutPicture").css("display", "block");
        $(".portfolio").css("display", "none");
        $(".portfolio").css("opacity", "0");
        $(".banner").css("display", "none");
        $(".banner").css("opacity", "0");
        $(".contactContent").css("display", "none");
        $(".contactContent").css("opacity", "0");
        $(".contactForm").css("display", "none");
        $(".contactForm").css("opacity", "0");
      }if ($(window).width() >= 601 && inHome == true) {
        $(".aboutPicture").css("display", "block");
        $(".portfolio").css("display", "none");
        $(".portfolio").css("opacity", "0");
        $(".about").css("display", "none");
        $(".about").css("opacity", "0");
        $(".contactContent").css("display", "none");
        $(".contactContent").css("opacity", "0");
        $(".contactForm").css("display", "none");
        $(".contactForm").css("opacity", "0");
      }if ($(window).width() >= 601 && inPortfolio == true) {
        $(".aboutPicture").css("display", "block");
        $(".about").css("display", "none");
        $(".about").css("opacity", "0");
        $(".banner").css("display", "none");
        $(".banner").css("opacity", "0");
        $(".contactContent").css("display", "none");
        $(".contactContent").css("opacity", "0");
        $(".contactForm").css("display", "none");
        $(".contactForm").css("opacity", "0");
      }if ($(window).width() >= 601 && inContact == true) {
        $(".aboutPicture").css("display", "block");
        $(".portfolio").css("display", "none");
        $(".portfolio").css("opacity", "0");
        $(".banner").css("display", "none");
        $(".banner").css("opacity", "0");
        $(".about").css("display", "none");
        $(".about").css("opacity", "0");
      }if ($(window).width() >= 601 && inBlog == true) {
        $(".blog").css("display", "block");
        $(".aboutPicture").css("display", "block");
        $(".portfolio").css("display", "none");
        $(".portfolio").css("opacity", "0");
        $(".banner").css("display", "none");
        $(".banner").css("opacity", "0");
        $(".contactContent").css("display", "none");
        $(".contactContent").css("opacity", "0");
        $(".contactForm").css("display", "none");
        $(".contactForm").css("opacity", "0");
        $(".about").css("display", "none");
        $(".about").css("opacity", "0");
      }
});

$('#contactMe').submit(function(ev) { 
    $('#contactMe').animate({
        opacity: '0',
        left: '50px'
    }, 500);
    $('.afterSubmit').animate({
        opacity: '1',
        left: '50px'
    }, 500);
});

window.onload = function() {
    bannerAnimation();
    setInterval(bannerAnimation, 12500);
    $(".name").css("pointerEvents", "none");
    $(".container").animate({
        opacity: "1"
    }, 1700);
    $(".navBar").animate({
        top: "315px",
        left: "215px"
    },initialAnimationTime);
    $(".vline").animate({
        top: "50px",
        left: "200px"
    }, initialAnimationTime);
    $(".name").animate({
        top: "255px",
        left: "50px"
    }, initialAnimationTime);
    $(".hline").animate({
        top: "300px",
        left: "0px"
    }, initialAnimationTime);
    setTimeout(function() {
        $(".banner").animate({
            opacity: "1"
        }, 1000);
    }, 1000);
}


$(".name").click(function(){
    inHome = true;
    inAbout = false;
    inPortfolio = false;
    inBlog = false;
    inContact = false;
    hideAll();
    $(".navBar").animate({
        top: "315px",
        left: "215px"
    },transitionTime);
    $(".vline").animate({
        top: "50px",
        left: "200px"
    }, transitionTime);
    $(".name").animate({
        top: "255px",
        left: "50px"
    }, transitionTime);
    $(".hline").animate({
        top: "300px",
        left: "0px"
    }, transitionTime);
    setTimeout(function() {
        $(".banner").css("display", "block");
        $(".name").css("pointerEvents", "none");
        $(".banner").animate({
            opacity: "1"
        }, contentShowTime);
        $(".blog").html("");
    }, contentDelayTime);
});

$("#goAbout").click(function(){
    inHome = false;
    inAbout = true;
    inPortfolio = false;
    inBlog = false;
    inContact = false;
    hideAll();
    $(".navBar").animate({
        top: "215px",
        left: "475px"
    },transitionTime);
    $(".vline").animate({
        left: "460px"
    }, transitionTime);
    $(".name").animate({
        top: "155px",
        left: "190px"
    }, transitionTime);
    $(".hline").animate({
        top: "200px",
        left: "0px"
    }, transitionTime);
    setTimeout(function() {
        $(".about").css("display", "block");
        $(".aboutPicture").css("display", "block");
        $("#goAbout").css("pointerEvents", "none");
        $(".about").animate({
            opacity: "1"
        }, contentShowTime);
        $(".aboutPicture").animate({
            opacity: "1"
        }, contentShowTime);
        $(".blog").html("");
    }, contentDelayTime);
});

$("#goPortfolio").click(function(){
    inHome = false;
    inAbout = false;
    inPortfolio = true;
    inBlog = false;
    inContact = false;
    hideAll();
    $(".navBar").animate({
        top: "115px",
        left: "615px"
    },transitionTime);
    $(".vline").animate({
        left: "600px"
    }, transitionTime);
    $(".name").animate({
        top: "55px",
        left: "50px"
    }, transitionTime);
    $(".hline").animate({
        top: "100px"
    }, transitionTime);
    setTimeout(function() {
        $(".portfolio").css("display", "block");
        $("#goPortfolio").css("pointerEvents", "none");
        $(".portfolio").animate({
            opacity: "1"
        }, contentShowTime);
        $(".blog").html("");
    }, contentDelayTime);
});

$("#goBlog").click(function(){
    inHome = false;
    inAbout = false;
    inPortfolio = false;
    inBlog = true;
    inContact = false;
    hideAll();
    $.ajax("/data/blog.json").done(function(data) {
        addBlog(data);
    });
    $(".navBar").animate({
        top: "150px",
        left: "125px"
    },transitionTime);
    $(".vline").animate({
        top: "50px",
        left: "200px"
    }, transitionTime);
    $(".name").animate({
        top: "90px",
        left: "50px"
    }, transitionTime);
    $(".hline").animate({
        top: "135px",
        left: "0px"
    }, transitionTime);
    setTimeout(function() {
        $(".blog").css("display", "block");
        $("#goBlog").css("pointerEvents", "none");
        $(".blog").animate({
            opacity: "1"
        }, contentShowTime);
    }, contentDelayTime);
});

$("#goContact").click(function(){
    inHome = false;
    inAbout = false;
    inPortfolio = false;
    inBlog = false;
    inContact = true;
    hideAll();
    $(".navBar").animate({
        top: "203px",
        left: "125px"
    },transitionTime);
    $(".vline").animate({
        top: "50px",
        left: "200px"
    }, transitionTime);
    $(".name").animate({
        top: "143px",
        left: "50px"
    }, transitionTime);
    $(".hline").animate({
        top: "188px",
        left: "0px"
    }, transitionTime);
    setTimeout(function() {
        $(".contactContent").css("display", "block");
        $(".contactForm").css("display", "block");
        $("#goContact").css("pointerEvents", "none");
        $(".contactContent").animate({
            opacity: "1"
        }, contentShowTime);
        $(".contactForm").animate({
            opacity: "1"
        }, contentShowTime);
        $(".blog").html("");
    }, contentDelayTime);
});

$("#goAboutM").click(function() {
    $("body").animate({
        scrollTop: $("#aboutBanner").offset().top
    }, 600);
});

$("#goPortfolioM").click(function() {
    $("body").animate({
        scrollTop: $("#portfolioBanner").offset().top
    }, 600);
});

$("#goContactM").click(function() {
    $("body").animate({
        scrollTop: $("#contactBanner").offset().top
    }, 600);
});