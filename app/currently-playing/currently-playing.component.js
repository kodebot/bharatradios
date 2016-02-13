System.register(["react"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1;
    var CurrentlyPlayingComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            CurrentlyPlayingComponent = (function (_super) {
                __extends(CurrentlyPlayingComponent, _super);
                function CurrentlyPlayingComponent(props) {
                    _super.call(this, props);
                    this.props = props;
                }
                CurrentlyPlayingComponent.prototype.render = function () {
                    this._imgUrl = "assets/images/radios/tamil/" + this.props.radio.imgName + ".jpg";
                    return (react_1.default.createElement("div", {className: "m-t-n-xxs item pos-rlt"}, react_1.default.createElement("div", {className: "top text-right"}, react_1.default.createElement("span", {className: "musicbar animate bg-success bg-empty inline m-r-lg m-t", style: { width: "25px", height: "30px" }}, react_1.default.createElement("span", {className: "bar1 a3 lter"}), react_1.default.createElement("span", {className: "bar2 a5 lt"}), react_1.default.createElement("span", {className: "bar3 a1 bg"}), react_1.default.createElement("span", {className: "bar4 a4 dk"}), react_1.default.createElement("span", {className: "bar5 a2 dker"}))), react_1.default.createElement("div", {className: "bottom gd bg-info wrapper-lg"}, react_1.default.createElement("span", {className: "h2 font-thin"}, this.props.radio.name))));
                };
                return CurrentlyPlayingComponent;
            }(react_1.default.Component));
            exports_1("CurrentlyPlayingComponent", CurrentlyPlayingComponent);
        }
    }
});
//# sourceMappingURL=currently-playing.component.js.map