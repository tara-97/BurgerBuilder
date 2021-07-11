import React, { Component } from 'react'
import Aux from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    'cheese': 0.4,
    'meat': 1.3,
    'bacon': 0.7,
    'salad': 0.4
}
class BurgerBuilder extends Component{

    
    state = {
        ingredients:{
            'cheese': 0,
            'meat': 0,
            'bacon': 0,
            'salad': 0
        },
        totalPrice:4
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedIngredients[type]+1
        const oldPrice = this.state.totalPrice
        const  updatedPrice = oldPrice+INGREDIENT_PRICE[type]
        this.setState({totalPrice:updatedPrice, ingredients:updatedIngredients})

    }

    removeIngredinetHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount === 0) return
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedIngredients[type]-1
        const oldPrice = this.state.totalPrice
        const  updatedPrice = oldPrice-INGREDIENT_PRICE[type]
        this.setState({totalPrice:updatedPrice, ingredients:updatedIngredients})
    }

    render(){
        const disableInfo = {...this.state.ingredients}
        for(let key in disableInfo) disableInfo[key] = disableInfo[key] <= 0
        return (
        <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
            ingredientAdded = {this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredinetHandler}
            disabled = {disableInfo}
            totalPrice = {this.state.totalPrice}/>
        </Aux>
        );
    }
}

export default BurgerBuilder