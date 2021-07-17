import React , {Component} from 'react'
import Aux from '../../hoc/Auxi'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
class Layout  extends Component{
    state = {
        'showSideDrawer' : true
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}))
    }
    render(){
       return (
        <Aux>
            <Toolbar  drawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer open = {this.state.showSideDrawer} closed = {this.SideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
       ) 
    }
}

export default Layout