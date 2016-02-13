///<reference path="../../typings/tsd.d.ts"/>
System.register(["react", "react-dom", "../player/player.component", "../radio/radio-list.component", "../player/audioPlayerService"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, react_dom_1, player_component_1, radio_list_component_1, audioPlayerService_1;
    var ShellComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (player_component_1_1) {
                player_component_1 = player_component_1_1;
            },
            function (radio_list_component_1_1) {
                radio_list_component_1 = radio_list_component_1_1;
            },
            function (audioPlayerService_1_1) {
                audioPlayerService_1 = audioPlayerService_1_1;
            }],
        execute: function() {
            ShellComponent = (function (_super) {
                __extends(ShellComponent, _super);
                function ShellComponent(props) {
                    _super.call(this, props);
                    this.state = { radios: [], currentIndex: 0 };
                    this._audioPlayerService = new audioPlayerService_1.AudioPlayerService();
                }
                ShellComponent.prototype.previousOrNextSelected = function (prev) {
                    var newRadioIndex = 0;
                    if (prev) {
                        if (this.state.currentIndex === 0) {
                            newRadioIndex = this.state.radios.length - 1;
                        }
                        else {
                            newRadioIndex = this.state.currentIndex - 1;
                        }
                    }
                    else {
                        if (this.state.currentIndex === this.state.radios.length - 1) {
                            newRadioIndex = 0;
                        }
                        else {
                            newRadioIndex = this.state.currentIndex + 1;
                        }
                    }
                    this.updateCurrentlyPlaying(this.state.radios[newRadioIndex]);
                };
                ShellComponent.prototype.updateCurrentlyPlaying = function (radio) {
                    var _this = this;
                    this.state.radios.forEach(function (item, index) {
                        if (item.id === radio.id) {
                            item.currentlyPlaying = true;
                            _this.state.currentIndex = index;
                        }
                        else {
                            item.currentlyPlaying = false;
                        }
                    });
                    this.setState(this.state);
                    this._audioPlayerService.play(radio.streamUrl, radio.name);
                };
                ShellComponent.prototype.componentDidMount = function () {
                    var _this = this;
                    $.get("https://raw.githubusercontent.com/vmanikandan001/Vaanoli/master/list.json")
                        .done(function (data) {
                        _this.setState({ radios: JSON.parse(data).radios.map(function (radio) { radio.key = radio.id; radio.currentlyPlaying = false; return radio; }) });
                        if (_this.state.radios) {
                            // play the first radio by default
                            _this.updateCurrentlyPlaying(_this.state.radios[0]);
                        }
                    })
                        .fail(function (error) {
                        console.log(error);
                    });
                };
                ShellComponent.prototype.render = function () {
                    var adStyle = {
                        "display": "inline-block",
                        width: "300px",
                        height: "600px"
                    };
                    return (react_1.default.createElement("section", {className: "vbox bg-black lt"}, react_1.default.createElement("section", {className: "w-f-md"}, react_1.default.createElement("section", {className: "hbox stretch bg-black dker"}, react_1.default.createElement("section", {className: "col-sm-2 no-padder lt"}, react_1.default.createElement("section", {className: "vbox"}, react_1.default.createElement("script", {async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}), react_1.default.createElement("div", {className: "adsbygoogle", style: adStyle, "data-ad-client": "ca-pub-3040799023438032", "data-ad-slot": "5454002702"}), react_1.default.createElement("script", null, "(adsbygoogle = window.adsbygoogle ||[]).push(", ");"))), react_1.default.createElement("section", {className: "col-sm-6 no-padder bg"}, react_1.default.createElement("section", {className: " bg-success dker"}, react_1.default.createElement(player_component_1.PlayerComponent, {onPreviousOrNext: this.previousOrNextSelected.bind(this)})), react_1.default.createElement("section", {className: "vbox"}, react_1.default.createElement("section", {className: "scrollable hover  w-f-md"}, react_1.default.createElement(radio_list_component_1.RadioListComponent, {onRadioChange: this.updateCurrentlyPlaying.bind(this), radios: this.state.radios})))), react_1.default.createElement("section", {className: "col-sm-2 no-padder lt"}, react_1.default.createElement("section", {className: "vbox"})))), react_1.default.createElement("footer", {className: "text-white"}, "DISCLAIMER: BharatRadios does not host any radios, it simply provides links to the radios hosted in the internet." + ' ' + "If you are owner of the radio and you don't want BharatRadios to provide link to your radio then please send an email to the address below.", react_1.default.createElement("br", null), "Qubits Solutions Ltd | mailto:qubitssolutionsltd@outlook.com")));
                };
                return ShellComponent;
            }(react_1.default.Component));
            exports_1("ShellComponent", ShellComponent);
            react_dom_1.render(react_1.default.createElement(ShellComponent, null), document.getElementById("mountnode"));
        }
    }
});
//# sourceMappingURL=shell.component.js.map