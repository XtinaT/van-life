import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Stack
            direction="row"
            sx={{ padding: "24px", backgroundColor: "#FFF7ED", justifyContent: "space-between" }}
        >
            <Link to="/" style={{ color: "black", fontSize: "25px", fontWeight: "900" }}>
                #VANLIFE
            </Link>
            <Stack direction="row" gap={2}>
                <Link to="/host" style={{ color: "#4D4D4D", fontSize: "16px", fontWeight: "600" }}>
                    Host
                </Link>
                <Link to="/about" style={{ color: "#4D4D4D", fontSize: "16px", fontWeight: "600" }}>
                    About
                </Link>
                <Link to="/vans" style={{ color: "#4D4D4D", fontSize: "16px", fontWeight: "600" }}>
                    Vans
                </Link>
            </Stack>
        </Stack>
    );
}
