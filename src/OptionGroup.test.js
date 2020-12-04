import { findByTestId, render, screen } from '@testing-library/react';
import OptionGroup from './OptionGroup';

test('create 2 option view in group', () => {
    // render(<OptionGroup />);
    // const linkElement = screen.getByText(/learn react/i);
    const optionGroup = new OptionGroup();
    optionGroup.createNewOptionView();
    optionGroup.createNewOptionView();
    // expect(linkElement).toBeInTheDocument();

    expect(optionGroup.state.options.length).toEqual(2);
});

test('create 3 option view in group', () => {

    const optionGroup = new OptionGroup();
    optionGroup.createNewOptionView()
    optionGroup.createNewOptionView()
    optionGroup.createNewOptionView()
    expect(optionGroup.state.options.length).toEqual(3);
});

test('create 2 option view check if they are exists in the dom', () => {
    // const optionGroup = render(<OptionGroup></OptionGroup>);
    // const button = optionGroup.findByText("New Option");
    // optionGroup.find('button').simulate('click');
    // console.log(JSON.stringify(optionGroup.findAllByAltText("my-group")));
});