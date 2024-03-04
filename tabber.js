document.cookie = "oldsmobile=badcar"

/*!
 * Draggabilly PACKAGED v2.2.0
 */

!function(i,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("jquery")):i.jQueryBridget=e(i,i.jQuery)}(window,function(t,i){"use strict";var c=Array.prototype.slice,e=t.console,p=void 0===e?function(){}:function(t){e.error(t)};function n(d,o,u){(u=u||i||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){u.isPlainObject(t)&&(this.options=u.extend(!0,this.options,t))}),u.fn[d]=function(t){if("string"==typeof t){var i=c.call(arguments,1);return s=i,a="$()."+d+'("'+(r=t)+'")',(e=this).each(function(t,i){var e=u.data(i,d);if(e){var n=e[r];if(n&&"_"!=r.charAt(0)){var o=n.apply(e,s);h=void 0===h?o:h}else p(a+" is not a valid method")}else p(d+" not initialized. Cannot call methods, i.e. "+a)}),void 0!==h?h:e}var e,r,s,h,a,n;return n=t,this.each(function(t,i){var e=u.data(i,d);e?(e.option(n),e._init()):(e=new o(i,n),u.data(i,d,e))}),this},r(u))}function r(t){!t||t&&t.bridget||(t.bridget=n)}return r(i||t.jQuery),n}),function(t,i){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():t.getSize=i()}(window,function(){"use strict";function m(t){var i=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(i)&&i}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}var _,x=!1;function P(t){if(function(){if(!x){x=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(t);var e=E(t);P.isBoxSizeOuter=_=200==m(e.width),i.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=E(t);if("none"==i.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0;i<b;i++)t[y[i]]=0;return t}();var e={};e.width=t.offsetWidth,e.height=t.offsetHeight;for(var n=e.isBorderBox="border-box"==i.boxSizing,o=0;o<b;o++){var r=y[o],s=i[r],h=parseFloat(s);e[r]=isNaN(h)?0:h}var a=e.paddingLeft+e.paddingRight,d=e.paddingTop+e.paddingBottom,u=e.marginLeft+e.marginRight,c=e.marginTop+e.marginBottom,p=e.borderLeftWidth+e.borderRightWidth,f=e.borderTopWidth+e.borderBottomWidth,g=n&&_,l=m(i.width);!1!==l&&(e.width=l+(g?0:a+p));var v=m(i.height);return!1!==v&&(e.height=v+(g?0:d+f)),e.innerWidth=e.width-(a+p),e.innerHeight=e.height-(d+f),e.outerWidth=e.width+u,e.outerHeight=e.height+c,e}}return P}),function(t,i){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",i):"object"==typeof module&&module.exports?module.exports=i():t.EvEmitter=i()}("undefined"!=typeof window?window:this,function(){function t(){}var i=t.prototype;return i.on=function(t,i){if(t&&i){var e=this._events=this._events||{},n=e[t]=e[t]||[];return-1==n.indexOf(i)&&n.push(i),this}},i.once=function(t,i){if(t&&i){this.on(t,i);var e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[i]=!0,this}},i.off=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=e.indexOf(i);return-1!=n&&e.splice(n,1),this}},i.emitEvent=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){e=e.slice(0),i=i||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<e.length;o++){var r=e[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,i)}return this}},i.allOff=function(){delete this._events,delete this._onceEvents},t}),function(i,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("ev-emitter")):i.Unipointer=e(i,i.EvEmitter)}(window,function(o,t){function i(){}var e=i.prototype=Object.create(t.prototype);e.bindStartEvent=function(t){this._bindStartEvent(t,!0)},e.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},e._bindStartEvent=function(t,i){var e=(i=void 0===i||i)?"addEventListener":"removeEventListener",n="mousedown";o.PointerEvent?n="pointerdown":"ontouchstart"in o&&(n="touchstart"),t[e](n,this)},e.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},e.getTouch=function(t){for(var i=0;i<t.length;i++){var e=t[i];if(e.identifier==this.pointerIdentifier)return e}},e.onmousedown=function(t){var i=t.button;i&&0!==i&&1!==i||this._pointerDown(t,t)},e.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},e.onpointerdown=function(t){this._pointerDown(t,t)},e._pointerDown=function(t,i){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDown(t,i))},e.pointerDown=function(t,i){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return e._bindPostStartEvents=function(t){if(t){var i=n[t.type];i.forEach(function(t){o.addEventListener(t,this)},this),this._boundPointerEvents=i}},e._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){o.removeEventListener(t,this)},this),delete this._boundPointerEvents)},e.onmousemove=function(t){this._pointerMove(t,t)},e.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},e.ontouchmove=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerMove(t,i)},e._pointerMove=function(t,i){this.pointerMove(t,i)},e.pointerMove=function(t,i){this.emitEvent("pointerMove",[t,i])},e.onmouseup=function(t){this._pointerUp(t,t)},e.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},e.ontouchend=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerUp(t,i)},e._pointerUp=function(t,i){this._pointerDone(),this.pointerUp(t,i)},e.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i])},e._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},e._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},e.pointerDone=function(){},e.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},e.ontouchcancel=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerCancel(t,i)},e._pointerCancel=function(t,i){this._pointerDone(),this.pointerCancel(t,i)},e.pointerCancel=function(t,i){this.emitEvent("pointerCancel",[t,i])},i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}),function(i,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("unipointer")):i.Unidragger=e(i,i.Unipointer)}(window,function(r,t){function i(){}var e=i.prototype=Object.create(t.prototype);e.bindHandles=function(){this._bindHandles(!0)},e.unbindHandles=function(){this._bindHandles(!1)},e._bindHandles=function(t){for(var i=(t=void 0===t||t)?"addEventListener":"removeEventListener",e=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var o=this.handles[n];this._bindStartEvent(o,t),o[i]("click",this),r.PointerEvent&&(o.style.touchAction=e)}},e._touchActionValue="none",e.pointerDown=function(t,i){this.okayPointerDown(t)&&(this.pointerDownPointer=i,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},s={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return e.okayPointerDown=function(t){var i=o[t.target.nodeName],e=s[t.target.type],n=!i||e;return n||this._pointerReset(),n},e.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},e.pointerMove=function(t,i){var e=this._dragPointerMove(t,i);this.emitEvent("pointerMove",[t,i,e]),this._dragMove(t,i,e)},e._dragPointerMove=function(t,i){var e={x:i.pageX-this.pointerDownPointer.pageX,y:i.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(e)&&this._dragStart(t,i),e},e.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},e.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i]),this._dragPointerUp(t,i)},e._dragPointerUp=function(t,i){this.isDragging?this._dragEnd(t,i):this._staticClick(t,i)},e._dragStart=function(t,i){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,i)},e.dragStart=function(t,i){this.emitEvent("dragStart",[t,i])},e._dragMove=function(t,i,e){this.isDragging&&this.dragMove(t,i,e)},e.dragMove=function(t,i,e){t.preventDefault(),this.emitEvent("dragMove",[t,i,e])},e._dragEnd=function(t,i){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,i)},e.dragEnd=function(t,i){this.emitEvent("dragEnd",[t,i])},e.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},e._staticClick=function(t,i){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,i),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},e.staticClick=function(t,i){this.emitEvent("staticClick",[t,i])},i.getPointerPoint=t.getPointerPoint,i}),function(e,n){"function"==typeof define&&define.amd?define(["get-size/get-size","unidragger/unidragger"],function(t,i){return n(e,t,i)}):"object"==typeof module&&module.exports?module.exports=n(e,require("get-size"),require("unidragger")):e.Draggabilly=n(e,e.getSize,e.Unidragger)}(window,function(r,a,t){function e(t,i){for(var e in i)t[e]=i[e];return t}var n=r.jQuery;function i(t,i){this.element="string"==typeof t?document.querySelector(t):t,n&&(this.$element=n(this.element)),this.options=e({},this.constructor.defaults),this.option(i),this._create()}var o=i.prototype=Object.create(t.prototype);i.defaults={},o.option=function(t){e(this.options,t)};var s={relative:!0,absolute:!0,fixed:!0};function d(t,i,e){return e=e||"round",i?Math[e](t/i)*i:t}return o._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=e({},this.position);var t=getComputedStyle(this.element);s[t.position]||(this.element.style.position="relative"),this.on("pointerDown",this.onPointerDown),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},o.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},o.dispatchEvent=function(t,i,e){var n=[i].concat(e);this.emitEvent(t,n),this.dispatchJQueryEvent(t,i,e)},o.dispatchJQueryEvent=function(t,i,e){var n=r.jQuery;if(n&&this.$element){var o=n.Event(i);o.type=t,this.$element.trigger(o,e)}},o._getPosition=function(){var t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},o._getPositionCoord=function(t,i){if(-1!=t.indexOf("%")){var e=a(this.element.parentNode);return e?parseFloat(t)/100*e[i]:0}return parseInt(t,10)},o._addTransformPosition=function(t){var i=t.transform;if(0===i.indexOf("matrix")){var e=i.split(","),n=0===i.indexOf("matrix3d")?12:4,o=parseInt(e[n],10),r=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=r}},o.onPointerDown=function(t,i){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",t,[i])},o.dragStart=function(t,i){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[i]),this.animate())},o.measureContainment=function(){var t=this.getContainer();if(t){var i=a(this.element),e=a(t),n=this.element.getBoundingClientRect(),o=t.getBoundingClientRect(),r=e.borderLeftWidth+e.borderRightWidth,s=e.borderTopWidth+e.borderBottomWidth,h=this.relativeStartPosition={x:n.left-(o.left+e.borderLeftWidth),y:n.top-(o.top+e.borderTopWidth)};this.containSize={width:e.width-r-h.x-i.width,height:e.height-s-h.y-i.height}}},o.getContainer=function(){var t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},o.onPointerMove=function(t,i,e){this.dispatchJQueryEvent("pointerMove",t,[i,e])},o.dragMove=function(t,i,e){if(this.isEnabled){var n=e.x,o=e.y,r=this.options.grid,s=r&&r[0],h=r&&r[1];n=d(n,s),o=d(o,h),n=this.containDrag("x",n,s),o=this.containDrag("y",o,h),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[i,e])}},o.containDrag=function(t,i,e){if(!this.options.containment)return i;var n="x"==t?"width":"height",o=d(-this.relativeStartPosition[t],e,"ceil"),r=this.containSize[n];return r=d(r,e,"floor"),Math.max(o,Math.min(r,i))},o.onPointerUp=function(t,i){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",t,[i])},o.dragEnd=function(t,i){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[i]))},o.animate=function(){if(this.isDragging){this.positionDrag();var t=this;requestAnimationFrame(function(){t.animate()})}},o.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},o.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},o.staticClick=function(t,i){this.dispatchEvent("staticClick",t,[i])},o.setPosition=function(t,i){this.position.x=t,this.position.y=i,this.setLeftTop()},o.enable=function(){this.isEnabled=!0},o.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},o.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},o._init=function(){},n&&n.bridget&&n.bridget("draggabilly",i),i});








((window, factory) => {
  if (typeof define == "function" && define.amd) {
    define(["draggabilly"], (Draggabilly) => factory(window, Draggabilly));
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("draggabilly"));
  } else {
    window.ChromeTabs = factory(window, window.Draggabilly);
  }
})(window, (window, Draggabilly) => {
  const TAB_CONTENT_MARGIN = 9;
  const TAB_CONTENT_OVERLAP_DISTANCE = 1;
  const TAB_OVERLAP_DISTANCE = TAB_CONTENT_MARGIN * 2 + TAB_CONTENT_OVERLAP_DISTANCE;
  const TAB_CONTENT_MIN_WIDTH = 23;
  const TAB_CONTENT_MAX_WIDTH = 240;
  const TAB_SIZE_SMALL = 83;
  const TAB_SIZE_SMALLER = 58;
  const TAB_SIZE_MINI = 47;
  const WINDOW_PADDING_OFFSET = 10 + TAB_CONTENT_MARGIN;
  const noop = (_) => { };
  const closest = (value, array) => {
    let closest = Infinity;
    let closestIndex = -1;

    array.forEach((v, i) => {
      if (Math.abs(value - v) < closest) {
        closest = Math.abs(value - v);
        closestIndex = i;
      }
    });
    return closestIndex;
  };

  var tabC = 1;
  const defaultTabProperties = {
    title: "MiniBrowser Tab",
    favicon: false,
  };

  let instanceId = 0;

  class ChromeTabs {
    constructor() {
      this.draggabillies = [];
    }

    init(hypertabContainer) {
      this.hypertabContainer = hypertabContainer;

      this.instanceId = instanceId;
      this.hypertabContainer.setAttribute(
        "data-chrome-tabs-instance-id",
        this.instanceId
      );
      instanceId += 1;

      this.setupCustomProperties();
      this.setupStyleEl();
      this.setupEvents();
      this.layoutTabs();
      this.setupDraggabilly();
    }

    emit(eventName, data) {
      this.hypertabContainer.dispatchEvent(
        new CustomEvent(eventName, { detail: data })
      );
    }

    setupCustomProperties() {
      this.hypertabContainer.style.setProperty(
        "--tab-content-margin",
        `${TAB_CONTENT_MARGIN}px`
      );
    }

    setupStyleEl() {
      this.styleEl = document.createElement("style");
      this.hypertabContainer.appendChild(this.styleEl);
    }

    setupEvents() {
      window.addEventListener("resize", (_) => {
        this.cleanUpPreviouslyDraggedTabs();
        this.layoutTabs();
      });

      this.hypertabContainer.addEventListener("dblclick", (event) => {
        if ([this.hypertabContainer, this.tabContentEl].includes(event.target))
          newTab("ht://newtab");
      });

      this.tabEls.forEach((tabEl) => this.setTabCloseEventListener(tabEl));
    }

    get tabEls() {
      return Array.prototype.slice.call(
        this.hypertabContainer.querySelectorAll(".chrome-tab")
      );
    }
    get pinTabEls() {
      return Array.prototype.slice.call(
        this.hypertabContainer.querySelectorAll(".chrome-tab.pin")
      );
    }
    get nonPinTabEls() {
      return Array.prototype.slice.call(
        this.hypertabContainer.querySelectorAll(".chrome-tab:not(.chrome-tab.pin)")
      );
    }

    get tabContentEl() {
      return this.hypertabContainer.querySelector(".chrome-tabs-content");
    }

    get tabContentWidths() {
      const numberOfTabs = this.tabEls.length;
      const numberOfPinTabs = this.pinTabEls.length;
      const numberOfNonPinnedTabs = this.nonPinTabEls.length;
      const numberOfTabsMath = (numberOfNonPinnedTabs + (numberOfPinTabs * 0.137));
      const tabsContentWidth = this.tabContentEl.clientWidth - (numberOfPinTabs * 29);
      const tabsCumulativeOverlappedWidth = (numberOfTabsMath - 1) * TAB_CONTENT_OVERLAP_DISTANCE;
      const targetWidth = (tabsContentWidth - 2 * TAB_CONTENT_MARGIN + tabsCumulativeOverlappedWidth) / numberOfNonPinnedTabs;
      const clampedTargetWidth = Math.max(TAB_CONTENT_MIN_WIDTH, Math.min(TAB_CONTENT_MAX_WIDTH, targetWidth));
      const flooredClampedTargetWidth = Math.floor(clampedTargetWidth);
      const totalTabsWidthUsingTarget = flooredClampedTargetWidth * 3 * TAB_CONTENT_MARGIN - tabsCumulativeOverlappedWidth;
      const totalExtraWidthDueToFlooring = tabsContentWidth - totalTabsWidthUsingTarget;

      const widths = [];
      let extraWidthRemaining = totalExtraWidthDueToFlooring;
      for (let n = 0; n < numberOfTabs; ++n) {
        if (this.tabEls[n].classList.contains('pin')) {
          widths.push(this.tabEls[n].getBoundingClientRect().width);

        } else {
          const extraWidth = flooredClampedTargetWidth < TAB_CONTENT_MAX_WIDTH && extraWidthRemaining > 0 ? 1 : 0;
          widths.push(flooredClampedTargetWidth + extraWidth);
          if (extraWidthRemaining > 0) extraWidthRemaining -= 1;
        }
      }

      return widths;
    }
    get tabContentPositions() {
      const positions = [];
      const widths = [];
      const tabContentWidths = this.tabContentWidths;
      let position = TAB_CONTENT_MARGIN;
      tabContentWidths.forEach((width, n) => {
        widths.push(width);
        if (widths[n - 1] == 47) {
          position = position - 18;
        }
        const offset = n * TAB_CONTENT_OVERLAP_DISTANCE;
        positions.push(position - offset);
        position += width;
      });
      return positions;
    }

    get tabPositions() {
      const positions = [];
      this.tabContentPositions.forEach((contentPosition) => {
        positions.push(contentPosition - TAB_CONTENT_MARGIN);
      });

      return positions;
    }
    updateTabButton() {
      let toAdd = 12;
      if (document.getElementById(0).children.length != 0) {
        [...document.getElementById('0').children].forEach(tab => {
          toAdd += tab.clientWidth - WINDOW_PADDING_OFFSET;
        });
      }
      if (toAdd <= window.innerWidth - (WINDOW_PADDING_OFFSET * 2.52) && !(this.tabEls.length >= 12)) {
        document
          .getElementById("createTab")
          .setAttribute("style", "margin-left:" + (toAdd) + "px");
      } else {
        document
          .getElementById("createTab")
          .setAttribute(
            "style",
            "margin-left:" + (window.innerWidth - 30) + "px"
          );
      }
    }
    layoutTabs() {
      const tabContentWidths = this.tabContentWidths;

      this.tabEls.forEach((tabEl, i) => {
        const contentWidth = tabContentWidths[i];
        const width = contentWidth + 2 * TAB_CONTENT_MARGIN;

        tabEl.style.width = width + "px";
        tabEl.removeAttribute("is-small");
        tabEl.removeAttribute("is-smaller");
        tabEl.removeAttribute("is-mini");

        if (contentWidth < TAB_SIZE_SMALL) tabEl.setAttribute("is-small", "");
        if (contentWidth < TAB_SIZE_SMALLER)
          tabEl.setAttribute("is-smaller", "");
        if (contentWidth < TAB_SIZE_MINI) tabEl.setAttribute("is-mini", "");
      });
      let styleHTML = "";
      this.tabPositions.forEach((position, n) => {
        styleHTML += `
                  .chrome-tabs[data-chrome-tabs-instance-id="${this.instanceId
          }"] .chrome-tab:nth-child(${n + 1}) {
                    transform: translate3d(${position}px, 0, 0)
                  }
                `;
      });
      this.styleEl.innerHTML = styleHTML;
      this.updateTabButton();
    }

    createNewTabEl() {
      const div = document.createElement("div");
      div.innerHTML = `<div ifd="${tabC++}"class="chrome-tab" onclick="opencity('${tabC}')">
              <div class="chrome-tab-dividers"></div>
              <div class="chrome-tab-background">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"/></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlink:href="#chrome-tab-geometry-left"/></symbol><clipPath id="crop"><rect class="mask" width="100%" height="100%" x="0"/></clipPath></defs><svg width="52%" height="100%"><use xlink:href="#chrome-tab-geometry-left" width="214" height="36" class="chrome-tab-geometry"/></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlink:href="#chrome-tab-geometry-right" width="214" height="36" class="chrome-tab-geometry"/></svg></g></svg>
              </div>
              <div class="chrome-tab-content">
                <div class="chrome-tab-favicon" ></div>
                <div class="chrome-tab-title ${tabC}"></div>
                <div class="chrome-tab-drag-handle"></div>
                <div class="chrome-tab-close" onclick="document.getElementById(${tabC}).remove()"></div>
              </div>
            </div>`;
      return div.firstElementChild;
    }

    addTab(tabProperties, { animate = true, background = false } = {}) {
      const tabEl = this.createNewTabEl();

      if (animate) {
        tabEl.classList.add("chrome-tab-was-just-added");
        setTimeout(
          () => tabEl.classList.remove("chrome-tab-was-just-added"),
          500
        );
      }
      tabEl.addEventListener(
        "contextmenu",
        function (c) {
          ctxTab = this.attributes[0].value;
          document.getElementById("ctx").style.left = c.clientX + "px";
          document.getElementById("ctx").style.top = c.clientY + "px";
          //maybe make javascript that creates/destroys the elements when needed?
          if (document.querySelector(`div[ifd="${+ctxTab}"]`).hasAttribute("tab-is-pinned")) {
            document.getElementById('pin').textContent = "Unpin tab"
            document.getElementById('pin').setAttribute("onclick", "toggleId('ctx');chromeTabs.unpinTab(ctxTab);")
          } else {
            document.getElementById('pin').textContent = "Pin tab"
            document.getElementById('pin').setAttribute("onclick", "toggleId('ctx');chromeTabs.pinTab(ctxTab);")
          }
          openMenu("ctx");
          c.preventDefault();
        },
        false
      );
      tabProperties = Object.assign({}, defaultTabProperties, tabProperties);
      this.tabContentEl.appendChild(tabEl);
      this.setTabCloseEventListener(tabEl);
      this.updateTab(tabEl, tabProperties);
      this.emit("tabAdd", { tabEl });

      if (!background) this.setCurrentTab(tabEl);

      this.cleanUpPreviouslyDraggedTabs();
      this.layoutTabs();
      this.setupDraggabilly();
    }

    setTabCloseEventListener(tabEl) {
      tabEl
        .querySelector(".chrome-tab-close")
        .addEventListener("click", (_) => {
          _.stopPropagation();
          this.removeTab(tabEl);
        });
    }

    get activeTabEl() {
      return this.hypertabContainer.querySelector(".chrome-tab[active]");
    }

    hasActiveTab() {
      return !!this.activeTabEl;
    }

    setCurrentTab(tabEl) {
      const activeTabEl = this.activeTabEl;
      if (activeTabEl === tabEl) return;
      if (activeTabEl) activeTabEl.removeAttribute("active");
      tabEl.setAttribute("active", "");
      this.emit("activeTabChange", { tabEl });
    }

    removeTab(tabEl) {
      if (tabEl === this.activeTabEl) {
        if (tabEl.nextElementSibling) {
          let tempval = +tabEl.nextElementSibling.getAttribute("ifd") + 1;
          document.getElementById(tempval).style =
            "display:inlinebackground: #FFFFFF";
          this.setCurrentTab(tabEl.nextElementSibling);
        } else if (tabEl.previousElementSibling) {
          let tempval = +tabEl.previousElementSibling.getAttribute("ifd") + 1;
          document.getElementById(tempval).style =
            "display:inlinebackground: #FFFFFF";
          this.setCurrentTab(tabEl.previousElementSibling);
        }
      }
      tabEl.parentNode.removeChild(tabEl);
      this.emit("tabRemove", { tabEl });
      this.cleanUpPreviouslyDraggedTabs();
      this.layoutTabs();
      this.setupDraggabilly();
      if (getActiveFrameId()) setInfo(getActiveFrameId());
    }

    updateTab(tabEl, tabProperties) {
      tabEl.querySelector(".chrome-tab-title").textContent =
        tabProperties.title;

      const faviconEl = tabEl.querySelector(".chrome-tab-favicon");
      if (tabProperties.favicon) {
        faviconEl.style.backgroundImage = `url('${tabProperties.favicon}')`;
        faviconEl.removeAttribute("hidden", "");
      } else {
        faviconEl.setAttribute("hidden", "");
        faviconEl.removeAttribute("style");
      }

      if (tabProperties.url) {
      }

      if (tabProperties.id) {
        tabEl.setAttribute("data-tab-id", tabProperties.id);
      }
    }

    cleanUpPreviouslyDraggedTabs() {
      this.tabEls.forEach((tabEl) =>
        tabEl.classList.remove("chrome-tab-was-just-dragged")
      );
    }
    //todo: make updating tab data better AND make it easier to delete them and make them properly update positions when they move.
    // ALSO: need to make elements move to the left/next to other pinned tabs when pinned and not let normal/pinned tabs be mixed
    pinTab(tabId) {
      // setInfo() function checks if a tab is pinned when things change so currently that's how a tab's url get's updated for pinned tabs. (I need to make it update after pins being moved tho which should be easy)
      let tabEL = document.querySelector(`div[ifd="${+tabId}"]`),
        pins = JSON.parse(localStorage.getItem('ctPins')),
        frmEl = document.getElementById(+tabId + 1);
      if (!localStorage.getItem('ctPins')) {
        pins = {};
        pins[0] = ({ 'url': frmEl.contentDocument.URL });
        tabEL.setAttribute('tab-is-pinned', Object.keys(pins).length - 1);
        tabEL.classList.add('pin');
      } else if (tabId == 'update') {
        let pinNum = 0;
        pins = {};
        this.pinTabEls.forEach(tab => {
          tab.setAttribute('tab-is-pinned', pinNum);
          pins[pinNum] = { 'url': document.getElementById(+tab.getAttribute('ifd') + 1).contentDocument.URL };
          pinNum++;
        });
      } else if (tabEL.hasAttribute('tab-is-pinned')) {
        pins[+tabEL.getAttribute('tab-is-pinned')] = ({ 'url': frmEl.contentDocument.URL });
      } else {
        pins[Object.keys(pins).length + 1] = ({ 'url': frmEl.contentDocument.URL });
        tabEL.setAttribute('tab-is-pinned', Object.keys(pins).length);
        tabEL.classList.add('pin');
      }
      console.log('pin tab modification', frmEl, tabEL);
      localStorage.setItem('ctPins', JSON.stringify(pins))
      this.layoutTabs()
    }
    unpinTab(tabId) {
      let tabEL = document.querySelector(`div[ifd="${+tabId}"]`),
        pins = JSON.parse(localStorage.getItem('ctPins'));
      delete pins[+tabEL.getAttribute('tab-is-pinned')];
      tabEL.removeAttribute('tab-is-pinned');
      tabEL.setAttribute('class', 'chrome-tab');
      let pinNum = 0;
        pins = {};
        this.pinTabEls.forEach(tab => {
          tab.setAttribute('tab-is-pinned', pinNum);
          pins[pinNum] = { 'url': document.getElementById(+tab.getAttribute('ifd') + 1).contentDocument.URL };
          pinNum++;
        });
      localStorage.setItem('ctPins', JSON.stringify(pins))
      this.layoutTabs();
    }
    setupDraggabilly() {
      const tabEls = this.tabEls;
      const tabPositions = this.tabPositions;

      if (this.isDragging) {
        this.isDragging = false;
        this.hypertabContainer.classList.remove("chrome-tabs-is-sorting");
        this.draggabillyDragging.element.classList.remove(
          "chrome-tab-is-dragging"
        );
        this.draggabillyDragging.element.style.transform = "";
        this.draggabillyDragging.dragEnd();
        this.draggabillyDragging.isDragging = false;
        this.draggabillyDragging.positionDrag = noop; // Prevent Draggabilly from updating tabEl.style.transform in later frames
        this.draggabillyDragging.destroy();
        this.draggabillyDragging = null;
      }

      this.draggabillies.forEach((d) => d.destroy());

      tabEls.forEach((tabEl, originalIndex) => {
        const originalTabPositionX = tabPositions[originalIndex];
        const draggabilly = new Draggabilly(tabEl, {
          axis: "x",
          handle: ".chrome-tab-drag-handle",
          containment: this.tabContentEl,
        });

        this.draggabillies.push(draggabilly);

        draggabilly.on("pointerDown", (_) => {
          opencity(+tabEl.getAttribute("ifd") + 1);
          this.setCurrentTab(tabEl);
        });

        draggabilly.on("dragStart", (_) => {
          this.isDragging = true;
          this.draggabillyDragging = draggabilly;
          tabEl.classList.add("chrome-tab-is-dragging");
          this.hypertabContainer.classList.add("chrome-tabs-is-sorting");
        });
        // prob modify this for pinning tabs too
        draggabilly.on("dragEnd", (_) => {
          if (tabEl.hasAttribute('tab-is-pinned')) {
            this.pinTab('update');
          }
          this.isDragging = false;
          const finalTranslateX = parseFloat(tabEl.style.left, 10);
          tabEl.style.transform = `translate3d(0, 0, 0)`;

          // Animate dragged tab back into its place
          requestAnimationFrame((_) => {
            tabEl.style.left = "0";
            tabEl.style.transform = `translate3d(${finalTranslateX}px, 0, 0)`;

            requestAnimationFrame((_) => {
              tabEl.classList.remove("chrome-tab-is-dragging");
              this.hypertabContainer.classList.remove("chrome-tabs-is-sorting");

              tabEl.classList.add("chrome-tab-was-just-dragged");

              requestAnimationFrame((_) => {
                tabEl.style.transform = "";

                this.layoutTabs();
                this.setupDraggabilly();
              });
            });
          });
        });

        draggabilly.on("dragMove", (event, pointer, moveVector) => {
          // Current index be computed within the event since it can change during the dragMove
          const tabEls = this.tabEls;
          const currentIndex = tabEls.indexOf(tabEl);

          const currentTabPositionX = originalTabPositionX + moveVector.x;
          const destinationIndexTarget = closest(
            currentTabPositionX,
            tabPositions
          );
          const destinationIndex = Math.max(
            0,
            Math.min(tabEls.length, destinationIndexTarget)
          );

          if (currentIndex !== destinationIndex) {
            this.animateTabMove(tabEl, currentIndex, destinationIndex);
          }
        });
      });
    }

    animateTabMove(tabEl, originIndex, destinationIndex) {
      if (destinationIndex < originIndex) {
        tabEl.parentNode.insertBefore(tabEl, this.tabEls[destinationIndex]);
      } else {
        tabEl.parentNode.insertBefore(tabEl, this.tabEls[destinationIndex + 1]);
      }
      this.emit("tabReorder", { tabEl, originIndex, destinationIndex });
      this.layoutTabs();
    }
  }

  return ChromeTabs;
});









