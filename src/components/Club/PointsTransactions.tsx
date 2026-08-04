import { Box, Typography } from "@mui/material";
import { clubColors } from "../../theme";

type Tx = {
  time: string;
  type: "دریافت امتیاز" | "مصرف امتیاز";
  points: number;
  description: string;
  status: string;
};

const TRANSACTIONS: Tx[] = [
  {
    time: "۱۴۰۳/۱۰/۱۵ ۱۴:۲۳:۵۳",
    type: "دریافت امتیاز",
    points: 200,
    description: "انتخاب بانک ملت در سجام",
    status: "در انتظار تایید",
  },
  {
    time: "۱۴۰۳/۱۰/۱۵ ۱۴:۲۳:۵۳",
    type: "دریافت امتیاز",
    points: 200,
    description: "فعال‌سازی سرمایه‌گذاری مجدد",
    status: "در انتظار تایید",
  },
  {
    time: "۱۴۰۳/۱۰/۱۴ ۱۱:۰۵:۱۲",
    type: "مصرف امتیاز",
    points: 200,
    description: "بانکداری باز",
    status: "در انتظار تایید",
  },
  {
    time: "۱۴۰۳/۱۰/۱۲ ۰۹:۴۱:۰۸",
    type: "دریافت امتیاز",
    points: 200,
    description: "تولد",
    status: "در انتظار تایید",
  },
  {
    time: "۱۴۰۳/۱۰/۱۰ ۱۶:۱۸:۳۳",
    type: "دریافت امتیاز",
    points: 200,
    description: "دعوت از دوستان",
    status: "در انتظار تایید",
  },
];

const COLS = [
  { key: "time", label: "زمان", flex: 1.4 },
  { key: "type", label: "نوع تراکنش", flex: 1 },
  { key: "points", label: "تعداد امتیاز", flex: 0.8 },
  { key: "description", label: "شرح تراکنش", flex: 1.4 },
  { key: "status", label: "وضعیت", flex: 1 },
] as const;

export default function PointsTransactions() {
  return (
    <Box
      sx={{
        bgcolor: clubColors.card,
        borderRadius: "16px",
        border: `1px solid ${clubColors.border}`,
        overflow: "hidden",
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: 15, fontWeight: 700, color: clubColors.text, mb: 2 }}>
        امتیازات دریافتی و مصرفی
      </Typography>

      <Box sx={{ overflowX: "auto" }}>
        <Box sx={{ minWidth: 640 }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              px: 1.5,
              py: 1.25,
              bgcolor: "#FAFAFA",
              borderRadius: "10px",
              mb: 0.5,
            }}
          >
            {COLS.map((col) => (
              <Typography
                key={col.key}
                sx={{
                  flex: col.flex,
                  fontSize: 12,
                  color: clubColors.mutedDark,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {col.label}
              </Typography>
            ))}
          </Box>

          {TRANSACTIONS.map((tx, i) => (
            <Box
              key={`${tx.description}-${i}`}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                px: 1.5,
                py: 1.4,
                borderBottom: i < TRANSACTIONS.length - 1 ? `1px solid ${clubColors.borderLight}` : "none",
              }}
            >
              <Typography sx={{ flex: 1.4, fontSize: 12, color: clubColors.text, textAlign: "center" }}>
                {tx.time}
              </Typography>
              <Typography sx={{ flex: 1, fontSize: 12, color: clubColors.text, textAlign: "center" }}>
                {tx.type}
              </Typography>
              <Typography sx={{ flex: 0.8, fontSize: 13, fontWeight: 700, color: clubColors.text, textAlign: "center" }}>
                {tx.points.toLocaleString("fa-IR")}
              </Typography>
              <Typography sx={{ flex: 1.4, fontSize: 12, color: clubColors.text, textAlign: "center" }}>
                {tx.description}
              </Typography>
              <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    px: 1.25,
                    py: 0.4,
                    borderRadius: "999px",
                    bgcolor: clubColors.pendingBg,
                    color: clubColors.pendingText,
                    fontSize: 11,
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tx.status}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
