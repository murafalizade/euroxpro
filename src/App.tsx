import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import HomeScreen from "./pages/Home/HomeScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';
import {DelegateScreen} from "./pages/Delegates/DelegateScreen.tsx";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5,
                cacheTime: 1000 * 60 * 10,
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <CustomNavbar />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/delegates" element={<DelegateScreen />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
