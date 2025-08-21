import { fetchCardsData } from "@/services/data";
import Card from "app/(dashboard)/profile/_components/Cards";

import React from "react";

async function CardsWrapper() {
  const { numOfComments, numOfPosts, numOfUsers } = await fetchCardsData();

  return (
    <div className="grid gap-6 grid-cols-3 mb-8">
      <Card title="کاربران" value={numOfUsers} type={"user"} />
      <Card title={"پست ها"} value={numOfPosts} type={"post"} />
      <Card title={"نظرات"} value={numOfComments} type={"commnet"} />
    </div>
  );
}

export default CardsWrapper;