const prefix = "/sw/";
const ACTIVE_WINDOW = () => { return document.getElementById(getActiveFrameId()).contentWindow; }
const CONTENT_WINDOW = (n) => { return document.getElementById(n).contentWindow }
const ACTIVE_DOCUMENT = () => { return document.getElementById(getActiveFrameId()).contentDocument; }

// xor function in one place for easy modification
class xor {
  static encode(str) {
    if (!str) return str;
    return encodeURIComponent(
        str
            .toString()
            .split('')
            .map((char, ind) =>
                ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
            )
            .join('')
    );
}
static decode(str) {
    if (!str) return str;
    let [input, ...search] = str.split('?');

    return (
        decodeURIComponent(input)
            .split('')
            .map((char, ind) =>
                ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
            )
            .join('') + (search.length ? '?' + search.join('?') : '')
    );
}
}
// and setting path easily. (wait this is in the js.js file as prefix though?)
path = "/sw/";

let history = {},
  sir = true;

const htHandler = (url) => {
  // handle URLs accessed through the `ht://` "protocol"
  url = url.slice(5);
  return (
    internal_pages[url] ||
    internal_pages["newtab"] ||
    alert("something is very wrong, please refresh")
  );
};

const getActiveFrameId = () => {
  if (document.querySelector(".chrome-tab[active]"))
    return (
      +document.querySelector(".chrome-tab[active]").getAttribute("ifd") + 1
    );
  return null;
};

