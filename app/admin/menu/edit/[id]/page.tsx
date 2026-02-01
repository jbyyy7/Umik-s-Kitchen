"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useAdmin } from "@/context/admin-context";
import { useMenuManagement } from "@/context/menu-management-context";
import { MenuItem } from "@/data/menu";

export default function EditMenuPage() {
  const { isAuthenticated } = useAdmin();
  const { getMenuItemById, updateMenuItem } = useMenuManagement();
  const router = useRouter();
  const params = useParams();
  const menuId = params.id as string;

  const [formData, setFormData] = useState<Partial<MenuItem>>({
    name: "",
    category: "nasi-kotak",
    price: 0,
    description: "",
    image: "",
    isBestSeller: false,
    ingredients: [],
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin");
      return;
    }

    const menuItem = getMenuItemById(menuId);
    if (menuItem) {
      setFormData(menuItem);
      setLoaded(true);
    } else {
      router.push("/admin/menu");
    }
  }, [isAuthenticated, menuId, getMenuItemById, router]);

  if (!isAuthenticated || !loaded) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedMenuItem: MenuItem = {
      id: menuId,
      name: formData.name!,
      category: formData.category as any,
      price: formData.price!,
      description: formData.description!,
      image: formData.image!,
      isBestSeller: formData.isBestSeller!,
      ingredients: formData.ingredients,
    };

    updateMenuItem(menuId, updatedMenuItem);
    router.push("/admin/menu");
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <nav className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/menu"
                className="flex items-center space-x-2 hover:text-cream transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Kembali</span>
              </Link>
              <span className="text-cream">|</span>
              <h1 className="text-xl font-bold font-playfair">Edit Menu</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nama Menu *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kategori *
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value as any })
              }
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="nasi-kotak">Nasi Kotak</option>
              <option value="bubur">Aneka Bubur</option>
              <option value="tumpeng">Tumpeng</option>
              <option value="jajanan">Jajanan Pasar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Harga (Rp) *
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: parseInt(e.target.value) })
              }
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Deskripsi *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              URL Gambar
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="bestSeller"
              checked={formData.isBestSeller}
              onChange={(e) =>
                setFormData({ ...formData, isBestSeller: e.target.checked })
              }
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
            />
            <label
              htmlFor="bestSeller"
              className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Tandai sebagai Best Seller
            </label>
          </div>

          <div className="flex space-x-4 pt-6">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg transition-colors"
            >
              <Save className="w-5 h-5" />
              <span>Update Menu</span>
            </button>
            <Link href="/admin/menu" className="flex-1">
              <button
                type="button"
                className="w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                Batal
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
