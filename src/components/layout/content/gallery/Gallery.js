import styles from "./Gallery.module.css";

function Gallery({ posts }) {
  if (!posts)
    return <div style={{ width: 100, height: 100, backgroundColor: "blue" }} />;
  return (
    <div className={styles.mainContainer}>
      {posts.map(function (post, index) {
        return <img src={post.image} alt={"My Galery Img" + index} />;
      })}
    </div>
  );
}

export default Gallery;