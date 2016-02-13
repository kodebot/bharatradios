///<reference path="../../typings/tsd.d.ts"/>
import React from "react";

export class RadioComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        var radioStyle = {
            "color": this.props.radio.currentlyPlaying === true?"#1ab667 !important":"#fff !important",
            "fontSize": "larger"
        };
        
        var playerIcon={
            hidePlay:!this.props.radio.currentlyPlaying, 
            hidePause:this.props.radio.currentlyPlaying
        };
        
        
        
        return (
            <li className="list-group-item clearfix" >
                <div>
                    <a href="#" className="jp-play-me pull-right m-t-sm m-l text-md">
                        <i className="icon-control-play hide"></i>
                        <i className="icon-control-pause hide"></i>
                    </a>
                    <a href="#" className="pull-left thumb-sm m-r">
                    </a>

                    <a className="clear" href="#" onClick ={this.props.onClick}>
                        <span className="block text-ellipsis" style={radioStyle}>{this.props.radio.name}</span>
                    </a>
                </div >
            </li>
        );
    }
}