"use client";

import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ActionButtons from "./ActionButtons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm dark:bg-zinc-950/95 border-b border-zinc-100 dark:border-zinc-800 py-4 px-6 md:px-16">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-4">
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Logo />
        </div>
        <SearchBar
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        <ActionButtons
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
