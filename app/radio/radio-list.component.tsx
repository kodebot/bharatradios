///<reference path="../../typings/tsd.d.ts"/>

import React from "react";
import {RadioComponent} from "./radio.component";
import $ from "jquery";

export class RadioListComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        let radiosComponents = this.props.radios.map(radio => <RadioComponent key={radio.id} radio={radio} onClick={this.props.onRadioChange.bind(this, radio) }/>);
        return (

            <ul className="list-group list-group-lg no-bg auto m-b-none m-t-n-xxs">
                    {radiosComponents}
                </ul>
        );
    }
}