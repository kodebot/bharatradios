System.register(["react"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1;
    var NavigationComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            NavigationComponent = (function (_super) {
                __extends(NavigationComponent, _super);
                function NavigationComponent(props) {
                    _super.call(this, props);
                }
                NavigationComponent.prototype.render = function () {
                    return (react_1.default.createElement("nav", {className: "navbar navbar-default navbar-fixed-top"}, react_1.default.createElement("div", {className: "container-fluid"}, react_1.default.createElement("div", {className: "navbar-header"}, react_1.default.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#collapsible-navbar", "aria-expanded": "false"}, react_1.default.createElement("span", {className: "sr-only"}, "Toggle navigation"), react_1.default.createElement("span", {className: "icon-bar"}), react_1.default.createElement("span", {className: "icon-bar"}), react_1.default.createElement("span", {className: "icon-bar"})), react_1.default.createElement("a", {className: "navbar-brand", href: "#"}, "Bharat Radios")), react_1.default.createElement("div", {className: "collapse navbar-collapse", id: "collapsible-navbar"}, react_1.default.createElement("ul", {className: "nav navbar-nav"}, react_1.default.createElement("li", {className: ""}, react_1.default.createElement("a", {href: "#"}, "Hindi")), react_1.default.createElement("li", {className: "active"}, react_1.default.createElement("a", {href: "#"}, "Tamil")))))));
                };
                return NavigationComponent;
            }(react_1.default.Component));
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
//# sourceMappingURL=navigation.component.js.map