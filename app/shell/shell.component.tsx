///<reference path="../../typings/tsd.d.ts"/>

import React from "react";
import {render} from "react-dom";

import {NavigationComponent} from "../navigation/navigation.component";
import {PlayerComponent} from "../player/player.component";
import {RadioListComponent} from "../radio/radio-list.component";
import {AudioPlayerService} from "../player/audioPlayerService";

export class ShellComponent extends React.Component<any, any> implements React.ComponentLifecycle<any, any>{
    private _audioPlayerService: AudioPlayerService;
    constructor(props: any) {
        super(props);
        this.state = { radios: [], currentIndex: 0 };

        this._audioPlayerService = new AudioPlayerService();
    }
    previousOrNextSelected(prev: boolean) {
        var newRadioIndex = 0;
        if (prev) {
            if (this.state.currentIndex === 0) {
                newRadioIndex = this.state.radios.length - 1;
            } else {
                newRadioIndex = this.state.currentIndex - 1;
            }
        } else {
            if (this.state.currentIndex === this.state.radios.length - 1) {
                newRadioIndex = 0;
            } else {
                newRadioIndex = this.state.currentIndex + 1;
            }
        }
        this.updateCurrentlyPlaying(this.state.radios[newRadioIndex]);
    }

    updateCurrentlyPlaying(radio: any) {
        this.state.radios.forEach((item, index) => {
            if (item.id === radio.id) {
                item.currentlyPlaying = true;
                this.state.currentIndex = index;
            } else {
                item.currentlyPlaying = false;
            }

        });

        this.setState(this.state);
        this._audioPlayerService.play(radio.streamUrl, radio.name);
    }

    componentDidMount() {
        $.get("https://raw.githubusercontent.com/vmanikandan001/Vaanoli/master/list.json")
            .done(data => {
                this.setState({ radios: JSON.parse(data).radios.map(radio => { radio.key = radio.id; radio.currentlyPlaying = false; return radio; }) });
                if (this.state.radios) {
                    // play the first radio by default
                    this.updateCurrentlyPlaying(this.state.radios[0]);
                }

            })
            .fail(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <section>
                <NavigationComponent/>
                <PlayerComponent onPreviousOrNext={this.previousOrNextSelected.bind(this) }/>
                <div className="content">
                    <div className="row">
                        <div className="col-md-3 hidden-sm hidden-xs">
                            
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <RadioListComponent onRadioChange={this.updateCurrentlyPlaying.bind(this) } radios={this.state.radios}/>
                        </div>
                        <div className="col-md-3 hidden-sm hidden-xs">
                            
                        </div>
                    </div>
                </div>
                <footer>
                    <div>
                        &copy; Qubits Solutions Ltd.2016
                    </div>
                    <div className="muted">
                        DISCLAIMER: We don't host any radios listed here. The radios listed here are publically available in the internet and we simple list them here for easy access. If you are the ower of a radio and don't want us to show your radio here, then contact us to remove your radio.
                    </div>
                </footer>
            </section>
        );
    }
}

render(<ShellComponent/>, document.getElementById("mount-node"));