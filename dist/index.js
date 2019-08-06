'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".widget-content-module_wrapper__aUUfz {\n  padding: 25px 30px; }\n  .widget-content-module_wrapper__aUUfz + .widget-content-module_wrapper__aUUfz {\n    border-top: 1px solid #EAEDF3; }\n  .widget-content-module_wrapper__aUUfz.widget-content-module_grey__9fqIC {\n    background-color: #FBFBFD; }\n";
var s = {"wrapper":"widget-content-module_wrapper__aUUfz","grey":"widget-content-module_grey__9fqIC"};
styleInject(css);

var UikWidgetContent = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, grey = _a.grey, rest = __rest(_a, ["children", "className", "grey"]);
    return (React__default.createElement("div", __assign({ className: classnames(s.wrapper, className, (_b = {},
            _b[s.grey] = grey,
            _b)) }, rest), children));
};

var css$1 = ".widget-title-module_wrapper__u7NoP {\n  padding: 18px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .widget-title-module_wrapper__u7NoP:not(:last-child) {\n    border-bottom: 1px solid #EAEDF3; }\n  .widget-title-module_wrapper__u7NoP h3 {\n    /* Title: */\n    font-weight: 500;\n    font-size: 1.125rem;\n    line-height: 1.75rem; }\n    .widget-title-module_wrapper__u7NoP h3 + * {\n      margin-top: 0; }\n  .widget-title-module_wrapper__u7NoP.widget-title-module_noDivider__2uy-U {\n    padding-bottom: 5px;\n    border-bottom: none; }\n";
var cls = {"wrapper":"widget-title-module_wrapper__u7NoP","noDivider":"widget-title-module_noDivider__2uy-U"};
styleInject(css$1);

var UikWidgetHeader = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, noDivider = _a.noDivider, rightEl = _a.rightEl, rest = __rest(_a, ["children", "className", "noDivider", "rightEl"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls.wrapper, className, (_b = {},
            _b[cls.noDivider] = noDivider,
            _b)) }, rest),
        React__default.createElement("h3", null, children),
        rightEl));
};

var css$2 = ".widget-module_wrapper__gUXEW {\n  border: 1px solid #EAEDF3;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n  background: #FFFFFF;\n  display: block; }\n  .widget-module_wrapper__gUXEW.widget-module_padding__1P_zZ {\n    padding: 30px; }\n  .widget-module_wrapper__gUXEW.widget-module_margin__2Bage {\n    margin: 15px; }\n  .widget-module_wrapper__gUXEW h1,\n  .widget-module_wrapper__gUXEW h2,\n  .widget-module_wrapper__gUXEW h3,\n  .widget-module_wrapper__gUXEW h4,\n  .widget-module_wrapper__gUXEW h5 {\n    font-weight: 500; }\n  .widget-module_wrapper__gUXEW h3 {\n    font-size: 1.125rem;\n    line-height: 1.75rem; }\n\n.widget-module_disabled__30u3p {\n  pointer-events: none;\n  opacity: 0.4; }\n";
var s$1 = {"wrapper":"widget-module_wrapper__gUXEW","padding":"widget-module_padding__1P_zZ","margin":"widget-module_margin__2Bage","disabled":"widget-module_disabled__30u3p"};
styleInject(css$2);

var UikWidget = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, padding = _a.padding, margin = _a.margin, disabled = _a.disabled, rest = __rest(_a, ["children", "className", "padding", "margin", "disabled"]);
    return (React__default.createElement("div", __assign({ className: classnames(s$1.wrapper, className, (_b = {},
            _b[s$1.padding] = padding,
            _b[s$1.margin] = margin,
            _b[s$1.disabled] = disabled,
            _b)) }, rest), children));
};
UikWidget.defaultProps = {
    className: null,
    children: null,
    padding: false,
    margin: false,
};

var css$3 = ".widget-table-module_wrapper__3lv8t {\n  width: 100%;\n  border-collapse: collapse; }\n  .widget-table-module_wrapper__3lv8t tr td,\n  .widget-table-module_wrapper__3lv8t tr th {\n    text-align: left;\n    padding: 15px 15px;\n    border-bottom: 1px solid #EAEDF3;\n    line-height: 1.5; }\n    .widget-table-module_wrapper__3lv8t tr td:first-child,\n    .widget-table-module_wrapper__3lv8t tr th:first-child {\n      padding-left: 30px; }\n    .widget-table-module_wrapper__3lv8t tr td:last-child,\n    .widget-table-module_wrapper__3lv8t tr th:last-child {\n      padding-right: 30px; }\n  .widget-table-module_wrapper__3lv8t tr th {\n    font-weight: 500;\n    font-size: .75rem;\n    padding: 8px 15px;\n    text-transform: uppercase;\n    color: #9EA0A5;\n    line-height: 1.125rem;\n    height: 44px;\n    align-items: center; }\n  .widget-table-module_wrapper__3lv8t tr td {\n    font-size: .875rem;\n    height: 70px;\n    padding: 0 inherit;\n    color: #3E3F42; }\n";
var cls$1 = {"wrapper":"widget-table-module_wrapper__3lv8t"};
styleInject(css$3);

var UikWidgetTable = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("table", __assign({ className: classnames(cls$1.wrapper, className) }, rest), children));
};

var css$4 = ".headline-module_wrapper__1-mM9 {\n  font-size: 1.625rem;\n  line-height: 2.375rem;\n  font-weight: 400; }\n";
var s$2 = {"wrapper":"headline-module_wrapper__1-mM9"};
styleInject(css$4);

var UikHeadline = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("h2", __assign({ className: classnames(s$2.wrapper, className) }, rest), children));
};
UikHeadline.defaultProps = {
    className: null,
};

var css$5 = ".headline-desc-module_wrapper__15bVF + * {\n  margin-top: 30px !important; }\n";
var s$3 = {"wrapper":"headline-desc-module_wrapper__15bVF"};
styleInject(css$5);

var UikHeadline$1 = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("p", __assign({ className: classnames(s$3.wrapper, className) }, rest), children));
};
UikHeadline$1.defaultProps = {
    className: null,
};

var css$6 = ".form-input-group-module_vertical__1hnGJ {\n  display: flex;\n  flex-direction: column;\n  margin-top: -8px;\n  margin-bottom: -8px; }\n  .form-input-group-module_vertical__1hnGJ > *:not(.form-input-group-module_horizontal__3kCiy) {\n    margin-top: 8px;\n    margin-bottom: 8px; }\n  .form-input-group-module_vertical__1hnGJ > .form-input-group-module_horizontal__3kCiy {\n    margin-top: 0;\n    margin-bottom: 0; }\n\n.form-input-group-module_horizontal__3kCiy {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: -8px; }\n  .form-input-group-module_horizontal__3kCiy > * {\n    margin: 8px 8px;\n    flex-shrink: 1;\n    flex-grow: 1;\n    flex-basis: 1px;\n    min-width: 130px; }\n  .form-input-group-module_horizontal__3kCiy > .form-input-group-module_vertical__1hnGJ {\n    margin-top: 0;\n    margin-bottom: 0; }\n";
var s$4 = {"vertical":"form-input-group-module_vertical__1hnGJ","horizontal":"form-input-group-module_horizontal__3kCiy"};
styleInject(css$6);

var UikFormInputGroup = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, direction = _a.direction, horizontal = _a.horizontal, rest = __rest(_a, ["children", "className", "direction", "horizontal"]);
    return (React__default.createElement("div", __assign({ className: classnames(className, (_b = {},
            _b[s$4.horizontal] = direction === 'horizontal' || horizontal,
            _b[s$4.vertical] = !(direction === 'horizontal' || horizontal),
            _b)) }, rest), children));
};

var css$7 = ".content-title-module_wrapper__3rbp2 {\n  font-weight: 500;\n  font-size: .75rem;\n  color: #9EA0A5;\n  line-height: 1.125rem;\n  text-transform: uppercase; }\n  .content-title-module_wrapper__3rbp2 + * {\n    margin-top: .5rem; }\n";
var s$5 = {"wrapper":"content-title-module_wrapper__3rbp2"};
styleInject(css$7);

var UikContentTitle = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return React__default.createElement("span", __assign({ className: s$5.wrapper }, rest), children);
};

var css$8 = ".input-module_inputWrapper__Q-1Y3 {\n  position: relative; }\n\n.input-module_header__3N7eg {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 1.5rem; }\n\n.input-module_input__29KGv {\n  border: 1px solid #EAEDF3;\n  border-radius: 4px;\n  display: block;\n  width: 100%;\n  background: white;\n  padding: 10px 15px;\n  transition: .2s all;\n  outline: none;\n  font-size: 0.875rem; }\n  .input-module_input__29KGv + * {\n    margin-top: 10px; }\n  .input-module_input__29KGv:disabled {\n    background: rgba(255, 255, 255, 0.3); }\n  .input-module_input__29KGv:focus {\n    border-color: #1665D8; }\n  .input-module_input__29KGv::-webkit-input-placeholder, .input-module_input__29KGv::-moz-placeholder, .input-module_input__29KGv:-ms-input-placeholder, .input-module_input__29KGv:-moz-placeholder {\n    color: #9EA0A5; }\n  .input-module_input__29KGv.input-module_errorHighlight__2RA9a {\n    border-color: #E6492D; }\n\n.input-module_errorMessage__1ZJU1 {\n  color: #E6492D;\n  margin: 0;\n  line-height: 1.375rem; }\n\n.input-module_iconWrapper__3jqYH {\n  position: absolute;\n  top: 50%;\n  color: #D8DCE6;\n  transform: translateY(-50%); }\n  .input-module_iconWrapper__3jqYH:not(.input-module_iconWrapperRight__18MgB) {\n    left: 12px; }\n    .input-module_iconWrapper__3jqYH:not(.input-module_iconWrapperRight__18MgB) + input {\n      padding-left: 40px; }\n  .input-module_iconWrapper__3jqYH.input-module_iconWrapperRight__18MgB {\n    left: auto;\n    right: 12px; }\n    .input-module_iconWrapper__3jqYH.input-module_iconWrapperRight__18MgB + input {\n      padding-right: 40px; }\n\n.input-module_clear__3-yIq .input-module_iconWrapper__3jqYH:not(.input-module_iconWrapperRight__18MgB) {\n  left: 0; }\n  .input-module_clear__3-yIq .input-module_iconWrapper__3jqYH:not(.input-module_iconWrapperRight__18MgB) + input {\n    padding-left: 28px; }\n\n.input-module_clear__3-yIq .input-module_iconWrapper__3jqYH.input-module_iconWrapperRight__18MgB {\n  right: 0; }\n  .input-module_clear__3-yIq .input-module_iconWrapper__3jqYH.input-module_iconWrapperRight__18MgB + input {\n    padding-right: 28px; }\n\n.input-module_clear__3-yIq input {\n  padding: 0;\n  border: none !important;\n  background: transparent; }\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 5500s ease-in-out 0s !important;\n  color: #6B6C6F !important;\n  -webkit-text-fill-color: #6B6C6F !important; }\n";
var s$6 = {"inputWrapper":"input-module_inputWrapper__Q-1Y3","header":"input-module_header__3N7eg","input":"input-module_input__29KGv","errorHighlight":"input-module_errorHighlight__2RA9a","errorMessage":"input-module_errorMessage__1ZJU1","iconWrapper":"input-module_iconWrapper__3jqYH","iconWrapperRight":"input-module_iconWrapperRight__18MgB","clear":"input-module_clear__3-yIq"};
styleInject(css$8);

var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.props.value ? _this.props.value : '', errorMessage: props.errorMessage };
        return _this;
    }
    Input.prototype.componentWillReceiveProps = function (nextProps) {
        (nextProps.value || nextProps.value === '') && this.setState({ value: nextProps.value });
    };
    Input.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var _d = this.props, className = _d.className, wrapperProps = _d.wrapperProps, name = _d.name, icon = _d.icon, label = _d.label, focus = _d.focus, // eslint-disable-line
        clear = _d.clear, iconPosition = _d.iconPosition, type = _d.type, value = _d.value, valueCheck = _d.valueCheck, onInput = _d.onInput, 
        // size
        rest = __rest(_d, ["className", "wrapperProps", "name", "icon", "label", "focus", "clear", "iconPosition", "type", "value", "valueCheck", "onInput"]);
        return (React__default.createElement("div", __assign({}, wrapperProps, { className: classnames(className, (_a = {},
                _a[s$6.clear] = clear,
                _a)) }),
            label && (React__default.createElement("div", { className: s$6.header },
                React__default.createElement(UikContentTitle, null, label),
                this.state.errorMessage && (React__default.createElement("p", { className: s$6.errorMessage }, this.state.errorMessage)))),
            React__default.createElement("div", { className: classnames(s$6.inputWrapper) },
                icon && (React__default.createElement("span", { className: classnames(s$6.iconWrapper, (_b = {},
                        _b[s$6.iconWrapperRight] = iconPosition === 'right',
                        _b)) }, icon)),
                React__default.createElement("input", __assign({ className: classnames(s$6.input, (_c = {},
                        _c[s$6.errorHighlight] = this.state.errorMessage,
                        _c)), name: name, type: type ? type : 'text', value: this.state.value, onChange: function (e) {
                        var value = e.target.value;
                        if ((_this.props.valueCheck && value && _this.props.valueCheck.pattern.test(value)) ||
                            !_this.props.valueCheck || value.length === 0) {
                            _this.setState({ value: value, errorMessage: _this.props.errorMessage });
                            _this.props.onInput && _this.props.onInput(value);
                        }
                        else {
                            console.log('');
                            _this.setState({ value: value, errorMessage: _this.props.valueCheck.noMatchMessage });
                        }
                        e.preventDefault();
                    } }, rest)))));
    };
    return Input;
}(React.Component));

