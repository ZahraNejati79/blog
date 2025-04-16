import React, { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/ui/Spinner";

function layout({ children }) {
  return (
    <div>
      <h1>لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
