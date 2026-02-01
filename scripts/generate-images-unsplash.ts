/**
 * Auto-generate images for menu items using Unsplash API (FREE!)
 * No API key needed for basic usage
 */

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  isBestSeller?: boolean;
  ingredients?: string[];
}

// Mapping menu items to Unsplash search queries
const getUnsplashQuery = (item: MenuItem): string => {
  const queryMap: Record<string, string> = {
    // Nasi Kotak
    'Nasi Ayam Goreng': 'fried chicken rice indonesian',
    'Nasi Ayam Bakar': 'grilled chicken rice asian',
    'Nasi Rendang': 'rendang beef rice indonesian',
    'Nasi Ikan Goreng': 'fried fish rice asian',
    'Nasi Ayam Krispi': 'crispy chicken rice',
    'Nasi Empal': 'beef rice indonesian food',
    
    // Bubur
    'Bubur Ayam Kampung': 'chicken porridge indonesian',
    'Bubur Ayam Jakarta': 'chicken congee asian',
    'Bubur Manado': 'corn porridge tinutuan',
    'Bubur Kacang Hijau': 'mung bean porridge dessert',
    'Bubur Sumsum': 'rice flour porridge indonesian',
    
    // Tumpeng
    'Tumpeng Mini': 'tumpeng rice cone indonesian',
    'Tumpeng Nasi Kuning': 'yellow rice cone tumpeng',
    'Tumpeng Nasi Putih': 'white rice cone indonesian',
    'Tumpeng Ulang Tahun': 'birthday rice cone tumpeng',
    'Tumpeng Syukuran': 'celebration rice cone',
    
    // Jajanan
    'Risol Mayo': 'risoles indonesian snack',
    'Lemper Ayam': 'lemper sticky rice indonesian',
    'Pastel Tutup': 'pastel indonesian pastry',
    'Kroket Kentang': 'potato croquette fried',
    'Tahu Isi': 'stuffed tofu indonesian',
    'Lumpia Basah': 'fresh spring roll indonesian',
    'Onde-Onde': 'sesame ball indonesian dessert',
  };
  
  return queryMap[item.name] || `${item.category} indonesian food`;
};

// Unsplash image URLs (curated for Indonesian food)
const unsplashImages: Record<string, string> = {
  // Nasi Kotak
  'Nasi Ayam Goreng': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
  'Nasi Ayam Bakar': 'https://images.unsplash.com/photo-1562007908-17c67e878c88?w=800&q=80',
  'Nasi Rendang': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
  'Nasi Ikan Goreng': 'https://images.unsplash.com/photo-1580959375944-68ea0bdc0f8f?w=800&q=80',
  'Nasi Ayam Krispi': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
  'Nasi Empal': 'https://images.unsplash.com/photo-1604908177725-4049c53580dd?w=800&q=80',
  
  // Bubur
  'Bubur Ayam Kampung': 'https://images.unsplash.com/photo-1583032015879-e5c8a5c7b8a6?w=800&q=80',
  'Bubur Ayam Jakarta': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
  'Bubur Manado': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
  'Bubur Kacang Hijau': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
  'Bubur Sumsum': 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80',
  
  // Tumpeng
  'Tumpeng Mini': 'https://images.unsplash.com/photo-1596040033229-a0b7e2ade6b3?w=800&q=80',
  'Tumpeng Nasi Kuning': 'https://images.unsplash.com/photo-1596040033229-a0b7e2ade6b3?w=800&q=80',
  'Tumpeng Nasi Putih': 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800&q=80',
  'Tumpeng Ulang Tahun': 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
  'Tumpeng Syukuran': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80',
  
  // Jajanan
  'Risol Mayo': 'https://images.unsplash.com/photo-1601050690511-ba6550c2b4eb?w=800&q=80',
  'Lemper Ayam': 'https://images.unsplash.com/photo-1596040033229-a0b7e2ade6b3?w=800&q=80',
  'Pastel Tutup': 'https://images.unsplash.com/photo-1601050690118-e1545e82d1f6?w=800&q=80',
  'Kroket Kentang': 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
  'Tahu Isi': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
  'Lumpia Basah': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80',
  'Onde-Onde': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
};

export { unsplashImages, getUnsplashQuery };
