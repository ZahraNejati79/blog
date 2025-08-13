import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/ui/FallBack";
import { CreatePost } from "./_/components/Buttons";
import Search from "@/ui/Search";
import queryString from "query-string";

function page({ searchParams }) {
  const query = queryString.stringify(searchParams);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 mb-8">
        <h2>لیست پست ها</h2>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />}>
        <PostsTable query={query} />
      </Suspense>
    </div>
  );
}

export default page;
