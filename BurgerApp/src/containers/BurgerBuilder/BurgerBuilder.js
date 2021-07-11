import React, { Component } from 'react'
import Aux from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Ui/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice:4,
        purchaseable:false,
        purchasing:false
    }

    updatePurchaseState(ingredients){
        const totalIngredients = Object.keys(ingredients)
        .map(igKey => ingredients[igKey])
        .reduce((sum,el) => sum+el,0)
        this.setState({purchaseable:totalIngredients > 0})
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedIngredients[type]+1
        const oldPrice = this.state.totalPrice
        const  updatedPrice = oldPrice+INGREDIENT_PRICE[type]
        this.setState({totalPrice:updatedPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)

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
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () => this.setState({purchasing:true})
    purchaseCancelHandler = () => this.setState({purchasing:false})
    purchaseContinueHandler = () => alert("You continued!")

    render(){
        const disableInfo = {...this.state.ingredients}
        for(let key in disableInfo) disableInfo[key] = disableInfo[key] <= 0
        return (
        <Aux>
            <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                <OrderSummary 
                ingredients = {this.state.ingredients}
                purchaseCancelled = {this.purchaseCancelHandler}
                purchaseContinued = {this.purchaseContinueHandler} />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
            ingredientAdded = {this.addIngredientHandler}
            ingredientRemoved = {this.removeIngredinetHandler}
            disabled = {disableInfo}
            totalPrice = {this.state.totalPrice}
            isPurchaseable = {this.state.purchaseable}
            ordered = {this.purchaseHandler}/>
        </Aux>
        );
    }
}

export default BurgerBuilder