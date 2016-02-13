/* */ 
"format cjs";
(function(process) {
  (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a)
            return a(o, !0);
          if (i)
            return i(o, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        var f = n[o] = {exports: {}};
        t[o][0].call(f.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, f, f.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
      s(r[o]);
    return s;
  })({
    1: [function(require, module, exports) {
      'use strict';
      var linotype = require('../../../index');
      window.onload = function() {
        window.Linotype = new linotype({
          slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
          anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
          slidesNavigation: true,
          idSelector: 'fullpage',
          navigation: true,
          css3: true,
          menu: '#menu',
          scrollOverflow: true,
          navigationPosition: 'right',
          navigationTooltips: ['First', 'Second', 'Third']
        });
        window.Linotype.init();
      };
    }, {"../../../index": 2}],
    2: [function(require, module, exports) {
      module.exports = require('./lib/linotype');
    }, {"./lib/linotype": 4}],
    3: [function(require, module, exports) {
      'use strict';
      var classie = require('classie');
      var domhelper = {
        removeAllClassAndToggle: function(element, elementCollection, toggleClass) {
          for (var h = 0; h < elementCollection.length; h++) {
            classie.removeClass(elementCollection[h], toggleClass);
          }
          classie.addClass(element, toggleClass);
        },
        removeElement: function(element) {
          element.parentNode.removeChild(element);
        },
        nodeIndexOfNodeList: function(nodelist, element) {
          return domhelper.nodelistToArray(nodelist, true).indexOf(element.outerHTML);
        },
        nodelistToArray: function(nl, useStrings) {
          var arr = [];
          for (var i = 0,
              ref = arr.length = nl.length; i < ref; i++) {
            arr[i] = (useStrings) ? nl[i].outerHTML : nl[i];
          }
          return arr;
        },
        closetElement: function(element) {
          if (typeof element.length === 'number') {
            return undefined;
          }
          var matches = domhelper.nodelistToArray(document.querySelectorAll(element.nodeName + '.' + element.className.trim().split(" ").join("."))),
              cleanMatches = [];
          for (var x = 0; x < matches.length; x++) {
            if (element.compareDocumentPosition(matches[x]) < 4 && !matches[x].isEqualNode(element)) {
              cleanMatches.push(matches[x]);
            }
          }
          function compareNumbers(a, b) {
            return a.compareDocumentPosition(b) - b.compareDocumentPosition(a);
          }
          return cleanMatches[0];
        },
        elementHideCss: function(element) {
          element.style.display = "none";
        },
        elementShowCss: function(element) {
          element.setAttribute('style', element.getAttribute('style').replace("display: none;"));
        },
        elementContentWrapInner: function(element, innerElement) {
          var wrapper = element,
              w = innerElement,
              len = element.childElementCount,
              wrapper_clone = wrapper.cloneNode(true);
          wrapper.innerHTML = '';
          wrapper.appendChild(w);
          var newFirstChild = wrapper.firstChild;
          newFirstChild.innerHTML = wrapper_clone.innerHTML;
        },
        elementWrap: function(element, wrapperElement) {
          var elementParent = element.parentNode,
              element_clone = element.cloneNode(true);
          elementParent.replaceChild(wrapperElement, element);
          wrapperElement.appendChild(element);
        },
        getScrollTop: function(element) {
          if (element === window && typeof window.pageYOffset !== 'undefined') {
            return window.pageYOffset;
          } else if (typeof element === "object") {
            return element.scrollTop;
          } else {
            var B = document.body;
            var D = document.documentElement;
            D = (D.clientHeight) ? D : B;
            return D.scrollTop;
          }
        },
        getPosition: function(element) {
          var xPosition = 0;
          var yPosition = 0;
          while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
          }
          return {
            x: xPosition,
            y: yPosition,
            left: xPosition,
            top: yPosition
          };
        },
        getElementSelector: function(element) {
          var tagSelector = (element.tagName) ? element.tagName : '',
              idSelector = (element.id) ? '#' + element.id + '' : '',
              classSelector = '';
          if (element.classList) {
            for (var x = 0; x < element.classList.length; x++) {
              classSelector += '.' + element.classList[x] + "";
            }
          }
          return tagSelector + idSelector + classSelector;
        },
        getParentElement: function(element, selector, selectorType) {
          if (element.tagName === 'BODY' || element.tagName === 'HTML' || selector === 'body' || selector === 'html' || selector === undefined) {
            return undefined;
          } else if ((selectorType === 'id' && element.parentNode.id === selector) || element.parentNode.className.match(new RegExp(selector, 'g'))) {
            return element.parentNode;
          } else {
            return domhelper.getParentElement(element.parentNode, selector, selectorType);
          }
        },
        getPreviousElements: function(element, returnArray) {
          if (element.previousElementSibling) {
            returnArray.push(element.previousElementSibling);
            return domhelper.getPreviousElements(element.previousElementSibling, returnArray);
          } else {
            return returnArray;
          }
        },
        getNextElements: function(element, returnArray) {
          if (element.nextElementSibling) {
            returnArray.push(element.nextElementSibling);
            return domhelper.getNextElements(element.nextElementSibling, returnArray);
          } else {
            return returnArray;
          }
        },
        insertAllBefore: function(element, elementsToInsert) {
          var parentElement = element.parentNode;
          if (elementsToInsert.length) {
            for (var x = 0; x < elementsToInsert.length; x++) {
              parentElement.insertBefore(elementsToInsert[x], element);
            }
          } else {
            parentElement.insertBefore(elementsToInsert, element);
          }
        },
        insertAllAfter: function(element, elementsToInsert) {
          var parentElement = element.parentNode;
          var nextSibling = element.nextSibling;
          if (elementsToInsert.length) {
            for (var x = 0; x < elementsToInsert.length; x++) {
              parentElement.insertBefore(elementsToInsert[x], nextSibling);
            }
          } else {
            parentElement.insertBefore(elementsToInsert, nextSibling);
          }
        },
        unwrapElement: function(element) {
          var parentNodeElem = element.parentNode;
          if (parentNodeElem.nodeName !== "BODY") {
            var parentParentNodeElem = parentNodeElem.parentNode;
            parentParentNodeElem.innerHTML = '';
            parentParentNodeElem.appendChild(element);
          }
        },
        onWindowLoaded: function(callback) {
          var readyStateCheckInterval = setInterval(function() {
            if (document.readyState === "complete") {
              callback();
              clearInterval(readyStateCheckInterval);
            }
          }, 10);
        }
      };
      module.exports = domhelper;
      if (typeof window === "object" && typeof window.document === "object") {
        window.domhelper = domhelper;
      }
    }, {"classie": 11}],
    4: [function(require, module, exports) {
      'use strict';
      var classie = require('classie'),
          extend = require('util-extend'),
          events = require('events'),
          domhelper = require('./domhelper'),
          Slimscroll = require('./slimscroll'),
          util = require('util');
      var linotype = function(config_options) {
        var options,
            linotypeElement,
            defaults = {
              'verticalCentered': true,
              'resize': true,
              'slidesColor': [],
              'anchors': [],
              'scrollingSpeed': 700,
              'easing': 'easeInQuart',
              'menu': false,
              'navigation': false,
              'navigationPosition': 'right',
              'navigationColor': '#000',
              'navigationTooltips': [],
              'slidesNavigation': false,
              'slidesNavPosition': 'bottom',
              'controlArrowColor': '#fff',
              'loopBottom': false,
              'loopTop': false,
              'loopHorizontal': true,
              'autoScrolling': true,
              'scrollOverflow': false,
              'css3': true,
              'paddingTop': 0,
              'paddingBottom': 0,
              'fixedElements': null,
              'normalScrollElements': null,
              'keyboardScrolling': true,
              'touchSensitivity': 5,
              'continuousVertical': false,
              'animateAnchor': true,
              'idSelector': 'fullpage',
              'normalScrollElementTouchThreshold': 5,
              'afterLoad': null,
              'onLeave': null,
              'afterRender': null,
              'afterResize': null,
              'afterSlideLoad': null,
              'onSlideLeave': null
            },
            ConfigurationError = function(message) {
              this.name = "ConfigurationError";
              this.message = message || "Linotype Configuration Error";
            },
            scrollDelay = (typeof config_options === "object" && typeof config_options.scrollDelay === "number") ? config_options.scrollDelay : 600,
            container,
            slideMoving = false,
            isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),
            windowsHeight,
            isMoving = false,
            isResizing = false,
            resizeTimeout = false,
            lastScrolledDestiny,
            lastScrolledSlide,
            scrollId,
            isScrolling = false,
            touchStartY = 0,
            touchStartX = 0,
            touchEndY = 0,
            touchEndX = 0;
        options = extend(defaults, config_options);
        ConfigurationError.prototype = new Error();
        ConfigurationError.prototype.constructor = ConfigurationError;
        if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
          options.continuousVertical = false;
          throw new ConfigurationError("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled");
        }
        if (scrollDelay < 400) {
          options.continuousVertical = false;
          throw new RangeError("BE CAREFUL! Not recommened to change it under 400 for a good behavior in laptops and Apple devices (laptops, mouses...)");
        }
        this.config = function() {
          return options;
        };
        this.scrollDelay = function() {
          return scrollDelay;
        };
        this.setAutoScrolling = function(value) {
          options.autoScrolling = value;
          var element = document.getElementsByClassName('section active')[0],
              docElemHTML = document.getElementsByTagName("html")[0],
              docElemBody = document.getElementsByTagName("body")[0],
              elementPosition = getPosition(element);
          if (options.autoScrolling) {
            docElemHTML.style.overflow = 'hidden';
            docElemHTML.style.height = '100%';
            docElemBody.style.overflow = 'hidden';
            docElemBody.style.height = '100%';
            if (element.length) {
              silentScroll(elementPosition.top);
            }
          } else {
            docElemHTML.style.overflow = 'auto';
            docElemHTML.style.height = 'auto';
            docElemBody.style.overflow = 'auto';
            docElemBody.style.height = 'auto';
            silentScroll(0);
            docElemHTML.scrollTop = elementPosition.top;
            docElemBody.scrollTop = elementPosition.top;
          }
        };
        this.setScrollingSpeed = function(value) {
          options.scrollingSpeed = value;
        };
        this.setKeyboardScrolling = function(value) {
          options.keyboardScrolling = value;
        };
        this.setMouseWheelScrolling = function(value) {
          console.log('setMouseWheelScrolling', value);
          if (value) {
            addMouseWheelHandler();
          } else {
            removeMouseWheelHandler();
          }
        };
        this.setAllowScrolling = function(value) {
          if (value) {
            this.setMouseWheelScrolling(true);
            addTouchHandler();
          } else {
            this.setMouseWheelScrolling(false);
            removeTouchHandler();
          }
        };
        this.moveSectionUp = function() {
          var prev = document.querySelector('.section.active').previousElementSibling;
          if (prev && classie.hasClass(prev, 'section')) {
            if (!prev && (options.loopTop || options.continuousVertical)) {
              prev = document.getElementsByClassName('section')[document.getElementsByClassName('section').length - 1];
            }
            if (prev) {
              scrollPage(prev, null, true);
            }
          }
        };
        this.moveSectionDown = function() {
          var next = document.querySelector('.section.active').nextElementSibling;
          if (next && classie.hasClass(next, 'section')) {
            if (!next && (options.loopBottom || options.continuousVertical)) {
              next = document.getElementsByClassName('section')[0];
            }
            if (next) {
              scrollPage(next, null, false);
            }
          }
        };
        this.moveTo = function(section, slide) {
          var destiny = '';
          if (isNaN(section)) {
            destiny = document.querySelector('[data-anchor="' + section + '"]');
          } else {
            destiny = document.getElementsByClassName('section')[(section - 1)];
          }
          if (typeof slide !== 'undefined') {
            scrollPageAndSlide(section, slide);
          } else if (destiny) {
            scrollPage(destiny);
          }
        };
        this.moveSlideRight = function() {
          moveSlide('next');
        };
        this.moveSlideLeft = function() {
          moveSlide('prev');
        };
        this.init = function() {
          var docElemBody = document.getElementsByTagName('body')[0];
          windowsHeight = document.documentElement.clientHeight;
          linotypeElement = document.getElementById(options.idSelector);
          container = linotypeElement;
          this.setAllowScrolling(true);
          if (options.css3) {
            options.css3 = support3d();
          }
          if (linotypeElement) {
            container.style.height = '100%';
            container.style.position = 'relative';
            container.style['-ms-touch-action'] = 'none';
          } else {
            var oldBodyHTML = document.getElementsByTagName('body')[0].innerHTML;
            document.getElementsByTagName('body')[0].innerHTML = '<div id="superContainer">' + oldBodyHTML + '</div>';
            container = document.getElementById('superContainer');
          }
          if (options.navigation) {
            var navHTML = document.createElement('div');
            navHTML.innerHTML = "<ul></ul>";
            navHTML.setAttribute("id", "fullPage-nav");
            docElemBody.appendChild(navHTML);
            var nav = document.getElementById("fullPage-nav");
            nav.style.color = options.navigationColor;
            classie.addClass(nav, options.navigationPosition);
          }
          var sections = container.getElementsByClassName('section');
          for (var index = 0; index < sections.length; index++) {
            var that = sections[index];
            var $this = sections[index];
            var slides = ($this !== 'undefined') ? $this.getElementsByClassName('slide') : 0;
            var numSlides = slides.length;
            if (!index && document.getElementsByClassName('section active').length === 0) {
              classie.addClass($this, 'active');
            }
            if ($this.style !== undefined) {
              $this.style.height = windowsHeight + 'px';
              if (options.paddingTop || options.paddingBottom) {
                $this.style.padding = options.paddingTop + ' 0 ' + options.paddingBottom + ' 0';
              }
              if (typeof options.slidesColor[index] !== 'undefined') {
                $this.style['background-color'] = options.slidesColor[index];
              }
            }
            if (typeof options.anchors[index] !== 'undefined' && typeof $this === 'object') {
              $this.setAttribute('data-anchor', options.anchors[index]);
            }
            if (options.navigation) {
              var link = (options.anchors.length) ? options.anchors[index] : '',
                  tooltip = (typeof options.navigationTooltips[index] !== 'undefined') ? options.navigationTooltips[index] : '',
                  navToSetHTML = document.getElementById("fullPage-nav"),
                  navUL = navToSetHTML.getElementsByTagName('ul')[0],
                  newLIToAdd = document.createElement('li');
              newLIToAdd.innerHTML = '<a href="#' + link + '"><span></span></a></li>';
              if (tooltip) {
                newLIToAdd.setAttribute('data-tooltip', tooltip);
              }
              navUL.appendChild(newLIToAdd);
            }
            if (numSlides > 0) {
              var sliderWidth = numSlides * 100;
              var slideWidth = 100 / numSlides;
              var slidesContainerEl = document.createElement("div");
              var slidesContainerForControlsEl = document.createElement("div");
              slidesContainerEl.setAttribute('class', 'slidesContainer');
              slidesContainerForControlsEl.setAttribute('class', 'slides');
              elementContentWrapInner($this, slidesContainerEl);
              elementContentWrapInner($this, slidesContainerForControlsEl);
              $this.getElementsByClassName('slidesContainer')[0].style.width = sliderWidth + '%';
              $this.innerHTML += '<div class="controlArrow prev"></div><div class="controlArrow next"></div>';
              if (options.controlArrowColor !== '#fff') {
                $this.getElementsByClassName('controlArrow next')[0].style['border-color'] = 'transparent transparent transparent ' + options.controlArrowColor;
                $this.getElementsByClassName('controlArrow prev')[0].style['border-color'] = 'transparent transparent transparent ' + options.controlArrowColor;
              }
              if (!options.loopHorizontal) {
                elementHideCss($this.getElementsByClassName('controlArrow prev')[0]);
              }
              if (options.slidesNavigation) {
                addSlidesNavigation($this, numSlides);
              }
              for (var i = 0; i < numSlides; i++) {
                if (!i && $this.getElementsByClassName('slide active').length === 0) {
                  classie.addClass($this.getElementsByClassName('slide')[0], 'active');
                }
                $this.getElementsByClassName('slide')[i].style.width = slideWidth + '%';
                if (options.verticalCentered) {
                  addTableClass($this.getElementsByClassName('slide')[i]);
                }
              }
            } else {
              if (options.verticalCentered) {
                addTableClass($this);
              }
            }
          }
          this.setup();
        }.bind(this);
        this.setup = function() {
          this.setAutoScrolling(options.autoScrolling);
          var nav = document.getElementById("fullPage-nav");
          var activeSlide = document.getElementsByClassName('section active')[0].getElementsByClassName(' slide active')[0];
          if (typeof activeSlide !== 'undefined' && activeSlide.length && (nodelistToArray(document.getElementsByClassName('section'), true).indexOf(activeSlide.outerHTML) !== 0 || (nodelistToArray(document.getElementsByClassName('section'), true).indexOf(activeSlide.outerHTML) === 0))) {
            var prevScrollingSpeepd = options.scrollingSpeed;
            this.setScrollingSpeed(0);
            landscapeScroll(document.getElementsByClassName('section active').getElementsByClassName('slides'), activeSlide);
            this.setScrollingSpeed(prevScrollingSpeepd);
          }
          if (options.fixedElements && options.css3) {
            document.getElementsByTagName('body')[0].appendChild(document.querySelector(options.fixedElements));
          }
          if (options.navigation) {
            nav.style['margin-top'] = '-' + (nav.offsetHeight / 2) + 'px';
            var activeSection = nodelistToArray(document.getElementsByClassName('section'), true).indexOf(document.getElementsByClassName('section active')[0].outerHTML);
            var navigationATag = nav.getElementsByTagName('li')[activeSection].getElementsByTagName('a')[0];
            classie.addClass(navigationATag, 'active');
          }
          if (options.menu && options.css3) {
            document.getElementsByTagName('body')[0].appendChild(document.querySelector(options.menu));
          }
          if (options.scrollOverflow) {
            onWindowLoaded(function() {
              var sections = document.getElementsByClassName('section');
              for (var x = 0; x < sections.length; x++) {
                var slides = sections[x].getElementsByClassName('slide');
                var $this = sections[x];
                if (slides.length) {
                  for (var y = 0; y < slides.length; y++) {
                    createSlimScrolling(slides[y]);
                  }
                } else {
                  createSlimScrolling($this);
                }
              }
              if (typeof options.afterRender === "function") {
                options.afterRender();
              }
            });
          } else {
            if (typeof options.afterRender === "function") {
              options.afterRender();
            }
          }
          var value = window.location.hash.replace('#', '').split('/');
          var destiny = value[0];
          if (destiny.length) {
            var section = document.querySelector('[data-anchor="' + destiny + '"]');
            if (!options.animateAnchor && section.length) {
              silentScroll(getPosition(section).top);
              if (typeof options.afterLoad === "function") {
                options.afterLoad(destiny, (nodelistToArray(document.getElementsByClassName('section'), true).indexOf(section.outerHTML) + 1));
              }
              var sectionColllection = document.getElementsByClassName('section');
              for (var h = 0; h < sectionColllection.length; h++) {
                classie.removeClass(sectionColllection[h], 'active');
              }
              classie.addClass(section, 'active');
            }
          }
          onWindowLoaded(function() {
            scrollToAnchor();
          });
          this.setupEventHandlers();
        }.bind(this);
        this.setupEventHandlers = function() {
          window.addEventListener("hashchange", windowOnHashChangeEvent, false);
          window.addEventListener("scroll", windowScrollEvent, false);
          window.addEventListener("onorientationchange", browserOnOrientationChange, false);
          window.addEventListener("resize", windowResizeEvent, false);
          document.addEventListener("keydown", keydownEvent, false);
          var sections = document.querySelectorAll('.section');
          for (var t = 0; t < sections.length; t++) {
            sections[t].addEventListener("click", sectionClickEvent, false);
          }
          var navlinks = document.querySelectorAll('#fullPage-nav a');
          for (var x = 0; x < navlinks.length; x++) {
            navlinks[x].addEventListener("click", navigationClickEvent, false);
          }
          if (options.slidesNavigation) {
            document.querySelector('.fullPage-slidesNav').addEventListener('click', slideNavClickEvent, false);
          }
        };
        function addTouchHandler() {
          document.removeEventListener('touchstart');
          document.removeEventListener('MSPointerDown');
          document.addEventListener('touchstart', touchStartHandler, false);
          document.addEventListener('MSPointerDown', touchStartHandler, false);
          document.removeEventListener('touchmove');
          document.removeEventListener('MSPointerMove');
          document.addEventListener('touchmove', touchMoveHandler, false);
          document.addEventListener('MSPointerMove', touchMoveHandler, false);
        }
        function removeTouchHandler() {
          document.removeEventListener('touchmove MSPointerMove');
        }
        var elementHideCss = domhelper.elementHideCss;
        var elementShowCss = domhelper.elementShowCss;
        var elementContentWrapInner = domhelper.elementContentWrapInner;
        var unwrapElement = domhelper.unwrapElement;
        var onWindowLoaded = domhelper.onWindowLoaded;
        var nodelistToArray = domhelper.nodelistToArray;
        var closetElement = domhelper.closetElement;
        var getParentElement = domhelper.getParentElement;
        var insertAllBefore = domhelper.insertAllBefore;
        var insertAllAfter = domhelper.insertAllAfter;
        var getNextElements = domhelper.getNextElements;
        var getPreviousElements = domhelper.getPreviousElements;
        var nodeIndexOfNodeList = domhelper.nodeIndexOfNodeList;
        var getScrollTop = domhelper.getScrollTop;
        var removeAllClassAndToggle = domhelper.removeAllClassAndToggle;
        var getElementSelector = domhelper.getElementSelector;
        var getPosition = domhelper.getPosition;
        function touchStartHandler(e) {
          var touchEvents = getEventsPage(e);
          touchStartY = touchEvents.y;
          touchStartX = touchEvents.x;
        }
        function getEventsPage(e) {
          var events = [];
          if (window.navigator.msPointerEnabled) {
            events.y = e.pageY;
            events.x = e.pageX;
          } else {
            events.y = e.touches[0].pageY;
            events.x = e.touches[0].pageX;
          }
          return events;
        }
        var touchMoveHandler = function(e) {
          if (options.autoScrolling) {
            e.preventDefault();
          }
          if (!checkParentForNormalScrollElement(e.target)) {
            var touchMoved = false;
            var activeSection = document.querySelector('.section.active');
            var scrollable;
            if (!isMoving && !slideMoving) {
              var touchEvents = getEventsPage(e);
              touchEndY = touchEvents.y;
              touchEndX = touchEvents.x;
              if (activeSection.getElementsByClassName('slide').length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {
                if (Math.abs(touchStartX - touchEndX) > (window.innerWidth / 100 * options.touchSensitivity)) {
                  if (touchStartX > touchEndX) {
                    this.moveSlideRight();
                  } else {
                    this.moveSlideLeft();
                  }
                }
              } else if (options.autoScrolling) {
                if (activeSection.getElementsByClassName('slide').length) {
                  scrollable = activeSection.querySelector('.slide.active').querySelector('.scrollable');
                } else {
                  scrollable = activeSection.querySelector('.scrollable');
                }
                if (Math.abs(touchStartY - touchEndY) > (window.innerHeight / 100 * options.touchSensitivity)) {
                  if (touchStartY > touchEndY) {
                    if (scrollable && scrollable.length > 0) {
                      if (isScrolled('bottom', scrollable)) {
                        this.moveSectionDown();
                      } else {
                        return true;
                      }
                    } else {
                      this.moveSectionDown();
                    }
                  } else if (touchEndY > touchStartY) {
                    if (scrollable && scrollable.length > 0) {
                      if (isScrolled('top', scrollable)) {
                        this.moveSectionUp();
                      } else {
                        return true;
                      }
                    } else {
                      this.moveSectionUp();
                    }
                  }
                }
              }
            }
          }
        }.bind(this);
        function checkParentForNormalScrollElement(el, hop) {
          hop = hop || 0;
          var parent = el.parentNode;
          if (hop < options.normalScrollElementTouchThreshold && parent.isEqualNode(document.querySelector(options.normalScrollElements))) {
            return true;
          } else if (hop === options.normalScrollElementTouchThreshold) {
            return false;
          } else {
            return checkParentForNormalScrollElement(parent, ++hop);
          }
        }
        function getYmovement(destiny) {
          var fromIndex = nodeIndexOfNodeList(document.getElementsByClassName('section'), document.getElementsByClassName('section active')[0]);
          var toIndex = nodeIndexOfNodeList(document.getElementsByClassName('section'), destiny);
          if (fromIndex > toIndex) {
            return 'up';
          }
          return 'down';
        }
        function getXmovement(fromIndex, toIndex) {
          if (fromIndex === toIndex) {
            return 'none';
          }
          if (fromIndex > toIndex) {
            return 'left';
          }
          return 'right';
        }
        var keydownEvent = function(e) {
          console.log("keydownEvent", isMoving);
          if (options.keyboardScrolling && !isMoving) {
            switch (e.which) {
              case 38:
              case 33:
                this.moveSectionUp();
                break;
              case 40:
              case 34:
                this.moveSectionDown();
                break;
              case 37:
                this.moveSlideLeft();
                break;
              case 39:
                this.moveSlideRight();
                break;
              default:
                return;
            }
          }
        }.bind(this);
        function removeMouseWheelHandler() {
          if (document.addEventListener) {
            document.removeEventListener('mousewheel', MouseWheelHandler, false);
            document.removeEventListener('wheel', MouseWheelHandler, false);
          } else {
            document.detachEvent("onmousewheel", MouseWheelHandler);
          }
        }
        function addMouseWheelHandler() {
          if (document.addEventListener) {
            document.addEventListener("mousewheel", MouseWheelHandler, false);
            document.addEventListener("wheel", MouseWheelHandler, false);
          } else {
            document.attachEvent("onmousewheel", MouseWheelHandler);
          }
        }
        var MouseWheelHandler = function(e) {
          if (options.autoScrolling) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.deltaY || -e.detail)));
            var scrollable;
            var activeSection = document.querySelector('.section.active');
            if (!isMoving) {
              if (activeSection.querySelectorAll('.slides').length) {
                console.log("has slides");
                scrollable = activeSection.querySelector('.slide.active').querySelector('.scrollable');
              } else {
                console.log("on section");
                scrollable = activeSection.querySelector('.scrollable');
              }
              if (delta < 0) {
                if (scrollable) {
                  if (isScrolled('bottom', scrollable)) {
                    this.moveSectionDown();
                  } else {
                    return true;
                  }
                } else {
                  this.moveSectionDown();
                }
              } else {
                if (scrollable) {
                  if (isScrolled('top', scrollable)) {
                    this.moveSectionUp();
                  } else {
                    return true;
                  }
                } else {
                  this.moveSectionUp();
                }
              }
            }
            return false;
          }
        }.bind(this);
        function windowOnHashChangeEvent(e) {
          if (!isScrolling) {
            var value = window.location.hash.replace('#', '').split('/');
            var section = value[0];
            var slide = value[1];
            var isFirstSlideMove = (typeof lastScrolledDestiny === 'undefined');
            var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined');
            if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide !== slide)) {
              scrollPageAndSlide(section, slide);
            }
          }
        }
        function windowScrollEvent(e) {
          var allSections = document.getElementsByClassName('section');
          if (!options.autoScrolling) {
            var currentScroll = getScrollTop(window);
            var scrolledSections = [];
            nodelistToArray(document.querySelectorAll('.section')).map(function(mapIndex, index, arr) {
              var $this = mapIndex;
              if ($this.offsetTop < (currentScroll + 100)) {
                if ($this) {
                  scrolledSections.push($this);
                }
              }
            });
            var currentSectionIndex = scrolledSections.length - 1;
            var currentSection = scrolledSections[currentSectionIndex];
            if (!classie.hasClass(currentSection, 'active')) {
              var leavingSection = nodeIndexOfNodeList(document.getElementsByClassName('section'), document.querySelector('.section.active')) + 1;
              isScrolling = true;
              var yMovement = getYmovement(currentSection);
              removeAllClassAndToggle(currentSection, allSections, 'active');
              var anchorLink = currentSection.getAttribute('data-anchor');
              if (typeof options.onLeave === 'function') {
                options.onLeave.call(leavingSection, (currentSectionIndex + 1), yMovement);
              }
              activateMenuElement(anchorLink);
              activateNavDots(anchorLink, 0);
              if (options.anchors.length && !isMoving) {
                lastScrolledDestiny = anchorLink;
                location.hash = anchorLink;
              }
              clearTimeout(scrollId);
              scrollId = setTimeout(function() {
                isScrolling = false;
              }, 100);
            }
          }
        }
        function navigationClickEvent(e) {
          e.preventDefault();
          var atarget = e.target.parentNode.parentNode;
          var allNavTargets = e.target.parentNode.parentNode.parentNode.children;
          var index = nodeIndexOfNodeList(allNavTargets, atarget);
          scrollPage(document.getElementsByClassName('section')[index]);
        }
        function slideNavClickEvent(e) {
          e.preventDefault();
          var etarget = e.target;
          if (etarget.tagName === 'SPAN') {
            var slides = document.querySelector('.section.active').querySelectorAll('.slide'),
                destiny;
            var slideLI = etarget.parentNode.parentNode;
            var allSlidesLI = etarget.parentNode.parentNode.parentNode.children;
            classie.addClass(slideLI, 'clickedTarget');
            destiny = slides[nodeIndexOfNodeList(allSlidesLI, slideLI)];
            classie.removeClass(slideLI, 'clickedTarget');
            landscapeScroll(slides, destiny);
          }
        }
        var sectionClickEvent = function(e) {
          var eventTarget = e.target;
          if (classie.hasClass(eventTarget, 'controlArrow')) {
            if (classie.hasClass(eventTarget, 'prev')) {
              this.moveSlideLeft();
            } else {
              this.moveSlideRight();
            }
          } else if (classie.hasClass(eventTarget, 'toSlide')) {
            e.preventDefault();
            console.log("toSlide");
          }
        }.bind(this);
        function windowResizeEvent(e) {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(doneResizing, 500);
        }
        function browserOnOrientationChange(e) {
          console.log("browserOnOrientationChange");
          doneResizing();
        }
        function doneResizing() {
          isResizing = true;
          var windowsWidth = window.innerWidth;
          windowsHeight = window.innerHeight;
          if (options.resize) {
            resizeMe(windowsHeight, windowsWidth);
          }
          var allSections = document.getElementsByClassName('section');
          for (var x = 0; x < allSections.length; x++) {
            var $this = allSections[x],
                scrollHeight = getScrollHeight($this),
                slides = $this.querySelectorAll('.slide');
            if (options.verticalCentered) {
              $this.querySelector('.tableCell').style.height = getTableHeight($this) + 'px';
            }
            $this.style.height = windowsHeight + 'px';
            if (options.scrollOverflow) {
              if (slides.length) {
                for (var y = 0; y < slides.length; y++) {
                  createSlimScrolling(slides[y]);
                }
              } else {
                createSlimScrolling($this);
              }
            }
            if (slides.length) {
              landscapeScroll(slides, $this.querySelector('.slide.active'));
            }
          }
          var activeSection = document.querySelector('.section.active');
          var destinyPos = getPosition(activeSection);
          if (nodeIndexOfNodeList(allSections, activeSection)) {
            scrollPage(activeSection);
          }
          isResizing = false;
          if (typeof options.afterResize === 'function') {
            options.afterResize.call();
          }
        }
        function resizeMe(displayHeight, displayWidth) {
          var preferredHeight = 825;
          var windowSize = displayHeight;
          if (displayHeight < 825 || displayWidth < 900) {
            if (displayWidth < 900) {
              windowSize = displayWidth;
              preferredHeight = 900;
            }
            var percentage = (windowSize * 100) / preferredHeight;
            var newFontSize = percentage.toFixed(2);
            document.getElementsByTagName("body")[0].style["font-size"] = newFontSize + '%';
          } else {
            document.getElementsByTagName("body")[0].style["font-size"] = '100%';
          }
        }
        function scrollToAnchor() {
          var value = window.location.hash.replace('#', '').split('/');
          var section = value[0];
          var slide = value[1];
          if (section) {
            scrollPageAndSlide(section, slide);
          }
        }
        function scrollPageAndSlide(destiny, slide) {
          var section;
          if (typeof slide === 'undefined') {
            slide = 0;
          }
          if (isNaN(destiny)) {
            section = document.querySelector('[data-anchor="' + destiny + '"]');
          } else {
            section = document.getElementsByClassName('section')[(destiny - 1)];
          }
          if (section) {
            if (destiny !== lastScrolledDestiny && !classie.hasClass(section, 'active')) {
              scrollPage(section, function() {
                scrollSlider(section, slide);
              });
            } else {
              scrollSlider(section, slide);
            }
          }
        }
        function scrollSlider(section, slide) {
          if (typeof slide !== 'undefined' && slide !== 0) {
            var slides = section.querySelectorAll('.slide');
            var destiny = section.querySelector('.slides').querySelector('[data-anchor="' + slide + '"]');
            if (!destiny) {
              destiny = section.querySelectorAll('.slide')[slide];
            }
            if (destiny) {
              landscapeScroll(slides, destiny);
            }
          }
        }
        function moveSlide(direction) {
          var activeSection = document.querySelector('.section.active');
          var slides = activeSection.getElementsByClassName('slide');
          if (!slides.length || slideMoving) {
            return;
          }
          var currentSlide = activeSection.querySelector('.slide.active');
          var destiny = null;
          if (direction === 'prev') {
            destiny = currentSlide.previousElementSibling;
          } else {
            destiny = currentSlide.nextElementSibling;
          }
          if (!destiny) {
            if (!options.loopHorizontal) {
              return;
            }
            if (direction === 'prev') {
              destiny = currentSlide.parentNode.lastElementChild;
            } else {
              destiny = currentSlide.parentNode.firstElementChild;
            }
          }
          slideMoving = true;
          landscapeScroll(slides, destiny);
        }
        function scrollPage(element, callback, isMovementUp) {
          var scrollOptions = {},
              scrolledElement,
              dest = getPosition(element);
          if (typeof dest === "undefined") {
            return;
          }
          var dtop = dest.top,
              yMovement = getYmovement(element),
              anchorLink = element.getAttribute('data-anchor'),
              sectionIndex = nodelistToArray(document.getElementsByClassName('section'), true).indexOf(element.outerHTML),
              activeSlide = element.querySelector('.slide.active'),
              activeSection = document.querySelector('.section.active'),
              leavingSection = nodelistToArray(document.getElementsByClassName('section'), true).indexOf(activeSection.outerHTML) + 1,
              slideAnchorLink = null,
              slideIndex = null,
              localIsResizing = isResizing;
          if (activeSlide !== null) {
            slideAnchorLink = activeSlide.getAttribute('data-anchor');
            slideIndex = nodelistToArray(element.getElementsByClassName('slide'), true).indexOf(activeSlide.outerHTML);
          }
          if (options.autoScrolling && options.continuousVertical && typeof(isMovementUp) !== "undefined" && ((!isMovementUp && yMovement === 'up') || (isMovementUp && yMovement === 'down'))) {
            if (!isMovementUp) {
              var muarray = [];
              insertAllAfter(activeSection, getPreviousElements(activeSection, muarray).reverse());
            } else {
              var mdarray = [];
              insertAllBefore(activeSection, getNextElements(activeSection, mdarray));
            }
            silentScroll(getPosition(activeSection).top);
            var wrapAroundElements = activeSection;
            dest = getPosition(element);
            dtop = dest.top;
            yMovement = getYmovement(element);
          }
          var elementCol = document.getElementsByClassName('section');
          removeAllClassAndToggle(element, elementCol, 'active');
          isMoving = true;
          if (typeof anchorLink !== 'undefined') {
            setURLHash(slideIndex, slideAnchorLink, anchorLink);
          }
          if (options.autoScrolling) {
            scrollOptions.top = -dtop;
            scrolledElement = getElementSelector(container);
          } else {
            scrollOptions.scrollTop = dtop;
            scrolledElement = 'html, body';
          }
          var continuousVerticalFixSectionOrder = function() {
            if (!wrapAroundElements || !wrapAroundElements.length) {
              return;
            }
            if (isMovementUp) {
              insertAllBefore(document.querySelector('.section').parentNode.firstElementChild, wrapAroundElements);
            } else {
              insertAllAfter(document.querySelector('.section').parentNode.lastElementChild, wrapAroundElements);
            }
            silentScroll(getPosition(activeSection).top);
          };
          if (options.css3 && options.autoScrolling) {
            console.log("translate css3");
            if ((typeof options.onLeave === 'function') && !localIsResizing) {
              options.onLeave.call(leavingSection, (sectionIndex + 1), yMovement);
            }
            classie.addClass(container, 'easing');
            var translate3d = 'translate3d(0px, -' + dtop + 'px, 0px)';
            transformContainer(translate3d, true);
            var t = setTimeout(function() {
              continuousVerticalFixSectionOrder();
              if ((typeof options.afterLoad === 'function') && !localIsResizing) {
                options.afterLoad(anchorLink, (sectionIndex + 1));
              }
              setTimeout(function() {
                isMoving = false;
                if (typeof callback === 'function') {
                  callback(this);
                }
              }, scrollDelay);
            }, options.scrollingSpeed);
          } else {
            console.log("no css3 sub jquery animate");
            if ((typeof options.onLeave === 'function') && !localIsResizing) {
              options.onLeave.call(leavingSection, (sectionIndex + 1), yMovement);
            }
            container.style.top = -dtop + 'px';
            continuousVerticalFixSectionOrder();
            if ((typeof options.afterLoad === 'function') && !localIsResizing) {
              options.afterLoad(anchorLink, (sectionIndex + 1));
            }
            setTimeout(function() {
              isMoving = false;
              if (typeof callback === 'function') {
                callback(this);
              }
            }, scrollDelay);
          }
          lastScrolledDestiny = anchorLink;
          if (options.autoScrolling) {
            activateMenuElement(anchorLink);
            activateNavDots(anchorLink, sectionIndex);
          }
        }
        function setURLHash(slideIndex, slideAnchor, anchorLink) {
          var sectionHash = '';
          if (options.anchors.length) {
            if (slideIndex) {
              if (typeof anchorLink !== 'undefined') {
                sectionHash = anchorLink;
              }
              if (typeof slideAnchor === 'undefined') {
                slideAnchor = slideIndex;
              }
              lastScrolledSlide = slideAnchor;
              location.hash = sectionHash + '/' + slideAnchor;
            } else if (typeof slideIndex !== 'undefined') {
              lastScrolledSlide = slideAnchor;
              location.hash = anchorLink;
            } else {
              location.hash = anchorLink;
            }
          }
        }
        function activateNavDots(name, sectionIndex) {
          if (options.navigation) {
            var fullpageNavID = document.getElementById('fullPage-nav');
            classie.removeClass(fullpageNavID.querySelector('.active'), 'active');
            if (name) {
              classie.addClass(fullpageNavID.querySelector('a[href="#' + name + '"]'), 'active');
            } else {
              classie.addClass(fullpageNavID.querySelector('li')[sectionIndex].querySelector('a'), 'active');
            }
          }
        }
        function isScrolled(type, scrollable) {
          if (type === 'top') {
            return !scrollable.scrollTop;
          } else if (type === 'bottom') {
            return scrollable.scrollTop + container.offsetHeight >= scrollable.scrollHeight;
          }
        }
        function activateMenuElement(name) {
          if (options.menu) {
            if (document.querySelector(options.menu).querySelector('.active')) {
              classie.removeClass(document.querySelector(options.menu).querySelector('.active'), 'active');
            }
            classie.addClass(document.querySelector(options.menu).querySelector('[data-menuanchor="' + name + '"]'), 'active');
          }
        }
        function createSlimScrolling(element) {
          var section,
              sectionPaddingTop = 0,
              sectionPaddingBottom = 0;
          element.style.overflow = 'hidden';
          if (element.className.match(/slide/gi)) {
            var parentSectionOfSlide = getParentElement(element, 'section');
            section = parentSectionOfSlide;
          } else {
            section = element;
          }
          var scrollable = element.getElementsByClassName('scrollable'),
              contentHeight;
          if (scrollable.length) {
            contentHeight = element.getElementsByClassName('scrollable')[0].scrollHeight;
          } else {
            if (options.verticalCentered) {
              contentHeight = element.getElementsByClassName('tableCell')[0].scrollHeight;
            }
          }
          var scrollHeight = getScrollHeight(section);
          if (contentHeight > scrollHeight) {
            if (scrollable.length) {
              scrollable[0].style.height = scrollHeight + 'px';
              scrollable[0].parentNode.style.height = scrollHeight + 'px';
            } else {
              var scrollableEl = document.createElement("div");
              scrollableEl.setAttribute('class', 'scrollable');
              if (options.verticalCentered) {
                elementContentWrapInner(element.querySelector('.tableCell'), scrollableEl);
              } else {
                elementContentWrapInner(element, scrollableEl);
              }
              var ss = new Slimscroll({
                height: scrollHeight + 'px',
                size: '10px',
                alwaysVisible: true
              }, element.getElementsByClassName('scrollable'));
              ss.init();
            }
          } else {
            if (element.getElementsByClassName('scrollable').children) {
              var scrollablefc = element.getElementsByClassName('scrollable').children.firstChild;
              unwrapElement(scrollablefc);
              unwrapElement(scrollablefc);
            }
            if (element.getElementsByClassName('slimScrollBar').parentNode) {
              var slimScrollBar = element.getElementsByClassName('slimScrollBar');
              slimScrollBar.parentNode.removeChild(slimScrollBar);
            }
            if (element.getElementsByClassName('slimScrollRail').parentNode) {
              var slimScrollRail = element.getElementsByClassName('slimScrollRail');
              slimScrollRail.parentNode.removeChild(slimScrollRail);
            }
          }
          element.style.overflow = '';
        }
        function getScrollHeight(element) {
          var windowsHeight = window.innerHeight,
              sectionPaddingBottom = (element.style['padding-bottom']) ? parseInt(element.style['padding-bottom'], 10) : 0,
              sectionPaddingTop = (element.style['padding-top']) ? parseInt(element.style['padding-top'], 10) : 0;
          return (windowsHeight - sectionPaddingBottom - sectionPaddingTop);
        }
        function landscapeScroll(slides, destiny) {
          var destinyPos = getPosition(destiny),
              slidesContainer = destiny.parentNode,
              slideIndex = nodeIndexOfNodeList(slides, destiny),
              section = getParentElement(destiny, 'section'),
              sectionIndex = nodeIndexOfNodeList(document.getElementsByClassName('section'), section),
              anchorLink = section.getAttribute('data-anchor'),
              slidesNav = section.querySelector('.fullPage-slidesNav'),
              slideAnchor = destiny.getAttribute('data-anchor');
          var localIsResizing = isResizing;
          if (options.onSlideLeave) {
            var prevSlideIndex = nodeIndexOfNodeList(section.querySelectorAll('.slide'), section.querySelector('.slide.active'));
            var xMovement = getXmovement(prevSlideIndex, slideIndex);
            if (!localIsResizing) {
              if (typeof options.onSlideLeave === 'function') {
                options.onSlideLeave.call(anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement);
              }
            }
          }
          var elementCol = section.getElementsByClassName('slide');
          removeAllClassAndToggle(destiny, elementCol, 'active');
          if (typeof slideAnchor === 'undefined' || slideAnchor === null) {
            slideAnchor = slideIndex;
          }
          if (classie.hasClass(section, 'active')) {
            if (!options.loopHorizontal) {
              var prevarrow = section.querySelector('.controlArrow.prev'),
                  nextarrow = section.querySelector('.controlArrow.next');
              if (slideIndex !== 0) {
                elementShowCss(prevarrow);
              } else {
                elementHideCss(prevarrow);
              }
              if (nodeIndexOfNodeList(elementCol, destiny) === elementCol.length - 1) {
                elementHideCss(nextarrow);
              } else {
                elementShowCss(nextarrow);
              }
            }
            setURLHash(slideIndex, slideAnchor, anchorLink);
          }
          if (options.css3) {
            var translate3d = 'translate3d(-' + destinyPos.left + 'px, 0px, 0px)';
            classie.addClass(slidesContainer, 'easing');
            transformElement(translate3d, slidesContainer);
            setTimeout(function() {
              if (!localIsResizing) {
                if (typeof options.afterSlideLoad === 'function') {
                  options.afterSlideLoad.call(this, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
                }
              }
              slideMoving = false;
            }, options.scrollingSpeed, options.easing);
          } else {
            console.log("no css3 sub jquery animate");
            slidesContainer.style.scrollLeft = destinyPos.left;
            if (!localIsResizing) {
              if (typeof options.afterSlideLoad === 'function') {
                options.afterSlideLoad.call(anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
              }
            }
            slideMoving = false;
          }
          if (options.slidesNavigation) {
            classie.removeClass(slidesNav.querySelector('.active'), 'active');
            classie.addClass(slidesNav.querySelectorAll('li')[slideIndex].querySelector('a'), 'active');
          }
        }
        function addSlidesNavigation(section, numSlides) {
          section.innerHTML += '<div class="fullPage-slidesNav"><ul></ul></div>';
          var nav = section.getElementsByClassName('fullPage-slidesNav')[0];
          classie.addClass(nav, options.slidesNavPosition);
          for (var i = 0; i < numSlides; i++) {
            nav.getElementsByTagName('ul')[0].innerHTML += '<li><a href="#"><span></span></a></li>';
          }
          nav.style['margin-left'] = '-' + (nav.offsetWidth / 2) + 'px';
          classie.addClass(nav.getElementsByTagName('li')[0].getElementsByTagName('a')[0], 'active');
        }
        function addTableClass(element) {
          classie.addClass(element, 'table');
          var slidesTableContainerEl = document.createElement("div");
          slidesTableContainerEl.setAttribute('class', 'tableCell');
          slidesTableContainerEl.setAttribute('style', "height:" + getTableHeight(element) + "px;");
          elementContentWrapInner(element, slidesTableContainerEl);
        }
        function getTableHeight(element) {
          var sectionHeight = windowsHeight;
          if (options.paddingTop || options.paddingBottom) {
            var section = element;
            if (!classie.hasClass(section, 'section')) {
              section = element.closest('.section');
            }
            var sectionPaddingBottom = (element.style['padding-bottom']) ? parseInt(element.style['padding-bottom'], 10) : 0,
                sectionPaddingTop = (element.style['padding-top']) ? parseInt(element.style['padding-top'], 10) : 0;
            sectionHeight = (windowsHeight - sectionPaddingBottom - sectionPaddingTop);
          }
          return sectionHeight;
        }
        function support3d() {
          var el = document.createElement('p'),
              has3d,
              transforms = {
                'webkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'transform': 'transform'
              };
          document.body.insertBefore(el, null);
          for (var t in transforms) {
            if (el.style[t] !== undefined) {
              el.style[t] = "translate3d(1px,1px,1px)";
              has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
          }
          document.body.removeChild(el);
          return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
        }
        function getTransforms(translate3d) {
          return {
            '-webkit-transform': translate3d,
            '-moz-transform': translate3d,
            '-ms-transform': translate3d,
            'transform': translate3d
          };
        }
        function transformContainer(translate3d, animated) {
          var transformsObject = getTransforms(translate3d);
          for (var x in transformsObject) {
            container.style[x] = transformsObject[x];
          }
        }
        function transformElement(translate3d, element) {
          var transformsObject = getTransforms(translate3d);
          for (var x in transformsObject) {
            element.style[x] = transformsObject[x];
          }
        }
        function silentScroll(top) {
          console.log("silentScroll");
          if (options.css3) {
            var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
            transformContainer(translate3d, false);
          } else {
            container.style.top = -top + 'px';
          }
        }
      };
      module.exports = linotype;
      if (typeof window === "object" && typeof window.document === "object") {
        window.linotype = linotype;
      }
    }, {
      "./domhelper": 3,
      "./slimscroll": 5,
      "classie": 11,
      "events": 6,
      "util": 10,
      "util-extend": 13
    }],
    5: [function(require, module, exports) {
      'use strict';
      var classie = require('classie'),
          extend = require('util-extend'),
          domhelper = require('./domhelper');
      var slimscroll = function(options, elementsArray) {
        var defaults = {
          idSelector: 'body',
          width: 'auto',
          height: '250px',
          size: '7px',
          color: '#000',
          position: 'right',
          distance: '1px',
          start: 'top',
          opacity: 0.4,
          alwaysVisible: false,
          disableFadeOut: false,
          railVisible: false,
          railColor: '#333',
          railOpacity: 0.2,
          railDraggable: true,
          railClass: 'slimScrollRail',
          barClass: 'slimScrollBar',
          wrapperClass: 'slimScrollDiv',
          allowPageScroll: false,
          wheelStep: 20,
          touchScrollStep: 200,
          addedOriginalClass: 'originalScrollableElement',
          borderRadius: '7px',
          railBorderRadius: '7px'
        },
            o = extend(defaults, options),
            thisElements = (elementsArray) ? elementsArray : document.querySelectorAll(options.idSelector),
            me,
            rail,
            bar,
            barHeight,
            minBarHeight = 30,
            mousedownPageY,
            mousedownT,
            isDragg,
            currentBar,
            currentTouchDif,
            releaseScroll,
            isOverBar,
            percentScroll,
            queueHide,
            lastScroll,
            isOverPanel;
        this.init = function() {
          for (var x = 0; x < thisElements.length; x++) {
            var touchDif,
                barHeight,
                divS = '<div></div>';
            releaseScroll = false;
            me = thisElements[x];
            classie.addClass(me, o.addedOriginalClass);
            if (classie.hasClass(me.parentNode, o.wrapperClass)) {
              var offset = me.scrollTop;
              bar = me.parentNode.querSelector('.' + o.barClass), rail = me.parentNode.querSelector('.' + o.railClass);
              getBarHeight();
              if (typeof options === 'object') {
                if ('height' in options && options.height === 'auto') {
                  me.parentNode.style.height = 'auto';
                  me.style.height = 'auto';
                  var height = me.parentNode.parentNode.scrollHeight;
                  me.parent.style.height = height;
                  me.style.height = height;
                }
                if ('scrollTo' in options) {
                  offset = parseInt(o.scrollTo, 10);
                } else if ('scrollBy' in options) {
                  offset += parseInt(o.scrollBy, 10);
                } else if ('destroy' in options) {
                  domhelper.removeElement(bar);
                  domhelper.removeElement(rail);
                  domhelper.unwrapElement(me);
                  return;
                }
                console.log("add scrollContent");
              }
              return;
            }
            o.height = (options.height === 'auto') ? me.parentNode.offsetHeight : options.height;
            var wrapper = document.createElement("div");
            classie.addClass(wrapper, o.wrapperClass);
            wrapper.style.position = 'relative';
            wrapper.style.overflow = 'hidden';
            wrapper.style.width = o.width;
            wrapper.style.height = o.height;
            me.style.overflow = 'hidden';
            me.style.width = o.width;
            me.style.height = o.height;
            rail = document.createElement("div");
            classie.addClass(rail, o.railClass);
            rail.style.width = o.size;
            rail.style.height = '100%';
            rail.style.position = 'absolute';
            rail.style.top = 0;
            rail.style.display = (o.alwaysVisible && o.railVisible) ? 'block' : 'none';
            rail.style['border-radius'] = o.railBorderRadius;
            rail.style.background = o.railColor;
            rail.style.opacity = o.railOpacity;
            rail.style.zIndex = 90;
            bar = document.createElement("div");
            classie.addClass(bar, o.barClass);
            bar.style.background = o.color;
            bar.style.width = o.size;
            bar.style.position = 'absolute';
            bar.style.top = 0;
            bar.style.opacity = o.opacity;
            bar.style.display = o.alwaysVisible ? 'block' : 'none';
            bar.style['border-radius'] = o.borderRadius;
            bar.style.BorderRadius = o.borderRadius;
            bar.style.MozBorderRadius = o.borderRadius;
            bar.style.WebkitBorderRadius = o.borderRadius;
            bar.style.zIndex = 99;
            if (o.position === 'right') {
              rail.style.right = o.distance;
              bar.style.right = o.distance;
            } else {
              rail.style.left = o.distance;
              bar.style.left = o.distance;
            }
            domhelper.elementWrap(me, wrapper);
            me.parentNode.appendChild(bar);
            me.parentNode.appendChild(rail);
            getBarHeight();
            bar.addEventListener("mousedown", mousedownEventHandler);
            document.addEventListener("mouseup", mouseupEventHandler);
            bar.addEventListener("selectstart", selectstartEventHandler);
            bar.addEventListener("mouseover", mouseoverEventHandler);
            bar.addEventListener("mouseleave", mouseleaveEventHandler);
            bar.addEventListener('touchstart', scrollContainerTouchStartEventHandler);
            rail.addEventListener("mouseover", railMouseOverEventHandler);
            rail.addEventListener("mouseleave", railMouseLeaveEventHandler);
            me.addEventListener("mouseover", scrollContainerMouseOverEventHandler);
            me.addEventListener("mouseleave", scrollContainerMouseLeaveEventHandler);
            me.addEventListener('DOMMouseScroll', mouseWheelEventHandler, false);
            me.addEventListener('mousewheel', mouseWheelEventHandler, false);
          }
          if (o.start === 'bottom') {
            bar.style.top = me.offsetHeight - bar.offsetHeight;
            scrollContent(0, true);
          } else if (o.start !== 'top') {
            scrollContent(domhelper.getPosition(document.querSelector(o.start).top, null, true));
            if (!o.alwaysVisible) {
              domhelper.elementHideCss(bar);
            }
          }
          document.addEventListener('touchmove', scrollContainerTouchMoveEventHandler);
        }.bind(this);
        function getBarHeight() {
          if (!bar) {
            bar = currentBar;
          }
          barHeight = Math.max((me.offsetHeight / me.scrollHeight) * me.offsetHeight, minBarHeight);
          bar.style.height = barHeight + 'px';
          var display = (me.offsetHeight === barHeight) ? 'none' : 'block';
          bar.style.display = display;
        }
        function scrollContent(y, isWheel, isJump, element, bar, isTouch) {
          releaseScroll = false;
          var delta = y;
          me = element;
          bar = (bar) ? bar : me.parentNode.querySelector('.' + o.barClass);
          var maxTop = me.offsetHeight - bar.offsetHeight;
          if (isWheel) {
            delta = parseInt(bar.style.top, 10) + y * parseInt(o.wheelStep, 10) / 100 * bar.offsetHeight;
            delta = Math.min(Math.max(delta, 0), maxTop);
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
            bar.style.top = delta + 'px';
          } else if (isTouch) {
            percentScroll = parseInt(bar.style.top, 10) / (me.offsetHeight - bar.offsetHeight);
            delta = percentScroll * (me.scrollHeight - me.offsetHeight);
            bar.style.top = delta + 'px';
          }
          percentScroll = parseInt(bar.style.top, 10) / (me.offsetHeight - bar.offsetHeight);
          delta = percentScroll * (me.scrollHeight - me.offsetHeight);
          if (isJump) {
            delta = y;
            var offsetTop = delta / me.scrollHeight * me.offsetHeight;
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.style.top = offsetTop + 'px';
          }
          me.scrollTop = delta;
          var newevent = document.createEvent("Event");
          newevent.initEvent('slimscrolling', true, true, "blah");
          me.dispatchEvent(newevent, ~~delta);
          showBar();
          hideBar();
        }
        function showBar() {
          getBarHeight();
          clearTimeout(queueHide);
          if (percentScroll === ~~percentScroll) {
            releaseScroll = o.allowPageScroll;
            if (lastScroll !== percentScroll) {
              var msg = (~~percentScroll === 0) ? 'top' : 'bottom';
              var newevent = document.createEvent("Event");
              newevent.initEvent('slimscroll', true, true);
              me.dispatchEvent(newevent, msg);
            }
          } else {
            releaseScroll = false;
          }
          lastScroll = percentScroll;
          if (barHeight >= me.offsetHeight) {
            releaseScroll = true;
            return;
          }
          bar.style.transition = "opacity .5s";
          bar.style.opacity = o.opacity;
          if (o.railVisible) {
            rail.style.transform = "opacity .5s";
            rail.style.opacity = 1;
          }
        }
        function hideBar() {
          if (!o.alwaysVisible) {
            queueHide = setTimeout(function() {
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
                bar.style.transition = "opacity 1s";
                bar.style.opacity = 0;
                rail.style.transition = "opacity 1s";
                rail.style.opacity = 0;
              }
            }, 500);
          }
        }
        function mouseWheelEventHandler(e) {
          if (!isOverPanel) {
            return;
          }
          var delta = 0;
          if (e.wheelDelta) {
            delta = -e.wheelDelta / 120;
          }
          if (e.detail) {
            delta = e.detail / 3;
          }
          var target = e.target;
          var parentWrapper = domhelper.getParentElement(target, o.wrapperClass);
          console.log("parentWrapper", parentWrapper);
          console.log("me", me);
          if (parentWrapper) {
            scrollContent(delta, true, null, parentWrapper.querySelector('.' + o.addedOriginalClass));
          } else {
            console.log("not the right parent node");
          }
          if (!releaseScroll) {
            e.preventDefault();
          }
        }
        function mousedownEventHandler(e) {
          var eTarget = e.target;
          currentBar = eTarget;
          isDragg = true;
          mousedownT = parseInt(eTarget.style.top, 10);
          mousedownPageY = e.pageY;
          if (currentBar) {
            currentBar.addEventListener("mousemove", mousemoveEventHandler);
          }
          e.preventDefault();
          return false;
        }
        function mousemoveEventHandler(e) {
          var currTop = mousedownT + e.pageY - mousedownPageY;
          if (currentBar) {
            currentBar.style.top = currTop;
            scrollContent(0, domhelper.getPosition(currentBar).top, false, me, currentBar);
          }
        }
        function mouseupEventHandler(e) {
          isDragg = false;
          if (currentBar) {
            hideBar(currentBar);
            currentBar.removeEventListener('mousemove', mousemoveEventHandler);
          }
        }
        function mouseoverEventHandler(e) {
          isOverBar = true;
        }
        function mouseleaveEventHandler(e) {
          isOverBar = false;
        }
        function selectstartEventHandler(e) {
          return false;
        }
        function railMouseOverEventHandler(e) {
          showBar();
        }
        function railMouseLeaveEventHandler(e) {
          hideBar();
        }
        function scrollContainerMouseOverEventHandler(e) {
          isOverPanel = true;
          showBar(bar);
          hideBar(bar);
        }
        function scrollContainerMouseLeaveEventHandler(e) {
          isOverPanel = true;
          showBar(bar);
          hideBar(bar);
        }
        function scrollContainerTouchStartEventHandler(e) {
          if (e.touches.length) {
            currentTouchDif = e.touches[0].pageY;
          }
        }
        function scrollContainerTouchMoveEventHandler(e) {
          if (!releaseScroll) {
            e.preventDefault();
          }
          if (e.touches.length) {
            var diff = (currentTouchDif - e.touches[0].pageY) / o.touchScrollStep;
            scrollContent(diff, true, null, me, currentBar, true);
            currentTouchDif = e.touches[0].pageY;
          }
        }
      };
      module.exports = slimscroll;
      if (typeof window === "object" && typeof window.document === "object") {
        window.slimscroll = slimscroll;
      }
    }, {
      "./domhelper": 3,
      "classie": 11,
      "util-extend": 13
    }],
    6: [function(require, module, exports) {
      function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
      }
      module.exports = EventEmitter;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined;
      EventEmitter.defaultMaxListeners = 10;
      EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
          throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
      };
      EventEmitter.prototype.emit = function(type) {
        var er,
            handler,
            len,
            args,
            i,
            listeners;
        if (!this._events)
          this._events = {};
        if (type === 'error') {
          if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
            er = arguments[1];
            if (er instanceof Error) {
              throw er;
            } else {
              throw TypeError('Uncaught, unspecified "error" event.');
            }
            return false;
          }
        }
        handler = this._events[type];
        if (isUndefined(handler))
          return false;
        if (isFunction(handler)) {
          switch (arguments.length) {
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            default:
              len = arguments.length;
              args = new Array(len - 1);
              for (i = 1; i < len; i++)
                args[i - 1] = arguments[i];
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          len = arguments.length;
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          listeners = handler.slice();
          len = listeners.length;
          for (i = 0; i < len; i++)
            listeners[i].apply(this, args);
        }
        return true;
      };
      EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener))
          throw TypeError('listener must be a function');
        if (!this._events)
          this._events = {};
        if (this._events.newListener)
          this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type])
          this._events[type] = listener;
        else if (isObject(this._events[type]))
          this._events[type].push(listener);
        else
          this._events[type] = [this._events[type], listener];
        if (isObject(this._events[type]) && !this._events[type].warned) {
          var m;
          if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
          } else {
            m = EventEmitter.defaultMaxListeners;
          }
          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
            console.trace();
          }
        }
        return this;
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
          throw TypeError('listener must be a function');
        var fired = false;
        function g() {
          this.removeListener(type, g);
          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }
        g.listener = listener;
        this.on(type, g);
        return this;
      };
      EventEmitter.prototype.removeListener = function(type, listener) {
        var list,
            position,
            length,
            i;
        if (!isFunction(listener))
          throw TypeError('listener must be a function');
        if (!this._events || !this._events[type])
          return this;
        list = this._events[type];
        length = list.length;
        position = -1;
        if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
          delete this._events[type];
          if (this._events.removeListener)
            this.emit('removeListener', type, listener);
        } else if (isObject(list)) {
          for (i = length; i-- > 0; ) {
            if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
              position = i;
              break;
            }
          }
          if (position < 0)
            return this;
          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }
          if (this._events.removeListener)
            this.emit('removeListener', type, listener);
        }
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function(type) {
        var key,
            listeners;
        if (!this._events)
          return this;
        if (!this._events.removeListener) {
          if (arguments.length === 0)
            this._events = {};
          else if (this._events[type])
            delete this._events[type];
          return this;
        }
        if (arguments.length === 0) {
          for (key in this._events) {
            if (key === 'removeListener')
              continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = {};
          return this;
        }
        listeners = this._events[type];
        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else {
          while (listeners.length)
            this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];
        return this;
      };
      EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
          ret = [];
        else if (isFunction(this._events[type]))
          ret = [this._events[type]];
        else
          ret = this._events[type].slice();
        return ret;
      };
      EventEmitter.listenerCount = function(emitter, type) {
        var ret;
        if (!emitter._events || !emitter._events[type])
          ret = 0;
        else if (isFunction(emitter._events[type]))
          ret = 1;
        else
          ret = emitter._events[type].length;
        return ret;
      };
      function isFunction(arg) {
        return typeof arg === 'function';
      }
      function isNumber(arg) {
        return typeof arg === 'number';
      }
      function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
      }
      function isUndefined(arg) {
        return arg === void 0;
      }
    }, {}],
    7: [function(require, module, exports) {
      if (typeof Object.create === 'function') {
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }});
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        };
      }
    }, {}],
    8: [function(require, module, exports) {
      var process = module.exports = {};
      process.nextTick = (function() {
        var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
        var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;
        ;
        if (canSetImmediate) {
          return function(f) {
            return window.setImmediate(f);
          };
        }
        if (canPost) {
          var queue = [];
          window.addEventListener('message', function(ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
              ev.stopPropagation();
              if (queue.length > 0) {
                var fn = queue.shift();
                fn();
              }
            }
          }, true);
          return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
          };
        }
        return function nextTick(fn) {
          setTimeout(fn, 0);
        };
      })();
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      function noop() {}
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.binding = function(name) {
        throw new Error('process.binding is not supported');
      };
      process.cwd = function() {
        return '/';
      };
      process.chdir = function(dir) {
        throw new Error('process.chdir is not supported');
      };
    }, {}],
    9: [function(require, module, exports) {
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
    }, {}],
    10: [function(require, module, exports) {
      (function(process, global) {
        var formatRegExp = /%[sdj%]/g;
        exports.format = function(f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }
          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function(x) {
            if (x === '%%')
              return '%';
            if (i >= len)
              return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };
        exports.deprecate = function(fn, msg) {
          if (isUndefined(global.process)) {
            return function() {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }
          if (process.noDeprecation === true) {
            return fn;
          }
          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }
          return deprecated;
        };
        var debugs = {};
        var debugEnviron;
        exports.debuglog = function(set) {
          if (isUndefined(debugEnviron))
            debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function() {};
            }
          }
          return debugs[set];
        };
        function inspect(obj, opts) {
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };
          if (arguments.length >= 3)
            ctx.depth = arguments[2];
          if (arguments.length >= 4)
            ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            ctx.showHidden = opts;
          } else if (opts) {
            exports._extend(ctx, opts);
          }
          if (isUndefined(ctx.showHidden))
            ctx.showHidden = false;
          if (isUndefined(ctx.depth))
            ctx.depth = 2;
          if (isUndefined(ctx.colors))
            ctx.colors = false;
          if (isUndefined(ctx.customInspect))
            ctx.customInspect = true;
          if (ctx.colors)
            ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;
        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };
        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          'regexp': 'red'
        };
        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];
          if (style) {
            return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }
        function stylizeNoColor(str, styleType) {
          return str;
        }
        function arrayToHash(array) {
          var hash = {};
          array.forEach(function(val, idx) {
            hash[val] = true;
          });
          return hash;
        }
        function formatValue(ctx, value, recurseTimes) {
          if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);
          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }
          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }
          var base = '',
              array = false,
              braces = ['{', '}'];
          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }
          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }
          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }
          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }
          if (isError(value)) {
            base = ' ' + formatError(value);
          }
          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }
          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }
          ctx.seen.push(value);
          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function(key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }
          ctx.seen.pop();
          return reduceToSingleString(output, base, braces);
        }
        function formatPrimitive(ctx, value) {
          if (isUndefined(value))
            return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value))
            return ctx.stylize('' + value, 'number');
          if (isBoolean(value))
            return ctx.stylize('' + value, 'boolean');
          if (isNull(value))
            return ctx.stylize('null', 'null');
        }
        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }
        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0,
              l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function(key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }
        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name,
              str,
              desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function(line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }
          return name + ': ' + str;
        }
        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function(prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0)
              numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);
          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
          }
          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }
        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;
        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;
        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;
        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;
        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;
        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;
        function isSymbol(arg) {
          return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;
        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;
        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;
        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;
        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;
        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;
        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;
        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;
        exports.isBuffer = require('./support/isBuffer');
        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }
        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }
        exports.log = function() {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };
        exports.inherits = require('inherits');
        exports._extend = function(origin, add) {
          if (!add || !isObject(add))
            return origin;
          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };
        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
      }).call(this, require('FWaASH'), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "./support/isBuffer": 9,
      "FWaASH": 8,
      "inherits": 7
    }],
    11: [function(require, module, exports) {
      module.exports = require('./lib/classie');
    }, {"./lib/classie": 12}],
    12: [function(require, module, exports) {
      'use strict';
      function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
      }
      var hasClass,
          addClass,
          removeClass;
      if (typeof document === "object" && 'classList' in document.documentElement) {
        hasClass = function(elem, c) {
          return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
          elem.classList.add(c);
        };
        removeClass = function(elem, c) {
          elem.classList.remove(c);
        };
      } else {
        hasClass = function(elem, c) {
          return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
          if (!hasClass(elem, c)) {
            elem.className = elem.className + ' ' + c;
          }
        };
        removeClass = function(elem, c) {
          elem.className = elem.className.replace(classReg(c), ' ');
        };
      }
      function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
      }
      var classie = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
      };
      if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = classie;
      } else {
        define(classie);
      }
      if (typeof window === "object" && typeof window.document === "object") {
        window.classie = classie;
      }
    }, {}],
    13: [function(require, module, exports) {
      module.exports = extend;
      function extend(origin, add) {
        if (!add || typeof add !== 'object')
          return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      }
    }, {}]
  }, {}, [1]);
})(require('process'));
