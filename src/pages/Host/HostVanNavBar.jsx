import { Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const activeStyles = {
    color: "#4D4D4D",
    fontSize: "16px",
    fontWeight: "700",
    textDecoration: "underline",
};
const inactiveStyles = { color: "#4D4D4D", fontSize: "16px", fontWeight: "600" };

export function HostVanNavBar() {
    return (
        <Stack direction="row" sx={{ padding: "24px 0 0 0", gap: "30px" }}>
            <NavLink
                to="/host/details"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Details
            </NavLink>
            <NavLink
                to="/host/pricing"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Pricing
            </NavLink>
            <NavLink
                to="/host/photos"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Photos
            </NavLink>
        </Stack>
    );
}
