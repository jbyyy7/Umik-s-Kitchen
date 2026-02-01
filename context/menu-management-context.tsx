"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/data/menu";

interface MenuManagementContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (id: string, item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  getMenuItemById: (id: string) => MenuItem | undefined;
}

const MenuManagementContext = createContext<MenuManagementContextType | undefined>(undefined);

export function MenuManagementProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Load menu items from localStorage or use default
  useEffect(() => {
    const savedMenu = localStorage.getItem("admin-menu-items");
    if (savedMenu) {
      setMenuItems(JSON.parse(savedMenu));
    } else {
      // Import default menu
      import("@/data/menu").then((module) => {
        setMenuItems(module.menuItems);
        localStorage.setItem("admin-menu-items", JSON.stringify(module.menuItems));
      });
    }
  }, []);

  // Save to localStorage whenever menu changes
  useEffect(() => {
    if (menuItems.length > 0) {
      localStorage.setItem("admin-menu-items", JSON.stringify(menuItems));
    }
  }, [menuItems]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prev) => [...prev, item]);
  };

  const updateMenuItem = (id: string, updatedItem: MenuItem) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getMenuItemById = (id: string) => {
    return menuItems.find((item) => item.id === id);
  };

  return (
    <MenuManagementContext.Provider
      value={{
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        getMenuItemById,
      }}
    >
      {children}
    </MenuManagementContext.Provider>
  );
}

export function useMenuManagement() {
  const context = useContext(MenuManagementContext);
  if (context === undefined) {
    throw new Error("useMenuManagement must be used within a MenuManagementProvider");
  }
  return context;
}
