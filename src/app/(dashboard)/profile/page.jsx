import { fetchCardsData } from "@/services/data";
import React from "react";
import { Card } from "../_components/Cards";

export default async function profile() {
  const { numOfComments, numOfPosts, numOfUsers } = await fetchCardsData();
  return (
    <div>
      <div>
        <div className="grid gap-6 grid-cols-3 mb-8">
          <Card title="کاربران" value={numOfUsers} type={"user"} />
          <Card title={"پست ها"} value={numOfPosts} type={"post"} />
          <Card title={"نظرات"} value={numOfComments} type={"commnet"} />
        </div>
      </div>
    </div>
  );
}
