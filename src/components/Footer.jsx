import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      textAlign="center"
      borderTop="1px solid #ccc"
      bgcolor="#eee"
      paddingBlock={1}
    >
      <Typography
        variant="body1"
        color="initial"
        sx={{ fontSize: { xs: "12px", sm: "14px" }, paddingInline: "8px" }}
      >
        جهاز مستقبل مصر للتنمية المستدامة - فرع نظم المعلومات ©
      </Typography>
    </Box>
  );
};

export default Footer;
