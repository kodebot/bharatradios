System.register(["jquery", "jplayer"], function(exports_1) {
    "use strict";
    var jquery_1;
    var AudioPlayerService;
    return {
        setters:[
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (_1) {}],
        execute: function() {
            AudioPlayerService = (function () {
                function AudioPlayerService() {
                    // this.play("test", "test");
                }
                AudioPlayerService.prototype.play = function (url, title) {
                    var player = jquery_1.default("#jplayer");
                    player.jPlayer({
                        ready: function () {
                            jquery_1.default(this).jPlayer("setMedia", {
                                title: title,
                                m4a: url
                            });
                            jquery_1.default(this).jPlayer("play");
                        },
                        cssSelectorAncestor: "#jp_container",
                        swfPath: "/js",
                        supplied: "m4a, oga",
                        useStateClassSkin: true,
                        autoBlur: false,
                        smoothPlayBar: true,
                        keyEnabled: true,
                        remainingDuration: true,
                        toggleDuration: true
                    });
                    player.jPlayer("setMedia", { title: title, m4a: url });
                    player.jPlayer("play");
                };
                return AudioPlayerService;
            }());
            exports_1("AudioPlayerService", AudioPlayerService);
        }
    }
});
//# sourceMappingURL=audioPlayerService.js.map