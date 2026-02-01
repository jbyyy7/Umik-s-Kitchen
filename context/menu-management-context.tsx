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

// Version key untuk force update menu dari data/menu.ts
const MENU_VERSION = "v2.0"; // Update ini untuk force reload dari data/menu.ts

export function MenuManagementProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Load menu items from localStorage or use default
  useEffect(() => {
    const savedVersion = localStorage.getItem("menu-version");
    const savedMenu = localStorage.getItem("admin-menu-items");
    
    // Force reload if version mismatch atau ga ada saved menu
    if (savedVersion !== MENU_VERSION || !savedMenu) {
      // Clear old data
      localStorage.removeItem("admin-menu-items");
      localStorage.setItem("menu-version", MENU_VERSION);
      
      // Import fresh menu from data/menu.ts
      import("@/data/menu").then((module) => {
        setMenuItems(module.menuItems);
        localStorage.setItem("admin-menu-items", JSON.stringify(module.menuItems));
      });
    } else {
      setMenuItems(JSON.parse(savedMenu));
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
