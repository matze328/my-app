import StandardLabel from "../../../../../common/labels/standard-label/StandardLabel";

function Statistics({ followerCount, followingCount, postCount }) {
  return (
    <div>
      <StandardLabel
        text={`${postCount} Beiträge`}
        style={{ marginRight: "100px" }}
      ></StandardLabel>
      <StandardLabel
        text={`${followerCount} Follower`}
        style={{ marginRight: "100px" }}
      ></StandardLabel>
      <StandardLabel text={`${followingCount} gefolgt`} />
    </div>
  );
}

export default Statistics;