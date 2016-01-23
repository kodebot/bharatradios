///<reference path="../../typings/jquery/jquery.d.ts" />
///<reference path="../../typings/misc.d.ts" />
import $ from  "jquery";
import jplayer from  "jplayer";

export class AudioPlayerService {
    constructor() {
        // this.play("test", "test");
    }
    play(url: string, title: string) {
        let player: any = $("#jplayer_N");

        player.jPlayer({
            ready: function() {
                $(this).jPlayer("setMedia", {
                    title: title,
                    m4a: url
                });
                $(this).jPlayer("play");
            },
            cssSelectorAncestor: "#jp_container_N",
            swfPath: "/js", // todo: fix this
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
    }

}
