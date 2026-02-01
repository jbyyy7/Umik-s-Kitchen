"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, DollarSign } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Resep Warisan",
    description:
      "Resep turun-temurun yang telah dipercaya keluarga selama puluhan tahun dengan rasa yang autentik.",
    color: "text-red-500",
  },
  {
    icon: Leaf,
    title: "Bahan Segar",
    description:
      "Kami menggunakan bahan-bahan segar pilihan setiap hari untuk kualitas terbaik.",
    color: "text-green-500",
  },
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description:
      "Harga bersahabat tanpa mengurangi kualitas rasa dan porsi yang memuaskan.",
    color: "text-yellow-600",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tiga pilar utama yang menjadikan Umik's Kitchen pilihan terbaik
            untuk kebutuhan catering Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-cream dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-700 rounded-full mb-6">
                <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
