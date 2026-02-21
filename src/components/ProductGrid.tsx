import { Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart, useFavorites } from '../store/useStore';
import { cn } from '../utils/cn';
import { staggerChild } from '../utils/animations';

const products = [
  {
    id: 1,
    name: "Крафтовая бумага (рулон)",
    category: "Упаковка",
    price: 1290.00,
    oldPrice: 1590.00,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?w=800&q=80",
    tag: "Хит",
    color: "bg-amber-500"
  },
  {
    id: 2,
    name: "Набор цветного картона",
    category: "Картон",
    price: 2490.00,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1586075010620-2276188dc21f?w=800&q=80",
    tag: "Новинка",
    color: "bg-indigo-600"
  },
  {
    id: 3,
    name: "Текстурная бумага A4",
    category: "Текстурная",
    price: 890.00,
    oldPrice: 1190.00,
    rating: 4.7,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=800&q=80",
    color: "bg-emerald-600"
  },
  {
    id: 4,
    name: "Бумага для акварели",
    category: "Для рисования",
    price: 590.00,
    rating: 4.6,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
    tag: "Скидка",
    color: "bg-rose-500"
  },
  {
    id: 5,
    name: "Калька для черчения",
    category: "Калька",
    price: 450.00,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=800&q=80",
    color: "bg-teal-600"
  },
  {
    id: 6,
    name: "Дизайнерский конверт",
    category: "Заготовки",
    price: 180.00,
    oldPrice: 210.00,
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1572375927502-4b62c0bb78a8?w=800&q=80",
    tag: "Лимитка",
    color: "bg-slate-800"
  }
];

export const ProductGrid: React.FC = () => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold font-rubik tracking-normal text-slate-900 mb-2">Популярные товары</h2>
          <p className="text-slate-500">Откройте для себя наш лучший ассортимент.</p>
        </div>
        <button className="hidden sm:block text-indigo-600 font-bold hover:underline">
          Все товары
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            {...staggerChild(index)}
            className="group relative flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              
              {product.tag && (
                <div className={`absolute top-4 left-4 ${product.color} text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-lg`}>
                  {product.tag}
                </div>
              )}

              {/* Quick Actions — CSS-only, плавные */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => toggleFavorite(product)}
                  className={cn(
                    "w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center transition-colors duration-200",
                    isFavorite(product.id) ? "text-rose-500" : "text-slate-900 hover:text-rose-500"
                  )}
                >
                  <Heart className={cn("w-5 h-5", isFavorite(product.id) && "fill-rose-500")} />
                </button>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-900 hover:text-indigo-600 transition-colors duration-200"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              {/* Add to Cart — CSS-only, плавный */}
              <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-3 bg-white/90 backdrop-blur-md text-slate-900 font-bold rounded-2xl shadow-xl hover:bg-white transition-colors duration-200"
                >
                  В корзину
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 px-1">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                  />
                ))}
                <span className="text-xs font-medium text-slate-400 ml-1">({product.reviews})</span>
              </div>
              <h3 className="text-lg font-bold font-rubik tracking-normal text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                {product.name}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-slate-900">{product.price.toFixed(0)} ₽</span>
                {product.oldPrice && (
                  <span className="text-sm text-slate-400 line-through font-medium">
                    {product.oldPrice.toFixed(0)} ₽
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 sm:hidden">
        <button className="w-full py-4 border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-colors duration-200">
          Все товары
        </button>
      </div>
    </section>
  );
};
