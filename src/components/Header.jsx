import { Stack } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export const activeStyles = {
    color: "#4D4D4D",
    fontSize: "16px",
    fontWeight: "700",
    textDecoration: "underline",
};
export const inactiveStyles = { color: "#4D4D4D", fontSize: "16px", fontWeight: "600" };

export function Header() {
    return (
        <Stack
            direction="row"
            sx={{ padding: "24px", backgroundColor: "#FFF7ED", justifyContent: "space-between" }}
        >
            <Link to="." style={{ color: "black", fontSize: "25px", fontWeight: "900" }}>
                #VANLIFE
            </Link>
            <Stack direction="row" gap={2}>
                <NavLink
                    to="host"
                    end
                    style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
                >
                    Host
                </NavLink>
                <NavLink
                    to="about"
                    style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
                >
                    About
                </NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
                >
                    Vans
                </NavLink>
                <NavLink to="login" style={{ color: "#4D4D4D" }}>
                    <AccountCircleOutlinedIcon />
                </NavLink>
                <LogoutRoundedIcon
                    sx={{ color: "#4D4D4D" }}
                    onClick={() => {
                        localStorage.removeItem("loggedin");
                        window.location.replace("/login");
                    }}
                />
            </Stack>
        </Stack>
    );
}
