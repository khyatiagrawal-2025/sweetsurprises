export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge: string;
}

export interface CartItem extends Product {
  qty: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Love Mug",
    price: 499,
    image: "https://img.clevup.in/131753/couple-mug-set-1683454660447_SKU-3887_0.jpeg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Memory Frame",
    price: 999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuxpDNUh6Ys92ZRhkCtZ4XucY5fEn1nfWGQ&s",
    badge: "New",
  },
  {
    id: 3,
    name: "Gift Hamper",
    price: 1999,
    image: "https://www.thestapleberry.in/cdn/shop/files/42E9EAF4-D8C2-4E9A-B6B6-A4CB2D92F163_1024x1024@2x.jpg",
    badge: "Hot",
  },
  {
    id: 4,
    name: "Rose Box",
    price: 1499,
    image: "https://api.floraindia.com/upload/CrbwIJEVDn1759046043494.webp",
    badge: "Premium",
  },
  {
    id: 5,
    name: "LED Photo Lamp",
    price: 1799,
    image: "https://m.media-amazon.com/images/I/51SvF2LsLoL._AC_UF1000,1000_QL80_.jpg",
    badge: "Trending",
  },
  {
    id: 6,
    name: "Couple Keychain",
    price: 399,
    image: "https://img.joomcdn.net/35c19e3a35ec85e80e8a66c60f8e60fb370f2fac_original.jpeg",
    badge: "Cute",
  },
];
