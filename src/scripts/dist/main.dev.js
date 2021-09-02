"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // burger-menu
  var iconMenu = document.querySelector('.menu__icon');
  var menuBody = document.querySelector('.menu__body');

  if (iconMenu && menuBody) {
    iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }

  ; //tabs 

  var tabItems = document.querySelectorAll('.tabs__item');
  var tabBlocks = document.querySelectorAll('.tabs__block');
  tabItems.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var tabLink = item.getAttribute('href');
      var currentBlock = document.querySelector(tabLink);

      if (!item.classList.contains('_active')) {
        tabItems.forEach(function (item) {
          item.classList.remove('_active');
        });
        tabBlocks.forEach(function (item) {
          item.classList.remove('_active');
        });
        item.classList.add('_active');
        currentBlock.classList.add('_active');
      }

      ;
    });
    document.querySelector('.tabs__item').click();
  }

  ; // header select 

  var select = function select() {
    var menuLocation = document.querySelectorAll('.menu__select');
    var selectItem = document.querySelectorAll('.menu__select-item');
    menuLocation.forEach(function (item) {
      item.addEventListener('click', selectToggle);
    });
    selectItem.forEach(function (item) {
      item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle('_active');
    }

    function selectChoose() {
      var text = this.innerText;
      var location = this.closest('.menu__location');
      var currentText = location.querySelector('.menu__select-current');
      currentText.innerText = text;
      location.classList.remove('_active');
    }
  };

  select(); // slider_1 on home page

  var swiper = new Swiper(".swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper1-button-next",
      prevEl: ".swiper1-button-prev"
    } // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

  }); // slider_2 on home page

  var swiper2 = new Swiper(".swiper2", {
    direction: "horizontal",
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      901: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    }
  }); // slider2 counter

  if (swiper2) {
    var swiper2AllSlides = document.querySelector('.swiper2-total');
    var swiper2CurrentSlide = document.querySelector('.swiper2-current');
    var swiper2Parent = document.querySelector('.swiper2');

    if (swiper2Parent) {
      var swiper2DuplicateSlides = swiper2Parent.querySelectorAll('.swiper-slide-duplicate');
      swiper2AllSlides.innerHTML = swiper2.slides.length - swiper2DuplicateSlides.length; // duplicate-slides quantity for loop effect

      swiper2.on('slideChange', function () {
        var currentSlide = ++swiper2.realIndex;
        swiper2CurrentSlide.innerHTML = currentSlide;
      });
    }

    ;
  }

  ; // показ и скрытие кнопки на видео script for play button show or hide

  var videoEl = document.querySelector(".home-page-video");
  var playBtn = document.querySelector(".play-btn");

  if (videoEl && playBtn) {
    var hiddenPlayBtn = function hiddenPlayBtn(event) {
      if (event.type === "play") {
        playBtn.classList.add("hidden");
      } else {
        playBtn.classList.remove("hidden");
      }
    };

    videoEl.addEventListener("play", hiddenPlayBtn);
    videoEl.addEventListener("pause", hiddenPlayBtn);
    playBtn.addEventListener("click", function () {
      return videoEl.play();
    });
    videoEl.addEventListener("DOMContentLoaded", function () {
      videoEl.play();
    });
  }

  ; // slider_3 on home page

  var swiper3 = new Swiper(".swiper3", {
    direction: "vertical",
    loop: false,
    autoHeight: false,
    slidesPerView: 1,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper3"
    },
    pagination: {
      el: ".swiper-pagination-left",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    }
  }); // text-block swipes with slider(swiper3)

  var swiper3Text = new Swiper(".swiper3-text", {
    direction: "vertical",
    loop: false,
    slidesPerView: 1,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper3-text"
    }
  }); //swiper3 controlls each other

  swiper3.controller.control = swiper3Text;
  swiper3Text.controller.control = swiper3; // slider_4

  var swiper4 = new Swiper(".swiper4", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper4-button-next",
      prevEl: ".swiper4-button-prev"
    }
  }); // slider_5

  var swiper5 = new Swiper(".swiper5", {
    autoplay: {
      delay: 1000
    },
    effect: "fade",
    direction: "vertical",
    speed: 800,
    loop: false,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper5"
    },
    pagination: {
      el: ".swiper-pagination-left",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
    breakpoints: {
      320: {
        direction: "horizontal"
      },
      769: {
        direction: "vertical"
      }
    }
  }); // slider_6

  var swiper6 = new Swiper(".swiper6", {
    direction: "vertical",
    loop: false,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper6"
    },
    pagination: {
      el: ".swiper-pagination-left",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    }
  }); // text-block swipes with slider(swiper6)

  var swiper6Text = new Swiper(".swiper6-text", {
    direction: "vertical",
    loop: false,
    slidesPerView: 1,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper6-text"
    }
  }); //swiper6 controlls each other

  swiper6.controller.control = swiper6Text;
  swiper6Text.controller.control = swiper6; // slider_7

  var swiper7 = new Swiper(".swiper7", {
    direction: "horizontal",
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper7-pagination"
    },
    navigation: {
      nextEl: ".swiper7-button-next",
      prevEl: ".swiper7-button-prev"
    }
  }); // slider_8

  var swiper8 = new Swiper(".swiper8", {
    direction: "horizontal",
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper8-pagination"
    },
    navigation: {
      nextEl: ".swiper8-button-next",
      prevEl: ".swiper8-button-prev"
    }
  }); // slider_9

  var swiper9 = new Swiper(".swiper9", {
    direction: "horizontal",
    // slidesPerView: "auto",
    // centeredSlides: true,
    // spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false
      },
      769: {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true
      }
    },
    pagination: {
      el: ".swiper-pagination-product",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper9-button-next",
      prevEl: ".swiper9-button-prev"
    }
  }); // slider9 counter

  if (swiper9) {
    var swiper9AllSlides = document.querySelector('.swiper2-total');
    var swiper9CurrentSlide = document.querySelector('.swiper2-current');
    var swiper9Parent = document.querySelector('.swiper9');

    if (swiper9Parent) {
      var swiper9DuplicateSlides = swiper9Parent.querySelectorAll('.swiper-slide-duplicate');
      swiper9AllSlides.innerHTML = swiper9.slides.length - swiper9DuplicateSlides.length; // duplicate-slides quantity for loop effect

      swiper9.on('slideChange', function () {
        var currentSlide = ++swiper9.realIndex;
        swiper9CurrentSlide.innerHTML = currentSlide;
      });
    }

    ;
  }

  ; // slider_10

  var swiper10 = new Swiper(".swiper10", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper10-button-next",
      prevEl: ".swiper10-button-prev"
    }
  }); // slider_11

  var swiper11 = new Swiper(".swiper11", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper11-button-next",
      prevEl: ".swiper11-button-prev"
    }
  }); // accordion

  var myAcc = document.querySelector('.accordion-container');

  if (myAcc) {
    new Accordion(".accordion-container");
  }

  ; // map 

  var myMap = document.getElementById('map');
  var spb = [{
    coordinates: [59.727545, 30.064097],
    balloonContentHeader: "<span>Санкт-Петербург.<br>Красное село, улица Восстановления, 66</span>"
  }]; // const msk = [
  //     { coordinates: [55.888296, 37.588674], balloonContentHeader: "<span>Алтуфьевское шоссе, 70к1,<br>ТЦ Маркос Молл, Cats&amp;Dogs</span>" },
  // ];

  if (myMap) {
    var init = function init() {
      myMap = new ymaps.Map("map", {
        center: [59.727545, 30.064097],
        behaviors: ['default', 'scrollZoom'],
        zoom: 9,
        controls: ['smallMapDefaultSet']
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = spb[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var point = _step.value;
          myPlacemark = new ymaps.Placemark(point.coordinates, {
            balloonContentHeader: point.balloonContentHeader
          });
          myMap.geoObjects.add(myPlacemark);
        } // for (const point of msk) {
        //     myPlacemark = new ymaps.Placemark(point.coordinates, {
        //         balloonContentHeader: point.balloonContentHeader,
        //     });
        //     myMap.geoObjects.add(myPlacemark);
        // }

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    ymaps.ready(init);
  }

  ; //плавный переход к якорям smooth scroll to anchors

  var anchors = document.querySelectorAll('.history__nav-link[data-goTo]');

  if (anchors.length > 0) {
    anchors.forEach(function (anchor) {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        var currentBlock = anchor.getAttribute('data-goTo');
        document.querySelector('' + currentBlock).scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      });
    });
  }

  ; // fixed navbar on contacts page

  var navBox = document.querySelector('.history__nav-box');
  var historySection = document.querySelector('.history');
  var header = document.querySelector('.header');

  if (navBox && historySection && header) {
    var scrollAnimation = function scrollAnimation() {
      var windowCenter = window.innerHeight / 2 + window.scrollY;
      var historySectionTop = historySection.offsetTop + 315 + header.offsetHeight;

      var navBoxFixed = function navBoxFixed() {
        if (windowCenter >= historySectionTop) {
          navBox.classList.add('_fixed');
        } else {
          navBox.classList.remove('_fixed');
        }
      };

      navBoxFixed();

      var navBoxUnfixed = function navBoxUnfixed() {
        if (windowCenter >= historySectionTop + historySection.offsetHeight - navBox.offsetHeight) {
          navBox.classList.add('_unfixed');
        } else {
          navBox.classList.remove('_unfixed');
        }
      };

      navBoxUnfixed();
    };

    scrollAnimation();
    window.addEventListener('scroll', function () {
      scrollAnimation();
    });
  }

  ; // AOS animation on contacts page

  AOS.init(); // popup show and hide

  var popupLinks = document.querySelectorAll('.popup-link');
  var body = document.querySelector('body');
  var lockPadding = document.querySelectorAll('.lock-padding');
  var unlock = true;
  var timeout = 800;

  if (popupLinks && body && lockPadding && unlock && timeout) {
    (function () {
      var popupOpen = function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
          var popupActive = document.querySelector('.popup._active');

          if (popupActive) {
            popupClose(popupActive, false);
          } else {
            bodyLock();
          }

          currentPopup.classList.add('_active');
          currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
              popupClose(e.target.closest('.popup'));
            }
          });
        }
      };

      var popupClose = function popupClose(popupActive) {
        var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (unlock) {
          popupActive.classList.remove('_active');

          if (doUnlock) {
            bodyUnlock();
          }
        }
      };

      var bodyLock = function bodyLock() {
        var lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

        if (lockPadding.length > 0) {
          for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
            var el = lockPadding[_index2];
            el.style.paddingRight = lockPaddingValue;
          }
        }

        body.style.paddingRight = lockPaddingValue;
        body.classList.add('_locked');
        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      };

      var bodyUnlock = function bodyUnlock() {
        setTimeout(function () {
          if (lockPadding.length > 0) {
            for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
              var el = lockPadding[_index3];
              el.style.paddingRight = '0px';
            }
          }

          body.style.paddingRight = '0px';
          body.classList.remove('_locked');
        }, timeout);
        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      };

      if (popupLinks.length > 0) {
        var _loop = function _loop(index) {
          var popupLink = popupLinks[index];
          popupLink.addEventListener("click", function (e) {
            var popupName = popupLink.getAttribute('href').replace('#', '');
            var currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault;
          });
        };

        for (var index = 0; index < popupLinks.length; index++) {
          _loop(index);
        }
      }

      ;
      var popupCloseIcon = document.querySelectorAll('.close-popup');

      if (popupCloseIcon.length > 0) {
        var _loop2 = function _loop2(_index) {
          var el = popupCloseIcon[_index];
          el.addEventListener("click", function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault;
          });
        };

        for (var _index = 0; _index < popupCloseIcon.length; _index++) {
          _loop2(_index);
        }
      }

      ;
      ;
      ;
      ;
      ;
      document.addEventListener('keydown', function (e) {
        if (e.key === "Escape") {
          var popupActive = document.querySelector('.popup._active');
          popupClose(popupActive);
        }
      });
    })();
  }
});