import styles from "./content.module.css";

function Content() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navbar}></div>
    </div>
         <label> Always sunny in Philadelphia</label>
         <button> Folgen </button>
         <button> Nachricht Senden </button>
         <button> ... </button>
     </div>
     <div class="profil-stats">
         <label class="stat"> 3 Beiträge </label>
         <label class="stat"> 3 Follower </label>
         <label class="stat"> 20 gefolgt </label>
     </div>
     <div class="profil-bio">
         <h5>The series follows the exploits of "The Gang",
              a group of narcissistic and sociopathic friends
              who run the Irish dive bar Paddy's Pub in South Philadelphia.</h5>
         <h5> Pennsylvania, but spend most of their free time drinking, scheming,
             arguing amongst themselves, and plotting elaborate cons against others.</h5>
         <h5>and at times each other, for personal benefit, financial gain,
             revenge, or simply due to boredom or inebriation</h5>
     </div>
  );
}

export default Content;