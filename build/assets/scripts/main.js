document.addEventListener("DOMContentLoaded", () => {
  // burger-menu

  const iconMenu = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".menu__body");
  if (iconMenu && menuBody) {
    iconMenu.addEventListener("click", () => {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    });
  }

  //tabs

  const tabItems = document.querySelectorAll(".tabs__item");
  const tabBlocks = document.querySelectorAll(".tabs__block");

  tabItems.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      let tabLink = item.getAttribute("href");
      let currentBlock = document.querySelector(tabLink);
      if (!item.classList.contains("_active")) {
        tabItems.forEach((item) => {
          item.classList.remove("_active");
        });
        tabBlocks.forEach((item) => {
          item.classList.remove("_active");
        });
        item.classList.add("_active");
        currentBlock.classList.add("_active");
      }
    });
    document.querySelector(".tabs__item").click();
  }

  // header select

  const select = function () {
    let menuLocation = document.querySelectorAll(".menu__select");
    let selectItem = document.querySelectorAll(".menu__select-item");

    menuLocation.forEach((item) => {
      item.addEventListener("click", selectToggle);
    });

    selectItem.forEach((item) => {
      item.addEventListener("click", selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle("_active");
    }

    function selectChoose() {
      let text = this.innerText;
      let location = this.closest(".menu__location");
      let currentText = location.querySelector(".menu__select-current");
      currentText.innerText = text;
      location.classList.remove("_active");
    }
  };

  select();

  // slider_1 on home page

  const swiper = new Swiper(".swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper1-button-next",
      prevEl: ".swiper1-button-prev",
    },
    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
  });

  // slider_2 on home page

  const swiper2 = new Swiper(".swiper2", {
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
        spaceBetween: 10,
      },

      901: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  // slider2 counter

  if (swiper2) {
    let swiper2AllSlides = document.querySelector(".swiper2-total");
    let swiper2CurrentSlide = document.querySelector(".swiper2-current");
    let swiper2Parent = document.querySelector(".swiper2");

    if (swiper2Parent) {
      let swiper2DuplicateSlides = swiper2Parent.querySelectorAll(
        ".swiper-slide-duplicate"
      );
      swiper2AllSlides.innerHTML =
        swiper2.slides.length - swiper2DuplicateSlides.length; // duplicate-slides quantity for loop effect

      swiper2.on("slideChange", () => {
        let currentSlide = ++swiper2.realIndex;
        swiper2CurrentSlide.innerHTML = currentSlide;
      });
    }
  }

  // показ и скрытие кнопки на видео script for play button show or hide

  const videoEl = document.querySelector(".home-page-video");
  const playBtn = document.querySelector(".play-btn");
  if (videoEl && playBtn) {
    const hiddenPlayBtn = (event) => {
      if (event.type === "play") {
        playBtn.classList.add("hidden");
      } else {
        playBtn.classList.remove("hidden");
      }
    };
    videoEl.addEventListener("play", hiddenPlayBtn);
    videoEl.addEventListener("pause", hiddenPlayBtn);
    playBtn.addEventListener("click", () => videoEl.play());
    videoEl.addEventListener("DOMContentLoaded", () => {
      videoEl.play();
    });
  }

  // slider_3 on home page

  const swiper3 = new Swiper(".swiper3", {
    direction: "vertical",
    loop: false,
    autoHeight: false,
    slidesPerView: 1,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper3",
    },
    pagination: {
      el: ".swiper-pagination-left",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  // text-block swipes with slider(swiper3)
  const swiper3Text = new Swiper(".swiper3-text", {
    direction: "vertical",
    loop: false,
    slidesPerView: 1,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper3-text",
    },
  });

  //swiper3 controlls each other

  swiper3.controller.control = swiper3Text;
  swiper3Text.controller.control = swiper3;

  // slider_4

  const swiper4 = new Swiper(".swiper4", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper4-button-next",
      prevEl: ".swiper4-button-prev",
    },
  });

  // slider_5

  const swiper5 = new Swiper(".swiper5", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      stopOnLastSlide: true,
    },
    effect: "fade",
    direction: "vertical",
    speed: 800,
    loop: false,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper5",
    },
    pagination: {
      el: ".swiper-pagination-left",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      320: {
        direction: "horizontal",
      },
      769: {
        direction: "vertical",
      },
    },
  });

  const swiper5Text = new Swiper(".swiper5-text", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      stopOnLastSlide: true,
    },
    direction: "vertical",
    slidesPerView: 1,
    loop: false,
    mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
      eventsTarget: ".swiper5-text",
    },
    breakpoints: {
      320: {
        direction: "horizontal",
        slidesPerView: 1,
        centeredSlides: true,
      },
      901: {
        direction: "vertical",
      },
    },
  });

  swiper5.controller.control = swiper5Text;
  swiper5Text.controller.control = swiper5;

  // slider_6

  const swiper6 = new Swiper(".swiper6", {
    direction: "vertical",
    loop: false,
    mousewheel: {
      sensitivity: 0,
      thresholdDelta: 1,
      forceToAxis: true,
      thresholdTime: 300,
      releaseOnEdges: true,
      eventsTarget: ".swiper6",
    },
    pagination: {
      el: ".swiper-pagination-left",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  // text-block swipes with slider(swiper6)

  const swiper6Text = new Swiper(".swiper6-text", {
    direction: "vertical",
    loop: false,
    slidesPerView: 1,
    mousewheel: {
      sensitivity: 3,
      releaseOnEdges: true,
      eventsTarget: ".swiper6-text",
    },
  });

  //swiper6 controls each other

  swiper6.controller.control = swiper6Text;
  swiper6Text.controller.control = swiper6;

  //   // Scrollmagic

  //   // init controller
  //   let controller = new ScrollMagic.Controller();

  //   // create a scene
  //   new ScrollMagic.Scene({
  //     duration: 100, // the scene should last for a scroll distance of 100px
  //     offset: 50, // start this scene after scrolling for 50px
  //   })
  //     .setPin("#scroll-magic-element") // pins the element for the the scene's duration
  //     .addTo(controller); // assign the scene to the controller

  // slider_7

  const swiper7 = new Swiper(".swiper7", {
    direction: "horizontal",
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper7-pagination",
    },
    navigation: {
      nextEl: ".swiper7-button-next",
      prevEl: ".swiper7-button-prev",
    },
  });

  // slider_8

  const swiper8 = new Swiper(".swiper8", {
    direction: "horizontal",
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper8-pagination",
    },
    navigation: {
      nextEl: ".swiper8-button-next",
      prevEl: ".swiper8-button-prev",
    },
  });

  // slider_9

  const swiper9 = new Swiper(".swiper9", {
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
        centeredSlides: false,
      },

      769: {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
      },
    },
    pagination: {
      el: ".swiper-pagination-product",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper9-button-next",
      prevEl: ".swiper9-button-prev",
    },
  });

  // slider9 counter

  if (swiper9) {
    let swiper9AllSlides = document.querySelector(".swiper2-total");
    let swiper9CurrentSlide = document.querySelector(".swiper2-current");
    let swiper9Parent = document.querySelector(".swiper9");

    if (swiper9Parent) {
      let swiper9DuplicateSlides = swiper9Parent.querySelectorAll(
        ".swiper-slide-duplicate"
      );
      swiper9AllSlides.innerHTML =
        swiper9.slides.length - swiper9DuplicateSlides.length; // duplicate-slides quantity for loop effect

      swiper9.on("slideChange", () => {
        let currentSlide = ++swiper9.realIndex;
        swiper9CurrentSlide.innerHTML = currentSlide;
      });
    }
  }
  // slider_10

  const swiper10 = new Swiper(".swiper10", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper10-button-next",
      prevEl: ".swiper10-button-prev",
    },
  });

  // slider_11

  const swiper11 = new Swiper(".swiper11", {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper11-button-next",
      prevEl: ".swiper11-button-prev",
    },
  });

  // accordion

  const myAcc = document.querySelector(".accordion-container");
  if (myAcc) {
    new Accordion(".accordion-container");
  }

  // map

  let myMap = document.getElementById("map");

  const spb = [
    {
      coordinates: [59.727545, 30.064097],
      balloonContentHeader:
        "<span>Санкт-Петербург.<br>Красное село, улица Восстановления, 66</span>",
    },
  ];

  // const msk = [
  //     { coordinates: [55.888296, 37.588674], balloonContentHeader: "<span>Алтуфьевское шоссе, 70к1,<br>ТЦ Маркос Молл, Cats&amp;Dogs</span>" },
  // ];

  if (myMap) {
    ymaps.ready(init);

    function init() {
      myMap = new ymaps.Map("map", {
        center: [59.727545, 30.064097],
        behaviors: ["default", "scrollZoom"],
        zoom: 9,
        controls: ["smallMapDefaultSet"],
      });

      for (const point of spb) {
        myPlacemark = new ymaps.Placemark(point.coordinates, {
          balloonContentHeader: point.balloonContentHeader,
        });
        myMap.geoObjects.add(myPlacemark);
      }
    }
  }

  //плавный переход к якорям smooth scroll to anchors

  const anchors = document.querySelectorAll(".history__nav-link[data-goTo]");
  if (anchors.length > 0) {
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const currentBlock = anchor.getAttribute("data-goTo");
        document.querySelector("" + currentBlock).scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      });
    });
  }

  // fixed navbar on contacts page

  const navBox = document.querySelector(".history__nav-box");
  const historySection = document.querySelector(".history");
  const header = document.querySelector(".header");
  if (navBox && historySection && header) {
    const scrollAnimation = () => {
      let windowCenter = window.innerHeight / 2 + window.scrollY;
      let historySectionTop =
        historySection.offsetTop + 315 + header.offsetHeight;

      const navBoxFixed = () => {
        if (windowCenter >= historySectionTop) {
          navBox.classList.add("_fixed");
        } else {
          navBox.classList.remove("_fixed");
        }
      };
      navBoxFixed();

      const navBoxUnfixed = () => {
        if (
          windowCenter >=
          historySectionTop + historySection.offsetHeight - navBox.offsetHeight
        ) {
          navBox.classList.add("_unfixed");
        } else {
          navBox.classList.remove("_unfixed");
        }
      };
      navBoxUnfixed();
    };
    scrollAnimation();
    window.addEventListener("scroll", () => {
      scrollAnimation();
    });
  }

  // AOS animation on contacts page

  AOS.init();

  // popup show and hide

  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".lock-padding");

  let unlock = true;

  const timeout = 800;

  if (popupLinks && body && lockPadding && unlock && timeout) {
    if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
          const popupName = popupLink.getAttribute("href").replace("#", "");
          const currentPopup = document.getElementById(popupName);
          popupOpen(currentPopup);
          e.preventDefault;
        });
      }
    }

    const popupCloseIcon = document.querySelectorAll(".close-popup");
    if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
          popupClose(el.closest(".popup"));
          e.preventDefault;
        });
      }
    }

    function popupOpen(currentPopup) {
      if (currentPopup && unlock) {
        const popupActive = document.querySelector(".popup._active");
        if (popupActive) {
          popupClose(popupActive, false);
        } else {
          bodyLock();
        }
        currentPopup.classList.add("_active");
        currentPopup.addEventListener("click", function (e) {
          if (!e.target.closest(".popup__content")) {
            popupClose(e.target.closest(".popup"));
          }
        });
      }
    }

    function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
        popupActive.classList.remove("_active");
        if (doUnlock) {
          bodyUnlock();
        }
      }
    }

    function bodyLock() {
      const lockPaddingValue =
        window.innerWidth -
        document.querySelector(".wrapper").offsetWidth +
        "px";

      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = lockPaddingValue;
        }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add("_locked");

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }

    function bodyUnlock() {
      setTimeout(function () {
        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
          }
        }
        body.style.paddingRight = "0px";
        body.classList.remove("_locked");
      }, timeout);

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        const popupActive = document.querySelector(".popup._active");
        popupClose(popupActive);
      }
    });
  }
});
