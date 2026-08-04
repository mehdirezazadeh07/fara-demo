import { Box, Typography } from "@mui/material";
import { SignalIcon } from "./icons";

export default function ClubFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 3,
        mb: { xs: 2, md: 2.5 },
        mx: { xs: 1.5, sm: 2, md: 0 },
        bgcolor: "#FDFBF7",
        border: "1px solid #E8E2D5",
        borderRadius: "999px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
        px: { xs: 2.5, md: 4 },
        py: { xs: 1.5, md: 1.75 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 1.25, md: 2 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: { xs: 1, md: 1.5 },
          minWidth: 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <SignalIcon />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: 12, md: 13 },
            color: "#4A4A4A",
            whiteSpace: "nowrap",
          }}
        >
          تلفن پشتیبانی :{" "}
          <Box component="span" sx={{ fontWeight: 700, color: "#25282D" }}>
            ۱۶۷۸
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 11, md: 12 },
            color: "#6D6E71",
            lineHeight: 1.6,
          }}
        >
          هفت روز هفته ، ۲۴ پاسخگویی تلفنی و آنلاین ۸:۰۰ الی ۱۶:۰۰
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: { xs: 11, md: 12 },
          color: "#6D6E71",
          lineHeight: 1.6,
          flexShrink: 0,
        }}
      >
        کلیه حقوق این سامانه متعلق به تامین سرمایه بانک ملت می‌باشد.
      </Typography>
    </Box>
  );
}
