import React from "react";
import ProfilePost from "../ProfilePost";

import styles from "./index.module.scss";

function ProfilePosts({ data }) {
  return (
    <div className={styles.container}>
      <h3>My posts</h3>
      <section>
        {data.posts.map((post) => (
          <ProfilePost
            key={post.id}
            message={post.message}
            likes={post.likesCount}
          />
        ))}
      </section>
    </div>
  );
}

export default ProfilePosts;
