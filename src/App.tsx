// MokaCigar Encyclopedia - Luxury Cigar Collection
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { BrandDetail } from "./pages/BrandDetail";
import { CigarDetail } from "./pages/CigarDetail";
import { SearchPage } from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:brandId" element={<BrandDetail />} />
        <Route path="/cigar/:cigarId" element={<CigarDetail />} />
        <Route path="/search" element={<SearchPage />} />
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
