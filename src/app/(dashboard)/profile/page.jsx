import React, { Suspense } from "react";
import { getPosts } from "@/services/postServices";
import PostsTable from "../posts/_/components/PostsTable";
import CardsWrapper from "../posts/_/components/CardsWrapper";
import Fallback from "@/ui/FallBack";
import LatestPost from "../posts/_/components/LatestPost";

export default async function profile() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>داشبورد</div>
        <Suspense fallback={<Fallback />}>
          <CardsWrapper />
        </Suspense>
      </div>
      <div className="flex flex-col gap-2">
        <div>آخرین پست ها</div>
        <Suspense fallback={<Fallback />}>
          <LatestPost />
        </Suspense>
      </div>
    </div>
  );
}
