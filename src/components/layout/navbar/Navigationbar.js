import styles from "./Navigationsbar.module.css";
import NavBarLeft from "./Navbar-left/NavBarLeft";
import NavBarRight from "./navbar-right/NavBarRight";

function NavigationBar() {
  return (
    <div className={`${styles.mainContainer} border-bottom-shadow`}>
      <NavBarLeft />
      <div className={`${styles.spacer} border-bottom-shadow`}/>
      <NavBarRight />
    </div> 
  );
}

export default NavigationBar;
