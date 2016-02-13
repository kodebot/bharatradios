System.register(["react"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1;
    var PlayerComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            PlayerComponent = (function (_super) {
                __extends(PlayerComponent, _super);
                function PlayerComponent(props) {
                    _super.call(this, props);
                    this.props = props;
                }
                PlayerComponent.prototype.previous = function () {
                    this.props.onPreviousOrNext(true);
                };
                PlayerComponent.prototype.next = function () {
                    this.props.onPreviousOrNext(false);
                };
                PlayerComponent.prototype.render = function () {
                    return (react_1.default.createElement("div", {id: "jp_container"}, react_1.default.createElement("div", {className: "jp-type-playlist"}, react_1.default.createElement("div", {id: "jplayer", className: "jp-jplayer hide"}), react_1.default.createElement("div", {className: "jp-gui"}, react_1.default.createElement("div", {className: "jp-video-play hide"}, react_1.default.createElement("a", {className: "jp-video-play-icon"}, "play")), react_1.default.createElement("div", {className: "jp-interface"}, react_1.default.createElement("div", {className: "jp-controls"}, react_1.default.createElement("div", {onClick: this.previous.bind(this)}, react_1.default.createElement("a", {className: "jp-previous"}, react_1.default.createElement("i", {className: "icon-control-rewind i-lg"}))), react_1.default.createElement("div", null, react_1.default.createElement("a", {className: "jp-play"}, react_1.default.createElement("i", {className: "icon-control-play i-2x"})), react_1.default.createElement("a", {className: "jp-pause"}, react_1.default.createElement("i", {className: "icon-control-pause i-2x"}))), react_1.default.createElement("div", {onClick: this.next.bind(this)}, react_1.default.createElement("a", {className: "jp-next"}, react_1.default.createElement("i", {className: "icon-control-forward i-lg"}))), react_1.default.createElement("div", {className: "hide"}, react_1.default.createElement("a", {className: "jp-stop"}, react_1.default.createElement("i", {className: "fa fa-stop"}))), react_1.default.createElement("div", {className: "jp-progress"}, react_1.default.createElement("div", {className: "jp-title text-lt"})), react_1.default.createElement("div", {className: ""}, react_1.default.createElement("a", {className: "jp-mute", title: "mute"}, react_1.default.createElement("i", {className: "icon-volume-2"})), react_1.default.createElement("a", {className: "jp-unmute hid", title: "unmute"}, react_1.default.createElement("i", {className: "icon-volume-off"}))), react_1.default.createElement("div", {className: "jp-volume"}, react_1.default.createElement("div", {className: "jp-volume-bar dk"}, react_1.default.createElement("div", {className: "jp-volume-bar-value lter"})))))), react_1.default.createElement("div", {className: "jp-no-solution hide"}, react_1.default.createElement("span", null, "Update Required"), " To play the media you will need to either update your browser to a recent version" + ' ' + "or update your ", react_1.default.createElement("a", {href: "http://get.adobe.com/flashplayer/", target: "_blank"}, "Flash plugin"), "."))));
                };
                return PlayerComponent;
            }(react_1.default.Component));
            exports_1("PlayerComponent", PlayerComponent);
        }
    }
});
//# sourceMappingURL=player.component.js.map