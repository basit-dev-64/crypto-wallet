import {  Coins  } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ui/theme-button";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <Coins className="size-8" />
        <div className="flex flex-col gap-4">
          <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
           Crypto Wallet
          </span>
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
