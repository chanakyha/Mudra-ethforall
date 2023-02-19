import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Header = () => {
  return (
    <div className="py-4 px-8 bg-black/50 flex justify-between items-center border-b-2">
      <a className="text-3xl text-white" href="/">
        Mudra
      </a>
      <ConnectButton />
    </div>
  );
};

export default Header;
