import { Fragment } from 'react';
import {FaPaw} from 'react-icons/fa';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.headerIcon}>
        <FaPaw 
          style={{
            fontSize:"1.8rem"
          }}
        />
        <h1>Friskies</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;