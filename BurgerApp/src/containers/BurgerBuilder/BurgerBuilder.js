import React, { Component } from 'react'
import Aux from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger';

class BurgerBuiilder extends Component{

    state = {
        ingredients:{
            'cheese': 0,
            'meat': 0,
            'bacon': 0,
            'salad': 0
        }
    }
    render(){
        return(
        <Aux>
            <Burger ingredients={this.state.ingredients} />
            <div>BuildControls</div>
        </Aux>);
    }
}

export default BurgerBuiilder