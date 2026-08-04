import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clubColors } from "../../theme";
import { ChevronLeftIcon } from "./icons";

const ACTIONS = [
  {
    title: "کسب امتیاز",
    subtitle: "با فعالیت، امتیاز کسب کنید.",
    path: "/club/earn-points",
  },
  {
    title: "طرح‌ها و جوایز",
    subtitle: "انتخاب بین طرح‌های متنوع و دریافت جوایز",
    path: "/club/prizes",
  },
  {
    title: "اطلاعات حساب کاربری",
    subtitle: "اطلاعات حساب کاربری و حساب سجام",
    path: "/club/account",
  },
];

export default function ActionBoxes() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        gap: 1.5,
      }}
    >
      {ACTIONS.map((action) => (
        <Box
          key={action.path}
          onClick={() => navigate(action.path)}
          sx={{
            bgcolor: clubColors.card,
            border: `1px solid ${clubColors.border}`,
            borderRadius: "14px",
            px: 2,
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            cursor: "pointer",
            transition: "box-shadow 0.2s, border-color 0.2s",
            "&:hover": {
              borderColor: clubColors.orangeMuted,
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            },
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: clubColors.text, mb: 0.5 }}>
              {action.title}
            </Typography>
            <Typography sx={{ fontSize: 12, color: clubColors.muted, lineHeight: 1.6 }}>
              {action.subtitle}
            </Typography>
          </Box>
          <ChevronLeftIcon size={16} color={clubColors.muted} />
        </Box>
      ))}
    </Box>
  );
}
