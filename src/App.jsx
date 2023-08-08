import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/Home/HomePage";
import { AboutPage } from "./pages/About/AboutPage";
import { Vans } from "./pages/Vans/Vans";
import { Van } from "./pages/Vans/Van";
import { Layout } from "./components/Layout";
import "./server";
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./pages/Host/HostLayout";
import { HostVan } from "./pages/Host/HostVan";
import { HostVans } from "./pages/Host/HostVans";
import { VanDetails } from "./pages/Host/VanDetails";
import { VanPricing } from "./pages/Host/VanPricing";
import { VanPhotos } from "./pages/Host/VanPhotos";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<Van />} />
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} /> {/* /host/income */}
                        <Route path="review" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVan />}>
                            <Route index element={<VanDetails />} />
                            <Route path="pricing" element={<VanPricing />} />
                            <Route path="photos" element={<VanPhotos />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
