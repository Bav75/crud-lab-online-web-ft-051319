import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({
  restaurants
});

// const mapStateToProps = (state) => ({
//   restaurants: state.restaurants
// });

const mapDispatchToProps = {
  addRestaurant: (text) => ({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: (id) => ({type: 'DELETE_RESTAURANT', id})
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
