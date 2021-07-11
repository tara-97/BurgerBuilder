import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad' , type:'salad'},
    {label:'Meat' , type:'meat'},
    {label:'Cheese' , type:'cheese'},
    {label:'Bacon' , type:'bacon'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>current price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(control => 
        <BuildControl key= {control.label} 
        label= {control.label} 
        added = {() => props.ingredientAdded(control.type)} 
        removed = {() => props.ingredientRemoved(control.type)} 
        disabled = {props.disabled[control.type]} /> 
        )}
    </div>
)
export default buildControls;