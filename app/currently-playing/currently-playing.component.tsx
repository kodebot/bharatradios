import React from "react";

export class CurrentlyPlayingComponent extends React.Component<any, any>{
    _imgUrl: string;
    constructor(public props: any) {
        super(props)
    }

    render() {
        this._imgUrl = `assets/images/radios/tamil/${this.props.radio.imgName}.jpg`;
        return (
            <div className="m-t-n-xxs item pos-rlt">
                <div className="top text-right">
                    <span className="musicbar animate bg-success bg-empty inline m-r-lg m-t" style={{ width: "25px", height: "30px" }}>
                        <span className="bar1 a3 lter"></span>
                        <span className="bar2 a5 lt"></span>
                        <span className="bar3 a1 bg"></span>
                        <span className="bar4 a4 dk"></span>
                        <span className="bar5 a2 dker"></span>
                    </span>
                </div>
                <div className="bottom gd bg-info wrapper-lg">
                    <span className="h2 font-thin">{this.props.radio.name}</span>
                </div>
                
            </div>
        );
    }
}