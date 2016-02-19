///<reference path="../../typings/tsd.d.ts"/>
import React from "react";

export class RadioComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        var radioStyle = {
            "color": this.props.radio.currentlyPlaying === true ? "#1ab667 !important" : "#fff !important",
            "fontSize": "larger"
        };

        var playerIcon = {
            hidePlay: !this.props.radio.currentlyPlaying,
            hidePause: this.props.radio.currentlyPlaying
        };

        return (
            <li onClick ={this.props.onClick}>
                {this.props.radio.name}
            </li>
        );
    }
}