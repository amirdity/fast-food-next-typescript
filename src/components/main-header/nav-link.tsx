"use client";

import Link from "next/link";

import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
interface NavLink {
  children: ReactNode;
  href:string
}
export default function NavLink({ children, href }: NavLink) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
