import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../store/useStore';
import { overlay, drawer } from '../utils/animations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

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
                <ShoppingBag className="w-6 h-6 text-slate-900" />
                <h2 className="text-xl font-bold font-rubik">Корзина</h2>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-sm font-medium">
                  {cart.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-slate-900">Ваша корзина пуста</p>
                    <p className="text-slate-500">Добавьте что-нибудь из каталога</p>
                  </div>
                  <button onClick={onClose} className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors duration-200">
                    Вернуться к покупкам
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-slate-900 leading-tight">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-rose-500 transition-colors duration-200">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-slate-500">{item.category}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-slate-200 rounded-lg">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-slate-50 text-slate-600 transition-colors duration-200">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-slate-50 text-slate-600 transition-colors duration-200">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-bold text-slate-900">{item.price * item.quantity} ₽</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-slate-500">Итого:</span>
                  <span className="font-bold text-slate-900 text-2xl">{totalPrice()} ₽</span>
                </div>
                <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-200">
                  Оформить заказ
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
