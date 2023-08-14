import React, {Suspense} from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
    await requireAuth(request);
    // return getHostVans();
    return defer({ vans: getHostVans() });
}

export function HostVans() {
    const hostVansPromise = useLoaderData();
    const renderVans = (vans) => (
        <Stack gap={2}>
            {vans.map((item) => (
                <Stack
                    key={item.id}
                    direction="row"
                    gap={2}
                    p="25px"
                    alignItems="center"
                    sx={{ background: "white" }}
                >
                    <Link to={item.id}>
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
    );
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
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={hostVansPromise.vans}>{renderVans}</Await>
            </Suspense>
        </Stack>
    );
}
