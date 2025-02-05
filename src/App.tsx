import CustomNavbar from "./components/Navbar";
import './App.css'
import HomeScreen from "./pages/Home/HomeScreen.tsx";
import {QueryClient, QueryClientProvider} from "react-query";

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
            <>
                <CustomNavbar/>
                <HomeScreen/>
            </>
        </QueryClientProvider>
    );
}

export default App;
