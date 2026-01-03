import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Generate from "./pages/Generate";
import MyGeneration from "./pages/MyGeneration";
import YtPreview from "./pages/YtPreview";
import Login from "./components/Login";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import TechStack from "./pages/TechStack";
import Roadmap from "./pages/Roadmap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/generate/:id" element={<Generate />} />
                <Route path="/My-generation" element={<MyGeneration />} />
                <Route path="/preview" element={<YtPreview />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/tech-stack" element={<TechStack />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
            </Routes>
            <Footer />
        </>
    );
}