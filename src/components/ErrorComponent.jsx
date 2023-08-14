import React from "react";
import { useRouteError } from "react-router-dom";

export function ErrorComponent () {
    const error = useRouteError();
    return (<h1>Error: {error.message}</h1>);
}