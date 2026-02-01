"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/data/blog";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            Blog Umik's Kitchen
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Resep, tips, dan cerita seputar kuliner tradisional Indonesia
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
