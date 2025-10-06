// MokaCigar Encyclopedia - Luxury Cigar Collection
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Brands } from "./pages/Brands";
import { BrandDetail } from "./pages/BrandDetail";
import { CigarDetail } from "./pages/CigarDetail";
import { SearchPage } from "./pages/SearchPage";
import { Auth } from "./pages/Auth";
import { Admin } from "./pages/Admin";
import NotFound from "./pages/NotFound";
import MokaHome from "./pages/MokaHome";
import MokaBrandPage from "./pages/MokaBrandPage";

const queryClient = new QueryClient();

const AppContent = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <Routes>
        <Route path="/" element={<MokaHome />} />
        <Route path="/brand/:brandName" element={<MokaBrandPage />} />
        <Route path="/old-home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/old-brand/:brandId" element={<BrandDetail />} />
        <Route path="/cigar/:cigarId" element={<CigarDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
