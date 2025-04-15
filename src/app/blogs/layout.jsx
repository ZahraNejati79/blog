import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1>لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-4">
          category list
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
