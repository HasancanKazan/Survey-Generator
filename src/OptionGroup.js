import React, { Component } from 'react';
import './App.css'

export default class OptionGroup extends Component {

    optionGroup = "my-group";
    id = 0;
    state = {
        options: []
    }

    onDragStart(event) {
        console.log("on drag start");
    }

    onDragCapture(event) {
        console.log("on drag capture");
    }

    onDrag(event) {
        console.log(`on drag `);
    }

    createNewOptionView(event) {
        this.state.options.push(<div key={this.id} draggable
            onDragStart={event => this.onDragStart(event)}
            onDrag={event => this.onDrag(event)}
            onDragCapture={event => this.onDragCapture(event)}>
            <input type="radio" name={this.optionGroup} />
            <div contentEditable className="optionBox">{`my stack ${this.id}`}</div>
        </div>);
        this.id++;
        this.setState({options: this.state.options});
        
    }


    render() {

        return (
            <div>
                {this.state.options.map(state => state)}
                <button onClick={event => this.createNewOptionView(event)}>New Option</button>
            </div>
        );
    }
} 