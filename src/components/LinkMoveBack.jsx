import React from "react";
import { Stack, Typography } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Link } from "react-router-dom";

export function LinkMoveBack({ url, text }) {
    return (
        <Stack
            sx={{
                width: "100%",
                height: "100px",
            }}
        >
            <Link
                to={url}
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "24px",
                    textDecoration: "underline",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "black",
                }}
            >
                <ArrowBackIosNew
                    sx={{
                        width: "24px",
                        height: "24px",
                        color: "black",
                        mr: "8px",
                    }}
                />
                <Typography>{text}</Typography>
            </Link>
        </Stack>
    );
}
