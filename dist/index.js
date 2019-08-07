'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactDom = _interopDefault(require('react-dom'));
var require$$1 = _interopDefault(require('prop-types'));

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

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
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
        return (React__default.createElement("div", __assign({}, wrapperProps, { className: classnames(wrapperProps ? wrapperProps.className : undefined, (_a = {},
                _a[s$6.clear] = clear,
                _a)) }),
            label && (React__default.createElement("div", { className: s$6.header },
                React__default.createElement(UikContentTitle, null, label),
                this.state.errorMessage && (React__default.createElement("p", { className: s$6.errorMessage }, this.state.errorMessage)))),
            React__default.createElement("div", { className: classnames(s$6.inputWrapper) },
                icon && (React__default.createElement("span", { className: classnames(s$6.iconWrapper, (_b = {},
                        _b[s$6.iconWrapperRight] = iconPosition === 'right',
                        _b)) }, icon)),
                React__default.createElement("input", __assign({ className: classnames(className, s$6.input, (_c = {},
                        _c[s$6.errorHighlight] = this.state.errorMessage,
                        _c)), name: name, type: type ? type : 'text', value: this.state.value, onChange: function (e) {
                        var value = e.target.value;
                        if ((_this.props.valueCheck && value && _this.props.valueCheck.pattern.test(value))
                            || !_this.props.valueCheck || value.length === 0) {
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

var css$e = ".Calendar_react-calendar__28k-7 {\n  width: 350px;\n  max-width: 100%;\n  background: white;\n  border: 1px solid #a0a096;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.125em;\n}\n.Calendar_react-calendar__28k-7,\n.Calendar_react-calendar__28k-7 *,\n.Calendar_react-calendar__28k-7 *:before,\n.Calendar_react-calendar__28k-7 *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Calendar_react-calendar__28k-7 button {\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n.Calendar_react-calendar__28k-7 button:enabled:hover {\n  cursor: pointer;\n}\n.Calendar_react-calendar__navigation__1oywf {\n  height: 44px;\n  margin-bottom: 1em;\n}\n.Calendar_react-calendar__navigation__1oywf button {\n  min-width: 44px;\n  background: none;\n}\n.Calendar_react-calendar__navigation__1oywf button:enabled:hover,\n.Calendar_react-calendar__navigation__1oywf button:enabled:focus {\n  background-color: #e6e6e6;\n}\n.Calendar_react-calendar__navigation__1oywf button[disabled] {\n  background-color: #f0f0f0;\n}\n.Calendar_react-calendar__month-view__weekdays__2AxtY {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 0.75em;\n}\n.Calendar_react-calendar__month-view__weekdays__weekday__2zxz5 {\n  padding: 0.5em;\n}\n.Calendar_react-calendar__month-view__weekNumbers__1UbYq {\n  font-weight: bold;\n}\n.Calendar_react-calendar__month-view__weekNumbers__1UbYq .Calendar_react-calendar__tile__W4jMC {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75em;\n  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n}\n.Calendar_react-calendar__month-view__days__day--weekend__2wEsg {\n  color: #d10000;\n}\n.Calendar_react-calendar__month-view__days__day--neighboringMonth__3NkNK {\n  color: #757575;\n}\n.Calendar_react-calendar__year-view__6igQC .Calendar_react-calendar__tile__W4jMC,\n.Calendar_react-calendar__decade-view__23H7n .Calendar_react-calendar__tile__W4jMC,\n.Calendar_react-calendar__century-view__GDCWm .Calendar_react-calendar__tile__W4jMC {\n  padding: 2em 0.5em;\n}\n.Calendar_react-calendar__tile__W4jMC {\n  max-width: 100%;\n  text-align: center;\n  padding: 0.75em 0.5em;\n  background: none;\n}\n.Calendar_react-calendar__tile__W4jMC:disabled {\n  background-color: #f0f0f0;\n}\n.Calendar_react-calendar__tile__W4jMC:enabled:hover,\n.Calendar_react-calendar__tile__W4jMC:enabled:focus {\n  background-color: #e6e6e6;\n}\n.Calendar_react-calendar__tile--hasActive__3OPgc {\n  background: #76baff;\n}\n.Calendar_react-calendar__tile--hasActive__3OPgc:enabled:hover,\n.Calendar_react-calendar__tile--hasActive__3OPgc:enabled:focus {\n  background: #a9d4ff;\n}\n.Calendar_react-calendar__tile--active__1T0Es {\n  background: #006edc;\n  color: white;\n}\n.Calendar_react-calendar__tile--active__1T0Es:enabled:hover,\n.Calendar_react-calendar__tile--active__1T0Es:enabled:focus {\n  background: #1087ff;\n}\n.Calendar_react-calendar--selectRange__1WerO .Calendar_react-calendar__tile--hover__no8UL {\n  background-color: #e6e6e6;\n}\n";
var Calendar = {"react-calendar":"Calendar_react-calendar__28k-7","react-calendar__navigation":"Calendar_react-calendar__navigation__1oywf","react-calendar__month-view__weekdays":"Calendar_react-calendar__month-view__weekdays__2AxtY","react-calendar__month-view__weekdays__weekday":"Calendar_react-calendar__month-view__weekdays__weekday__2zxz5","react-calendar__month-view__weekNumbers":"Calendar_react-calendar__month-view__weekNumbers__1UbYq","react-calendar__tile":"Calendar_react-calendar__tile__W4jMC","react-calendar__month-view__days__day--weekend":"Calendar_react-calendar__month-view__days__day--weekend__2wEsg","react-calendar__month-view__days__day--neighboringMonth":"Calendar_react-calendar__month-view__days__day--neighboringMonth__3NkNK","react-calendar__year-view":"Calendar_react-calendar__year-view__6igQC","react-calendar__decade-view":"Calendar_react-calendar__decade-view__23H7n","react-calendar__century-view":"Calendar_react-calendar__century-view__GDCWm","react-calendar__tile--hasActive":"Calendar_react-calendar__tile--hasActive__3OPgc","react-calendar__tile--active":"Calendar_react-calendar__tile--active__1T0Es","react-calendar--selectRange":"Calendar_react-calendar--selectRange__1WerO","react-calendar__tile--hover":"Calendar_react-calendar__tile--hover__no8UL"};
styleInject(css$e);

var Calendar$1 = /*#__PURE__*/Object.freeze({
    default: Calendar
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    polyfill: polyfill
});

var entry = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.focusEvents = exports.keyboardEvents = exports.touchEvents = exports.mouseEvents = void 0;
// As defined on the list of supported mouse events: https://reactjs.org/docs/events.html#mouse-events
var mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp']; // As defined on the list of supported touch events: https://reactjs.org/docs/events.html#touch-events

exports.mouseEvents = mouseEvents;
var touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#keyboard-events

exports.touchEvents = touchEvents;
var keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#focus-events

exports.keyboardEvents = keyboardEvents;
var focusEvents = ['onFocus', 'onBlur'];
/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */

exports.focusEvents = focusEvents;

var makeEventProps = function makeEventProps(props, getArgs) {
  var eventProps = {};
  [].concat(mouseEvents, touchEvents, keyboardEvents, focusEvents).forEach(function (eventName) {
    if (props[eventName]) {
      eventProps[eventName] = function (event) {
        return getArgs ? props[eventName](event, getArgs(eventName)) : props[eventName](event);
      };
    }
  });
  return eventProps;
};

var _default = makeEventProps;
exports.default = _default;
});

unwrapExports(entry);
var entry_1 = entry.focusEvents;
var entry_2 = entry.keyboardEvents;
var entry_3 = entry.touchEvents;
var entry_4 = entry.mouseEvents;

var entry$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeClassNames;

function mergeClassNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (classList, arg) {
    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
  }, []).filter(Boolean).join(' ');
}
});

unwrapExports(entry$2);

var entry$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectElementOverflow = function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return element.getBoundingClientRect().top < container.getBoundingClientRect().top;
    },
    get collidedBottom() {
      return element.getBoundingClientRect().bottom > container.getBoundingClientRect().bottom;
    },
    get collidedLeft() {
      return element.getBoundingClientRect().left < container.getBoundingClientRect().left;
    },
    get collidedRight() {
      return element.getBoundingClientRect().right > container.getBoundingClientRect().right;
    },
    get overflowTop() {
      return container.getBoundingClientRect().top - element.getBoundingClientRect().top;
    },
    get overflowBottom() {
      return element.getBoundingClientRect().bottom - container.getBoundingClientRect().bottom;
    },
    get overflowLeft() {
      return container.getBoundingClientRect().left - element.getBoundingClientRect().left;
    },
    get overflowRight() {
      return element.getBoundingClientRect().right - container.getBoundingClientRect().right;
    }
  };
};

exports.default = detectElementOverflow;
});

unwrapExports(entry$4);

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnOnDev = exports.isProduction = void 0;

/**
 * Checks whether we're running on a production build or not.
 */
var isProduction = process.env.NODE_ENV === 'production';
exports.isProduction = isProduction;

var consoleOnDev = function consoleOnDev(method) {
  if (!isProduction) {
    var _console;

    for (var _len = arguments.length, message = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      message[_key - 1] = arguments[_key];
    }

    // eslint-disable-next-line no-console
    (_console = console)[method].apply(_console, message);
  }
};

var warnOnDev = function warnOnDev() {
  for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    message[_key2] = arguments[_key2];
  }

  return consoleOnDev.apply(void 0, ['warn'].concat(message));
};

exports.warnOnDev = warnOnDev;
});

unwrapExports(utils);
var utils_1 = utils.warnOnDev;
var utils_2 = utils.isProduction;

var Fit_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);



var _propTypes = _interopRequireDefault(require$$1);

var _detectElementOverflow = _interopRequireDefault(entry$4);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isBrowser = typeof window !== 'undefined';
var isDisplayContentsSupported = isBrowser && 'CSS' in window && 'supports' in window.CSS && CSS.supports('display', 'contents');
var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;

var capitalize = function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
};

var findScrollContainer = function findScrollContainer(element) {
  if (!element) {
    return undefined;
  }

  var parent = element.parentElement;

  while (parent) {
    var _window$getComputedSt = window.getComputedStyle(parent),
        overflow = _window$getComputedSt.overflow;

    if (overflow.split(' ').every(function (o) {
      return o === 'auto' || o === 'scroll';
    })) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return document.documentElement;
};

var alignAxis = function alignAxis(_ref) {
  var axis = _ref.axis,
      container = _ref.container,
      element = _ref.element,
      invertAxis = _ref.invertAxis,
      secondary = _ref.secondary,
      spacing = _ref.spacing;
  var style = window.getComputedStyle(element);
  var scrollContainer = findScrollContainer(element);
  var parent = container.parentElement;
  var parentCollisions = (0, _detectElementOverflow.default)(parent, scrollContainer);
  var isX = axis === 'x';
  var startProperty = isX ? 'left' : 'top';
  var endProperty = isX ? 'right' : 'bottom';
  var sizeProperty = isX ? 'width' : 'height';
  var overflowStartProperty = "overflow".concat(capitalize(startProperty));
  var overflowEndProperty = "overflow".concat(capitalize(endProperty));
  var uppercasedSizeProperty = capitalize(sizeProperty);
  var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
  var clientSizeProperty = "client".concat(uppercasedSizeProperty);
  var minSizeProperty = "min-".concat(sizeProperty);
  var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
  var availableStartSpace = -parentCollisions[overflowStartProperty] - spacing;
  var availableEndSpace = -parentCollisions[overflowEndProperty] - spacing - scrollbarWidth;

  if (secondary) {
    availableStartSpace += parent[clientSizeProperty];
    availableEndSpace += parent[clientSizeProperty];
  }

  var offsetSize = element[offsetSizeProperty];

  var displayStart = function displayStart() {
    element.style[startProperty] = 'unset';
    element.style[endProperty] = secondary ? '0' : '100%';
  };

  var displayEnd = function displayEnd() {
    element.style[startProperty] = secondary ? '0' : '100%';
    element.style[endProperty] = 'unset';
  };

  var displayIfFits = function displayIfFits(availableSpace, display) {
    var fits = offsetSize <= availableSpace;

    if (fits) {
      display();
    }

    return fits;
  };

  var displayStartIfFits = function displayStartIfFits() {
    return displayIfFits(availableStartSpace, displayStart);
  };

  var displayEndIfFits = function displayEndIfFits() {
    return displayIfFits(availableEndSpace, displayEnd);
  };

  var displayWhereverShrinkedFits = function displayWhereverShrinkedFits() {
    var moreSpaceStart = availableStartSpace > availableEndSpace;
    var minSize = style[minSizeProperty] && parseInt(style[minSizeProperty], 10);

    var shrinkToSize = function shrinkToSize(size) {
      if (minSize && size < minSize) {
        (0, utils.warnOnDev)("<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
      }

      var newSize = Math.max(size, minSize || 0);
      (0, utils.warnOnDev)("<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
      element.style[sizeProperty] = "".concat(newSize, "px");
    };

    if (moreSpaceStart) {
      shrinkToSize(availableStartSpace);
      displayStart();
    } else {
      shrinkToSize(availableEndSpace);
      displayEnd();
    }
  };

  var fits;

  if (invertAxis) {
    fits = displayStartIfFits() || displayEndIfFits();
  } else {
    fits = displayEndIfFits() || displayStartIfFits();
  }

  if (!fits) {
    displayWhereverShrinkedFits();
  }
};

var alignMainAxis = function alignMainAxis(args) {
  return alignAxis(args);
};

var alignSecondaryAxis = function alignSecondaryAxis(args) {
  return alignAxis(_objectSpread({}, args, {
    axis: args.axis === 'x' ? 'y' : 'x',
    secondary: true
  }));
};

var alignBothAxis = function alignBothAxis(args) {
  var invertAxis = args.invertAxis,
      invertSecondaryAxis = args.invertSecondaryAxis,
      commonArgs = _objectWithoutProperties(args, ["invertAxis", "invertSecondaryAxis"]);

  alignMainAxis(_objectSpread({}, commonArgs, {
    invertAxis: invertAxis
  }));
  alignSecondaryAxis(_objectSpread({}, commonArgs, {
    invertAxis: invertSecondaryAxis
  }));
};

var Fit =
/*#__PURE__*/
function (_Component) {
  _inherits(Fit, _Component);

  function Fit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Fit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Fit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMutation", function () {
      _this.fit();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mutationObserver", isMutationObserverSupported && new MutationObserver(_this.onMutation));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fit", function () {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          container = _assertThisInitialize.container,
          element = _assertThisInitialize.element;

      if (!element) {
        return;
      }

      var elementWidth = element.clientWidth;
      var elementHeight = element.clientHeight; // No need to recalculate - already did that for current dimensions

      if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
        return;
      } // Save the dimensions so that we know we don't need to repeat the function if unchanged


      _this.elementWidth = elementWidth;
      _this.elementHeight = elementHeight;
      var parent = container.parentElement;
      /**
       * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */

      var style = window.getComputedStyle(element);
      var position = style.position;

      if (position !== 'absolute') {
        (0, utils.warnOnDev)('<Fit />\'s child does not have absolute position. You should apply `position: absolute` to it.');
        element.style.position = 'absolute';
      }
      /**
       * We need to ensure that <Fit />'s parent has a relative position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var parentStyle = window.getComputedStyle(parent);
      var parentPosition = parentStyle.position;

      if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
        (0, utils.warnOnDev)('<Fit />\'s parent does not have relative position. You should apply `position: relative` to it.');
        parent.style.position = 'relative';
      }

      var _this$props = _this.props,
          invertAxis = _this$props.invertAxis,
          invertSecondaryAxis = _this$props.invertSecondaryAxis,
          mainAxis = _this$props.mainAxis,
          spacing = _this$props.spacing;
      alignBothAxis({
        container: container,
        element: element,
        invertAxis: invertAxis,
        invertSecondaryAxis: invertSecondaryAxis,
        axis: mainAxis,
        spacing: spacing
      });
    });

    return _this;
  }

  _createClass(Fit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!isDisplayContentsSupported) {
        // eslint-disable-next-line react/no-find-dom-node
        var element = (0, reactDom.findDOMNode)(this);
        this.container = element;
        this.element = element;
      }

      this.fit();

      if (isMutationObserverSupported) {
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeFilter: ['class', 'style']
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var child = _react.default.Children.only(children);

      if (isDisplayContentsSupported) {
        return _react.default.createElement("div", {
          style: {
            display: 'contents'
          },
          ref: function ref(_ref2) {
            _this2.container = _ref2;
            _this2.element = _ref2 && _ref2.firstChild;
          }
        }, child);
      }

      return child;
    }
  }]);

  return Fit;
}(_react.Component);

exports.default = Fit;
Fit.propTypes = {
  children: _propTypes.default.node,
  invertAxis: _propTypes.default.bool,
  invertSecondaryAxis: _propTypes.default.bool,
  mainAxis: _propTypes.default.oneOf(['x', 'y']),
  spacing: _propTypes.default.number
};
Fit.defaultProps = {
  mainAxis: 'y',
  spacing: 8
};
});

unwrapExports(Fit_1);

var dates = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getISOLocalDate = exports.getISOLocalMonth = exports.isWeekend = exports.getDecadeLabel = exports.getCenturyLabel = exports.getDaysInMonth = exports.getValueRange = exports.getRange = exports.getEndPrevious2 = exports.getEndPrevious = exports.getEnd = exports.getBeginNext2 = exports.getBeginPrevious2 = exports.getBeginNext = exports.getBeginPrevious = exports.getBegin = exports.getWeekNumber = exports.getDayRange = exports.getEndOfDay = exports.getBeginOfDay = exports.getBeginOfNextMonth = exports.getEndOfPreviousMonth = exports.getBeginOfPreviousMonth = exports.getMonthRange = exports.getBeginOfWeek = exports.getEndOfMonth = exports.getBeginOfMonth = exports.getBeginOfNextYear = exports.getEndOfPreviousYear = exports.getBeginOfPreviousYear = exports.getYearRange = exports.getEndOfYear = exports.getBeginOfYear = exports.getBeginOfNextDecade = exports.getEndOfPreviousDecade = exports.getBeginOfPreviousDecade = exports.getDecadeRange = exports.getEndOfDecade = exports.getBeginOfDecade = exports.getBeginOfDecadeYear = exports.getBeginOfNextCentury = exports.getEndOfPreviousCentury = exports.getBeginOfPreviousCentury = exports.getCenturyRange = exports.getEndOfCentury = exports.getBeginOfCentury = exports.getBeginOfCenturyYear = exports.getDayOfWeek = exports.getDay = exports.getMonthIndex = exports.getMonth = exports.getYear = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _map = _toConsumableArray(Array(7)).map(function (el, index) {
  return index;
}),
    _map2 = _slicedToArray(_map, 7),
    // eslint-disable-next-line no-unused-vars
SUNDAY = _map2[0],
    MONDAY = _map2[1],
    TUESDAY = _map2[2],
    WEDNESDAY = _map2[3],
    THURSDAY = _map2[4],
    FRIDAY = _map2[5],
    SATURDAY = _map2[6];
/* Simple getters - getting a property of a given point in time */


var getYear = function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
};

exports.getYear = getYear;

var getMonth = function getMonth(date) {
  return date.getMonth() + 1;
};

exports.getMonth = getMonth;

var getMonthIndex = function getMonthIndex(date) {
  return date.getMonth();
};

exports.getMonthIndex = getMonthIndex;

var getDay = function getDay(date) {
  return date.getDate();
};

exports.getDay = getDay;

var getDayOfWeek = function getDayOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var weekday = date.getDay();

  switch (calendarType) {
    case 'ISO 8601':
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;

    case 'Arabic':
      return (weekday + 1) % 7;

    case 'Hebrew':
    case 'US':
      return weekday;

    default:
      throw new Error('Unsupported calendar type.');
  }
};
/* Complex getters - getting a property somehow related to a given point in time */


exports.getDayOfWeek = getDayOfWeek;

var getBeginOfCenturyYear = function getBeginOfCenturyYear(date) {
  var year = getYear(date) - 1;
  return year + -year % 100 + 1;
};

exports.getBeginOfCenturyYear = getBeginOfCenturyYear;

var getBeginOfCentury = function getBeginOfCentury(date) {
  var beginOfCenturyYear = getBeginOfCenturyYear(date);
  return new Date(beginOfCenturyYear, 0, 1);
};

exports.getBeginOfCentury = getBeginOfCentury;

var getEndOfCentury = function getEndOfCentury(date) {
  var beginOfCenturyYear = getBeginOfCenturyYear(date);
  return new Date(beginOfCenturyYear + 100, 0, 1, 0, 0, 0, -1);
};

exports.getEndOfCentury = getEndOfCentury;

var getCenturyRange = function getCenturyRange(date) {
  return [getBeginOfCentury(date), getEndOfCentury(date)];
};

exports.getCenturyRange = getCenturyRange;

var getBeginOfPreviousCentury = function getBeginOfPreviousCentury(date) {
  var previousCenturyYear = getYear(date) - 100;
  return getBeginOfCentury(previousCenturyYear);
};

exports.getBeginOfPreviousCentury = getBeginOfPreviousCentury;

var getEndOfPreviousCentury = function getEndOfPreviousCentury(date) {
  var previousCenturyYear = getYear(date) - 100;
  return getEndOfCentury(previousCenturyYear);
};

exports.getEndOfPreviousCentury = getEndOfPreviousCentury;

var getBeginOfNextCentury = function getBeginOfNextCentury(date) {
  var nextCenturyYear = getYear(date) + 100;
  return getBeginOfCentury(nextCenturyYear);
};

exports.getBeginOfNextCentury = getBeginOfNextCentury;

var getBeginOfDecadeYear = function getBeginOfDecadeYear(date) {
  var year = getYear(date) - 1;
  return year + -year % 10 + 1;
};

exports.getBeginOfDecadeYear = getBeginOfDecadeYear;

var getBeginOfDecade = function getBeginOfDecade(date) {
  var beginOfDecadeYear = getBeginOfDecadeYear(date);
  return new Date(beginOfDecadeYear, 0, 1);
};

exports.getBeginOfDecade = getBeginOfDecade;

var getEndOfDecade = function getEndOfDecade(date) {
  var beginOfDecadeYear = getBeginOfDecadeYear(date);
  return new Date(beginOfDecadeYear + 10, 0, 1, 0, 0, 0, -1);
};

exports.getEndOfDecade = getEndOfDecade;

var getDecadeRange = function getDecadeRange(date) {
  return [getBeginOfDecade(date), getEndOfDecade(date)];
};

exports.getDecadeRange = getDecadeRange;

var getBeginOfPreviousDecade = function getBeginOfPreviousDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
  return getBeginOfDecade(previousDecadeYear);
};

exports.getBeginOfPreviousDecade = getBeginOfPreviousDecade;

var getEndOfPreviousDecade = function getEndOfPreviousDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
  return getEndOfDecade(previousDecadeYear);
};

