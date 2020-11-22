import React, { Component } from 'react'

class AddPlayerForm extends Component {
    state = {
    value: ''
    };

    handleValueChange = (e) =>{
        this.setState({value: e.target.value});
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({   value: ''});

    }

    render () {
        return (
            <form onSubmit={this.handleSumbit} >
                <input 
                    type="text"
                    value = {this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a players name"
                />

                <input
                    type="submit"
                    value="Add Player" 
                />
            </form>
        );
    }
}

export default AddPlayerForm;