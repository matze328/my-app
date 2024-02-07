import { useState } from "react";
import styles from "./NavBarRight.module.css"
function LoginBtn() {
    const [isLogout, setIsLogout] = useState(false);
  
    function onClickLogin() {
      setIsLogout(true);
    }
  
    function onClickLogout() {
      setIsLogout(false);
    }
  
    if (isLogout) {
      return (
        <button className={styles.myBtn} onClick={onClickLogout}>
          Logout
        </button>
      );
    }
  
    return (
      <button className={styles.myBtn} onClick={onClickLogin}>
        Login
      </button>
    );
  }
  
  export default LoginBtn;