exports.getEndOfPreviousDecade = getEndOfPreviousDecade;

var getBeginOfNextDecade = function getBeginOfNextDecade(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var nextDecadeYear = getBeginOfDecadeYear(date) + offset;
  return getBeginOfDecade(nextDecadeYear);
};
/**
 * Returns the beginning of a given year.
 *
 * @param {Date} date Date.
 */


exports.getBeginOfNextDecade = getBeginOfNextDecade;

var getBeginOfYear = function getBeginOfYear(date) {
  var year = getYear(date);
  return new Date(year, 0, 1);
};
/**
 * Returns the end of a given year.
 *
 * @param {Date} date Date.
 */


exports.getBeginOfYear = getBeginOfYear;

var getEndOfYear = function getEndOfYear(date) {
  var year = getYear(date);
  return new Date(year + 1, 0, 1, 0, 0, 0, -1);
};
/**
 * Returns an array with the beginning and the end of a given year.
 *
 * @param {Date} date Date.
 */


exports.getEndOfYear = getEndOfYear;

var getYearRange = function getYearRange(date) {
  return [getBeginOfYear(date), getEndOfYear(date)];
};

exports.getYearRange = getYearRange;

var getBeginOfPreviousYear = function getBeginOfPreviousYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousYear = getYear(date) - offset;
  return getBeginOfYear(previousYear);
};

exports.getBeginOfPreviousYear = getBeginOfPreviousYear;

var getEndOfPreviousYear = function getEndOfPreviousYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousYear = getYear(date) - offset;
  return getEndOfYear(previousYear);
};

exports.getEndOfPreviousYear = getEndOfPreviousYear;

var getBeginOfNextYear = function getBeginOfNextYear(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var nextYear = getYear(date) + offset;
  return getBeginOfYear(nextYear);
};
/**
 * Returns the beginning of a given month.
 *
 * @param {Date} date Date.
 */


exports.getBeginOfNextYear = getBeginOfNextYear;

var getBeginOfMonth = function getBeginOfMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex, 1);
};
/**
 * Returns the end of a given month.
 *
 * @param {Date} date Date.
 */


exports.getBeginOfMonth = getBeginOfMonth;

var getEndOfMonth = function getEndOfMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex + 1, 1, 0, 0, 0, -1);
};
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */


exports.getEndOfMonth = getEndOfMonth;

var getBeginOfWeek = function getBeginOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
};
/**
 * Returns an array with the beginning and the end of a given month.
 *
 * @param {Date} date Date.
 */


exports.getBeginOfWeek = getBeginOfWeek;

var getMonthRange = function getMonthRange(date) {
  return [getBeginOfMonth(date), getEndOfMonth(date)];
};

exports.getMonthRange = getMonthRange;

var getDifferentMonth = function getDifferentMonth(date, offset) {
  var year = getYear(date);
  var previousMonthIndex = getMonthIndex(date) + offset;
  return new Date(year, previousMonthIndex, 1);
};

var getBeginOfPreviousMonth = function getBeginOfPreviousMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousMonth = getDifferentMonth(date, -offset);
  return getBeginOfMonth(previousMonth);
};

exports.getBeginOfPreviousMonth = getBeginOfPreviousMonth;

var getEndOfPreviousMonth = function getEndOfPreviousMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var previousMonth = getDifferentMonth(date, -offset);
  return getEndOfMonth(previousMonth);
};

exports.getEndOfPreviousMonth = getEndOfPreviousMonth;

var getBeginOfNextMonth = function getBeginOfNextMonth(date) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var nextMonth = getDifferentMonth(date, offset);
  return getBeginOfMonth(nextMonth);
};

exports.getBeginOfNextMonth = getBeginOfNextMonth;

var getBeginOfDay = function getBeginOfDay(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = getDay(date);
  return new Date(year, monthIndex, day);
};

exports.getBeginOfDay = getBeginOfDay;

var getEndOfDay = function getEndOfDay(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = getDay(date);
  return new Date(year, monthIndex, day + 1, 0, 0, 0, -1);
};
/**
 * Returns an array with the beginning and the end of a given day.
 *
 * @param {Date} date Date.
 */


exports.getEndOfDay = getEndOfDay;

var getDayRange = function getDayRange(date) {
  return [getBeginOfDay(date), getEndOfDay(date)];
};
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */


exports.getDayRange = getDayRange;

var getWeekNumber = function getWeekNumber(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var calendarTypeForWeekNumber = calendarType === 'US' ? 'US' : 'ISO 8601';
  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek; // Look for the first week one that does not come after a given date

  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === 'ISO 8601' ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
    year -= 1;
  } while (date - beginOfFirstWeek < 0);

  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
};
/**
 * Returns the beginning of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */


exports.getWeekNumber = getWeekNumber;

var getBegin = function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfCentury(date);

    case 'decade':
      return getBeginOfDecade(date);

    case 'year':
      return getBeginOfYear(date);

    case 'month':
      return getBeginOfMonth(date);

    case 'day':
      return getBeginOfDay(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};

exports.getBegin = getBegin;

var getBeginPrevious = function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfPreviousCentury(date);

    case 'decade':
      return getBeginOfPreviousDecade(date);

    case 'year':
      return getBeginOfPreviousYear(date);

    case 'month':
      return getBeginOfPreviousMonth(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};

exports.getBeginPrevious = getBeginPrevious;

var getBeginNext = function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getBeginOfNextCentury(date);

    case 'decade':
      return getBeginOfNextDecade(date);

    case 'year':
      return getBeginOfNextYear(date);

    case 'month':
      return getBeginOfNextMonth(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};

exports.getBeginNext = getBeginNext;

var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getBeginOfPreviousDecade(date, 100);

    case 'year':
      return getBeginOfPreviousYear(date, 10);

    case 'month':
      return getBeginOfPreviousMonth(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};

exports.getBeginPrevious2 = getBeginPrevious2;

var getBeginNext2 = function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getBeginOfNextDecade(date, 100);

    case 'year':
      return getBeginOfNextYear(date, 10);

    case 'month':
      return getBeginOfNextMonth(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */


exports.getBeginNext2 = getBeginNext2;

var getEnd = function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getEndOfCentury(date);

    case 'decade':
      return getEndOfDecade(date);

    case 'year':
      return getEndOfYear(date);

    case 'month':
      return getEndOfMonth(date);

    case 'day':
      return getEndOfDay(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};

exports.getEnd = getEnd;

var getEndPrevious = function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getEndOfPreviousCentury(date);

    case 'decade':
      return getEndOfPreviousDecade(date);

    case 'year':
      return getEndOfPreviousYear(date);

    case 'month':
      return getEndOfPreviousMonth(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};

exports.getEndPrevious = getEndPrevious;

var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getEndOfPreviousDecade(date, 100);

    case 'year':
      return getEndOfPreviousYear(date, 10);

    case 'month':
      return getEndOfPreviousMonth(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */


exports.getEndPrevious2 = getEndPrevious2;

var getRange = function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyRange(date);

    case 'decade':
      return getDecadeRange(date);

    case 'year':
      return getYearRange(date);

    case 'month':
      return getMonthRange(date);

    case 'day':
      return getDayRange(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */


exports.getRange = getRange;

var getValueRange = function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a - b;
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
};
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */


exports.getValueRange = getValueRange;

var getDaysInMonth = function getDaysInMonth(date) {
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  return new Date(year, monthIndex + 1, 0).getDate();
};

exports.getDaysInMonth = getDaysInMonth;

var toYearLabel = function toYearLabel(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      start = _ref2[0],
      end = _ref2[1];

  return "".concat(getYear(start), " \u2013 ").concat(getYear(end));
};
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


var getCenturyLabel = function getCenturyLabel(date) {
  return toYearLabel(getCenturyRange(date));
};
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


exports.getCenturyLabel = getCenturyLabel;

var getDecadeLabel = function getDecadeLabel(date) {
  return toYearLabel(getDecadeRange(date));
};
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */


exports.getDecadeLabel = getDecadeLabel;

var isWeekend = function isWeekend(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
  var weekday = date.getDay();

  switch (calendarType) {
    case 'Arabic':
    case 'Hebrew':
      return weekday === FRIDAY || weekday === SATURDAY;

    case 'ISO 8601':
    case 'US':
      return weekday === SATURDAY || weekday === SUNDAY;

    default:
      throw new Error('Unsupported calendar type.');
  }
};
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */


exports.isWeekend = isWeekend;

var getISOLocalMonth = function getISOLocalMonth(value) {
  if (!value) {
    return value;
  }

  var date = new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  var year = getYear(date);
  var month = "0".concat(getMonth(date)).slice(-2);
  return "".concat(year, "-").concat(month);
};
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */


exports.getISOLocalMonth = getISOLocalMonth;

var getISOLocalDate = function getISOLocalDate(value) {
  if (!value) {
    return value;
  }

  var date = new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  var year = getYear(date);
  var month = "0".concat(getMonth(date)).slice(-2);
  var day = "0".concat(getDay(date)).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day);
};

exports.getISOLocalDate = getISOLocalDate;
});

unwrapExports(dates);
var dates_1 = dates.getISOLocalDate;
var dates_2 = dates.getISOLocalMonth;
var dates_3 = dates.isWeekend;
var dates_4 = dates.getDecadeLabel;
var dates_5 = dates.getCenturyLabel;
var dates_6 = dates.getDaysInMonth;
var dates_7 = dates.getValueRange;
var dates_8 = dates.getRange;
var dates_9 = dates.getEndPrevious2;
var dates_10 = dates.getEndPrevious;
var dates_11 = dates.getEnd;
var dates_12 = dates.getBeginNext2;
var dates_13 = dates.getBeginPrevious2;
var dates_14 = dates.getBeginNext;
var dates_15 = dates.getBeginPrevious;
var dates_16 = dates.getBegin;
var dates_17 = dates.getWeekNumber;
var dates_18 = dates.getDayRange;
var dates_19 = dates.getEndOfDay;
var dates_20 = dates.getBeginOfDay;
var dates_21 = dates.getBeginOfNextMonth;
var dates_22 = dates.getEndOfPreviousMonth;
var dates_23 = dates.getBeginOfPreviousMonth;
var dates_24 = dates.getMonthRange;
var dates_25 = dates.getBeginOfWeek;
var dates_26 = dates.getEndOfMonth;
var dates_27 = dates.getBeginOfMonth;
var dates_28 = dates.getBeginOfNextYear;
var dates_29 = dates.getEndOfPreviousYear;
var dates_30 = dates.getBeginOfPreviousYear;
var dates_31 = dates.getYearRange;
var dates_32 = dates.getEndOfYear;
var dates_33 = dates.getBeginOfYear;
var dates_34 = dates.getBeginOfNextDecade;
var dates_35 = dates.getEndOfPreviousDecade;
var dates_36 = dates.getBeginOfPreviousDecade;
var dates_37 = dates.getDecadeRange;
var dates_38 = dates.getEndOfDecade;
var dates_39 = dates.getBeginOfDecade;
var dates_40 = dates.getBeginOfDecadeYear;
var dates_41 = dates.getBeginOfNextCentury;
var dates_42 = dates.getEndOfPreviousCentury;
var dates_43 = dates.getBeginOfPreviousCentury;
var dates_44 = dates.getCenturyRange;
var dates_45 = dates.getEndOfCentury;
var dates_46 = dates.getBeginOfCentury;
var dates_47 = dates.getBeginOfCenturyYear;
var dates_48 = dates.getDayOfWeek;
var dates_49 = dates.getDay;
var dates_50 = dates.getMonthIndex;
var dates_51 = dates.getMonth;
var dates_52 = dates.getYear;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_once = once;

var entry$6 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getUserLocale = exports.getUserLocales = void 0;

var _lodash = _interopRequireDefault(lodash_once);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function filterDuplicates(arr) {
  return arr.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  });
}

function fixLowercaseProperties(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
  });
}

var getUserLocales = (0, _lodash["default"])(function () {
  var languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList = languageList.concat(window.navigator.languages);
    }

    if (window.navigator.language) {
      languageList.push(window.navigator.language);
    }

    if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }

    if (window.navigator.browserLanguage) {
      languageList.push(window.navigator.browserLanguage);
    }

    if (window.navigator.systemLanguage) {
      languageList.push(window.navigator.systemLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return fixLowercaseProperties(filterDuplicates(languageList));
});
exports.getUserLocales = getUserLocales;
var getUserLocale = (0, _lodash["default"])(function () {
  return getUserLocales()[0];
});
exports.getUserLocale = getUserLocale;
var _default = getUserLocale;
exports["default"] = _default;
});

unwrapExports(entry$6);
var entry_1$1 = entry$6.getUserLocale;
var entry_2$1 = entry$6.getUserLocales;

var dateFormatter = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatShortWeekday = exports.formatWeekday = exports.formatMonth = exports.formatMonthYear = exports.formatLongDate = exports.formatDate = void 0;

var _getUserLocale = _interopRequireDefault(entry$6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFormatter = function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale.default)(), options);
  };
};
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


var toSafeHour = function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
};

var getSafeFormatter = function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
};

var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatDate = getSafeFormatter(formatDateOptions);
exports.formatDate = formatDate;
var formatLongDate = getSafeFormatter(formatLongDateOptions);
exports.formatLongDate = formatLongDate;
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
exports.formatMonthYear = formatMonthYear;
var formatMonth = getSafeFormatter(formatMonthOptions);
exports.formatMonth = formatMonth;
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
exports.formatWeekday = formatWeekday;
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
exports.formatShortWeekday = formatShortWeekday;
});

unwrapExports(dateFormatter);
var dateFormatter_1 = dateFormatter.formatShortWeekday;
var dateFormatter_2 = dateFormatter.formatWeekday;
var dateFormatter_3 = dateFormatter.formatMonth;
var dateFormatter_4 = dateFormatter.formatMonthYear;
var dateFormatter_5 = dateFormatter.formatLongDate;
var dateFormatter_6 = dateFormatter.formatDate;

var propTypes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tileProps = exports.tileGroupProps = exports.isView = exports.isClassName = exports.isViews = exports.isValue = exports.isMaxDate = exports.isMinDate = exports.isCalendarType = void 0;

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var calendarTypes = ['ISO 8601', 'US', 'Arabic', 'Hebrew'];
var allViews = ['century', 'decade', 'year', 'month'];

var isCalendarType = _propTypes.default.oneOf(calendarTypes);

exports.isCalendarType = isCalendarType;

var isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];

  if (minDate) {
    if (!(minDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var maxDate = props.maxDate;

    if (maxDate && minDate > maxDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
    }
  } // Everything is fine


  return null;
};

exports.isMinDate = isMinDate;

var isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];

  if (maxDate) {
    if (!(maxDate instanceof Date)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    }

    var minDate = props.minDate;

    if (minDate && maxDate < minDate) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
    }
  } // Everything is fine


  return null;
};

exports.isMaxDate = isMaxDate;

var isValue = _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date))]);

exports.isValue = isValue;

var isViews = _propTypes.default.arrayOf(_propTypes.default.oneOf(allViews));

exports.isViews = isViews;

var isClassName = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]);

exports.isClassName = isClassName;

var isView = function isView(props, propName, componentName) {
  var view = props[propName];
  var views = props.views;
  var allowedViews = views || allViews;

  if (allowedViews.indexOf(view) === -1) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(['a', 'b', 'c', 'd', 'e'].map(function (a) {
      return "\"".concat(a, "\"");
    }).join(', '), "]."));
  } // Everything is fine


  return null;
};

exports.isView = isView;

isView.isRequired = function (props, propName, componentName) {
  var view = props[propName];

  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }

  return isView(props, propName, componentName);
};

var tileGroupProps = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  hover: _propTypes.default.instanceOf(Date),
  locale: _propTypes.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  value: isValue,
  valueType: _propTypes.default.string
};
exports.tileGroupProps = tileGroupProps;
var tileProps = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  classes: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  date: _propTypes.default.instanceOf(Date).isRequired,
  locale: _propTypes.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  tileDisabled: _propTypes.default.func
};
exports.tileProps = tileProps;
});

unwrapExports(propTypes);
var propTypes_1 = propTypes.tileProps;
var propTypes_2 = propTypes.tileGroupProps;
var propTypes_3 = propTypes.isView;
var propTypes_4 = propTypes.isClassName;
var propTypes_5 = propTypes.isViews;
var propTypes_6 = propTypes.isValue;
var propTypes_7 = propTypes.isMaxDate;
var propTypes_8 = propTypes.isMinDate;
var propTypes_9 = propTypes.isCalendarType;

var Navigation_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = 'react-calendar__navigation';

function Navigation(_ref) {
  var date = _ref.activeStartDate,
      drillUp = _ref.drillUp,
      formatMonthYear = _ref.formatMonthYear,
      locale = _ref.locale,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      navigationAriaLabel = _ref.navigationAriaLabel,
      navigationLabel = _ref.navigationLabel,
      next2AriaLabel = _ref.next2AriaLabel,
      next2Label = _ref.next2Label,
      nextAriaLabel = _ref.nextAriaLabel,
      nextLabel = _ref.nextLabel,
      prev2AriaLabel = _ref.prev2AriaLabel,
      prev2Label = _ref.prev2Label,
      prevAriaLabel = _ref.prevAriaLabel,
      prevLabel = _ref.prevLabel,
      setActiveStartDate = _ref.setActiveStartDate,
      view = _ref.view,
      views = _ref.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== 'century';
  var previousActiveStartDate = (0, dates.getBeginPrevious)(view, date);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons && (0, dates.getBeginPrevious2)(view, date);
  var nextActiveStartDate = (0, dates.getBeginNext)(view, date);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons && (0, dates.getBeginNext2)(view, date);

  var prevButtonDisabled = function () {
    if (previousActiveStartDate.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = (0, dates.getEndPrevious)(view, date);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
    if (previousActiveStartDate2.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = (0, dates.getEndPrevious2)(view, date);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var nextButtonDisabled = maxDate && maxDate <= nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate <= nextActiveStartDate2;

  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate);
  }

  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2);
  }

  function onClickNext() {
    setActiveStartDate(nextActiveStartDate);
  }

  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2);
  }

  var label = function () {
    switch (view) {
      case 'century':
        return (0, dates.getCenturyLabel)(date);

      case 'decade':
        return (0, dates.getDecadeLabel)(date);

      case 'year':
        return (0, dates.getYear)(date);

      case 'month':
        return formatMonthYear(locale, date);

      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }();

  return _react.default.createElement("div", {
    className: className,
    style: {
      display: 'flex'
    }
  }, prev2Label !== null && shouldShowPrevNext2Buttons && _react.default.createElement("button", {
    className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
    disabled: prev2ButtonDisabled,
    onClick: onClickPrevious2,
    type: "button",
    "aria-label": prev2AriaLabel
  }, prev2Label), _react.default.createElement("button", {
    className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
    disabled: prevButtonDisabled,
    onClick: onClickPrevious,
    type: "button",
    "aria-label": prevAriaLabel
  }, prevLabel), _react.default.createElement("button", {
    className: "react-calendar__navigation__label",
    onClick: drillUp,
    disabled: !drillUpAvailable,
    style: {
      flexGrow: 1
    },
    type: "button",
    "aria-label": navigationAriaLabel
  }, navigationLabel ? navigationLabel({
    date: date,
    view: view,
    label: label
  }) : label), _react.default.createElement("button", {
    className: "".concat(className, "__arrow ").concat(className, "__next-button"),
    disabled: nextButtonDisabled,
    onClick: onClickNext,
    type: "button",
    "aria-label": nextAriaLabel
  }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons && _react.default.createElement("button", {
    className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
    disabled: next2ButtonDisabled,
    onClick: onClickNext2,
    type: "button",
    "aria-label": next2AriaLabel
  }, next2Label));
}

Navigation.defaultProps = {
  formatMonthYear: dateFormatter.formatMonthYear,
  navigationAriaLabel: '',
  next2AriaLabel: '',
  next2Label: '»',
  nextAriaLabel: '',
  nextLabel: '›',
  prev2AriaLabel: '',
  prev2Label: '«',
  prevAriaLabel: '',
  prevLabel: '‹'
};
Navigation.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  drillUp: _propTypes.default.func.isRequired,
  formatMonthYear: _propTypes.default.func,
  locale: _propTypes.default.string,
  maxDate: _propTypes.default.instanceOf(Date),
  minDate: _propTypes.default.instanceOf(Date),
  next2AriaLabel: _propTypes.default.string,
  next2Label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  nextAriaLabel: _propTypes.default.string,
  nextLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  navigationAriaLabel: _propTypes.default.string,
  navigationLabel: _propTypes.default.func,
  prev2AriaLabel: _propTypes.default.string,
  prev2Label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  prevAriaLabel: _propTypes.default.string,
  prevLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  setActiveStartDate: _propTypes.default.func.isRequired,
  view: propTypes.isView.isRequired,
  views: propTypes.isViews.isRequired
};
});

unwrapExports(Navigation_1);

var Flex_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Flex;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function toPercent(num) {
  return "".concat(num, "%");
}

