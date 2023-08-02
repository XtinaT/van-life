import React from "react";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
    return (
        <Stack minHeight="100vh">
            <Header />
            <Outlet />
            <Footer />
        </Stack>
    );
}
