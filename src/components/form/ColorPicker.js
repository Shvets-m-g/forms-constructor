import React from 'react';
import { SketchPicker } from 'react-color';

export default class ColorPicker extends React.Component {
    state = {
        background: this.props.form.value,
    };
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
           <>
               { this.props.form.name }
               <SketchPicker
                   color={ this.state.background }
                   onChangeComplete={ this.handleChangeComplete }
               />
           </>
        );
    }
}