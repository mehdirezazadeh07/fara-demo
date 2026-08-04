import { Box, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { clubColors } from "../../theme";
import ClubTopBar from "./ClubTopBar";
import { ChevronDownIcon, ChevronUpIcon, CoinsIcon } from "./icons";

type PointRow = {
  title: string;
  points: number;
  color: string;
};

const POINT_ROWS: PointRow[] = [
  { title: "تکمیل حساب کاربری", points: 5, color: "#9B5DE5" },
  { title: "فعال‌سازی سرمایه‌گذاری مجدد", points: 200, color: "#F2C94C" },
  { title: "داشتن حساب بانک ملت در سجام", points: 100, color: "#4EA8F5" },
  { title: "واریز مستقیم از حساب بانک ملت (بانکداری باز)", points: 400, color: "#F28C28" },
  { title: "سالگرد ازدواج سرمایه‌گذار", points: 5, color: "#EF5B4A" },
  { title: "سالگرد تولد سرمایه‌گذار", points: 5, color: "#2ECC71" },
  { title: "معرفی به دوستان", points: 100, color: "#2EC4B6" },
];

const TOTAL = 2450;

function DonutChart() {
  const size = 210;
  const center = size / 2;
  const radius = 78;
  const stroke = 14;
  const circumference = 2 * Math.PI * radius;
  const segmentCount = POINT_ROWS.length;
  const gapRatio = 0.18;
  const segmentLen = (circumference / segmentCount) * (1 - gapRatio);
  const step = circumference / segmentCount;

  return (
    <Box sx={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius - stroke / 2 - 5}
          fill="none"
          stroke="#D8D8D8"
          strokeWidth={1.4}
        />

        <g transform={`rotate(-90 ${center} ${center})`}>
          {POINT_ROWS.map((row, index) => (
            <circle
              key={row.title}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={row.color}
              strokeWidth={stroke}
              strokeDasharray={`${segmentLen} ${circumference - segmentLen}`}
              strokeDashoffset={-(index * step)}
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography sx={{ fontSize: 13, color: "#8F8F8F", lineHeight: 1.35 }}>مجموع</Typography>
        <Typography sx={{ fontSize: 13, color: "#8F8F8F", lineHeight: 1.35, mb: 0.5 }}>امتیاز دریافتی</Typography>
        <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#2ECC71", lineHeight: 1.3 }}>
          {TOTAL.toLocaleString("fa-IR")} امتیاز
        </Typography>
      </Box>
    </Box>
  );
}

export default function PointsDetails({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box
      sx={{
        bgcolor: clubColors.card,
        borderRadius: "16px",
        border: `1px solid ${clubColors.border}`,
        overflow: "hidden",
      }}
    >
      <ClubTopBar />

      <Box
        onClick={() => setOpen((v) => !v)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.75,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CoinsIcon size={26} />
          <Typography sx={{ fontSize: 15, fontWeight: 700, color: clubColors.text }}>
            {TOTAL.toLocaleString("fa-IR")} امتیاز
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
          <Typography sx={{ fontSize: 13, color: clubColors.mutedDark }}>جزئیات امتیازات</Typography>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "6px",
              bgcolor: open ? clubColors.orangeSoft : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Box>
        </Box>
      </Box>

      <Collapse in={open}>
        <Box
          sx={{
            px: 2,
            pb: 2.5,
            pt: 0.5,
            display: "flex",
            gap: 3,
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1, width: "100%", order: { xs: 2, md: 1 } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 72px 90px",
                gap: 1,
                px: 1,
                mb: 1,
              }}
            >
              <Typography sx={{ fontSize: 11, color: clubColors.muted }}>عنوان امتیاز</Typography>
              <Typography sx={{ fontSize: 11, color: clubColors.muted, textAlign: "center" }}>تعداد امتیاز</Typography>
              <Typography sx={{ fontSize: 11, color: clubColors.muted, textAlign: "center" }}>وضعیت</Typography>
            </Box>

            {POINT_ROWS.map((row) => (
              <Box
                key={row.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 72px 90px",
                  gap: 1,
                  alignItems: "center",
                  px: 1,
                  py: 1.1,
                  borderBottom: `1px solid ${clubColors.borderLight}`,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: row.color, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: 12, color: clubColors.text, lineHeight: 1.5 }}>
                    {row.title}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 13, fontWeight: 700, textAlign: "center", color: clubColors.text }}>
                  {row.points.toLocaleString("fa-IR")}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      px: 1.25,
                      py: 0.35,
                      borderRadius: "999px",
                      bgcolor: clubColors.greenBg,
                      color: clubColors.green,
                      fontSize: 11,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    دریافت شده
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, md: 2 },
              width: { xs: "100%", md: "auto" },
              alignSelf: "center",
              py: { xs: 1, md: 0 },
            }}
          >
            <DonutChart />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
