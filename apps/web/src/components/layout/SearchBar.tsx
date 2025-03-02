import { BiSearch } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

const SearchBar = ({ isSearchOpen, setIsSearchOpen }: SearchBarProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSearchOpen]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    // This is a placeholder - in a real app, you'd fetch from an API or filter data
    const dummySuggestions = [
      `${query} - search results`,
      `Popular: ${query}`,
      `Category: ${query}`,
      `Related to ${query}`,
    ];

    setSuggestions(dummySuggestions);
  };

  return (
    <div
      ref={searchBarRef}
      className={`${
        isSearchOpen
          ? "flex absolute top-full left-0 right-0 p-4 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 animate-[slideDown_0.2s_ease-out]"
          : "hidden"
      } md:flex md:relative md:flex-1 md:max-w-2xl md:mx-8`}
    >
      <form action="" className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-zinc-100 dark:bg-zinc-800/70 rounded-full px-5 py-2.5 pl-11 
            focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all
            text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-500"
          onChange={handleInputChange}
        />
        <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 text-xl" />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 mt-2 rounded-lg shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-zinc-800 dark:text-zinc-200"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
