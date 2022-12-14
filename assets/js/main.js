/*---------------------------------------------
Template name :  Listia
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Sticky Nav
    02: Offcanvas Menu
    03: Collapsable List
    04: Banner Slider
    05: Top Category List Slider 
    06: Top Feature Dropdown
    07: Counter Up
    08: Member Slider
    09: Back To Top

----------------------------------------------*/


(function ($) {
    "use strict";
    /* 01:Sticky Nav */
    var navBar = $(".main-menu");
    var hdrHeight = $("header").height();
    
    $(window).scroll(function() {
      if( $(this).scrollTop() > hdrHeight + 0) {
        navBar.addClass("navScrolled");
      } else {
        navBar.removeClass("navScrolled");
      }
    });


    /* 10:Back To Top */
    var $backToTopBtn = $(".back-to-top");
    if ($backToTopBtn.length) {
      var scrollTrigger = 400, // px
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $backToTopBtn.addClass("show");
          } else {
            $backToTopBtn.removeClass("show");
          }
        };

      backToTop();

      $(window).on("scroll", function () {
        backToTop();
      });

      $backToTopBtn.on("click", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0
          },
          700
        );
      });
    }

    // Venobox
    new VenoBox({
      selector: '.my-video-links',
    });


    /* Parallax */
    $(".has-parallax-item").mousemove(function(e) {
      parallaxIt(e, ".parallax-item-one", -30);
      parallaxIt(e, ".parallax-item-two", -30);
      parallaxIt(e, ".parallax-item-three", -30);
      parallaxIt(e, ".parallax-item-four", -30);
      parallaxIt(e, ".parallax-item-five", -30);
      parallaxIt(e, ".parallax-item-six", -30);
      parallaxIt(e, ".parallax-item-seven", -30);
    });
    
    function parallaxIt(e, target, movement) {
      var $this = $(".has-parallax-item");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
    
      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
    

    /* Template Marque */ 
    function Marquee(selector, speed) {
      const parentSelector = document.querySelector(selector);
      const clone = parentSelector.innerHTML;
      const firstElement = parentSelector.children[0];
      let i = 0;
      
      parentSelector.insertAdjacentHTML('beforeend', clone);
      parentSelector.insertAdjacentHTML('beforeend', clone);
    
      setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
          i = 0;
        }
        i = i + speed;
      }, 0);
    }
    
    //after window is completed load
    //1 class selector for marquee
    //2 marquee speed 0.2
    window.addEventListener('load', Marquee('.marquee', .4))

    window.addEventListener('load', Marquee('.marquee2', .4))

    window.addEventListener('load', Marquee('.marquee3', .4))
    





}(jQuery));