// { "framework": "Vue" }

webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Bongiornor/program/weex-vue-starter-kit/src/pages/login/login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bea5782c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {

  methods: {
    jump: function jump() {
      this.$router.push("/");
    }
  }
};

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "fixed-button": {
    "position": "absolute",
    "backgroundColor": "#006622",
    "borderRadius": 10,
    "width": 120,
    "padding": 15,
    "color": "#FFFFFF",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('text', {
    staticClass: ["fixed-button"],
    on: {
      "click": function($event) {
        _vm.jump("/")
      }
    }
  }, [_vm._v("index")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

});