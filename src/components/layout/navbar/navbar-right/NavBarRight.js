import StandardBtn from "../../../common/buttons/Standard-btn/StandardBtn";
import styles from "./NavBarRight.module.css";
import LoginBtn from "./loginBtn";
function NavBarRight() {
  return (
    <div className={styles.mainContainer}>
      <LoginBtn className={styles.spacer} />
      <div>
      <a href="C:\Users\xmatz\my-app\src\components\layout\navbar\navbar-right\sign_up.html">
        <StandardBtn text={"Sign up"} />
      </a>
    </div>
      {/* <div className={styles.spacer}/> */}
       {/* <StandardBtn text={"Sign Up"}  /> */}
    </div> 
  );
}

export default NavBarRight;