"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPath = usePathname();

  const submitHandler = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const surrentSearch = new URLSearchParams(searchParams);
    if (search) {
      surrentSearch.set("search", search);
    } else {
      surrentSearch.delete("search");
    }

    router.push(currentPath + "?" + surrentSearch);
  };

  return (
    <form className="relative" onSubmit={submitHandler}>
      <input
        className="textField__input bg-secondary-0 text-xs"
        autoCapitalize="off"
        placeholder="جستجو..."
        name="search"
        type="text"
      />
      <button className="absolute inset-y-2 left-2" type="submit">
        <MagnifyingGlassIcon className="h-5 text-secondary-400" />
      </button>
    </form>
  );
}
