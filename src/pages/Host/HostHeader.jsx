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

export function HostHeader() {
    return (
        <Stack direction="row" sx={{ padding: "24px", backgroundColor: "#FFF7ED", gap: "30px" }}>
            <NavLink
                to="/host"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/host/income"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Income
            </NavLink>
            <NavLink
                to="/host/vans"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Vans
            </NavLink>
            <NavLink
                to="/host/review"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Review
            </NavLink>
        </Stack>
    );
}
