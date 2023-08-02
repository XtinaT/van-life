import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { LinkMoveBack } from "../../components/LinkMoveBack";
import { HostVanNavBar } from "./HostVanNavBar";

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

export function HostVan() {
    const { id } = useParams();
    const [vanInfo, setVanInfo] = useState();
    const [isLoaderOpen, setLoaderOpen] = useState(false);
    useEffect(() => {
        setLoaderOpen(true);
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setVanInfo(data.vans[0]))
            .finally(() => setLoaderOpen(false));
    }, [id]);
    return (
        <Stack sx={{ padding: "30px", background: "#FFF7ED", flexGrow: "2" }}>
            <LinkMoveBack url="/host/vans" text="Back to all vans" />
            {vanInfo && (
                <Stack key={vanInfo.id} p="25px" gap={2} sx={{ background: "white" }}>
                    <Stack direction="row">
                        <Box
                            sx={{
                                width: "160px",
                                height: "160px",
                                backgroundImage: `url(${vanInfo.imageUrl})`,
                                backgroundSize: "cover",
                                borderRadius: "5px",
                                mr: "25px",
                            }}
                        />
                        <Stack gap={0.5}>
                            <Stack
                                sx={{
                                    width: "85px",
                                    height: "34px",
                                    borderRadius: "5px",
                                    background: colors[vanInfo.type],
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
                                    {types[vanInfo.type]}
                                </Typography>
                            </Stack>
                            <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
                                {vanInfo.name}
                            </Typography>
                            <Stack direction="row" alignItems="center">
                                <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
                                    ${vanInfo.price}
                                </Typography>
                                <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                                    /day
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <HostVanNavBar />

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
                </Stack>
            )}
            <Loader isLoaderOpen={isLoaderOpen} />
        </Stack>
    );
}
