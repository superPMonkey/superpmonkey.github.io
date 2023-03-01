! function(e) {
  "function" == typeof define && define.amd ? define(e) : e()
}((function() {
  "use strict";
  /*!
   * Viewer.js v1.10.5
   * https://fengyuanchen.github.io/viewerjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2022-04-05T08:21:02.491Z
   */
  function e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, i)
    }
    return n
  }

  function t(t) {
    for (var n = 1; n < arguments.length; n++) {
      var i = null != arguments[n] ? arguments[n] : {};
      n % 2 ? e(Object(i), !0).forEach((function(e) {
        o(t, e, i[e])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }))
    }
    return t
  }

  function n(e) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, n(e)
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  var a = {
      backdrop: !0,
      button: !0,
      navbar: !0,
      title: !0,
      toolbar: !0,
      className: "",
      container: "body",
      filter: null,
      fullscreen: !0,
      inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
      initialViewIndex: 0,
      inline: !1,
      interval: 5e3,
      keyboard: !0,
      focus: !0,
      loading: !0,
      loop: !0,
      minWidth: 200,
      minHeight: 100,
      movable: !0,
      rotatable: !0,
      scalable: !0,
      zoomable: !0,
      zoomOnTouch: !0,
      zoomOnWheel: !0,
      slideOnTouch: !0,
      toggleOnDblclick: !0,
      tooltip: !0,
      transition: !0,
      zIndex: 2015,
      zIndexInline: 0,
      zoomRatio: .1,
      minZoomRatio: .01,
      maxZoomRatio: 100,
      url: "src",
      ready: null,
      show: null,
      shown: null,
      hide: null,
      hidden: null,
      view: null,
      viewed: null,
      move: null,
      moved: null,
      rotate: null,
      rotated: null,
      scale: null,
      scaled: null,
      zoom: null,
      zoomed: null,
      play: null,
      stop: null
    },
    s = "undefined" != typeof window && void 0 !== window.document,
    l = s ? window : {},
    u = !(!s || !l.document.documentElement) && "ontouchstart" in l.document.documentElement,
    c = !!s && "PointerEvent" in l,
    h = "viewer",
    d = "move",
    f = "switch",
    p = "zoom",
    m = "".concat(h, "-active"),
    g = "".concat(h, "-close"),
    v = "".concat(h, "-fade"),
    y = "".concat(h, "-fixed"),
    b = "".concat(h, "-fullscreen"),
    w = "".concat(h, "-fullscreen-exit"),
    x = "".concat(h, "-hide"),
    T = "".concat(h, "-hide-md-down"),
    C = "".concat(h, "-hide-sm-down"),
    S = "".concat(h, "-hide-xs-down"),
    k = "".concat(h, "-in"),
    D = "".concat(h, "-invisible"),
    E = "".concat(h, "-loading"),
    A = "".concat(h, "-move"),
    N = "".concat(h, "-open"),
    j = "".concat(h, "-show"),
    L = "".concat(h, "-transition"),
    O = "click",
    q = "dblclick",
    M = "dragstart",
    I = "focusin",
    $ = "keydown",
    H = "load",
    P = "error",
    z = c ? "pointerdown" : u ? "touchstart" : "mousedown",
    R = c ? "pointermove" : u ? "touchmove" : "mousemove",
    F = c ? "pointerup pointercancel" : u ? "touchend touchcancel" : "mouseup",
    W = "resize",
    _ = "transitionend",
    B = "wheel",
    Y = "ready",
    X = "show",
    U = "shown",
    V = "hide",
    K = "hidden",
    Q = "view",
    G = "viewed",
    J = "move",
    Z = "moved",
    ee = "rotate",
    te = "rotated",
    ne = "scale",
    ie = "scaled",
    re = "zoom",
    oe = "zoomed",
    ae = "play",
    se = "stop",
    le = "".concat(h, "Action"),
    ue = /\s\s*/,
    ce = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];

  function he(e) {
    return "string" == typeof e
  }
  var de = Number.isNaN || l.isNaN;

  function fe(e) {
    return "number" == typeof e && !de(e)
  }

  function pe(e) {
    return void 0 === e
  }

  function me(e) {
    return "object" === n(e) && null !== e
  }
  var ge = Object.prototype.hasOwnProperty;

  function ve(e) {
    if (!me(e)) return !1;
    try {
      var t = e.constructor,
        n = t.prototype;
      return t && n && ge.call(n, "isPrototypeOf")
    } catch (e) {
      return !1
    }
  }

  function ye(e) {
    return "function" == typeof e
  }

  function be(e, t) {
    if (e && ye(t))
      if (Array.isArray(e) || fe(e.length)) {
        var n, i = e.length;
        for (n = 0; n < i && !1 !== t.call(e, e[n], n, e); n += 1);
      } else me(e) && Object.keys(e).forEach((function(n) {
        t.call(e, e[n], n, e)
      }));
    return e
  }
  var we = Object.assign || function(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
      return me(e) && n.length > 0 && n.forEach((function(t) {
        me(t) && Object.keys(t).forEach((function(n) {
          e[n] = t[n]
        }))
      })), e
    },
    xe = /^(?:width|height|left|top|marginLeft|marginTop)$/;

  function Te(e, t) {
    var n = e.style;
    be(t, (function(e, t) {
      xe.test(t) && fe(e) && (e += "px"), n[t] = e
    }))
  }

  function Ce(e) {
    return he(e) ? e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : e
  }

  function Se(e, t) {
    return !(!e || !t) && (e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1)
  }

  function ke(e, t) {
    if (e && t)
      if (fe(e.length)) be(e, (function(e) {
        ke(e, t)
      }));
      else if (e.classList) e.classList.add(t);
    else {
      var n = e.className.trim();
      n ? n.indexOf(t) < 0 && (e.className = "".concat(n, " ").concat(t)) : e.className = t
    }
  }

  function De(e, t) {
    e && t && (fe(e.length) ? be(e, (function(e) {
      De(e, t)
    })) : e.classList ? e.classList.remove(t) : e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, "")))
  }

  function Ee(e, t, n) {
    t && (fe(e.length) ? be(e, (function(e) {
      Ee(e, t, n)
    })) : n ? ke(e, t) : De(e, t))
  }
  var Ae = /([a-z\d])([A-Z])/g;

  function Ne(e) {
    return e.replace(Ae, "$1-$2").toLowerCase()
  }

  function je(e, t) {
    return me(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(Ne(t)))
  }

  function Le(e, t, n) {
    me(n) ? e[t] = n : e.dataset ? e.dataset[t] = n : e.setAttribute("data-".concat(Ne(t)), n)
  }
  var Oe = function() {
    var e = !1;
    if (s) {
      var t = !1,
        n = function() {},
        i = Object.defineProperty({}, "once", {
          get: function() {
            return e = !0, t
          },
          set: function(e) {
            t = e
          }
        });
      l.addEventListener("test", n, i), l.removeEventListener("test", n, i)
    }
    return e
  }();

  function qe(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      r = n;
    t.trim().split(ue).forEach((function(t) {
      if (!Oe) {
        var o = e.listeners;
        o && o[t] && o[t][n] && (r = o[t][n], delete o[t][n], 0 === Object.keys(o[t]).length && delete o[t], 0 === Object.keys(o).length && delete e.listeners)
      }
      e.removeEventListener(t, r, i)
    }))
  }

  function Me(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      r = n;
    t.trim().split(ue).forEach((function(t) {
      if (i.once && !Oe) {
        var o = e.listeners,
          a = void 0 === o ? {} : o;
        r = function() {
          delete a[t][n], e.removeEventListener(t, r, i);
          for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
          n.apply(e, s)
        }, a[t] || (a[t] = {}), a[t][n] && e.removeEventListener(t, a[t][n], i), a[t][n] = r, e.listeners = a
      }
      e.addEventListener(t, r, i)
    }))
  }

  function Ie(e, n, i, r) {
    var o;
    return ye(Event) && ye(CustomEvent) ? o = new CustomEvent(n, t({
      bubbles: !0,
      cancelable: !0,
      detail: i
    }, r)) : (o = document.createEvent("CustomEvent")).initCustomEvent(n, !0, !0, i), e.dispatchEvent(o)
  }

  function $e(e) {
    var t = e.getBoundingClientRect();
    return {
      left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: t.top + (window.pageYOffset - document.documentElement.clientTop)
    }
  }

  function He(e) {
    var t = e.rotate,
      n = e.scaleX,
      i = e.scaleY,
      r = e.translateX,
      o = e.translateY,
      a = [];
    fe(r) && 0 !== r && a.push("translateX(".concat(r, "px)")), fe(o) && 0 !== o && a.push("translateY(".concat(o, "px)")), fe(t) && 0 !== t && a.push("rotate(".concat(t, "deg)")), fe(n) && 1 !== n && a.push("scaleX(".concat(n, ")")), fe(i) && 1 !== i && a.push("scaleY(".concat(i, ")"));
    var s = a.length ? a.join(" ") : "none";
    return {
      WebkitTransform: s,
      msTransform: s,
      transform: s
    }
  }
  var Pe = l.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(l.navigator.userAgent);

  function ze(e, t, n) {
    var i = document.createElement("img");
    if (e.naturalWidth && !Pe) return n(e.naturalWidth, e.naturalHeight), i;
    var r = document.body || document.documentElement;
    return i.onload = function() {
      n(i.width, i.height), Pe || r.removeChild(i)
    }, be(t.inheritedAttributes, (function(t) {
      var n = e.getAttribute(t);
      null !== n && i.setAttribute(t, n)
    })), i.src = e.src, Pe || (i.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", r.appendChild(i)), i
  }

  function Re(e) {
    switch (e) {
      case 2:
        return S;
      case 3:
        return C;
      case 4:
        return T;
      default:
        return ""
    }
  }

  function Fe(e, n) {
    var i = e.pageX,
      r = e.pageY,
      o = {
        endX: i,
        endY: r
      };
    return n ? o : t({
      timeStamp: Date.now(),
      startX: i,
      startY: r
    }, o)
  }

  function We(e) {
    var t = 0,
      n = 0,
      i = 0;
    return be(e, (function(e) {
      var r = e.startX,
        o = e.startY;
      t += r, n += o, i += 1
    })), {
      pageX: t /= i,
      pageY: n /= i
    }
  }
  var _e, Be = {
      render: function() {
        this.initContainer(), this.initViewer(), this.initList(), this.renderViewer()
      },
      initBody: function() {
        var e = this.element.ownerDocument,
          t = e.body || e.documentElement;
        this.body = t, this.scrollbarWidth = window.innerWidth - e.documentElement.clientWidth, this.initialBodyPaddingRight = t.style.paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(t).paddingRight
      },
      initContainer: function() {
        this.containerData = {
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      initViewer: function() {
        var e, t = this.options,
          n = this.parent;
        t.inline && (e = {
          width: Math.max(n.offsetWidth, t.minWidth),
          height: Math.max(n.offsetHeight, t.minHeight)
        }, this.parentData = e), !this.fulled && e || (e = this.containerData), this.viewerData = we({}, e)
      },
      renderViewer: function() {
        this.options.inline && !this.fulled && Te(this.viewer, this.viewerData)
      },
      initList: function() {
        var e = this,
          t = this.element,
          n = this.options,
          i = this.list,
          r = [];
        i.innerHTML = "", be(this.images, (function(t, o) {
          var a = t.src,
            s = t.alt || function(e) {
              return he(e) ? decodeURIComponent(e.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : ""
            }(a),
            l = e.getImageURL(t);
          if (a || l) {
            var u = document.createElement("li"),
              c = document.createElement("img");
            be(n.inheritedAttributes, (function(e) {
              var n = t.getAttribute(e);
              null !== n && c.setAttribute(e, n)
            })), c.src = a || l, c.alt = s, c.setAttribute("data-original-url", l || a), u.setAttribute("data-index", o), u.setAttribute("data-viewer-action", "view"), u.setAttribute("role", "button"), n.keyboard && u.setAttribute("tabindex", 0), u.appendChild(c), i.appendChild(u), r.push(u)
          }
        })), this.items = r, be(r, (function(t) {
          var i, r, o = t.firstElementChild;
          Le(o, "filled", !0), n.loading && ke(t, E), Me(o, H, i = function(i) {
            qe(o, P, r), n.loading && De(t, E), e.loadImage(i)
          }, {
            once: !0
          }), Me(o, P, r = function() {
            qe(o, H, i), n.loading && De(t, E)
          }, {
            once: !0
          })
        })), n.transition && Me(t, G, (function() {
          ke(i, L)
        }), {
          once: !0
        })
      },
      renderList: function() {
        var e = this.index,
          t = this.items[e];
        if (t) {
          var n = t.nextElementSibling,
            i = parseInt(window.getComputedStyle(n || t).marginLeft, 10),
            r = t.offsetWidth,
            o = r + i;
          Te(this.list, we({
            width: o * this.length - i
          }, He({
            translateX: (this.viewerData.width - r) / 2 - o * e
          })))
        }
      },
      resetList: function() {
        var e = this.list;
        e.innerHTML = "", De(e, L), Te(e, He({
          translateX: 0
        }))
      },
      initImage: function(e) {
        var t, n = this,
          i = this.options,
          r = this.image,
          o = this.viewerData,
          a = this.footer.offsetHeight,
          s = o.width,
          l = Math.max(o.height - a, a),
          u = this.imageData || {};
        this.imageInitializing = {
          abort: function() {
            t.onload = null
          }
        }, t = ze(r, i, (function(t, r) {
          var o = t / r,
            a = s,
            c = l;
          n.imageInitializing = !1, l * o > s ? c = s / o : a = l * o, a = Math.min(.9 * a, t), c = Math.min(.9 * c, r);
          var h = (s - a) / 2,
            d = (l - c) / 2,
            f = {
              left: h,
              top: d,
              x: h,
              y: d,
              width: a,
              height: c,
              oldRatio: 1,
              ratio: a / t,
              aspectRatio: o,
              naturalWidth: t,
              naturalHeight: r
            },
            p = we({}, f);
          i.rotatable && (f.rotate = u.rotate || 0, p.rotate = 0), i.scalable && (f.scaleX = u.scaleX || 1, f.scaleY = u.scaleY || 1, p.scaleX = 1, p.scaleY = 1), n.imageData = f, n.initialImageData = p, e && e()
        }))
      },
      renderImage: function(e) {
        var t = this,
          n = this.image,
          i = this.imageData;
        if (Te(n, we({
            width: i.width,
            height: i.height,
            marginLeft: i.x,
            marginTop: i.y
          }, He(i))), e)
          if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && Se(n, L)) {
            var r = function() {
              t.imageRendering = !1, e()
            };
            this.imageRendering = {
              abort: function() {
                qe(n, _, r)
              }
            }, Me(n, _, r, {
              once: !0
            })
          } else e()
      },
      resetImage: function() {
        if (this.viewing || this.viewed) {
          var e = this.image;
          this.viewing && this.viewing.abort(), e.parentNode.removeChild(e), this.image = null
        }
      }
    },
    Ye = {
      bind: function() {
        var e = this.options,
          t = this.viewer,
          n = this.canvas,
          i = this.element.ownerDocument;
        Me(t, O, this.onClick = this.click.bind(this)), Me(t, M, this.onDragStart = this.dragstart.bind(this)), Me(n, z, this.onPointerDown = this.pointerdown.bind(this)), Me(i, R, this.onPointerMove = this.pointermove.bind(this)), Me(i, F, this.onPointerUp = this.pointerup.bind(this)), Me(i, $, this.onKeyDown = this.keydown.bind(this)), Me(window, W, this.onResize = this.resize.bind(this)), e.zoomable && e.zoomOnWheel && Me(t, B, this.onWheel = this.wheel.bind(this), {
          passive: !1,
          capture: !0
        }), e.toggleOnDblclick && Me(n, q, this.onDblclick = this.dblclick.bind(this))
      },
      unbind: function() {
        var e = this.options,
          t = this.viewer,
          n = this.canvas,
          i = this.element.ownerDocument;
        qe(t, O, this.onClick), qe(t, M, this.onDragStart), qe(n, z, this.onPointerDown), qe(i, R, this.onPointerMove), qe(i, F, this.onPointerUp), qe(i, $, this.onKeyDown), qe(window, W, this.onResize), e.zoomable && e.zoomOnWheel && qe(t, B, this.onWheel, {
          passive: !1,
          capture: !0
        }), e.toggleOnDblclick && qe(n, q, this.onDblclick)
      }
    },
    Xe = {
      click: function(e) {
        var t = this.options,
          n = this.imageData,
          i = e.target,
          r = je(i, le);
        switch (r || "img" !== i.localName || "li" !== i.parentElement.localName || (r = je(i = i.parentElement, le)), u && e.isTrusted && i === this.canvas && clearTimeout(this.clickCanvasTimeout), r) {
          case "mix":
            this.played ? this.stop() : t.inline ? this.fulled ? this.exit() : this.full() : this.hide();
            break;
          case "hide":
            this.hide();
            break;
          case "view":
            this.view(je(i, "index"));
            break;
          case "zoom-in":
            this.zoom(.1, !0);
            break;
          case "zoom-out":
            this.zoom(-.1, !0);
            break;
          case "one-to-one":
            this.toggle();
            break;
          case "reset":
            this.reset();
            break;
          case "prev":
            this.prev(t.loop);
            break;
          case "play":
            this.play(t.fullscreen);
            break;
          case "next":
            this.next(t.loop);
            break;
          case "rotate-left":
            this.rotate(-90);
            break;
          case "rotate-right":
            this.rotate(90);
            break;
          case "flip-horizontal":
            this.scaleX(-n.scaleX || -1);
            break;
          case "flip-vertical":
            this.scaleY(-n.scaleY || -1);
            break;
          default:
            this.played && this.stop()
        }
      },
      dblclick: function(e) {
        e.preventDefault(), this.viewed && e.target === this.image && (u && e.isTrusted && clearTimeout(this.doubleClickImageTimeout), this.toggle(e.isTrusted ? e : e.detail && e.detail.originalEvent))
      },
      load: function() {
        var e = this;
        this.timeout && (clearTimeout(this.timeout), this.timeout = !1);
        var t = this.element,
          n = this.options,
          i = this.image,
          r = this.index,
          o = this.viewerData;
        De(i, D), n.loading && De(this.canvas, E), i.style.cssText = "height:0;" + "margin-left:".concat(o.width / 2, "px;") + "margin-top:".concat(o.height / 2, "px;") + "max-width:none!important;position:relative;width:0;", this.initImage((function() {
          Ee(i, A, n.movable), Ee(i, L, n.transition), e.renderImage((function() {
            e.viewed = !0, e.viewing = !1, ye(n.viewed) && Me(t, G, n.viewed, {
              once: !0
            }), Ie(t, G, {
              originalImage: e.images[r],
              index: r,
              image: i
            }, {
              cancelable: !1
            })
          }))
        }))
      },
      loadImage: function(e) {
        var t = e.target,
          n = t.parentNode,
          i = n.offsetWidth || 30,
          r = n.offsetHeight || 50,
          o = !!je(t, "filled");
        ze(t, this.options, (function(e, n) {
          var a = e / n,
            s = i,
            l = r;
          r * a > i ? o ? s = r * a : l = i / a : o ? l = i / a : s = r * a, Te(t, we({
            width: s,
            height: l
          }, He({
            translateX: (i - s) / 2,
            translateY: (r - l) / 2
          })))
        }))
      },
      keydown: function(e) {
        var t = this.options;
        if (t.keyboard) {
          var n = e.keyCode || e.which || e.charCode;
          if (13 === n) this.viewer.contains(e.target) && this.click(e);
          if (this.fulled) switch (n) {
            case 27:
              this.played ? this.stop() : t.inline ? this.fulled && this.exit() : this.hide();
              break;
            case 32:
              this.played && this.stop();
              break;
            case 37:
              this.prev(t.loop);
              break;
            case 38:
              e.preventDefault(), this.zoom(t.zoomRatio, !0);
              break;
            case 39:
              this.next(t.loop);
              break;
            case 40:
              e.preventDefault(), this.zoom(-t.zoomRatio, !0);
              break;
            case 48:
            case 49:
              e.ctrlKey && (e.preventDefault(), this.toggle())
          }
        }
      },
      dragstart: function(e) {
        "img" === e.target.localName && e.preventDefault()
      },
      pointerdown: function(e) {
        var t = this.options,
          n = this.pointers,
          i = e.buttons,
          r = e.button;
        if (!(!this.viewed || this.showing || this.viewing || this.hiding || ("mousedown" === e.type || "pointerdown" === e.type && "mouse" === e.pointerType) && (fe(i) && 1 !== i || fe(r) && 0 !== r || e.ctrlKey))) {
          e.preventDefault(), e.changedTouches ? be(e.changedTouches, (function(e) {
            n[e.identifier] = Fe(e)
          })) : n[e.pointerId || 0] = Fe(e);
          var o = !!t.movable && d;
          t.zoomOnTouch && t.zoomable && Object.keys(n).length > 1 ? o = p : t.slideOnTouch && ("touch" === e.pointerType || "touchstart" === e.type) && this.isSwitchable() && (o = f), !t.transition || o !== d && o !== p || De(this.image, L), this.action = o
        }
      },
      pointermove: function(e) {
        var t = this.pointers,
          n = this.action;
        this.viewed && n && (e.preventDefault(), e.changedTouches ? be(e.changedTouches, (function(e) {
          we(t[e.identifier] || {}, Fe(e, !0))
        })) : we(t[e.pointerId || 0] || {}, Fe(e, !0)), this.change(e))
      },
      pointerup: function(e) {
        var t, n = this,
          i = this.options,
          r = this.action,
          o = this.pointers;
        e.changedTouches ? be(e.changedTouches, (function(e) {
          t = o[e.identifier], delete o[e.identifier]
        })) : (t = o[e.pointerId || 0], delete o[e.pointerId || 0]), r && (e.preventDefault(), !i.transition || r !== d && r !== p || ke(this.image, L), this.action = !1, u && r !== p && t && Date.now() - t.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this.doubleClickImageTimeout), i.toggleOnDblclick && this.viewed && e.target === this.image ? this.imageClicked ? (this.imageClicked = !1, this.doubleClickImageTimeout = setTimeout((function() {
          Ie(n.image, q, {
            originalEvent: e
          })
        }), 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout((function() {
          n.imageClicked = !1
        }), 500)) : (this.imageClicked = !1, i.backdrop && "static" !== i.backdrop && e.target === this.canvas && (this.clickCanvasTimeout = setTimeout((function() {
          Ie(n.canvas, O, {
            originalEvent: e
          })
        }), 50)))))
      },
      resize: function() {
        var e = this;
        if (this.isShown && !this.hiding && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), this.renderList(), this.viewed && this.initImage((function() {
            e.renderImage()
          })), this.played)) {
          if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) return void this.stop();
          be(this.player.getElementsByTagName("img"), (function(t) {
            Me(t, H, e.loadImage.bind(e), {
              once: !0
            }), Ie(t, H)
          }))
        }
      },
      wheel: function(e) {
        var t = this;
        if (this.viewed && (e.preventDefault(), !this.wheeling)) {
          this.wheeling = !0, setTimeout((function() {
            t.wheeling = !1
          }), 50);
          var n = Number(this.options.zoomRatio) || .1,
            i = 1;
          e.deltaY ? i = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? i = -e.wheelDelta / 120 : e.detail && (i = e.detail > 0 ? 1 : -1), this.zoom(-i * n, !0, e)
        }
      }
    },
    Ue = {
      show: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = this.element,
          n = this.options;
        if (n.inline || this.showing || this.isShown || this.showing) return this;
        if (!this.ready) return this.build(), this.ready && this.show(e), this;
        if (ye(n.show) && Me(t, X, n.show, {
            once: !0
          }), !1 === Ie(t, X) || !this.ready) return this;
        this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
        var i = this.viewer;
        if (De(i, x), i.setAttribute("role", "dialog"), i.setAttribute("aria-labelledby", this.title.id), i.setAttribute("aria-modal", !0), i.removeAttribute("aria-hidden"), n.transition && !e) {
          var r = this.shown.bind(this);
          this.transitioning = {
            abort: function() {
              qe(i, _, r), De(i, k)
            }
          }, ke(i, L), i.initialOffsetWidth = i.offsetWidth, Me(i, _, r, {
            once: !0
          }), ke(i, k)
        } else ke(i, k), this.shown();
        return this
      },
      hide: function() {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = this.element,
          i = this.options;
        if (i.inline || this.hiding || !this.isShown && !this.showing) return this;
        if (ye(i.hide) && Me(n, V, i.hide, {
            once: !0
          }), !1 === Ie(n, V)) return this;
        this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
        var r = this.viewer,
          o = this.image,
          a = function() {
            De(r, k), e.hidden()
          };
        if (i.transition && !t) {
          var s = function t(n) {
              n && n.target === r && (qe(r, _, t), e.hidden())
            },
            l = function() {
              Se(r, L) ? (Me(r, _, s), De(r, k)) : a()
            };
          this.transitioning = {
            abort: function() {
              e.viewed && Se(o, L) ? qe(o, _, l) : Se(r, L) && qe(r, _, s)
            }
          }, this.viewed && Se(o, L) ? (Me(o, _, l, {
            once: !0
          }), this.zoomTo(0, !1, null, !0)) : l()
        } else a();
        return this
      },
      view: function() {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.initialViewIndex;
        if (t = Number(t) || 0, this.hiding || this.played || t < 0 || t >= this.length || this.viewed && t === this.index) return this;
        if (!this.isShown) return this.index = t, this.show();
        this.viewing && this.viewing.abort();
        var n = this.element,
          i = this.options,
          r = this.title,
          o = this.canvas,
          a = this.items[t],
          s = a.querySelector("img"),
          l = je(s, "originalUrl"),
          u = s.getAttribute("alt"),
          c = document.createElement("img");
        if (be(i.inheritedAttributes, (function(e) {
            var t = s.getAttribute(e);
            null !== t && c.setAttribute(e, t)
          })), c.src = l, c.alt = u, ye(i.view) && Me(n, Q, i.view, {
            once: !0
          }), !1 === Ie(n, Q, {
            originalImage: this.images[t],
            index: t,
            image: c
          }) || !this.isShown || this.hiding || this.played) return this;
        var h = this.items[this.index];
        h && (De(h, m), h.removeAttribute("aria-selected")), ke(a, m), a.setAttribute("aria-selected", !0), i.focus && a.focus(), this.image = c, this.viewed = !1, this.index = t, this.imageData = {}, ke(c, D), i.loading && ke(o, E), o.innerHTML = "", o.appendChild(c), this.renderList(), r.innerHTML = "";
        var d, f, p = function() {
          var t = e.imageData,
            n = Array.isArray(i.title) ? i.title[1] : i.title;
          r.innerHTML = Ce(ye(n) ? n.call(e, c, t) : "".concat(u, " (").concat(t.naturalWidth, " × ").concat(t.naturalHeight, ")"))
        };
        return Me(n, G, p, {
          once: !0
        }), this.viewing = {
          abort: function() {
            qe(n, G, p), c.complete ? e.imageRendering ? e.imageRendering.abort() : e.imageInitializing && e.imageInitializing.abort() : (c.src = "", qe(c, H, d), e.timeout && clearTimeout(e.timeout))
          }
        }, c.complete ? this.load() : (Me(c, H, d = function() {
          qe(c, P, f), e.load()
        }, {
          once: !0
        }), Me(c, P, f = function() {
          qe(c, H, d), e.timeout && (clearTimeout(e.timeout), e.timeout = !1), De(c, D), i.loading && De(e.canvas, E)
        }, {
          once: !0
        }), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout((function() {
          De(c, D), e.timeout = !1
        }), 1e3)), this
      },
      prev: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = this.index - 1;
        return t < 0 && (t = e ? this.length - 1 : 0), this.view(t), this
      },
      next: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = this.length - 1,
          n = this.index + 1;
        return n > t && (n = e ? 0 : t), this.view(n), this
      },
      move: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          n = this.imageData;
        return this.moveTo(pe(e) ? e : n.x + Number(e), pe(t) ? t : n.y + Number(t)), this
      },
      moveTo: function(e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = this.element,
          o = this.options,
          a = this.imageData;
        if (e = Number(e), n = Number(n), this.viewed && !this.played && o.movable) {
          var s = a.x,
            l = a.y,
            u = !1;
          if (fe(e) ? u = !0 : e = s, fe(n) ? u = !0 : n = l, u) {
            if (ye(o.move) && Me(r, J, o.move, {
                once: !0
              }), !1 === Ie(r, J, {
                x: e,
                y: n,
                oldX: s,
                oldY: l,
                originalEvent: i
              })) return this;
            a.x = e, a.y = n, a.left = e, a.top = n, this.moving = !0, this.renderImage((function() {
              t.moving = !1, ye(o.moved) && Me(r, Z, o.moved, {
                once: !0
              }), Ie(r, Z, {
                x: e,
                y: n,
                oldX: s,
                oldY: l,
                originalEvent: i
              }, {
                cancelable: !1
              })
            }))
          }
        }
        return this
      },
      rotate: function(e) {
        return this.rotateTo((this.imageData.rotate || 0) + Number(e)), this
      },
      rotateTo: function(e) {
        var t = this,
          n = this.element,
          i = this.options,
          r = this.imageData;
        if (fe(e = Number(e)) && this.viewed && !this.played && i.rotatable) {
          var o = r.rotate;
          if (ye(i.rotate) && Me(n, ee, i.rotate, {
              once: !0
            }), !1 === Ie(n, ee, {
              degree: e,
              oldDegree: o
            })) return this;
          r.rotate = e, this.rotating = !0, this.renderImage((function() {
            t.rotating = !1, ye(i.rotated) && Me(n, te, i.rotated, {
              once: !0
            }), Ie(n, te, {
              degree: e,
              oldDegree: o
            }, {
              cancelable: !1
            })
          }))
        }
        return this
      },
      scaleX: function(e) {
        return this.scale(e, this.imageData.scaleY), this
      },
      scaleY: function(e) {
        return this.scale(this.imageData.scaleX, e), this
      },
      scale: function(e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          i = this.element,
          r = this.options,
          o = this.imageData;
        if (e = Number(e), n = Number(n), this.viewed && !this.played && r.scalable) {
          var a = o.scaleX,
            s = o.scaleY,
            l = !1;
          if (fe(e) ? l = !0 : e = a, fe(n) ? l = !0 : n = s, l) {
            if (ye(r.scale) && Me(i, ne, r.scale, {
                once: !0
              }), !1 === Ie(i, ne, {
                scaleX: e,
                scaleY: n,
                oldScaleX: a,
                oldScaleY: s
              })) return this;
            o.scaleX = e, o.scaleY = n, this.scaling = !0, this.renderImage((function() {
              t.scaling = !1, ye(r.scaled) && Me(i, ie, r.scaled, {
                once: !0
              }), Ie(i, ie, {
                scaleX: e,
                scaleY: n,
                oldScaleX: a,
                oldScaleY: s
              }, {
                cancelable: !1
              })
            }))
          }
        }
        return this
      },
      zoom: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          i = this.imageData;
        return e = (e = Number(e)) < 0 ? 1 / (1 - e) : 1 + e, this.zoomTo(i.width * e / i.naturalWidth, t, n), this
      },
      zoomTo: function(e) {
        var t = this,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = this.element,
          a = this.options,
          s = this.pointers,
          l = this.imageData,
          u = l.x,
          c = l.y,
          h = l.width,
          d = l.height,
          f = l.naturalWidth,
          p = l.naturalHeight;
        if (fe(e = Math.max(0, e)) && this.viewed && !this.played && (r || a.zoomable)) {
          if (!r) {
            var m = Math.max(.01, a.minZoomRatio),
              g = Math.min(100, a.maxZoomRatio);
            e = Math.min(Math.max(e, m), g)
          }
          if (i) switch (i.type) {
            case "wheel":
              a.zoomRatio >= .055 && e > .95 && e < 1.05 && (e = 1);
              break;
            case "pointermove":
            case "touchmove":
            case "mousemove":
              e > .99 && e < 1.01 && (e = 1)
          }
          var v = f * e,
            y = p * e,
            b = v - h,
            w = y - d,
            x = l.ratio;
          if (ye(a.zoom) && Me(o, re, a.zoom, {
              once: !0
            }), !1 === Ie(o, re, {
              ratio: e,
              oldRatio: x,
              originalEvent: i
            })) return this;
          if (this.zooming = !0, i) {
            var T = $e(this.viewer),
              C = s && Object.keys(s).length > 0 ? We(s) : {
                pageX: i.pageX,
                pageY: i.pageY
              };
            l.x -= b * ((C.pageX - T.left - u) / h), l.y -= w * ((C.pageY - T.top - c) / d)
          } else l.x -= b / 2, l.y -= w / 2;
          l.left = l.x, l.top = l.y, l.width = v, l.height = y, l.oldRatio = x, l.ratio = e, this.renderImage((function() {
            t.zooming = !1, ye(a.zoomed) && Me(o, oe, a.zoomed, {
              once: !0
            }), Ie(o, oe, {
              ratio: e,
              oldRatio: x,
              originalEvent: i
            }, {
              cancelable: !1
            })
          })), n && this.tooltip()
        }
        return this
      },
      play: function() {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.isShown || this.played) return this;
        var n = this.element,
          i = this.options;
        if (ye(i.play) && Me(n, ae, i.play, {
            once: !0
          }), !1 === Ie(n, ae)) return this;
        var r = this.player,
          o = this.loadImage.bind(this),
          a = [],
          s = 0,
          l = 0;
        if (this.played = !0, this.onLoadWhenPlay = o, t && this.requestFullscreen(t), ke(r, j), be(this.items, (function(e, t) {
            var n = e.querySelector("img"),
              u = document.createElement("img");
            u.src = je(n, "originalUrl"), u.alt = n.getAttribute("alt"), u.referrerPolicy = n.referrerPolicy, s += 1, ke(u, v), Ee(u, L, i.transition), Se(e, m) && (ke(u, k), l = t), a.push(u), Me(u, H, o, {
              once: !0
            }), r.appendChild(u)
          })), fe(i.interval) && i.interval > 0) {
          var u = function t() {
            e.playing = setTimeout((function() {
              De(a[l], k), ke(a[l = (l += 1) < s ? l : 0], k), t()
            }), i.interval)
          };
          s > 1 && u()
        }
        return this
      },
      stop: function() {
        var e = this;
        if (!this.played) return this;
        var t = this.element,
          n = this.options;
        if (ye(n.stop) && Me(t, se, n.stop, {
            once: !0
          }), !1 === Ie(t, se)) return this;
        var i = this.player;
        return this.played = !1, clearTimeout(this.playing), be(i.getElementsByTagName("img"), (function(t) {
          qe(t, H, e.onLoadWhenPlay)
        })), De(i, j), i.innerHTML = "", this.exitFullscreen(), this
      },
      full: function() {
        var e = this,
          t = this.options,
          n = this.viewer,
          i = this.image,
          r = this.list;
        return !this.isShown || this.played || this.fulled || !t.inline || (this.fulled = !0, this.open(), ke(this.button, w), t.transition && (De(r, L), this.viewed && De(i, L)), ke(n, y), n.setAttribute("role", "dialog"), n.setAttribute("aria-labelledby", this.title.id), n.setAttribute("aria-modal", !0), n.removeAttribute("style"), Te(n, {
          zIndex: t.zIndex
        }), t.focus && this.enforceFocus(), this.initContainer(), this.viewerData = we({}, this.containerData), this.renderList(), this.viewed && this.initImage((function() {
          e.renderImage((function() {
            t.transition && setTimeout((function() {
              ke(i, L), ke(r, L)
            }), 0)
          }))
        }))), this
      },
      exit: function() {
        var e = this,
          t = this.options,
          n = this.viewer,
          i = this.image,
          r = this.list;
        return this.isShown && !this.played && this.fulled && t.inline ? (this.fulled = !1, this.close(), De(this.button, w), t.transition && (De(r, L), this.viewed && De(i, L)), t.focus && this.clearEnforceFocus(), n.removeAttribute("role"), n.removeAttribute("aria-labelledby"), n.removeAttribute("aria-modal"), De(n, y), Te(n, {
          zIndex: t.zIndexInline
        }), this.viewerData = we({}, this.parentData), this.renderViewer(), this.renderList(), this.viewed && this.initImage((function() {
          e.renderImage((function() {
            t.transition && setTimeout((function() {
              ke(i, L), ke(r, L)
            }), 0)
          }))
        })), this) : this
      },
      tooltip: function() {
        var e = this,
          t = this.options,
          n = this.tooltipBox,
          i = this.imageData;
        return this.viewed && !this.played && t.tooltip ? (n.textContent = "".concat(Math.round(100 * i.ratio), "%"), this.tooltipping ? clearTimeout(this.tooltipping) : t.transition ? (this.fading && Ie(n, _), ke(n, j), ke(n, v), ke(n, L), n.removeAttribute("aria-hidden"), n.initialOffsetWidth = n.offsetWidth, ke(n, k)) : (ke(n, j), n.removeAttribute("aria-hidden")), this.tooltipping = setTimeout((function() {
          t.transition ? (Me(n, _, (function() {
            De(n, j), De(n, v), De(n, L), n.setAttribute("aria-hidden", !0), e.fading = !1
          }), {
            once: !0
          }), De(n, k), e.fading = !0) : (De(n, j), n.setAttribute("aria-hidden", !0)), e.tooltipping = !1
        }), 1e3), this) : this
      },
      toggle: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return 1 === this.imageData.ratio ? this.zoomTo(this.imageData.oldRatio, !0, e) : this.zoomTo(1, !0, e), this
      },
      reset: function() {
        return this.viewed && !this.played && (this.imageData = we({}, this.initialImageData), this.renderImage()), this
      },
      update: function() {
        var e = this,
          t = this.element,
          n = this.options,
          i = this.isImg;
        if (i && !t.parentNode) return this.destroy();
        var r = [];
        if (be(i ? [t] : t.querySelectorAll("img"), (function(t) {
            ye(n.filter) ? n.filter.call(e, t) && r.push(t) : e.getImageURL(t) && r.push(t)
          })), !r.length) return this;
        if (this.images = r, this.length = r.length, this.ready) {
          var o = [];
          if (be(this.items, (function(e, t) {
              var n = e.querySelector("img"),
                i = r[t];
              i && n && i.src === n.src && i.alt === n.alt || o.push(t)
            })), Te(this.list, {
              width: "auto"
            }), this.initList(), this.isShown)
            if (this.length) {
              if (this.viewed) {
                var a = o.indexOf(this.index);
                if (a >= 0) this.viewed = !1, this.view(Math.max(Math.min(this.index - a, this.length - 1), 0));
                else {
                  var s = this.items[this.index];
                  ke(s, m), s.setAttribute("aria-selected", !0)
                }
              }
            } else this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, this.canvas.innerHTML = "", this.title.innerHTML = ""
        } else this.build();
        return this
      },
      destroy: function() {
        var e = this.element,
          t = this.options;
        return e.viewer ? (this.destroyed = !0, this.ready ? (this.played && this.stop(), t.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : t.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), t.inline || qe(e, O, this.onStart), e.viewer = void 0, this) : this
      }
    },
    Ve = {
      getImageURL: function(e) {
        var t = this.options.url;
        return t = he(t) ? e.getAttribute(t) : ye(t) ? t.call(this, e) : ""
      },
      enforceFocus: function() {
        var e = this;
        this.clearEnforceFocus(), Me(document, I, this.onFocusin = function(t) {
          var n = e.viewer,
            i = t.target;
          if (i !== document && i !== n && !n.contains(i)) {
            for (; i;) {
              if (null !== i.getAttribute("tabindex") || "true" === i.getAttribute("aria-modal")) return;
              i = i.parentElement
            }
            n.focus()
          }
        })
      },
      clearEnforceFocus: function() {
        this.onFocusin && (qe(document, I, this.onFocusin), this.onFocusin = null)
      },
      open: function() {
        var e = this.body;
        ke(e, N), e.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px")
      },
      close: function() {
        var e = this.body;
        De(e, N), e.style.paddingRight = this.initialBodyPaddingRight
      },
      shown: function() {
        var e = this.element,
          t = this.options,
          n = this.viewer;
        this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, t.focus && (n.focus(), this.enforceFocus()), ye(t.shown) && Me(e, U, t.shown, {
          once: !0
        }), !1 !== Ie(e, U) && this.ready && this.isShown && !this.hiding && this.view(this.index)
      },
      hidden: function() {
        var e = this.element,
          t = this.options,
          n = this.viewer;
        t.fucus && this.clearEnforceFocus(), this.fulled = !1, this.viewed = !1, this.isShown = !1, this.close(), this.unbind(), ke(n, x), n.removeAttribute("role"), n.removeAttribute("aria-labelledby"), n.removeAttribute("aria-modal"), n.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), this.hiding = !1, this.destroyed || (ye(t.hidden) && Me(e, K, t.hidden, {
          once: !0
        }), Ie(e, K, null, {
          cancelable: !1
        }))
      },
      requestFullscreen: function(e) {
        var t = this.element.ownerDocument;
        if (this.fulled && !(t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement)) {
          var n = t.documentElement;
          n.requestFullscreen ? ve(e) ? n.requestFullscreen(e) : n.requestFullscreen() : n.webkitRequestFullscreen ? n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.msRequestFullscreen && n.msRequestFullscreen()
        }
      },
      exitFullscreen: function() {
        var e = this.element.ownerDocument;
        this.fulled && (e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement) && (e.exitFullscreen ? e.exitFullscreen() : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.msExitFullscreen && e.msExitFullscreen())
      },
      change: function(e) {
        var n = this.options,
          i = this.pointers,
          r = i[Object.keys(i)[0]];
        if (r) {
          var o = r.endX - r.startX,
            a = r.endY - r.startY;
          switch (this.action) {
            case d:
              this.move(o, a, e);
              break;
            case p:
              this.zoom(function(e) {
                var n = t({}, e),
                  i = [];
                return be(e, (function(e, t) {
                  delete n[t], be(n, (function(t) {
                    var n = Math.abs(e.startX - t.startX),
                      r = Math.abs(e.startY - t.startY),
                      o = Math.abs(e.endX - t.endX),
                      a = Math.abs(e.endY - t.endY),
                      s = Math.sqrt(n * n + r * r),
                      l = (Math.sqrt(o * o + a * a) - s) / s;
                    i.push(l)
                  }))
                })), i.sort((function(e, t) {
                  return Math.abs(e) < Math.abs(t)
                })), i[0]
              }(i), !1, e);
              break;
            case f:
              this.action = "switched";
              var s = Math.abs(o);
              s > 1 && s > Math.abs(a) && (this.pointers = {}, o > 1 ? this.prev(n.loop) : o < -1 && this.next(n.loop))
          }
          be(i, (function(e) {
            e.startX = e.endX, e.startY = e.endY
          }))
        }
      },
      isSwitchable: function() {
        var e = this.imageData,
          t = this.viewerData;
        return this.length > 1 && e.x >= 0 && e.y >= 0 && e.width <= t.width && e.height <= t.height
      }
    },
    Ke = l.Viewer,
    Qe = (_e = -1, function() {
      return _e += 1
    }),
    Ge = function() {
      function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (i(this, e), !t || 1 !== t.nodeType) throw new Error("The first argument is required and must be an element.");
        this.element = t, this.options = we({}, a, ve(n) && n), this.action = !1, this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zooming = !1, this.id = Qe(), this.init()
      }
      var t, n, o;
      return t = e, o = [{
        key: "noConflict",
        value: function() {
          return window.Viewer = Ke, e
        }
      }, {
        key: "setDefaults",
        value: function(e) {
          we(a, ve(e) && e)
        }
      }], (n = [{
        key: "init",
        value: function() {
          var e = this,
            t = this.element,
            n = this.options;
          if (!t.viewer) {
            t.viewer = this, n.focus && !n.keyboard && (n.focus = !1);
            var i = "img" === t.localName,
              r = [];
            if (be(i ? [t] : t.querySelectorAll("img"), (function(t) {
                ye(n.filter) ? n.filter.call(e, t) && r.push(t) : e.getImageURL(t) && r.push(t)
              })), this.isImg = i, this.length = r.length, this.images = r, this.initBody(), pe(document.createElement(h).style.transition) && (n.transition = !1), n.inline) {
              var o = 0,
                a = function() {
                  var t;
                  (o += 1) === e.length && (e.initializing = !1, e.delaying = {
                    abort: function() {
                      clearTimeout(t)
                    }
                  }, t = setTimeout((function() {
                    e.delaying = !1, e.build()
                  }), 0))
                };
              this.initializing = {
                abort: function() {
                  be(r, (function(e) {
                    e.complete || (qe(e, H, a), qe(e, P, a))
                  }))
                }
              }, be(r, (function(e) {
                var t, n;
                e.complete ? a() : (Me(e, H, t = function() {
                  qe(e, P, n), a()
                }, {
                  once: !0
                }), Me(e, P, n = function() {
                  qe(e, H, t), a()
                }, {
                  once: !0
                }))
              }))
            } else Me(t, O, this.onStart = function(t) {
              var i = t.target;
              "img" !== i.localName || ye(n.filter) && !n.filter.call(e, i) || e.view(e.images.indexOf(i))
            })
          }
        }
      }, {
        key: "build",
        value: function() {
          if (!this.ready) {
            var e = this.element,
              t = this.options,
              n = e.parentNode,
              i = document.createElement("div");
            i.innerHTML = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
            var r = i.querySelector(".".concat(h, "-container")),
              o = r.querySelector(".".concat(h, "-title")),
              a = r.querySelector(".".concat(h, "-toolbar")),
              s = r.querySelector(".".concat(h, "-navbar")),
              l = r.querySelector(".".concat(h, "-button")),
              u = r.querySelector(".".concat(h, "-canvas"));
            if (this.parent = n, this.viewer = r, this.title = o, this.toolbar = a, this.navbar = s, this.button = l, this.canvas = u, this.footer = r.querySelector(".".concat(h, "-footer")), this.tooltipBox = r.querySelector(".".concat(h, "-tooltip")), this.player = r.querySelector(".".concat(h, "-player")), this.list = r.querySelector(".".concat(h, "-list")), r.id = "".concat(h).concat(this.id), o.id = "".concat(h, "Title").concat(this.id), ke(o, t.title ? Re(Array.isArray(t.title) ? t.title[0] : t.title) : x), ke(s, t.navbar ? Re(t.navbar) : x), Ee(l, x, !t.button), t.keyboard && l.setAttribute("tabindex", 0), t.backdrop && (ke(r, "".concat(h, "-backdrop")), t.inline || "static" === t.backdrop || Le(u, le, "hide")), he(t.className) && t.className && t.className.split(ue).forEach((function(e) {
                ke(r, e)
              })), t.toolbar) {
              var c = document.createElement("ul"),
                d = ve(t.toolbar),
                f = ce.slice(0, 3),
                p = ce.slice(7, 9),
                m = ce.slice(9);
              d || ke(a, Re(t.toolbar)), be(d ? t.toolbar : ce, (function(e, n) {
                var i = d && ve(e),
                  r = d ? Ne(n) : e,
                  o = i && !pe(e.show) ? e.show : e;
                if (o && (t.zoomable || -1 === f.indexOf(r)) && (t.rotatable || -1 === p.indexOf(r)) && (t.scalable || -1 === m.indexOf(r))) {
                  var a = i && !pe(e.size) ? e.size : e,
                    s = i && !pe(e.click) ? e.click : e,
                    l = document.createElement("li");
                  t.keyboard && l.setAttribute("tabindex", 0), l.setAttribute("role", "button"), ke(l, "".concat(h, "-").concat(r)), ye(s) || Le(l, le, r), fe(o) && ke(l, Re(o)), -1 !== ["small", "large"].indexOf(a) ? ke(l, "".concat(h, "-").concat(a)) : "play" === r && ke(l, "".concat(h, "-large")), ye(s) && Me(l, O, s), c.appendChild(l)
                }
              })), a.appendChild(c)
            } else ke(a, x);
            if (!t.rotatable) {
              var w = a.querySelectorAll('li[class*="rotate"]');
              ke(w, D), be(w, (function(e) {
                a.appendChild(e)
              }))
            }
            if (t.inline) ke(l, b), Te(r, {
              zIndex: t.zIndexInline
            }), "static" === window.getComputedStyle(n).position && Te(n, {
              position: "relative"
            }), n.insertBefore(r, e.nextSibling);
            else {
              ke(l, g), ke(r, y), ke(r, v), ke(r, x), Te(r, {
                zIndex: t.zIndex
              });
              var T = t.container;
              he(T) && (T = e.ownerDocument.querySelector(T)), T || (T = this.body), T.appendChild(r)
            }
            t.inline && (this.render(), this.bind(), this.isShown = !0), this.ready = !0, ye(t.ready) && Me(e, Y, t.ready, {
              once: !0
            }), !1 !== Ie(e, Y) ? this.ready && t.inline && this.view(this.index) : this.ready = !1
          }
        }
      }]) && r(t.prototype, n), o && r(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();
  we(Ge.prototype, Be, Ye, Xe, Ue, Ve);
  var Je, Ze = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    et = {
      exports: {}
    };
  /*!
   * jQuery JavaScript Library v3.6.0
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2021-03-02T17:08Z
   */
  Je = et,
    function(e, t) {
      Je.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
      }
    }("undefined" != typeof window ? window : Ze, (function(e, t) {
      var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat ? function(e) {
          return n.flat.call(e)
        } : function(e) {
          return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        h = c.toString,
        d = h.call(Object),
        f = {},
        p = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        m = function(e) {
          return null != e && e === e.window
        },
        g = e.document,
        v = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };

      function y(e, t, n) {
        var i, r, o = (n = n || g).createElement("script");
        if (o.text = e, t)
          for (i in v)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
      }

      function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
      }
      var w = "3.6.0",
        x = function(e, t) {
          return new x.fn.init(e, t)
        };

      function T(e) {
        var t = !!e && "length" in e && e.length,
          n = b(e);
        return !p(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }
      x.fn = x.prototype = {
        jquery: w,
        constructor: x,
        length: 0,
        toArray: function() {
          return r.call(this)
        },
        get: function(e) {
          return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
          var t = x.merge(this.constructor(), e);
          return t.prevObject = this, t
        },
        each: function(e) {
          return x.each(this, e)
        },
        map: function(e) {
          return this.pushStack(x.map(this, (function(t, n) {
            return e.call(t, n, t)
          })))
        },
        slice: function() {
          return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
          return this.eq(0)
        },
        last: function() {
          return this.eq(-1)
        },
        even: function() {
          return this.pushStack(x.grep(this, (function(e, t) {
            return (t + 1) % 2
          })))
        },
        odd: function() {
          return this.pushStack(x.grep(this, (function(e, t) {
            return t % 2
          })))
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
          return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
      }, x.extend = x.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || p(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
          if (null != (e = arguments[s]))
            for (t in e) i = e[t], "__proto__" !== t && a !== i && (u && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], o = r && !Array.isArray(n) ? [] : r || x.isPlainObject(n) ? n : {}, r = !1, a[t] = x.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a
      }, x.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
          throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== u.call(e) || (t = i(e)) && ("function" != typeof(n = c.call(t, "constructor") && t.constructor) || h.call(n) !== d))
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
        },
        globalEval: function(e, t, n) {
          y(e, {
            nonce: t && t.nonce
          }, n)
        },
        each: function(e, t) {
          var n, i = 0;
          if (T(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else
            for (i in e)
              if (!1 === t.call(e[i], i, e[i])) break;
          return e
        },
        makeArray: function(e, t) {
          var n = t || [];
          return null != e && (T(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
          return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
          for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
          return e.length = r, e
        },
        grep: function(e, t, n) {
          for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
          return i
        },
        map: function(e, t, n) {
          var i, r, a = 0,
            s = [];
          if (T(e))
            for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
          else
            for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
          return o(s)
        },
        guid: 1,
        support: f
      }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
      }));
      var C =
        /*!
         * Sizzle CSS Selector Engine v2.3.6
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2021-02-16
         */
        function(e) {
          var t, n, i, r, o, a, s, l, u, c, h, d, f, p, m, g, v, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            T = 0,
            C = 0,
            S = le(),
            k = le(),
            D = le(),
            E = le(),
            A = function(e, t) {
              return e === t && (h = !0), 0
            },
            N = {}.hasOwnProperty,
            j = [],
            L = j.pop,
            O = j.push,
            q = j.push,
            M = j.slice,
            I = function(e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1
            },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z = "\\[[\\x20\\t\\r\\n\\f]*(" + P + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + H + "*\\]",
            R = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            F = new RegExp(H + "+", "g"),
            W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            _ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            B = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
            Y = new RegExp(H + "|>"),
            X = new RegExp(R),
            U = new RegExp("^" + P + "$"),
            V = {
              ID: new RegExp("^#(" + P + ")"),
              CLASS: new RegExp("^\\.(" + P + ")"),
              TAG: new RegExp("^(" + P + "|[*])"),
              ATTR: new RegExp("^" + z),
              PSEUDO: new RegExp("^" + R),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
              bool: new RegExp("^(?:" + $ + ")$", "i"),
              needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
            },
            K = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
              return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
              d()
            },
            ae = we((function(e) {
              return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }), {
              dir: "parentNode",
              next: "legend"
            });
          try {
            q.apply(j = M.call(x.childNodes), x.childNodes), j[x.childNodes.length].nodeType
          } catch (e) {
            q = {
              apply: j.length ? function(e, t) {
                O.apply(e, M.call(t))
              } : function(e, t) {
                for (var n = e.length, i = 0; e[n++] = t[i++];);
                e.length = n - 1
              }
            }
          }

          function se(e, t, i, r) {
            var o, s, u, c, h, p, v, y = t && t.ownerDocument,
              x = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!r && (d(t), t = t || f, m)) {
              if (11 !== x && (h = Z.exec(e)))
                if (o = h[1]) {
                  if (9 === x) {
                    if (!(u = t.getElementById(o))) return i;
                    if (u.id === o) return i.push(u), i
                  } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i
                } else {
                  if (h[2]) return q.apply(i, t.getElementsByTagName(e)), i;
                  if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(i, t.getElementsByClassName(o)), i
                } if (n.qsa && !E[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                if (v = e, y = t, 1 === x && (Y.test(e) || B.test(e))) {
                  for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = w)), s = (p = a(e)).length; s--;) p[s] = (c ? "#" + c : ":scope") + " " + be(p[s]);
                  v = p.join(",")
                }
                try {
                  return q.apply(i, y.querySelectorAll(v)), i
                } catch (t) {
                  E(e, !0)
                } finally {
                  c === w && t.removeAttribute("id")
                }
              }
            }
            return l(e.replace(W, "$1"), t, i, r)
          }

          function le() {
            var e = [];
            return function t(n, r) {
              return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
          }

          function ue(e) {
            return e[w] = !0, e
          }

          function ce(e) {
            var t = f.createElement("fieldset");
            try {
              return !!e(t)
            } catch (e) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
            }
          }

          function he(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
          }

          function de(e, t) {
            var n = t && e,
              i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
              for (; n = n.nextSibling;)
                if (n === t) return -1;
            return e ? 1 : -1
          }

          function fe(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
            }
          }

          function pe(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
            }
          }

          function me(e) {
            return function(t) {
              return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
          }

          function ge(e) {
            return ue((function(t) {
              return t = +t, ue((function(n, i) {
                for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
              }))
            }))
          }

          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
          }
          for (t in n = se.support = {}, o = se.isXML = function(e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !K.test(t || n && n.nodeName || "HTML")
            }, d = se.setDocument = function(e) {
              var t, r, a = e ? e.ownerDocument || e : x;
              return a != f && 9 === a.nodeType && a.documentElement ? (p = (f = a).documentElement, m = !o(f), x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ce((function(e) {
                return p.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
              })), n.attributes = ce((function(e) {
                return e.className = "i", !e.getAttribute("className")
              })), n.getElementsByTagName = ce((function(e) {
                return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
              })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ce((function(e) {
                return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
              })), n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                  return e.getAttribute("id") === t
                }
              }, i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
                }
              }) : (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
                }
              }, i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n, i, r, o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                  }
                  return []
                }
              }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
              } : function(e, t) {
                var n, i = [],
                  r = 0,
                  o = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                  return i
                }
                return o
              }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
              }, v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (ce((function(e) {
                var t;
                p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
              })), ce((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
              }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function(e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
              })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                  i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
              } : function(e, t) {
                if (t)
                  for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
              }, A = t ? function(e, t) {
                if (e === t) return h = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & i ? -1 : 1)
              } : function(e, t) {
                if (e === t) return h = !0, 0;
                var n, i = 0,
                  r = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
                if (!r || !o) return e == f ? -1 : t == f ? 1 : r ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;
                if (r === o) return de(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? de(a[i], s[i]) : a[i] == x ? -1 : s[i] == x ? 1 : 0
              }, f) : f
            }, se.matches = function(e, t) {
              return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
              if (d(e), n.matchesSelector && m && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
              } catch (e) {
                E(t, !0)
              }
              return se(t, f, null, [e]).length > 0
            }, se.contains = function(e, t) {
              return (e.ownerDocument || e) != f && d(e), b(e, t)
            }, se.attr = function(e, t) {
              (e.ownerDocument || e) != f && d(e);
              var r = i.attrHandle[t.toLowerCase()],
                o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
              return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
              return (e + "").replace(ie, re)
            }, se.error = function(e) {
              throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
              var t, i = [],
                r = 0,
                o = 0;
              if (h = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), h) {
                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                for (; r--;) e.splice(i[r], 1)
              }
              return c = null, e
            }, r = se.getText = function(e) {
              var t, n = "",
                i = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
              } else
                for (; t = e[i++];) n += r(t);
              return n
            }, i = se.selectors = {
              cacheLength: 50,
              createPseudo: ue,
              match: V,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
                  dir: "parentNode",
                  first: !0
                },
                " ": {
                  dir: "parentNode"
                },
                "+": {
                  dir: "previousSibling",
                  first: !0
                },
                "~": {
                  dir: "previousSibling"
                }
              },
              preFilter: {
                ATTR: function(e) {
                  return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                },
                PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
              },
              filter: {
                TAG: function(e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e ? function() {
                    return !0
                  } : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                  }
                },
                CLASS: function(e) {
                  var t = S[e + " "];
                  return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + H + "|$)")) && S(e, (function(e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                  }))
                },
                ATTR: function(e, t, n) {
                  return function(i) {
                    var r = se.attr(i, e);
                    return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                  }
                },
                CHILD: function(e, t, n, i, r) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === i && 0 === r ? function(e) {
                    return !!e.parentNode
                  } : function(t, n, l) {
                    var u, c, h, d, f, p, m = o !== a ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      y = !l && !s,
                      b = !1;
                    if (g) {
                      if (o) {
                        for (; m;) {
                          for (d = t; d = d[m];)
                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                          p = m = "only" === e && !p && "nextSibling"
                        }
                        return !0
                      }
                      if (p = [a ? g.firstChild : g.lastChild], a && y) {
                        for (b = (f = (u = (c = (h = (d = g)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop();)
                          if (1 === d.nodeType && ++b && d === t) {
                            c[e] = [T, f, b];
                            break
                          }
                      } else if (y && (b = f = (u = (c = (h = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === b)
                        for (;
                          (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [T, b]), d !== t)););
                      return (b -= r) === i || b % i == 0 && b / i >= 0
                    }
                  }
                },
                PSEUDO: function(e, t) {
                  var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                  return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                    for (var i, o = r(e, t), a = o.length; a--;) e[i = I(e, o[a])] = !(n[i] = o[a])
                  })) : function(e) {
                    return r(e, 0, n)
                  }) : r
                }
              },
              pseudos: {
                not: ue((function(e) {
                  var t = [],
                    n = [],
                    i = s(e.replace(W, "$1"));
                  return i[w] ? ue((function(e, t, n, r) {
                    for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                  })) : function(e, r, o) {
                    return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                  }
                })),
                has: ue((function(e) {
                  return function(t) {
                    return se(e, t).length > 0
                  }
                })),
                contains: ue((function(e) {
                  return e = e.replace(te, ne),
                    function(t) {
                      return (t.textContent || r(t)).indexOf(e) > -1
                    }
                })),
                lang: ue((function(e) {
                  return U.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                      var n;
                      do {
                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1
                    }
                })),
                target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
                },
                root: function(e) {
                  return e === p
                },
                focus: function(e) {
                  return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0
                },
                parent: function(e) {
                  return !i.pseudos.empty(e)
                },
                header: function(e) {
                  return G.test(e.nodeName)
                },
                input: function(e) {
                  return Q.test(e.nodeName)
                },
                button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ge((function() {
                  return [0]
                })),
                last: ge((function(e, t) {
                  return [t - 1]
                })),
                eq: ge((function(e, t, n) {
                  return [n < 0 ? n + t : n]
                })),
                even: ge((function(e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e
                })),
                odd: ge((function(e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e
                })),
                lt: ge((function(e, t, n) {
                  for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                  return e
                })),
                gt: ge((function(e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                  return e
                }))
              }
            }, i.pseudos.nth = i.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            }) i.pseudos[t] = fe(t);
          for (t in {
              submit: !0,
              reset: !0
            }) i.pseudos[t] = pe(t);

          function ye() {}

          function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
          }

          function we(e, t, n) {
            var i = t.dir,
              r = t.next,
              o = r || i,
              a = n && "parentNode" === o,
              s = C++;
            return t.first ? function(t, n, r) {
              for (; t = t[i];)
                if (1 === t.nodeType || a) return e(t, n, r);
              return !1
            } : function(t, n, l) {
              var u, c, h, d = [T, s];
              if (l) {
                for (; t = t[i];)
                  if ((1 === t.nodeType || a) && e(t, n, l)) return !0
              } else
                for (; t = t[i];)
                  if (1 === t.nodeType || a)
                    if (c = (h = t[w] || (t[w] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                    else {
                      if ((u = c[o]) && u[0] === T && u[1] === s) return d[2] = u[2];
                      if (c[o] = d, d[2] = e(t, n, l)) return !0
                    } return !1
            }
          }

          function xe(e) {
            return e.length > 1 ? function(t, n, i) {
              for (var r = e.length; r--;)
                if (!e[r](t, n, i)) return !1;
              return !0
            } : e[0]
          }

          function Te(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
            return a
          }

          function Ce(e, t, n, i, r, o) {
            return i && !i[w] && (i = Ce(i)), r && !r[w] && (r = Ce(r, o)), ue((function(o, a, s, l) {
              var u, c, h, d = [],
                f = [],
                p = a.length,
                m = o || function(e, t, n) {
                  for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                  return n
                }(t || "*", s.nodeType ? [s] : s, []),
                g = !e || !o && t ? m : Te(m, d, e, s, l),
                v = n ? r || (o ? e : p || i) ? [] : a : g;
              if (n && n(g, v, s, l), i)
                for (u = Te(v, f), i(u, [], s, l), c = u.length; c--;)(h = u[c]) && (v[f[c]] = !(g[f[c]] = h));
              if (o) {
                if (r || e) {
                  if (r) {
                    for (u = [], c = v.length; c--;)(h = v[c]) && u.push(g[c] = h);
                    r(null, v = [], u, l)
                  }
                  for (c = v.length; c--;)(h = v[c]) && (u = r ? I(o, h) : d[c]) > -1 && (o[u] = !(a[u] = h))
                }
              } else v = Te(v === a ? v.splice(p, v.length) : v), r ? r(null, a, v, l) : q.apply(a, v)
            }))
          }

          function Se(e) {
            for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = we((function(e) {
                return e === t
              }), s, !0), h = we((function(e) {
                return I(t, e) > -1
              }), s, !0), d = [function(e, n, i) {
                var r = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : h(e, n, i));
                return t = null, r
              }]; l < o; l++)
              if (n = i.relative[e[l].type]) d = [we(xe(d), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                  for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                  return Ce(l > 1 && xe(d), l > 1 && be(e.slice(0, l - 1).concat({
                    value: " " === e[l - 2].type ? "*" : ""
                  })).replace(W, "$1"), n, l < r && Se(e.slice(l, r)), r < o && Se(e = e.slice(r)), r < o && be(e))
                }
                d.push(n)
              } return xe(d)
          }
          return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, a = se.tokenize = function(e, t) {
            var n, r, o, a, s, l, u, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, l = [], u = i.preFilter; s;) {
              for (a in n && !(r = _.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), o.push({
                  value: n,
                  type: r[0].replace(W, " ")
                }), s = s.slice(n.length)), i.filter) !(r = V[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
                value: n,
                type: a,
                matches: r
              }), s = s.slice(n.length));
              if (!n) break
            }
            return t ? s.length : s ? se.error(e) : k(e, l).slice(0)
          }, s = se.compile = function(e, t) {
            var n, r = [],
              o = [],
              s = D[e + " "];
            if (!s) {
              for (t || (t = a(e)), n = t.length; n--;)(s = Se(t[n]))[w] ? r.push(s) : o.push(s);
              s = D(e, function(e, t) {
                var n = t.length > 0,
                  r = e.length > 0,
                  o = function(o, a, s, l, c) {
                    var h, p, g, v = 0,
                      y = "0",
                      b = o && [],
                      w = [],
                      x = u,
                      C = o || r && i.find.TAG("*", c),
                      S = T += null == x ? 1 : Math.random() || .1,
                      k = C.length;
                    for (c && (u = a == f || a || c); y !== k && null != (h = C[y]); y++) {
                      if (r && h) {
                        for (p = 0, a || h.ownerDocument == f || (d(h), s = !m); g = e[p++];)
                          if (g(h, a || f, s)) {
                            l.push(h);
                            break
                          } c && (T = S)
                      }
                      n && ((h = !g && h) && v--, o && b.push(h))
                    }
                    if (v += y, n && y !== v) {
                      for (p = 0; g = t[p++];) g(b, w, a, s);
                      if (o) {
                        if (v > 0)
                          for (; y--;) b[y] || w[y] || (w[y] = L.call(l));
                        w = Te(w)
                      }
                      q.apply(l, w), c && !o && w.length > 0 && v + t.length > 1 && se.uniqueSort(l)
                    }
                    return c && (T = S, u = x), b
                  };
                return n ? ue(o) : o
              }(o, r)), s.selector = e
            }
            return s
          }, l = se.select = function(e, t, n, r) {
            var o, l, u, c, h, d = "function" == typeof e && e,
              f = !r && a(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
              if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                d && (t = t.parentNode), e = e.slice(l.shift().value.length)
              }
              for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                if ((h = i.find[c]) && (r = h(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                  if (l.splice(o, 1), !(e = r.length && be(l))) return q.apply(n, r), n;
                  break
                }
            }
            return (d || s(e, f))(r, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
          }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!h, d(), n.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
          })), ce((function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
          })) || he("type|href|height|width", (function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
          })), n.attributes && ce((function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
          })) || he("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
          })), ce((function(e) {
            return null == e.getAttribute("disabled")
          })) || he($, (function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
          })), se
        }(e);
      x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;
      var S = function(e, t, n) {
          for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
              if (r && x(e).is(n)) break;
              i.push(e)
            } return i
        },
        k = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
        },
        D = x.expr.match.needsContext;

      function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }
      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function N(e, t, n) {
        return p(t) ? x.grep(e, (function(e, i) {
          return !!t.call(e, i, e) !== n
        })) : t.nodeType ? x.grep(e, (function(e) {
          return e === t !== n
        })) : "string" != typeof t ? x.grep(e, (function(e) {
          return s.call(t, e) > -1 !== n
        })) : x.filter(t, e, n)
      }
      x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function(e) {
          return 1 === e.nodeType
        })))
      }, x.fn.extend({
        find: function(e) {
          var t, n, i = this.length,
            r = this;
          if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
            for (t = 0; t < i; t++)
              if (x.contains(r[t], this)) return !0
          })));
          for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, r[t], n);
          return i > 1 ? x.uniqueSort(n) : n
        },
        filter: function(e) {
          return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
          return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
          return !!N(this, "string" == typeof e && D.test(e) ? x(e) : e || [], !1).length
        }
      });
      var j, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (x.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (i[1]) {
            if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), A.test(i[1]) && x.isPlainObject(t))
              for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
          }
          return (r = g.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : p(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
      }).prototype = x.fn, j = x(g);
      var O = /^(?:parents|prev(?:Until|All))/,
        q = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

      function M(e, t) {
        for (;
          (e = e[t]) && 1 !== e.nodeType;);
        return e
      }
      x.fn.extend({
        has: function(e) {
          var t = x(e, this),
            n = t.length;
          return this.filter((function() {
            for (var e = 0; e < n; e++)
              if (x.contains(this, t[e])) return !0
          }))
        },
        closest: function(e, t) {
          var n, i = 0,
            r = this.length,
            o = [],
            a = "string" != typeof e && x(e);
          if (!D.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                  o.push(n);
                  break
                } return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
        },
        index: function(e) {
          return e ? "string" == typeof e ? s.call(x(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
          return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), x.each({
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
          return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
          return S(e, "parentNode", n)
        },
        next: function(e) {
          return M(e, "nextSibling")
        },
        prev: function(e) {
          return M(e, "previousSibling")
        },
        nextAll: function(e) {
          return S(e, "nextSibling")
        },
        prevAll: function(e) {
          return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
          return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
          return S(e, "previousSibling", n)
        },
        siblings: function(e) {
          return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
          return k(e.firstChild)
        },
        contents: function(e) {
          return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (E(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
      }, (function(e, t) {
        x.fn[e] = function(n, i) {
          var r = x.map(this, t, n);
          return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = x.filter(i, r)), this.length > 1 && (q[e] || x.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r)
        }
      }));
      var I = /[^\x20\t\r\n\f]+/g;

      function $(e) {
        return e
      }

      function H(e) {
        throw e
      }

      function P(e, t, n, i) {
        var r;
        try {
          e && p(r = e.promise) ? r.call(e).done(t).fail(n) : e && p(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }
      x.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
          var t = {};
          return x.each(e.match(I) || [], (function(e, n) {
            t[n] = !0
          })), t
        }(e) : x.extend({}, e);
        var t, n, i, r, o = [],
          a = [],
          s = -1,
          l = function() {
            for (r = r || e.once, i = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
          },
          u = {
            add: function() {
              return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                x.each(n, (function(n, i) {
                  p(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== b(i) && t(i)
                }))
              }(arguments), n && !t && l()), this
            },
            remove: function() {
              return x.each(arguments, (function(e, t) {
                for (var n;
                  (n = x.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
              })), this
            },
            has: function(e) {
              return e ? x.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
              return o && (o = []), this
            },
            disable: function() {
              return r = a = [], o = n = "", this
            },
            disabled: function() {
              return !o
            },
            lock: function() {
              return r = a = [], n || t || (o = n = ""), this
            },
            locked: function() {
              return !!r
            },
            fireWith: function(e, n) {
              return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
            },
            fire: function() {
              return u.fireWith(this, arguments), this
            },
            fired: function() {
              return !!i
            }
          };
        return u
      }, x.extend({
        Deferred: function(t) {
          var n = [
              ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
              ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
            ],
            i = "pending",
            r = {
              state: function() {
                return i
              },
              always: function() {
                return o.done(arguments).fail(arguments), this
              },
              catch: function(e) {
                return r.then(null, e)
              },
              pipe: function() {
                var e = arguments;
                return x.Deferred((function(t) {
                  x.each(n, (function(n, i) {
                    var r = p(e[i[4]]) && e[i[4]];
                    o[i[1]]((function() {
                      var e = r && r.apply(this, arguments);
                      e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                    }))
                  })), e = null
                })).promise()
              },
              then: function(t, i, r) {
                var o = 0;

                function a(t, n, i, r) {
                  return function() {
                    var s = this,
                      l = arguments,
                      u = function() {
                        var e, u;
                        if (!(t < o)) {
                          if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                          u = e && ("object" == typeof e || "function" == typeof e) && e.then, p(u) ? r ? u.call(e, a(o, n, $, r), a(o, n, H, r)) : (o++, u.call(e, a(o, n, $, r), a(o, n, H, r), a(o, n, $, n.notifyWith))) : (i !== $ && (s = void 0, l = [e]), (r || n.resolveWith)(s, l))
                        }
                      },
                      c = r ? u : function() {
                        try {
                          u()
                        } catch (e) {
                          x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (i !== H && (s = void 0, l = [e]), n.rejectWith(s, l))
                        }
                      };
                    t ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), e.setTimeout(c))
                  }
                }
                return x.Deferred((function(e) {
                  n[0][3].add(a(0, e, p(r) ? r : $, e.notifyWith)), n[1][3].add(a(0, e, p(t) ? t : $)), n[2][3].add(a(0, e, p(i) ? i : H))
                })).promise()
              },
              promise: function(e) {
                return null != e ? x.extend(e, r) : r
              }
            },
            o = {};
          return x.each(n, (function(e, t) {
            var a = t[2],
              s = t[5];
            r[t[1]] = a.add, s && a.add((function() {
              i = s
            }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
              return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
            }, o[t[0] + "With"] = a.fireWith
          })), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
          var t = arguments.length,
            n = t,
            i = Array(n),
            o = r.call(arguments),
            a = x.Deferred(),
            s = function(e) {
              return function(n) {
                i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || a.resolveWith(i, o)
              }
            };
          if (t <= 1 && (P(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();
          for (; n--;) P(o[n], s(n), a.reject);
          return a.promise()
        }
      });
      var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      x.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
      }, x.readyException = function(t) {
        e.setTimeout((function() {
          throw t
        }))
      };
      var R = x.Deferred();

      function F() {
        g.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), x.ready()
      }
      x.fn.ready = function(e) {
        return R.then(e).catch((function(e) {
          x.readyException(e)
        })), this
      }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
          (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || R.resolveWith(g, [x]))
        }
      }), x.ready.then = R.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
      var W = function(e, t, n, i, r, o, a) {
          var s = 0,
            l = e.length,
            u = null == n;
          if ("object" === b(n))
            for (s in r = !0, n) W(e, t, s, n[s], !0, o, a);
          else if (void 0 !== i && (r = !0, p(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
              return u.call(x(e), n)
            })), t))
            for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
          return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        B = /-([a-z])/g;

      function Y(e, t) {
        return t.toUpperCase()
      }

      function X(e) {
        return e.replace(_, "ms-").replace(B, Y)
      }
      var U = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

      function V() {
        this.expando = x.expando + V.uid++
      }
      V.uid = 1, V.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        },
        set: function(e, t, n) {
          var i, r = this.cache(e);
          if ("string" == typeof t) r[X(t)] = n;
          else
            for (i in t) r[X(i)] = t[i];
          return r
        },
        get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
          var n, i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(I) || []).length;
              for (; n--;) delete i[t[n]]
            }(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !x.isEmptyObject(t)
        }
      };
      var K = new V,
        Q = new V,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

      function Z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
            try {
              n = function(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
              }(n)
            } catch (e) {}
            Q.set(e, t, n)
          } else n = void 0;
        return n
      }
      x.extend({
        hasData: function(e) {
          return Q.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
          return Q.access(e, t, n)
        },
        removeData: function(e, t) {
          Q.remove(e, t)
        },
        _data: function(e, t, n) {
          return K.access(e, t, n)
        },
        _removeData: function(e, t) {
          K.remove(e, t)
        }
      }), x.fn.extend({
        data: function(e, t) {
          var n, i, r, o = this[0],
            a = o && o.attributes;
          if (void 0 === e) {
            if (this.length && (r = Q.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
              for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = X(i.slice(5)), Z(o, i, r[i]));
              K.set(o, "hasDataAttrs", !0)
            }
            return r
          }
          return "object" == typeof e ? this.each((function() {
            Q.set(this, e)
          })) : W(this, (function(t) {
            var n;
            if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
            this.each((function() {
              Q.set(this, e, t)
            }))
          }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
          return this.each((function() {
            Q.remove(this, e)
          }))
        }
      }), x.extend({
        queue: function(e, t, n) {
          var i;
          if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, x.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var n = x.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = x._queueHooks(e, t);
          "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function() {
            x.dequeue(e, t)
          }), o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return K.get(e, n) || K.access(e, n, {
            empty: x.Callbacks("once memory").add((function() {
              K.remove(e, [t + "queue", n])
            }))
          })
        }
      }), x.fn.extend({
        queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
            var n = x.queue(this, e, t);
            x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
          }))
        },
        dequeue: function(e) {
          return this.each((function() {
            x.dequeue(this, e)
          }))
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
          var n, i = 1,
            r = x.Deferred(),
            o = this,
            a = this.length,
            s = function() {
              --i || r.resolveWith(o, [o])
            };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = K.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
          return s(), r.promise(t)
        }
      });
      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = g.documentElement,
        re = function(e) {
          return x.contains(e.ownerDocument, e)
        },
        oe = {
          composed: !0
        };
      ie.getRootNode && (re = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      });
      var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === x.css(e, "display")
      };

      function se(e, t, n, i) {
        var r, o, a = 20,
          s = i ? function() {
            return i.cur()
          } : function() {
            return x.css(e, t, "")
          },
          l = s(),
          u = n && n[3] || (x.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (x.cssNumber[t] || "px" !== u && +l) && te.exec(x.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; a--;) x.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
          c *= 2, x.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
      }
      var le = {};

      function ue(e) {
        var t, n = e.ownerDocument,
          i = e.nodeName,
          r = le[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = x.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), le[i] = r, r)
      }

      function ce(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ae(i) && (r[o] = ue(i))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
      }
      x.fn.extend({
        show: function() {
          return ce(this, !0)
        },
        hide: function() {
          return ce(this)
        },
        toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
            ae(this) ? x(this).show() : x(this).hide()
          }))
        }
      });
      var he, de, fe = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      he = g.createDocumentFragment().appendChild(g.createElement("div")), (de = g.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), he.appendChild(de), f.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", f.option = !!he.lastChild;
      var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? x.merge([e], n) : n
      }

      function ye(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
      }
      ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
      var be = /<|&#?\w+;/;

      function we(e, t, n, i, r) {
        for (var o, a, s, l, u, c, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
          if ((o = e[f]) || 0 === o)
            if ("object" === b(o)) x.merge(d, o.nodeType ? [o] : o);
            else if (be.test(o)) {
          for (a = a || h.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + x.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
          x.merge(d, a.childNodes), (a = h.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (h.textContent = "", f = 0; o = d[f++];)
          if (i && x.inArray(o, i) > -1) r && r.push(o);
          else if (u = re(o), a = ve(h.appendChild(o), "script"), u && ye(a), n)
          for (c = 0; o = a[c++];) me.test(o.type || "") && n.push(o);
        return h
      }
      var xe = /^([^.]*)(?:\.(.+)|)/;

      function Te() {
        return !0
      }

      function Ce() {
        return !1
      }

      function Se(e, t) {
        return e === function() {
          try {
            return g.activeElement
          } catch (e) {}
        }() == ("focus" === t)
      }

      function ke(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, s, n, i, t[s], o);
          return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ce;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
          return x().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = x.guid++)), e.each((function() {
          x.event.add(this, t, r, i, n)
        }))
      }

      function De(e, t, n) {
        n ? (K.set(e, t, !1), x.event.add(e, t, {
          namespace: !1,
          handler: function(e) {
            var i, o, a = K.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (a = r.call(arguments), K.set(this, t, a), i = n(this, t), this[t](), a !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o && o.value
            } else a.length && (K.set(this, t, {
              value: x.event.trigger(x.extend(a[0], x.Event.prototype), a.slice(1), this)
            }), e.stopImmediatePropagation())
          }
        })) : void 0 === K.get(e, t) && x.event.add(e, t, Te)
      }
      x.event = {
        global: {},
        add: function(e, t, n, i, r) {
          var o, a, s, l, u, c, h, d, f, p, m, g = K.get(e);
          if (U(e))
            for (n.handler && (n = (o = n).handler, r = o.selector), r && x.find.matchesSelector(ie, r), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function(t) {
                return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
              }), u = (t = (t || "").match(I) || [""]).length; u--;) f = m = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (h = x.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = x.event.special[f] || {}, c = x.extend({
              type: f,
              origType: m,
              data: i,
              handler: n,
              guid: n.guid,
              selector: r,
              needsContext: r && x.expr.match.needsContext.test(r),
              namespace: p.join(".")
            }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), x.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
          var o, a, s, l, u, c, h, d, f, p, m, g = K.hasData(e) && K.get(e);
          if (g && (l = g.events)) {
            for (u = (t = (t || "").match(I) || [""]).length; u--;)
              if (f = m = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                for (h = x.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(e, c));
                a && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, g.handle) || x.removeEvent(e, f, g.handle), delete l[f])
              } else
                for (f in l) x.event.remove(e, f + t[u], n, i, !0);
            x.isEmptyObject(l) && K.remove(e, "handle events")
          }
        },
        dispatch: function(e) {
          var t, n, i, r, o, a, s = new Array(arguments.length),
            l = x.event.fix(e),
            u = (K.get(this, "events") || Object.create(null))[l.type] || [],
            c = x.event.special[l.type] || {};
          for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
            for (a = x.event.handlers.call(this, l, u), t = 0;
              (r = a[t++]) && !l.isPropagationStopped();)
              for (l.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, l), l.result
          }
        },
        handlers: function(e, t) {
          var n, i, r, o, a, s = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? x(r, this).index(u) > -1 : x.find(r, this, null, [u]).length), a[r] && o.push(i);
                o.length && s.push({
                  elem: u,
                  handlers: o
                })
              } return u = this, l < t.length && s.push({
            elem: u,
            handlers: t.slice(l)
          }), s
        },
        addProp: function(e, t) {
          Object.defineProperty(x.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: p(t) ? function() {
              if (this.originalEvent) return t(this.originalEvent)
            } : function() {
              if (this.originalEvent) return this.originalEvent[e]
            },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              })
            }
          })
        },
        fix: function(e) {
          return e[x.expando] ? e : new x.Event(e)
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function(e) {
              var t = this || e;
              return fe.test(t.type) && t.click && E(t, "input") && De(t, "click", Te), !1
            },
            trigger: function(e) {
              var t = this || e;
              return fe.test(t.type) && t.click && E(t, "input") && De(t, "click"), !0
            },
            _default: function(e) {
              var t = e.target;
              return fe.test(t.type) && t.click && E(t, "input") && K.get(t, "click") || E(t, "a")
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
      }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      }, x.event.addProp), x.each({
        focus: "focusin",
        blur: "focusout"
      }, (function(e, t) {
        x.event.special[e] = {
          setup: function() {
            return De(this, e, Se), !1
          },
          trigger: function() {
            return De(this, e), !0
          },
          _default: function() {
            return !0
          },
          delegateType: t
        }
      })), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, (function(e, t) {
        x.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n, i = this,
              r = e.relatedTarget,
              o = e.handleObj;
            return r && (r === i || x.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
          }
        }
      })), x.fn.extend({
        on: function(e, t, n, i) {
          return ke(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
          return ke(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
          if ("object" == typeof e) {
            for (r in e) this.off(r, t, e[r]);
            return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each((function() {
            x.event.remove(this, e, n, t)
          }))
        }
      });
      var Ee = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function je(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
      }

      function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
      }

      function qe(e, t) {
        var n, i, r, o, a, s;
        if (1 === t.nodeType) {
          if (K.hasData(e) && (s = K.get(e).events))
            for (r in K.remove(t, "handle events"), s)
              for (n = 0, i = s[r].length; n < i; n++) x.event.add(t, r, s[r][n]);
          Q.hasData(e) && (o = Q.access(e), a = x.extend({}, o), Q.set(t, a))
        }
      }

      function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }

      function Ie(e, t, n, i) {
        t = o(t);
        var r, a, s, l, u, c, h = 0,
          d = e.length,
          m = d - 1,
          g = t[0],
          v = p(g);
        if (v || d > 1 && "string" == typeof g && !f.checkClone && Ae.test(g)) return e.each((function(r) {
          var o = e.eq(r);
          v && (t[0] = g.call(this, r, o.html())), Ie(o, t, n, i)
        }));
        if (d && (a = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
          for (l = (s = x.map(ve(r, "script"), Le)).length; h < d; h++) u = r, h !== m && (u = x.clone(u, !0, !0), l && x.merge(s, ve(u, "script"))), n.call(e[h], u, h);
          if (l)
            for (c = s[s.length - 1].ownerDocument, x.map(s, Oe), h = 0; h < l; h++) u = s[h], me.test(u.type || "") && !K.access(u, "globalEval") && x.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && !u.noModule && x._evalUrl(u.src, {
              nonce: u.nonce || u.getAttribute("nonce")
            }, c) : y(u.textContent.replace(Ne, ""), u, c))
        }
        return e
      }

      function $e(e, t, n) {
        for (var i, r = t ? x.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || x.cleanData(ve(i)), i.parentNode && (n && re(i) && ye(ve(i, "script")), i.parentNode.removeChild(i));
        return e
      }
      x.extend({
        htmlPrefilter: function(e) {
          return e
        },
        clone: function(e, t, n) {
          var i, r, o, a, s = e.cloneNode(!0),
            l = re(e);
          if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
            for (a = ve(s), i = 0, r = (o = ve(e)).length; i < r; i++) Me(o[i], a[i]);
          if (t)
            if (n)
              for (o = o || ve(e), a = a || ve(s), i = 0, r = o.length; i < r; i++) qe(o[i], a[i]);
            else qe(e, s);
          return (a = ve(s, "script")).length > 0 && ye(a, !l && ve(e, "script")), s
        },
        cleanData: function(e) {
          for (var t, n, i, r = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
            if (U(n)) {
              if (t = n[K.expando]) {
                if (t.events)
                  for (i in t.events) r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                n[K.expando] = void 0
              }
              n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
      }), x.fn.extend({
        detach: function(e) {
          return $e(this, e, !0)
        },
        remove: function(e) {
          return $e(this, e)
        },
        text: function(e) {
          return W(this, (function(e) {
            return void 0 === e ? x.text(this) : this.empty().each((function() {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            }))
          }), null, e, arguments.length)
        },
        append: function() {
          return Ie(this, arguments, (function(e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
          }))
        },
        prepend: function() {
          return Ie(this, arguments, (function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = je(this, e);
              t.insertBefore(e, t.firstChild)
            }
          }))
        },
        before: function() {
          return Ie(this, arguments, (function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          }))
        },
        after: function() {
          return Ie(this, arguments, (function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          }))
        },
        empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(ve(e, !1)), e.textContent = "");
          return this
        },
        clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map((function() {
            return x.clone(this, e, t)
          }))
        },
        html: function(e) {
          return W(this, (function(e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Ee.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = x.htmlPrefilter(e);
              try {
                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(ve(t, !1)), t.innerHTML = e);
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          }), null, e, arguments.length)
        },
        replaceWith: function() {
          var e = [];
          return Ie(this, arguments, (function(t) {
            var n = this.parentNode;
            x.inArray(this, e) < 0 && (x.cleanData(ve(this)), n && n.replaceChild(t, this))
          }), e)
        }
      }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, (function(e, t) {
        x.fn[e] = function(e) {
          for (var n, i = [], r = x(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), x(r[s])[t](n), a.apply(i, n.get());
          return this.pushStack(i)
        }
      }));
      var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Pe = function(t) {
          var n = t.ownerDocument.defaultView;
          return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        ze = function(e, t, n) {
          var i, r, o = {};
          for (r in t) o[r] = e.style[r], e.style[r] = t[r];
          for (r in i = n.call(e), t) e.style[r] = o[r];
          return i
        },
        Re = new RegExp(ne.join("|"), "i");

      function Fe(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || Pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = x.style(e, t)), !f.pixelBoxStyles() && He.test(a) && Re.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
      }

      function We(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }! function() {
        function t() {
          if (c) {
            u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(u).appendChild(c);
            var t = e.getComputedStyle(c);
            i = "1%" !== t.top, l = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), ie.removeChild(u), c = null
          }
        }

        function n(e) {
          return Math.round(parseFloat(e))
        }
        var i, r, o, a, s, l, u = g.createElement("div"),
          c = g.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === c.style.backgroundClip, x.extend(f, {
          boxSizingReliable: function() {
            return t(), r
          },
          pixelBoxStyles: function() {
            return t(), a
          },
          pixelPosition: function() {
            return t(), i
          },
          reliableMarginLeft: function() {
            return t(), l
          },
          scrollboxSize: function() {
            return t(), o
          },
          reliableTrDimensions: function() {
            var t, n, i, r;
            return null == s && (t = g.createElement("table"), n = g.createElement("tr"), i = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), s = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), s
          }
        }))
      }();
      var _e = ["Webkit", "Moz", "ms"],
        Be = g.createElement("div").style,
        Ye = {};

      function Xe(e) {
        var t = x.cssProps[e] || Ye[e];
        return t || (e in Be ? e : Ye[e] = function(e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--;)
            if ((e = _e[n] + t) in Be) return e
        }(e) || e)
      }
      var Ue = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        Ke = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        Qe = {
          letterSpacing: "0",
          fontWeight: "400"
        };

      function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
      }

      function Je(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += x.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= x.css(e, "border" + ne[a] + "Width", !0, r))) : (l += x.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += x.css(e, "border" + ne[a] + "Width", !0, r) : s += x.css(e, "border" + ne[a] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
      }

      function Ze(e, t, n) {
        var i = Pe(e),
          r = (!f.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
          o = r,
          a = Fe(e, t, i),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (He.test(a)) {
          if (!n) return a;
          a = "auto"
        }
        return (!f.boxSizingReliable() && r || !f.reliableTrDimensions() && E(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === x.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Je(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
      }

      function et(e, t, n, i, r) {
        return new et.prototype.init(e, t, n, i, r)
      }
      x.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = Fe(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r, o, a, s = X(t),
              l = Ve.test(t),
              u = e.style;
            if (l || (t = Xe(s)), a = x.cssHooks[t] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
            "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = se(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (x.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
          }
        },
        css: function(e, t, n, i) {
          var r, o, a, s = X(t);
          return Ve.test(t) || (t = Xe(s)), (a = x.cssHooks[t] || x.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Fe(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
      }), x.each(["height", "width"], (function(e, t) {
        x.cssHooks[t] = {
          get: function(e, n, i) {
            if (n) return !Ue.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : ze(e, Ke, (function() {
              return Ze(e, t, i)
            }))
          },
          set: function(e, n, i) {
            var r, o = Pe(e),
              a = !f.scrollboxSize() && "absolute" === o.position,
              s = (a || i) && "border-box" === x.css(e, "boxSizing", !1, o),
              l = i ? Je(e, t, i, s, o) : 0;
            return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - .5)), l && (r = te.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Ge(0, n, l)
          }
        }
      })), x.cssHooks.marginLeft = We(f.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
          marginLeft: 0
        }, (function() {
          return e.getBoundingClientRect().left
        }))) + "px"
      })), x.each({
        margin: "",
        padding: "",
        border: "Width"
      }, (function(e, t) {
        x.cssHooks[e + t] = {
          expand: function(n) {
            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
            return r
          }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ge)
      })), x.fn.extend({
        css: function(e, t) {
          return W(this, (function(e, t, n) {
            var i, r, o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = Pe(e), r = t.length; a < r; a++) o[t[a]] = x.css(e, t[a], !1, i);
              return o
            }
            return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
          }), e, t, arguments.length > 1)
        }
      }), x.Tween = et, et.prototype = {
        constructor: et,
        init: function(e, t, n, i, r, o) {
          this.elem = e, this.prop = n, this.easing = r || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
          var t, n = et.propHooks[this.prop];
          return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
      }, et.prototype.init.prototype = et.prototype, et.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
            x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, x.easing = {
        linear: function(e) {
          return e
        },
        swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
      }, x.fx = et.prototype.init, x.fx.step = {};
      var tt, nt, it = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;

      function ot() {
        nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, x.fx.interval), x.fx.tick())
      }

      function at() {
        return e.setTimeout((function() {
          tt = void 0
        })), tt = Date.now()
      }

      function st(e, t) {
        var n, i = 0,
          r = {
            height: e
          };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
      }

      function lt(e, t, n) {
        for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = r.length; o < a; o++)
          if (i = r[o].call(n, t, e)) return i
      }

      function ut(e, t, n) {
        var i, r, o = 0,
          a = ut.prefilters.length,
          s = x.Deferred().always((function() {
            delete l.elem
          })),
          l = function() {
            if (r) return !1;
            for (var t = tt || at(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
            return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
          },
          u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
              specialEasing: {},
              easing: x.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: tt || at(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var i = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
              return u.tweens.push(i), i
            },
            stop: function(t) {
              var n = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
              return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
            }
          }),
          c = u.props;
        for (function(e, t) {
            var n, i, r, o, a;
            for (n in e)
              if (r = t[i = X(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = x.cssHooks[i]) && "expand" in a)
                for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
              else t[i] = r
          }(c, u.opts.specialEasing); o < a; o++)
          if (i = ut.prefilters[o].call(u, e, c, u.opts)) return p(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return x.map(c, lt, u), p(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), x.fx.timer(x.extend(l, {
          elem: e,
          anim: u,
          queue: u.opts.queue
        })), u
      }
      x.Animation = x.extend(ut, {
          tweeners: {
            "*": [function(e, t) {
              var n = this.createTween(e, t);
              return se(n.elem, e, te.exec(t), n), n
            }]
          },
          tweener: function(e, t) {
            p(e) ? (t = e, e = ["*"]) : e = e.match(I);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
          },
          prefilters: [function(e, t, n) {
            var i, r, o, a, s, l, u, c, h = "width" in t || "height" in t,
              d = this,
              f = {},
              p = e.style,
              m = e.nodeType && ae(e),
              g = K.get(e, "fxshow");
            for (i in n.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
              }), a.unqueued++, d.always((function() {
                d.always((function() {
                  a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
                }))
              }))), t)
              if (r = t[i], it.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                  if ("show" !== r || !g || void 0 === g[i]) continue;
                  m = !0
                }
                f[i] = g && g[i] || x.style(e, i)
              } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
              for (i in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = K.get(e, "display")), "none" === (c = x.css(e, "display")) && (u ? c = u : (ce([e], !0), u = e.style.display || u, c = x.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(e, "float") && (l || (d.done((function() {
                  p.display = u
                })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                  p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
                display: u
              }), o && (g.hidden = !m), m && ce([e], !0), d.done((function() {
                for (i in m || ce([e]), K.remove(e, "fxshow"), f) x.style(e, i, f[i])
              }))), l = lt(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
          }],
          prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
          }
        }), x.speed = function(e, t, n) {
          var i = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || p(e) && e,
            duration: e,
            easing: n && t || t && !p(t) && t
          };
          return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            p(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
          }, i
        }, x.fn.extend({
          fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
              opacity: t
            }, e, n, i)
          },
          animate: function(e, t, n, i) {
            var r = x.isEmptyObject(e),
              o = x.speed(t, n, i),
              a = function() {
                var t = ut(this, x.extend({}, e), o);
                (r || K.get(this, "finish")) && t.stop(!0)
              };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(e, t, n) {
            var i = function(e) {
              var t = e.stop;
              delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
              var t = !0,
                r = null != e && e + "queueHooks",
                o = x.timers,
                a = K.get(this);
              if (r) a[r] && a[r].stop && i(a[r]);
              else
                for (r in a) a[r] && a[r].stop && rt.test(r) && i(a[r]);
              for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
              !t && n || x.dequeue(this, e)
            }))
          },
          finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each((function() {
              var t, n = K.get(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                o = x.timers,
                a = i ? i.length : 0;
              for (n.finish = !0, x.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish
            }))
          }
        }), x.each(["toggle", "show", "hide"], (function(e, t) {
          var n = x.fn[t];
          x.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, r)
          }
        })), x.each({
          slideDown: st("show"),
          slideUp: st("hide"),
          slideToggle: st("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, (function(e, t) {
          x.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
          }
        })), x.timers = [], x.fx.tick = function() {
          var e, t = 0,
            n = x.timers;
          for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || x.fx.stop(), tt = void 0
        }, x.fx.timer = function(e) {
          x.timers.push(e), x.fx.start()
        }, x.fx.interval = 13, x.fx.start = function() {
          nt || (nt = !0, ot())
        }, x.fx.stop = function() {
          nt = null
        }, x.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, x.fn.delay = function(t, n) {
          return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
              e.clearTimeout(r)
            }
          }))
        },
        function() {
          var e = g.createElement("input"),
            t = g.createElement("select").appendChild(g.createElement("option"));
          e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = g.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
        }();
      var ct, ht = x.expr.attrHandle;
      x.fn.extend({
        attr: function(e, t) {
          return W(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
          return this.each((function() {
            x.removeAttr(this, e)
          }))
        }
      }), x.extend({
        attr: function(e, t, n) {
          var i, r, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!f.radioValue && "radio" === t && E(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var n, i = 0,
            r = t && t.match(I);
          if (r && 1 === e.nodeType)
            for (; n = r[i++];) e.removeAttribute(n)
        }
      }), ct = {
        set: function(e, t, n) {
          return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = ht[t] || x.find.attr;
        ht[t] = function(e, t, i) {
          var r, o, a = t.toLowerCase();
          return i || (o = ht[a], ht[a] = r, r = null != n(e, t, i) ? a : null, ht[a] = o), r
        }
      }));
      var dt = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;

      function pt(e) {
        return (e.match(I) || []).join(" ")
      }

      function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
      }
      x.fn.extend({
        prop: function(e, t) {
          return W(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
          return this.each((function() {
            delete this[x.propFix[e] || e]
          }))
        }
      }), x.extend({
        prop: function(e, t, n) {
          var i, r, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t, r = x.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = x.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), f.optSelected || (x.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        x.propFix[this.toLowerCase()] = this
      })), x.fn.extend({
        addClass: function(e) {
          var t, n, i, r, o, a, s, l = 0;
          if (p(e)) return this.each((function(t) {
            x(this).addClass(e.call(this, t, mt(this)))
          }));
          if ((t = gt(e)).length)
            for (; n = this[l++];)
              if (r = mt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (s = pt(i)) && n.setAttribute("class", s)
              } return this
        },
        removeClass: function(e) {
          var t, n, i, r, o, a, s, l = 0;
          if (p(e)) return this.each((function(t) {
            x(this).removeClass(e.call(this, t, mt(this)))
          }));
          if (!arguments.length) return this.attr("class", "");
          if ((t = gt(e)).length)
            for (; n = this[l++];)
              if (r = mt(n), i = 1 === n.nodeType && " " + pt(r) + " ") {
                for (a = 0; o = t[a++];)
                  for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                r !== (s = pt(i)) && n.setAttribute("class", s)
              } return this
        },
        toggleClass: function(e, t) {
          var n = typeof e,
            i = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : p(e) ? this.each((function(n) {
            x(this).toggleClass(e.call(this, n, mt(this), t), t)
          })) : this.each((function() {
            var t, r, o, a;
            if (i)
              for (r = 0, o = x(this), a = gt(e); t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            else void 0 !== e && "boolean" !== n || ((t = mt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
          }))
        },
        hasClass: function(e) {
          var t, n, i = 0;
          for (t = " " + e + " "; n = this[i++];)
            if (1 === n.nodeType && (" " + pt(mt(n)) + " ").indexOf(t) > -1) return !0;
          return !1
        }
      });
      var vt = /\r/g;
      x.fn.extend({
        val: function(e) {
          var t, n, i, r = this[0];
          return arguments.length ? (i = p(e), this.each((function(n) {
            var r;
            1 === this.nodeType && (null == (r = i ? e.call(this, n, x(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, (function(e) {
              return null == e ? "" : e + ""
            }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
          }))) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
      }), x.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = x.find.attr(e, "value");
              return null != t ? t : pt(x.text(e))
            }
          },
          select: {
            get: function(e) {
              var t, n, i, r = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                l = a ? o + 1 : r.length;
              for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                  if (t = x(n).val(), a) return t;
                  s.push(t)
                } return s
            },
            set: function(e, t) {
              for (var n, i, r = e.options, o = x.makeArray(t), a = r.length; a--;)((i = r[a]).selected = x.inArray(x.valHooks.option.get(i), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o
            }
          }
        }
      }), x.each(["radio", "checkbox"], (function() {
        x.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
          }
        }, f.checkOn || (x.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      })), f.focusin = "onfocusin" in e;
      var yt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function(e) {
          e.stopPropagation()
        };
      x.extend(x.event, {
        trigger: function(t, n, i, r) {
          var o, a, s, l, u, h, d, f, v = [i || g],
            y = c.call(t, "type") ? t.type : t,
            b = c.call(t, "namespace") ? t.namespace.split(".") : [];
          if (a = f = s = i = i || g, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : x.makeArray(n, [t]), d = x.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
            if (!r && !d.noBubble && !m(i)) {
              for (l = d.delegateType || y, yt.test(l + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
              s === (i.ownerDocument || g) && v.push(s.defaultView || s.parentWindow || e)
            }
            for (o = 0;
              (a = v[o++]) && !t.isPropagationStopped();) f = a, t.type = o > 1 ? l : d.bindType || y, (h = (K.get(a, "events") || Object.create(null))[t.type] && K.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && U(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
            return t.type = y, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !U(i) || u && p(i[y]) && !m(i) && ((s = i[u]) && (i[u] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, bt), i[y](), t.isPropagationStopped() && f.removeEventListener(y, bt), x.event.triggered = void 0, s && (i[u] = s)), t.result
          }
        },
        simulate: function(e, t, n) {
          var i = x.extend(new x.Event, n, {
            type: e,
            isSimulated: !0
          });
          x.event.trigger(i, null, t)
        }
      }), x.fn.extend({
        trigger: function(e, t) {
          return this.each((function() {
            x.event.trigger(e, t, this)
          }))
        },
        triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return x.event.trigger(e, t, n, !0)
        }
      }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
      }, (function(e, t) {
        var n = function(e) {
          x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
          setup: function() {
            var i = this.ownerDocument || this.document || this,
              r = K.access(i, t);
            r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
          },
          teardown: function() {
            var i = this.ownerDocument || this.document || this,
              r = K.access(i, t) - 1;
            r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
          }
        }
      }));
      var wt = e.location,
        xt = {
          guid: Date.now()
        },
        Tt = /\?/;
      x.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {}
        return i = n && n.getElementsByTagName("parsererror")[0], n && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, (function(e) {
          return e.textContent
        })).join("\n") : t)), n
      };
      var Ct = /\[\]$/,
        St = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

      function Et(e, t, n, i) {
        var r;
        if (Array.isArray(t)) x.each(t, (function(t, r) {
          n || Ct.test(e) ? i(e, r) : Et(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }));
        else if (n || "object" !== b(t)) i(e, t);
        else
          for (r in t) Et(e + "[" + r + "]", t[r], n, i)
      }
      x.param = function(e, t) {
        var n, i = [],
          r = function(e, t) {
            var n = p(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
          r(this.name, this.value)
        }));
        else
          for (n in e) Et(n, e[n], t, r);
        return i.join("&")
      }, x.fn.extend({
        serialize: function() {
          return x.param(this.serializeArray())
        },
        serializeArray: function() {
          return this.map((function() {
            var e = x.prop(this, "elements");
            return e ? x.makeArray(e) : this
          })).filter((function() {
            var e = this.type;
            return this.name && !x(this).is(":disabled") && Dt.test(this.nodeName) && !kt.test(e) && (this.checked || !fe.test(e))
          })).map((function(e, t) {
            var n = x(this).val();
            return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
              return {
                name: t.name,
                value: e.replace(St, "\r\n")
              }
            })) : {
              name: t.name,
              value: n.replace(St, "\r\n")
            }
          })).get()
        }
      });
      var At = /%20/g,
        Nt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Mt = {},
        It = {},
        $t = "*/".concat("*"),
        Ht = g.createElement("a");

      function Pt(e) {
        return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var i, r = 0,
            o = t.toLowerCase().match(I) || [];
          if (p(n))
            for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
      }

      function zt(e, t, n, i) {
        var r = {},
          o = e === It;

        function a(s) {
          var l;
          return r[s] = !0, x.each(e[s] || [], (function(e, s) {
            var u = s(t, n, i);
            return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
          })), l
        }
        return a(t.dataTypes[0]) || !r["*"] && a("*")
      }

      function Rt(e, t) {
        var n, i, r = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e
      }
      Ht.href = wt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: wt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": $t,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": x.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function(e, t) {
          return t ? Rt(Rt(e, x.ajaxSettings), t) : Rt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Pt(Mt),
        ajaxTransport: Pt(It),
        ajax: function(t, n) {
          "object" == typeof t && (n = t, t = void 0), n = n || {};
          var i, r, o, a, s, l, u, c, h, d, f = x.ajaxSetup({}, n),
            p = f.context || f,
            m = f.context && (p.nodeType || p.jquery) ? x(p) : x.event,
            v = x.Deferred(),
            y = x.Callbacks("once memory"),
            b = f.statusCode || {},
            w = {},
            T = {},
            C = "canceled",
            S = {
              readyState: 0,
              getResponseHeader: function(e) {
                var t;
                if (u) {
                  if (!a)
                    for (a = {}; t = Lt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  t = a[e.toLowerCase() + " "]
                }
                return null == t ? null : t.join(", ")
              },
              getAllResponseHeaders: function() {
                return u ? o : null
              },
              setRequestHeader: function(e, t) {
                return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
              },
              overrideMimeType: function(e) {
                return null == u && (f.mimeType = e), this
              },
              statusCode: function(e) {
                var t;
                if (e)
                  if (u) S.always(e[S.status]);
                  else
                    for (t in e) b[t] = [b[t], e[t]];
                return this
              },
              abort: function(e) {
                var t = e || C;
                return i && i.abort(t), k(0, t), this
              }
            };
          if (v.promise(S), f.url = ((t || f.url || wt.href) + "").replace(qt, wt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(I) || [""], null == f.crossDomain) {
            l = g.createElement("a");
            try {
              l.href = f.url, l.href = l.href, f.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host
            } catch (e) {
              f.crossDomain = !0
            }
          }
          if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), zt(Mt, f, n, S), u) return S;
          for (h in (c = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), r = f.url.replace(Nt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (d = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Tt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(jt, "$1"), d = (Tt.test(r) ? "&" : "?") + "_=" + xt.guid++ + d), f.url = r + d), f.ifModified && (x.lastModified[r] && S.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && S.setRequestHeader("If-None-Match", x.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : f.accepts["*"]), f.headers) S.setRequestHeader(h, f.headers[h]);
          if (f.beforeSend && (!1 === f.beforeSend.call(p, S, f) || u)) return S.abort();
          if (C = "abort", y.add(f.complete), S.done(f.success), S.fail(f.error), i = zt(It, f, n, S)) {
            if (S.readyState = 1, c && m.trigger("ajaxSend", [S, f]), u) return S;
            f.async && f.timeout > 0 && (s = e.setTimeout((function() {
              S.abort("timeout")
            }), f.timeout));
            try {
              u = !1, i.send(w, k)
            } catch (e) {
              if (u) throw e;
              k(-1, e)
            }
          } else k(-1, "No Transport");

          function k(t, n, a, l) {
            var h, d, g, w, T, C = n;
            u || (u = !0, s && e.clearTimeout(s), i = void 0, o = l || "", S.readyState = t > 0 ? 4 : 0, h = t >= 200 && t < 300 || 304 === t, a && (w = function(e, t, n) {
              for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
              if (i)
                for (r in s)
                  if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                  } if (l[0] in n) o = l[0];
              else {
                for (r in n) {
                  if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                  }
                  a || (a = r)
                }
                o = o || a
              }
              if (o) return o !== l[0] && l.unshift(o), n[o]
            }(f, S, a)), !h && x.inArray("script", f.dataTypes) > -1 && x.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), w = function(e, t, n, i) {
              var r, o, a, s, l, u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                if (!(a = u[l + " " + o] || u["* " + o]))
                  for (r in u)
                    if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                      !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                      break
                    } if (!0 !== a)
                  if (a && e.throws) t = a(t);
                  else try {
                    t = a(t)
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + l + " to " + o
                    }
                  }
              }
              return {
                state: "success",
                data: t
              }
            }(f, w, S, h), h ? (f.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (x.lastModified[r] = T), (T = S.getResponseHeader("etag")) && (x.etag[r] = T)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, d = w.data, h = !(g = w.error))) : (g = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", h ? v.resolveWith(p, [d, C, S]) : v.rejectWith(p, [S, C, g]), S.statusCode(b), b = void 0, c && m.trigger(h ? "ajaxSuccess" : "ajaxError", [S, f, h ? d : g]), y.fireWith(p, [S, C]), c && (m.trigger("ajaxComplete", [S, f]), --x.active || x.event.trigger("ajaxStop")))
          }
          return S
        },
        getJSON: function(e, t, n) {
          return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
          return x.get(e, void 0, t, "script")
        }
      }), x.each(["get", "post"], (function(e, t) {
        x[t] = function(e, n, i, r) {
          return p(n) && (r = r || i, i = n, n = void 0), x.ajax(x.extend({
            url: e,
            type: t,
            dataType: r,
            data: n,
            success: i
          }, x.isPlainObject(e) && e))
        }
      })), x.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
      })), x._evalUrl = function(e, t, n) {
        return x.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function() {}
          },
          dataFilter: function(e) {
            x.globalEval(e, t, n)
          }
        })
      }, x.fn.extend({
        wrapAll: function(e) {
          var t;
          return this[0] && (p(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          })).append(this)), this
        },
        wrapInner: function(e) {
          return p(e) ? this.each((function(t) {
            x(this).wrapInner(e.call(this, t))
          })) : this.each((function() {
            var t = x(this),
              n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          }))
        },
        wrap: function(e) {
          var t = p(e);
          return this.each((function(n) {
            x(this).wrapAll(t ? e.call(this, n) : e)
          }))
        },
        unwrap: function(e) {
          return this.parent(e).not("body").each((function() {
            x(this).replaceWith(this.childNodes)
          })), this
        }
      }), x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
      }, x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, x.ajaxSettings.xhr = function() {
        try {
          return new e.XMLHttpRequest
        } catch (e) {}
      };
      var Ft = {
          0: 200,
          1223: 204
        },
        Wt = x.ajaxSettings.xhr();
      f.cors = !!Wt && "withCredentials" in Wt, f.ajax = Wt = !!Wt, x.ajaxTransport((function(t) {
        var n, i;
        if (f.cors || Wt && !t.crossDomain) return {
          send: function(r, o) {
            var a, s = t.xhr();
            if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
            n = function(e) {
              return function() {
                n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                  binary: s.response
                } : {
                  text: s.responseText
                }, s.getAllResponseHeaders()))
              }
            }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
              4 === s.readyState && e.setTimeout((function() {
                n && i()
              }))
            }, n = n("abort");
            try {
              s.send(t.hasContent && t.data || null)
            } catch (e) {
              if (n) throw e
            }
          },
          abort: function() {
            n && n()
          }
        }
      })), x.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
      })), x.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(e) {
            return x.globalEval(e), e
          }
        }
      }), x.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      })), x.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
          send: function(i, r) {
            t = x("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
            }), g.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }));
      var _t, Bt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
      x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Bt.pop() || x.expando + "_" + xt.guid++;
          return this[e] = !0, e
        }
      }), x.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
          return a || x.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
          a = arguments
        }, i.always((function() {
          void 0 === o ? x(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Bt.push(r)), a && p(o) && o(a[0]), a = o = void 0
        })), "script"
      })), f.createHTMLDocument = ((_t = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(i)) : t = g), o = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, o), o && o.length && x(o).remove(), x.merge([], r.childNodes)));
        var i, r, o
      }, x.fn.load = function(e, t, n) {
        var i, r, o, a = this,
          s = e.indexOf(" ");
        return s > -1 && (i = pt(e.slice(s)), e = e.slice(0, s)), p(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && x.ajax({
          url: e,
          type: r || "GET",
          dataType: "html",
          data: t
        }).done((function(e) {
          o = arguments, a.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        })).always(n && function(e, t) {
          a.each((function() {
            n.apply(this, o || [e.responseText, t, e])
          }))
        }), this
      }, x.expr.pseudos.animated = function(e) {
        return x.grep(x.timers, (function(t) {
          return e === t.elem
        })).length
      }, x.offset = {
        setOffset: function(e, t, n) {
          var i, r, o, a, s, l, u = x.css(e, "position"),
            c = x(e),
            h = {};
          "static" === u && (e.style.position = "relative"), s = c.offset(), o = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), p(t) && (t = t.call(e, n, x.extend({}, s))), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + r), "using" in t ? t.using.call(e, h) : c.css(h)
        }
      }, x.fn.extend({
        offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each((function(t) {
            x.offset.setOffset(this, e, t)
          }));
          var t, n, i = this[0];
          return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0
        },
        position: function() {
          if (this[0]) {
            var e, t, n, i = this[0],
              r = {
                top: 0,
                left: 0
              };
            if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
            else {
              for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
              e && e !== i && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0), r.left += x.css(e, "borderLeftWidth", !0))
            }
            return {
              top: t.top - r.top - x.css(i, "marginTop", !0),
              left: t.left - r.left - x.css(i, "marginLeft", !0)
            }
          }
        },
        offsetParent: function() {
          return this.map((function() {
            for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
            return e || ie
          }))
        }
      }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, (function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(i) {
          return W(this, (function(e, i, r) {
            var o;
            if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
          }), e, i, arguments.length)
        }
      })), x.each(["top", "left"], (function(e, t) {
        x.cssHooks[t] = We(f.pixelPosition, (function(e, n) {
          if (n) return n = Fe(e, t), He.test(n) ? x(e).position()[t] + "px" : n
        }))
      })), x.each({
        Height: "height",
        Width: "width"
      }, (function(e, t) {
        x.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, (function(n, i) {
          x.fn[i] = function(r, o) {
            var a = arguments.length && (n || "boolean" != typeof r),
              s = n || (!0 === r || !0 === o ? "margin" : "border");
            return W(this, (function(t, n, r) {
              var o;
              return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? x.css(t, n, s) : x.style(t, n, r, s)
            }), t, a ? r : void 0, a)
          }
        }))
      })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        x.fn[t] = function(e) {
          return this.on(t, e)
        }
      })), x.fn.extend({
        bind: function(e, t, n) {
          return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
          return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
          return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        x.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      }));
      var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      x.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), p(e)) return i = r.call(arguments, 2), o = function() {
          return e.apply(t || this, i.concat(r.call(arguments)))
        }, o.guid = e.guid = e.guid || x.guid++, o
      }, x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
      }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = E, x.isFunction = p, x.isWindow = m, x.camelCase = X, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, x.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
      };
      var Ut = e.jQuery,
        Vt = e.$;
      return x.noConflict = function(t) {
        return e.$ === x && (e.$ = Vt), t && e.jQuery === x && (e.jQuery = Ut), x
      }, void 0 === t && (e.jQuery = e.$ = x), x
    }));
  var tt = et.exports;
  /*!
   * jQuery Viewer v1.0.1
   * https://fengyuanchen.github.io/jquery-viewer
   *
   * Copyright 2018-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2019-12-14T09:00:02.315Z
   */
  if (tt && tt.fn && Ge) {
    var nt = tt.fn.viewer,
      it = "viewer";
    tt.fn.viewer = function(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
      var r;
      return this.each((function(t, i) {
        var o = tt(i),
          a = "destroy" === e,
          s = o.data(it);
        if (!s) {
          if (a) return;
          var l = tt.extend({}, o.data(), tt.isPlainObject(e) && e);
          s = new Ge(i, l), o.data(it, s)
        }
        if ("string" == typeof e) {
          var u = s[e];
          tt.isFunction(u) && ((r = u.apply(s, n)) === s && (r = void 0), a && o.removeData(it))
        }
      })), void 0 !== r ? r : this
    }, tt.fn.viewer.Constructor = Ge, tt.fn.viewer.setDefaults = Ge.setDefaults, tt.fn.viewer.noConflict = function() {
      return tt.fn.viewer = nt, this
    }
  }
  var rt = {
    exports: {}
  };
  ! function(e, t) {
    e.exports = function() {
      var e = 1e3,
        t = 6e4,
        n = 36e5,
        i = "millisecond",
        r = "second",
        o = "minute",
        a = "hour",
        s = "day",
        l = "week",
        u = "month",
        c = "quarter",
        h = "year",
        d = "date",
        f = "Invalid Date",
        p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        g = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
        v = function(e, t, n) {
          var i = String(e);
          return !i || i.length >= t ? e : "" + Array(t + 1 - i.length).join(n) + e
        },
        y = {
          s: v,
          z: function(e) {
            var t = -e.utcOffset(),
              n = Math.abs(t),
              i = Math.floor(n / 60),
              r = n % 60;
            return (t <= 0 ? "+" : "-") + v(i, 2, "0") + ":" + v(r, 2, "0")
          },
          m: function e(t, n) {
            if (t.date() < n.date()) return -e(n, t);
            var i = 12 * (n.year() - t.year()) + (n.month() - t.month()),
              r = t.clone().add(i, u),
              o = n - r < 0,
              a = t.clone().add(i + (o ? -1 : 1), u);
            return +(-(i + (n - r) / (o ? r - a : a - r)) || 0)
          },
          a: function(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          },
          p: function(e) {
            return {
              M: u,
              y: h,
              w: l,
              d: s,
              D: d,
              h: a,
              m: o,
              s: r,
              ms: i,
              Q: c
            } [e] || String(e || "").toLowerCase().replace(/s$/, "")
          },
          u: function(e) {
            return void 0 === e
          }
        },
        b = "en",
        w = {};
      w[b] = g;
      var x = function(e) {
          return e instanceof k
        },
        T = function e(t, n, i) {
          var r;
          if (!t) return b;
          if ("string" == typeof t) {
            var o = t.toLowerCase();
            w[o] && (r = o), n && (w[o] = n, r = o);
            var a = t.split("-");
            if (!r && a.length > 1) return e(a[0])
          } else {
            var s = t.name;
            w[s] = t, r = s
          }
          return !i && r && (b = r), r || !i && b
        },
        C = function(e, t) {
          if (x(e)) return e.clone();
          var n = "object" == typeof t ? t : {};
          return n.date = e, n.args = arguments, new k(n)
        },
        S = y;
      S.l = T, S.i = x, S.w = function(e, t) {
        return C(e, {
          locale: t.$L,
          utc: t.$u,
          x: t.$x,
          $offset: t.$offset
        })
      };
      var k = function() {
          function g(e) {
            this.$L = T(e.locale, null, !0), this.parse(e)
          }
          var v = g.prototype;
          return v.parse = function(e) {
            this.$d = function(e) {
              var t = e.date,
                n = e.utc;
              if (null === t) return new Date(NaN);
              if (S.u(t)) return new Date;
              if (t instanceof Date) return new Date(t);
              if ("string" == typeof t && !/Z$/i.test(t)) {
                var i = t.match(p);
                if (i) {
                  var r = i[2] - 1 || 0,
                    o = (i[7] || "0").substring(0, 3);
                  return n ? new Date(Date.UTC(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)) : new Date(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)
                }
              }
              return new Date(t)
            }(e), this.$x = e.x || {}, this.init()
          }, v.init = function() {
            var e = this.$d;
            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
          }, v.$utils = function() {
            return S
          }, v.isValid = function() {
            return !(this.$d.toString() === f)
          }, v.isSame = function(e, t) {
            var n = C(e);
            return this.startOf(t) <= n && n <= this.endOf(t)
          }, v.isAfter = function(e, t) {
            return C(e) < this.startOf(t)
          }, v.isBefore = function(e, t) {
            return this.endOf(t) < C(e)
          }, v.$g = function(e, t, n) {
            return S.u(e) ? this[t] : this.set(n, e)
          }, v.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
          }, v.valueOf = function() {
            return this.$d.getTime()
          }, v.startOf = function(e, t) {
            var n = this,
              i = !!S.u(t) || t,
              c = S.p(e),
              f = function(e, t) {
                var r = S.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                return i ? r : r.endOf(s)
              },
              p = function(e, t) {
                return S.w(n.toDate()[e].apply(n.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
              },
              m = this.$W,
              g = this.$M,
              v = this.$D,
              y = "set" + (this.$u ? "UTC" : "");
            switch (c) {
              case h:
                return i ? f(1, 0) : f(31, 11);
              case u:
                return i ? f(1, g) : f(0, g + 1);
              case l:
                var b = this.$locale().weekStart || 0,
                  w = (m < b ? m + 7 : m) - b;
                return f(i ? v - w : v + (6 - w), g);
              case s:
              case d:
                return p(y + "Hours", 0);
              case a:
                return p(y + "Minutes", 1);
              case o:
                return p(y + "Seconds", 2);
              case r:
                return p(y + "Milliseconds", 3);
              default:
                return this.clone()
            }
          }, v.endOf = function(e) {
            return this.startOf(e, !1)
          }, v.$set = function(e, t) {
            var n, l = S.p(e),
              c = "set" + (this.$u ? "UTC" : ""),
              f = (n = {}, n[s] = c + "Date", n[d] = c + "Date", n[u] = c + "Month", n[h] = c + "FullYear", n[a] = c + "Hours", n[o] = c + "Minutes", n[r] = c + "Seconds", n[i] = c + "Milliseconds", n)[l],
              p = l === s ? this.$D + (t - this.$W) : t;
            if (l === u || l === h) {
              var m = this.clone().set(d, 1);
              m.$d[f](p), m.init(), this.$d = m.set(d, Math.min(this.$D, m.daysInMonth())).$d
            } else f && this.$d[f](p);
            return this.init(), this
          }, v.set = function(e, t) {
            return this.clone().$set(e, t)
          }, v.get = function(e) {
            return this[S.p(e)]()
          }, v.add = function(i, c) {
            var d, f = this;
            i = Number(i);
            var p = S.p(c),
              m = function(e) {
                var t = C(f);
                return S.w(t.date(t.date() + Math.round(e * i)), f)
              };
            if (p === u) return this.set(u, this.$M + i);
            if (p === h) return this.set(h, this.$y + i);
            if (p === s) return m(1);
            if (p === l) return m(7);
            var g = (d = {}, d[o] = t, d[a] = n, d[r] = e, d)[p] || 1,
              v = this.$d.getTime() + i * g;
            return S.w(v, this)
          }, v.subtract = function(e, t) {
            return this.add(-1 * e, t)
          }, v.format = function(e) {
            var t = this,
              n = this.$locale();
            if (!this.isValid()) return n.invalidDate || f;
            var i = e || "YYYY-MM-DDTHH:mm:ssZ",
              r = S.z(this),
              o = this.$H,
              a = this.$m,
              s = this.$M,
              l = n.weekdays,
              u = n.months,
              c = function(e, n, r, o) {
                return e && (e[n] || e(t, i)) || r[n].slice(0, o)
              },
              h = function(e) {
                return S.s(o % 12 || 12, e, "0")
              },
              d = n.meridiem || function(e, t, n) {
                var i = e < 12 ? "AM" : "PM";
                return n ? i.toLowerCase() : i
              },
              p = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: s + 1,
                MM: S.s(s + 1, 2, "0"),
                MMM: c(n.monthsShort, s, u, 3),
                MMMM: c(u, s),
                D: this.$D,
                DD: S.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: c(n.weekdaysMin, this.$W, l, 2),
                ddd: c(n.weekdaysShort, this.$W, l, 3),
                dddd: l[this.$W],
                H: String(o),
                HH: S.s(o, 2, "0"),
                h: h(1),
                hh: h(2),
                a: d(o, a, !0),
                A: d(o, a, !1),
                m: String(a),
                mm: S.s(a, 2, "0"),
                s: String(this.$s),
                ss: S.s(this.$s, 2, "0"),
                SSS: S.s(this.$ms, 3, "0"),
                Z: r
              };
            return i.replace(m, (function(e, t) {
              return t || p[e] || r.replace(":", "")
            }))
          }, v.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }, v.diff = function(i, d, f) {
            var p, m = S.p(d),
              g = C(i),
              v = (g.utcOffset() - this.utcOffset()) * t,
              y = this - g,
              b = S.m(this, g);
            return b = (p = {}, p[h] = b / 12, p[u] = b, p[c] = b / 3, p[l] = (y - v) / 6048e5, p[s] = (y - v) / 864e5, p[a] = y / n, p[o] = y / t, p[r] = y / e, p)[m] || y, f ? b : S.a(b)
          }, v.daysInMonth = function() {
            return this.endOf(u).$D
          }, v.$locale = function() {
            return w[this.$L]
          }, v.locale = function(e, t) {
            if (!e) return this.$L;
            var n = this.clone(),
              i = T(e, t, !0);
            return i && (n.$L = i), n
          }, v.clone = function() {
            return S.w(this.$d, this)
          }, v.toDate = function() {
            return new Date(this.valueOf())
          }, v.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
          }, v.toISOString = function() {
            return this.$d.toISOString()
          }, v.toString = function() {
            return this.$d.toUTCString()
          }, g
        }(),
        D = k.prototype;
      return C.prototype = D, [
        ["$ms", i],
        ["$s", r],
        ["$m", o],
        ["$H", a],
        ["$W", s],
        ["$M", u],
        ["$y", h],
        ["$D", d]
      ].forEach((function(e) {
        D[e[1]] = function(t) {
          return this.$g(t, e[0], e[1])
        }
      })), C.extend = function(e, t) {
        return e.$i || (e(t, k, C), e.$i = !0), C
      }, C.locale = T, C.isDayjs = x, C.unix = function(e) {
        return C(1e3 * e)
      }, C.en = w[b], C.Ls = w, C.p = {}, C
    }()
  }(rt);
  var ot = rt.exports;

  function at(e, t) {
    if (e) {
      "string" == typeof e ? e = document.querySelectorAll(e) : e.tagName && (e = [e]);
      for (var n = 0; n < e.length; n++)(" " + e[n].className + " ").indexOf(" " + t + " ") < 0 && (e[n].className += " " + t)
    }
  }

  function st(e, t) {
    if (e) {
      "string" == typeof e ? e = document.querySelectorAll(e) : e.tagName && (e = [e]);
      for (var n = new RegExp("(^| )" + t + "($| )", "g"), i = 0; i < e.length; i++) e[i].className = e[i].className.replace(n, " ")
    }
  }

  function lt(e, t) {
    var n;
    return function() {
      var i = t || this,
        r = arguments;
      n || (n = setTimeout((function() {
        e.apply(i, r), n = null
      }), 80))
    }
  }! function() {
    document.querySelectorAll(".cases .item").forEach((function(e) {
      e.addEventListener("mouseover", (function(t) {
        t.preventDefault(), st(document.getElementsByClassName("img__active"), "img__active"), st(document.getElementsByClassName("sub__active"), "sub__active"), at(e.children[0], "img__active"), at(document.getElementById("sub-" + e.dataset.icon), "sub__active")
      }), !1)
    })), document.querySelectorAll("pre code").forEach((function(e) {
      hljs.highlightElement(e)
    })), document.querySelector(".post-toc-html") && document.querySelector(".post-inner-html") && tocbot.init({
      tocSelector: ".post-toc-html",
      contentSelector: ".post-inner-html",
      headingSelector: "h1, h2, h3"
    });
    var e = document.body.scrollHeight || document.documentElement.scrollHeight,
      t = window.innerHeight || document.documentElement.clientHeight;
    window.addEventListener("scroll", lt((function() {
      var n = e - t,
        i = (document.body.scrollTop || document.documentElement.scrollTop) / n;
      NProgress.set(i)
    }))), NProgress.configure({
      showSpinner: !1,
      minimum: 0
    }), tt("#backtop").click((function() {
      tt("html, body").animate({
        scrollTop: 0
      }, 800)
    })), tt(".share > .share-item").hover((function() {
      at(tt(this).children(".n-icon"), tt(this).children(".n-icon")[0].classList[1] + "-select")
    }), (function() {
      st(tt(this).children(".n-icon"), tt(this).children(".n-icon")[0].classList[2])
    })), tt(".footer-info > .social").hover((function() {
      at(tt(this).children(".n-icon"), tt(this).children(".n-icon")[0].classList[1] + "-select")
    }), (function() {
      st(tt(this).children(".n-icon"), tt(this).children(".n-icon")[0].classList[2])
    })), tt("#mobile-menu-open").click((function() {
      tt(".header-menu-mobile-menu").fadeIn(300), at(tt("body"), "mobile-menu-fixed")
    })), tt("#mobile-menu-close").click((function() {
      tt(".header-menu-mobile-menu").fadeOut(300), st(tt("body"), "mobile-menu-fixed")
    })), window.addEventListener("scroll", lt((function() {
      (document.documentElement.scrollTop || document.body.scrollTop) > 100 ? (at(".sidebar", "sidebar-fixed"), tt("#backtop").fadeIn(300)) : (st(".sidebar", "sidebar-fixed"), tt("#backtop").fadeOut(300))
    })));
    var n = document.querySelector("#widget");
    if (n && new PerfectScrollbar(n), window.aomori_logo_typed_animated && new Typed("#typed", {
        stringsElement: "#typed-strings",
        fadeOut: !0,
        fadeOutDelay: 800,
        typeSpeed: 100,
        showCursor: !1
      }), window.aomori_search_algolia) {
      var i = document.querySelector("#search-ps");
      i && new PerfectScrollbar(i);
      var r = document.querySelector('meta[property="algolia:search"]').dataset,
        o = algoliasearch(r.applicationId, r.apiKey).initIndex(r.indexName);
      tt("#search").on("keyup", lt((function(e) {
        o.search(tt("#search").val()).then((function(e) {
          var t = e.hits;
          if (tt(".search-result").slideDown(), t.length) {
            var n = "";
            t.forEach((function(e) {
              n += '<a class="search-result-item" href="'.concat(e.permalink, '"><h1>').concat(e.title, "</h1><p>").concat(ot(e.date).format("YYYY-MM-DD"), "</p></a>")
            })), tt(".search-result").html(n)
          } else tt(".search-result").html("Nothing at all.")
        }))
      }))), tt("#search").on("focusin", (function() {
        at(tt(".search"), "search-focus")
      })), tt("#search").on("focusout", (function() {
        st(tt(".search"), "search-focus"), tt(".search-result").slideUp()
      }))
    }
    var a = new Swiper(".swiper-container", {
      autoplay: {
        delay: 1e4
      },
      autoHeight: !0,
      pagination: {
        el: ".swiper-pagination",
        bulletActiveClass: "article-gallery-active"
      }
    });
    a.slides && a.slides.length <= 1 && a.destroy();
    var s = {
        title: !1,
        toolbar: {
          zoomIn: !0,
          zoomOut: !0,
          reset: !0,
          prev: !0,
          next: !0
        },
        keyboard: !1
      },
      l = tt(".article-gallery");
    l && l.length > 0 && l.viewer(s);
    var u = tt(".article-entry");
    u && u.length > 0 && u.viewer(s);
    var c = tt(".photography-item");
    if (c && c.length > 0) {
      var h = Object.assign(s, {
        url: function(e) {
          return e.dataset.original
        },
        toolbar: {
          zoomIn: !0,
          zoomOut: !0,
          reset: !0,
          prev: !1,
          next: !1
        },
        navbar: !1
      });
      c.viewer(h)
    }
    window.isPost && Array.from(tt("article video")).map((function(e) {
      return new Plyr(e)
    })), Array.from(tt("article .article-video-plyr")).map((function(e) {
      return new Plyr(e)
    })), new LazyLoad;
    var d = tt(".adsbygoogle");
    window.isPost && d.length > 0 && "none" === window.getComputedStyle(d[0]).display && tt(".intersection-observer-ad").css("display", "flex")
  }(), window.aomori.disqusjs && window.aomori.disqusjs.enable && new DisqusJS({
    shortname: window.aomori.disqusjs.shortname,
    siteName: window.aomori.disqusjs.siteName,
    api: window.aomori.disqusjs.api,
    apikey: window.aomori.disqusjs.apikey,
    nesting: window.aomori.disqusjs.nesting,
    nocomment: window.aomori.disqusjs.nocomment,
    admin: window.aomori.disqusjs.admin,
    adminLabel: window.aomori.disqusjs.adminLabel
  }), window.aomori && window.aomori.gitalk && (window.aomori.gitalk.id = md5(window.location.href), new Gitalk(window.aomori.gitalk).render("gitalk-container")), window.aomori.valine && window.aomori.valine.enable && new Valine({
    el: "#valine-container",
    appId: window.aomori.valine.appId,
    appKey: window.aomori.valine.appKey,
    placeholder: window.aomori.valine.placeholder,
    avatar: window.aomori.valine.avatar,
    pageSize: window.aomori.valine.pageSize,
    lang: window.aomori.valine.lang,
    visitor: window.aomori.valine.visitor,
    highlight: window.aomori.valine.highlight,
    recordIP: window.aomori.valine.recordIP,
    emojiCDN: window.aomori.valine.emojiCDN,
    enableQQ: window.aomori.valine.enableQQ,
    requiredFields: window.aomori.valine.requiredFields
  })
}));