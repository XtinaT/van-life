import React, { Suspense } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, NavLink, useLoaderData, useSearchParams, defer, Await } from "react-router-dom";
import { getVans } from "../../api";

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

export function loader() {
    // return getVans();
    return defer({ vans: getVans() });
}

export function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const vansDataPromise = useLoaderData();
    /* if we have more than one param const generateNewSearchParamString = (key, value) => {
        const sp = new URLSearchParams(searchParams);
        if (value === null - to clear the filter) {
            sp.delete(key);
        } else {
            sp.set(key, value);
        }
        return `?${sp.toString()}`;
    }; */

    /* function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
      } */

    const renderVans = (vans) => {
        const vansInfoFiltered = typeFilter
            ? vans.filter((item) => item.type === typeFilter)
            : vans;
        const vansElements = vansInfoFiltered.map((item) => (
            <Stack key={item.id}>
                <Link
                    to={item.id}
                    state={{ searchParams: searchParams.toString(), type: typeFilter }}
                >
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
                        <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>/day</Typography>
                    </Box>
                </Stack>
            </Stack>
        ));
        return (
            <>
                <Stack direction="row" gap={3} margin="20px 0">
                    <Button
                        onClick={() => setSearchParams("type=simple")}
                        sx={{
                            background: typeFilter === "simple" ? "#E17654" : "#FFEAD0",
                            color: typeFilter === "simple" ? "#FFEAD0" : "#4D4D4D",
                            textTransform: "none",
                            "&:hover": {
                                background: "#E17654",
                                color: "#FFEAD0",
                            },
                        }}
                    >
                        Simple
                    </Button>
                    <Button
                        onClick={() => setSearchParams({ type: "luxury" })}
                        sx={{
                            background: typeFilter === "luxury" ? "#161616" : "#FFEAD0",
                            color: typeFilter === "luxury" ? "#FFEAD0" : "#4D4D4D",
                            textTransform: "none",
                            "&:hover": {
                                background: "#161616",
                                color: "#FFEAD0",
                            },
                        }}
                    >
                        Luxury
                    </Button>
                    <Button
                        onClick={() => setSearchParams({ type: "rugged" })}
                        sx={{
                            background: typeFilter === "rugged" ? "#115E59" : "#FFEAD0",
                            color: typeFilter === "rugged" ? "#FFEAD0" : "#4D4D4D",
                            textTransform: "none",
                            "&:hover": {
                                background: "#115E59",
                                color: "#FFEAD0",
                            },
                        }}
                    >
                        Rugged
                    </Button>
                    {/* <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button> */}
                    {/* <Link to="?type=rugged">Rugged</Link> */}
                    {/* <Link to={generateNewSearchParamString("type","rugged")"}>Rugged</Link> */}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    {/* or to="." or setSearchParams({}) */}
                    {typeFilter && (
                        <NavLink to="" style={{ color: "#4D4D4D", textDecoration: "underline" }}>
                            Clear filters
                        </NavLink>
                    )}
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={4}>
                    {vansElements}
                </Stack>
            </>
        );
    };

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
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={vansDataPromise.vans}>{renderVans}</Await>
            </Suspense>
        </Stack>
    );
}
