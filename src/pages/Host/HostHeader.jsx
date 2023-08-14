import { Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { activeStyles , inactiveStyles } from "../../components/Header";


export function HostHeader() {
    return (
        <Stack direction="row" sx={{ padding: "24px", backgroundColor: "#FFF7ED", gap: "30px" }}>
            <NavLink
                to="." // dot is used to redirect to the current route
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="income"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Income
            </NavLink>
            <NavLink
                to="vans"
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Vans
            </NavLink>
            <NavLink
                to="review"
                end
                style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
                Review
            </NavLink>
        </Stack>
    );
}
