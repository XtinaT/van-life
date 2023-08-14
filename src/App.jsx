/* eslint-disable no-return-await */
import React from "react";
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/Home/HomePage";
import { AboutPage } from "./pages/About/AboutPage";
import { Vans, loader as vansLoader } from "./pages/Vans/Vans";
import { Van, loader as vanLoader } from "./pages/Vans/Van";
import { Layout } from "./components/Layout";
import "./server";
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./pages/Host/HostLayout";
import { HostVan, loader as hostVanLoader } from "./pages/Host/HostVan";
import { HostVans, loader as hostVansLoader } from "./pages/Host/HostVans";
import { VanDetails } from "./pages/Host/VanDetails";
import { VanPricing } from "./pages/Host/VanPricing";
import { VanPhotos } from "./pages/Host/VanPhotos";
import { Page404 } from "./pages/404page/Page404";
import { ErrorComponent } from "./components/ErrorComponent";
import LoginForm, {loader as loginLoader, action as loginAction} from "./pages/Login/LoginForm";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<ErrorComponent />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginForm />} loader={loginLoader} action={loginAction} />
            <Route path="about" element={<AboutPage />} />
            <Route path="vans" element={<Vans />} loader={vansLoader} />
            <Route path="vans/:id" element={<Van />} loader={vanLoader} />
            <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} loader={async ({request}) => await requireAuth(request)} />
                <Route
                    path="income"
                    element={<Income />}
                    loader={async ({request}) => await requireAuth(request)}
                />{" "}
                {/* /host/income */}
                <Route
                    path="review"
                    element={<Reviews />}
                    loader={async ({request}) => await requireAuth(request)}
                />
                <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
                <Route path="vans/:id" element={<HostVan />} loader={hostVanLoader}>
                    <Route index element={<VanDetails />} loader={async ({request}) => await requireAuth(request)} />
                    <Route path="pricing" element={<VanPricing />} loader={async ({request}) => await requireAuth(request)} />
                    <Route
                        path="photos"
                        element={<VanPhotos />}
                        loader={async ({request}) => await requireAuth(request)}
                    />
                </Route>
            </Route>
            <Route path="*" element={<Page404 />} />
        </Route>,
    ),
);

export function App() {
    return <RouterProvider router={router} />;
}