var css$9 = ".divider-module_horizontal__RO1Ho {\n  height: 1px;\n  width: 100%;\n  background: #EAEDF3; }\n  .divider-module_horizontal__RO1Ho.divider-module_margin__1bzJP {\n    margin-top: 24px;\n    margin-bottom: 24px; }\n\n.divider-module_vertical__3T0G7 {\n  width: 1px;\n  height: 100%;\n  background: #EAEDF3; }\n  .divider-module_vertical__3T0G7.divider-module_margin__1bzJP {\n    margin-left: 24px;\n    margin-right: 24px; }\n";
var s$7 = {"horizontal":"divider-module_horizontal__RO1Ho","margin":"divider-module_margin__1bzJP","vertical":"divider-module_vertical__3T0G7"};
styleInject(css$9);

var UikDivider = function (_a) {
    var _b;
    var className = _a.className, direction = _a.direction, vertical = _a.vertical, margin = _a.margin, rest = __rest(_a, ["className", "direction", "vertical", "margin"]);
    return (React__default.createElement("div", __assign({ className: classnames((_b = {},
            _b[s$7.vertical] = vertical || direction === 'vertical',
            _b[s$7.horizontal] = !(vertical || direction === 'vertical'),
            _b[s$7.margin] = margin,
            _b), className) }, rest)));
};
UikDivider.defaultProps = {
    className: null,
    direction: 'horizontal',
    margin: false,
    vertical: false,
};

var css$a = "@charset \"UTF-8\";\n@font-face {\n  font-family: 'uikon';\n  src: url(\"./fonts/uikon.eot?65atsz\");\n  src: url(\"./fonts/uikon.eot?65atsz#iefix\") format(\"embedded-opentype\"), url(\"./fonts/uikon.ttf?65atsz\") format(\"truetype\"), url(\"./fonts/uikon.woff?65atsz\") format(\"woff\"), url(\"./fonts/uikon.svg?65atsz#uikon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"uikon\"],\n[class*=\"uikon\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'uikon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Enable Ligatures ================ */\n  letter-spacing: 0;\n  -webkit-font-feature-settings: \"liga\";\n  -moz-font-feature-settings: \"liga=1\";\n  -moz-font-feature-settings: \"liga\";\n  -ms-font-feature-settings: \"liga\" 1;\n  font-feature-settings: \"liga\";\n  -webkit-font-variant-ligatures: discretionary-ligatures;\n  font-variant-ligatures: discretionary-ligatures;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.uikon_uikon-dropdown_arrow__3ehq5:before {\n  content: \"\\E922\"; }\n\n.uikon_uikon-arrow_left__3sDmh:before {\n  content: \"\\E920\"; }\n\n.uikon_uikon-arrow_right__1yK82:before {\n  content: \"\\E921\"; }\n\n.uikon_uikon-plus_rounded__2jvrx:before {\n  content: \"\\E900\"; }\n\n.uikon_uikon-pin_rounded_circle__TvtpW:before {\n  content: \"\\E901\"; }\n\n.uikon_uikon-message_2__q47Mr:before {\n  content: \"\\E902\"; }\n\n.uikon_uikon-calendar_2__2qdrw:before {\n  content: \"\\E903\"; }\n\n.uikon_uikon-building_plan__a7_8a:before {\n  content: \"\\E904\";\n  color: #9ea0a5; }\n\n.uikon_uikon-tap_click_force_touch__BKLqQ:before {\n  content: \"\\E905\"; }\n\n.uikon_uikon-ruler__13kPi:before {\n  content: \"\\E906\"; }\n\n.uikon_uikon-video_camera__3rvbk:before {\n  content: \"\\E907\"; }\n\n.uikon_uikon-phone_two__3kEZy:before {\n  content: \"\\E908\"; }\n\n.uikon_uikon-smile__27U_g:before {\n  content: \"\\E909\"; }\n\n.uikon_uikon-attachment__3Zxks:before {\n  content: \"\\E90A\"; }\n\n.uikon_uikon-picture__1HVS1:before {\n  content: \"\\E90B\"; }\n\n.uikon_uikon-view_simple__2Dc4N:before {\n  content: \"\\E90C\"; }\n\n.uikon_uikon-lightbulb__22e1q:before {\n  content: \"\\E90D\"; }\n\n.uikon_uikon-wallet__1rvIf:before {\n  content: \"\\E90E\"; }\n\n.uikon_uikon-view_grid__HcOfS:before {\n  content: \"\\E90F\"; }\n\n.uikon_uikon-view_list__3XdGX:before {\n  content: \"\\E910\"; }\n\n.uikon_uikon-profile_card__16Bee:before {\n  content: \"\\E911\"; }\n\n.uikon_uikon-front_store__GKzzl:before {\n  content: \"\\E912\"; }\n\n.uikon_uikon-rocket__1MMz9:before {\n  content: \"\\E913\"; }\n\n.uikon_uikon-buildings__1yNFD:before {\n  content: \"\\E914\"; }\n\n.uikon_uikon-building__6b3YS:before {\n  content: \"\\E915\"; }\n\n.uikon_uikon-shopping_bag__1eA6x:before {\n  content: \"\\E916\"; }\n\n.uikon_uikon-arrow-dropdown__3ckTG:before {\n  content: \"\\E917\"; }\n\n.uikon_uikon-check__1EvRt:before {\n  content: \"\\E918\"; }\n\n.uikon_uikon-more__1jcAr:before {\n  content: \"\\E919\"; }\n\n.uikon_uikon-trending_down__2L93O:before {\n  content: \"\\E91A\"; }\n\n.uikon_uikon-trending_up__1wtgD:before {\n  content: \"\\E91B\"; }\n\n.uikon_uikon-star__1WfkB:before {\n  content: \"\\E91C\"; }\n\n.uikon_uikon-star-filled__BXLOU:before {\n  content: \"\\E91D\"; }\n\n.uikon_uikon-add__2qHTd:before {\n  content: \"\\E91E\"; }\n\n.uikon_uikon-help__2ChXH:before {\n  content: \"\\E91F\"; }\n\n.uikon_uikon-message__3W4pW:before {\n  content: \"\\E9DF\"; }\n\n.uikon_uikon-send_round__3ql89:before {\n  content: \"\\E9E8\"; }\n\n.uikon_uikon-inbox_paper_round__1-AKc:before {\n  content: \"\\E9F5\"; }\n\n.uikon_uikon-search_left__2qecY:before {\n  content: \"\\EA27\"; }\n\n.uikon_uikon-settings__1-1GQ:before {\n  content: \"\\EA36\"; }\n\n.uikon_uikon-love__2xewg:before {\n  content: \"\\EA38\"; }\n\n.uikon_uikon-love-fill__3dEkd:before {\n  content: \"\\EA39\"; }\n\n.uikon_uikon-edit__1getM:before {\n  content: \"\\EA3E\"; }\n\n.uikon_uikon-multitasking__TUrU0:before {\n  content: \"\\EA69\"; }\n\n.uikon_uikon-gallery_grid_view__38c4g:before {\n  content: \"\\EA8C\"; }\n\n.uikon_uikon-home__zKrdp:before {\n  content: \"\\EA9A\"; }\n\n.uikon_uikon-profile_round__N_TAE:before {\n  content: \"\\EACB\"; }\n\n.uikon_uikon-profile_plus_round__3WWdN:before {\n  content: \"\\EADD\"; }\n\n.uikon_uikon-clock__3GB7v:before {\n  content: \"\\EAE6\"; }\n\n.uikon_uikon-container__1QpJ6:before {\n  content: \"\\EAE9\"; }\n\n.uikon_uikon-globe_network__21f4P:before {\n  content: \"\\EAFB\"; }\n\n.uikon_uikon-calendar__3LEtW:before {\n  content: \"\\EB5C\"; }\n\n.uikon_uikon-stats__1-QBV:before {\n  content: \"\\EB61\"; }\n\n.uikon_uikon-money_round__25p1K:before {\n  content: \"\\EB69\"; }\n\n.uikon_uikon-cloud_up__3xQ8J:before {\n  content: \"\\EBE3\"; }\n\n.uikon_uikon-image_picture__WY0-G:before {\n  content: \"\\EC3C\"; }\n\n.uikon_uikon-camera__cifs_:before {\n  content: \"\\EC47\"; }\n\n.uikon_uikon-desktop__26_Uo:before {\n  content: \"\\EF22\"; }\n\n.uikon_uikon-phone__30Ihg:before {\n  content: \"\\EF28\"; }\n\n.uikon.green {\n  color: #38B249; }\n\n.uikon.blue {\n  color: #1665D8; }\n\n.uikon.orange {\n  color: #F6AB2F; }\n\n.uikon.violet {\n  color: #6977FF; }\n\n.uikon.yellow {\n  color: #FACF55; }\n\n.uikon.red {\n  color: #E6492D; }\n";
styleInject(css$a);

var Uikon = function (_a) {
    var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
    return (React__default.createElement("i", __assign({ className: classnames('uikon', className, color) }, rest), children));
};
Uikon.defaultProps = {
    className: null,
    children: null,
    color: null,
};

