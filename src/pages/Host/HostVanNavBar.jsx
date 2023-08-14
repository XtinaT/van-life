import { Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { activeStyles, inactiveStyles } from "../../components/Header";


export function HostVanNavBar() {
    return (
        <Stack direction="row" sx={{ padding: "24px 0 0 0", gap: "30px" }}>
            <NavLink
                to="."
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Details
            </NavLink>
            <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Pricing
            </NavLink>
            <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Photos
            </NavLink>
        </Stack>
    );
}
