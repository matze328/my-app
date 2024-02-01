import styles from "./NavBarLeft.module.css";
import userImg from "./profilbild.avif"
function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={userImg} />
    </div>
  );
}

export default NavBarLeft;