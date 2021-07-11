import React from 'react'
import Aux from '../../../hoc/Auxi'
import BackDrop from '../Backdrop/Backdrop'
import classes from './Modal.css'
const modal = (props) => (
    <Aux>
        <BackDrop show = {props.show} clicked = {props.modalClosed}></BackDrop>
        <div className = {classes.Modal} 
        style = {{'transform' : props.show ? 'translateY(0)' : 'translateY(-100vh) ' ,
                    'opacity' : props.show ? '1' :'0'}}
        >
            {props.children}
        </div>
    </Aux>
    
)

export default modal