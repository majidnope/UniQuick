import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiHeart, FiShoppingCart, FiX } from "react-icons/fi";

interface ActionButtonsProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

const ActionButtons = ({ isSearchOpen, setIsSearchOpen }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors md:hidden"
        aria-label={isSearchOpen ? "Close search" : "Open search"}
      >
        {isSearchOpen ? (
          <FiX className="text-xl stroke-[2]" />
        ) : (
          <BiSearch className="text-xl" />
        )}
      </button>
      <div className="flex items-center gap-3 md:gap-4">
        <Link
          href="/wishlist"
          className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          aria-label="Wishlist"
        >
          <FiHeart className="text-xl stroke-[2.5] " />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center">
            0
          </span>
        </Link>
        <Link
          href="/cart"
          className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          aria-label="Shopping cart"
        >
          <FiShoppingCart className="text-xl stroke-[2.5]" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center">
            0
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/login"
            className="text-base font-medium px-4 py-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-base font-medium bg-gradient-to-r from-orange-600 to-orange-500 text-white px-5 py-2 rounded-full hover:shadow-md hover:shadow-orange-500/20 transition-all duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
