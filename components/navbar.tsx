"use client";

import { signOut, signIn } from "next-auth/react";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const session: any = useSession<any | null | undefined>();

  return (
    <div className="flex py-1 space-x-3 mx-auto max-w-6x1">
      {/* Logo */}
      <div className="flex-1 my-auto">
        <img
          src="/logo.jpeg"
          alt="Logo"
          onClick={() => router.push("/")}
          className="w-10 ml-5 hover:cursor-pointer"
        />
      </div>

      {/* Icons */}
      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom"
        data-tip="Messages"
      >
        <MessageIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom"
        data-tip="Notifications"
      >
        <NotificationsIcon />
      </div>

      <div
        className="p-[5px] rounded-full bg-white tooltip tooltip-bottom hover:cursor-pointer"
        data-tip="My Adverts"
        onClick={() => router.push(`/myadverts/${session.data?.user.email}`)}
      >
        <ViewListIcon />
      </div>

      {/* Dropdown Menu */}
      <div className="dropdown dropdown-hover my-auto dropdown-bottom dropdown-end">
        <img
          src={session.data?.user.image || "/logo.jpeg"}
          className="rounded-full w-8"
          alt="User"
        />
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-sm w-44"
        >
          <li><a href="/myshop">My Shop</a></li>
          <li><a href="/clients">My Clients</a></li>
          <li><a href="/feedback">Feedback</a></li>
          <li><a href="/performance">Performance</a></li>
          <li><a href="/balance">My Balance</a></li>
          <li><a href="/settings">Settings</a></li>
          <div className="divider my-1"></div>
          <li><a href="/about">About Paged</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <div className="divider my-1"></div>
          <li>
            {session.data && <button onClick={() => signOut()}>Log out</button>}
            {!session.data && <button onClick={() => signIn()}>Sign In</button>}
          </li>
        </ul>
      </div>

      {/* Advertise Button */}
      <button
        onClick={() => router.push("/create")}
        className="btn btn-warning btn-sm my-auto mr-10"
      >
        ADVERTISE
      </button>
    </div>
  );
}