function Flex(_ref) {
  var children = _ref.children,
      className = _ref.className,
      direction = _ref.direction,
      count = _ref.count,
      offset = _ref.offset,
      style = _ref.style,
      wrap = _ref.wrap,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "direction", "count", "offset", "style", "wrap"]);

  return _react.default.createElement("div", _extends({
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'no-wrap'
    }, style)
  }, otherProps), _react.default.Children.map(children, function (child, index) {
    return _react.default.cloneElement(child, _objectSpread({}, child.props, {
      style: {
        flexBasis: toPercent(100 / count),
        maxWidth: toPercent(100 / count),
        overflow: 'hidden',
        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
      }
    }));
  }));
}

Flex.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  count: _propTypes.default.number.isRequired,
  direction: _propTypes.default.string,
  offset: _propTypes.default.number,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  wrap: _propTypes.default.bool
};
});

unwrapExports(Flex_1);

var utils$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTileClasses = exports.between = exports.doRangesOverlap = exports.isRangeWithinRange = exports.isValueWithinRange = exports.callIfDefined = exports.mergeFunctions = void 0;



/**
 * Returns a function that, when called, calls all the functions
 * passed to it, applying its arguments to them.
 *
 * @param {Function[]} functions
 */
var mergeFunctions = function mergeFunctions() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return functions.filter(Boolean).forEach(function (f) {
      return f.apply(void 0, args);
    });
  };
};
/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */


exports.mergeFunctions = mergeFunctions;

var callIfDefined = function callIfDefined(fn) {
  if (fn && typeof fn === 'function') {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    fn.apply(void 0, args);
  }
};

exports.callIfDefined = callIfDefined;

var isValueWithinRange = function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
};

exports.isValueWithinRange = isValueWithinRange;

var isRangeWithinRange = function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
};

exports.isRangeWithinRange = isRangeWithinRange;

var doRangesOverlap = function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
};
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */


exports.doRangesOverlap = doRangesOverlap;

var between = function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
};

exports.between = between;

var getTileClasses = function getTileClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      valueType = _ref.valueType,
      date = _ref.date,
      dateType = _ref.dateType,
      hover = _ref.hover;

  var className = 'react-calendar__tile';
  var classes = [className];

  if (!date) {
    return classes;
  }

  if (!(date instanceof Array) && !dateType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var now = new Date();
  var dateRange = date instanceof Array ? date : (0, dates.getRange)(dateType, date);

  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className, "--now"));
  }

  if (!value) {
    return classes;
  }

  if (!(value instanceof Array) && !valueType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var valueRange = value instanceof Array ? value : (0, dates.getRange)(valueType, value);

  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className, "--hasActive"));
  } else if (hover && ( // Date before value
  dateRange[1] < valueRange[0] && isRangeWithinRange([hover, valueRange[0]], dateRange) || // Date after value
  dateRange[0] > valueRange[1] && isRangeWithinRange([valueRange[1], hover], dateRange))) {
    classes.push("".concat(className, "--hover"));
  }

  var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
  var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

  if (isRangeStart) {
    classes.push("".concat(className, "--rangeStart"));
  }

  if (isRangeEnd) {
    classes.push("".concat(className, "--rangeEnd"));
  }

  if (isRangeStart && isRangeEnd) {
    classes.push("".concat(className, "--rangeBothEnds"));
  }

  return classes;
};

exports.getTileClasses = getTileClasses;
});

unwrapExports(utils$2);
var utils_1$1 = utils$2.getTileClasses;
var utils_2$1 = utils$2.between;
var utils_3 = utils$2.doRangesOverlap;
var utils_4 = utils$2.isRangeWithinRange;
var utils_5 = utils$2.isValueWithinRange;
var utils_6 = utils$2.callIfDefined;
var utils_7 = utils$2.mergeFunctions;

var TileGroup_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Flex = _interopRequireDefault(Flex_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TileGroup = function TileGroup(_ref) {
  var className = _ref.className,
      count = _ref.count,
      dateTransform = _ref.dateTransform,
      dateType = _ref.dateType,
      end = _ref.end,
      hover = _ref.hover,
      offset = _ref.offset,
      start = _ref.start,
      step = _ref.step,
      Tile = _ref.tile,
      value = _ref.value,
      valueType = _ref.valueType,
      tileProps = _objectWithoutProperties(_ref, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);

  var tiles = [];

  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(_react.default.createElement(Tile, _extends({
      classes: (0, utils$2.getTileClasses)({
        value: value,
        valueType: valueType,
        date: date,
        dateType: dateType,
        hover: hover
      }),
      date: date,
      point: point,
      key: date.getTime()
    }, tileProps)));
  }

  return _react.default.createElement(_Flex.default, {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
};

TileGroup.propTypes = _objectSpread({}, propTypes.tileGroupProps, {
  activeStartDate: _propTypes.default.instanceOf(Date),
  count: _propTypes.default.number,
  dateTransform: _propTypes.default.func.isRequired,
  offset: _propTypes.default.number,
  tile: _propTypes.default.func.isRequired,
  step: _propTypes.default.number
});
TileGroup.defaultProps = {
  count: 3,
  step: 1
};
var _default = TileGroup;
exports.default = _default;
});

unwrapExports(TileGroup_1);

var Tile_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _mergeClassNames = _interopRequireDefault(entry$2);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tile =
/*#__PURE__*/
function (_Component) {
  _inherits(Tile, _Component);

  function Tile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeStartDate = _this$props.activeStartDate,
          children = _this$props.children,
          classes = _this$props.classes,
          date = _this$props.date,
          formatAbbr = _this$props.formatAbbr,
          locale = _this$props.locale,
          maxDate = _this$props.maxDate,
          maxDateTransform = _this$props.maxDateTransform,
          minDate = _this$props.minDate,
          minDateTransform = _this$props.minDateTransform,
          onClick = _this$props.onClick,
          onMouseOver = _this$props.onMouseOver,
          style = _this$props.style,
          tileDisabled = _this$props.tileDisabled,
          view = _this$props.view;
      var _this$state = this.state,
          tileClassName = _this$state.tileClassName,
          tileContent = _this$state.tileContent;
      return _react.default.createElement("button", {
        className: (0, _mergeClassNames.default)(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
          activeStartDate: activeStartDate,
          date: date,
          view: view
        }),
        onClick: onClick && function () {
          return onClick(date);
        },
        onMouseOver: onMouseOver && function () {
          return onMouseOver(date);
        },
        onFocus: onMouseOver && function () {
          return onMouseOver(date);
        },
        style: style,
        type: "button"
      }, formatAbbr ? _react.default.createElement("abbr", {
        "aria-label": formatAbbr(locale, date)
      }, children) : children, tileContent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var date = nextProps.date,
          tileClassName = nextProps.tileClassName,
          tileContent = nextProps.tileContent,
          view = nextProps.view;
      var nextState = {};

      if (tileClassName !== prevState.tileClassNameProps) {
        nextState.tileClassName = typeof tileClassName === 'function' ? tileClassName({
          date: date,
          view: view
        }) : tileClassName;
        nextState.tileClassNameProps = tileClassName;
      }

      if (tileContent !== prevState.tileContentProps) {
        nextState.tileContent = typeof tileContent === 'function' ? tileContent({
          date: date,
          view: view
        }) : tileContent;
        nextState.tileContentProps = tileContent;
      }

      return nextState;
    }
  }]);

  return Tile;
}(_react.Component);

exports.default = Tile;
Tile.propTypes = _objectSpread({}, propTypes.tileProps, {
  children: _propTypes.default.node.isRequired,
  formatAbbr: _propTypes.default.func,
  maxDateTransform: _propTypes.default.func.isRequired,
  minDateTransform: _propTypes.default.func.isRequired
});
});

unwrapExports(Tile_1);

var Decade_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Decade;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Tile = _interopRequireDefault(Tile_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__century-view__decades__decade';

function Decade(_ref) {
  var classes = _ref.classes,
      point = _ref.point,
      otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);

  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: dates.getEndOfDecade,
    minDateTransform: dates.getBeginOfDecade,
    view: "century"
  }), (0, dates.getDecadeLabel)(point));
}

Decade.propTypes = _objectSpread({}, propTypes.tileProps, {
  point: _propTypes.default.number.isRequired
});
});

unwrapExports(Decade_1);

var Decades_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Decades;

var _react = _interopRequireDefault(React__default);

var _TileGroup = _interopRequireDefault(TileGroup_1);

var _Decade = _interopRequireDefault(Decade_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Decades(props) {
  var activeStartDate = props.activeStartDate;
  var start = (0, dates.getBeginOfCenturyYear)(activeStartDate);
  var end = start + 99;
  return _react.default.createElement(_TileGroup.default, _extends({}, props, {
    className: "react-calendar__century-view__decades",
    dateTransform: dates.getBeginOfDecade,
    dateType: "decade",
    end: end,
    start: start,
    step: 10,
    tile: _Decade.default
  }));
}

Decades.propTypes = _objectSpread({}, propTypes.tileGroupProps);
});

unwrapExports(Decades_1);

var CenturyView_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Decades = _interopRequireDefault(Decades_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CenturyView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CenturyView, _PureComponent);

  function CenturyView() {
    _classCallCheck(this, CenturyView);

    return _possibleConstructorReturn(this, _getPrototypeOf(CenturyView).apply(this, arguments));
  }

  _createClass(CenturyView, [{
    key: "renderDecades",
    value: function renderDecades() {
      return _react.default.createElement(_Decades.default, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "react-calendar__century-view"
      }, this.renderDecades());
    }
  }]);

  return CenturyView;
}(_react.PureComponent);

exports.default = CenturyView;
CenturyView.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  locale: _propTypes.default.string,
  maxDate: propTypes.isMaxDate,
  minDate: propTypes.isMinDate,
  onChange: _propTypes.default.func,
  setActiveRange: _propTypes.default.func,
  value: propTypes.isValue,
  valueType: _propTypes.default.string
};
});

unwrapExports(CenturyView_1);

var Year_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Year;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Tile = _interopRequireDefault(Tile_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__decade-view__years__year';

function Year(_ref) {
  var classes = _ref.classes,
      point = _ref.point,
      otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);

  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: dates.getEndOfYear,
    minDateTransform: dates.getBeginOfYear,
    view: "decade"
  }), point);
}

Year.propTypes = _objectSpread({}, propTypes.tileProps, {
  point: _propTypes.default.number.isRequired
});
});

unwrapExports(Year_1);

var Years_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Years;

var _react = _interopRequireDefault(React__default);

var _TileGroup = _interopRequireDefault(TileGroup_1);

var _Year = _interopRequireDefault(Year_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = (0, dates.getBeginOfDecadeYear)(activeStartDate);
  var end = start + 9;
  return _react.default.createElement(_TileGroup.default, _extends({}, props, {
    className: "react-calendar__decade-view__years",
    dateTransform: function dateTransform(year) {
      return new Date(year, 0, 1);
    },
    dateType: "year",
    end: end,
    start: start,
    tile: _Year.default
  }));
}

Years.propTypes = _objectSpread({}, propTypes.tileGroupProps);
});

unwrapExports(Years_1);

var DecadeView_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Years = _interopRequireDefault(Years_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DecadeView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DecadeView, _PureComponent);

  function DecadeView() {
    _classCallCheck(this, DecadeView);

    return _possibleConstructorReturn(this, _getPrototypeOf(DecadeView).apply(this, arguments));
  }

  _createClass(DecadeView, [{
    key: "renderYears",
    value: function renderYears() {
      return _react.default.createElement(_Years.default, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "react-calendar__decade-view"
      }, this.renderYears());
    }
  }]);

  return DecadeView;
}(_react.PureComponent);

exports.default = DecadeView;
DecadeView.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  locale: _propTypes.default.string,
  maxDate: propTypes.isMaxDate,
  minDate: propTypes.isMinDate,
  onChange: _propTypes.default.func,
  setActiveRange: _propTypes.default.func,
  value: propTypes.isValue,
  valueType: _propTypes.default.string
};
});

unwrapExports(DecadeView_1);

var Month_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Month;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Tile = _interopRequireDefault(Tile_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__year-view__months__month';

function Month(_ref) {
  var classes = _ref.classes,
      date = _ref.date,
      formatMonth = _ref.formatMonth,
      locale = _ref.locale,
      otherProps = _objectWithoutProperties(_ref, ["classes", "date", "formatMonth", "locale"]);

  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
    classes: [].concat(classes, className),
    date: date,
    formatAbbr: dateFormatter.formatMonthYear,
    locale: locale,
    maxDateTransform: dates.getEndOfMonth,
    minDateTransform: dates.getBeginOfMonth,
    view: "year"
  }), formatMonth(locale, date));
}

Month.defaultProps = {
  formatMonth: dateFormatter.formatMonth
};
Month.propTypes = _objectSpread({}, propTypes.tileProps, {
  formatMonth: _propTypes.default.func
});
});

unwrapExports(Month_1);

var Months_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Months;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _TileGroup = _interopRequireDefault(TileGroup_1);

var _Month = _interopRequireDefault(Month_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Months(props) {
  var activeStartDate = props.activeStartDate;
  var start = 0;
  var end = 11;
  var year = (0, dates.getYear)(activeStartDate);
  return _react.default.createElement(_TileGroup.default, _extends({}, props, {
    className: "react-calendar__year-view__months",
    dateTransform: function dateTransform(monthIndex) {
      return new Date(year, monthIndex, 1);
    },
    dateType: "month",
    end: end,
    start: start,
    tile: _Month.default
  }));
}

Months.propTypes = _objectSpread({}, propTypes.tileGroupProps, {
  locale: _propTypes.default.string
});
});

unwrapExports(Months_1);

var YearView_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Months = _interopRequireDefault(Months_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var YearView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(YearView, _PureComponent);

  function YearView() {
    _classCallCheck(this, YearView);

    return _possibleConstructorReturn(this, _getPrototypeOf(YearView).apply(this, arguments));
  }

  _createClass(YearView, [{
    key: "renderMonths",
    value: function renderMonths() {
      return _react.default.createElement(_Months.default, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "react-calendar__year-view"
      }, this.renderMonths());
    }
  }]);

  return YearView;
}(_react.PureComponent);

exports.default = YearView;
YearView.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  formatMonth: _propTypes.default.func,
  locale: _propTypes.default.string,
  maxDate: propTypes.isMaxDate,
  minDate: propTypes.isMinDate,
  onChange: _propTypes.default.func,
  setActiveRange: _propTypes.default.func,
  value: propTypes.isValue,
  valueType: _propTypes.default.string
};
});

unwrapExports(YearView_1);

var Day_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Day;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Tile = _interopRequireDefault(Tile_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var className = 'react-calendar__month-view__days__day';

function Day(_ref) {
  var calendarType = _ref.calendarType,
      classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      date = _ref.date,
      otherProps = _objectWithoutProperties(_ref, ["calendarType", "classes", "currentMonthIndex", "date"]);

  return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
    classes: [].concat(classes, className, (0, dates.isWeekend)(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null),
    date: date,
    formatAbbr: dateFormatter.formatLongDate,
    maxDateTransform: dates.getEndOfDay,
    minDateTransform: dates.getBeginOfDay,
    view: "month"
  }), (0, dates.getDay)(date));
}

Day.propTypes = _objectSpread({}, propTypes.tileProps, {
  currentMonthIndex: _propTypes.default.number.isRequired
});
});

unwrapExports(Day_1);

var Days_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Days;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _TileGroup = _interopRequireDefault(TileGroup_1);

var _Day = _interopRequireDefault(Day_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Days(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType;

  var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
      showNeighboringMonth = props.showNeighboringMonth,
      otherProps = _objectWithoutProperties(props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);

  var year = (0, dates.getYear)(activeStartDate);
  var monthIndex = (0, dates.getMonthIndex)(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = (0, dates.getDayOfWeek)(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
   * Defines on which day of the month the grid shall start. If we simply show current
   * month, we obviously start on day one, but if showNeighboringMonth is set to
   * true, we need to find the beginning of the week the first day of the month is in.
   */

  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
   * Defines on which day of the month the grid shall end. If we simply show current
   * month, we need to stop on the last day of the month, but if showNeighboringMonth
   * is set to true, we need to find the end of the week the last day of the month is in.
   */

  var end = function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }

    var daysInMonth = (0, dates.getDaysInMonth)(activeStartDate);

    if (showNeighboringMonth) {
      var activeEndDate = new Date(year, monthIndex, daysInMonth);
      return daysInMonth + (7 - (0, dates.getDayOfWeek)(activeEndDate, calendarType) - 1);
    }

    return daysInMonth;
  }();

  return _react.default.createElement(_TileGroup.default, _extends({}, otherProps, {
    className: "react-calendar__month-view__days",
    count: 7,
    dateTransform: function dateTransform(day) {
      return new Date(year, monthIndex, day);
    },
    dateType: "day",
    end: end,
    offset: offset,
    start: start,
    tile: _Day.default // Tile props
    ,
    currentMonthIndex: monthIndex
  }));
}

Days.propTypes = _objectSpread({
  calendarType: propTypes.isCalendarType.isRequired,
  showFixedNumberOfWeeks: _propTypes.default.bool,
  showNeighboringMonth: _propTypes.default.bool
}, propTypes.tileGroupProps);
});

unwrapExports(Days_1);

var Weekdays_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Weekdays;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Flex = _interopRequireDefault(Flex_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Weekdays(props) {
  var calendarType = props.calendarType,
      formatShortWeekday = props.formatShortWeekday,
      locale = props.locale;
  var anyDate = new Date();
  var beginOfMonth = (0, dates.getBeginOfMonth)(anyDate);
  var year = (0, dates.getYear)(beginOfMonth);
  var monthIndex = (0, dates.getMonthIndex)(beginOfMonth);
  var weekdays = [];

  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - (0, dates.getDayOfWeek)(beginOfMonth, calendarType));
    var abbr = (0, dateFormatter.formatWeekday)(locale, weekdayDate);
    weekdays.push(_react.default.createElement("div", {
      className: "react-calendar__month-view__weekdays__weekday",
      key: weekday
    }, _react.default.createElement("abbr", {
      title: abbr,
      "aria-label": abbr
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }

  return _react.default.createElement(_Flex.default, {
    className: "react-calendar__month-view__weekdays",
    count: 7
  }, weekdays);
}

Weekdays.defaultProps = {
  formatShortWeekday: dateFormatter.formatShortWeekday
};
Weekdays.propTypes = {
  calendarType: propTypes.isCalendarType.isRequired,
  formatShortWeekday: _propTypes.default.func,
  locale: _propTypes.default.string
};
});

unwrapExports(Weekdays_1);

var WeekNumber_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WeekNumber;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WeekNumber(_ref) {
  var date = _ref.date,
      onClickWeekNumber = _ref.onClickWeekNumber,
      weekNumber = _ref.weekNumber;
  return onClickWeekNumber ? _react.default.createElement("button", {
    className: "react-calendar__tile",
    onClick: function onClick() {
      return onClickWeekNumber(weekNumber, date);
    },
    style: {
      flexGrow: 1
    },
    type: "button"
  }, _react.default.createElement("span", null, weekNumber)) : _react.default.createElement("div", {
    className: "react-calendar__tile",
    style: {
      flexGrow: 1
    }
  }, _react.default.createElement("span", null, weekNumber));
}

WeekNumber.propTypes = {
  date: _propTypes.default.instanceOf(Date).isRequired,
  onClickWeekNumber: _propTypes.default.func,
  weekNumber: _propTypes.default.number.isRequired
};
});

unwrapExports(WeekNumber_1);

var WeekNumbers_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WeekNumbers;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _WeekNumber = _interopRequireDefault(WeekNumber_1);

var _Flex = _interopRequireDefault(Flex_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType,
      onClickWeekNumber = props.onClickWeekNumber,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var numberOfWeeks = function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }

    var numberOfDays = (0, dates.getDaysInMonth)(activeStartDate);
    var startWeekday = (0, dates.getDayOfWeek)(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();

  var dates$$1 = function () {
    var year = (0, dates.getYear)(activeStartDate);
    var monthIndex = (0, dates.getMonthIndex)(activeStartDate);
    var day = (0, dates.getDay)(activeStartDate);
    var result = [];

    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push((0, dates.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
    }

    return result;
  }();

  var weekNumbers = dates$$1.map(function (date) {
    return (0, dates.getWeekNumber)(date, calendarType);
  });
  return _react.default.createElement(_Flex.default, {
    className: "react-calendar__month-view__weekNumbers",
    count: numberOfWeeks,
    direction: "column",
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0
    }
  }, weekNumbers.map(function (weekNumber, weekIndex) {
    return _react.default.createElement(_WeekNumber.default, {
      date: dates$$1[weekIndex],
      key: weekNumber,
      onClickWeekNumber: onClickWeekNumber,
      weekNumber: weekNumber
    });
  }));
}

WeekNumbers.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  calendarType: propTypes.isCalendarType.isRequired,
  onClickWeekNumber: _propTypes.default.func,
  showFixedNumberOfWeeks: _propTypes.default.bool
};
});

unwrapExports(WeekNumbers_1);

var MonthView_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Days = _interopRequireDefault(Days_1);

var _Weekdays = _interopRequireDefault(Weekdays_1);

