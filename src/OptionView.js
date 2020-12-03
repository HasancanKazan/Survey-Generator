import React, {Component} from 'react';
import './App.css';

export default class OptionView extends Component {

    render() {
        return (
            <div draggable 
            onDragStart={event => console.log(`on drag start ${event}`)}
            onDrag={event => console.log(`On drag ${event}`)} 
            onDragEnd={event => console.log(`On drag end`)}
            onDragCapture={event => console.log(`Drag capture`)}
            className="option">
                <input type="radio" name={this.props.group}/> {this.props.content}
            </div>
        );
    }
}