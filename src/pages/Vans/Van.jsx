import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { LinkMoveBack } from "../../components/LinkMoveBack";

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

export function Van() {
    const { id } = useParams();
    const [vanInfo, setVanInfo] = useState();
    const [isLoaderOpen, setLoaderOpen] = useState(false);
    useEffect(() => {
        setLoaderOpen(true);
        fetch(`/api/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setVanInfo(data.vans))
            .finally(() => setLoaderOpen(false));
    }, [id]);
    return (
        <Stack sx={{ padding: "30px", background: "#FFF7ED", flexGrow: "2" }}>
            <LinkMoveBack url="/vans" text="Back to all vans" />
            {vanInfo && (
                <Stack key={vanInfo.id} gap={4}>
                    <Box
                        sx={{
                            width: "calc(100vw - 60px)",
                            height: "calc(100vw - 60px)",
                            backgroundImage: `url(${vanInfo.imageUrl})`,
                            backgroundSize: "cover",
                            borderRadius: "5px",
                        }}
                    />
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
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>/day</Typography>
                    </Stack>
                    <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                        {vanInfo.description}
                    </Typography>
                    <Button sx={{ background: "#FF8C38", width: "100%", color: "white" }}>
                        Rent this van
                    </Button>
                </Stack>
            )}
            <Loader isLoaderOpen={isLoaderOpen} />
        </Stack>
    );
}