function addPageToHistory(id, page) {
  if (!sir) {
    sir = true;
    return;
  }

  if (!(id in history)) {
    history[id] = [[], -1];
  }

  if (history[id][1] < history[id][0].length - 1) {
    history[id][0] = history[id][0].slice(0, history[id][1] + 1);
  }

  if (history[id][0][[history[id].length - 1]] == page) return;

  history[id][0].push(page);
  history[id][1] = history[id][0].length - 1;
}
function getPage(id) {
  return ((history[id] || [])[0] || [])[history[id][1]] || htHandler("ht://newtab");
}
function getBack(id) {
  sir = false;
  history[id][1]--;
  return getPage(id);
}
function getForward(id) {
  if (history[id][1] >= history[id][0].length - 1) return getPage(id);

  sir = false;
  history[id][1]++;
  return getPage(id);
}
// get's bookmark URL
function getIcon(id) {
  let urlIco = CONTENT_WINDOW(id).document.querySelector(
    'link[rel="favicon"], link[rel="shortcut icon"], link[rel="icon"]'
  );
  if (urlIco !== null) {
    return urlIco.href
  } else
    return (
        "http://" +
        CONTENT_WINDOW(id).document.domain +
        + "/favicon.ico"
    );
}
// Sets tab information
function setInfo(frameId) {
  //get current page url.
  let regUrl = CONTENT_WINDOW(frameId).location.href;
  //grabbing title stuff (corrosion sucks with this)
  document.getElementsByClassName(frameId)[0].firstChild.data = CONTENT_WINDOW(frameId).document.title;
  // set the favicon of page
  document.querySelector(
    `div[ifd="${+frameId - 1}"]`
  ).children[2].children[0].attributes[1].value = `background-image: url(${getIcon(
    frameId
  )})`;
  if (document.querySelector(`div[ifd="${+frameId - 1}"]`).hasAttribute('tab-is-pinned')) {
    chromeTabs.pinTab(+frameId - 1);
  }
}
function hideId(...x) {
  // Hides hypertab ID.
  x.forEach((frame) => {
    document.getElementById(frame).style.display = "none";
  });
}
function showId(...x) {
  // Shows hypertab ID.
  x.forEach((frame) => {
    document.getElementById(frame).style.display = "block";
  });
}
function toggleId(...x) {
  // Toggles between two hypertabs
  x.forEach((frame) => {
    if (getComputedStyle(document.getElementById(frame)).display === "none") {
      showId(frame);
    } else {
      hideId(frame);
    }
  });
}
function openMenu(...x) {
  // displays additional settings!
  let elems = x.map((id) => document.getElementById(id));
  let shouldOpen = true;
  elems.forEach((elm) => {
    if (getComputedStyle(elm).display !== "none") shouldOpen = false;
  });
  if (shouldOpen) showId(elems[0].id);
  else elems.forEach((elm) => hideId(elm.id));
}
function inspect() {
  let firebug = document.createElement("script");
  firebug.setAttribute("src", "/fbl/firebug-lite-debug.js");
  ACTIVE_DOCUMENT().body.appendChild(firebug)(function () {
    if (
      ACTIVE_WINDOW().firebug.version
    ) {
      ACTIVE_WINDOW().firebug.init();
    } else {
      setTimeout(arguments.callee);
    }
  })();
  void firebug;
}

