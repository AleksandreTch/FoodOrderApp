
import classes from "./Checkout.module.css";
import Dropdown from "../UI/Dropdown"; 



const Checkout = (props) => {

  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>


      <div className={classes.control}>
        <label htmlFor="name">Street</label>
        <input type="text" id="street" />
      </div>
      
      <div className={classes.control}>
        <label htmlFor="name">City</label>
        <input type="text" id="city" />
      </div>


      <div className={classes.control}>
        <label htmlFor="name">State</label>
        {/* <input type="text" id="state" /> */}
        <Dropdown placeHolder="Select Your State"/>
      </div>
      
      <div className={classes.control}>
        <label htmlFor="name">Zip Code</label>
        <input type="text" id="zip" />
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.sumbit}>
            Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