var _WeekNumbers = _interopRequireDefault(WeekNumbers_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MonthView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MonthView, _PureComponent);

  function MonthView() {
    _classCallCheck(this, MonthView);

    return _possibleConstructorReturn(this, _getPrototypeOf(MonthView).apply(this, arguments));
  }

  _createClass(MonthView, [{
    key: "renderWeekdays",
    value: function renderWeekdays() {
      var _this$props = this.props,
          formatShortWeekday = _this$props.formatShortWeekday,
          locale = _this$props.locale;
      return _react.default.createElement(_Weekdays.default, {
        calendarType: this.calendarType,
        locale: locale,
        formatShortWeekday: formatShortWeekday
      });
    }
  }, {
    key: "renderWeekNumbers",
    value: function renderWeekNumbers() {
      var showWeekNumbers = this.props.showWeekNumbers;

      if (!showWeekNumbers) {
        return null;
      }

      var _this$props2 = this.props,
          activeStartDate = _this$props2.activeStartDate,
          onClickWeekNumber = _this$props2.onClickWeekNumber,
          showFixedNumberOfWeeks = _this$props2.showFixedNumberOfWeeks;
      return _react.default.createElement(_WeekNumbers.default, {
        activeStartDate: activeStartDate,
        calendarType: this.calendarType,
        onClickWeekNumber: onClickWeekNumber,
        showFixedNumberOfWeeks: showFixedNumberOfWeeks
      });
    }
  }, {
    key: "renderDays",
    value: function renderDays() {
      var _this$props3 = this.props,
          calendarType = _this$props3.calendarType,
          onClickWeekNumber = _this$props3.onClickWeekNumber,
          showWeekNumbers = _this$props3.showWeekNumbers,
          childProps = _objectWithoutProperties(_this$props3, ["calendarType", "onClickWeekNumber", "showWeekNumbers"]);

      return _react.default.createElement(_Days.default, _extends({
        calendarType: this.calendarType
      }, childProps));
    }
  }, {
    key: "render",
    value: function render() {
      var showWeekNumbers = this.props.showWeekNumbers;
      var className = 'react-calendar__month-view';
      return _react.default.createElement("div", {
        className: [className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''].join(' ')
      }, _react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-end'
        }
      }, this.renderWeekNumbers(), _react.default.createElement("div", {
        style: {
          flexGrow: 1,
          width: '100%'
        }
      }, this.renderWeekdays(), this.renderDays())));
    }
  }, {
    key: "calendarType",
    get: function get() {
      var _this$props4 = this.props,
          calendarType = _this$props4.calendarType,
          locale = _this$props4.locale;

      if (calendarType) {
        return calendarType;
      }

      switch (locale) {
        case 'en-CA':
        case 'en-US':
        case 'es-AR':
        case 'es-BO':
        case 'es-CL':
        case 'es-CO':
        case 'es-CR':
        case 'es-DO':
        case 'es-EC':
        case 'es-GT':
        case 'es-HN':
        case 'es-MX':
        case 'es-NI':
        case 'es-PA':
        case 'es-PE':
        case 'es-PR':
        case 'es-SV':
        case 'es-VE':
        case 'pt-BR':
          return 'US';
        // ar-LB, ar-MA intentionally missing

        case 'ar':
        case 'ar-AE':
        case 'ar-BH':
        case 'ar-DZ':
        case 'ar-EG':
        case 'ar-IQ':
        case 'ar-JO':
        case 'ar-KW':
        case 'ar-LY':
        case 'ar-OM':
        case 'ar-QA':
        case 'ar-SA':
        case 'ar-SD':
        case 'ar-SY':
        case 'ar-YE':
        case 'dv':
        case 'dv-MV':
        case 'ps':
        case 'ps-AR':
          return 'Arabic';

        case 'he':
        case 'he-IL':
          return 'Hebrew';

        default:
          return 'ISO 8601';
      }
    }
  }]);

  return MonthView;
}(_react.PureComponent);

exports.default = MonthView;
MonthView.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
  calendarType: propTypes.isCalendarType,
  formatShortWeekday: _propTypes.default.func,
  locale: _propTypes.default.string,
  maxDate: propTypes.isMaxDate,
  minDate: propTypes.isMinDate,
  onChange: _propTypes.default.func,
  onClickWeekNumber: _propTypes.default.func,
  setActiveRange: _propTypes.default.func,
  showFixedNumberOfWeeks: _propTypes.default.bool,
  showNeighboringMonth: _propTypes.default.bool,
  showWeekNumbers: _propTypes.default.bool,
  value: propTypes.isValue,
  valueType: _propTypes.default.string
};
});

unwrapExports(MonthView_1);

var Calendar_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);



var _mergeClassNames = _interopRequireDefault(entry$2);

var _Navigation = _interopRequireDefault(Navigation_1);

var _CenturyView = _interopRequireDefault(CenturyView_1);

var _DecadeView = _interopRequireDefault(DecadeView_1);

var _YearView = _interopRequireDefault(YearView_1);

var _MonthView = _interopRequireDefault(MonthView_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

var datesAreDifferent = function datesAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
};
/**
 * Returns views array with disallowed values cut off.
 */


var getLimitedViews = function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
};

var getView = function getView(view, minDetail, maxDetail) {
  if (view && getLimitedViews(minDetail, maxDetail).indexOf(view) !== -1) {
    return view;
  }

  return getLimitedViews(minDetail, maxDetail).pop();
};
/**
 * Determines whether a given view is allowed with currently applied settings.
 */


var isViewAllowed = function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
};
/**
 * Returns value type that can be returned with currently applied settings.
 */


var getValueType = function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
};

var getValueFrom = function getValueFrom(value) {
  if (!value) {
    return null;
  }

  var rawValueFrom = value instanceof Array && value.length === 2 ? value[0] : value;

  if (!rawValueFrom) {
    return null;
  }

  var valueFromDate = new Date(rawValueFrom);

  if (isNaN(valueFromDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueFromDate;
};

var getDetailValueFrom = function getDetailValueFrom(value, minDate, maxDate, maxDetail) {
  var valueFrom = getValueFrom(value);

  if (!valueFrom) {
    return null;
  }

  var detailValueFrom = (0, dates.getBegin)(getValueType(maxDetail), valueFrom);
  return (0, utils$2.between)(detailValueFrom, minDate, maxDate);
};

var getValueTo = function getValueTo(value) {
  if (!value) {
    return null;
  }

  var rawValueTo = value instanceof Array && value.length === 2 ? value[1] : value;

  if (!rawValueTo) {
    return null;
  }

  var valueToDate = new Date(rawValueTo);

  if (isNaN(valueToDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueToDate;
};

var getDetailValueTo = function getDetailValueTo(value, minDate, maxDate, maxDetail) {
  var valueTo = getValueTo(value);

  if (!valueTo) {
    return null;
  }

  var detailValueTo = (0, dates.getEnd)(getValueType(maxDetail), valueTo);
  return (0, utils$2.between)(detailValueTo, minDate, maxDate);
};

var getDetailValueArray = function getDetailValueArray(value, minDate, maxDate, maxDetail) {
  if (value instanceof Array) {
    return value;
  }

  return [getDetailValueFrom(value, minDate, maxDate, maxDetail), getDetailValueTo(value, minDate, maxDate, maxDetail)];
};

var getActiveStartDate = function getActiveStartDate(props) {
  var activeStartDate = props.activeStartDate,
      maxDate = props.maxDate,
      maxDetail = props.maxDetail,
      minDate = props.minDate,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom(value, minDate, maxDate, maxDetail) || activeStartDate || new Date();
  return (0, dates.getBegin)(rangeType, valueFrom);
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveStartDate", function (activeStartDate) {
      var onActiveDateChange = _this.props.onActiveDateChange;

      _this.setState({
        activeStartDate: activeStartDate
      }, function () {
        var view = _this.state.view;
        (0, utils$2.callIfDefined)(onActiveDateChange, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "drillDown", function (activeStartDate) {
      if (!_this.drillDownAvailable) {
        return;
      }

      var _this$props = _this.props,
          maxDetail = _this$props.maxDetail,
          minDetail = _this$props.minDetail,
          onDrillDown = _this$props.onDrillDown;
      var views = getLimitedViews(minDetail, maxDetail);

      _this.setState(function (prevState) {
        var nextView = views[views.indexOf(prevState.view) + 1];
        return {
          activeStartDate: activeStartDate,
          view: nextView
        };
      }, function () {
        var view = _this.state.view;
        (0, utils$2.callIfDefined)(onDrillDown, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "drillUp", function () {
      if (!_this.drillUpAvailable) {
        return;
      }

      var _this$props2 = _this.props,
          maxDetail = _this$props2.maxDetail,
          minDetail = _this$props2.minDetail,
          onDrillUp = _this$props2.onDrillUp;
      var views = getLimitedViews(minDetail, maxDetail);

      _this.setState(function (prevState) {
        var nextView = views[views.indexOf(prevState.view) - 1];
        var activeStartDate = (0, dates.getBegin)(nextView, prevState.activeStartDate);
        return {
          activeStartDate: activeStartDate,
          view: nextView
        };
      }, function () {
        var _this$state = _this.state,
            activeStartDate = _this$state.activeStartDate,
            view = _this$state.view;
        (0, utils$2.callIfDefined)(onDrillUp, {
          activeStartDate: activeStartDate,
          view: view
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          selectRange = _this$props3.selectRange;
      var nextValue;
      var callback;

      if (selectRange) {
        var previousValue = _this.state.value; // Range selection turned on

        if (!previousValue || [].concat(previousValue).length !== 1 // 0 or 2 - either way we're starting a new array
        ) {
            // First value
            nextValue = (0, dates.getBegin)(_this.valueType, value);
          } else {
          // Second value
          nextValue = (0, dates.getValueRange)(_this.valueType, previousValue, value);

          callback = function callback() {
            return (0, utils$2.callIfDefined)(onChange, nextValue);
          };
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);

        callback = function callback() {
          return (0, utils$2.callIfDefined)(onChange, nextValue);
        };
      }

      _this.setState({
        value: nextValue
      }, callback);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOver", function (value) {
      _this.setState({
        hover: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOut", function () {
      _this.setState({
        hover: null
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this$props4 = this.props,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate,
          maxDetail = _this$props4.maxDetail,
          returnValue = _this$props4.returnValue;

      var processFunction = function () {
        switch (returnValue) {
          case 'start':
            return getDetailValueFrom;

          case 'end':
            return getDetailValueTo;

          case 'range':
            return getDetailValueArray;

          default:
            throw new Error('Invalid returnValue.');
        }
      }();

      return processFunction(value, minDate, maxDate, maxDetail);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props5 = this.props,
          calendarType = _this$props5.calendarType,
          locale = _this$props5.locale,
          maxDate = _this$props5.maxDate,
          minDate = _this$props5.minDate,
          renderChildren = _this$props5.renderChildren,
          selectRange = _this$props5.selectRange,
          tileClassName = _this$props5.tileClassName,
          tileContent = _this$props5.tileContent,
          tileDisabled = _this$props5.tileDisabled;
      var _this$state2 = this.state,
          activeStartDate = _this$state2.activeStartDate,
          hover = _this$state2.hover,
          value = _this$state2.value,
          view = _this$state2.view;
      var onMouseOver = this.onMouseOver,
          valueType = this.valueType;
      var commonProps = {
        activeStartDate: activeStartDate,
        hover: hover,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName: tileClassName,
        tileContent: tileContent || renderChildren,
        // For backwards compatibility
        tileDisabled: tileDisabled,
        value: value,
        valueType: valueType
      };
      var clickAction = this.drillDownAvailable ? this.drillDown : this.onChange;

      switch (view) {
        case 'century':
          {
            var onClickDecade = this.props.onClickDecade;
            return _react.default.createElement(_CenturyView.default, _extends({
              onClick: (0, utils$2.mergeFunctions)(clickAction, onClickDecade)
            }, commonProps));
          }

        case 'decade':
          {
            var onClickYear = this.props.onClickYear;
            return _react.default.createElement(_DecadeView.default, _extends({
              onClick: (0, utils$2.mergeFunctions)(clickAction, onClickYear)
            }, commonProps));
          }

        case 'year':
          {
            var _this$props6 = this.props,
                formatMonth = _this$props6.formatMonth,
                onClickMonth = _this$props6.onClickMonth;
            return _react.default.createElement(_YearView.default, _extends({
              formatMonth: formatMonth,
              onClick: (0, utils$2.mergeFunctions)(clickAction, onClickMonth)
            }, commonProps));
          }

        case 'month':
          {
            var _this$props7 = this.props,
                formatShortWeekday = _this$props7.formatShortWeekday,
                onClickDay = _this$props7.onClickDay,
                onClickWeekNumber = _this$props7.onClickWeekNumber,
                showFixedNumberOfWeeks = _this$props7.showFixedNumberOfWeeks,
                showNeighboringMonth = _this$props7.showNeighboringMonth,
                showWeekNumbers = _this$props7.showWeekNumbers;
            return _react.default.createElement(_MonthView.default, _extends({
              calendarType: calendarType,
              formatShortWeekday: formatShortWeekday,
              onClick: (0, utils$2.mergeFunctions)(clickAction, onClickDay),
              onClickWeekNumber: onClickWeekNumber,
              showFixedNumberOfWeeks: showFixedNumberOfWeeks,
              showNeighboringMonth: showNeighboringMonth,
              showWeekNumbers: showWeekNumbers
            }, commonProps));
          }

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var showNavigation = this.props.showNavigation;

      if (!showNavigation) {
        return null;
      }

      var _this$props8 = this.props,
          formatMonthYear = _this$props8.formatMonthYear,
          locale = _this$props8.locale,
          maxDate = _this$props8.maxDate,
          maxDetail = _this$props8.maxDetail,
          minDate = _this$props8.minDate,
          minDetail = _this$props8.minDetail,
          navigationAriaLabel = _this$props8.navigationAriaLabel,
          navigationLabel = _this$props8.navigationLabel,
          next2AriaLabel = _this$props8.next2AriaLabel,
          next2Label = _this$props8.next2Label,
          nextAriaLabel = _this$props8.nextAriaLabel,
          nextLabel = _this$props8.nextLabel,
          prev2AriaLabel = _this$props8.prev2AriaLabel,
          prev2Label = _this$props8.prev2Label,
          prevAriaLabel = _this$props8.prevAriaLabel,
          prevLabel = _this$props8.prevLabel;
      var _this$state3 = this.state,
          activeStartDate = _this$state3.activeStartDate,
          view = _this$state3.view;
      return _react.default.createElement(_Navigation.default, {
        activeStartDate: activeStartDate,
        drillUp: this.drillUp,
        formatMonthYear: formatMonthYear,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        navigationAriaLabel: navigationAriaLabel,
        navigationLabel: navigationLabel,
        next2AriaLabel: next2AriaLabel,
        next2Label: next2Label,
        nextAriaLabel: nextAriaLabel,
        nextLabel: nextLabel,
        prev2AriaLabel: prev2AriaLabel,
        prev2Label: prev2Label,
        prevAriaLabel: prevAriaLabel,
        prevLabel: prevLabel,
        setActiveStartDate: this.setActiveStartDate,
        view: view,
        views: getLimitedViews(minDetail, maxDetail)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          className = _this$props9.className,
          selectRange = _this$props9.selectRange;
      var value = this.state.value;
      var onMouseOut = this.onMouseOut;
      var valueArray = [].concat(value);
      return _react.default.createElement("div", {
        className: (0, _mergeClassNames.default)('react-calendar', selectRange && valueArray.length === 1 && 'react-calendar--selectRange', className),
        onMouseOut: selectRange ? onMouseOut : null,
        onBlur: selectRange ? onMouseOut : null
      }, this.renderNavigation(), this.renderContent());
    }
  }, {
    key: "drillDownAvailable",
    get: function get() {
      var _this$props10 = this.props,
          maxDetail = _this$props10.maxDetail,
          minDetail = _this$props10.minDetail;
      var view = this.state.view;
      var views = getLimitedViews(minDetail, maxDetail);
      return views.indexOf(view) < views.length - 1;
    }
  }, {
    key: "drillUpAvailable",
    get: function get() {
      var _this$props11 = this.props,
          maxDetail = _this$props11.maxDetail,
          minDetail = _this$props11.minDetail;
      var view = this.state.view;
      var views = getLimitedViews(minDetail, maxDetail);
      return views.indexOf(view) > 0;
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          minDetail = nextProps.minDetail,
          maxDetail = nextProps.maxDetail;
      var nextState = {};
      /**
       * If the next activeStartDate is different from the current one, update
       * activeStartDate (for display) and activeStartDateProps (for future comparisons)
       */

      var nextActiveStartDate = getActiveStartDate(nextProps);

      if (datesAreDifferent(nextActiveStartDate, prevState.activeStartDateProps)) {
        nextState.activeStartDate = nextActiveStartDate;
        nextState.activeStartDateProps = nextActiveStartDate;
      }
      /**
       * If the next view is different from the current one, and the previously set view is not
       * valid based on minDetail and maxDetail, get a new one.
       */


      var nextView = getView(nextProps.view, minDetail, maxDetail);

      if (nextView !== prevState.viewProps && !isViewAllowed(prevState.view, minDetail, maxDetail)) {
        nextState.view = nextView;
        nextState.viewProps = nextView;
      }
      /**
       * If the next value is different from the current one (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */


      var values = [nextProps.value, prevState.valueProps];

      if (nextState.view // Allowed view changed
      || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getValueFrom(value, minDate, maxDate, maxDetail);
      }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getValueTo(value, minDate, maxDate, maxDetail);
      })))) {
        nextState.value = nextProps.value;
        nextState.valueProps = nextProps.value;
      }

      if (!nextProps.selectRange && prevState.hover) {
        nextState.hover = null;
      }

      return nextState;
    }
  }]);

  return Calendar;
}(_react.Component);

exports.default = Calendar;
Calendar.defaultProps = {
  maxDetail: 'month',
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true,
  view: 'month'
};
Calendar.propTypes = {
  activeStartDate: _propTypes.default.instanceOf(Date),
  calendarType: propTypes.isCalendarType,
  className: propTypes.isClassName,
  formatMonth: _propTypes.default.func,
  formatMonthYear: _propTypes.default.func,
  formatShortWeekday: _propTypes.default.func,
  locale: _propTypes.default.string,
  maxDate: propTypes.isMaxDate,
  maxDetail: _propTypes.default.oneOf(allViews),
  minDate: propTypes.isMinDate,
  minDetail: _propTypes.default.oneOf(allViews),
  navigationAriaLabel: _propTypes.default.string,
  navigationLabel: _propTypes.default.func,
  next2AriaLabel: _propTypes.default.string,
  next2Label: _propTypes.default.node,
  nextAriaLabel: _propTypes.default.string,
  nextLabel: _propTypes.default.node,
  onActiveDateChange: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onClickDay: _propTypes.default.func,
  onClickDecade: _propTypes.default.func,
  onClickMonth: _propTypes.default.func,
  onClickWeekNumber: _propTypes.default.func,
  onClickYear: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  onDrillUp: _propTypes.default.func,
  prev2AriaLabel: _propTypes.default.string,
  prev2Label: _propTypes.default.node,
  prevAriaLabel: _propTypes.default.string,
  prevLabel: _propTypes.default.node,
  renderChildren: _propTypes.default.func,
  // For backwards compatibility
  returnValue: _propTypes.default.oneOf(['start', 'end', 'range']),
  selectRange: _propTypes.default.bool,
  showFixedNumberOfWeeks: _propTypes.default.bool,
  showNavigation: _propTypes.default.bool,
  showNeighboringMonth: _propTypes.default.bool,
  showWeekNumbers: _propTypes.default.bool,
  tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, propTypes.isClassName]),
  tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
  tileDisabled: _propTypes.default.func,
  value: _propTypes.default.oneOfType([_propTypes.default.string, propTypes.isValue]),
  view: _propTypes.default.oneOf(allViews)
};
(0, reactLifecyclesCompat_es.polyfill)(Calendar);
});

unwrapExports(Calendar_1);

var entry_nostyle = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: function get() {
    return _Calendar.default;
  }
});
Object.defineProperty(exports, "CenturyView", {
  enumerable: true,
  get: function get() {
    return _CenturyView.default;
  }
});
Object.defineProperty(exports, "DecadeView", {
  enumerable: true,
  get: function get() {
    return _DecadeView.default;
  }
});
Object.defineProperty(exports, "YearView", {
  enumerable: true,
  get: function get() {
    return _YearView.default;
  }
});
Object.defineProperty(exports, "MonthView", {
  enumerable: true,
  get: function get() {
    return _MonthView.default;
  }
});
exports.default = void 0;

var _Calendar = _interopRequireDefault(Calendar_1);

var _CenturyView = _interopRequireDefault(CenturyView_1);

var _DecadeView = _interopRequireDefault(DecadeView_1);

var _YearView = _interopRequireDefault(YearView_1);

var _MonthView = _interopRequireDefault(MonthView_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Calendar.default;
exports.default = _default;
});

unwrapExports(entry_nostyle);

var Divider_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Divider;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Divider(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("span", {
    className: "react-date-picker__inputGroup__divider"
  }, children);
}

Divider.propTypes = {
  children: _propTypes["default"].node
};
});

unwrapExports(Divider_1);

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFontShorthand = getFontShorthand;
exports.measureText = measureText;
exports.updateInputWidth = updateInputWidth;
exports["default"] = void 0;

/**
 * Gets font CSS shorthand property given element.
 *
 * @param {HTMLElement} element Element to get font CSS shorthand property from
 */
function getFontShorthand(element) {
  var style = window.getComputedStyle(element);
  return style.font || "".concat(style['font-style'], " ").concat(style['font-variant'], " ").concat(style['font-weight'], " ").concat(style['font-size'], "/").concat(style['line-height'], " ").concat(style['font-family']);
}
/**
 * Measures text width given text and font CSS shorthand.
 *
 * @param {String} text Text to measure
 * @param {String} font Font to use when measuring the text
 */


function measureText(text, font) {
  var canvas = measureText.canvas || (measureText.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d');
  context.font = font;

  var _context$measureText = context.measureText(text),
      width = _context$measureText.width;

  return Math.ceil(width);
}
/**
 * Updates input element width to fit its content given input element
 * @param {HTMLInputElement} element
 */


function updateInputWidth(element) {
  if (typeof window === 'undefined') {
    return null;
  }

  var font = getFontShorthand(element);
  var text = element.value || element.placeholder;
  var width = measureText(text, font);
  element.style.width = "".concat(width, "px");
  return width;
}

var _default = updateInputWidth;
exports["default"] = _default;
});

unwrapExports(dist);
var dist_1 = dist.getFontShorthand;
var dist_2 = dist.measureText;
var dist_3 = dist.updateInputWidth;

var Input_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _mergeClassNames = _interopRequireDefault(entry$2);

var _updateInputWidth = _interopRequireWildcard(dist);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function select(element) {
  if (!element) {
    return;
  }

  requestAnimationFrame(function () {
    return element.select();
  });
}

function updateInputWidthOnFontLoad(element) {
  if (!document.fonts) {
    return;
  }

  var font = (0, _updateInputWidth.getFontShorthand)(element);
  var isFontLoaded = document.fonts.check(font);

  if (isFontLoaded) {
    return;
  }

  function onLoadingDone() {
    (0, _updateInputWidth["default"])(element);
  }

  document.fonts.addEventListener('loadingdone', onLoadingDone);
}

function Input(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      nameForClass = _ref.nameForClass,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      _onKeyUp = _ref.onKeyUp,
      placeholder = _ref.placeholder,
      required = _ref.required,
      showLeadingZeros = _ref.showLeadingZeros,
      step = _ref.step,
      value = _ref.value;
  var hasLeadingZero = showLeadingZeros && value !== null && value < 10;
  return [hasLeadingZero && _react["default"].createElement("span", {
    key: "leadingZero",
    className: "".concat(className, "__leadingZero")
  }, "0"), _react["default"].createElement("input", {
    key: "input",
    "aria-label": ariaLabel,
    autoComplete: "off",
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
    disabled: disabled,
    max: max,
    min: min,
    name: name,
    onChange: onChange,
    onFocus: function onFocus(event) {
      return select(event.target);
    },
    onKeyDown: onKeyDown,
    onKeyUp: function onKeyUp(event) {
      (0, _updateInputWidth["default"])(event.target);

      if (_onKeyUp) {
        _onKeyUp(event);
      }
    },
    placeholder: placeholder,
    ref: function ref(_ref2) {
      if (_ref2) {
        (0, _updateInputWidth["default"])(_ref2);
        updateInputWidthOnFontLoad(_ref2);
      }

      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    step: step,
    type: "number",
    value: value !== null ? value : ''
  })];
}

Input.propTypes = {
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  step: _propTypes["default"].number,
  value: _propTypes["default"].number
};
Input.defaultProps = {
  placeholder: '--'
};
});

unwrapExports(Input_1);

var dates$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getYear", {
  enumerable: true,
  get: function get() {
    return dates.getYear;
  }
});
Object.defineProperty(exports, "getMonth", {
  enumerable: true,
  get: function get() {
    return dates.getMonth;
  }
});
Object.defineProperty(exports, "getMonthIndex", {
  enumerable: true,
  get: function get() {
    return dates.getMonthIndex;
  }
});
Object.defineProperty(exports, "getDay", {
  enumerable: true,
  get: function get() {
    return dates.getDay;
  }
});
Object.defineProperty(exports, "getDaysInMonth", {
  enumerable: true,
  get: function get() {
    return dates.getDaysInMonth;
  }
});
Object.defineProperty(exports, "getBegin", {
  enumerable: true,
  get: function get() {
    return dates.getBegin;
  }
});
Object.defineProperty(exports, "getEnd", {
  enumerable: true,
  get: function get() {
    return dates.getEnd;
  }
});
Object.defineProperty(exports, "getISOLocalMonth", {
  enumerable: true,
  get: function get() {
    return dates.getISOLocalMonth;
  }
});
Object.defineProperty(exports, "getISOLocalDate", {
  enumerable: true,
  get: function get() {
    return dates.getISOLocalDate;
  }
});
});