var css$b = "a.btn-module_base__3I-2K:hover {\n  text-decoration: none !important; }\n\n.btn-module_base__3I-2K {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  height: 38px;\n  padding: 0 18px;\n  transition: all 0.1s ease-in-out 0s;\n  font-size: 0.875rem;\n  font-weight: 400;\n  position: relative;\n  /*Basic Appearence*/\n  background: #FFFFFF;\n  background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);\n  border: 1px solid #D8DCE6;\n  box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.05), inset 0 2px 0 0 rgba(255, 255, 255, 0.05);\n  color: #3E3F42;\n  border-radius: 4px;\n  /*Colors*/ }\n  .btn-module_base__3I-2K i {\n    opacity: .8; }\n  .btn-module_base__3I-2K.btn-module_hasIcon__25J49 {\n    padding-left: 40px; }\n    .btn-module_base__3I-2K.btn-module_hasIcon__25J49 .btn-module_iconWrapper__2jtsy {\n      position: absolute;\n      top: 50%;\n      left: 12px;\n      transform: translateY(-50%);\n      font-size: 18px; }\n  .btn-module_base__3I-2K.btn-module_iconRight__2-N8s {\n    padding-right: 40px;\n    padding-left: 18px; }\n    .btn-module_base__3I-2K.btn-module_iconRight__2-N8s .btn-module_iconWrapper__2jtsy {\n      left: auto;\n      right: 12px; }\n  .btn-module_base__3I-2K.btn-module_iconOnly__3falu {\n    padding: 0;\n    justify-content: center;\n    flex-basis: 38px;\n    width: 38px;\n    flex-shrink: 0; }\n    .btn-module_base__3I-2K.btn-module_iconOnly__3falu .btn-module_iconWrapper__2jtsy {\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%); }\n  .btn-module_base__3I-2K.btn-module_isExpanded__2wAIo {\n    width: 100%; }\n    .btn-module_base__3I-2K.btn-module_isExpanded__2wAIo.btn-module_hasIcon__25J49 {\n      padding-left: 40px;\n      padding-right: 40px; }\n  .btn-module_base__3I-2K .btn-module_content__1_sfe {\n    flex-grow: 1;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .btn-module_base__3I-2K > * {\n    transition: .1s all; }\n  .btn-module_base__3I-2K > .btn-module_loader__2nWhC {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .btn-module_base__3I-2K.btn-module_isLoading__PoXFm > * {\n    opacity: 0; }\n  .btn-module_base__3I-2K.btn-module_isLoading__PoXFm > .btn-module_loader__2nWhC {\n    opacity: 1; }\n  .btn-module_base__3I-2K.btn-module_xs__1EuPS {\n    height: 28px;\n    padding: 0 15px;\n    font-size: 12px; }\n  .btn-module_base__3I-2K.btn-module_lg__30wfU {\n    height: 48px;\n    padding: 0 40px;\n    font-size: 16px; }\n  .btn-module_base__3I-2K:not(:disabled) {\n    cursor: pointer; }\n  .btn-module_base__3I-2K:focus {\n    outline: none; }\n  .btn-module_base__3I-2K:active {\n    border: 1px solid #eee;\n    box-shadow: none;\n    transform: translateY(0px); }\n  .btn-module_base__3I-2K:hover {\n    background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);\n    border: 1px solid #CACEDB;\n    box-shadow: 0 1px 2px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.05); }\n  .btn-module_base__3I-2K:focus {\n    background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);\n    border: 1px solid #BDC2D1;\n    box-shadow: 0 0 1px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.05); }\n  .btn-module_base__3I-2K.btn-module_noBorder__6Uih6 {\n    border: none !important;\n    background: white;\n    box-shadow: none; }\n    .btn-module_base__3I-2K.btn-module_noBorder__6Uih6:hover {\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.13); }\n    .btn-module_base__3I-2K.btn-module_noBorder__6Uih6:focus {\n      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1); }\n  .btn-module_base__3I-2K.btn-module_transparent__3Tc5A {\n    background: transparent;\n    border: 1px solid #E2E5ED;\n    box-shadow: none; }\n    .btn-module_base__3I-2K.btn-module_transparent__3Tc5A:hover {\n      border: 1px solid #CACEDB; }\n    .btn-module_base__3I-2K.btn-module_transparent__3Tc5A:focus {\n      border: 1px solid #BDC2D1; }\n  .btn-module_base__3I-2K.btn-module_dark__4z942 {\n    color: white;\n    background: rgba(62, 63, 66, 0.6);\n    border: 1px solid rgba(62, 63, 66, 0.8);\n    box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n    .btn-module_base__3I-2K.btn-module_dark__4z942:hover {\n      background: rgba(62, 63, 66, 0.7);\n      border: 1px solid rgba(62, 63, 66, 0.9);\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__3I-2K.btn-module_dark__4z942:hover.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18); }\n    .btn-module_base__3I-2K.btn-module_dark__4z942:focus {\n      background: rgba(62, 63, 66, 0.75);\n      border: 1px solid rgba(62, 63, 66, 0.9);\n      border: 1px solid #1A8628;\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__3I-2K.btn-module_dark__4z942:focus.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1); }\n  .btn-module_base__3I-2K.btn-module_success__3rnek {\n    color: white;\n    background: #38B249;\n    background-image: linear-gradient(0deg, #34AA44 0%, #38B249 100%);\n    border: 1px solid #2D9C3C;\n    box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n    .btn-module_base__3I-2K.btn-module_success__3rnek:hover {\n      background-image: linear-gradient(0deg, #2CA13C 2%, #2FAE40 100%);\n      border: 1px solid #259835;\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__3I-2K.btn-module_success__3rnek:hover.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18); }\n    .btn-module_base__3I-2K.btn-module_success__3rnek:focus {\n      background-image: linear-gradient(0deg, #259835 0%, #27A337 100%);\n      border: 1px solid #1A8628;\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__3I-2K.btn-module_success__3rnek:focus.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1); }\n  .btn-module_base__3I-2K.btn-module_error__EAivm {\n    color: white;\n    background: #E6492D;\n    background-image: linear-gradient(-180deg, #E73C1E 0%, #CF3014 100%);\n    border: 1px solid #BA0B15;\n    box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.08); }\n    .btn-module_base__3I-2K.btn-module_error__EAivm:hover {\n      background-image: linear-gradient(-180deg, #DF3517 0%, #C42B10 100%);\n      border: 1px solid #B00B14;\n      box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.08); }\n      .btn-module_base__3I-2K.btn-module_error__EAivm:hover.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.18); }\n    .btn-module_base__3I-2K.btn-module_error__EAivm:focus {\n      background-image: linear-gradient(-179deg, #C22B10 0%, #B8280E 100%);\n      border: 1px solid #A00A13;\n      box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.08);\n      border-radius: 4px; }\n      .btn-module_base__3I-2K.btn-module_error__EAivm:focus.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.1); }\n  .btn-module_base__3I-2K.btn-module_primary__3toPZ {\n    color: white;\n    background: #1665D8;\n    background-image: linear-gradient(-1deg, #1665D8 2%, #1F6FE5 98%);\n    background-image: linear-gradient(0deg, #1665D8 0%, #1F6FE5 100%);\n    border: 1px solid #1461D2;\n    box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n    .btn-module_base__3I-2K.btn-module_primary__3toPZ:hover {\n      background-image: linear-gradient(0deg, #115ECF 0%, #1767DB 100%);\n      border: 1px solid #0E57C2;\n      box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__3I-2K.btn-module_primary__3toPZ:hover.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.18); }\n    .btn-module_base__3I-2K.btn-module_primary__3toPZ:focus {\n      background-image: linear-gradient(0deg, #0E55BD 0%, #0F5BCA 100%);\n      border: 1px solid #0B4AA5;\n      box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__3I-2K.btn-module_primary__3toPZ:focus.btn-module_noBorder__6Uih6 {\n        box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.1); }\n  .btn-module_base__3I-2K:disabled {\n    cursor: not-allowed;\n    background: #747578;\n    border: 1px solid #696A6E;\n    box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06);\n    border-radius: 4px;\n    color: #9EA0A5; }\n    .btn-module_base__3I-2K:disabled.btn-module_icon__28MgH {\n      opacity: 0.3; }\n    .btn-module_base__3I-2K:disabled:hover {\n      background: #747578;\n      border: 1px solid #696A6E;\n      box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06);\n      border-radius: 4px;\n      color: #9EA0A5; }\n  .btn-module_base__3I-2K.btn-module_clear__11E6w {\n    background: transparent;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    color: #9EA0A5; }\n    .btn-module_base__3I-2K.btn-module_clear__11E6w:hover {\n      color: #6B6C6F; }\n\n/* Necessary if icon is present in <a> element\n// otherwise it's not aligned to the text */\na.btn-module_commonButton__1k_VP * {\n  vertical-align: middle; }\n\na.btn-module_commonButton__1k_VP {\n  text-decoration: none; }\n";
var s$8 = {"base":"btn-module_base__3I-2K","hasIcon":"btn-module_hasIcon__25J49","iconWrapper":"btn-module_iconWrapper__2jtsy","iconRight":"btn-module_iconRight__2-N8s","iconOnly":"btn-module_iconOnly__3falu","isExpanded":"btn-module_isExpanded__2wAIo","content":"btn-module_content__1_sfe","loader":"btn-module_loader__2nWhC","isLoading":"btn-module_isLoading__PoXFm","xs":"btn-module_xs__1EuPS","lg":"btn-module_lg__30wfU","noBorder":"btn-module_noBorder__6Uih6","transparent":"btn-module_transparent__3Tc5A","dark":"btn-module_dark__4z942","success":"btn-module_success__3rnek","error":"btn-module_error__EAivm","primary":"btn-module_primary__3toPZ","icon":"btn-module_icon__28MgH","clear":"btn-module_clear__11E6w","commonButton":"btn-module_commonButton__1k_VP"};
styleInject(css$b);

var css$c = ".loader-dots-module_dotloader__L10wF {\n  display: inline-block;\n  width: 70px;\n  text-align: center; }\n\n.loader-dots-module_dotloader__L10wF > div {\n  width: 7px;\n  height: 7px;\n  background-color: lightgray;\n  border-radius: 100%;\n  vertical-align: middle;\n  display: inline-block;\n  animation: loader-dots-module_bouncedelay__ajSba 1s infinite ease-in-out both; }\n\n.loader-dots-module_dotloader1__1Lvuk {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n  margin-right: 2px; }\n\n.loader-dots-module_dotloader2__2hSTJ {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n  margin-right: 2px; }\n\n.loader-dots-module_dotloader3__2Dnf- {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n  margin-right: 2px; }\n\n@keyframes loader-dots-module_bouncedelay__ajSba {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n";
var s$9 = {"dotloader":"loader-dots-module_dotloader__L10wF","bouncedelay":"loader-dots-module_bouncedelay__ajSba","dotloader1":"loader-dots-module_dotloader1__1Lvuk","dotloader2":"loader-dots-module_dotloader2__2hSTJ","dotloader3":"loader-dots-module_dotloader3__2Dnf-"};
styleInject(css$c);

var LoaderDots = function (_a) {
    var className = _a.className;
    return (React__default.createElement("div", { className: classnames(s$9.dotloader, className, 'btn-loader') },
        React__default.createElement("div", { className: s$9.dotloader1 }),
        React__default.createElement("div", { className: s$9.dotloader2 }),
        React__default.createElement("div", { className: s$9.dotloader3 })));
};
LoaderDots.defaultProps = {
    className: null,
};

var UikButton = (function (props) {
    var _a;
    var primary = props.primary, error = props.error, success = props.success, dark = props.dark, transparent = props.transparent, children = props.children, className = props.className, contentClassName = props.contentClassName, xs = props.xs, lg = props.lg, clear = props.clear, isLoading = props.isLoading, icon = props.icon, iconRight = props.iconRight, iconOnly = props.iconOnly, noBorder = props.noBorder, isExpanded = props.isExpanded, onClick = props.onClick, rest = __rest(props, ["primary", "error", "success", "dark", "transparent", "children", "className", "contentClassName", "xs", "lg", "clear", "isLoading", "icon", "iconRight", "iconOnly", "noBorder", "isExpanded", "onClick"]);
    var classes = classnames(s$8.base, (_a = {},
        _a[s$8.primary] = primary,
        _a[s$8.error] = error,
        _a[s$8.success] = success,
        _a[s$8.dark] = dark,
        _a[s$8.xs] = xs,
        _a[s$8.lg] = lg,
        _a[s$8.clear] = clear,
        _a[s$8.isLoading] = isLoading,
        _a[s$8.hasIcon] = icon,
        _a[s$8.iconRight] = iconRight,
        _a[s$8.iconOnly] = iconOnly,
        _a[s$8.transparent] = transparent,
        _a[s$8.noBorder] = noBorder,
        _a[s$8.isExpanded] = isExpanded,
        _a), className);
    // put props together so we don't have to repeat it
    var btnProps = __assign({ className: classes }, rest);
    return (React__default.createElement("button", __assign({ onClick: function (e) { return onClick && onClick(e); } }, btnProps),
        icon && (React__default.createElement("span", { className: s$8.iconWrapper }, icon)),
        isLoading && React__default.createElement(LoaderDots, { className: s$8.loader }),
        React__default.createElement("span", { className: classnames(s$8.content, contentClassName) }, children)));
});

