import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 pt-8 sm:pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Column - Full width on xs, spans 2 columns on larger screens */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1 lg:col-span-2 mb-4 sm:mb-0">
            <Link href="/" className="inline-block mb-3 sm:mb-4">
              <span className="text-xl sm:h2-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-bold">
                UniQuick
              </span>
            </Link>
            <p className="text-sm sm:paragraph-regular text-muted-foreground mb-4 sm:mb-6 max-w-md">
              Your one-stop shop for quality products at unbeatable prices. Fast
              shipping, reliable service, and customer satisfaction guaranteed.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              {[
                { icon: <FaFacebook size={16} />, href: "#" },
                { icon: <FaTwitter size={16} />, href: "#" },
                { icon: <FaInstagram size={16} />, href: "#" },
                { icon: <FaYoutube size={16} />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold sm:body-semibold text-foreground mb-3 sm:mb-4">
              Shop
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "New Arrivals",
                "Best Sellers",
                "Discounted",
                "Categories",
                "Brands",
                "Gift Cards",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs sm:small-regular text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold sm:body-semibold text-foreground mb-3 sm:mb-4">
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Help Center",
                "Order Status",
                "Returns",
                "Shipping Info",
                "Contact Us",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs sm:small-regular text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links - Hidden on smallest screens */}
          <div className="hidden sm:block">
            <h3 className="text-sm font-semibold sm:body-semibold text-foreground mb-3 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "About Us",
                "Careers",
                "Press",
                "Affiliates",
                "Partners",
                "Terms & Privacy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs sm:small-regular text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Email Form */}
        <div className="py-6 sm:py-8 border-t border-b border-zinc-100 dark:border-zinc-800 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold sm:body-semibold text-foreground mb-1">
                Stay in the loop
              </h3>
              <p className="text-xs sm:small-regular text-muted-foreground">
                Subscribe for the latest updates and offers
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-zinc-100 dark:bg-zinc-800/70 rounded-full sm:rounded-l-full sm:rounded-r-none px-4 sm:px-5 py-2 sm:py-2.5
                    focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all
                    text-zinc-800 dark:text-zinc-200 w-full text-sm"
                />
                <button
                  className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-5 py-2 sm:py-2.5 rounded-full sm:rounded-l-none sm:rounded-r-full
                  hover:shadow-md hover:shadow-orange-500/20 transition-all duration-300 whitespace-nowrap text-sm"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:small-regular text-muted-foreground text-center md:text-left order-2 md:order-1 mt-4 md:mt-0">
            © 2025 UniQuick. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-5 order-1 md:order-2">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookies",
              "Accessibility",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs sm:small-regular text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
