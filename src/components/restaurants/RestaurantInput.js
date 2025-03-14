import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  };

  handleOnChange= ({target}) => {
    this.setState({
      text: target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
