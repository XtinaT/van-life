import React, { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";

export function HostVans() {
    const [hostVans, setHostVans] = useState([]);
    const [isLoaderOpen, setLoaderOpen] = useState(false);

    useEffect(() => {
        setLoaderOpen(true);
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => setHostVans(data.vans))
            .finally(() => setLoaderOpen(false));
    }, []);
    return (
        <Stack sx={{ padding: "30px", background: "#FFF7ED", flexGrow: "2" }}>
            <Typography
                sx={{
                    fontSize: "32px",
                    fontWeight: 700,
                }}
            >
                Your listed vans
            </Typography>
            <Stack gap={2}>
                {hostVans.map((item) => (
                    <Stack key={item.id} direction="row" gap={2} p="25px" alignItems="center" sx={{background:"white"}}>
                        <Link to={`/host/vans/${item.id}`}>
                            <Box
                                sx={{
                                    width: "66px",
                                    height: "66px",
                                    backgroundImage: `url(${item.imageUrl})`,
                                    backgroundSize: "cover",
                                    borderRadius: "5px",
                                }}
                            />
                        </Link>
                        <Box>
                            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                                {item.name}
                            </Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                                ${item.price}/day
                            </Typography>
                        </Box>
                    </Stack>
                ))}
            </Stack>
            <Loader isLoaderOpen={isLoaderOpen} />
        </Stack>
    );
}
