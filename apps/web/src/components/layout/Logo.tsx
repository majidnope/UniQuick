import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="relative group">
      <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 transition-colors">
        UniQuick
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-amber-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default Logo;
