import React, { Component } from 'react';
import './App.css'
import logo from './vertical.png'

export default class OptionGroup extends Component {

    optionGroup = "my-group";
    id = 0;
    state = {
        options: [],
        isDraggable: false,
        left:0,
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
    onDragImageClicked() {
        this.setState({isDraggable: true});
        console.log("Image clicked.");
    }

    handleMouseEnter(event) {
        console.log(`mouse entered ${this.state.left}`);
        this.setState({
            left: event.target.getBoundingClientRect().left + 15,
        });
    } 

    createNewOptionView(event) {
        this.state.options.push(<div key={this.id} draggable={this.state.isDraggable}
            onDragStart={event => this.onDragStart(event)}
            onDrag={event => this.onDrag(event)}
            onDragCapture={event => this.onDragCapture(event)}>
            <input type="radio" name={this.optionGroup} />
            <div key={`my-key-${this.id}`} 
                contentEditable={true}
                style={{left: this.state.left}}
                onMouseDown={e => this.handleMouseEnter(e)} 
                className="optionBox">{`my stack ${this.id}`}
            <img contentEditable={false} className="dragIcon" src={logo}
             onClick={() => this.onDragImageClicked()}
             alt="logo"></img>
            </div>
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