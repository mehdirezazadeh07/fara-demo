import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ClubFooter from "../components/Club/ClubFooter";
import { RightArrowIcon } from "../components/Club/icons";
import { clubColors } from "../theme";

type TxType = "earn" | "spend";
type TxStatus = "pending" | "approved" | "cancelled" | "error";

type ReportRow = {
  id: string;
  type: TxType;
  description: string;
  points: number;
  time: string;
  status: TxStatus;
};

const ROWS: ReportRow[] = [
  {
    id: "1",
    type: "earn",
    description: "انتخاب بانک ملت در سجام",
    points: 200,
    time: "۱۴۰۲/۱۲/۲۷ ۱۴:۲۳",
    status: "pending",
  },
  {
    id: "2",
    type: "spend",
    description: "قرعه‌کشی صندوق",
    points: -50,
    time: "۱۴۰۲/۱۲/۲۷ ۱۴:۲۳",
    status: "approved",
  },
  {
    id: "3",
    type: "earn",
    description: "دعوت از دوستان",
    points: 100,
    time: "۱۴۰۲/۱۲/۲۶ ۱۱:۱۰",
    status: "cancelled",
  },
  {
    id: "4",
    type: "spend",
    description: "خرید اعتبار موبایل",
    points: -2000,
    time: "۱۴۰۲/۱۲/۲۵ ۰۹:۴۱",
    status: "error",
  },
  {
    id: "5",
    type: "earn",
    description: "فعال‌سازی سرمایه‌گذاری مجدد",
    points: 200,
    time: "۱۴۰۲/۱۲/۲۴ ۱۶:۱۸",
    status: "approved",
  },
  {
    id: "6",
    type: "earn",
    description: "سالگرد تولد سرمایه‌گذار",
    points: 100,
    time: "۱۴۰۲/۱۲/۲۰ ۰۸:۰۵",
    status: "pending",
  },
  {
    id: "7",
    type: "spend",
    description: "کد تخفیف دیجی‌پی",
    points: -300,
    time: "۱۴۰۲/۱۲/۱۸ ۱۳:۴۲",
    status: "approved",
  },
];

const COLS = [
  { key: "type", label: "نوع تراکنش", flex: 1.2 },
  { key: "description", label: "عنوان یا شرح تراکنش", flex: 1.6 },
  { key: "points", label: "تعداد امتیاز", flex: 0.9 },
  { key: "time", label: "زمان ثبت درخواست", flex: 1.2 },
  { key: "status", label: "وضعیت", flex: 1 },
] as const;

const TYPE_STYLE: Record<TxType, { label: string; bg: string; color: string; arrow: "down" | "up" }> = {
  earn: { label: "دریافت امتیاز", bg: "#E8F8EF", color: "#24B874", arrow: "down" },
  spend: { label: "مصرف امتیاز", bg: "#FDECEC", color: "#E53935", arrow: "up" },
};

const STATUS_STYLE: Record<TxStatus, { label: string; bg: string; color: string; border: string }> = {
  pending: { label: "در انتظار تایید", bg: "#FFF4EC", color: "#E57A2E", border: "#F5C9A8" },
  approved: { label: "تایید", bg: "#E8F8EF", color: "#24B874", border: "#A8E0C0" },
  cancelled: { label: "لغو شده", bg: "#FDECEC", color: "#E53935", border: "#F0B4B4" },
  error: { label: "خطا", bg: "#FDECEC", color: "#D32F2F", border: "#F0B4B4" },
};

function ArrowIcon({ direction, color }: { direction: "up" | "down"; color: string }) {
  return (
    <Box
      component="svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      sx={{ flexShrink: 0 }}
    >
      {direction === "down" ? (
        <path d="M6 2.5V9.5M6 9.5L3.5 7M6 9.5L8.5 7" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M6 9.5V2.5M6 2.5L3.5 5M6 2.5L8.5 5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </Box>
  );
}

function TypeBadge({ type }: { type: TxType }) {
  const style = TYPE_STYLE[type];
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.6,
        px: 1.1,
        py: 0.45,
        borderRadius: "999px",
        bgcolor: style.bg,
        color: style.color,
        fontSize: 12,
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      <ArrowIcon direction={style.arrow} color={style.color} />
      {style.label}
    </Box>
  );
}

function StatusBadge({ status }: { status: TxStatus }) {
  const style = STATUS_STYLE[status];
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        px: 1.25,
        py: 0.4,
        borderRadius: "999px",
        bgcolor: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
        fontSize: 12,
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      {style.label}
    </Box>
  );
}

export default function PointsReport() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: clubColors.bg, minHeight: "calc(100vh - 80px)", display: "flex", flexDirection: "column" }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 3 }, px: { xs: 1.5, sm: 2, md: 3 }, flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.5 }}>
          <Box
            onClick={() => navigate("/club")}
            sx={{
              width: 30,
              height: 30,
              borderRadius: "8px",
              bgcolor: clubColors.orangeSoft,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <RightArrowIcon />
          </Box>
          <Typography sx={{ fontSize: 20, fontWeight: 700, color: clubColors.text }}>
            گزارش امتیازات دریافتی و مصرفی
          </Typography>
        </Box>

        <Box sx={{ height: "1px", bgcolor: clubColors.border, mb: 2.5 }} />

        <Box
          sx={{
            bgcolor: "white",
            border: `1px solid ${clubColors.border}`,
            borderRadius: "16px",
            overflow: "hidden",
            p: { xs: 1.25, md: 2 },
          }}
        >
          <Box sx={{ overflowX: "auto" }}>
            <Box sx={{ minWidth: 720 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  px: 1.5,
                  py: 1.35,
                  bgcolor: "#F7F8FA",
                  borderRadius: "12px",
                  mb: 0.5,
                }}
              >
                {COLS.map((col) => (
                  <Typography
                    key={col.key}
                    sx={{
                      flex: col.flex,
                      fontSize: 13,
                      color: clubColors.mutedDark,
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {col.label}
                  </Typography>
                ))}
              </Box>

              {ROWS.map((row, i) => (
                <Box
                  key={row.id}
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    px: 1.5,
                    py: 1.5,
                    borderBottom: i < ROWS.length - 1 ? `1px solid ${clubColors.borderLight}` : "none",
                  }}
                >
                  <Box sx={{ flex: 1.2, display: "flex", justifyContent: "center" }}>
                    <TypeBadge type={row.type} />
                  </Box>
                  <Typography sx={{ flex: 1.6, fontSize: 13, color: clubColors.text, textAlign: "center" }}>
                    {row.description}
                  </Typography>
                  <Typography
                    sx={{
                      flex: 0.9,
                      fontSize: 14,
                      fontWeight: 700,
                      textAlign: "center",
                      color: row.points >= 0 ? "#24B874" : clubColors.text,
                      direction: "ltr",
                    }}
                  >
                    {row.points >= 0 ? `+ ${row.points.toLocaleString("fa-IR")}` : `- ${Math.abs(row.points).toLocaleString("fa-IR")}`}
                  </Typography>
                  <Typography sx={{ flex: 1.2, fontSize: 13, color: clubColors.text, textAlign: "center" }}>
                    {row.time}
                  </Typography>
                  <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <StatusBadge status={row.status} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ px: { xs: 0, md: 3 }, mt: 3 }}>
        <ClubFooter />
      </Container>
    </Box>
  );
}
