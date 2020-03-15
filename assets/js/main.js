/*------------------------------------------------------
[Table of contents]

1. Preloader
2. Navigation
3. Back to top
4. Page Cover
5. Backgrounds
6. Masonry
7. Lightbox
8. Slider
9. Mailchimp
10. Contact Form
11. Plugins
-------------------------------------------------------*/

! function (n) {
    "use strict";
    var a = n("body"),
        e = n("#preloader"),
        s = n("#navigation-toggle");

    function i() {
        return Math.max(n(window).width(), window.innerWidth)
    }

    function o(e) {
        var t = n(window).scrollTop();
        return .5 * Math.abs(t - e)
    }

    function t() {
        var e = n("#backtotop"),
            t = n(window).scrollTop();
        576 <= i() && 200 < t ? e.addClass("show") : e.removeClass("show")
    }

    function r() {
        var e = n("#page-cover");
        if (0 < e.length) {
            var a = Math.max(n("#page-cover .page-cover-wrap").height(), n("#page-cover .page-cover-wrap").innerHeight()),
                i = (e.offset().top, n("#page-cover section .container")),
                s = 0;
            e.css("height", a), n(window).on("scroll", function () {
                var e = n(window).scrollTop();
                if (e < a) {
                    var t = (100 - 100 * e / a) / 100;
                    i.css("opacity", t), s < e ? "up" : "down", s = e
                }
            })
        }
    }

    function l() {
        if (0 < n(".isotope-container").length) {
            var t = n(".isotope-container");
            if (null == (e = t.data("column-width"))) var e = ".isotope-item";
            t.isotope({
                filter: "*",
                animationEngine: "best-available",
                resizable: !1,
                itemSelector: ".isotope-item",
                masonry: {
                    columnWidth: e
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), t.imagesLoaded().progress(function () {
                t.isotope("layout")
            })
        }
        n("nav.isotope-filter ul a").on("click", function () {
            var e = n(this).attr("data-filter");
            return t.isotope({
                filter: e
            }), n("nav.isotope-filter ul a").removeClass("active"), n(this).addClass("active"), !1
        })
    }

    function c() {
        var e = n(".slider");
        0 < e.length && (e.hasClass("slick-initialized") || e.slick({
            slidesToShow: 1,
            infinite: !0,
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>'
        }), i() <= 1199 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-xl") && e.slick("unslick"), i() <= 991 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-lg") && e.slick("unslick"), i() <= 767 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-md") && e.slick("unslick"), i() <= 575 && e.hasClass("slick-initialized") && e.hasClass("slick-destroy-sm") && e.slick("unslick"))
    }
    n(window).on("load", function () {
        e.delay(1200).fadeOut(500)
    }), n(document).ready(function () {
        ! function () {
            var t = "site-header-open";
            a.on("click", "#navigation-toggle", function (e) {
                e.preventDefault(), n(this).hasClass("open") ? (n(this).removeClass("open"), a.removeClass(t)) : (n(this).addClass("open"), a.addClass(t))
            }), a.on("click", ".header-overlay", function () {
                a.hasClass(t) && s.hasClass("open") && s.trigger("click")
            }), n(document).keyup(function (e) {
                27 == e.keyCode && a.hasClass(t) && s.trigger("click")
            }), 0 < n("#backtotop").length && n("body").on("click", "#backtotop", function (e) {
                e.preventDefault();
                var t = o(0);
                return n("html, body").animate({
                    scrollTop: 0
                }, t, "easeOutQuad"), !1
            }), n("body").on("click", "a.scrollto", function (e) {
                if ("" !== this.hash && 0 < n(this.hash).length) {
                    e.preventDefault();
                    var t = this.hash,
                        a = n(t).offset().top,
                        i = o(a);
                    n(".page-cover " + t).length && (i = o(a = n(t).offset().top - n(window).scrollTop())), n("html, body").stop().animate({
                        scrollTop: a
                    }, i, "easeOutQuad", function () {
                        window.location.hash = t
                    }), s.hasClass("open") && s.trigger("click")
                }
            })
        }(), r(),
            function () {
                var e = n(".bg-image-holder");
                if (e.length && e.each(function () {
                        var e = n(this).children("img").attr("src");
                        n(this).css("background-image", "url(" + e + ")").children("img").hide()
                    }), a.hasClass("slideshow-background") && a.vegas({
                        preload: !0,
                        timer: !1,
                        delay: 5e3,
                        transition: "fade",
                        transitionDuration: 1e3,
//                        slides: [{
//                            src: "demo/images/image-15.jpg"
//                        }, {
//                            src: "demo/images/image-16.jpg"
//                        }, {
//                            src: "demo/images/image-10.jpg"
//                        }, {
//                            src: "demo/images/image-14.jpg"
//                        }]
                    }), a.hasClass("slideshow-zoom-background") && a.vegas({
                        preload: !0,
                        timer: !1,
                        delay: 7e3,
                        transition: "zoomOut",
                        transitionDuration: 4e3,
//                        slides: [{
//                            src: "demo/images/image-7.jpg"
//                        }, {
//                            src: "demo/images/image-16.jpg"
//                        }, {
//                            src: "demo/images/image-17.jpg"
//                        }, {
//                            src: "demo/images/image-15.jpg"
//                        }]
                    }), a.hasClass("kenburns-background")) {
                    a.vegas({
                        preload: !0,
                        transition: "swirlLeft2",
                        transitionDuration: 4e3,
                        timer: !1,
                        delay: 1e4,
//                        slides: [{
//                            src: "demo/images/image-1.jpg",
//                            valign: "center"
//                        }, {
//                            src: "demo/images/image-14.jpg",
//                            valign: "top"
//                        }, {
//                            src: "demo/images/image-17.jpg",
//                            valign: "center"
//                        }],
                        walk: function (e) {}
                    })
                }
                a.hasClass("mobile") && n(".video-wrapper").css("display", "none"), n("[data-gradient-bg]").each(function (e, t) {
                    var a = n(this),
                        i = "granim-" + e,
                        s = (s = (s = a.attr("data-gradient-bg")).replace(" ", "")).replace(/'/g, '"');
                    s = JSON.parse(s), a.prepend('<canvas id="' + i + '"></canvas>');
                    new Granim({
                        element: "#" + i,
                        name: "basic-gradient",
                        direction: "left-right",
                        opacity: [1, 1],
                        isPausedWhenNotInView: !0,
                        states: {
                            "default-state": {
                                gradients: s
                            }
                        }
                    })
                })
            }(), c(), l(),
            function () {
                if (!n().featherlight) return console.log("Featherlight: featherlight not defined.");
                n.extend(n.featherlight.defaults, {
                    closeIcon: '<i class="fas fa-times"></i>'
                }), n.extend(n.featherlightGallery.defaults, {
                    previousIcon: '<i class="fas fa-chevron-left"></i>',
                    nextIcon: '<i class="fas fa-chevron-right"></i>'
                }), n.featherlight.prototype.afterOpen = function () {
                    a.addClass("featherlight-open")
                }, n.featherlight.prototype.afterContent = function () {
                    var e = this.$currentTarget.attr("data-title"),
                        t = this.$currentTarget.attr("data-text");
                    if (e || t) {
                        this.$instance.find(".caption").remove();
                        e = e ? '<h4 class="title-gallery">' + e + "</h4>" : "", t = t ? '<p class="text-gallery">' + t + "</p>" : "";
                        n('<div class="caption">').html(e + t).appendTo(this.$instance.find(".featherlight-content"))
                    }
                }, n.featherlight.prototype.afterClose = function () {
                    a.removeClass("featherlight-open")
                }, n("a.open-popup-link").featherlight({
                    targetAttr: "href",
                    variant: "featherlight-popup",
                    afterOpen: function () {
                        s.hasClass("open") && s.trigger("click")
                    }
                })
            }(),
            function () {
                var e = n(".subscribe-form");
                if (e.length < 1) return;
                e.each(function () {
                    var e = n(this),
                        a = e.find(".subscribe-form-result");
                    e.find("form").validate({
                        submitHandler: function (t) {
                            a.fadeOut(500), n(t).ajaxSubmit({
                                target: a,
                                dataType: "json",
                                resetForm: !0,
                                success: function (e) {
                                    a.html(e.message).fadeIn(500), "error" != e.alert && (n(t).clearForm(), setTimeout(function () {
                                        a.fadeOut(500)
                                    }, 5e3))
                                }
                            })
                        }
                    })
                })
            }(),
            function () {
                var e = n(".contact-form");
                if (e.length < 1) return;
                e.each(function () {
                    var e = n(this),
                        a = e.find(".contact-form-result");
                    e.find("form").validate({
                        submitHandler: function (t) {
                            a.fadeOut(500), n(t).ajaxSubmit({
                                target: a,
                                dataType: "json",
                                success: function (e) {
                                    a.html(e.message).fadeIn(500), "error" != e.alert && (n(t).clearForm(), setTimeout(function () {
                                        a.fadeOut(500)
                                    }, 5e3))
                                }
                            })
                        }
                    })
                })
            }(),
            function () {
                if (n('[data-toggle="tooltip"]').tooltip(), n('[data-toggle="popover"]').popover(), 0 < n("#typed").length) new Typed("#typed", {
                    stringsElement: "#typed-strings",
                    typeSpeed: 40,
                    backDelay: 3e3,
                    loop: !0
                })
            }()
    }), n(window).on("resize", function () {
        1200 <= i() && (s.removeClass("open"), a.removeClass("site-header-open")), t(), r(), c(), l()
    }), n(window).on("scroll", function () {
        t()
    })
}(jQuery);