var css$d = "a.btn-module_base__l1Mi2:hover {\n  text-decoration: none !important; }\n\n.btn-module_base__l1Mi2 {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  height: 38px;\n  padding: 0 18px;\n  transition: all 0.1s ease-in-out 0s;\n  font-size: 0.875rem;\n  font-weight: 400;\n  position: relative;\n  /*Basic Appearence*/\n  background: #FFFFFF;\n  background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);\n  border: 1px solid #D8DCE6;\n  box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.05), inset 0 2px 0 0 rgba(255, 255, 255, 0.05);\n  color: #3E3F42;\n  border-radius: 4px;\n  /*Colors*/ }\n  .btn-module_base__l1Mi2 i {\n    opacity: .8; }\n  .btn-module_base__l1Mi2.btn-module_hasIcon__2LdFP {\n    padding-left: 40px; }\n    .btn-module_base__l1Mi2.btn-module_hasIcon__2LdFP .btn-module_iconWrapper__2mr1X {\n      position: absolute;\n      top: 50%;\n      left: 12px;\n      transform: translateY(-50%);\n      font-size: 18px; }\n  .btn-module_base__l1Mi2.btn-module_iconRight__2S7Rw {\n    padding-right: 40px;\n    padding-left: 18px; }\n    .btn-module_base__l1Mi2.btn-module_iconRight__2S7Rw .btn-module_iconWrapper__2mr1X {\n      left: auto;\n      right: 12px; }\n  .btn-module_base__l1Mi2.btn-module_iconOnly__2LvMu {\n    padding: 0;\n    justify-content: center;\n    flex-basis: 38px;\n    width: 38px;\n    flex-shrink: 0; }\n    .btn-module_base__l1Mi2.btn-module_iconOnly__2LvMu .btn-module_iconWrapper__2mr1X {\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%); }\n  .btn-module_base__l1Mi2.btn-module_isExpanded__3lMkP {\n    width: 100%; }\n    .btn-module_base__l1Mi2.btn-module_isExpanded__3lMkP.btn-module_hasIcon__2LdFP {\n      padding-left: 40px;\n      padding-right: 40px; }\n  .btn-module_base__l1Mi2 .btn-module_content__vBKDL {\n    flex-grow: 1;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .btn-module_base__l1Mi2 > * {\n    transition: .1s all; }\n  .btn-module_base__l1Mi2 > .btn-module_loader__2HjNG {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .btn-module_base__l1Mi2.btn-module_isLoading__WPo9G > * {\n    opacity: 0; }\n  .btn-module_base__l1Mi2.btn-module_isLoading__WPo9G > .btn-module_loader__2HjNG {\n    opacity: 1; }\n  .btn-module_base__l1Mi2.btn-module_xs__2g2rN {\n    height: 28px;\n    padding: 0 15px;\n    font-size: 12px; }\n  .btn-module_base__l1Mi2.btn-module_lg__3ZJNS {\n    height: 48px;\n    padding: 0 40px;\n    font-size: 16px; }\n  .btn-module_base__l1Mi2:not(:disabled) {\n    cursor: pointer; }\n  .btn-module_base__l1Mi2:focus {\n    outline: none; }\n  .btn-module_base__l1Mi2:active {\n    border: 1px solid #eee;\n    box-shadow: none;\n    transform: translateY(0px); }\n  .btn-module_base__l1Mi2:hover {\n    background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);\n    border: 1px solid #CACEDB;\n    box-shadow: 0 1px 2px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.05); }\n  .btn-module_base__l1Mi2:focus {\n    background-image: linear-gradient(0deg, #F6F7F9 0%, #FFFFFF 100%);\n    border: 1px solid #BDC2D1;\n    box-shadow: 0 0 1px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.05); }\n  .btn-module_base__l1Mi2.btn-module_noBorder__3XKd3 {\n    border: none !important;\n    background: white;\n    box-shadow: none; }\n    .btn-module_base__l1Mi2.btn-module_noBorder__3XKd3:hover {\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.13); }\n    .btn-module_base__l1Mi2.btn-module_noBorder__3XKd3:focus {\n      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1); }\n  .btn-module_base__l1Mi2.btn-module_transparent__2is7- {\n    background: transparent;\n    border: 1px solid #E2E5ED;\n    box-shadow: none; }\n    .btn-module_base__l1Mi2.btn-module_transparent__2is7-:hover {\n      border: 1px solid #CACEDB; }\n    .btn-module_base__l1Mi2.btn-module_transparent__2is7-:focus {\n      border: 1px solid #BDC2D1; }\n  .btn-module_base__l1Mi2.btn-module_dark__3UHGW {\n    color: white;\n    background: rgba(62, 63, 66, 0.6);\n    border: 1px solid rgba(62, 63, 66, 0.8);\n    box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n    .btn-module_base__l1Mi2.btn-module_dark__3UHGW:hover {\n      background: rgba(62, 63, 66, 0.7);\n      border: 1px solid rgba(62, 63, 66, 0.9);\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__l1Mi2.btn-module_dark__3UHGW:hover.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18); }\n    .btn-module_base__l1Mi2.btn-module_dark__3UHGW:focus {\n      background: rgba(62, 63, 66, 0.75);\n      border: 1px solid rgba(62, 63, 66, 0.9);\n      border: 1px solid #1A8628;\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__l1Mi2.btn-module_dark__3UHGW:focus.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1); }\n  .btn-module_base__l1Mi2.btn-module_success__eMpcv {\n    color: white;\n    background: #38B249;\n    background-image: linear-gradient(0deg, #34AA44 0%, #38B249 100%);\n    border: 1px solid #2D9C3C;\n    box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n    .btn-module_base__l1Mi2.btn-module_success__eMpcv:hover {\n      background-image: linear-gradient(0deg, #2CA13C 2%, #2FAE40 100%);\n      border: 1px solid #259835;\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__l1Mi2.btn-module_success__eMpcv:hover.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.18); }\n    .btn-module_base__l1Mi2.btn-module_success__eMpcv:focus {\n      background-image: linear-gradient(0deg, #259835 0%, #27A337 100%);\n      border: 1px solid #1A8628;\n      box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__l1Mi2.btn-module_success__eMpcv:focus.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(19, 31, 21, 0.1); }\n  .btn-module_base__l1Mi2.btn-module_error__1hB6i {\n    color: white;\n    background: #E6492D;\n    background-image: linear-gradient(-180deg, #E73C1E 0%, #CF3014 100%);\n    border: 1px solid #BA0B15;\n    box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.08); }\n    .btn-module_base__l1Mi2.btn-module_error__1hB6i:hover {\n      background-image: linear-gradient(-180deg, #DF3517 0%, #C42B10 100%);\n      border: 1px solid #B00B14;\n      box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.08); }\n      .btn-module_base__l1Mi2.btn-module_error__1hB6i:hover.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.18); }\n    .btn-module_base__l1Mi2.btn-module_error__1hB6i:focus {\n      background-image: linear-gradient(-179deg, #C22B10 0%, #B8280E 100%);\n      border: 1px solid #A00A13;\n      box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.08);\n      border-radius: 4px; }\n      .btn-module_base__l1Mi2.btn-module_error__1hB6i:focus.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(43, 26, 24, 0.1); }\n  .btn-module_base__l1Mi2.btn-module_primary__2Kgww {\n    color: white;\n    background: #1665D8;\n    background-image: linear-gradient(-1deg, #1665D8 2%, #1F6FE5 98%);\n    background-image: linear-gradient(0deg, #1665D8 0%, #1F6FE5 100%);\n    border: 1px solid #1461D2;\n    box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n    .btn-module_base__l1Mi2.btn-module_primary__2Kgww:hover {\n      background-image: linear-gradient(0deg, #115ECF 0%, #1767DB 100%);\n      border: 1px solid #0E57C2;\n      box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.18), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__l1Mi2.btn-module_primary__2Kgww:hover.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.18); }\n    .btn-module_base__l1Mi2.btn-module_primary__2Kgww:focus {\n      background-image: linear-gradient(0deg, #0E55BD 0%, #0F5BCA 100%);\n      border: 1px solid #0B4AA5;\n      box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.1), inset 0 2px 0 0 rgba(255, 255, 255, 0.06); }\n      .btn-module_base__l1Mi2.btn-module_primary__2Kgww:focus.btn-module_noBorder__3XKd3 {\n        box-shadow: 0 1px 1px 0 rgba(22, 29, 37, 0.1); }\n  .btn-module_base__l1Mi2:disabled {\n    cursor: not-allowed;\n    background: #747578;\n    border: 1px solid #696A6E;\n    box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06);\n    border-radius: 4px;\n    color: #9EA0A5; }\n    .btn-module_base__l1Mi2:disabled.btn-module_icon__3gqgw {\n      opacity: 0.3; }\n    .btn-module_base__l1Mi2:disabled:hover {\n      background: #747578;\n      border: 1px solid #696A6E;\n      box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06);\n      border-radius: 4px;\n      color: #9EA0A5; }\n  .btn-module_base__l1Mi2.btn-module_clear__2-VnA {\n    background: transparent;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    color: #9EA0A5; }\n    .btn-module_base__l1Mi2.btn-module_clear__2-VnA:hover {\n      color: #6B6C6F; }\n\n/* Necessary if icon is present in <a> element\n// otherwise it's not aligned to the text */\na.btn-module_commonButton__38MUY * {\n  vertical-align: middle; }\n\na.btn-module_commonButton__38MUY {\n  text-decoration: none; }\n";
var s$a = {"base":"btn-module_base__l1Mi2","hasIcon":"btn-module_hasIcon__2LdFP","iconWrapper":"btn-module_iconWrapper__2mr1X","iconRight":"btn-module_iconRight__2S7Rw","iconOnly":"btn-module_iconOnly__2LvMu","isExpanded":"btn-module_isExpanded__3lMkP","content":"btn-module_content__vBKDL","loader":"btn-module_loader__2HjNG","isLoading":"btn-module_isLoading__WPo9G","xs":"btn-module_xs__2g2rN","lg":"btn-module_lg__3ZJNS","noBorder":"btn-module_noBorder__3XKd3","transparent":"btn-module_transparent__2is7-","dark":"btn-module_dark__3UHGW","success":"btn-module_success__eMpcv","error":"btn-module_error__1hB6i","primary":"btn-module_primary__2Kgww","icon":"btn-module_icon__3gqgw","clear":"btn-module_clear__2-VnA","commonButton":"btn-module_commonButton__38MUY"};
styleInject(css$d);

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a;
        var _b = this.props, primary = _b.primary, error = _b.error, success = _b.success, dark = _b.dark, transparent = _b.transparent, children = _b.children, className = _b.className, contentClassName = _b.contentClassName, xs = _b.xs, lg = _b.lg, clear = _b.clear, isLoading = _b.isLoading, icon = _b.icon, iconRight = _b.iconRight, iconOnly = _b.iconOnly, noBorder = _b.noBorder, isExpanded = _b.isExpanded, onClick = _b.onClick, internalInputRef = _b.internalInputRef, rest = __rest(_b, ["primary", "error", "success", "dark", "transparent", "children", "className", "contentClassName", "xs", "lg", "clear", "isLoading", "icon", "iconRight", "iconOnly", "noBorder", "isExpanded", "onClick", "internalInputRef"]);
        var classes = classnames(s$a.base, (_a = {},
            _a[s$a.primary] = primary,
            _a[s$a.error] = error,
            _a[s$a.success] = success,
            _a[s$a.dark] = dark,
            _a[s$a.xs] = xs,
            _a[s$a.lg] = lg,
            _a[s$a.clear] = clear,
            _a[s$a.isLoading] = isLoading,
            _a[s$a.hasIcon] = icon,
            _a[s$a.iconRight] = iconRight,
            _a[s$a.iconOnly] = iconOnly,
            _a[s$a.transparent] = transparent,
            _a[s$a.noBorder] = noBorder,
            _a[s$a.isExpanded] = isExpanded,
            _a), className);
        // put props together so we don't have to repeat it
        var btnProps = __assign({ className: classes }, rest);
        return (React__default.createElement("button", __assign({ onClick: function (e) { return onClick && onClick(e); } }, btnProps),
            icon && (React__default.createElement("span", { className: s$a.iconWrapper }, icon)),
            isLoading && React__default.createElement(LoaderDots, { className: s$a.loader }),
            React__default.createElement("span", { className: classnames(s$a.content, contentClassName) }, children),
            !this.props.disabled && (React__default.createElement("input", { style: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                }, type: "file", accept: "image/*", capture: "filesystem", ref: internalInputRef, onChange: function (e) { return e && onClick && onClick(e); } }))));
    };
    return Button;
}(React__default.PureComponent));

var css$e = ".avatar-module_info__1Tqpl {\n  margin-left: 12px;\n  flex-grow: 1; }\n  .avatar-module_info__1Tqpl > * {\n    display: block; }\n\n.avatar-module_wrapper__3-3Un {\n  display: flex;\n  align-items: center;\n  max-width: 100%; }\n  .avatar-module_wrapper__3-3Un > * {\n    min-width: 1px; }\n  .avatar-module_wrapper__3-3Un .avatar-module_name__qZABP {\n    /* Author: */\n    font-size: 0.875rem;\n    color: #3E3F42;\n    line-height: 1.375rem;\n    overflow: hidden;\n    white-space: nowrap;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n    .avatar-module_wrapper__3-3Un .avatar-module_name__qZABP i {\n      font-style: normal;\n      color: #9EA0A5; }\n  .avatar-module_wrapper__3-3Un.avatar-module_highlighted__TXbIR .avatar-module_name__qZABP {\n    font-weight: 500; }\n  .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm {\n    position: relative;\n    height: 38px;\n    width: 38px;\n    flex-shrink: 0; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarAction__3gy3x {\n      position: absolute;\n      bottom: 0;\n      right: 0; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      color: #9EA0A5;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-weight: 500;\n      line-height: 1.5rem;\n      text-transform: uppercase;\n      background-color: transparent;\n      border: 1px solid #EAEDF3; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.green {\n        color: white;\n        background-color: #38B249;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.blue {\n        color: white;\n        background-color: #1665D8;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.orange {\n        color: white;\n        background-color: #F6AB2F;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.violet {\n        color: white;\n        background-color: #6977FF;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.yellow {\n        color: white;\n        background-color: #FACF55;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.red {\n        color: white;\n        background-color: #E6492D;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.lightblue {\n        background-color: #98CAEC;\n        background-image: linear-gradient(-45deg, #98CAEC 0%, #44ADE5 100%);\n        border-color: transparent;\n        color: white; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatar__1hSKR {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      display: block; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatar__1hSKR + * {\n        margin-left: 0.75rem; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      overflow: hidden;\n      display: flex; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk > .avatar-module_avatar__1hSKR {\n        border-radius: 0;\n        margin: 0 !important; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s2__1-HSv > .avatar-module_avatar__1hSKR {\n        transform: translateX(-50%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(1) {\n        transform: translateX(-50%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(2), .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(3) {\n        height: 50%;\n        width: 50%; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(2) {\n        transform: translateX(-100%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(3) {\n        transform: translateX(-200%) translateY(100%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s4__5ifeg {\n        flex-wrap: wrap; }\n        .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s4__5ifeg > .avatar-module_avatar__1hSKR {\n          height: 50%;\n          width: 50%; }\n  .avatar-module_wrapper__3-3Un .avatar-module_textTop__1Lfc7 {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1.125rem;\n    overflow: hidden;\n    white-space: nowrap; }\n  .avatar-module_wrapper__3-3Un .avatar-module_textBottom__1ddZV {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1.125rem;\n    margin-top: 2px;\n    overflow: hidden;\n    white-space: nowrap; }\n  .avatar-module_wrapper__3-3Un .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un .avatar-module_textBottom__1ddZV,\n  .avatar-module_wrapper__3-3Un .avatar-module_name__qZABP {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .avatar-module_wrapper__3-3Un.avatar-module_small__3KOX_ .avatar-module_avatarWrapper__pxTgm {\n    font-size: 12px;\n    height: 28px;\n    width: 28px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_avatarWrapper__pxTgm, .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_avatarWrapper__pxTgm, .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_avatarWrapper__pxTgm, .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_avatarWrapper__pxTgm {\n    font-size: 18px;\n    height: 60px;\n    width: 60px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_textBottom__1ddZV, .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textBottom__1ddZV, .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_textBottom__1ddZV, .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_textBottom__1ddZV {\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    color: #6B6C6F; }\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_name__qZABP, .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_name__qZABP, .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_name__qZABP, .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_name__qZABP {\n    font-size: 1rem;\n    line-height: 1.5rem; }\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textBottom__1ddZV {\n    color: #6B6C6F; }\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_avatarWrapper__pxTgm {\n    font-size: 26px;\n    height: 80px;\n    width: 80px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_avatarWrapper__pxTgm {\n    font-size: 36px;\n    height: 100px;\n    width: 100px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_name__qZABP {\n    font-size: 1.25rem;\n    line-height: 1.5; }\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_avatarWrapper__pxTgm {\n    font-size: 36px;\n    height: 120px;\n    width: 120px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_info__1Tqpl {\n    margin-left: 24px; }\n\n.avatar-module_statusWrapper__3c5BJ {\n  margin-left: 10px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: #9EA0A5;\n  font-size: .75rem; }\n  .avatar-module_statusWrapper__3c5BJ .avatar-module_statusOnline__2n4aR {\n    background: #38B249;\n    height: 6px;\n    width: 6px;\n    border-radius: 50%; }\n";
var s$b = {"info":"avatar-module_info__1Tqpl","wrapper":"avatar-module_wrapper__3-3Un","name":"avatar-module_name__qZABP","highlighted":"avatar-module_highlighted__TXbIR","avatarWrapper":"avatar-module_avatarWrapper__pxTgm","avatarAction":"avatar-module_avatarAction__3gy3x","avatarPlaceholder":"avatar-module_avatarPlaceholder__2o6mA","avatar":"avatar-module_avatar__1hSKR","avatarMultiWrapper":"avatar-module_avatarMultiWrapper__3oItk","s2":"avatar-module_s2__1-HSv","s3":"avatar-module_s3__16Ow3","s4":"avatar-module_s4__5ifeg","textTop":"avatar-module_textTop__1Lfc7","textBottom":"avatar-module_textBottom__1ddZV","small":"avatar-module_small__3KOX_","large":"avatar-module_large__MFQNk","larger":"avatar-module_larger__351iE","jumbo":"avatar-module_jumbo__1xOrp","extraLarge":"avatar-module_extraLarge__17LYc","statusWrapper":"avatar-module_statusWrapper__3c5BJ","statusOnline":"avatar-module_statusOnline__2n4aR"};
styleInject(css$e);

