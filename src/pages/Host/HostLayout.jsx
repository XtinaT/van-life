import React from "react";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HostHeader } from "./HostHeader";

export function HostLayout() {
    return (
        <Stack>
            <HostHeader />
            <Outlet />
        </Stack>
    );
}
