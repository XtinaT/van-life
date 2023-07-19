import { Stack, Typography } from "@mui/material";
import React from "react";

export function Footer () {
  return (
  <Stack direction="row" sx={{padding:"24px 0", backgroundColor:"#252525"}}>
    <Typography sx={{color:"#AAA", fontSize: "14px", fontWeight: "500", m:"auto" }}>Ⓒ 2022 #VANLIFE</Typography> 
  </Stack>
  );
}