unwrapExports(dates$2);

var propTypes$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isMaxDate", {
  enumerable: true,
  get: function get() {
    return propTypes.isMaxDate;
  }
});
Object.defineProperty(exports, "isMinDate", {
  enumerable: true,
  get: function get() {
    return propTypes.isMinDate;
  }
});
exports.isValueType = void 0;

var _propTypes = _interopRequireDefault(require$$1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

var isValueType = _propTypes["default"].oneOf(allValueTypes);

exports.isValueType = isValueType;
});

unwrapExports(propTypes$2);
var propTypes_1$1 = propTypes$2.isValueType;

var utils$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "between", {
  enumerable: true,
  get: function get() {
    return utils$2.between;
  }
});
Object.defineProperty(exports, "callIfDefined", {
  enumerable: true,
  get: function get() {
    return utils$2.callIfDefined;
  }
});
exports.max = exports.min = void 0;



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isValidNumber = function isValidNumber(a) {
  return typeof a === 'number' && !isNaN(a);
};

var min = function min() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Math.min.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.min = min;

var max = function max() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return Math.max.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.max = max;
});

unwrapExports(utils$4);
var utils_1$2 = utils$4.max;
var utils_2$2 = utils$4.min;

var DayInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DayInput;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Input = _interopRequireDefault(Input_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DayInput(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      month = _ref.month,
      year = _ref.year,
      otherProps = _objectWithoutProperties(_ref, ["maxDate", "minDate", "month", "year"]);

  var currentMonthMaxDays = function () {
    if (!month) {
      return 31;
    }

    return (0, dates$2.getDaysInMonth)(new Date(year, month - 1, 1));
  }();

  var maxDay = (0, utils$4.min)(currentMonthMaxDays, maxDate && year === (0, dates$2.getYear)(maxDate) && month === (0, dates$2.getMonth)(maxDate) && (0, dates$2.getDay)(maxDate));
  var minDay = (0, utils$4.max)(1, minDate && year === (0, dates$2.getYear)(minDate) && month === (0, dates$2.getMonth)(minDate) && (0, dates$2.getDay)(minDate));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxDay,
    min: minDay,
    name: "day"
  }, otherProps));
}

DayInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  maxDate: propTypes$2.isMaxDate,
  minDate: propTypes$2.isMinDate,
  month: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  year: _propTypes["default"].number
};
});

unwrapExports(DayInput_1);

var MonthInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthInput;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Input = _interopRequireDefault(Input_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MonthInput(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      year = _ref.year,
      otherProps = _objectWithoutProperties(_ref, ["maxDate", "minDate", "year"]);

  var maxMonth = (0, utils$4.min)(12, maxDate && year === (0, dates$2.getYear)(maxDate) && (0, dates$2.getMonth)(maxDate));
  var minMonth = (0, utils$4.max)(1, minDate && year === (0, dates$2.getYear)(minDate) && (0, dates$2.getMonth)(minDate));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxMonth,
    min: minMonth,
    name: "month"
  }, otherProps));
}

MonthInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  maxDate: propTypes$2.isMaxDate,
  minDate: propTypes$2.isMinDate,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  year: _propTypes["default"].number
};
});

unwrapExports(MonthInput_1);

var dateFormatter$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatter = getFormatter;
exports.formatShortMonth = exports.formatMonth = void 0;

var _getUserLocale = _interopRequireDefault(entry$6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale["default"])(), options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatMonthOptions = {
  month: 'long'
};
var formatShortMonthOptions = {
  month: 'short'
};
var formatMonth = getSafeFormatter(formatMonthOptions);
exports.formatMonth = formatMonth;
var formatShortMonth = getSafeFormatter(formatShortMonthOptions);
exports.formatShortMonth = formatShortMonth;
});

unwrapExports(dateFormatter$2);
var dateFormatter_1$1 = dateFormatter$2.getFormatter;
var dateFormatter_2$1 = dateFormatter$2.formatShortMonth;
var dateFormatter_3$1 = dateFormatter$2.formatMonth;

var MonthSelect_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MonthSelect;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _mergeClassNames = _interopRequireDefault(entry$2);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MonthSelect(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      itemRef = _ref.itemRef,
      locale = _ref.locale,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      _short = _ref["short"],
      year = _ref.year,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["ariaLabel", "className", "itemRef", "locale", "maxDate", "minDate", "short", "year", "value"]);

  var maxMonth = (0, utils$4.min)(12, maxDate && year === (0, dates$2.getYear)(maxDate) && (0, dates$2.getMonth)(maxDate));
  var minMonth = (0, utils$4.max)(1, minDate && year === (0, dates$2.getYear)(minDate) && (0, dates$2.getMonth)(minDate));

  var dates = _toConsumableArray(Array(12)).map(function (el, index) {
    return new Date(2019, index, 1);
  });

  var name = 'month';
  var formatter = _short ? dateFormatter$2.formatShortMonth : dateFormatter$2.formatMonth;
  return _react["default"].createElement("select", _extends({
    "aria-label": ariaLabel,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(name)),
    name: name,
    ref: function ref(_ref2) {
      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    value: value !== null ? value : ''
  }, otherProps), !value && _react["default"].createElement("option", {
    value: ""
  }, "--"), dates.map(function (date) {
    var month = (0, dates$2.getMonth)(date);
    var disabled = month < minMonth || month > maxMonth;
    return _react["default"].createElement("option", {
      key: month,
      disabled: disabled,
      value: month
    }, formatter(locale, date));
  }));
}

MonthSelect.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxDate: propTypes$2.isMaxDate,
  minDate: propTypes$2.isMinDate,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  "short": _propTypes["default"].bool,
  value: _propTypes["default"].number,
  year: _propTypes["default"].number
};
});

unwrapExports(MonthSelect_1);

var YearInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = YearInput;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);

var _Input = _interopRequireDefault(Input_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function YearInput(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      valueType = _ref.valueType,
      otherProps = _objectWithoutProperties(_ref, ["maxDate", "minDate", "valueType"]);

  var maxYear = (0, utils$4.min)(275760, maxDate && (0, dates$2.getYear)(maxDate));
  var minYear = (0, utils$4.max)(1000, minDate && (0, dates$2.getYear)(minDate));

  var yearStep = function () {
    if (valueType === 'century') {
      return 10;
    }

    return 1;
  }();

  return _react["default"].createElement(_Input["default"], _extends({
    max: maxYear,
    min: minYear,
    name: "year",
    step: yearStep
  }, otherProps));
}

YearInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  maxDate: propTypes$2.isMaxDate,
  minDate: propTypes$2.isMinDate,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  valueType: propTypes$2.isValueType
};
YearInput.defaultProps = {
  placeholder: '----'
};
});

unwrapExports(YearInput_1);

var NativeInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NativeInput;

var _react = _interopRequireDefault(React__default);

var _propTypes = _interopRequireDefault(require$$1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NativeInput(_ref) {
  var ariaLabel = _ref.ariaLabel,
      disabled = _ref.disabled,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      valueType = _ref.valueType;

  var nativeInputType = function () {
    switch (valueType) {
      case 'decade':
      case 'year':
        return 'number';

      case 'month':
        return 'month';

      case 'day':
        return 'date';

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  var nativeValueParser = function () {
    switch (valueType) {
      case 'century':
      case 'decade':
      case 'year':
        return dates$2.getYear;

      case 'month':
        return dates$2.getISOLocalMonth;

      case 'day':
        return dates$2.getISOLocalDate;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return _react["default"].createElement("input", {
    "aria-label": ariaLabel,
    disabled: disabled,
    max: maxDate ? nativeValueParser(maxDate) : null,
    min: minDate ? nativeValueParser(minDate) : null,
    name: name,
    onChange: onChange,
    onFocus: stopPropagation,
    required: required,
    style: {
      visibility: 'hidden',
      position: 'absolute',
      top: '-9999px',
      left: '-9999px'
    },
    type: nativeInputType,
    value: value ? nativeValueParser(value) : ''
  });
}

NativeInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  maxDate: propTypes$2.isMaxDate,
  minDate: propTypes$2.isMinDate,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]),
  valueType: propTypes$2.isValueType
};
});

unwrapExports(NativeInput_1);

var DateInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);



var _Divider = _interopRequireDefault(Divider_1);

var _DayInput = _interopRequireDefault(DayInput_1);

var _MonthInput = _interopRequireDefault(MonthInput_1);

var _MonthSelect = _interopRequireDefault(MonthSelect_1);

var _YearInput = _interopRequireDefault(YearInput_1);

var _NativeInput = _interopRequireDefault(NativeInput_1);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultMinDate = new Date(-8.64e15);
var defaultMaxDate = new Date(8.64e15);
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);

var datesAreDifferent = function datesAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
};
/**
 * Returns value type that can be returned with currently applied settings.
 */


var getValueType = function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
};

var getValueFromRange = function getValueFromRange(valueOrArrayOfValues, index) {
  if (Array.isArray(valueOrArrayOfValues)) {
    return valueOrArrayOfValues[index];
  }

  return valueOrArrayOfValues;
};

var parseAndValidateDate = function parseAndValidateDate(rawValue) {
  if (!rawValue) {
    return null;
  }

  var valueDate = new Date(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(rawValue));
  }

  return valueDate;
};

var getValueFrom = function getValueFrom(value) {
  var valueFrom = getValueFromRange(value, 0);
  return parseAndValidateDate(valueFrom);
};

var getDetailValueFrom = function getDetailValueFrom(value, minDate, maxDate, maxDetail) {
  var valueFrom = getValueFrom(value);

  if (!valueFrom) {
    return null;
  }

  var detailValueFrom = (0, dates$2.getBegin)(getValueType(maxDetail), valueFrom);
  return (0, utils$4.between)(detailValueFrom, minDate, maxDate);
};

var getValueTo = function getValueTo(value) {
  var valueTo = getValueFromRange(value, 1);
  return parseAndValidateDate(valueTo);
};

var getDetailValueTo = function getDetailValueTo(value, minDate, maxDate, maxDetail) {
  var valueTo = getValueTo(value);

  if (!valueTo) {
    return null;
  }

  var detailValueTo = (0, dates$2.getEnd)(getValueType(maxDetail), valueTo);
  return (0, utils$4.between)(detailValueTo, minDate, maxDate);
};

var getDetailValueArray = function getDetailValueArray(value, minDate, maxDate, maxDetail) {
  if (value instanceof Array) {
    return value;
  }

  return [getDetailValueFrom(value, minDate, maxDate, maxDetail), getDetailValueTo(value, minDate, maxDate, maxDetail)];
};

var isValidInput = function isValidInput(element) {
  return element.tagName === 'INPUT' && element.type === 'number';
};

var findInput = function findInput(element, property) {
  var nextElement = element;

  do {
    nextElement = nextElement[property];
  } while (nextElement && !isValidInput(nextElement));

  return nextElement;
};

var focus = function focus(element) {
  return element && element.focus();
};

var _renderCustomInputs = function renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  var usedFunctions = [];
  var pattern = new RegExp(Object.keys(elementFunctions).map(function (el) {
    return "".concat(el, "+");
  }).join('|'), 'g');
  var matches = placeholder.match(pattern);
  return placeholder.split(pattern).reduce(function (arr, element, index) {
    var divider = element && // eslint-disable-next-line react/no-array-index-key
    _react["default"].createElement(_Divider["default"], {
      key: "separator_".concat(index)
    }, element);

    var res = [].concat(_toConsumableArray(arr), [divider]);
    var currentMatch = matches && matches[index];

    if (currentMatch) {
      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function (elementFunction) {
        return currentMatch.match(elementFunction);
      })];

      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
        res.push(currentMatch);
      } else {
        res.push(renderFunction(currentMatch));
        usedFunctions.push(renderFunction);
      }
    }

    return res;
  }, []);
};

var DateInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DateInput, _PureComponent);

  function DateInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      year: null,
      month: null,
      day: null
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      if (event.target === event.currentTarget) {
        // Wrapper was directly clicked
        var firstInput = event.target.children[1];
        focus(firstInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case _this.divider:
          {
            event.preventDefault();
            var input = event.target;
            var property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
            var nextInput = findInput(input, property);
            focus(nextInput);
            break;
          }

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      var key = event.key,
          input = event.target;
      var isNumberKey = !isNaN(parseInt(key, 10));

      if (!isNumberKey) {
        return;
      }

      var value = input.value;
      var max = parseInt(input.getAttribute('max'), 10);
      /**
       * Given 1, the smallest possible number the user could type by adding another digit is 10.
       * 10 would be a valid value given max = 12, so we won't jump to the next input.
       * However, given 2, smallers possible number would be 20, and thus keeping the focus in
       * this field doesn't make sense.
       */

      if (value * 10 > max) {
        var property = 'nextElementSibling';
        var nextInput = findInput(input, property);
        focus(nextInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(_defineProperty({}, name, value ? parseInt(value, 10) : null), _this.onChangeExternal);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeNative", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;

      if (!onChange) {
        return;
      }

      var processedValue = function () {
        if (!value) {
          return null;
        }

        var _value$split = value.split('-'),
            _value$split2 = _slicedToArray(_value$split, 3),
            yearString = _value$split2[0],
            monthString = _value$split2[1],
            dayString = _value$split2[2];

        var year = parseInt(yearString, 10);
        var monthIndex = parseInt(monthString, 10) - 1 || 0;
        var date = parseInt(dayString, 10) || 1;
        return new Date(year, monthIndex, date);
      }();

      onChange(processedValue, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeExternal", function () {
      var onChange = _this.props.onChange;

      if (!onChange) {
        return;
      }

      var formElements = [_this.dayInput, _this.monthInput, _this.yearInput].filter(Boolean);
      var values = {};
      formElements.forEach(function (formElement) {
        values[formElement.name] = formElement.value;
      });

      if (formElements.every(function (formElement) {
        return !formElement.value;
      })) {
        onChange(null, false);
      } else if (formElements.every(function (formElement) {
        return formElement.value && formElement.checkValidity();
      })) {
        var year = parseInt(values.year, 10);
        var month = parseInt(values.month || 1, 10);
        var day = parseInt(values.day || 1, 10);
        var proposedValue = new Date(year, month - 1, day);

        var processedValue = _this.getProcessedValue(proposedValue);

        onChange(processedValue, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderDay", function (currentMatch) {
      var _this$props = _this.props,
          dayAriaLabel = _this$props.dayAriaLabel,
          dayPlaceholder = _this$props.dayPlaceholder,
          showLeadingZeros = _this$props.showLeadingZeros;
      var _this$state = _this.state,
          day = _this$state.day,
          month = _this$state.month,
          year = _this$state.year;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_DayInput["default"], _extends({
        key: "day"
      }, _this.commonInputProps, {
        ariaLabel: dayAriaLabel,
        month: month,
        placeholder: dayPlaceholder,
        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
        value: day,
        year: year
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonth", function (currentMatch) {
      var _this$props2 = _this.props,
          locale = _this$props2.locale,
          monthAriaLabel = _this$props2.monthAriaLabel,
          monthPlaceholder = _this$props2.monthPlaceholder,
          showLeadingZeros = _this$props2.showLeadingZeros;
      var _this$state2 = _this.state,
          month = _this$state2.month,
          year = _this$state2.year;

      if (currentMatch && currentMatch.length > 4) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      if (currentMatch.length > 2) {
        return _react["default"].createElement(_MonthSelect["default"], _extends({
          key: "month"
        }, _this.commonInputProps, {
          ariaLabel: monthAriaLabel,
          locale: locale,
          placeholder: monthPlaceholder,
          "short": currentMatch.length === 3,
          value: month,
          year: year
        }));
      }

      var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_MonthInput["default"], _extends({
        key: "month"
      }, _this.commonInputProps, {
        ariaLabel: monthAriaLabel,
        placeholder: monthPlaceholder,
        showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
        value: month,
        year: year
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderYear", function () {
      var _this$props3 = _this.props,
          yearAriaLabel = _this$props3.yearAriaLabel,
          yearPlaceholder = _this$props3.yearPlaceholder;
      var year = _this.state.year;
      return _react["default"].createElement(_YearInput["default"], _extends({
        key: "year"
      }, _this.commonInputProps, {
        ariaLabel: yearAriaLabel,
        placeholder: yearPlaceholder,
        value: year,
        valueType: _this.valueType
      }));
    });

    return _this;
  }

  _createClass(DateInput, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this$props4 = this.props,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate,
          maxDetail = _this$props4.maxDetail,
          returnValue = _this$props4.returnValue;

      switch (returnValue) {
        case 'start':
          return getDetailValueFrom(value, minDate, maxDate, maxDetail);

        case 'end':
          return getDetailValueTo(value, minDate, maxDate, maxDetail);

        case 'range':
          return getDetailValueArray(value, minDate, maxDate, maxDetail);

        default:
          throw new Error('Invalid returnValue.');
      }
    }
  }, {
    key: "renderCustomInputs",
    value: function renderCustomInputs() {
      var placeholder = this.placeholder;
      var format = this.props.format;
      var elementFunctions = {
        d: this.renderDay,
        M: this.renderMonth,
        y: this.renderYear
      };
      var allowMultipleInstances = typeof format !== 'undefined';
      return _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
    }
  }, {
    key: "renderNativeInput",
    value: function renderNativeInput() {
      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          maxDate = _this$props5.maxDate,
          minDate = _this$props5.minDate,
          name = _this$props5.name,
          nativeInputAriaLabel = _this$props5.nativeInputAriaLabel,
          required = _this$props5.required;
      var value = this.state.value;
      return _react["default"].createElement(_NativeInput["default"], {
        key: "date",
        ariaLabel: nativeInputAriaLabel,
        disabled: disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        name: name,
        onChange: this.onChangeNative,
        required: required,
        value: value,
        valueType: this.valueType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return _react["default"].createElement("div", {
        className: className,
        onClick: this.onClick,
        role: "presentation"
      }, this.renderNativeInput(), this.renderCustomInputs());
    }
  }, {
    key: "formatDate",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      var options = {
        year: 'numeric'
      };
      var level = allViews.indexOf(maxDetail);

      if (level >= 2) {
        options.month = 'numeric';
      }

      if (level >= 3) {
        options.day = 'numeric';
      }

      return (0, dateFormatter$2.getFormatter)(options);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "formatNumber",
    get: function get() {
      var options = {
        useGrouping: false
      };
      return (0, dateFormatter$2.getFormatter)(options);
    }
  }, {
    key: "divider",
    get: function get() {
      return this.placeholder.match(/[^0-9a-z]/i)[0];
    }
  }, {
    key: "placeholder",
    get: function get() {
      var _this$props6 = this.props,
          format = _this$props6.format,
          locale = _this$props6.locale;

      if (format) {
        return format;
      }

      var year = 2017;
      var monthIndex = 11;
      var day = 11;
      var date = new Date(year, monthIndex, day);
      return this.formatDate(locale, date).replace(this.formatNumber(locale, year), 'y').replace(this.formatNumber(locale, monthIndex + 1), 'M').replace(this.formatNumber(locale, day), 'd');
    }
  }, {
    key: "commonInputProps",
    get: function get() {
      var _this2 = this;

      var _this$props7 = this.props,
          className = _this$props7.className,
          disabled = _this$props7.disabled,
          isCalendarOpen = _this$props7.isCalendarOpen,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          required = _this$props7.required;
      return {
        className: className,
        disabled: disabled,
        maxDate: maxDate || defaultMaxDate,
        minDate: minDate || defaultMinDate,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        // This is only for showing validity when editing
        required: required || isCalendarOpen,
        itemRef: function itemRef(ref, name) {
          // Save a reference to each input field
          _this2["".concat(name, "Input")] = ref;
        }
      };
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var minDate = nextProps.minDate,
          maxDate = nextProps.maxDate,
          maxDetail = nextProps.maxDetail;
      var nextState = {};
      /**
       * If isCalendarOpen flag has changed, we have to update it.
       * It's saved in state purely for use in getDerivedStateFromProps.
       */

      if (nextProps.isCalendarOpen !== prevState.isCalendarOpen) {
        nextState.isCalendarOpen = nextProps.isCalendarOpen;
      }
      /**
       * If the next value is different from the current one  (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */


      var nextValue = getDetailValueFrom(nextProps.value, minDate, maxDate, maxDetail);
      var values = [nextValue, prevState.value];

      if ( // Toggling calendar visibility resets values
      nextState.isCalendarOpen // Flag was toggled
      || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getDetailValueFrom(value, minDate, maxDate, maxDetail);
      }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
        return getDetailValueTo(value, minDate, maxDate, maxDetail);
      })))) {
        if (nextValue) {
          nextState.year = (0, dates$2.getYear)(nextValue);
          nextState.month = (0, dates$2.getMonth)(nextValue);
          nextState.day = (0, dates$2.getDay)(nextValue);
        } else {
          nextState.year = null;
          nextState.month = null;
          nextState.day = null;
        }

        nextState.value = nextValue;
      }

      return nextState;
    }
  }]);

  return DateInput;
}(_react.PureComponent);

exports["default"] = DateInput;
DateInput.defaultProps = {
  maxDetail: 'month',
  name: 'date',
  returnValue: 'start'
};

var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

DateInput.propTypes = {
  className: _propTypes["default"].string.isRequired,
  dayAriaLabel: _propTypes["default"].string,
  dayPlaceholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  isCalendarOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDate: propTypes$2.isMaxDate,
  maxDetail: _propTypes["default"].oneOf(allViews),
  minDate: propTypes$2.isMinDate,
  monthAriaLabel: _propTypes["default"].string,
  monthPlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  returnValue: _propTypes["default"].oneOf(['start', 'end', 'range']),
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  yearAriaLabel: _propTypes["default"].string,
  yearPlaceholder: _propTypes["default"].string
};
(0, reactLifecyclesCompat_es.polyfill)(DateInput);
});

