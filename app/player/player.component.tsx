///<reference path="../../typings/tsd.d.ts"/>
import React from "react";

export class PlayerComponent extends React.Component<any, any>{
    constructor(public props: any) {
        super(props)
    }
    
    previous(){
        this.props.onPreviousOrNext(true);
    }
    
    next(){
        this.props.onPreviousOrNext(false);
    }

    render() {
        return (
            <div id="jp_container">
                <div className="jp-type-playlist">
                    <div id="jplayer" className="jp-jplayer hide"></div>
                    <div className="jp-gui">
                        <div className="jp-video-play hide">
                            <a className="jp-video-play-icon">play</a>
                        </div>
                        <div className="jp-interface">
                            <div className="jp-controls">
                                <div onClick={this.previous.bind(this)}><a className="jp-previous"><i className="icon-control-rewind i-lg"></i></a></div>
                                <div>
                                    <a className="jp-play"><i className="icon-control-play i-2x"></i></a>
                                    <a className="jp-pause"><i className="icon-control-pause i-2x"></i></a>
                                </div>
                                <div onClick={this.next.bind(this)}><a className="jp-next"><i className="icon-control-forward i-lg"></i></a></div>
                                <div className="hide"><a className="jp-stop"><i className="fa fa-stop"></i></a></div>
                                <div className="jp-progress">
                                    <div className="jp-title text-lt">
                                    </div>
                                </div>

                                <div className="">
                                    <a className="jp-mute" title="mute"><i className="icon-volume-2"></i></a>
                                    <a className="jp-unmute hid" title="unmute"><i className="icon-volume-off"></i></a>
                                </div>
                                <div className="jp-volume">
                                    <div className="jp-volume-bar dk">
                                        <div className="jp-volume-bar-value lter"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jp-no-solution hide">
                        <span>Update Required</span> To play the media you will need to either update your browser to a recent version
                        or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                    </div>
                </div>
            </div>
        );
    }
}