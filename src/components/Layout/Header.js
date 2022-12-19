//native react imports
import React, {Fragment} from 'react';

//style imports
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>BeasleyMeals</h1>
                <button>Cart</button>
            </header> 
            <div className={classes['main-image']}>
                <img 
                src={mealsImage}
                alt='Table with food'/>
            </div>   
        </Fragment>
    )
}

export default Header;