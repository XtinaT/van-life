import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import back from "../../../assets/images/back_home.png";

export function Content() {
    return (
        <Stack
            flexGrow={2}
            sx={{
                padding: "25px 65px",
                backgroundImage: `url(${back})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                flexGrow: "1",
            }}
        >
            <Stack maxWidth="800px" m="auto">
                <Typography sx={{ color: "#FFF", fontSize: "46px", fontWeight: "800" }}>
                    You got the travel plans, we got the travel vans.
                </Typography>
                <Typography sx={{ color: "#FFF", fontSize: "16px", fontWeight: "500" }}>
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect
                    van to make your perfect road trip.
                </Typography>
                <Button
                    sx={{
                        backgroundColor: "#FF8C38",
                        color: "#FFF",
                        width: "100%",
                        textTransform: "unset",
                    }}
                >
                    Find your van
                </Button>
            </Stack>
        </Stack>
    );
}
