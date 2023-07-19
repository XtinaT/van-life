import { Stack } from "@mui/material";
import React from "react";
import { Header } from "../../components/Header";
import { Content } from "./components/Content";
import { Footer } from "../../components/Footer";

export function AboutPage () {
  return (
    <Stack height="100vh">
      <Header />
      <Content />
      <Footer />
    </Stack>
  );
}