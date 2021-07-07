import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])]
        .map((_,i) => <BurgerIngredient key = {igKey+i} type={igKey} />))
        .reduce((arr,el) => arr.concat(el),[])
    if(transformedIngredients.length === 0) transformedIngredients = <p>Pls Add Some ingredients</p>
    return <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        {transformedIngredients}
        <BurgerIngredient type ='bread-bottom' />
    </div>
}
    




export default burger 