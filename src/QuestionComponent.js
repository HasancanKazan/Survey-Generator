import React, { Component } from 'react';
import QuestionGroup from './OptionGroup';
import QuestionView from './QuestionView';

export default class QuestionComponent extends Component {

    render() {
        const randomKey = "";
        const groupName = "auto-generated";
        return (
            <div>
                <QuestionView key={randomKey}></QuestionView>
                <QuestionGroup key={randomKey} group={groupName}></QuestionGroup>
            </div>
        )
    }
}