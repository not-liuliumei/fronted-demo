"use client";

import { NavbarLink } from "./NavbarLink/NavbarLink";
import "./index.css";

export const Navbar = () => {
  return (
    <div className="root-navbar">
      <NavbarLink route={"/"} linkName={"Home"} />
      <NavbarLink route={"/show-case"} linkName={"Show Cases"} />
    </div>
  );
};
