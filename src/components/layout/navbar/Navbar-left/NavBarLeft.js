import styles from "./NavBarLeft.module.css";

function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={"C:\Users\xmatz\my-app\public\profilbild.avif}" alt="logo" />
    </div>
  );
}

export default NavBarLeft;