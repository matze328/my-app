import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}>
           <div className={styles.profilbio}>
                 <h5>The series follows the exploits of "The Gang",
                      a group of narcissistic and sociopathic friends
                      who run the Irish dive bar Paddy's Pub in South Philadelphia.
                      Pennsylvania, but spend most of their free time drinking, scheming,
                      arguing amongst themselves, and plotting elaborate cons against others.
                      and at times each other, for personal benefit, financial gain,
                      revenge, or simply due to boredom or inebriation</h5>
                          </div> 
        </div>
      </div>
  );
}

export default Footer;