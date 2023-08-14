import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Outlet, useLoaderData } from "react-router-dom";
import { LinkMoveBack } from "../../components/LinkMoveBack";
import { HostVanNavBar } from "./HostVanNavBar";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

const colors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
};

export const types = {
    simple: "Simple",
    rugged: "Rugged",
    luxury: "Luxury",
};

export async function loader({ params, request }) {
    await requireAuth(request);
    return getHostVans(params.id);
}

export function HostVan() {
    const vanInfo = useLoaderData()[0];
    return (
        <Stack sx={{ padding: "30px", background: "#FFF7ED", flexGrow: "2" }}>
            <LinkMoveBack url=".." text="Back to all vans" />
            {/* url="../vans" or use relative="path" to go to the previous route */}
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
                            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>/day</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <HostVanNavBar />
                <Outlet context={vanInfo} />
            </Stack>
        </Stack>
    );
}
