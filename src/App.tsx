import { lazy, Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Marketplaces } from './components/Marketplaces';

// Lazy-loaded pages — code splitting для быстрой начальной загрузки
const HomePage = lazy(() => import('./pages/HomePage'));
const WholesalePage = lazy(() => import('./pages/WholesalePage'));
const ShowroomPage = lazy(() => import('./pages/ShowroomPage'));
const DesignerPaperPage = lazy(() => import('./pages/DesignerPaperPage'));
const CuttingPage = lazy(() => import('./pages/CuttingPage'));

// Минимальный fallback без мерцания
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
  </div>
);

// Мгновенный скролл вверх при смене маршрута
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wholesale" element={<WholesalePage />} />
            <Route path="/showroom" element={<ShowroomPage />} />
            <Route path="/catalog" element={<DesignerPaperPage />} />
            <Route path="/cutting" element={<CuttingPage />} />
          </Routes>
        </Suspense>
      </main>
      <Marketplaces />
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
