import styles from "./content.module.css";
import bild01 from "./images/always-sunny-header.jpg"
import bild02 from "./images/its-always-sunny-in-philadelphia-good-morning-philadelphia.gif"
import bild03 from "./images/03.gif"
import bild04 from "./images/always-sunny-10.jpg"
import bild05 from "./images/its-alway-sunny-charlie.avif"
import bild06 from "./images/02.webp"
import Gallery from "./gallery";
import Profile from "./profile";


function Content({ data }) {
    return ( <div className={styles.mainContainer}>
                 <div className={styles.navbar}>
                  <img className={styles.logImg} src={bild01} id={2} /> 
                  <img className={styles.logImg} src={bild02} id={3} />
                  <img className={styles.logImg} src={bild03} id={4} /> 
                  <img className={styles.logImg} src={bild05} id={5} /> 
                 <img className={styles.logImg} src={bild06} id={6} />
                 <img className={styles.logImg} src={bild04} id={7} /> 
               </div>
               <div className={styles.mainContainer}>
                 <Profile userProfile={data.profile}></Profile>
                    <Gallery posts={data.posts} />
                </div>  
          </div>
  );
}

export default Content;