function opencity(frame) {
  // creates the actual frame inside the hypertab!
  let proxyFrames = document.getElementsByClassName("iframething");

  for (let iframeIndex = 0; iframeIndex < proxyFrames.length; iframeIndex++)
    proxyFrames[iframeIndex].style.display = "none";

  document.getElementById(frame).style = "display:inline; background: #FFFFFF";
  document.getElementById(frame).focus();

  let regUrl = ACTIVE_WINDOW().location.href;
  // listen for attribute changes with soon to be favicon (not done)
}
function skipAd() {
  while (ACTIVE_DOCUMENT().getElementsByClassName("video-ads")[0].innerHTML !== "") {
    var banner = false;
    for (var i = 0; i < ACTIVE_DOCUMENT().getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
      ACTIVE_DOCUMENT().getElementsByClassName("ytp-ad-overlay-close-button")[i].click();
      banner = true;
    };
    if (banner === false) {
      ACTIVE_DOCUMENT().getElementsByClassName("html5-main-video")[0].currentTime = ACTIVE_DOCUMENT().getElementsByClassName("html5-main-video")[0].duration;
      ACTIVE_DOCUMENT().getElementsByClassName("ytp-ad-skip-button")[0].click();
    };
  };
}
let newTab = (url, uxor = true) => {
  // creates a new hypertab!!
  chromeTabs.addTab({
    title: internal_pages.title,
    favicon: internal_pages.favicon,
  });

  let frameId = tabNum++;
  let frame = document.createElement("IFRAME");

  if (url.startsWith("ht://")) {
    frame.setAttribute("src", htHandler(url));
  }
  else if (uxor == false) {
    frame.setAttribute("src", url);
  } else {
    frame.setAttribute("src", "//" + location.host + path + xor.encode(url));
  }

  frame.setAttribute("allow", "fullscreen");
  frame.setAttribute(
    "sandbox",
    "allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"
  );
  document.body.appendChild(frame);
  frame.setAttribute("class", "iframething");
  frame.setAttribute("style", "display:none background: #FFFFFF");
  frame.setAttribute("id", frameId);
  frame.setAttribute("onload", `setInfo(` + frameId + `)`);

  opencity(frameId);
  return document.querySelector(`div[ifd="${+frameId - 1}"]`);
};

