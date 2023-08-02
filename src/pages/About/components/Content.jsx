import { Button, Stack, Typography, Box } from "@mui/material";
import React from "react";
import about from "../../../assets/images/about.png";

export function Content() {
    return (
        <Stack sx={{ flexGrow: "2" }}>
            <Box
                sx={{
                    backgroundImage: `url(${about})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "233px",
                }}
            />
            <Stack maxWidth="800px" m="auto" p="50px 26px">
                <Box>
                    <Typography
                        sx={{
                            color: "#161616",
                            fontSize: "32px",
                            fontWeight: "700",
                        }}
                    >
                        Don’t squeeze in a sedan when you could relax in a van.
                    </Typography>
                    <Typography
                        sx={{
                            color: "#161616",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        Our mission is to enliven your road trip with the perfect travel van rental.
                        Our vans are recertified before each trip to ensure your travel plans can go
                        off without a hitch. (Hitch costs extra 😉)
                    </Typography>
                    <Typography
                        sx={{
                            color: "#161616",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}
                    >
                        Our team is full of vanlife enthusiasts who know firsthand the magic of
                        touring the world on 4 wheels.
                    </Typography>
                </Box>
                <Stack sx={{ backgroundColor: "#FFCC8D", p: "30px" }}>
                    <Typography
                        sx={{
                            color: "#161616",
                            fontSize: "24px",
                            fontWeight: "700",
                        }}
                    >
                        Your destination is waiting. Your van is ready.
                    </Typography>
                    <Button
                        sx={{
                            color: "white",
                            background: "#161616",
                            width: "180px",
                            textTransform: "unset",
                        }}
                    >
                        Explore our vans
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}
