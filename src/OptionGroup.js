import React, { Component } from 'react';

export default class OptionGroup extends Component {

    optionGroup = "my-group";
    optionStack = [];
    optionGroupList = [];
    id = 0;

    onDragStart(event) {
        console.log("on drag start");
    }

    onDragCapture(event) {
        console.log("on drag capture");
    }

    createNewOptionView(event) {
        this.optionStack.push(`My stack ${this.id}`);
        this.id++;
        this.optionGroupList.push(<div key={this.id} draggable onDragStart={event => this.onDragStart(event)}
            onDragCapture={event => this.onDragCapture(event)}>
            <input type="radio" name={this.optionGroup} />
            {"my data"}
        </div>);
        console.log(this.optionStack);
        console.log(this.optionGroupList)
    }

    render() {
        let group = [];
        this.optionStack.forEach(elem => {
            group.push(
                <div key={this.id} draggable onDragStart={event => this.onDragStart(event)}
                    onDragCapture={event => this.onDragCapture(event)}>
                    <input type="radio" name={this.optionGroup} />
                    {"my data"}
                </div>
            );
        });
        // let optionGroupList = [];
        // const optionView = (
        //     <div draggable onDragStart={event => this.onDragStart(event)}
        //         onDragCapture={event => this.onDragCapture(event)}>
        //         <input type="radio" name={this.optionGroup}/>
        //             {"my data"}
        //     </div>);

        // let optionGroup = this.optionStack.forEach(val => {
        //     optionGroupList.push(optionView);
        // });

        return (
            <div>
                {group}
                <button onClick={event => this.createNewOptionView(event)}>New Option</button>
            </div>
        );
    }
}