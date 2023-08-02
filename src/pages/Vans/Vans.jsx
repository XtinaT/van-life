import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";

const colors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
};

const types = {
    simple: "Simple",
    rugged: "Rugged",
    luxury: "Luxury",
};

export function Vans() {
    const [vansInfo, setVansInfo] = useState([]);
    const [isLoaderOpen, setLoaderOpen] = useState(false);

    useEffect(() => {
        setLoaderOpen(true);
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVansInfo(data.vans))
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
                Explore our van options
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={4}>
                {vansInfo.map((item) => (
                    <Stack key={item.id}>
                        <Link to={`/vans/${item.id}`}>
                            <Box
                                sx={{
                                    width: "230px",
                                    height: "230px",
                                    backgroundImage: `url(${item.imageUrl})`,
                                    backgroundSize: "cover",
                                    borderRadius: "5px",
                                }}
                            />
                        </Link>
                        <Stack direction="row" justifyContent="space-between">
                            <Box>
                                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                                    {item.name}
                                </Typography>
                                <Stack
                                    sx={{
                                        width: "85px",
                                        height: "34px",
                                        borderRadius: "5px",
                                        background: colors[item.type],
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            color: "#FFEAD0",
                                        }}
                                    >
                                        {types[item.type]}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "20px", fontWeight: 800 }}>
                                    ${item.price}
                                </Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                                    /day
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
            <Loader isLoaderOpen={isLoaderOpen} />
        </Stack>
    );
}
