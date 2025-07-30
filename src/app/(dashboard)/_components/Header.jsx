"use client";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import Drawer from "@/ui/Drawer";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import SideBar from "./SideBar";

function Header({}) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          onClick={() => setIsOpenDrawer(true)}
          className="block lg:hidden border-none"
          variant={"outline"}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>

        <span className="text-sm lg:text-lg font-bold text-secondary-700">
          سلام؛ {user?.name}
        </span>

        <Link href="/profile">
          <Avatar src={user?.avatarUrl} />
        </Link>
      </div>
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        <SideBar onClose={() => setIsOpenDrawer(false)} />
      </Drawer>
    </header>
  );
}
export default Header;
