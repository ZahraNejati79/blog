import React from "react";
import PostsTable from "./PostsTable";

export default function LatestPost() {
  return <PostsTable query="?sort=latest&limit=5" />;
}
