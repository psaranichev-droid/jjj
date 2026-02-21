import { AnimatePresence, motion } from 'framer-motion';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useFavorites, useCart } from '../store/useStore';
import { overlay, drawer } from '../utils/animations';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FavoritesDrawer = ({ isOpen, onClose }: FavoritesDrawerProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div {...overlay} onClick={onClose} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]" />
          <motion.div
            {...drawer}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                <h2 className="text-xl font-bold font-rubik">Избранное</h2>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-sm font-medium">
                  {favorites.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {favorites.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-slate-900">Список избранного пуст</p>
                    <p className="text-slate-500">Сохраняйте товары, которые вам понравились</p>
                  </div>
                  <button onClick={onClose} className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors duration-200">
                    Перейти к покупкам
                  </button>
                </div>
              ) : (
                favorites.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-slate-900 leading-tight">{item.name}</h3>
                        <button onClick={() => toggleFavorite(item)} className="text-slate-400 hover:text-rose-500 transition-colors duration-200">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-slate-500">{item.category}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="font-bold text-slate-900">{item.price} ₽</span>
                        <button
                          onClick={() => { addToCart(item); onClose(); }}
                          className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors duration-200"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          В корзину
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