var UikAvatarStatus = function (_a) {
    var status = _a.status;
    return (React__default.createElement("div", { className: s$b.statusWrapper }, status === 'uik_online' ? (React__default.createElement("div", { className: s$b.statusOnline })) : (React__default.createElement("span", null, status))));
};

var UikAvatarImage = function (_a) {
    var _b;
    var imgUrl = _a.imgUrl, name = _a.name;
    return (Array.isArray(imgUrl) ? (
    /* GROUPS, rendering multiple images */
    React__default.createElement("div", { className: classnames(s$b.avatarMultiWrapper, (_b = {},
            _b[s$b.s2] = imgUrl.length === 2,
            _b[s$b.s3] = imgUrl.length === 3,
            _b[s$b.s4] = imgUrl.length >= 4,
            _b)) }, imgUrl.slice(0, 4).map(function (url) { return (React__default.createElement("img", { key: url, alt: typeof name === 'string' ? name : '', className: s$b.avatar, src: url })); }))) : (
    /* Single */
    React__default.createElement("img", { alt: typeof name === 'string' ? name : '', className: s$b.avatar, src: imgUrl })));
};
UikAvatarImage.defaultProps = {
    name: null,
};

var UikAvatar = function (_a) {
    var _b;
    var name = _a.name, imgUrl = _a.imgUrl, avatarPlaceholder = _a.avatarPlaceholder, textTop = _a.textTop, className = _a.className, highlighted = _a.highlighted, actionIcon = _a.actionIcon, status = _a.status, size = _a.size, textBottom = _a.textBottom, rest = __rest(_a, ["name", "imgUrl", "avatarPlaceholder", "textTop", "className", "highlighted", "actionIcon", "status", "size", "textBottom"]);
    return (React__default.createElement("div", __assign({ className: classnames(s$b.wrapper, className, (_b = {},
            _b[s$b.highlighted] = highlighted,
            _b)) }, rest),
        React__default.createElement("div", { className: classnames(s$b.avatarWrapper) },
            imgUrl ? (React__default.createElement(UikAvatarImage, { className: s$b.avatar, imgUrl: imgUrl })) : (React__default.createElement("div", { className: classnames(s$b.avatarPlaceholder) }, avatarPlaceholder && avatarPlaceholder.content)),
            actionIcon && (React__default.createElement("div", { className: s$b.avatarAction }, actionIcon))),
        (name || textTop || textBottom) && (React__default.createElement("div", { className: s$b.info },
            textTop && (React__default.createElement("div", { className: s$b.textTop }, textTop)),
            name && (React__default.createElement("div", { className: s$b.name }, name)),
            textBottom && (React__default.createElement("div", { className: s$b.textBottom }, textBottom)))),
        status && (React__default.createElement(UikAvatarStatus, { status: status }))));
};
UikAvatar.defaultProps = {
    className: null,
    name: null,
    textTop: null,
    actionIcon: null,
    highlighted: false,
    avatarPlaceholder: {},
    status: null,
    imgUrl: null,
    size: null,
    textBottom: null,
};

/*
*
* handles outside click events
* e.g. we create custom Dropdown for select
* we wrap the list with this component and add onOutsideClick
* passing a close function
*
*/
var UikOutsideClickHandler = /** @class */ (function (_super) {
    __extends(UikOutsideClickHandler, _super);
    function UikOutsideClickHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        _this.handleOuterActions = function (e) {
            var onOutsideClick = _this.props.onOutsideClick;
            if (typeof onOutsideClick === 'function') {
                onOutsideClick(e);
            }
        };
        _this.handleOutsideClick = function (e) {
            var onOutsideClick = _this.props.onOutsideClick;
            if (typeof onOutsideClick !== 'function') {
                return;
            }
            var isDescendantOfRoot = !!e.target && _this.ref.current;
            if (!isDescendantOfRoot) {
                onOutsideClick(e);
            }
        };
        _this.bindListeners = function () {
            var _a = _this.props, onOutsideScroll = _a.onOutsideScroll, onWindowResize = _a.onWindowResize;
            if (typeof document !== 'undefined' && document.addEventListener) {
                // `useCapture` flag is set to true so
                // that a `stopPropagation` in the children will
                // not prevent all outside click handlers from firing
                document.addEventListener('click', _this.handleOutsideClick, true);
                if (onOutsideScroll) {
                    window.addEventListener('scroll', _this.handleOuterActions, true);
                }
                if (onWindowResize) {
                    window.addEventListener('resize', _this.handleOuterActions, true);
                }
            }
            else if (typeof document !== 'undefined') {
                document.addEventListener('onclick', _this.handleOutsideClick);
                if (onOutsideScroll) {
                    document.addEventListener('onclick', _this.handleOutsideClick);
                }
            }
        };
        _this.removeListeners = function () {
            var _a = _this.props, onOutsideScroll = _a.onOutsideScroll, onWindowResize = _a.onWindowResize;
            if (typeof document !== 'undefined' && document.removeEventListener) {
                document.removeEventListener('click', _this.handleOutsideClick);
                if (onOutsideScroll) {
                    window.removeEventListener('scroll', _this.handleOuterActions);
                }
                if (onWindowResize) {
                    window.removeEventListener('resize', _this.handleOuterActions);
                }
            }
            else if (typeof document !== 'undefined') {
                document.removeEventListener('onclick', _this.handleOutsideClick);
                if (onOutsideScroll) {
                    document.removeEventListener('onclick', _this.handleOutsideClick);
                }
            }
        };
        return _this;
    }
    UikOutsideClickHandler.prototype.componentDidMount = function () {
        var onOutsideClick = this.props.onOutsideClick;
        if (onOutsideClick) {
            this.bindListeners();
        }
    };
    UikOutsideClickHandler.prototype.componentDidUpdate = function () {
        var onOutsideClick = this.props.onOutsideClick;
        if (typeof onOutsideClick === 'function') {
            this.bindListeners();
        }
        else {
            this.removeListeners();
        }
    };
    UikOutsideClickHandler.prototype.componentWillUnmount = function () {
        this.removeListeners();
    };
    UikOutsideClickHandler.prototype.render = function () {
        var _a = this.props, children = _a.children, onOutsideClick = _a.onOutsideClick, onOutsideScroll = _a.onOutsideScroll, onWindowResize = _a.onWindowResize, rest = __rest(_a, ["children", "onOutsideClick", "onOutsideScroll", "onWindowResize"]);
        return (React.createElement("div", __assign({ ref: this.ref }, rest), children));
    };
    UikOutsideClickHandler.defaultProps = {
        onOutsideScroll: true,
        onWindowResize: true,
    };
    return UikOutsideClickHandler;
}(React.Component));

var css$f = ".menuDrop-module_defaultDisplayComponent__1GfY8 {\n  width: 36px;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  border-color: #D8DCE6; }\n\n.menuDrop-module_btnContent__2uHaT {\n  justify-content: center; }\n\n.menuDrop-module_list__2bn9C {\n  position: absolute;\n  z-index: 50;\n  background: white;\n  border: 1px solid #D8DCE6;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  list-style: none;\n  top: 100%;\n  margin-top: 4px;\n  right: 0;\n  min-width: 140px; }\n  .menuDrop-module_list__2bn9C > *:first-child {\n    border-top-left-radius: 4px !important;\n    border-top-right-radius: 4px !important; }\n  .menuDrop-module_list__2bn9C > *:last-child {\n    border-bottom-left-radius: 4px !important;\n    border-bottom-right-radius: 4px !important; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_bottomLeft__3vHJn {\n    left: 0;\n    right: auto; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_bottomRight__3_dIF {\n    left: auto;\n    right: 0; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_topLeft__TLFxT, .menuDrop-module_list__2bn9C.menuDrop-module_topRight__2ZMlq {\n    left: 0;\n    right: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: 4px; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_topRight__2ZMlq {\n    left: auto;\n    right: 0; }\n";
var cls$2 = {"defaultDisplayComponent":"menuDrop-module_defaultDisplayComponent__1GfY8","btnContent":"menuDrop-module_btnContent__2uHaT","list":"menuDrop-module_list__2bn9C","bottomLeft":"menuDrop-module_bottomLeft__3vHJn","bottomRight":"menuDrop-module_bottomRight__3_dIF","topLeft":"menuDrop-module_topLeft__TLFxT","topRight":"menuDrop-module_topRight__2ZMlq"};
styleInject(css$f);

var DefaultDisplayComponent = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    return (React__default.createElement(UikButton, __assign({ className: classnames(cls$2.defaultDisplayComponent, className), contentClassName: cls$2.btnContent }, rest), "\u00B7\u00B7\u00B7"));
};

var UikDropdown = /** @class */ (function (_super) {
    __extends(UikDropdown, _super);
    function UikDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            focused: false,
        };
        _this.handleToggleFocus = function () {
            var focused = _this.state.focused;
            _this.props.displayComponentProps.onClick && _this.props.displayComponentProps.onClick();
            _this.setState({ focused: !focused });
        };
        return _this;
    }
    UikDropdown.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, children = _b.children, className = _b.className, position = _b.position, _c = _b.displayComponentProps, onClick = _c.onClick, otherDisplayComponentProps = __rest(_c, ["onClick"]), _d = _b.listProps, listClassName = _d.listClassName, otherListProps = __rest(_d, ["listClassName"]), rest = __rest(_b, ["children", "className", "position", "displayComponentProps", "listProps"]);
        var focused = this.state.focused;
        return (React__default.createElement(UikOutsideClickHandler, __assign({ className: className, onOutsideClick: function (e) { return focused ? _this.handleToggleFocus : null; }, onOutsideScroll: false, style: { position: 'relative', display: 'inline-block' } }, rest),
            React__default.createElement(DefaultDisplayComponent, __assign({ onClick: this.handleToggleFocus }, otherDisplayComponentProps)),
            focused && (React__default.createElement("div", __assign({ className: classnames(cls$2.list, listClassName, (_a = {},
                    _a[cls$2[position]] = position,
                    _a)) }, otherListProps), children))));
    };
    UikDropdown.defaultProps = {
        position: 'bottomLeft',
        displayComponentProps: { onClick: undefined },
        listProps: {},
    };
    return UikDropdown;
}(React__default.PureComponent));

