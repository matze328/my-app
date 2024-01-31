import styles from "./content.module.css";

function Content() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}></div>
    <div className="profil-bio">
                    <h5>The series follows the exploits of "The Gang",
                             a group of narcissistic and sociopathic friends
                             who run the Irish dive bar Paddy's Pub in South Philadelphia.</h5>
                    <h5> Pennsylvania, but spend most of their free time drinking, scheming,
                            arguing amongst themselves, and plotting elaborate cons against others.</h5>
                    <h5>and at times each other, for personal benefit, financial gain,
                            revenge, or simply due to boredom or inebriation</h5>
                    </div>
                    </div>
  );
}

export default Content;