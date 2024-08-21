import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import FoeLogo from "../assets/foeLogo.png";
import { Button, Typography } from "@mui/material";
export default function Header() {
  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #ccc",
         }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button variant="contained">تسجيل دخول</Button>
          <Typography
            variant="body1"
            color="initial"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            استعلامات فوج المقر
          </Typography>
          <img
            src={FoeLogo}
            alt="logo"
            style={{
              objectFit: "contain",
              maxWidth: "90px",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