var css$g = ".select-module_wrapper__2F4Go {\n  position: relative;\n  font-size: 0.875rem;\n  display: inline-block; }\n\n.select-module_valueRendered__1quzh {\n  width: 100%;\n  text-align: left;\n  position: relative;\n  background: #FFFFFF;\n  border: 1px solid #D8DCE6;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n  overflow: hidden; }\n\n.select-module_label__2uOO1 {\n  position: absolute;\n  top: -18px;\n  font-size: 1rem;\n  left: 14px;\n  pointer-events: none; }\n\n.select-module_valueRenderedWrapper__EihUn {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: space-between;\n  width: 100%; }\n\n.select-module_valueRenderedWrapper__EihUn > .select-module_valueWrapper__1UaJ4 {\n  flex-grow: 1;\n  max-width: 98%;\n  min-width: 1px;\n  overflow: hidden; }\n\n.select-module_arrowWrapper__3TU82 {\n  flex-grow: 0;\n  transition: 0.2s color;\n  position: relative;\n  width: 1px; }\n  .select-module_arrowWrapper__3TU82:before, .select-module_arrowWrapper__3TU82:after {\n    display: block;\n    position: absolute;\n    content: '';\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-bottom: 3px solid #9EA0A5; }\n  .select-module_arrowWrapper__3TU82:after {\n    top: -4px; }\n  .select-module_arrowWrapper__3TU82:before {\n    top: 2px;\n    transform: rotate(180deg); }\n\n.select-module_valueWrapper__1UaJ4 {\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .select-module_valueWrapper__1UaJ4.select-module_placeholderEmpty__3HKqv {\n    color: #9EA0A5; }\n\n.select-module_optionListWrapper__1EGkJ {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #D8DCE6;\n  background: white;\n  border-radius: 4px;\n  position: absolute !important;\n  z-index: 1000;\n  top: 100%;\n  right: 0;\n  transform: translateY(6px);\n  max-height: 306px;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  min-width: 140px; }\n  .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb {\n    width: 100%;\n    min-height: 1px;\n    max-height: 235px;\n    position: relative;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch; }\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb > * {\n      width: 100%; }\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS,\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus {\n      width: 100%;\n      outline: none;\n      cursor: pointer;\n      width: 100%;\n      background: transparent;\n      border: none;\n      text-align: left;\n      border-radius: 0;\n      min-height: 38px; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_optionContent__3QYJy,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_optionContent__3QYJy {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center; }\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_optionContent__3QYJy > *,\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_optionContent__3QYJy > * {\n          min-width: 1px;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_optionContent__3QYJy > *:first-child,\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_optionContent__3QYJy > *:first-child {\n          flex-grow: 1;\n          flex-shrink: 1; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_check__BYMTm,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_check__BYMTm {\n        color: #38B249;\n        margin-left: 12px;\n        flex-shrink: 0;\n        position: relative;\n        width: 5px;\n        height: 5px;\n        background: #38B249;\n        border-radius: 50%; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:hover,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus:hover {\n        border: none !important; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:not(:last-child), .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:not(:last-child):hover,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus:not(:last-child),\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus:not(:last-child):hover {\n        border-bottom: 1px solid #EAEDF3 !important; }\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus {\n      color: #3E3F42; }\n\n.select-module_optionListWrapper__1EGkJ > * {\n  min-height: 1px; }\n\n.select-module_bottomLeft__dLeT6 {\n  left: 0;\n  right: auto; }\n\n.select-module_topLeft__VCbj3,\n.select-module_topRight__PFBsU {\n  left: 0;\n  right: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 4px; }\n\n.select-module_topRight__PFBsU {\n  left: auto;\n  right: 0; }\n\n.select-module_bottomRight__VE4SX {\n  left: auto;\n  right: 0; }\n\n.select-module_placeholderAndOther__3pYCE {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start; }\n  .select-module_placeholderAndOther__3pYCE > *:first-child {\n    min-width: 5px;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .select-module_placeholderAndOther__3pYCE .select-module_plusValue__1zh_x {\n    display: inline-block;\n    background: #D8DCE6;\n    border: 1px solid #EAEDF3;\n    height: 20px;\n    border-radius: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px;\n    min-width: 30px;\n    margin-left: 10px;\n    font-size: 0.7rem; }\n";
var cls$3 = {"wrapper":"select-module_wrapper__2F4Go","valueRendered":"select-module_valueRendered__1quzh","label":"select-module_label__2uOO1","valueRenderedWrapper":"select-module_valueRenderedWrapper__EihUn","valueWrapper":"select-module_valueWrapper__1UaJ4","arrowWrapper":"select-module_arrowWrapper__3TU82","placeholderEmpty":"select-module_placeholderEmpty__3HKqv","optionListWrapper":"select-module_optionListWrapper__1EGkJ","optionList":"select-module_optionList__2t9vb","option":"select-module_option__2bqOS","optionContent":"select-module_optionContent__3QYJy","check":"select-module_check__BYMTm","bottomLeft":"select-module_bottomLeft__dLeT6","topLeft":"select-module_topLeft__VCbj3","topRight":"select-module_topRight__PFBsU","bottomRight":"select-module_bottomRight__VE4SX","placeholderAndOther":"select-module_placeholderAndOther__3pYCE","plusValue":"select-module_plusValue__1zh_x"};
styleInject(css$g);

var OptionList = /** @class */ (function (_super) {
    __extends(OptionList, _super);
    function OptionList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOptionWrapper = function (_a) {
            var label = _a.label;
            return (React__default.createElement("div", { className: cls$3.label }, label));
        };
        return _this;
    }
    OptionList.prototype.renderOptions = function () {
        var _this = this;
        var _a = this.props, options = _a.options, optionClick = _a.optionClick, selected = _a.selected, excluded = _a.excluded, _b = _a.optionProps, optionClassName = _b.className, optionPropsRest = __rest(_b, ["className"]);
        var filteredOptions = options.filter(function (option) {
            if (excluded.indexOf(option.value) > -1) {
                return false;
            }
            return true;
        });
        return filteredOptions.map(function (i) {
            var indexIsSelected = selected.find(function (k) { return i.value === k.value; });
            var onClick = function (key) { return function () {
                optionClick(key);
            }; };
            return (React__default.createElement(UikButton, __assign({ key: i.value.toString(), className: classnames(cls$3.option, optionClassName), onClick: onClick(i) }, optionPropsRest),
                React__default.createElement("div", { className: cls$3.optionContent },
                    _this.renderOptionWrapper(i),
                    indexIsSelected ? (React__default.createElement("div", { className: cls$3.check })) : null)));
        });
    };
    OptionList.prototype.render = function () {
        var _a;
        var position = this.props.position;
        return (React__default.createElement("div", { className: classnames(cls$3.optionListWrapper, (_a = {},
                _a[cls$3[position]] = position,
                _a)) },
            React__default.createElement("div", { className: cls$3.optionList }, this.renderOptions())));
    };
    OptionList.defaultProps = {
        excluded: [],
        position: 'bottomLeft',
        optionProps: {},
    };
    return OptionList;
}(React__default.Component));

var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.callCallbackIfAvailable = false;
        _this.onAllClick = function (clearOnly) {
            if (clearOnly === void 0) { clearOnly = false; }
            var selected = _this.state.selected;
            var options = _this.props.options;
            if (selected.length >= options.length || clearOnly) {
                _this.callCallbackIfAvailable = true;
                _this.setState({
                    selected: [],
                });
            }
            else {
                _this.onChange(options);
                _this.setState({ selected: options.map(function (i) { return i; }) }); // depp copy
            }
        };
        _this.onChange = function (options) {
            _this.callCallbackIfAvailable = true;
        };
        _this.onToggleFocus = function () {
            var focused = _this.state.focused;
            _this.setState({ focused: !focused });
        };
        _this.onClickUnfocus = function () {
            _this.setState({ focused: false });
        };
        _this.getValue = function () {
            var _a = _this.props, disabled = _a.disabled, value = _a.value;
            var stateSelected = _this.state.selected;
            var selected = value || stateSelected;
            if (disabled) {
                return [];
            }
            return selected;
        };
        _this.setValue = function (value) {
            var selected = [];
            var options = _this.props.options;
            var values = [value];
            if (values.length > 0) {
                options.forEach(function (item) {
                    if (values.indexOf(item.value) !== -1) {
                        selected.push(item);
                    }
                });
            }
            _this.onChange(selected);
            _this.setState({ selected: selected });
        };
        _this.optionClick = function (option) {
            var multi = _this.props.multi;
            // single item
            if (!multi) {
                _this.setState({
                    selected: [
                        option,
                    ],
                    focused: false,
                });
                _this.onChange([
                    option,
                ]);
                return;
            }
            // multiple allowed
            var selected = _this.state.selected;
            var index = selected.map(function (item) { return item.value; }).indexOf(option.value);
            if (index !== -1) {
                selected.splice(index, 1);
            }
            else {
                selected.push(option);
            }
            _this.onChange(selected);
            _this.setState({ selected: selected });
        };
        var defaultValue = Array.isArray(props.defaultValue)
            ? props.defaultValue
            : [
                props.defaultValue,
            ];
        var selected = [];
        props.options.forEach(function (item) {
            if (defaultValue.indexOf(item.value) !== -1) {
                selected.push(item);
            }
        });
        _this.state = {
            selected: selected,
            focused: false,
        };
        return _this;
    }
    Select.prototype.componentDidUpdate = function () {
        var _a = this.props, onChange = _a.onChange, multi = _a.multi;
        if (this.callCallbackIfAvailable && onChange) {
            this.callCallbackIfAvailable = false;
            // check if i should call onChange
            var selected = this.state.selected;
            if (multi) {
                onChange(selected);
            }
            else {
                onChange([selected[0]]);
            }
        }
    };
    Select.prototype.renderHiddenInputs = function () {
        var _a = this.props, name = _a.name, multi = _a.multi, disabled = _a.disabled, value = _a.value;
        // do not render hidden inputs if no name
        if (!name) {
            return null;
        }
        var stateSelected = this.state.selected;
        var selected = value || stateSelected;
        if (disabled) {
            return null;
        }
        var inputName = multi ? name + "[]" : name;
        // render selected
        return selected && selected.length > 0 ? (selected.map(function (item) { return (React__default.createElement("input", { key: item.value.toString(), name: inputName, type: "hidden", value: item.value.toString() })); })) : (
        // or render one empty
        React__default.createElement("input", { name: name, type: "hidden" }));
    };
    Select.prototype.renderValue = function () {
        var _a = this.props, disabled = _a.disabled, options = _a.options, placeholder = _a.placeholder;
        var selected = this.props.value || this.state.selected; // eslint-disable-line
        var firstRender = selected[0];
        if (typeof firstRender !== 'undefined') {
            if (!firstRender.label) {
                var full = options.find(function (item) { return firstRender.value === item.value; });
                if (full) {
                    firstRender.label = full.label;
                }
            }
        }
        if (options.length < 1) {
            return (React__default.createElement("span", { className: cls$3.valueWrapper }, "No options available"));
        }
        if (disabled || selected.length < 1) {
            return (React__default.createElement("span", { className: classnames(cls$3.valueWrapper, cls$3.placeholderEmpty) }, placeholder));
        }
        if (selected.length === 1) {
            return (React__default.createElement("div", { className: cls$3.valueWrapper }, firstRender.label));
        }
        return (React__default.createElement("div", { className: cls$3.placeholderAndOther },
            React__default.createElement("div", null, firstRender.label),
            React__default.createElement("div", { className: cls$3.plusValue },
                "+",
                selected.length - 1)));
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, value = _a.value, className = _a.className, excluded = _a.excluded, disabled = _a.disabled, position = _a.position, activeValueProps = _a.activeValueProps, optionProps = _a.optionProps, label = _a.label;
        var _b = this.state, selected = _b.selected, focused = _b.focused;
        var activeValueClassName = activeValueProps.className, activeValuePropsRest = __rest(activeValueProps, ["className"]);
        return (React__default.createElement(UikOutsideClickHandler, { className: classnames(cls$3.wrapper, className), onOutsideClick: function () { return focused ? _this.onClickUnfocus : null; }, onOutsideScroll: false },
            label ? React__default.createElement(UikContentTitle, null, label) : null,
            React__default.createElement(UikButton, __assign({ className: classnames(cls$3.valueRendered, activeValueClassName), disabled: disabled || options.length < 1, onClick: function () { return _this.onToggleFocus(); } }, activeValuePropsRest),
                React__default.createElement("div", { className: cls$3.valueRenderedWrapper },
                    this.renderValue(),
                    React__default.createElement("div", { className: cls$3.arrowWrapper }))),
            focused && !disabled && (React__default.createElement(OptionList, { excluded: excluded, onAllClick: this.onAllClick, optionClick: this.optionClick, optionProps: optionProps, options: options, position: position, selected: value || selected })),
            this.renderHiddenInputs()));
    };
    Select.defaultProps = {
        onChange: function (selected) { },
        multi: false,
        className: '',
        disabled: false,
        defaultValue: [],
        excluded: [],
        multiLimit: 0,
        value: null,
        placeholder: null,
        name: null,
        position: 'bottomLeft',
        activeValueProps: {},
        optionProps: {},
        label: null,
    };
    return Select;
}(React__default.Component));

var css$h = ".container-h-module_wrapper__hTWD3 {\n  flex-grow: 1;\n  height: 100%;\n  display: flex; }\n  .container-h-module_wrapper__hTWD3 > * {\n    min-width: 1px; }\n";
var cls$4 = {"wrapper":"container-h-module_wrapper__hTWD3"};
styleInject(css$h);

var UikContainerHorizontal = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$4.wrapper, className) }, rest), children));
};
UikContainerHorizontal.defaultProps = {
    className: null,
    children: null,
};

var css$i = ".container-v-module_container__32EQs {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex-grow: 1; }\n  .container-v-module_container__32EQs > * {\n    min-height: 1px; }\n";
var cls$5 = {"container":"container-v-module_container__32EQs"};
styleInject(css$i);

var UikContainerVertical = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$5.container, className) }, rest), children));
};
UikContainerVertical.defaultProps = {
    className: null,
    children: null,
};

var css$j = ".scroll-module_wrapper__37oPe {\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n";
var cls$6 = {"wrapper":"scroll-module_wrapper__37oPe"};
styleInject(css$j);

var UikScrollArea = /** @class */ (function (_super) {
    __extends(UikScrollArea, _super);
    function UikScrollArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UikScrollArea.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
        return (React__default.createElement("div", __assign({ className: classnames(cls$6.wrapper, className) }, rest), children));
    };
    return UikScrollArea;
}(React__default.PureComponent));