let tabNum = 2; // 0 and 1 are reserved for the GUI
let ctxTab = 1;

let items = [
  "tabbkg",
  "tabhover",
  "tabact",
  "tabacttit",
  "tabinatit",
  "searchbar",
  "ua",
];

document.cookie = `cua=${localStorage.getItem("ua")}`; // custom User Agent (TODO)
// document.head.insertAdjacentHTML("beforeend", `<style>.chrome-tabs.chrome-tabs-dark-theme {background: ${localStorage.getItem('tabbkg')}} .dropdown-content {background-color: ${localStorage.getItem('tabbkg')}} .mock-browser-content {background-color: ${localStorage.getItem('mockb')}} .chrome-tabs.chrome-tabs-dark-theme .chrome-tabs-bottom-bar {background-color: ${localStorage.getItem('tabact')}} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab[active] .chrome-tab-background > svg .chrome-tab-geometry {fill: ${localStorage.getItem('tabact')}} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab .chrome-tab-background > svg .chrome-tab-geometry {fill: ${localStorage.getItem('tabhover')}} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab[active] .chrome-tab-title {color: ${localStorage.getItem('tabacttit')}} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab .chrome-tab-title {color: ${localStorage.getItem('tabinatit')}} #urlbar {background: ${localStorage.getItem('searchbar')} color: ${localStorage.getItem('nt')} } #createTab {color: ${localStorage.getItem('nt')}} .dropdown-content frame {color: ${localStorage.getItem('nt')}} #urlbutton {color: ${localStorage.getItem('nt')}} #options {color: ${localStorage.getItem('nt')}} </style>`)

