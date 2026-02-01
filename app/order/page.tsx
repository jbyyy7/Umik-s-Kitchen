"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, Send } from "lucide-react";
import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function OrderPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const handleSubmitOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert("Mohon isi nama dan nomor WhatsApp");
      return;
    }

    if (cart.length === 0) {
      alert("Keranjang belanja masih kosong");
      return;
    }

    // Format order message for WhatsApp
    let message = `*Pesanan Baru dari ${customerInfo.name}*\n\n`;
    message += `📱 *WhatsApp:* ${customerInfo.phone}\n`;
    message += `📅 *Tanggal:* ${customerInfo.date || "Segera"}\n`;
    message += `🕐 *Waktu:* ${customerInfo.time || "Fleksibel"}\n`;
    message += `📍 *Alamat:* ${customerInfo.address || "Ambil sendiri"}\n\n`;
    message += `*Detail Pesanan:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity} = Rp ${(
        item.price * item.quantity
      ).toLocaleString("id-ID")}\n`;
    });

    message += `\n*Total: Rp ${getTotalPrice().toLocaleString("id-ID")}*\n`;

    if (customerInfo.notes) {
      message += `\n📝 *Catatan:* ${customerInfo.notes}`;
    }

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285141016579?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Clear cart after sending
    setTimeout(() => {
      clearCart();
      setCustomerInfo({
        name: "",
        phone: "",
        date: "",
        time: "",
        address: "",
        notes: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            Keranjang Pesanan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Review pesanan Anda sebelum mengirim ke WhatsApp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center"
              >
                <ShoppingBag className="w-20 h-20 mx-auto text-gray-400 mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-2">
                  Keranjang Kosong
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Belum ada item di keranjang Anda
                </p>
                <Link href="/menu">
                  <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors">
                    Lihat Menu
                  </button>
                </Link>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center space-x-4"
                  >
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-primary dark:text-secondary font-bold">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sticky top-28"
            >
              <h2 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
                Detail Pengiriman
              </h2>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Nama Lengkap *"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <input
                  type="tel"
                  placeholder="Nomor WhatsApp *"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <input
                  type="date"
                  placeholder="Tanggal Pengiriman"
                  value={customerInfo.date}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, date: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="time"
                  placeholder="Waktu Pengiriman"
                  value={customerInfo.time}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, time: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <textarea
                  placeholder="Alamat Pengiriman"
                  value={customerInfo.address}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      address: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />

                <textarea
                  placeholder="Catatan Tambahan"
                  value={customerInfo.notes}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, notes: e.target.value })
                  }
                  rows={2}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    Subtotal:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Rp {getTotalPrice().toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-gray-900 dark:text-white">Total:</span>
                  <span className="text-primary dark:text-secondary">
                    Rp {getTotalPrice().toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmitOrder}
                disabled={cart.length === 0}
                className="w-full py-4 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-full shadow-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pesanan via WhatsApp</span>
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                * Wajib diisi
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
