export interface MenuItem {
  id: string;
  name: string;
  category: "nasi-kotak" | "bubur" | "tumpeng" | "jajanan";
  price: number;
  description: string;
  image: string;
  isBestSeller: boolean;
  ingredients?: string[];
}

export const menuItems: MenuItem[] = [
  // NASI KOTAK
  {
    id: "nasi-jagung",
    name: "Nasi Jagung",
    category: "nasi-kotak",
    price: 10000,
    description: "Nasi jagung khas Madura dengan lauk pilihan",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Nasi Jagung", "Lauk Pilihan", "Sambal"],
  },
  {
    id: "ayam-krispi",
    name: "Ayam Krispi",
    category: "nasi-kotak",
    price: 12000,
    description: "Ayam goreng krispi renyah dengan nasi putih",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
    isBestSeller: true,
    ingredients: ["Nasi Putih", "Ayam Goreng Krispi", "Sayur", "Sambal"],
  },
  {
    id: "tempe-goreng",
    name: "Tempe Goreng",
    category: "nasi-kotak",
    price: 10000,
    description: "Tempe goreng kriuk dengan bumbu rahasia",
    image: "https://images.unsplash.com/photo-1591456983933-0e1fce4d5e68?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Nasi Putih", "Tempe Goreng", "Sambal", "Lalapan"],
  },
  {
    id: "telur-dadar",
    name: "Telur Dadar",
    category: "nasi-kotak",
    price: 10000,
    description: "Telur dadar lembut dengan nasi hangat",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Nasi Putih", "Telur Dadar", "Sayur", "Sambal"],
  },
  {
    id: "ikan-asin",
    name: "Ikan Asin",
    category: "nasi-kotak",
    price: 12000,
    description: "Ikan asin gurih dengan sambal terasi",
    image: "https://images.unsplash.com/photo-1580959375944-68ea0bdc0f8f?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Nasi Putih", "Ikan Asin", "Sambal Terasi", "Lalapan"],
  },

  // ANEKA BUBUR
  {
    id: "bubur-ayam",
    name: "Bubur Ayam",
    category: "bubur",
    price: 12000,
    description: "Bubur ayam spesial dengan topping lengkap",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
    isBestSeller: true,
    ingredients: ["Bubur Nasi", "Ayam Suwir", "Telur", "Kerupuk", "Cakwe"],
  },
  {
    id: "bubur-kacang-hijau",
    name: "Bubur Kacang Hijau",
    category: "bubur",
    price: 8000,
    description: "Bubur kacang hijau manis dengan santan",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Kacang Hijau", "Santan", "Gula Merah"],
  },
  {
    id: "bubur-sumsum",
    name: "Bubur Sumsum",
    category: "bubur",
    price: 8000,
    description: "Bubur sumsum lembut dengan kuah gula merah",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Tepung Beras", "Santan", "Kuah Gula Merah"],
  },

  // TUMPENG
  {
    id: "tumpeng-mini",
    name: "Tumpeng Mini",
    category: "tumpeng",
    price: 150000,
    description: "Tumpeng mini untuk 5-7 orang dengan lauk lengkap",
    image: "https://images.unsplash.com/photo-1596040033229-a0b7e2ade6b3?w=800&q=80",
    isBestSeller: true,
    ingredients: [
      "Nasi Kuning",
      "Ayam Goreng",
      "Telur",
      "Perkedel",
      "Sayur Urap",
      "Sambal Goreng Ati",
      "Kerupuk",
    ],
  },
  {
    id: "tumpeng-sedang",
    name: "Tumpeng Sedang",
    category: "tumpeng",
    price: 250000,
    description: "Tumpeng sedang untuk 10-15 orang",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    isBestSeller: false,
    ingredients: [
      "Nasi Kuning",
      "Ayam Goreng",
      "Rendang",
      "Telur",
      "Perkedel",
      "Sayur Urap",
      "Sambal Goreng Ati",
      "Kerupuk",
    ],
  },
  {
    id: "tumpeng-besar",
    name: "Tumpeng Besar",
    category: "tumpeng",
    price: 400000,
    description: "Tumpeng besar untuk acara spesial 20-30 orang",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    isBestSeller: false,
    ingredients: [
      "Nasi Kuning",
      "Ayam Goreng",
      "Rendang",
      "Telur",
      "Perkedel",
      "Sayur Urap",
      "Sambal Goreng Ati",
      "Empal",
      "Kerupuk",
    ],
  },

  // JAJANAN PASAR
  {
    id: "risol-mayo",
    name: "Risol Mayo",
    category: "jajanan",
    price: 3000,
    description: "Risol isi sayur mayones yang creamy",
    image: "https://images.unsplash.com/photo-1601050690511-ba6550c2b4eb?w=800&q=80",
    isBestSeller: true,
    ingredients: ["Kulit Risol", "Sayuran", "Mayones", "Tepung Roti"],
  },
  {
    id: "lemper",
    name: "Lemper Ayam",
    category: "jajanan",
    price: 3000,
    description: "Lemper ketan isi ayam suwir berbumbu",
    image: "https://images.unsplash.com/photo-1596040033229-a0b7e2ade6b3?w=800&q=80",
    isBestSeller: true,
    ingredients: ["Ketan", "Ayam Suwir", "Daun Pisang"],
  },
  {
    id: "onde-onde",
    name: "Onde-Onde",
    category: "jajanan",
    price: 2500,
    description: "Onde-onde isi kacang hijau dengan wijen",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Tepung Ketan", "Kacang Hijau", "Wijen"],
  },
  {
    id: "klepon",
    name: "Klepon",
    category: "jajanan",
    price: 2000,
    description: "Klepon kenyal isi gula merah",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Tepung Ketan", "Gula Merah", "Kelapa Parut"],
  },
  {
    id: "pastel",
    name: "Pastel",
    category: "jajanan",
    price: 3000,
    description: "Pastel goreng isi sayuran segar",
    image: "https://images.unsplash.com/photo-1601050690118-e1545e82d1f6?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Kulit Pastel", "Sayuran", "Telur"],
  },
  {
    id: "tahu-isi",
    name: "Tahu Isi",
    category: "jajanan",
    price: 3500,
    description: "Tahu goreng isi sayur dan tauge",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    isBestSeller: false,
    ingredients: ["Tahu", "Sayuran", "Tauge", "Tepung"],
  },
];

export const categories = [
  { id: "all", name: "Semua Menu" },
  { id: "nasi-kotak", name: "Nasi Kotak" },
  { id: "bubur", name: "Aneka Bubur" },
  { id: "tumpeng", name: "Tumpeng" },
  { id: "jajanan", name: "Jajanan Pasar" },
];

export function getMenuByCategory(category: string): MenuItem[] {
  if (category === "all") return menuItems;
  return menuItems.filter((item) => item.category === category);
}

export function getBestSellers(): MenuItem[] {
  return menuItems.filter((item) => item.isBestSeller);
}

export function getMenuById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
