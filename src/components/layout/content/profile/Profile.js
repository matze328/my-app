import styles from "./Profile.module.css";
import Info from "./info";

function Profile({ userProfile }) {
  return (
    <div className={styles.mainContainer}>
      {/* <Picture></Picture> */}
      <Info profile={userProfile}></Info>
    </div>
  );
}

export default Profile;
