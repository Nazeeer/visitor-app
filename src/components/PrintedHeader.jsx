import { Typography, Stack } from "@mui/material";
import Logo from "../assets/foeLogo.png";

const PrintedHeader = () => {
  return (
    <Stack id="head-name">
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "18px",
          color: "#000",
        }}
      >
        جهاز مستقبل مصر للتنمية المستدامة
        <br />
        استعلامات فوج المقر
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "120px",
          fontWeight: "bold",
          fontsize: "20px",
          position: "absolute",
          left: "50%",
          transform: "translatex(-50%)",
          color: "#070F2B",
          textDecoration: "underline",
          textUnderlineOffset: "8px",
        }}
      >
        بيانات زائرين فوج المقر
        <br />
        <span
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "8px",
            color: "#401F71",
          }}
        >
          {/* بيانات زائرين فوج المقر */}
        </span>
      </Typography>
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "156px",
          height: "120px",
          objectFit: "cover",
        }}
      />
    </Stack>
  );
};

export default PrintedHeader;
