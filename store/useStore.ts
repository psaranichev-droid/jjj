import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface StoreState {
  cart: CartItem[];
  favorites: FavoriteItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  favorites: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),

  updateCartQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    })),

  clearCart: () => set({ cart: [] }),

  addToFavorites: (item) =>
    set((state) => {
      const exists = state.favorites.find((i) => i.id === item.id);
      if (exists) return state;
      return { favorites: [...state.favorites, item] };
    }),

  removeFromFavorites: (id) =>
    set((state) => ({ favorites: state.favorites.filter((i) => i.id !== id) })),

  isFavorite: (id) => get().favorites.some((i) => i.id === id),
}));
