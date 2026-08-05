import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clubColors } from "../../theme";
import EarnPointsModal from "./EarnPointsModal";
import { ChevronLeftIcon } from "./icons";

const ACTIONS = [
  {
    id: "earn",
    title: "کسب امتیاز",
    subtitle: "با فعالیت، امتیاز کسب کنید.",
    path: "/club/earn-points",
    openModal: true,
  },
  {
    id: "prizes",
    title: "طرح‌ها و جوایز",
    subtitle: "انتخاب بین طرح‌های متنوع و دریافت جوایز",
    path: "/club/prizes",
  },
  {
    id: "report",
    title: "گزارش امتیازات دریافتی و مصرفی",
    subtitle: "مشاهده جزئیات دریافت و مصرف امتیازها",
    path: "/club/points-report",
  },
] as const;

export default function ActionBoxes() {
  const navigate = useNavigate();
  const [earnOpen, setEarnOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 1.5,
        }}
      >
        {ACTIONS.map((action) => (
          <Box
            key={action.id}
            onClick={() => {
              if ("openModal" in action && action.openModal) {
                setEarnOpen(true);
                return;
              }
              navigate(action.path);
            }}
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

      <EarnPointsModal open={earnOpen} onClose={() => setEarnOpen(false)} />
    </>
  );
}
