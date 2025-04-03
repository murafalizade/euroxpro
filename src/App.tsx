import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import HomeScreen from "./pages/Home/HomeScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';
import DelegateScreen from "./pages/Delegates/DelegateScreen.tsx";
import ConferenceTeamScreen from "./pages/Home/ConferenceTeamScreen.tsx";
import ResourceScreen from "./pages/Home/ResourcesScreen.tsx";
import Footer from "./components/Footer.tsx";
import Feedback from "./pages/Home/Feedback.tsx";
import {DelegatePositionsScreen} from "./pages/Delegates/DelegatePositionsScreen.tsx";
import {ChallengesScreen} from "./pages/Challenges/ChallengesScreen.tsx";

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
                    {/*<Route path={"/cc"} element={<ConferenceTeamScreen />} />*/}
                    <Route path={"/resources"} element={<ResourceScreen />} />
                    {/*<Route path="/delegates" element={<DelegateScreen />} />*/}
                    <Route path="/feedback" element={<Feedback />} />
                    {/*<Route path="/challenges" element={<ChallengesScreen />} />*/}
                    {/*<Route path={'/delegate-positions'} element={<DelegatePositionsScreen />} />*/}
                </Routes>
                <Footer/>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
