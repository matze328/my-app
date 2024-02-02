import { useState } from "react";
import styles from "../../../common/buttons/Standard-btn/StandardBtn.module.css"

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
        <button style={{ backgroundColor: "grey" }} onClick={onClickLogout}>
          Logout
        </button>
      );
    }
  
    return (
      <button style={{ backgroundColor: "green" }} onClick={onClickLogin}>
        Login
      </button>
    );
  }
  
  export default LoginBtn;