var css$k = ".nav-icon-module_wrapper__1HBBe {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  color: #9EA0A5; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_a__3-rM6,\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_b__3bNxF,\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_c__3skaz {\n    position: absolute;\n    fill: currentColor;\n    transform: rotate(0);\n    transition: .2s top .4s, .1s left .2s, .2s transform, .2s opacity .2s; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_a__3-rM6 {\n    left: 0;\n    top: 2px; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_b__3bNxF {\n    top: 9px;\n    left: 0; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_c__3skaz {\n    left: 6px;\n    top: 16px; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_a__3-rM6,\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_b__3bNxF,\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_c__3skaz {\n    transition: .2s opacity, .2s top, .2s left .2s, .2s transform .4s; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_a__3-rM6,\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_c__3skaz {\n    right: auto;\n    left: 3px;\n    top: 9px; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_b__3bNxF {\n    opacity: 0; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_a__3-rM6 {\n    transform: rotate(-45deg); }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_c__3skaz {\n    transform: rotate(45deg); }\n";
var cls$7 = {"wrapper":"nav-icon-module_wrapper__1HBBe","a":"nav-icon-module_a__3-rM6","b":"nav-icon-module_b__3bNxF","c":"nav-icon-module_c__3skaz","isOpen":"nav-icon-module_isOpen__3hwAx"};
styleInject(css$k);

var LineLong = (function (props) { return (React__default.createElement("svg", __assign({ fill: "currentColor", height: "2px", version: "1.1", viewBox: "0 0 20 2", width: "20px" }, props),
    React__default.createElement("g", { id: "Icon/20px/menu-[Extra]", transform: "translate(0.000000, -9.000000)" },
        React__default.createElement("polygon", { id: "Path", points: "0 11 20 11 20 9 0 9" })))); });

var LineShort = (function (props) { return (React__default.createElement("svg", __assign({ fill: "currentColor", height: "2px", version: "1.1", viewBox: "0 0 14 2", width: "14px" }, props),
    React__default.createElement("g", { id: "Icon/20px/menu-[Extra]", transform: "translate(0.000000, -2.000000)" },
        React__default.createElement("polygon", { id: "Path", points: "0 4 14 4 14 2 0 2" })))); });

var UikNavBurger = function (_a) {
    var _b;
    var className = _a.className, isOpen = _a.isOpen, rest = __rest(_a, ["className", "isOpen"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$7.wrapper, className, (_b = {},
            _b[cls$7.isOpen] = isOpen,
            _b)) }, rest),
        React__default.createElement(LineShort, { className: cls$7.a }),
        React__default.createElement(LineLong, { className: cls$7.b }),
        React__default.createElement(LineShort, { className: cls$7.c })));
};
UikNavBurger.defaultProps = {
    className: null,
    isOpen: false,
};

var css$l = ".nav-link-module_wrapper__16HY2 {\n  font-size: .875rem;\n  color: #3E3F42;\n  display: block;\n  padding: 0 30px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .nav-link-module_wrapper__16HY2 .nav-link-module_icon__6NMaj {\n    display: inline-block;\n    margin-right: 12px;\n    width: 18px;\n    text-align: center; }\n  .nav-link-module_wrapper__16HY2 .nav-link-module_rightEl__QEXWy {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1rem; }\n  .nav-link-module_wrapper__16HY2.nav-link-module_highlighted__rI0es .nav-link-module_text__2W-h2 {\n    font-weight: 500; }\n  .nav-link-module_wrapper__16HY2.active {\n    font-weight: 500;\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05);\n    box-shadow: inset 3px 0 0 0 #1665D8; }\n  .nav-link-module_wrapper__16HY2:hover {\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05); }\n\n.nav-link-module_disabled__3heKb {\n  color: #9EA0A5;\n  cursor: not-allowed;\n  opacity: 0.5;\n  text-decoration: none; }\n";
var cls$8 = {"wrapper":"nav-link-module_wrapper__16HY2","icon":"nav-link-module_icon__6NMaj","rightEl":"nav-link-module_rightEl__QEXWy","highlighted":"nav-link-module_highlighted__rI0es","text":"nav-link-module_text__2W-h2","disabled":"nav-link-module_disabled__3heKb"};
styleInject(css$l);

var UikNavLink = function (_a) {
    var _b;
    var rightEl = _a.rightEl, children = _a.children, className = _a.className, highlighted = _a.highlighted, icon = _a.icon, disabled = _a.disabled, Component = _a.Component, rest = __rest(_a, ["rightEl", "children", "className", "highlighted", "icon", "disabled", "Component"]);
    return (React__default.createElement(Component, __assign({ className: classnames(cls$8.wrapper, className, (_b = {},
            _b[cls$8.highlighted] = highlighted,
            _b[cls$8.disabled] = disabled,
            _b)) }, rest),
        React__default.createElement("span", { className: cls$8.text },
            icon && (React__default.createElement("span", { className: cls$8.icon }, icon)),
            children),
        rightEl && (React__default.createElement("span", { className: cls$8.rightEl }, rightEl))));
};
UikNavLink.defaultProps = {
    className: null,
    rightEl: null,
    highlighted: false,
    icon: null,
    children: null,
};

var css$m = ".nav-link-module_wrapperDark__11aHv {\n  margin: 0 15px;\n  border: none;\n  border-radius: 4px;\n  padding: 0 15px;\n  font-weight: 500;\n  color: white; }\n  .nav-link-module_wrapperDark__11aHv > * {\n    color: white; }\n  .nav-link-module_wrapperDark__11aHv.active {\n    background: #1665D8;\n    color: white; }\n    .nav-link-module_wrapperDark__11aHv.active .nav-link-module_rightEl__3DSmM {\n      color: white; }\n  .nav-link-module_wrapperDark__11aHv:not(.active):hover {\n    color: white;\n    background: rgba(255, 255, 255, 0.05);\n    border: none;\n    box-shadow: none; }\n";
var cls$9 = {"wrapperDark":"nav-link-module_wrapperDark__11aHv","rightEl":"nav-link-module_rightEl__3DSmM"};
styleInject(css$m);

var UikNavLinkDark = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement(UikNavLink, __assign({ className: classnames(cls$9.wrapperDark, className) }, rest), children));
};
UikNavLinkDark.defaultProps = {
    Component: 'a',
};

var css$n = ".nav-link-secondary-module_wrapper__3k4v9 {\n  font-size: .875rem;\n  color: #6B6C6F;\n  display: block;\n  padding: 0 30px 0 46px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .nav-link-secondary-module_wrapper__3k4v9 .nav-link-secondary-module_icon__psgeH {\n    display: inline-block;\n    margin-right: 12px; }\n  .nav-link-secondary-module_wrapper__3k4v9 .nav-link-secondary-module_rightEl__2nQYe {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1rem; }\n  .nav-link-secondary-module_wrapper__3k4v9.nav-link-secondary-module_highlighted__1Cjzl .nav-link-secondary-module_text__33IKA {\n    color: #3E3F42;\n    font-weight: 500; }\n  .nav-link-secondary-module_wrapper__3k4v9.active {\n    font-weight: 500;\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05);\n    box-shadow: inset 3px 0 0 0 #1665D8; }\n  .nav-link-secondary-module_wrapper__3k4v9:hover {\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05); }\n";
var cls$a = {"wrapper":"nav-link-secondary-module_wrapper__3k4v9","icon":"nav-link-secondary-module_icon__psgeH","rightEl":"nav-link-secondary-module_rightEl__2nQYe","highlighted":"nav-link-secondary-module_highlighted__1Cjzl","text":"nav-link-secondary-module_text__33IKA"};
styleInject(css$n);

var UikNavLink$1 = function (_a) {
    var _b;
    var rightEl = _a.rightEl, children = _a.children, className = _a.className, highlighted = _a.highlighted, rest = __rest(_a, ["rightEl", "children", "className", "highlighted"]);
    return (React__default.createElement("a", __assign({ className: classnames(cls$a.wrapper, className, (_b = {},
            _b[cls$a.highlighted] = highlighted,
            _b)) }, rest),
        React__default.createElement("span", { className: cls$a.text }, children),
        rightEl && (React__default.createElement("span", { className: cls$a.rightEl }, rightEl))));
};
UikNavLink$1.defaultProps = {
    className: null,
    rightEl: null,
    highlighted: false,
    children: null,
};

var css$o = ".nav-link-2-module_wrapper__20fgQ {\n  font-size: .875rem;\n  color: #3E3F42;\n  display: block;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #EAEDF3; }\n  .nav-link-2-module_wrapper__20fgQ .nav-link-2-module_text__1xFcq {\n    display: flex;\n    align-items: center; }\n  .nav-link-2-module_wrapper__20fgQ .nav-link-2-module_icon__1UFdt {\n    display: inline-block;\n    margin-right: 12px;\n    color: #9EA0A5;\n    width: 18px;\n    text-align: center;\n    font-size: 20px; }\n  .nav-link-2-module_wrapper__20fgQ .nav-link-2-module_rightEl__3Qg1e {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1rem; }\n  .nav-link-2-module_wrapper__20fgQ.nav-link-2-module_highlighted__1mpsg .nav-link-2-module_text__1xFcq {\n    font-weight: 500; }\n  .nav-link-2-module_wrapper__20fgQ.active {\n    font-weight: 500; }\n    .nav-link-2-module_wrapper__20fgQ.active .nav-link-2-module_icon__1UFdt {\n      color: #1665D8; }\n  .nav-link-2-module_wrapper__20fgQ:hover .nav-link-2-module_icon__1UFdt {\n    color: rgba(22, 101, 216, 0.8); }\n";
var cls$b = {"wrapper":"nav-link-2-module_wrapper__20fgQ","text":"nav-link-2-module_text__1xFcq","icon":"nav-link-2-module_icon__1UFdt","rightEl":"nav-link-2-module_rightEl__3Qg1e","highlighted":"nav-link-2-module_highlighted__1mpsg"};
styleInject(css$o);

var UikNavLinkTwo = function (_a) {
    var _b;
    var rightEl = _a.rightEl, children = _a.children, className = _a.className, highlighted = _a.highlighted, icon = _a.icon, onClick = _a.onClick, rest = __rest(_a, ["rightEl", "children", "className", "highlighted", "icon", "onClick"]);
    return (React__default.createElement("a", __assign({ className: classnames(cls$b.wrapper, className, (_b = {},
            _b[cls$b.highlighted] = highlighted,
            _b)), onClick: onClick }, rest),
        React__default.createElement("span", { className: cls$b.text },
            icon && (React__default.createElement("span", { className: cls$b.icon }, icon)),
            children),
        rightEl && (React__default.createElement("span", { className: cls$b.rightEl }, rightEl))));
};
UikNavLinkTwo.defaultProps = {
    className: null,
    rightEl: null,
    highlighted: false,
    icon: null,
    children: null,
};

var css$p = ".nav-link-two-container-module_wrapper__2yBhx {\n  padding: 16px 30px 30px; }\n";
var cls$c = {"wrapper":"nav-link-two-container-module_wrapper__2yBhx"};
styleInject(css$p);

var UikNavLinkTwoContainer = function (_a) {
    var children = _a.children, className = _a.className, positionRight = _a.positionRight, rest = __rest(_a, ["children", "className", "positionRight"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$c.wrapper, className) }, rest), children));
};
UikNavLinkTwoContainer.defaultProps = {
    className: null,
    positionRight: false,
    children: null,
};

var css$q = ".nav-panel-module_wrapper__26GMu {\n  /* Menu Base: */\n  background: white;\n  border-right: 1px solid #EAEDF3;\n  height: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 270px;\n  width: 270px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n  .nav-panel-module_wrapper__26GMu.nav-panel-module_positionRight__3-J31 {\n    border-right: none;\n    border-left: 1px solid #EAEDF3; }\n";
var cls$d = {"wrapper":"nav-panel-module_wrapper__26GMu","positionRight":"nav-panel-module_positionRight__3-J31"};
styleInject(css$q);

var UikNavPanel = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, positionRight = _a.positionRight, rest = __rest(_a, ["children", "className", "positionRight"]);
    return (React.createElement("div", __assign({ className: classnames(cls$d.wrapper, className, (_b = {},
            _b[cls$d.positionRight] = positionRight,
            _b)) }, rest), children));
};
UikNavPanel.defaultProps = {
    className: null,
    positionRight: false,
    children: null,
};

var css$r = ".nav-section-module_wrapper__2oFf1 + .nav-section-module_wrapper__2oFf1 {\n  margin-top: 20px; }\n\n.nav-section-module_wrapper__2oFf1:last-child {\n  margin-bottom: 20px; }\n\n.nav-section-module_wrapper__2oFf1:first-child {\n  margin-top: 15px; }\n";
var cls$e = {"wrapper":"nav-section-module_wrapper__2oFf1"};
styleInject(css$r);

var UikNavSection = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React.createElement("section", __assign({ className: classnames(cls$e.wrapper, className) }, rest), children));
};
UikNavSection.defaultProps = {
    className: null,
    children: null,
};

var css$s = ".nav-section-title-module_wrapper__2XT6i {\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 0.75rem;\n  color: #9EA0A5;\n  line-height: 1.5;\n  display: block;\n  padding: 10px 30px; }\n";
var cls$f = {"wrapper":"nav-section-title-module_wrapper__2XT6i"};
styleInject(css$s);

var UikSectionName = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("span", __assign({ className: classnames(cls$f.wrapper, className) }, rest), children));
};
UikSectionName.defaultProps = {
    className: null,
    children: null,
};

var css$t = ".nav-title-module_wrapper__3GRgq {\n  padding: 25px 30px 20px;\n  font-size: 1.125rem;\n  color: #3E3F42;\n  display: block;\n  font-weight: 500;\n  line-height: 1; }\n";
var cls$g = {"wrapper":"nav-title-module_wrapper__3GRgq"};
styleInject(css$t);

