"use client";
import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaHeart,
  FaMobileAlt,
  FaRunning,
  FaSprayCan,
  FaStar,
  FaTshirt,
  FaUtensils,
  FaShoppingCart,
  FaCreditCard,
  FaTruck,
  FaRegClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { section, div } from "framer-motion/client";

export default function HomePage() {
  //const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section - Enhanced with subtle animations */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-amber-500/10 dark:from-orange-500/10 dark:via-background dark:to-amber-500/5"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container relative mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-orange-500/10 rounded-full mb-4 sm:mb-5">
                <p className="text-xs font-medium text-orange-600 dark:text-orange-400">
                  ✨ New Season Collection
                </p>
              </div>
              <h1 className="text-[32px] sm:text-[40px] text-foreground mb-4 sm:mb-5 font-bold leading-tight">
                Shop Faster with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  UniQuick
                </span>
              </h1>
              <p className="text-[16px] text-muted-foreground mb-6 sm:mb-8 max-w-md leading-relaxed">
                Discover the best products from top brands at unbeatable prices.
                Quick delivery, easy returns, and exceptional service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/categories"
                  className="text-[14px] sm:text-[16px] font-medium bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full
                  hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5 w-auto text-center"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="text-[14px] sm:text-[16px] font-medium flex items-center justify-center gap-2 text-foreground hover:text-orange-600 transition-colors 
                  px-6 sm:px-8 py-3 sm:py-4 border border-border rounded-full hover:border-orange-500/30 w-auto"
                >
                  Learn More <FaArrowRight className="text-sm" />
                </Link>
              </div>

              {/* Added key features badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                {[
                  { icon: <FaTruck />, text: "Free Delivery" },
                  { icon: <FaCreditCard />, text: "Secure Payment" },
                  { icon: <FaRegClock />, text: "24/7 Support" },
                  { icon: <FaShoppingCart />, text: "Easy Returns" },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="text-orange-500 dark:text-orange-400">
                      {feature.icon}
                    </div>
                    <span className="text-xs sm:text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-500/40 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/5 rounded-2xl overflow-hidden relative shadow-xl shadow-orange-500/5 p-6">
                {/* Replace with actual image - FIXED to show full image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/assets/images/hero.svg"
                    alt="Hero Image"
                    className="object-contain max-h-full max-w-[90%] w-auto h-auto"
                    width={500}
                    height={400}
                    priority
                  />
                </div>

                {/* Enhanced decorative elements with animations */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-orange-500/20 backdrop-blur-md animate-pulse"></div>
                <div
                  className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-amber-500/30 backdrop-blur-md animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div
                  className="absolute top-20 left-20 w-6 h-6 rounded-full bg-amber-300/20 backdrop-blur-sm animate-pulse"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section - Enhanced with interactive elements */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-orange-50/30 dark:to-orange-950/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-10">
            <div>
              <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full mb-2 inline-block">
                Explore
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-bold text-foreground">
                Popular Categories
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-[14px] sm:text-base text-orange-600 dark:text-orange-400 flex items-center gap-2 hover:gap-3 transition-all duration-300 font-medium"
            >
              View All Categories
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Categories Cards with Enhanced Design */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                name: "Food",
                image: "/assets/images/categories/food.jpg",
                icon: (
                  <FaUtensils className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
                ),
                count: 238,
                bgClass:
                  "from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10",
              },
              {
                name: "Grocery",
                image: "/assets/images/categories/grocery.jpg",
                icon: (
                  <FaShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
                ),
                count: 312,
                bgClass:
                  "from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10",
              },
              {
                name: "Electronics",
                image: "/assets/images/categories/electronics.jpg",
                icon: (
                  <FaMobileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                ),
                count: 312,
                bgClass:
                  "from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10",
              },
              {
                name: "Fashion & Apparel",
                image: "/assets/images/categories/fashion.jpg",
                icon: (
                  <FaTshirt className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
                ),
                count: 156,
                bgClass:
                  "from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/10",
              },

              {
                name: "Beauty & Care",
                image: "/assets/images/categories/beauty.jpg",
                icon: (
                  <FaSprayCan className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
                ),
                count: 120,
                bgClass:
                  "from-pink-50 to-pink-100/50 dark:from-pink-900/20 dark:to-pink-800/10",
              },
              {
                name: "Sports & Outdoor",
                image: "/assets/images/categories/sports.jpg",
                icon: (
                  <FaRunning className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
                ),
                count: 168,
                bgClass:
                  "from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10",
              },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/categories/${category.name.toLowerCase().replace(/\s+&\s+/g, "-")}`}
                  className="group bg-white dark:bg-zinc-800/50 rounded-xl overflow-hidden aspect-square relative border border-zinc-100 dark:border-zinc-800 hover:border-orange-400/30 dark:hover:border-orange-400/30 transition-all hover:shadow-lg hover:shadow-orange-500/10 flex flex-col"
                  /* onMouseEnter={() => setActiveCategory(index)} */
                >
                  {/* Card Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgClass} opacity-80 group-hover:opacity-100 transition-all duration-300`}
                  />

                  {/* Background Image with Subtle Scrim */}
                  <div className="absolute inset-0 z-0 group-hover:opacity-90 transition-opacity duration-300">
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover object-center opacity-10 dark:opacity-5 group-hover:opacity-15 dark:group-hover:opacity-10 transition-all duration-300"
                    />
                  </div>

                  {/* Content Overlay with 3D Transform effect */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-zinc-900/80 rounded-xl flex items-center justify-center mb-4 shadow-md transform group-hover:rotate-3 transition-all duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-zinc-900 dark:text-zinc-100 text-center mb-1 transform group-hover:translate-y-1 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] text-zinc-500 dark:text-zinc-400 bg-white/70 dark:bg-zinc-800/70 px-2 py-0.5 rounded-full">
                      {category.count} products
                    </p>

                    {/* New dot indicators */}
                    <div className="absolute bottom-3 flex gap-1">
                      {Array(6)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${i === index ? "bg-orange-500" : "bg-zinc-300 dark:bg-zinc-600"}`}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 border-t-[16px] border-r-[16px] border-t-orange-500/40 border-r-transparent group-hover:border-t-orange-500/70 transition-colors duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center justify-center gap-2 text-[14px] sm:text-[16px] font-medium bg-orange-500/10 text-orange-600 dark:text-orange-400 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              Browse All Categories <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced with hover effects */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-foreground">
              <span className="relative">
                Featured Products
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-orange-500 to-amber-500"></span>
              </span>
            </h2>

            <div className="hidden sm:flex gap-2">
              <button className="p-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:border-orange-500 hover:text-orange-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="p-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:border-orange-500 hover:text-orange-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                name: "Premium Wireless Earbuds",
                price: 79.99,
                originalPrice: 99.99,
                color: "bg-orange-50 dark:bg-orange-900/10",
                rating: 4.8,
                reviews: 56,
                isNew: true,
                discount: 20,
              },
              {
                id: 2,
                name: "Eco-friendly Water Bottle",
                price: 24.99,
                originalPrice: 29.99,
                color: "bg-amber-50 dark:bg-amber-900/10",
                rating: 4.5,
                reviews: 42,
                isNew: false,
                discount: 15,
              },
              {
                id: 3,
                name: "Smart LED Desk Lamp",
                price: 39.99,
                originalPrice: 49.99,
                color: "bg-yellow-50 dark:bg-yellow-900/10",
                rating: 4.2,
                reviews: 38,
                isNew: true,
                discount: 20,
              },
              {
                id: 4,
                name: "Organic Cotton T-Shirt",
                price: 19.99,
                originalPrice: 24.99,
                color: "bg-red-50 dark:bg-red-900/10",
                rating: 4.6,
                reviews: 128,
                isNew: false,
                discount: 20,
              },
            ].map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
                className="bg-white dark:bg-zinc-800/90 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-orange-400/30 transition-all hover:shadow-lg group"
              >
                <div
                  className={`aspect-[4/3] ${product.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Product Image {product.id}
                  </div>

                  {product.isNew && (
                    <div className="absolute top-0 left-0 px-3 py-1.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-medium m-3 rounded-md">
                      New
                    </div>
                  )}

                  {product.discount > 0 && (
                    <div className="absolute top-0 right-0 w-12 h-12 bg-red-500 text-white flex items-center justify-center text-xs font-bold m-3 rounded-full transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      -{product.discount}%
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="bg-white dark:bg-zinc-800 text-foreground p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                      <FaShoppingCart className="text-sm" />
                    </button>
                    <button className="bg-white dark:bg-zinc-800 text-foreground p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                      <FaHeart className="text-sm" />
                    </button>
                    <button className="bg-white dark:bg-zinc-800 text-foreground p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < Math.floor(product.rating) ? "text-amber-500" : "text-zinc-300 dark:text-zinc-600"} text-xs`}
                        />
                      ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-foreground mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-[13px] text-muted-foreground mb-3 line-clamp-2">
                    Quality product with premium materials and excellent
                    craftsmanship.
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-end gap-2">
                      <span className="text-[16px] font-bold text-orange-600 dark:text-orange-400">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button className="text-[13px] py-1.5 px-4 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white transition-colors">
                      Add to cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner - Enhanced Design */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/20 dark:from-orange-500/20 dark:to-amber-500/30 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md animate-pulse"
              style={{ animationDelay: "0.8s" }}
            ></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-white/90 dark:bg-zinc-800/90 rounded-full text-orange-600 dark:text-orange-400 text-xs font-medium mb-4 shadow-sm backdrop-blur-sm">
                  🎁 Special Offer
                </span>
                <h2 className="text-[28px] sm:text-[36px] font-bold text-foreground mb-4 leading-tight">
                  Get 15% Off Your First Order
                </h2>
                <p className="text-[16px] text-muted-foreground mb-6 max-w-lg">
                  Sign up for our newsletter and receive exclusive offers,
                  updates, and early access to new products.
                </p>

                <form className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white dark:bg-zinc-900 rounded-full px-5 py-3.5
                        focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all
                        text-foreground placeholder:text-muted-foreground shadow-sm text-base"
                    />
                    <div className="absolute right-2 top-0 h-full flex items-center">
                      <span className="text-xs text-muted-foreground bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                        Required
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-[14px] font-medium bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3.5 rounded-full
                    hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>

                <p className="text-xs text-muted-foreground mt-3">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe
                  anytime.
                </p>
              </motion.div>

              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-48 h-48 rounded-full bg-orange-500/10 animate-ping"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 animate-pulse"></div>
                  </div>
                  <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-4"></div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Special Discount
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get 15% off on your first purchase
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-lg">
                        WELCOME15
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
