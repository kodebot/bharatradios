///<reference path="../../typings/tsd.d.ts"/>
import React from "react";

export class PlayerComponent extends React.Component<any, any>{
    constructor(public props: any) {
        super(props)
    }

    previous() {
        this.props.onPreviousOrNext(true);
    }

    next() {
        this.props.onPreviousOrNext(false);
    }

    render() {
        return (
            <div className="player">
                <div id="jp_container">
                    <div className="jp-type-playlist">
                        <div id="jplayer" className="jp-jplayer hide"></div>
                        <div className="jp-gui">
                            <div className="jp-video-play hide">
                                <a className="jp-video-play-icon">play</a>
                            </div>
                            <div className="jp-interface">
                                <div className="jp-controls center">
                                    <span>
                                        <i onClick={this.previous.bind(this) } className="fa fa-backward fa-2x player-control jp-previous"></i>
                                    </span>

                                    <span>
                                        <i className="fa fa-play fa-2x player-control jp-play"></i>
                                        <i className="fa fa-stop fa-2x player-control jp-pause"></i>
                                    </span>
                                    
                                    <span>
                                        <i onClick={this.next.bind(this) } className="fa fa-forward fa-2x player-control jp-next"></i>
                                    </span>


                                    <span className="jp-title main-text">
                                    </span>

                                    <span>
                                        <i className="fa fa-volume-up fa-2x player-control jp-mute"></i>
                                        <i className="fa fa-volume-off fa-2x player-control jp-unmute"></i>
                                    <span className="jp-volume">
                                        <span className="player-volume-bar jp-volume-bar">
                                            <span className="player-volume-bar-value jp-volume-bar-value"></span>
                                        </span>
                                    </span>

                                    </span>
                                    


                                </div>
                            </div>
                        </div>
                        <div className="jp-no-solution hide">
                            <span>Update Required</span> To play the media you will need to either update your browser to a recent version
                            or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}