unwrapExports(DateInput_1);

var DatePicker_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(require$$1);



var _makeEventProps = _interopRequireDefault(entry);

var _mergeClassNames = _interopRequireDefault(entry$2);

var _reactFit = _interopRequireDefault(Fit_1);

var _entry = _interopRequireDefault(entry_nostyle);

var _DateInput = _interopRequireDefault(DateInput_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseClassName = 'react-date-picker';
var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];
var allViews = ['century', 'decade', 'year', 'month'];

var DatePicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onOutsideAction", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeCalendar();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openCalendar", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCalendar", function () {
      _this.setState(function (prevState) {
        if (!prevState.isOpen) {
          return null;
        }

        return {
          isOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCalendar", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var closeCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({
        isOpen: !closeCalendar
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus;

      if (onFocus) {
        onFocus(event);
      } // Internet Explorer still fires onFocus on disabled elements


      if (disabled) {
        return;
      }

      _this.openCalendar();
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      return _this.onChange(null);
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideActionListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          onCalendarClose = _this$props2.onCalendarClose,
          onCalendarOpen = _this$props2.onCalendarOpen;

      if (isOpen !== prevState.isOpen) {
        this.handleOutsideActionListeners();
        (0, utils$4.callIfDefined)(isOpen ? onCalendarOpen : onCalendarClose);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideActionListeners(false);
    }
  }, {
    key: "handleOutsideActionListeners",
    value: function handleOutsideActionListeners(shouldListen) {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var shouldListenWithFallback = typeof shouldListen !== 'undefined' ? shouldListen : isOpen;
      var fnName = shouldListenWithFallback ? 'addEventListener' : 'removeEventListener';
      outsideActionEvents.forEach(function (eventName) {
        return document[fnName](eventName, _this2.onOutsideAction);
      });
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this$props3 = this.props,
          calendarAriaLabel = _this$props3.calendarAriaLabel,
          calendarIcon = _this$props3.calendarIcon,
          clearAriaLabel = _this$props3.clearAriaLabel,
          clearIcon = _this$props3.clearIcon,
          dayAriaLabel = _this$props3.dayAriaLabel,
          dayPlaceholder = _this$props3.dayPlaceholder,
          disableCalendar = _this$props3.disableCalendar,
          disabled = _this$props3.disabled,
          format = _this$props3.format,
          locale = _this$props3.locale,
          maxDate = _this$props3.maxDate,
          maxDetail = _this$props3.maxDetail,
          minDate = _this$props3.minDate,
          monthAriaLabel = _this$props3.monthAriaLabel,
          monthPlaceholder = _this$props3.monthPlaceholder,
          name = _this$props3.name,
          nativeInputAriaLabel = _this$props3.nativeInputAriaLabel,
          required = _this$props3.required,
          returnValue = _this$props3.returnValue,
          showLeadingZeros = _this$props3.showLeadingZeros,
          value = _this$props3.value,
          yearAriaLabel = _this$props3.yearAriaLabel,
          yearPlaceholder = _this$props3.yearPlaceholder;
      var isOpen = this.state.isOpen;

      var _concat = [].concat(value),
          _concat2 = _slicedToArray(_concat, 1),
          valueFrom = _concat2[0];

      var ariaLabelProps = {
        dayAriaLabel: dayAriaLabel,
        monthAriaLabel: monthAriaLabel,
        nativeInputAriaLabel: nativeInputAriaLabel,
        yearAriaLabel: yearAriaLabel
      };
      var placeholderProps = {
        dayPlaceholder: dayPlaceholder,
        monthPlaceholder: monthPlaceholder,
        yearPlaceholder: yearPlaceholder
      };
      return _react["default"].createElement("div", {
        className: "".concat(baseClassName, "__wrapper")
      }, _react["default"].createElement(_DateInput["default"], _extends({}, ariaLabelProps, placeholderProps, {
        className: "".concat(baseClassName, "__inputGroup"),
        disabled: disabled,
        format: format,
        isCalendarOpen: isOpen,
        locale: locale,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        name: name,
        onChange: this.onChange,
        required: required,
        returnValue: returnValue,
        showLeadingZeros: showLeadingZeros,
        value: valueFrom
      })), clearIcon !== null && _react["default"].createElement("button", {
        "aria-label": clearAriaLabel,
        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.clear,
        onFocus: this.stopPropagation,
        type: "button"
      }, clearIcon), calendarIcon !== null && !disableCalendar && _react["default"].createElement("button", {
        "aria-label": calendarAriaLabel,
        className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onBlur: this.resetValue,
        onClick: this.toggleCalendar,
        onFocus: this.stopPropagation,
        type: "button"
      }, calendarIcon));
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var disableCalendar = this.props.disableCalendar;
      var isOpen = this.state.isOpen;

      if (isOpen === null || disableCalendar) {
        return null;
      }

      var _this$props4 = this.props,
          calendarClassName = _this$props4.calendarClassName,
          datePickerClassName = _this$props4.className,
          onChange = _this$props4.onChange,
          value = _this$props4.value,
          calendarProps = _objectWithoutProperties(_this$props4, ["calendarClassName", "className", "onChange", "value"]);

      var className = "".concat(baseClassName, "__calendar");
      return _react["default"].createElement(_reactFit["default"], null, _react["default"].createElement("div", {
        className: (0, _mergeClassNames["default"])(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed'))
      }, _react["default"].createElement(_entry["default"], _extends({
        className: calendarClassName,
        onChange: this.onChange,
        value: value || null
      }, calendarProps))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          disabled = _this$props5.disabled;
      var isOpen = this.state.isOpen;
      return _react["default"].createElement("div", _extends({
        className: (0, _mergeClassNames["default"])(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
      }, this.eventProps, {
        onFocus: this.onFocus,
        ref: function ref(_ref) {
          if (!_ref) {
            return;
          }

          _this3.wrapper = _ref;
        }
      }), this.renderInputs(), this.renderCalendar());
    }
  }, {
    key: "eventProps",
    get: function get() {
      return (0, _makeEventProps["default"])(this.props);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen !== prevState.isOpenProps) {
        return {
          isOpen: nextProps.isOpen,
          isOpenProps: nextProps.isOpen
        };
      }

      return null;
    }
  }]);

  return DatePicker;
}(_react.PureComponent);

exports["default"] = DatePicker;
var iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 19,
  height: 19,
  viewBox: '0 0 19 19',
  stroke: 'black',
  strokeWidth: 2
};

var CalendarIcon = _react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__calendar-button__icon ").concat(baseClassName, "__button__icon")
}), _react["default"].createElement("rect", {
  fill: "none",
  height: "15",
  width: "15",
  x: "2",
  y: "2"
}), _react["default"].createElement("line", {
  x1: "6",
  x2: "6",
  y1: "0",
  y2: "4"
}), _react["default"].createElement("line", {
  x1: "13",
  x2: "13",
  y1: "0",
  y2: "4"
}));

var ClearIcon = _react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon")
}), _react["default"].createElement("line", {
  x1: "4",
  x2: "15",
  y1: "4",
  y2: "15"
}), _react["default"].createElement("line", {
  x1: "15",
  x2: "4",
  y1: "4",
  y2: "15"
}));

DatePicker.defaultProps = {
  calendarIcon: CalendarIcon,
  clearIcon: ClearIcon,
  isOpen: null,
  returnValue: 'start'
};

var isValue = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]);

DatePicker.propTypes = {
  calendarAriaLabel: _propTypes["default"].string,
  calendarClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  calendarIcon: _propTypes["default"].node,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  clearAriaLabel: _propTypes["default"].string,
  clearIcon: _propTypes["default"].node,
  dayAriaLabel: _propTypes["default"].string,
  dayPlaceholder: _propTypes["default"].string,
  disableCalendar: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDate: propTypes$2.isMaxDate,
  maxDetail: _propTypes["default"].oneOf(allViews),
  minDate: propTypes$2.isMinDate,
  monthAriaLabel: _propTypes["default"].string,
  monthPlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onCalendarClose: _propTypes["default"].func,
  onCalendarOpen: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  returnValue: _propTypes["default"].oneOf(['start', 'end', 'range']),
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)]),
  yearAriaLabel: _propTypes["default"].string,
  yearPlaceholder: _propTypes["default"].string
};
(0, reactLifecyclesCompat_es.polyfill)(DatePicker);
});

unwrapExports(DatePicker_1);

var css$f = ".DatePicker_react-date-picker__1JmWr {\n  display: inline-flex;\n  position: relative;\n}\n.DatePicker_react-date-picker__1JmWr,\n.DatePicker_react-date-picker__1JmWr *,\n.DatePicker_react-date-picker__1JmWr *:before,\n.DatePicker_react-date-picker__1JmWr *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.DatePicker_react-date-picker--disabled__3S8Gl {\n  background-color: #f0f0f0;\n  color: #6d6d6d;\n}\n.DatePicker_react-date-picker__wrapper__27Fwl {\n  display: flex;\n  border: thin solid gray;\n}\n.DatePicker_react-date-picker__inputGroup__3oHTC {\n  min-width: calc((4px * 3) +  0.54em * 8  +  0.217em * 2);\n  flex-grow: 1;\n  display: flex;\n  padding: 0 2px;\n  align-items: baseline;\n  box-sizing: content-box;\n}\n.DatePicker_react-date-picker__inputGroup__divider__1A1Tj {\n  padding: 1px 0;\n  white-space: pre;\n}\n.DatePicker_react-date-picker__inputGroup__input__hjlIy {\n  min-width: 0.54em;\n  height: 100%;\n  position: relative;\n  padding: 0 1px;\n  border: 0;\n  background: none;\n  font: inherit;\n  box-sizing: content-box;\n  -moz-appearance: textfield;\n}\n.DatePicker_react-date-picker__inputGroup__input__hjlIy::-webkit-outer-spin-button,\n.DatePicker_react-date-picker__inputGroup__input__hjlIy::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.DatePicker_react-date-picker__inputGroup__input__hjlIy:invalid {\n  background: rgba(255, 0, 0, 0.1);\n}\n.DatePicker_react-date-picker__inputGroup__input--hasLeadingZero__tzwak {\n  margin-left: -0.54em;\n  padding-left: calc(1px +  0.54em);\n}\n.DatePicker_react-date-picker__button__2lYW2 {\n  border: 0;\n  background: transparent;\n  padding: 4px 6px;\n}\n.DatePicker_react-date-picker__button__2lYW2:enabled {\n  cursor: pointer;\n}\n.DatePicker_react-date-picker__button__2lYW2:enabled:hover .DatePicker_react-date-picker__button__icon__2Eil9,\n.DatePicker_react-date-picker__button__2lYW2:enabled:focus .DatePicker_react-date-picker__button__icon__2Eil9 {\n  stroke: #0078d7;\n}\n.DatePicker_react-date-picker__button__2lYW2:disabled .DatePicker_react-date-picker__button__icon__2Eil9 {\n  stroke: #6d6d6d;\n}\n.DatePicker_react-date-picker__button__2lYW2 svg {\n  display: inherit;\n}\n.DatePicker_react-date-picker__calendar__39diX {\n  width: 350px;\n  max-width: 100vw;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n}\n.DatePicker_react-date-picker__calendar--closed__1PqXM {\n  display: none;\n}\n.DatePicker_react-date-picker__calendar__39diX .DatePicker_react-calendar__gWISK {\n  border-width: thin;\n}\n";
var DatePicker$1 = {"react-date-picker":"DatePicker_react-date-picker__1JmWr","react-date-picker--disabled":"DatePicker_react-date-picker--disabled__3S8Gl","react-date-picker__wrapper":"DatePicker_react-date-picker__wrapper__27Fwl","react-date-picker__inputGroup":"DatePicker_react-date-picker__inputGroup__3oHTC","react-date-picker__inputGroup__divider":"DatePicker_react-date-picker__inputGroup__divider__1A1Tj","react-date-picker__inputGroup__input":"DatePicker_react-date-picker__inputGroup__input__hjlIy","react-date-picker__inputGroup__input--hasLeadingZero":"DatePicker_react-date-picker__inputGroup__input--hasLeadingZero__tzwak","react-date-picker__button":"DatePicker_react-date-picker__button__2lYW2","react-date-picker__button__icon":"DatePicker_react-date-picker__button__icon__2Eil9","react-date-picker__calendar":"DatePicker_react-date-picker__calendar__39diX","react-date-picker__calendar--closed":"DatePicker_react-date-picker__calendar--closed__1PqXM","react-calendar":"DatePicker_react-calendar__gWISK"};
styleInject(css$f);

var DatePicker$2 = /*#__PURE__*/Object.freeze({
    default: DatePicker$1
});

getCjsExportFromNamespace(Calendar$1);

getCjsExportFromNamespace(DatePicker$2);

var entry$8 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



var _DatePicker = _interopRequireDefault(DatePicker_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved
var _default = _DatePicker["default"];
exports["default"] = _default;
});

var DatePicker$4 = unwrapExports(entry$8);

var css$g = ".input-module_header__3i8Zq {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 1.5rem; }\n\n.input-module_errorMessage__3eTi7 {\n  color: #E6492D;\n  margin: 0;\n  line-height: 1.375rem; }\n\n.input-module_iconWrapper__3WRT6 {\n  position: absolute;\n  top: 50%;\n  color: #D8DCE6;\n  transform: translateY(-50%); }\n  .input-module_iconWrapper__3WRT6:not(.input-module_iconWrapperRight__2ctHT) {\n    left: 12px; }\n    .input-module_iconWrapper__3WRT6:not(.input-module_iconWrapperRight__2ctHT) + input {\n      padding-left: 40px; }\n  .input-module_iconWrapper__3WRT6.input-module_iconWrapperRight__2ctHT {\n    left: auto;\n    right: 12px; }\n    .input-module_iconWrapper__3WRT6.input-module_iconWrapperRight__2ctHT + input {\n      padding-right: 40px; }\n\n.input-module_clear__1nPX5 .input-module_iconWrapper__3WRT6:not(.input-module_iconWrapperRight__2ctHT) {\n  left: 0; }\n  .input-module_clear__1nPX5 .input-module_iconWrapper__3WRT6:not(.input-module_iconWrapperRight__2ctHT) + input {\n    padding-left: 28px; }\n\n.input-module_clear__1nPX5 .input-module_iconWrapper__3WRT6.input-module_iconWrapperRight__2ctHT {\n  right: 0; }\n  .input-module_clear__1nPX5 .input-module_iconWrapper__3WRT6.input-module_iconWrapperRight__2ctHT + input {\n    padding-right: 28px; }\n\n.input-module_clear__1nPX5 input {\n  padding: 0;\n  border: none !important;\n  background: transparent; }\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 5500s ease-in-out 0s !important;\n  color: #6B6C6F !important;\n  -webkit-text-fill-color: #6B6C6F !important; }\n\n.input-module_calendar__KvQz_ > div {\n  border: 1px solid #EAEDF3;\n  border-radius: 4px;\n  width: 100%;\n  background: white;\n  padding: 4px 13px;\n  outline: none;\n  font-size: 0.875rem; }\n  .input-module_calendar__KvQz_ > div + * {\n    margin-top: 10px; }\n  .input-module_calendar__KvQz_ > div:disabled {\n    background: rgba(255, 255, 255, 0.3); }\n  .input-module_calendar__KvQz_ > div:focus {\n    border-color: #1665D8; }\n  .input-module_calendar__KvQz_ > div::-webkit-input-placeholder, .input-module_calendar__KvQz_ > div::-moz-placeholder, .input-module_calendar__KvQz_ > div:-ms-input-placeholder, .input-module_calendar__KvQz_ > div:-moz-placeholder {\n    color: #9EA0A5; }\n  .input-module_calendar__KvQz_ > div.input-module_errorHighlight__CWuPd {\n    border-color: #E6492D; }\n\n.input-module_calendar__KvQz_ svg, .input-module_calendar__KvQz_ g {\n  fill: #D8DCE6;\n  stroke: #D8DCE6;\n  color: #D8DCE6; }\n";
var s$b = {"header":"input-module_header__3i8Zq","errorMessage":"input-module_errorMessage__3eTi7","iconWrapper":"input-module_iconWrapper__3WRT6","iconWrapperRight":"input-module_iconWrapperRight__2ctHT","clear":"input-module_clear__1nPX5","calendar":"input-module_calendar__KvQz_","errorHighlight":"input-module_errorHighlight__CWuPd"};
styleInject(css$g);

var UikDatePicker = /** @class */ (function (_super) {
    __extends(UikDatePicker, _super);
    function UikDatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.props.value ? _this.props.value : new Date() };
        return _this;
    }
    UikDatePicker.prototype.componentWillReceiveProps = function (nextProps) {
        nextProps.value && this.setState({ value: nextProps.value });
    };
    UikDatePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, value = _a.value, onInput = _a.onInput;
        return (React__default.createElement("div", null,
            label && (React__default.createElement("div", { className: s$b.header },
                React__default.createElement(UikContentTitle, null, label))),
            React__default.createElement(DatePicker$4, { onChange: function (d) {
                    if (d instanceof Array && d.length > 0) {
                        _this.setState({ value: d[0] });
                        onInput && onInput(d[0]);
                    }
                    else {
                        _this.setState({ value: d });
                        onInput && onInput(d);
                    }
                }, value: value, minDetail: "decade", className: s$b.calendar })));
    };
    return UikDatePicker;
}(React__default.PureComponent));

