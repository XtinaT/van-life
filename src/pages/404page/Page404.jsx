import React from "react";
import { Button, Stack, Typography,} from "@mui/material";
import { NavLink } from "react-router-dom";

export function Page404() {
    return (
        <Stack
            sx={{
                flexGrow: "2",
                padding: "24px",
                backgroundColor: "#FFF7ED",
                justifyContent: "center",
                alignItems: "center",
                gap: "50px",
            }}
        >
            <Typography
                sx={{
                    color: "#161616",
                    fontSize: "32px",
                    fontWeight: "700",
                }}
            >
                Sorry, the page you were looking for was not found.
            </Typography>
            <NavLink to="/" style={{width:"100%", textAlign:"center"}}>
                <Button
                    sx={{
                        color: "white",
                        background: "#161616",
                        width: "100%",
                        textTransform: "unset",
                        maxWidth: "500px",
                        "&:hover": {
                            background: "#FF8C38",
                        },
                    }}
                >
                    Return to home
                </Button>
            </NavLink>
        </Stack>
    );
}
