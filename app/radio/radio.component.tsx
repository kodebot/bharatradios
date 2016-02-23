///<reference path="../../typings/tsd.d.ts"/>
import React from "react";
import {RadioAvatarComponent} from "./radio.avatar.component";

export class RadioComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <li onClick ={this.props.onClick}>
                <RadioAvatarComponent radio={this.props.radio} />
                <span className="radio">{this.props.radio.name}</span>
            </li>
        );
    }
}