var css$h = ".avatar-module_info__1Tqpl {\n  margin-left: 12px;\n  flex-grow: 1; }\n  .avatar-module_info__1Tqpl > * {\n    display: block; }\n\n.avatar-module_wrapper__3-3Un {\n  display: flex;\n  align-items: center;\n  max-width: 100%; }\n  .avatar-module_wrapper__3-3Un > * {\n    min-width: 1px; }\n  .avatar-module_wrapper__3-3Un .avatar-module_name__qZABP {\n    /* Author: */\n    font-size: 0.875rem;\n    color: #3E3F42;\n    line-height: 1.375rem;\n    overflow: hidden;\n    white-space: nowrap;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; }\n    .avatar-module_wrapper__3-3Un .avatar-module_name__qZABP i {\n      font-style: normal;\n      color: #9EA0A5; }\n  .avatar-module_wrapper__3-3Un.avatar-module_highlighted__TXbIR .avatar-module_name__qZABP {\n    font-weight: 500; }\n  .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm {\n    position: relative;\n    height: 38px;\n    width: 38px;\n    flex-shrink: 0; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarAction__3gy3x {\n      position: absolute;\n      bottom: 0;\n      right: 0; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      color: #9EA0A5;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-weight: 500;\n      line-height: 1.5rem;\n      text-transform: uppercase;\n      background-color: transparent;\n      border: 1px solid #EAEDF3; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.green {\n        color: white;\n        background-color: #38B249;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.blue {\n        color: white;\n        background-color: #1665D8;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.orange {\n        color: white;\n        background-color: #F6AB2F;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.violet {\n        color: white;\n        background-color: #6977FF;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.yellow {\n        color: white;\n        background-color: #FACF55;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.red {\n        color: white;\n        background-color: #E6492D;\n        border-color: transparent; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarPlaceholder__2o6mA.lightblue {\n        background-color: #98CAEC;\n        background-image: linear-gradient(-45deg, #98CAEC 0%, #44ADE5 100%);\n        border-color: transparent;\n        color: white; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatar__1hSKR {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      display: block; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatar__1hSKR + * {\n        margin-left: 0.75rem; }\n    .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      overflow: hidden;\n      display: flex; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk > .avatar-module_avatar__1hSKR {\n        border-radius: 0;\n        margin: 0 !important; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s2__1-HSv > .avatar-module_avatar__1hSKR {\n        transform: translateX(-50%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(1) {\n        transform: translateX(-50%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(2), .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(3) {\n        height: 50%;\n        width: 50%; }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(2) {\n        transform: translateX(-100%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s3__16Ow3 > .avatar-module_avatar__1hSKR:nth-child(3) {\n        transform: translateX(-200%) translateY(100%); }\n      .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s4__5ifeg {\n        flex-wrap: wrap; }\n        .avatar-module_wrapper__3-3Un .avatar-module_avatarWrapper__pxTgm .avatar-module_avatarMultiWrapper__3oItk.avatar-module_s4__5ifeg > .avatar-module_avatar__1hSKR {\n          height: 50%;\n          width: 50%; }\n  .avatar-module_wrapper__3-3Un .avatar-module_textTop__1Lfc7 {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1.125rem;\n    overflow: hidden;\n    white-space: nowrap; }\n  .avatar-module_wrapper__3-3Un .avatar-module_textBottom__1ddZV {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1.125rem;\n    margin-top: 2px;\n    overflow: hidden;\n    white-space: nowrap; }\n  .avatar-module_wrapper__3-3Un .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un .avatar-module_textBottom__1ddZV,\n  .avatar-module_wrapper__3-3Un .avatar-module_name__qZABP {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .avatar-module_wrapper__3-3Un.avatar-module_small__3KOX_ .avatar-module_avatarWrapper__pxTgm {\n    font-size: 12px;\n    height: 28px;\n    width: 28px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_avatarWrapper__pxTgm, .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_avatarWrapper__pxTgm, .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_avatarWrapper__pxTgm, .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_avatarWrapper__pxTgm {\n    font-size: 18px;\n    height: 60px;\n    width: 60px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_textBottom__1ddZV, .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textBottom__1ddZV, .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_textBottom__1ddZV, .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_textBottom__1ddZV {\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    color: #6B6C6F; }\n  .avatar-module_wrapper__3-3Un.avatar-module_large__MFQNk .avatar-module_name__qZABP, .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_name__qZABP, .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_name__qZABP, .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_name__qZABP {\n    font-size: 1rem;\n    line-height: 1.5rem; }\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textTop__1Lfc7,\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_textBottom__1ddZV {\n    color: #6B6C6F; }\n  .avatar-module_wrapper__3-3Un.avatar-module_larger__351iE .avatar-module_avatarWrapper__pxTgm {\n    font-size: 26px;\n    height: 80px;\n    width: 80px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_extraLarge__17LYc .avatar-module_avatarWrapper__pxTgm {\n    font-size: 36px;\n    height: 100px;\n    width: 100px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_name__qZABP {\n    font-size: 1.25rem;\n    line-height: 1.5; }\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_avatarWrapper__pxTgm {\n    font-size: 36px;\n    height: 120px;\n    width: 120px; }\n  .avatar-module_wrapper__3-3Un.avatar-module_jumbo__1xOrp .avatar-module_info__1Tqpl {\n    margin-left: 24px; }\n\n.avatar-module_statusWrapper__3c5BJ {\n  margin-left: 10px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: #9EA0A5;\n  font-size: .75rem; }\n  .avatar-module_statusWrapper__3c5BJ .avatar-module_statusOnline__2n4aR {\n    background: #38B249;\n    height: 6px;\n    width: 6px;\n    border-radius: 50%; }\n";
var s$c = {"info":"avatar-module_info__1Tqpl","wrapper":"avatar-module_wrapper__3-3Un","name":"avatar-module_name__qZABP","highlighted":"avatar-module_highlighted__TXbIR","avatarWrapper":"avatar-module_avatarWrapper__pxTgm","avatarAction":"avatar-module_avatarAction__3gy3x","avatarPlaceholder":"avatar-module_avatarPlaceholder__2o6mA","avatar":"avatar-module_avatar__1hSKR","avatarMultiWrapper":"avatar-module_avatarMultiWrapper__3oItk","s2":"avatar-module_s2__1-HSv","s3":"avatar-module_s3__16Ow3","s4":"avatar-module_s4__5ifeg","textTop":"avatar-module_textTop__1Lfc7","textBottom":"avatar-module_textBottom__1ddZV","small":"avatar-module_small__3KOX_","large":"avatar-module_large__MFQNk","larger":"avatar-module_larger__351iE","jumbo":"avatar-module_jumbo__1xOrp","extraLarge":"avatar-module_extraLarge__17LYc","statusWrapper":"avatar-module_statusWrapper__3c5BJ","statusOnline":"avatar-module_statusOnline__2n4aR"};
styleInject(css$h);

var UikAvatarStatus = function (_a) {
    var status = _a.status;
    return (React__default.createElement("div", { className: s$c.statusWrapper }, status === 'uik_online' ? (React__default.createElement("div", { className: s$c.statusOnline })) : (React__default.createElement("span", null, status))));
};

var UikAvatarImage = function (_a) {
    var _b;
    var imgUrl = _a.imgUrl, name = _a.name;
    return (Array.isArray(imgUrl) ? (
    /* GROUPS, rendering multiple images */
    React__default.createElement("div", { className: classnames(s$c.avatarMultiWrapper, (_b = {},
            _b[s$c.s2] = imgUrl.length === 2,
            _b[s$c.s3] = imgUrl.length === 3,
            _b[s$c.s4] = imgUrl.length >= 4,
            _b)) }, imgUrl.slice(0, 4).map(function (url) { return (React__default.createElement("img", { key: url, alt: typeof name === 'string' ? name : '', className: s$c.avatar, src: url })); }))) : (
    /* Single */
    React__default.createElement("img", { alt: typeof name === 'string' ? name : '', className: s$c.avatar, src: imgUrl })));
};
UikAvatarImage.defaultProps = {
    name: null,
};

var UikAvatar = function (_a) {
    var _b;
    var name = _a.name, imgUrl = _a.imgUrl, avatarPlaceholder = _a.avatarPlaceholder, textTop = _a.textTop, className = _a.className, highlighted = _a.highlighted, actionIcon = _a.actionIcon, status = _a.status, size = _a.size, textBottom = _a.textBottom, rest = __rest(_a, ["name", "imgUrl", "avatarPlaceholder", "textTop", "className", "highlighted", "actionIcon", "status", "size", "textBottom"]);
    return (React__default.createElement("div", __assign({ className: classnames(s$c.wrapper, className, (_b = {},
            _b[s$c.highlighted] = highlighted,
            _b)) }, rest),
        React__default.createElement("div", { className: classnames(s$c.avatarWrapper) },
            imgUrl ? (React__default.createElement(UikAvatarImage, { className: s$c.avatar, imgUrl: imgUrl })) : (React__default.createElement("div", { className: classnames(s$c.avatarPlaceholder) }, avatarPlaceholder && avatarPlaceholder.content)),
            actionIcon && (React__default.createElement("div", { className: s$c.avatarAction }, actionIcon))),
        (name || textTop || textBottom) && (React__default.createElement("div", { className: s$c.info },
            textTop && (React__default.createElement("div", { className: s$c.textTop }, textTop)),
            name && (React__default.createElement("div", { className: s$c.name }, name)),
            textBottom && (React__default.createElement("div", { className: s$c.textBottom }, textBottom)))),
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

var css$i = ".menuDrop-module_defaultDisplayComponent__1GfY8 {\n  width: 36px;\n  padding: 0;\n  text-align: center;\n  justify-content: center;\n  border-color: #D8DCE6; }\n\n.menuDrop-module_btnContent__2uHaT {\n  justify-content: center; }\n\n.menuDrop-module_list__2bn9C {\n  position: absolute;\n  z-index: 50;\n  background: white;\n  border: 1px solid #D8DCE6;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  list-style: none;\n  top: 100%;\n  margin-top: 4px;\n  right: 0;\n  min-width: 140px; }\n  .menuDrop-module_list__2bn9C > *:first-child {\n    border-top-left-radius: 4px !important;\n    border-top-right-radius: 4px !important; }\n  .menuDrop-module_list__2bn9C > *:last-child {\n    border-bottom-left-radius: 4px !important;\n    border-bottom-right-radius: 4px !important; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_bottomLeft__3vHJn {\n    left: 0;\n    right: auto; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_bottomRight__3_dIF {\n    left: auto;\n    right: 0; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_topLeft__TLFxT, .menuDrop-module_list__2bn9C.menuDrop-module_topRight__2ZMlq {\n    left: 0;\n    right: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: 4px; }\n  .menuDrop-module_list__2bn9C.menuDrop-module_topRight__2ZMlq {\n    left: auto;\n    right: 0; }\n";
var cls$2 = {"defaultDisplayComponent":"menuDrop-module_defaultDisplayComponent__1GfY8","btnContent":"menuDrop-module_btnContent__2uHaT","list":"menuDrop-module_list__2bn9C","bottomLeft":"menuDrop-module_bottomLeft__3vHJn","bottomRight":"menuDrop-module_bottomRight__3_dIF","topLeft":"menuDrop-module_topLeft__TLFxT","topRight":"menuDrop-module_topRight__2ZMlq"};
styleInject(css$i);

var DefaultDisplayComponent = function (_a) {
    var className = _a.className, title = _a.title, rest = __rest(_a, ["className", "title"]);
    return (React__default.createElement(UikButton, __assign({ className: classnames(cls$2.defaultDisplayComponent, className), contentClassName: cls$2.btnContent }, rest), title ? title : React__default.createElement("span", null, "\u00B7\u00B7\u00B7")));
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

var css$j = ".select-module_wrapper__2F4Go {\n  position: relative;\n  font-size: 0.875rem;\n  display: inline-block; }\n  .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh {\n    width: 100%;\n    text-align: left;\n    position: relative;\n    background: #FFFFFF;\n    border: 1px solid #D8DCE6;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n    overflow: hidden; }\n    .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_label__2uOO1 {\n      position: absolute;\n      top: -18px;\n      font-size: 1rem;\n      left: 14px;\n      pointer-events: none; }\n    .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_valueRenderedWrapper__EihUn {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      justify-content: space-between;\n      width: 100%; }\n      .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_valueRenderedWrapper__EihUn > .select-module_valueWrapper__1UaJ4 {\n        flex-grow: 1;\n        max-width: 98%;\n        min-width: 1px;\n        overflow: hidden; }\n      .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_valueRenderedWrapper__EihUn .select-module_arrowWrapper__3TU82 {\n        flex-grow: 0;\n        transition: 0.2s color;\n        position: relative;\n        width: 1px; }\n        .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_valueRenderedWrapper__EihUn .select-module_arrowWrapper__3TU82:before, .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_valueRenderedWrapper__EihUn .select-module_arrowWrapper__3TU82:after {\n          display: block;\n          position: absolute;\n          content: '';\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 0;\n          border-left: 3px solid transparent;\n          border-right: 3px solid transparent;\n          border-bottom: 3px solid #9EA0A5; }\n        .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_valueRenderedWrapper__EihUn .select-module_arrowWrapper__3TU82:after {\n          top: -4px; }\n        .select-module_wrapper__2F4Go .select-module_valueRendered__1quzh .select-module_valueRenderedWrapper__EihUn .select-module_arrowWrapper__3TU82:before {\n          top: 2px;\n          transform: rotate(180deg); }\n  .select-module_wrapper__2F4Go .select-module_valueWrapper__1UaJ4 {\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n    .select-module_wrapper__2F4Go .select-module_valueWrapper__1UaJ4.select-module_placeholderEmpty__3HKqv {\n      color: #9EA0A5; }\n\n.select-module_optionListWrapper__1EGkJ {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #D8DCE6;\n  background: white;\n  border-radius: 4px;\n  position: absolute !important;\n  z-index: 1000;\n  top: 100%;\n  right: 0;\n  transform: translateY(6px);\n  max-height: 306px;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  min-width: 140px; }\n  .select-module_optionListWrapper__1EGkJ > * {\n    min-height: 1px; }\n  .select-module_optionListWrapper__1EGkJ.select-module_bottomLeft__dLeT6 {\n    left: 0;\n    right: auto; }\n  .select-module_optionListWrapper__1EGkJ.select-module_topLeft__VCbj3, .select-module_optionListWrapper__1EGkJ.select-module_topRight__PFBsU {\n    left: 0;\n    right: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: 4px; }\n  .select-module_optionListWrapper__1EGkJ.select-module_topRight__PFBsU {\n    left: auto;\n    right: 0; }\n  .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb {\n    width: 100%;\n    min-height: 1px;\n    max-height: 235px;\n    position: relative;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch; }\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb > * {\n      width: 100%; }\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS,\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus {\n      width: 100%;\n      outline: none;\n      cursor: pointer;\n      width: 100%;\n      background: transparent;\n      border: none;\n      text-align: left;\n      border-radius: 0;\n      min-height: 38px; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_optionContent__3QYJy,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_optionContent__3QYJy {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center; }\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_optionContent__3QYJy > *,\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_optionContent__3QYJy > * {\n          min-width: 1px;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_optionContent__3QYJy > *:first-child,\n        .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_optionContent__3QYJy > *:first-child {\n          flex-grow: 1;\n          flex-shrink: 1; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS .select-module_check__BYMTm,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus .select-module_check__BYMTm {\n        color: #38B249;\n        margin-left: 12px;\n        flex-shrink: 0;\n        position: relative;\n        width: 5px;\n        height: 5px;\n        background: #38B249;\n        border-radius: 50%; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:hover,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus:hover {\n        border: none !important; }\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:not(:last-child), .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:not(:last-child):hover,\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus:not(:last-child),\n      .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus:not(:last-child):hover {\n        border-bottom: 1px solid #EAEDF3 !important; }\n    .select-module_optionListWrapper__1EGkJ .select-module_optionList__2t9vb .select-module_option__2bqOS:focus {\n      color: #3E3F42; }\n\n.select-module_placeholderAndOther__3pYCE {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start; }\n  .select-module_placeholderAndOther__3pYCE > *:first-child {\n    min-width: 5px;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .select-module_placeholderAndOther__3pYCE .select-module_plusValue__1zh_x {\n    display: inline-block;\n    background: #D8DCE6;\n    border: 1px solid #EAEDF3;\n    height: 20px;\n    border-radius: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px;\n    min-width: 30px;\n    margin-left: 10px;\n    font-size: 0.7rem; }\n";
var cls$3 = {"wrapper":"select-module_wrapper__2F4Go","valueRendered":"select-module_valueRendered__1quzh","label":"select-module_label__2uOO1","valueRenderedWrapper":"select-module_valueRenderedWrapper__EihUn","valueWrapper":"select-module_valueWrapper__1UaJ4","arrowWrapper":"select-module_arrowWrapper__3TU82","placeholderEmpty":"select-module_placeholderEmpty__3HKqv","optionListWrapper":"select-module_optionListWrapper__1EGkJ","bottomLeft":"select-module_bottomLeft__dLeT6","topLeft":"select-module_topLeft__VCbj3","topRight":"select-module_topRight__PFBsU","optionList":"select-module_optionList__2t9vb","option":"select-module_option__2bqOS","optionContent":"select-module_optionContent__3QYJy","check":"select-module_check__BYMTm","placeholderAndOther":"select-module_placeholderAndOther__3pYCE","plusValue":"select-module_plusValue__1zh_x"};
styleInject(css$j);

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

var css$k = ".container-h-module_wrapper__hTWD3 {\n  flex-grow: 1;\n  height: 100%;\n  display: flex; }\n  .container-h-module_wrapper__hTWD3 > * {\n    min-width: 1px; }\n";
var cls$4 = {"wrapper":"container-h-module_wrapper__hTWD3"};
styleInject(css$k);

var UikContainerHorizontal = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$4.wrapper, className) }, rest), children));
};
UikContainerHorizontal.defaultProps = {
    className: null,
    children: null,
};

var css$l = ".container-v-module_container__32EQs {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex-grow: 1; }\n  .container-v-module_container__32EQs > * {\n    min-height: 1px; }\n";
var cls$5 = {"container":"container-v-module_container__32EQs"};
styleInject(css$l);

var UikContainerVertical = function (_a) {
    var className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$5.container, className) }, rest), children));
};
UikContainerVertical.defaultProps = {
    className: null,
    children: null,
};

var css$m = ".scroll-module_wrapper__37oPe {\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n";
var cls$6 = {"wrapper":"scroll-module_wrapper__37oPe"};
styleInject(css$m);

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

var css$n = ".nav-icon-module_wrapper__1HBBe {\n  height: 20px;\n  width: 20px;\n  position: relative;\n  color: #9EA0A5; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_a__3-rM6,\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_b__3bNxF,\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_c__3skaz {\n    position: absolute;\n    fill: currentColor;\n    transform: rotate(0);\n    transition: .2s top .4s, .1s left .2s, .2s transform, .2s opacity .2s; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_a__3-rM6 {\n    left: 0;\n    top: 2px; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_b__3bNxF {\n    top: 9px;\n    left: 0; }\n  .nav-icon-module_wrapper__1HBBe .nav-icon-module_c__3skaz {\n    left: 6px;\n    top: 16px; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_a__3-rM6,\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_b__3bNxF,\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_c__3skaz {\n    transition: .2s opacity, .2s top, .2s left .2s, .2s transform .4s; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_a__3-rM6,\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_c__3skaz {\n    right: auto;\n    left: 3px;\n    top: 9px; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_b__3bNxF {\n    opacity: 0; }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_a__3-rM6 {\n    transform: rotate(-45deg); }\n  .nav-icon-module_wrapper__1HBBe.nav-icon-module_isOpen__3hwAx .nav-icon-module_c__3skaz {\n    transform: rotate(45deg); }\n";
var cls$7 = {"wrapper":"nav-icon-module_wrapper__1HBBe","a":"nav-icon-module_a__3-rM6","b":"nav-icon-module_b__3bNxF","c":"nav-icon-module_c__3skaz","isOpen":"nav-icon-module_isOpen__3hwAx"};
styleInject(css$n);

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

var css$o = ".nav-link-module_wrapper__16HY2 {\n  font-size: .875rem;\n  color: #3E3F42;\n  display: block;\n  padding: 0 30px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .nav-link-module_wrapper__16HY2 .nav-link-module_icon__6NMaj {\n    display: inline-block;\n    margin-right: 12px;\n    width: 18px;\n    text-align: center; }\n  .nav-link-module_wrapper__16HY2 .nav-link-module_rightEl__QEXWy {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1rem; }\n  .nav-link-module_wrapper__16HY2.nav-link-module_highlighted__rI0es .nav-link-module_text__2W-h2 {\n    font-weight: 500; }\n  .nav-link-module_wrapper__16HY2.active {\n    font-weight: 500;\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05);\n    box-shadow: inset 3px 0 0 0 #1665D8; }\n  .nav-link-module_wrapper__16HY2:hover {\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05); }\n\n.nav-link-module_disabled__3heKb {\n  color: #9EA0A5;\n  cursor: not-allowed;\n  opacity: 0.5;\n  text-decoration: none; }\n";
var cls$8 = {"wrapper":"nav-link-module_wrapper__16HY2","icon":"nav-link-module_icon__6NMaj","rightEl":"nav-link-module_rightEl__QEXWy","highlighted":"nav-link-module_highlighted__rI0es","text":"nav-link-module_text__2W-h2","disabled":"nav-link-module_disabled__3heKb"};
styleInject(css$o);

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

var css$p = ".nav-link-module_wrapperDark__11aHv {\n  margin: 0 15px;\n  border: none;\n  border-radius: 4px;\n  padding: 0 15px;\n  font-weight: 500;\n  color: white; }\n  .nav-link-module_wrapperDark__11aHv > * {\n    color: white; }\n  .nav-link-module_wrapperDark__11aHv.active {\n    background: #1665D8;\n    color: white; }\n    .nav-link-module_wrapperDark__11aHv.active .nav-link-module_rightEl__3DSmM {\n      color: white; }\n  .nav-link-module_wrapperDark__11aHv:not(.active):hover {\n    color: white;\n    background: rgba(255, 255, 255, 0.05);\n    border: none;\n    box-shadow: none; }\n";
var cls$9 = {"wrapperDark":"nav-link-module_wrapperDark__11aHv","rightEl":"nav-link-module_rightEl__3DSmM"};
styleInject(css$p);

var UikNavLinkDark = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement(UikNavLink, __assign({ className: classnames(cls$9.wrapperDark, className) }, rest), children));
};
UikNavLinkDark.defaultProps = {
    Component: 'a',
};

var css$q = ".nav-link-secondary-module_wrapper__3k4v9 {\n  font-size: .875rem;\n  color: #6B6C6F;\n  display: block;\n  padding: 0 30px 0 46px;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .nav-link-secondary-module_wrapper__3k4v9 .nav-link-secondary-module_icon__psgeH {\n    display: inline-block;\n    margin-right: 12px; }\n  .nav-link-secondary-module_wrapper__3k4v9 .nav-link-secondary-module_rightEl__2nQYe {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1rem; }\n  .nav-link-secondary-module_wrapper__3k4v9.nav-link-secondary-module_highlighted__1Cjzl .nav-link-secondary-module_text__33IKA {\n    color: #3E3F42;\n    font-weight: 500; }\n  .nav-link-secondary-module_wrapper__3k4v9.active {\n    font-weight: 500;\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05);\n    box-shadow: inset 3px 0 0 0 #1665D8; }\n  .nav-link-secondary-module_wrapper__3k4v9:hover {\n    color: #1665D8;\n    background: rgba(84, 147, 245, 0.05); }\n";
var cls$a = {"wrapper":"nav-link-secondary-module_wrapper__3k4v9","icon":"nav-link-secondary-module_icon__psgeH","rightEl":"nav-link-secondary-module_rightEl__2nQYe","highlighted":"nav-link-secondary-module_highlighted__1Cjzl","text":"nav-link-secondary-module_text__33IKA"};
styleInject(css$q);

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