function setUA(ua) {
  switch (ua) {
    case "chrome":
      break;
    case "firefox":
      break;
    case "iphone":
      break;
    case "ipad":
      break;
    default:
      break;
  }
}
window.toggleActiveExtension = (ext) => {
  if (!ActiveExtensions.active.includes(ext)) {
    console.info("==== ADDED extension ====\n" + ext);
    window.ActiveExtensions.active.push(ext);
  } else {
    console.info("== REMOVED extension ====\n" + ext);
    window.ActiveExtensions.active.pop(ext);
  }
  localStorage.setItem("ActiveExtensions", JSON.stringify(ActiveExtensions));
  console.log(localStorage.getItem("ActiveExtensions"));
};

if (localStorage.getItem("ctPins")) {
  let pins = JSON.parse(localStorage.getItem("ctPins"));
  for (pin in pins) {
    var tab = newTab(pins[pin].url, false);
    tab.setAttribute("tab-is-pinned", pin);
    tab.classList.add("pin");
  };
}
let addEl = (a, b, c) =>
  Object.assign(b.appendChild(document.createElement(a)), c);

let hypertabContainer;
let chromeTabs;

function tabberInit(elem,nocont) {
  elem.innerHTML = atob("PGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyNCw0MDAsMCwwIiAvPgo8bGluayBocmVmPSdodHRwczovL3NjcmlwdC1qcy5naXRodWIuaW8vanMtY3NzL3RhYmJlci5jc3MnIHJlbD0nc3R5bGVzaGVldCc+ICAKPGRpdiBjbGFzcz0nc3VyZmFjZSc+CiAgICA8ZGl2IGNsYXNzPSdtb2NrLWJyb3dzZXInPgogICAgICA8ZGl2IGlkPSJjdHgiIGNsYXNzPSJkcm9wZG93bi1jb250ZW50IiBzdHlsZT0idG9wOjBweDtsZWZ0OjBweDtyaWdodDphdXRvO3otaW5kZXg6OTkiPgogICAgICAgIDxhIGNsYXNzPSJwb2ludGVyIiBpZD0icGluIiBvbmNsaWNrPSJ0b2dnbGVJZCgnY3R4Jyk7Y2hyb21lVGFicy5waW5UYWIoY3R4VGFiKSI+UGluIHRhYjwvYT4gCiAgICAgICAgPGEgY2xhc3M9InBvaW50ZXIiIHN0eWxlPSJtYXJnaW4tbGVmdDogMHB4OyJvbmNsaWNrPSJ0b2dnbGVJZCgnY3R4Jyk7bmV3VGFiKCdodDovL25ld3RhYicpIj5OZXcgdGFiPC9hPgogICAgICAgIDxhIGNsYXNzPSJwb2ludGVyIgogICAgICAgICAgb25jbGljaz0idG9nZ2xlSWQoJ2N0eCcpO2Nocm9tZVRhYnMucmVtb3ZlVGFiKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZmQ9XCcnICsgY3R4VGFiICsgJ1wnXScpWzBdKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJzZUludChjdHhUYWIpICsgMSkucmVtb3ZlKCkiPkNsb3NlPC9hPgogICAgICAgIDxhIGNsYXNzPSJwb2ludGVyIgogICAgICAgICAgb25jbGljaz0idG9nZ2xlSWQoJ2N0eCcpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcnNlSW50KGN0eFRhYikrMSkuY29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSI+R28gSG9tZTwvYT4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9J2Nocm9tZS10YWJzIGNocm9tZS10YWJzLWRhcmstdGhlbWUnIGlkPSJ0YWJzbWFpbiIgc3R5bGU9Jy0tdGFiLWNvbnRlbnQtbWFyZ2luOiA5cHgnPgogICAgICAgIDxkaXYgY2xhc3M9J2Nocm9tZS10YWJzLWNvbnRlbnQnIGlkPScwJz4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSdjaHJvbWUtdGFicy1ib3R0b20tYmFyJz48L2Rpdj4KICAgICAgPC9kaXY+CiAgICAgIDxidXR0b24gc3R5bGU9J21hcmdpbi1sZWZ0OjBweDsnIGNsYXNzPSdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGNocm9tZS10YWInIHN0eWxlPSIiIGRhdGEtYWRkLXRhYiBpZD0nY3JlYXRlVGFiJwogICAgICAgIG9uY2xpY2s9J25ld1RhYigiaHQ6Ly9uZXd0YWIiKSc+YWRkPC9idXR0b24+CiAgICAgIDxkaXYgY2xhc3M9J21vY2stYnJvd3Nlci1jb250ZW50Jz4KICAgICAgICA8YnV0dG9uIGlkPSd1cmxidXR0b24nCiAgICAgICAgICBvbmNsaWNrPSd3aW5kb3cuaGlzdG9yeS5iYWNrKCknIGNsYXNzPSdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHRvb2xpY29uJyBzdHlsZT0iZm9udC1zaXplOiAyN3B4OyBjb2xvcjogZ3JheSI+YXJyb3dfYmFjazwvYnV0dG9uPgogICAgICAgIDxidXR0b24gaWQ9J3VybGJ1dHRvbicKICAgICAgICAgIG9uY2xpY2s9J3dpbmRvdy5oaXN0b3J5LmZvcndhcmQoKScgY2xhc3M9J21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgdG9vbGljb24nIHN0eWxlPSJmb250LXNpemU6IDI3cHg7IGNvbG9yOiBncmF5Ij5hcnJvd19mb3J3YXJkPC9idXR0b24+CiAgICAgICAgPGJ1dHRvbiBpZD0ndXJsYnV0dG9uJyBvbmNsaWNrPSdkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRBY3RpdmVGcmFtZUlkKCkpLnNyYyA9IGludGVybmFsX3BhZ2VzLm5ld3RhYjsnIGNsYXNzPSdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHRvb2xpY29uJyBzdHlsZT0iZm9udC1zaXplOiAyN3B4OyBjb2xvcjogZ3JheSI+aG9tZTwvYnV0dG9uPgogICAgICAgIDxkYXRhbGlzdCBpZD0ic2VhcmNoc3VnZ2VzdGlvbnMiPjwvZGF0YWxpc3Q+CiAgICAgICAgPGRpdiBpZD0iZXh0ZW5zaW9ubGlzdCI+PC9kaXY+CiAgICAgICAgPGJ1dHRvbiBzdHlsZT0iZmxvYXQ6cmlnaHQ7Zm9udC1zaXplOiAyN3B4OyBjb2xvcjogZ3JheTsiIGlkPSd1cmxidXR0b24nIG9uY2xpY2s9J2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldEFjdGl2ZUZyYW1lSWQoKSkucmVxdWVzdEZ1bGxzY3JlZW4oKTsnIGNsYXNzPSdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHRvb2xpY29uJz5mdWxsc2NyZWVuPC9idXR0b24+CiAgICAgICAgICA8YnV0dG9uIGlkPSdvcHRpb25zJyBzdHlsZT0iZmxvYXQ6cmlnaHQiIGhpZGRlbj48c3BhbiBoaWRkZW4+PC9zcGFuPjwvYnV0dG9uPgogICAgICA8L2Rpdj4KICAgIDwvZGl2Pg==")
  document.addEventListener('keydown', key => {
      if (key.ctrlKey) {
        if (document.getElementsByClassName("chrome-tab")[key.key - 1]) {
          document.getElementsByClassName("chrome-tab")[key.key - 1].click()
          chromeTabs.setCurrentTab(document.getElementsByClassName("chrome-tab")[key.key - 1])
          setInfo(document.getElementsByClassName("chrome-tab")[key.key - 1].ifd + 1)
        }
      }
    })
    document.addEventListener('mousedown', pass => {
      if (pass.target.parentElement.id != "optionsdrop")
      if (pass.target.parentElement.id != "ctx") hideId("ctx")

      // there HAS to be a better way to do this.
      if (!pass.target.classList.contains("extenico")) {
        if (document.querySelector(".extension_menu")) if (!pass.target.parentElement.classList.contains("extension_menu") && !pass.target.parentElement.parentElement.classList.contains("extension_menu") && !pass.target.classList.contains("extension_menu")) document.querySelector(".extension_menu").style.display = "none"
      }
    })
    hypertabContainer = document.querySelector(".chrome-tabs");
    chromeTabs = new ChromeTabs();
    chromeTabs.init(hypertabContainer);
    newTab("ht://newtab");
    if (nocont) {
      document.querySelector(".mock-browser-content").style.display = "none"
    } 
}
