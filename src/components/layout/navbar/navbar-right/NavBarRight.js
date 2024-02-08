import StandardBtn from "../../../common/buttons/Standard-btn/StandardBtn";
import styles from "./NavBarRight.module.css";
import SignUpBtn from "./SignUpBtn";
import LoginBtn from "./loginBtn";
import { BrowserRouter, Router, Route, Link, NavLink } from "react-router-dom";

function NavBarRight() {
  return (
    <div className={styles.mainContainer}>
      <LoginBtn className={styles.spacer} />
      <SignUpBtn onClickClick={"http://localhost:3000/SignUp"} text={"Sign up"} />
    </div>
    /* <div className={styles.spacer}/> */
    /* <StandardBtn text={"Sign Up"}  /> */
  );
}

export default NavBarRight;
