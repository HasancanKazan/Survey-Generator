import React, {Component} from 'react';

export default class OptionView extends Component {
    render() {
        return (
            <div className="option" draggable>
                <h2>{this.props.option}</h2>
            </div>
        )
    }
}