var css$r = ".nav-link-2-module_wrapper__20fgQ {\n  font-size: .875rem;\n  color: #3E3F42;\n  display: block;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #EAEDF3; }\n  .nav-link-2-module_wrapper__20fgQ .nav-link-2-module_text__1xFcq {\n    display: flex;\n    align-items: center; }\n  .nav-link-2-module_wrapper__20fgQ .nav-link-2-module_icon__1UFdt {\n    display: inline-block;\n    margin-right: 12px;\n    color: #9EA0A5;\n    width: 18px;\n    text-align: center;\n    font-size: 20px; }\n  .nav-link-2-module_wrapper__20fgQ .nav-link-2-module_rightEl__3Qg1e {\n    font-size: 0.75rem;\n    color: #9EA0A5;\n    line-height: 1rem; }\n  .nav-link-2-module_wrapper__20fgQ.nav-link-2-module_highlighted__1mpsg .nav-link-2-module_text__1xFcq {\n    font-weight: 500; }\n  .nav-link-2-module_wrapper__20fgQ.active {\n    font-weight: 500; }\n    .nav-link-2-module_wrapper__20fgQ.active .nav-link-2-module_icon__1UFdt {\n      color: #1665D8; }\n  .nav-link-2-module_wrapper__20fgQ:hover .nav-link-2-module_icon__1UFdt {\n    color: rgba(22, 101, 216, 0.8); }\n";
var cls$b = {"wrapper":"nav-link-2-module_wrapper__20fgQ","text":"nav-link-2-module_text__1xFcq","icon":"nav-link-2-module_icon__1UFdt","rightEl":"nav-link-2-module_rightEl__3Qg1e","highlighted":"nav-link-2-module_highlighted__1mpsg"};
styleInject(css$r);

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

var css$s = ".nav-link-two-container-module_wrapper__2yBhx {\n  padding: 16px 30px 30px; }\n";
var cls$c = {"wrapper":"nav-link-two-container-module_wrapper__2yBhx"};
styleInject(css$s);

var UikNavLinkTwoContainer = function (_a) {
    var children = _a.children, className = _a.className, positionRight = _a.positionRight, rest = __rest(_a, ["children", "className", "positionRight"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$c.wrapper, className) }, rest), children));
};
UikNavLinkTwoContainer.defaultProps = {
    className: null,
    positionRight: false,
    children: null,
};

var css$t = ".nav-panel-module_wrapper__26GMu {\n  /* Menu Base: */\n  background: white;\n  border-right: 1px solid #EAEDF3;\n  height: 100%;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 270px;\n  width: 270px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n  .nav-panel-module_wrapper__26GMu.nav-panel-module_positionRight__3-J31 {\n    border-right: none;\n    border-left: 1px solid #EAEDF3; }\n";
var cls$d = {"wrapper":"nav-panel-module_wrapper__26GMu","positionRight":"nav-panel-module_positionRight__3-J31"};
styleInject(css$t);

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

var css$u = ".nav-section-module_wrapper__2oFf1 + .nav-section-module_wrapper__2oFf1 {\n  margin-top: 20px; }\n\n.nav-section-module_wrapper__2oFf1:last-child {\n  margin-bottom: 20px; }\n\n.nav-section-module_wrapper__2oFf1:first-child {\n  margin-top: 15px; }\n";
var cls$e = {"wrapper":"nav-section-module_wrapper__2oFf1"};
styleInject(css$u);

var UikNavSection = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React.createElement("section", __assign({ className: classnames(cls$e.wrapper, className) }, rest), children));
};
UikNavSection.defaultProps = {
    className: null,
    children: null,
};

var css$v = ".nav-section-title-module_wrapper__2XT6i {\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 0.75rem;\n  color: #9EA0A5;\n  line-height: 1.5;\n  display: block;\n  padding: 10px 30px; }\n";
var cls$f = {"wrapper":"nav-section-title-module_wrapper__2XT6i"};
styleInject(css$v);

var UikSectionName = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("span", __assign({ className: classnames(cls$f.wrapper, className) }, rest), children));
};
UikSectionName.defaultProps = {
    className: null,
    children: null,
};

var css$w = ".nav-title-module_wrapper__3GRgq {\n  padding: 25px 30px 20px;\n  font-size: 1.125rem;\n  color: #3E3F42;\n  display: block;\n  font-weight: 500;\n  line-height: 1; }\n";
var cls$g = {"wrapper":"nav-title-module_wrapper__3GRgq"};
styleInject(css$w);

var UikNavTitle = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("span", __assign({ className: classnames(cls$g.wrapper, className) }, rest), children));
};
UikNavTitle.defaultProps = {
    className: null,
    children: null,
};

var css$x = ".nav-user-module_wrapper__Uw9Fh {\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_avatarWrapper__ES8g1 + * {\n    margin-top: 14px; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_avatarWrapper__ES8g1 .nav-user-module_avatar__2VYRK {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_name__133uz {\n    color: #3E3F42;\n    font-weight: 500;\n    line-height: 1.5rem;\n    font-size: 1rem; }\n  .nav-user-module_wrapper__Uw9Fh .nav-user-module_textTop__T5cBp {\n    color: #9EA0A5;\n    font-size: .875rem; }\n";
var cls$h = {"wrapper":"nav-user-module_wrapper__Uw9Fh","avatarWrapper":"nav-user-module_avatarWrapper__ES8g1","avatar":"nav-user-module_avatar__2VYRK","name":"nav-user-module_name__133uz","textTop":"nav-user-module_textTop__T5cBp"};
styleInject(css$x);

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

var css$y = ".top-bar-module_wrapper__15fe- {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n  background: #FFFFFF;\n  flex-shrink: 0;\n  flex-grow: 0;\n  z-index: 100;\n  border-bottom: 1px solid #EAEDF3; }\n  .top-bar-module_wrapper__15fe-.top-bar-module_center__3VZ9U {\n    justify-content: center; }\n  @media screen and (max-width: 768px) {\n    .top-bar-module_wrapper__15fe- {\n      height: 56px; } }\n\n.top-bar-module_pageName__2RCO_ {\n  /* Socialio: */\n  font-weight: 500;\n  font-size: 1rem;\n  color: #3E3F42;\n  line-height: 1.75; }\n  .top-bar-module_pageName__2RCO_ i {\n    color: #1665D8;\n    margin-right: 14px; }\n";
var cls$i = {"wrapper":"top-bar-module_wrapper__15fe-","center":"top-bar-module_center__3VZ9U","pageName":"top-bar-module_pageName__2RCO_"};
styleInject(css$y);

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

var css$z = ".top-bar-link-module_wrapper__1M7OW {\n  height: 38px;\n  line-height: 38px;\n  padding: 0 15px;\n  display: block;\n  cursor: pointer;\n  font-size: .875rem;\n  color: #3E3F42; }\n  .top-bar-link-module_wrapper__1M7OW:hover, .top-bar-link-module_wrapper__1M7OW.active {\n    color: #1665D8; }\n";
var cls$j = {"wrapper":"top-bar-link-module_wrapper__1M7OW"};
styleInject(css$z);

var UikTopBarLink = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (React__default.createElement("a", __assign({ className: classnames(cls$j.wrapper, className) }, rest), children));
};
UikTopBarLink.defaultProps = {
    className: null,
};

var css$A = ".top-bar-link-container-module_wrapper__3RwBi {\n  margin: 0 -15px;\n  display: flex;\n  align-items: center; }\n";
var cls$k = {"wrapper":"top-bar-link-container-module_wrapper__3RwBi"};
styleInject(css$A);

var UikTopBarLinkContainer = function (_a) {
    var children = _a.children, className = _a.className, Component = _a.Component, rest = __rest(_a, ["children", "className", "Component"]);
    return (React__default.createElement(Component, __assign({ className: classnames(cls$k.wrapper, className) }, rest), children));
};
UikTopBarLinkContainer.defaultProps = {
    className: null,
    children: null,
};

var css$B = ".nav-divider-module_wrapper__1Ldpj {\n  background: #EAEDF3;\n  height: 38px;\n  width: 1px;\n  margin: 0 30px;\n  flex-basis: 1px;\n  flex-shrink: 0; }\n";
var cls$l = {"wrapper":"nav-divider-module_wrapper__1Ldpj"};
styleInject(css$B);

var UikTopBarMenuDivider = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    return (React__default.createElement("div", __assign({ className: classnames(cls$l.wrapper, className) }, rest)));
};
UikTopBarMenuDivider.defaultProps = {
    className: null,
};

var css$C = ".top-bar-section-module_wrapper__1dh9g {\n  display: flex;\n  align-items: center;\n  padding: 0 30px; }\n";
var cls$m = {"wrapper":"top-bar-section-module_wrapper__1dh9g"};
styleInject(css$C);

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

var css$D = ".top-bar-title-module_wrapper__1MBTo {\n  font-weight: 500;\n  font-size: 1rem;\n  color: #3E3F42;\n  line-height: 1.75;\n  display: flex;\n  align-items: center; }\n  .top-bar-title-module_wrapper__1MBTo.top-bar-title-module_large__23Isf {\n    font-size: 1.125rem; }\n  .top-bar-title-module_wrapper__1MBTo i {\n    margin-right: 14px;\n    color: #9EA0A5; }\n";
var cls$n = {"wrapper":"top-bar-title-module_wrapper__1MBTo","large":"top-bar-title-module_large__23Isf"};
styleInject(css$D);

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

var css$E = ".radio-module_inputWrapper__LqkU4 {\n  position: relative; }\n\n.radio-module_header__3vxp5 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 1.5rem; }\n\n.radio-module_input__1cpFC {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background: white;\n  padding: 10px 15px;\n  outline: none;\n  font-size: 0.875rem; }\n  .radio-module_input__1cpFC:hover {\n    cursor: pointer; }\n  .radio-module_input__1cpFC > input {\n    margin-right: 10px; }\n  .radio-module_input__1cpFC:focus {\n    border-color: #1665D8; }\n  .radio-module_input__1cpFC::-webkit-input-placeholder, .radio-module_input__1cpFC::-moz-placeholder, .radio-module_input__1cpFC:-ms-input-placeholder, .radio-module_input__1cpFC:-moz-placeholder {\n    color: #9EA0A5; }\n  .radio-module_input__1cpFC.radio-module_errorHighlight__2_yQg {\n    border-color: #E6492D; }\n\n.radio-module_disabled__2XWen {\n  background: rgba(255, 255, 255, 0.3); }\n  .radio-module_disabled__2XWen:hover {\n    cursor: not-allowed; }\n\n.radio-module_errorMessage__2hhKH {\n  color: #E6492D;\n  margin: 0;\n  line-height: 1.375rem; }\n";
var s$d = {"inputWrapper":"radio-module_inputWrapper__LqkU4","header":"radio-module_header__3vxp5","input":"radio-module_input__1cpFC","errorHighlight":"radio-module_errorHighlight__2_yQg","disabled":"radio-module_disabled__2XWen","errorMessage":"radio-module_errorMessage__2hhKH"};
styleInject(css$E);

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
            return (React__default.createElement("div", { key: key, onClick: _this.changeValue(option.value), className: classnames(s$d.input, disabled ? s$d.disabled : '') },
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
            label && (React__default.createElement("div", { className: s$d.header },
                React__default.createElement(UikContentTitle, null, label))),
            React__default.createElement("div", { className: className ? className : '' }, options.map(this.renderSingleRadio))));
    };
    return UikRadio;
}(React.Component));

var css$F = ".checkbox-module_header__209cu {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 1.5rem; }\n\n.checkbox-module_checkbox__1gYAB {\n  display: flex;\n  align-items: flex-start; }\n  .checkbox-module_checkbox__1gYAB input {\n    margin-right: 10px;\n    margin-top: 2px; }\n";
var s$e = {"header":"checkbox-module_header__209cu","checkbox":"checkbox-module_checkbox__1gYAB"};
styleInject(css$F);

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
        return (React__default.createElement("div", { className: classnames(s$e.checkbox, className), onClick: this.changeHandler },
            React__default.createElement("input", { name: name, type: "checkbox", checked: this.state.value, onChange: this.changeHandler }),
            label && (React__default.createElement("div", { className: s$e.header },
                React__default.createElement(UikContentTitle, null, label)))));
    };
    return UikCheckbox;
}(React__default.PureComponent));

var css$G = ".select-module_wrapper__2rXKd {\n  position: relative;\n  font-size: 0.875rem;\n  display: inline-block; }\n  .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV {\n    width: 100%;\n    text-align: left;\n    position: relative;\n    background: #FFFFFF;\n    border: 1px solid #D8DCE6;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n    overflow: hidden; }\n    .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_label__3NSXb {\n      position: absolute;\n      top: -18px;\n      font-size: 1rem;\n      left: 14px;\n      pointer-events: none; }\n    .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_valueRenderedWrapper__2Dq_0 {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      justify-content: space-between;\n      width: 100%; }\n      .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_valueRenderedWrapper__2Dq_0 > .select-module_valueWrapper__3DJKr {\n        flex-grow: 1;\n        max-width: 98%;\n        min-width: 1px;\n        overflow: hidden; }\n      .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_valueRenderedWrapper__2Dq_0 .select-module_arrowWrapper__3DaZ2 {\n        flex-grow: 0;\n        transition: 0.2s color;\n        position: relative;\n        width: 1px; }\n        .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_valueRenderedWrapper__2Dq_0 .select-module_arrowWrapper__3DaZ2:before, .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_valueRenderedWrapper__2Dq_0 .select-module_arrowWrapper__3DaZ2:after {\n          display: block;\n          position: absolute;\n          content: '';\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 0;\n          border-left: 3px solid transparent;\n          border-right: 3px solid transparent;\n          border-bottom: 3px solid #9EA0A5; }\n        .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_valueRenderedWrapper__2Dq_0 .select-module_arrowWrapper__3DaZ2:after {\n          top: -4px; }\n        .select-module_wrapper__2rXKd .select-module_valueRendered__1vkRV .select-module_valueRenderedWrapper__2Dq_0 .select-module_arrowWrapper__3DaZ2:before {\n          top: 2px;\n          transform: rotate(180deg); }\n  .select-module_wrapper__2rXKd .select-module_valueWrapper__3DJKr {\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n    .select-module_wrapper__2rXKd .select-module_valueWrapper__3DJKr.select-module_placeholderEmpty__2WFsu {\n      color: #9EA0A5; }\n\n.select-module_optionListWrapper__3LELa {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #D8DCE6;\n  background: white;\n  border-radius: 4px;\n  position: absolute !important;\n  z-index: 1000;\n  top: 100%;\n  right: 0;\n  transform: translateY(6px);\n  max-height: 306px;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  min-width: 140px; }\n  .select-module_optionListWrapper__3LELa > * {\n    min-height: 1px; }\n  .select-module_optionListWrapper__3LELa.select-module_bottomLeft__26Ofb {\n    left: 0;\n    right: auto; }\n  .select-module_optionListWrapper__3LELa.select-module_topLeft__3A5uZ, .select-module_optionListWrapper__3LELa.select-module_topRight__MA8tZ {\n    left: 0;\n    right: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: 4px; }\n  .select-module_optionListWrapper__3LELa.select-module_topRight__MA8tZ {\n    left: auto;\n    right: 0; }\n  .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S {\n    width: 100%;\n    min-height: 1px;\n    max-height: 235px;\n    position: relative;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch; }\n    .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S > * {\n      width: 100%; }\n    .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9,\n    .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus {\n      width: 100%;\n      outline: none;\n      cursor: pointer;\n      width: 100%;\n      background: transparent;\n      border: none;\n      text-align: left;\n      border-radius: 0;\n      min-height: 38px; }\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9 .select-module_optionContent__2we8J,\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus .select-module_optionContent__2we8J {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center; }\n        .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9 .select-module_optionContent__2we8J > *,\n        .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus .select-module_optionContent__2we8J > * {\n          min-width: 1px;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n        .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9 .select-module_optionContent__2we8J > *:first-child,\n        .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus .select-module_optionContent__2we8J > *:first-child {\n          flex-grow: 1;\n          flex-shrink: 1; }\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9 .select-module_check__X55HC,\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus .select-module_check__X55HC {\n        color: #38B249;\n        margin-left: 12px;\n        flex-shrink: 0;\n        position: relative;\n        width: 5px;\n        height: 5px;\n        background: #38B249;\n        border-radius: 50%; }\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:hover,\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus:hover {\n        border: none !important; }\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:not(:last-child), .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:not(:last-child):hover,\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus:not(:last-child),\n      .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus:not(:last-child):hover {\n        border-bottom: 1px solid #EAEDF3 !important; }\n    .select-module_optionListWrapper__3LELa .select-module_optionList__tUw4S .select-module_option__35DT9:focus {\n      color: #3E3F42; }\n\n.select-module_placeholderAndOther__3YNUZ {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start; }\n  .select-module_placeholderAndOther__3YNUZ > *:first-child {\n    min-width: 5px;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .select-module_placeholderAndOther__3YNUZ .select-module_plusValue__SOfAF {\n    display: inline-block;\n    background: #D8DCE6;\n    border: 1px solid #EAEDF3;\n    height: 20px;\n    border-radius: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5px;\n    min-width: 30px;\n    margin-left: 10px;\n    font-size: 0.7rem; }\n";
var cls$o = {"wrapper":"select-module_wrapper__2rXKd","valueRendered":"select-module_valueRendered__1vkRV","label":"select-module_label__3NSXb","valueRenderedWrapper":"select-module_valueRenderedWrapper__2Dq_0","valueWrapper":"select-module_valueWrapper__3DJKr","arrowWrapper":"select-module_arrowWrapper__3DaZ2","placeholderEmpty":"select-module_placeholderEmpty__2WFsu","optionListWrapper":"select-module_optionListWrapper__3LELa","bottomLeft":"select-module_bottomLeft__26Ofb","topLeft":"select-module_topLeft__3A5uZ","topRight":"select-module_topRight__MA8tZ","optionList":"select-module_optionList__tUw4S","option":"select-module_option__35DT9","optionContent":"select-module_optionContent__2we8J","check":"select-module_check__X55HC","placeholderAndOther":"select-module_placeholderAndOther__3YNUZ","plusValue":"select-module_plusValue__SOfAF"};
styleInject(css$G);

var OptionList$1 = /** @class */ (function (_super) {
    __extends(OptionList, _super);
    function OptionList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOptionWrapper = function (_a) {
            var label = _a.label;
            return (React.createElement("div", { className: cls$o.label }, label));
        };
        return _this;
    }
    OptionList.prototype.renderOptions = function () {
        var _this = this;
        var _a = this.props, options = _a.options, optionClick = _a.optionClick, selected = _a.selected, _b = _a.optionProps, optionClassName = _b.className, optionPropsRest = __rest(_b, ["className"]);
        return options.map(function (i) {
            var indexIsSelected = selected.find(function (k) { return i.value === k.value; });
            var onClick = function (key) { return function () {
                optionClick(key);
            }; };
            return (React.createElement(UikButton, __assign({ key: i.value.toString(), className: classnames(cls$o.option, optionClassName), onClick: onClick(i) }, optionPropsRest),
                React.createElement("div", { className: cls$o.optionContent },
                    _this.renderOptionWrapper(i),
                    indexIsSelected ? (React.createElement("div", { className: cls$o.check })) : null)));
        });
    };
    OptionList.prototype.render = function () {
        var _a;
        var position = this.props.position;
        return (React.createElement("div", { className: classnames(cls$o.optionListWrapper, (_a = {},
                _a[cls$o[position]] = position,
                _a)) },
            React.createElement("div", { className: cls$o.optionList }, this.renderOptions())));
    };
    OptionList.defaultProps = {
        position: 'bottomLeft',
        optionProps: {},
    };
    return OptionList;
}(React.Component));

var Select$1 = /** @class */ (function (_super) {
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
        _this.search = function (e) {
            _this.setState({ focused: true, currentSearch: e });
            console.log(e);
        };
        _this.filterOptions = function (checker) {
            return function (item) {
                return ((item.label && item.label.toString().toLowerCase().indexOf(checker.toLowerCase()) !== -1) ||
                    item.value.toString().toLowerCase().indexOf(checker.toLowerCase()) !== -1);
            };
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
            currentSearch: '',
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
            return (React__default.createElement("span", { className: cls$o.valueWrapper }, "No options available"));
        }
        if (disabled || selected.length < 1) {
            return (React__default.createElement("span", { className: classnames(cls$o.valueWrapper, cls$o.placeholderEmpty) }, placeholder));
        }
        if (selected.length === 1) {
            return (React__default.createElement("div", { className: cls$o.valueWrapper }, firstRender.label));
        }
        return (React__default.createElement("div", { className: cls$o.placeholderAndOther },
            React__default.createElement("div", null, firstRender.label),
            React__default.createElement("div", { className: cls$o.plusValue },
                "+",
                selected.length - 1)));
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, value = _a.value, className = _a.className, disabled = _a.disabled, position = _a.position, optionProps = _a.optionProps, label = _a.label;
        var _b = this.state, selected = _b.selected, focused = _b.focused, currentSearch = _b.currentSearch;
        return (React__default.createElement(UikOutsideClickHandler, { className: classnames(cls$o.wrapper, className), onOutsideClick: function () { return focused ? _this.onClickUnfocus : null; }, onOutsideScroll: false },
            label ? React__default.createElement(UikContentTitle, null, label) : null,
            React__default.createElement("div", { className: "input" },
                React__default.createElement("div", { className: cls$o.valueRenderedWrapper }, this.renderValue()),
                React__default.createElement(Input, { onInput: this.search, disabled: disabled || options.length < 1 })),
            focused && !disabled && (React__default.createElement(OptionList$1, { onAllClick: this.onAllClick, optionClick: this.optionClick, optionProps: optionProps, options: options.filter(this.filterOptions(currentSearch)), position: position, selected: value || selected })),
            this.renderHiddenInputs()));
    };
    Select.defaultProps = {
        onChange: function (selected) { },
        multi: false,
        className: '',
        disabled: false,
        defaultValue: [],
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
exports.UikDatePicker = UikDatePicker;
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
exports.UikLocalSuggest = Select$1;
//# sourceMappingURL=index.js.map
