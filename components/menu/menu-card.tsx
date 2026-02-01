"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/cart-context";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 bg-gray-200 dark:bg-gray-700">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to placeholder
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400";
          }}
        />
        {item.isBestSeller && (
          <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="w-4 h-4 fill-white" />
            <span>Favorit</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary dark:text-secondary">
              Rp {item.price.toLocaleString("id-ID")}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="p-3 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg transition-colors"
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
