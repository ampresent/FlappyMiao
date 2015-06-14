!function () {
    var a = "https://widget.battleforthenet.com/iframe";
    "undefined" == typeof _bftn_options && (_bftn_options = {}), "undefined" == typeof _bftn_options.iframe_base_path && (_bftn_options.iframe_base_path = a), "undefined" == typeof _bftn_options.animation && (_bftn_options.animation = "modal"), "undefined" == typeof _bftn_options.delay && (_bftn_options.delay = 0), "undefined" == typeof _bftn_options.debug && (_bftn_options.debug = !1), "undefined" == typeof _bftn_options.always_show_widget && (_bftn_options.always_show_widget = !1);
    var b = {modal: {options: {modalAnimation: "modal", skipEmailSignup: !1, skipCallTool: !1, fastAnimation: !1, boxUnchecked: !1, org: null}, init: function (a) {
        for (var b in a)this.options[b] = a[b];
        return this
    }, start: function () {
        var a = "#_bftn_iframe { position: fixed; left: 0px; top: 0px; 				width: 100%; height: 100%; z-index: 100001; }";
        c.injectCSS("_bftn_iframe_css", a);
        var b = c.createIframe(this.options.modalAnimation);
        c.bindIframeCommunicator(b, this)
    }, stop: function () {
        c.destroyIframe()
    }}, banner: {options: {modalAnimation: "banner", position: "topright", width: 430, height: 104, offsetY: 20, url: "https://www.battleforthenet.com", theme: "light"}, init: function (a) {
        for (var b in a)this.options[b] = a[b];
        return this
    }, start: function () {
        switch (console.log("width: ", this.options.width), this.options.position) {
            case"bottomright":
                var a = "bottom: " + this.options.offsetY + "px; right: 0px;", b = "bottom";
                break;
            default:
                var a = "top: " + this.options.offsetY + "px; right: 0px;", b = "top"
        }
        var d = this.options.width - 1, e = "#_bftn_iframe { 					position: fixed; " + a + " 					width: " + this.options.width + "px; 					height: " + this.options.height + "px; 					z-index: 100001; 				} 				@media (max-width:" + d + "px) { 					#_bftn_iframe { 						position: absolute; 						width: 100%; 						left: 0px; 						" + b + ": 0px; 					} 				}";
        c.injectCSS("_bftn_iframe_css", e);
        var f = c.createIframe(this.options.modalAnimation);
        c.bindIframeCommunicator(f, this)
    }, stop: function () {
        c.destroyIframe()
    }}}, c = {injectCSS: function (a, b) {
        var c = document.createElement("style");
        c.type = "text/css", c.id = a, c.styleSheet ? c.styleSheet.cssText = b : c.appendChild(document.createTextNode(b)), document.head.appendChild(c)
    }, createIframe: function (a) {
        var b = document.createElement("iframe");
        return b.id = "_bftn_iframe", b.src = _bftn_options.iframe_base_path + "/" + a + ".html", b.frameBorder = 0, b.allowTransparency = !0, b.style.display = "none", document.body.appendChild(b), b
    }, destroyIframe: function () {
        var a = document.getElementById("_bftn_iframe");
        a.parentNode.removeChild(a)
    }, bindIframeCommunicator: function (a, b) {
        var c = function (b, c) {
            c || (c = {}), c.requestType = b, c.BFTN_WIDGET_MSG = !0, c.HOST_NAME = g, a.contentWindow.postMessage(c, "*")
        }, d = window.addEventListener ? "addEventListener" : "attachEvent", e = window[d], f = "attachEvent" == d ? "onmessage" : "message", g = this.getHostname();
        e(f, function (d) {
            if (d.data && d.data.BFTN_IFRAME_MSG)switch (delete d.data.BFTN_IFRAME_MSG, d.data.requestType) {
                case"getAnimation":
                    a.style.display = "block", c("putAnimation", b.options);
                    break;
                case"stop":
                    b.stop()
            }
        }, !1)
    }, setCookie: function (a, b, c) {
        var d = new Date;
        d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
        var e = "expires=" + d.toGMTString();
        document.cookie = a + "=" + b + "; " + e
    }, getCookie: function (a) {
        for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            var e = c[d].trim();
            if (0 == e.indexOf(b))return e.substring(b.length, e.length)
        }
        return""
    }, getHostname: function () {
        var a = window.location.host.replace("www.", "");
        return a
    }, log: function () {
        _bftn_options.debug && console.log.apply(console, arguments)
    }}, d = function () {
        var a = window.location.href.indexOf("SHOW_BFTN_WIDGET") > -1;
        if (!_bftn_options.always_show_widget && 0 == a) {
            if (c.getCookie("_BFTN_WIDGET_SHOWN"))return;
            if ((new Date).getDate() < 10)return
        }
        if (c.setCookie("_BFTN_WIDGET_SHOWN", "true", 365), /(iPhone|iPod)/g.test(navigator.userAgent) && (_bftn_options.animation = "banner"), "undefined" == typeof b[_bftn_options.animation])return c.log("Animation undefined: " + _bftn_options.animation);
        {
            var d = b[_bftn_options.animation];
            new Array
        }
        setTimeout(function () {
            d.init(_bftn_options).start()
        }, _bftn_options.delay)
    }, e = document.readyState;
    "complete" == e || "loaded" == e || "interactive" == e ? d() : document.addEventListener && document.addEventListener("DOMContentLoaded", d, !1)
}();