import React from "react";
import { Typography, Stack } from "@mui/material";
import { useOutletContext } from "react-router-dom";

export function VanPricing() {
    const vanInfo = useOutletContext();
    return (
        vanInfo&&<Stack direction="row" alignItems="center">
            <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>${vanInfo.price}</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>/day</Typography>
        </Stack>
    );
}
