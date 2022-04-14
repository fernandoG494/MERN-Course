import { Route, Routes, BrowserRouter } from "react-router-dom"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { DCScreen } from "../components/dc/DCScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { LoginScreen } from "../components/login/LoginScreen"
import { Navbar } from "../components/ui/Navbar"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DCScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
