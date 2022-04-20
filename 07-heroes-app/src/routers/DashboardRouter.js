import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/ui/Navbar"

import { MarvelScreen } from "../components/marvel/MarvelScreen" 
import { DCScreen } from "../components/dc/DCScreen" 
import { SearchScreen } from "../components/search/SearchScreen"
import { HeroScreen } from "../components/hero/HeroScreen"

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
