import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VisitorLogger from "./components/VisitorLogger"; // 👈 added here

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        {/* 👇 Runs automatically once per visitor */}
        <VisitorLogger/>

        <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>

            {/* 👇 Add your footer here for transparency */}
            <footer className="text-center py-4 border-t border-border lg:ml-[280px]">
                <p className="text-[13px] text-muted-foreground px-5">
                    This site collects minimal, non-personal technical data (e.g., country and device type) solely for
                    analytics and operational visibility. No personal or sensitive information is stored or shared.
                </p>
            </footer>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;