import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisitorLogger from "./components/VisitorLogger"; // 👈 added here

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      {/* 👇 Runs automatically once per visitor */}
      <VisitorLogger />

      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {/* 👇 Add your footer here for transparency */}
        <footer
            style={{
              textAlign: "center",
              fontSize: "0.35rem",
              color: "#c8d0db",
              borderTop: "1px solid #eee",
            }}
        >
          <p>
            This site collects basic public visitor info (IP, country, device
            type) for analytics and security purposes. No personal or private data
            is stored.
          </p>
        </footer>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;