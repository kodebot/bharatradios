///<reference path="../../typings/tsd.d.ts"/>
System.register(["react", "./radio.component"], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, radio_component_1;
    var RadioListComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (radio_component_1_1) {
                radio_component_1 = radio_component_1_1;
            }],
        execute: function() {
            RadioListComponent = (function (_super) {
                __extends(RadioListComponent, _super);
                function RadioListComponent(props) {
                    _super.call(this, props);
                }
                RadioListComponent.prototype.render = function () {
                    var _this = this;
                    var radiosComponents = this.props.radios.map(function (radio) { return react_1.default.createElement(radio_component_1.RadioComponent, {key: radio.id, radio: radio, onClick: _this.props.onRadioChange.bind(_this, radio)}); });
                    return (react_1.default.createElement("ul", {className: "list-group list-group-lg no-bg auto m-b-none m-t-n-xxs"}, radiosComponents));
                };
                return RadioListComponent;
            }(react_1.default.Component));
            exports_1("RadioListComponent", RadioListComponent);
        }
    }
});
//# sourceMappingURL=radio-list.component.js.map