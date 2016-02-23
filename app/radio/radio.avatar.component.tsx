///<reference path="../../typings/tsd.d.ts"/>
import React from "react";

export class RadioAvatarComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        var thumpStyle = {backgroundColor: this.getRandomThumpIconColor()};
        return (
            <div className="avatar" style={thumpStyle}>{this.getThumpInitials(this.props.radio.name)}</div>
        );
    }

    getRandomThumpIconColor() {
        var colors = ["#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#009688", "#FF5722", "#795548", "#607D8B", "#43A047"];
        var colorIndex = Math.floor(Math.random() * 10);
        return colors[colorIndex];
    }

    getThumpInitials(radioName) {
        var result = "";
        var parts = radioName.split(" ");
        result = result + parts[0].charAt(0);

        if (parts.length > 1) {
            result = result + parts[1].charAt(0);
        }
        return result;
    }
}