///<reference path="../../typings/tsd.d.ts"/>
import React from "react";

export class NavigationComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsible-navbar" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Bharat Radios</a>
                    </div>
                    <div className="collapse navbar-collapse" id="collapsible-navbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Tamil</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}



