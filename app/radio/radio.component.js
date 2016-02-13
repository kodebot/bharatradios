System.register(["react"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1;
    var RadioComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            RadioComponent = (function (_super) {
                __extends(RadioComponent, _super);
                function RadioComponent(props) {
                    _super.call(this, props);
                }
                RadioComponent.prototype.render = function () {
                    var radioStyle = {
                        "color": this.props.radio.currentlyPlaying === true ? "#1ab667 !important" : "#fff !important",
                        "fontSize": "larger"
                    };
                    var playerIcon = {
                        hidePlay: !this.props.radio.currentlyPlaying,
                        hidePause: this.props.radio.currentlyPlaying
                    };
                    return (react_1.default.createElement("li", {className: "list-group-item clearfix"}, react_1.default.createElement("div", null, react_1.default.createElement("a", {href: "#", className: "jp-play-me pull-right m-t-sm m-l text-md"}, react_1.default.createElement("i", {className: "icon-control-play hide"}), react_1.default.createElement("i", {className: "icon-control-pause hide"})), react_1.default.createElement("a", {href: "#", className: "pull-left thumb-sm m-r"}), react_1.default.createElement("a", {className: "clear", href: "#", onClick: this.props.onClick}, react_1.default.createElement("span", {className: "block text-ellipsis", style: radioStyle}, this.props.radio.name)))));
                };
                return RadioComponent;
            }(react_1.default.Component));
            exports_1("RadioComponent", RadioComponent);
        }
    }
});
//# sourceMappingURL=radio.component.js.map