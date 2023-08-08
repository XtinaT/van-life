import React from "react";
import { Box, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { types } from "./HostVan";


export function VanDetails() {
    const vanInfo = useOutletContext();
    return (
        vanInfo&&<Box>
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                <b>Name: </b>
                {vanInfo.name}
            </Typography>

            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                <b>Category: </b>
                {types[vanInfo.type]}
            </Typography>

            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                <b>Description: </b>
                {vanInfo.description}
            </Typography>
        </Box>
    );
}
