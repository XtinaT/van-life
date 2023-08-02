import React from "react";
import { Dialog, Stack, CircularProgress } from "@mui/material";

export function Loader({ isLoaderOpen }) {
    return (
        <Dialog
            data-testid="loader"
            open={isLoaderOpen}
            sx={{
                "& .MuiPaper-root": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                },
            }}
        >
            <Stack
                width="250px"
                height="250px"
                sx={{ alignItems: "center", justifyContent: "center" }}
            >
                <CircularProgress color="warning" size="150px" />
            </Stack>
        </Dialog>
    );
}
