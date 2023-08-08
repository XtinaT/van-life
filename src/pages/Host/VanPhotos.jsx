import React from "react";
import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";

export function VanPhotos() {
    const vanInfo = useOutletContext();
    return (
        vanInfo&&<Box
            sx={{
                width: "100px",
                height: "100px",
                backgroundImage: `url(${vanInfo.imageUrl})`,
                backgroundSize: "cover",
                borderRadius: "5px",
                mr: "25px",
            }}
        />
    );
}