import Link from "next/link";
import { FiMenu, FiUser, FiHelpCircle } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors md:hidden"
          aria-label="Open menu"
        >
          <FiMenu className="text-2xl stroke-[2]" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] p-0 border-r border-zinc-100 dark:border-zinc-800 animate-[slideInLeft_0.3s_ease-out]"
      >
        <SheetHeader className="p-6 border-b border-zinc-100 dark:border-zinc-800">
          <SheetTitle>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              UniQuick
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="px-6 py-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-2">
            <SheetClose asChild>
              <Link
                href="/profile"
                className="flex items-center gap-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors py-2"
              >
                <FiUser className="text-lg stroke-[2]" /> My Account
              </Link>
            </SheetClose>
          </div>
          <div className="flex gap-2 mb-4 mt-2">
            <SheetClose asChild>
              <Link
                href="/login"
                className="flex-1 text-center text-sm py-2 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Log In
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/signup"
                className="flex-1 text-center text-sm bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 rounded-md hover:shadow-md transition-all"
              >
                Sign Up
              </Link>
            </SheetClose>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Categories
            </h3>
            <div className="flex flex-col gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              {[
                "Electronics",
                "Fashion",
                "Home",
                "Beauty",
                "Sports",
                "Books",
              ].map((category) => (
                <SheetClose key={category} asChild>
                  <Link
                    href={`/categories/${category.toLowerCase()}`}
                    className="text-base font-normal text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {category}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>
          <SheetClose asChild>
            <Link
              href="/help"
              className="flex items-center gap-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              <FiHelpCircle className="stroke-[2]" /> Help Center
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