var UikNavTitle = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("span", __assign({ className: classnames(cls$g.wrapper, className) }, rest), children));
};
UikNavTitle.defaultProps = {
    className: null,
    children: null,
};

var css$u = ".nav-user-module_wrapper__Uw9Fh {\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_avatarWrapper__ES8g1 + * {\n    margin-top: 14px; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_avatarWrapper__ES8g1 .nav-user-module_avatar__2VYRK {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_name__133uz {\n    color: #3E3F42;\n    font-weight: 500;\n    line-height: 1.5rem;\n    font-size: 1rem; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_textTop__T5cBp {\n    color: #9EA0A5;\n    font-size: .875rem; }\n";
var cls$h = {"wrapper":"nav-user-module_wrapper__Uw9Fh","avatarWrapper":"nav-user-module_avatarWrapper__ES8g1","avatar":"nav-user-module_avatar__2VYRK","name":"nav-user-module_name__133uz","textTop":"nav-user-module_textTop__T5cBp"};
styleInject(css$u);

var UikNavUser = function (_a) {
    var children = _a.children, className = _a.className, name = _a.name, imgUrl = _a.imgUrl, textTop = _a.textTop, rest = __rest(_a, ["children", "className", "name", "imgUrl", "textTop"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$h.wrapper, className) }, rest),
        imgUrl && (React__default.createElement("div", { className: cls$h.avatarWrapper },
            React__default.createElement("img", { alt: "bob", className: cls$h.avatar, src: imgUrl }))),
        name && (React__default.createElement("span", { className: cls$h.name }, name)),
        textTop && (React__default.createElement("span", { className: cls$h.textTop }, textTop)),
        children));
};
UikNavUser.defaultProps = {
    className: null,
    children: null,
    name: null,
    imgUrl: null,
    textTop: null,
};

var css$v = ".top-bar-module_wrapper__15fe- {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n  background: #FFFFFF;\n  flex-shrink: 0;\n  flex-grow: 0;\n  z-index: 100;\n  border-bottom: 1px solid #EAEDF3; }\n  .top-bar-module_wrapper__15fe-.top-bar-module_center__3VZ9U {\n    justify-content: center; }\n  @media screen and (max-width: 768px) {\n    .top-bar-module_wrapper__15fe- {\n      height: 56px; } }\n\n.top-bar-module_pageName__2RCO_ {\n  /* Socialio: */\n  font-weight: 500;\n  font-size: 1rem;\n  color: #3E3F42;\n  line-height: 1.75; }\n  .top-bar-module_pageName__2RCO_ i {\n    color: #1665D8;\n    margin-right: 14px; }\n";
var cls$i = {"wrapper":"top-bar-module_wrapper__15fe-","center":"top-bar-module_center__3VZ9U","pageName":"top-bar-module_pageName__2RCO_"};
styleInject(css$v);

var UikTopBar = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, center = _a.center, rest = __rest(_a, ["children", "className", "center"]);
    return (React.createElement("div", __assign({ className: classnames(cls$i.wrapper, className, (_b = {},
            _b[cls$i.center] = center,
            _b)) }, rest), children));
};
UikTopBar.defaultProps = {
    className: null,
    children: null,
    center: false,
};

var css$w = ".top-bar-link-module_wrapper__1M7OW {\n  height: 38px;\n  line-height: 38px;\n  padding: 0 15px;\n  display: block;\n  cursor: pointer;\n  font-size: .875rem;\n  color: #3E3F42; }\n  .top-bar-link-module_wrapper__1M7OW:hover, .top-bar-link-module_wrapper__1M7OW.active {\n    color: #1665D8; }\n";
var cls$j = {"wrapper":"top-bar-link-module_wrapper__1M7OW"};
styleInject(css$w);

var UikTopBarLink = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("a", __assign({ className: classnames(cls$j.wrapper, className) }, rest), children));
};
UikTopBarLink.defaultProps = {
    className: null,
};

var css$x = ".top-bar-link-container-module_wrapper__3RwBi {\n  margin: 0 -15px;\n  display: flex;\n  align-items: center; }\n";
var cls$k = {"wrapper":"top-bar-link-container-module_wrapper__3RwBi"};
styleInject(css$x);

var UikTopBarLinkContainer = function (_a) {
    var children = _a.children, className = _a.className, Component = _a.Component, rest = __rest(_a, ["children", "className", "Component"]);
    return (React__default.createElement(Component, __assign({ className: classnames(cls$k.wrapper, className) }, rest), children));
};
UikTopBarLinkContainer.defaultProps = {
    className: null,
    children: null,
};

var css$y = ".nav-divider-module_wrapper__1Ldpj {\n  background: #EAEDF3;\n  height: 38px;\n  width: 1px;\n  margin: 0 30px;\n  flex-basis: 1px;\n  flex-shrink: 0; }\n";
var cls$l = {"wrapper":"nav-divider-module_wrapper__1Ldpj"};
styleInject(css$y);

var UikTopBarMenuDivider = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$l.wrapper, className) }, rest)));
};
UikTopBarMenuDivider.defaultProps = {
    className: null,
};

var css$z = ".top-bar-section-module_wrapper__1dh9g {\n  display: flex;\n  align-items: center;\n  padding: 0 30px; }\n";
var cls$m = {"wrapper":"top-bar-section-module_wrapper__1dh9g"};
styleInject(css$z);

var UikTopBarSection = function (_a) {
    var children = _a.children, className = _a.className, Component = _a.Component, rest = __rest(_a, ["children", "className", "Component"]);
    if (Component) {
        return (React.createElement(Component, __assign({ className: classnames(cls$m.wrapper, className) }, rest), children && children));
    }
    else {
        return null;
    }
};
UikTopBarSection.defaultProps = {
    className: null,
    children: null,
    Component: 'div'
};

var css$A = ".top-bar-title-module_wrapper__1MBTo {\n  font-weight: 500;\n  font-size: 1rem;\n  color: #3E3F42;\n  line-height: 1.75;\n  display: flex;\n  align-items: center; }\n  .top-bar-title-module_wrapper__1MBTo.top-bar-title-module_large__23Isf {\n    font-size: 1.125rem; }\n  .top-bar-title-module_wrapper__1MBTo i {\n    margin-right: 14px;\n    color: #9EA0A5; }\n";
var cls$n = {"wrapper":"top-bar-title-module_wrapper__1MBTo","large":"top-bar-title-module_large__23Isf"};
styleInject(css$A);

var UikTopBarTitle = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, Component = _a.Component, large = _a.large, rest = __rest(_a, ["children", "className", "Component", "large"]);
    return (React__default.createElement(Component, __assign({ className: classnames(cls$n.wrapper, className, (_b = {},
            _b[cls$n.large] = large,
            _b)) }, rest), children));
};
UikTopBarTitle.defaultProps = {
    className: null,
    children: null,
    large: false,
    Component: 'h2',
};

var css$B = ".radio-module_inputWrapper__LqkU4 {\n  position: relative; }\n\n.radio-module_header__3vxp5 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 1.5rem; }\n\n.radio-module_input__1cpFC {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: white;\n  padding: 10px 15px;\n  outline: none;\n  font-size: 0.875rem; }\n  .radio-module_input__1cpFC:hover {\n    cursor: pointer; }\n  .radio-module_input__1cpFC > input {\n    margin-right: 10px; }\n  .radio-module_input__1cpFC:focus {\n    border-color: #1665D8; }\n  .radio-module_input__1cpFC::-webkit-input-placeholder, .radio-module_input__1cpFC::-moz-placeholder, .radio-module_input__1cpFC:-ms-input-placeholder, .radio-module_input__1cpFC:-moz-placeholder {\n    color: #9EA0A5; }\n  .radio-module_input__1cpFC.radio-module_errorHighlight__2_yQg {\n    border-color: #E6492D; }\n\n.radio-module_disabled__2XWen {\n  background: rgba(255, 255, 255, 0.3); }\n  .radio-module_disabled__2XWen:hover {\n    cursor: not-allowed; }\n\n.radio-module_errorMessage__2hhKH {\n  color: #E6492D;\n  margin: 0;\n  line-height: 1.375rem; }\n";
var s$c = {"inputWrapper":"radio-module_inputWrapper__LqkU4","header":"radio-module_header__3vxp5","input":"radio-module_input__1cpFC","errorHighlight":"radio-module_errorHighlight__2_yQg","disabled":"radio-module_disabled__2XWen","errorMessage":"radio-module_errorMessage__2hhKH"};
styleInject(css$B);

var UikRadio = /** @class */ (function (_super) {
    __extends(UikRadio, _super);
    function UikRadio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentValue: _this.props.defaultValue,
        };
        _this.renderSingleRadio = function (option, key) {
            var currentValue = _this.state.currentValue;
            var disabled = _this.props.disabled;
            return (React__default.createElement("div", { key: key, onClick: _this.changeValue(option.value), className: classnames(s$c.input, disabled ? s$c.disabled : '') },
                React__default.createElement("input", { type: "radio", disabled: disabled, onChange: _this.changeValue(option.value), checked: currentValue === option.value }),
                option.label));
        };
        _this.changeValue = function (value) { return function () {
            _this.setState({ currentValue: value });
            _this.props.onChange(value);
        }; };
        return _this;
    }
    UikRadio.prototype.render = function () {
        var _a = this.props, options = _a.options, label = _a.label, className = _a.className;
        return (React__default.createElement("div", null,
            label && (React__default.createElement("div", { className: s$c.header },
                React__default.createElement(UikContentTitle, null, label))),
            React__default.createElement("div", { className: className ? className : '' }, options.map(this.renderSingleRadio))));
    };
    return UikRadio;
}(React.Component));

var css$C = ".checkbox-module_header__209cu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 1.5rem; }\n\n.checkbox-module_checkbox__1gYAB {\n  display: flex;\n  align-items: flex-start; }\n  .checkbox-module_checkbox__1gYAB input {\n    margin-right: 10px;\n    margin-top: 2px; }\n";
var s$d = {"header":"checkbox-module_header__209cu","checkbox":"checkbox-module_checkbox__1gYAB"};
styleInject(css$C);

var UikCheckbox = /** @class */ (function (_super) {
    __extends(UikCheckbox, _super);
    function UikCheckbox(props) {
        var _this = _super.call(this, props) || this;
        _this.changeHandler = function (e) {
            var onInput = _this.props.onInput;
            _this.setState({ value: !_this.state.value });
            onInput(!_this.state.value);
            e.preventDefault();
        };
        _this.state = { value: Boolean(_this.props.value) };
        return _this;
    }
    UikCheckbox.prototype.componentWillReceiveProps = function (nextProps) {
        nextProps.value && this.setState({ value: nextProps.value });
    };
    UikCheckbox.prototype.render = function () {
        var _a = this.props, className = _a.className, name = _a.name, label = _a.label;
        return (React__default.createElement("div", { className: classnames(s$d.checkbox, className), onClick: this.changeHandler },
            React__default.createElement("input", { name: name, type: "checkbox", checked: this.state.value, onChange: this.changeHandler }),
            label && (React__default.createElement("div", { className: s$d.header },
                React__default.createElement(UikContentTitle, null, label)))));
    };
    return UikCheckbox;
}(React__default.PureComponent));

exports.UikWidgetContent = UikWidgetContent;
exports.UikWidgetHeader = UikWidgetHeader;
exports.UikWidget = UikWidget;
exports.UikWidgetTable = UikWidgetTable;
exports.UikHeadline = UikHeadline;
exports.UikHeadlineDesc = UikHeadline$1;
exports.UikFormInputGroup = UikFormInputGroup;
exports.UikInput = Input;
exports.UikContentTitle = UikContentTitle;
exports.UikDivider = UikDivider;
exports.Uikon = Uikon;
exports.UikButton = UikButton;
exports.UikImageUploadButton = Button;
exports.UikAvatar = UikAvatar;
exports.UikDropdown = UikDropdown;
exports.UikSelect = Select;
exports.UikContainerHorizontal = UikContainerHorizontal;
exports.UikContainerVertical = UikContainerVertical;
exports.UikScrollArea = UikScrollArea;
exports.UikNavBurger = UikNavBurger;
exports.UikNavLink = UikNavLink;
exports.UikNavLinkDark = UikNavLinkDark;
exports.UikNavLinkSecondary = UikNavLink$1;
exports.UikNavLinkTwo = UikNavLinkTwo;
exports.UikNavLinkTwoContainer = UikNavLinkTwoContainer;
exports.UikNavPanel = UikNavPanel;
exports.UikNavSection = UikNavSection;
exports.UikNavSectionTitle = UikSectionName;
exports.UikNavTitle = UikNavTitle;
exports.UikNavUser = UikNavUser;
exports.UikTopBar = UikTopBar;
exports.UikTopBarLink = UikTopBarLink;
exports.UikTopBarLinkContainer = UikTopBarLinkContainer;
exports.UikTopBarMenuDivider = UikTopBarMenuDivider;
exports.UikTopBarSection = UikTopBarSection;
exports.UikTopBarTitle = UikTopBarTitle;
exports.UikRadio = UikRadio;
exports.UikCheckbox = UikCheckbox;
exports.UikLoaderDots = LoaderDots;
//# sourceMappingURL=index.js.map
