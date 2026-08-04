import { Box, Button, Dialog, DialogContent, IconButton, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { clubColors } from "../../theme";
import { ChevronLeftIcon } from "./icons";

type EarnItem = {
  id: string;
  title: string;
  value: string;
  tone: "green" | "orange" | "red";
  pointsLabel: string;
  description: string;
};

const EARN_ITEMS: EarnItem[] = [
  {
    id: "1",
    title: "معرفی به دوستان",
    value: "+ ۲۰۰ امتیاز",
    tone: "green",
    pointsLabel: "دریافت ۲۰۰ امتیاز",
    description:
      "برای بهره‌مندی از این امتیاز، لینک‌های درج شده در قسمت «معرفی به دوستان» را برای دوستان و آشنایان خود ارسال نموده و بر مبنای ثبت‌نام و میزان سرمایه‌گذاری ایشان امتیاز کسب کنید.",
  },
  {
    id: "2",
    title: "استفاده از روش بانکداری باز",
    value: "+ ۱۰۰ امتیاز",
    tone: "green",
    pointsLabel: "دریافت ۱۰۰ امتیاز",
    description:
      "با فعال‌سازی واریز مستقیم از حساب بانک ملت (بانکداری باز)، می‌توانید این امتیاز را دریافت کنید. پس از انجام اولین تراکنش موفق، امتیاز به حساب شما افزوده می‌شود.",
  },
  {
    id: "3",
    title: "سالگرد تولد سرمایه‌گذار",
    value: "دریافت امتیاز",
    tone: "orange",
    pointsLabel: "دریافت امتیاز",
    description:
      "در روز تولد شما، امتیاز ویژه باشگاه مشتریان برای حسابتان فعال می‌شود. تاریخ تولد را در پروفایل تکمیل کنید تا در زمان مناسب امتیاز دریافت شود.",
  },
  {
    id: "4",
    title: "فعال‌سازی سرمایه‌گذاری مجدد",
    value: "+ ۵۰ امتیاز",
    tone: "green",
    pointsLabel: "دریافت ۵۰ امتیاز",
    description:
      "با فعال‌سازی گزینه سرمایه‌گذاری مجدد روی صندوق‌های خود، می‌توانید این امتیاز را دریافت کنید. پس از تایید فعال‌سازی، امتیاز به‌صورت خودکار ثبت می‌شود.",
  },
  {
    id: "5",
    title: "سالگرد ازدواج سرمایه‌گذار",
    value: "+ ۴۰۰ امتیاز",
    tone: "green",
    pointsLabel: "دریافت ۴۰۰ امتیاز",
    description:
      "در سالگرد ازدواج، امتیاز ویژه به حساب شما تعلق می‌گیرد. اطلاعات مربوطه را در پروفایل تکمیل کنید تا در موعد مقرر امتیاز دریافت شود.",
  },
  {
    id: "6",
    title: "داشتن حساب بانک ملت در سجام",
    value: "+ ۲۰ امتیاز",
    tone: "green",
    pointsLabel: "دریافت ۲۰ امتیاز",
    description:
      "در صورت انتخاب بانک ملت به‌عنوان بانک عامل در سجام، این امتیاز برای شما منظور می‌شود. پس از تایید اطلاعات سجام، امتیاز در گزارش امتیازات نمایش داده خواهد شد.",
  },
  {
    id: "7",
    title: "تکمیل پروفایل",
    value: "+ ۵ امتیاز",
    tone: "green",
    pointsLabel: "دریافت ۵ امتیاز",
    description:
      "با تکمیل اطلاعات حساب کاربری و پروفایل خود، می‌توانید این امتیاز را دریافت کنید. پس از ذخیره کامل اطلاعات، امتیاز به‌صورت خودکار اضافه می‌شود.",
  },
  {
    id: "8",
    title: "امتیاز مصرف‌شده",
    value: "- ۳۰۰۰ امتیاز",
    tone: "red",
    pointsLabel: "مصرف ۳۰۰۰ امتیاز",
    description:
      "این بخش مجموع امتیازهای مصرف‌شده شما در طرح‌ها و جوایز باشگاه را نشان می‌دهد. جزئیات مصرف را می‌توانید در گزارش امتیازات دریافتی و مصرفی مشاهده کنید.",
  },
];

const TONE_COLOR = {
  green: "#24B874",
  orange: clubColors.orange,
  red: "#E53935",
} as const;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function EarnPointsModal({ open, onClose }: Props) {
  const [selected, setSelected] = useState<EarnItem | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const isDetail = Boolean(selected);

  useEffect(() => {
    if (!open) {
      setSelected(null);
    }
  }, [open]);

  const handleClose = () => {
    setSelected(null);
    onClose();
  };

  const handleClaim = () => {
    handleClose();
    setToastOpen(true);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        fullWidth
        slotProps={{
          backdrop: {
            sx: { backdropFilter: "blur(2px)", bgcolor: "rgba(0,0,0,0.35)" },
          },
          paper: {
            sx: {
              width: isDetail ? { xs: "calc(100% - 32px)", sm: 480 } : { xs: "calc(100% - 32px)", sm: "90%", md: 860 },
              maxWidth: isDetail ? 480 : 860,
              borderRadius: "20px !important",
              border: `1px solid ${clubColors.border}`,
              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              overflow: "hidden",
              m: { xs: 1.5, sm: 2 },
              maxHeight: "calc(100% - 32px)",
              transition: "width 320ms cubic-bezier(0.4, 0, 0.2, 1), max-width 320ms cubic-bezier(0.4, 0, 0.2, 1)",
            },
          },
        }}
      >
        <DialogContent
          sx={{
            p: isDetail ? { xs: 2.5, md: 3 } : { xs: 2.5, md: 3.5 },
            pb: isDetail ? { xs: 2.5, md: 3 } : { xs: 3.5, md: 4.5 },
            direction: "rtl",
            position: "relative",
            transition: "padding 280ms ease",
          }}
        >
          {/* Header: title centered, close on right */}
          <Box
            sx={{
              direction: "ltr",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              mb: 1.75,
              position: "relative",
              minHeight: 32,
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                textAlign: "center",
                fontSize: 16,
                fontWeight: 700,
                color: clubColors.text,
                direction: "rtl",
                pointerEvents: "none",
              }}
            >
              {isDetail ? "دریافت امتیاز" : "کسب امتیاز"}
            </Typography>

            {isDetail ? (
              <Box
                component="button"
                onClick={() => setSelected(null)}
                sx={{
                  border: `1px solid ${clubColors.border}`,
                  bgcolor: "transparent",
                  borderRadius: "8px",
                  px: 1,
                  py: 0.4,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 12,
                  color: clubColors.mutedDark,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.35,
                  zIndex: 1,
                }}
              >
                بازگشت
                <ChevronLeftIcon size={12} color={clubColors.mutedDark} />
              </Box>
            ) : (
              <IconButton
                onClick={handleClose}
                size="small"
                sx={{
                  width: 28,
                  height: 28,
                  border: `1px solid ${clubColors.border}`,
                  color: clubColors.mutedDark,
                  fontSize: 16,
                  p: 0,
                  zIndex: 1,
                }}
              >
                ×
              </IconButton>
            )}
          </Box>

          <Box sx={{ height: "1px", bgcolor: clubColors.border, mb: isDetail ? 2.5 : 2.25 }} />

          {isDetail && selected ? (
            <Box
              key={selected.id}
              sx={{
                textAlign: "left",
                direction: "ltr",
                animation: "earnDetailIn 280ms ease",
                "@keyframes earnDetailIn": {
                  from: { opacity: 0, transform: "translateY(8px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: clubColors.orange,
                  mb: 1,
                  lineHeight: 1.5,
                  direction: "rtl",
                  textAlign: "left",
                }}
              >
                {selected.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: TONE_COLOR[selected.tone],
                  mb: 2,
                  lineHeight: 1.5,
                  direction: "rtl",
                  textAlign: "left",
                }}
              >
                {selected.pointsLabel}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#2A2A2A",
                  lineHeight: 2.1,
                  mb: 3.5,
                  direction: "rtl",
                  textAlign: "left",
                }}
              >
                {selected.description}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleClaim}
                  sx={{
                    minWidth: { xs: "100%", sm: 280 },
                    bgcolor: "#2A2F38",
                    color: "white",
                    borderRadius: "14px",
                    py: 1.15,
                    px: 4,
                    fontSize: 15,
                    fontWeight: 700,
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#1C2129", boxShadow: "none" },
                  }}
                >
                  دریافت امتیاز
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
                gap: 1.75,
                direction: "ltr",
                "& > *": { direction: "rtl" },
                animation: "earnListIn 280ms ease",
                "@keyframes earnListIn": {
                  from: { opacity: 0, transform: "translateY(6px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              {EARN_ITEMS.map((item) => (
                <Box
                  key={item.id}
                  onClick={() => setSelected(item)}
                  sx={{
                    bgcolor: "#FAFBFC",
                    border: `1px solid ${clubColors.border}`,
                    borderRadius: "14px",
                    px: 1.5,
                    py: 1.5,
                    minHeight: 96,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 1.5,
                    cursor: "pointer",
                    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
                    "&:hover": {
                      borderColor: clubColors.orangeMuted,
                      boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: clubColors.text,
                      lineHeight: 1.55,
                      textAlign: "left",
                      direction: "rtl",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 0.35,
                      direction: "ltr",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: TONE_COLOR[item.tone],
                        lineHeight: 1.3,
                        whiteSpace: "nowrap",
                        direction: "rtl",
                      }}
                    >
                      {item.value}
                    </Typography>
                    <ChevronLeftIcon size={13} color={TONE_COLOR[item.tone]} />
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Snackbar
        open={toastOpen}
        autoHideDuration={2800}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Box
          sx={{
            minWidth: { xs: 260, sm: 320 },
            maxWidth: 420,
            px: 1.75,
            py: 1.2,
            borderRadius: "12px",
            bgcolor: "#1F242D",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontFamily: '"IranSans", Tahoma, sans-serif',
          }}
        >
          <Box sx={{ width: 20, height: 20, borderRadius: "999px", bgcolor: "#24B874", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 700, lineHeight: 1, color: "white" }}>✓</Typography>
          </Box>
          <Typography sx={{ fontSize: 13.5, fontWeight: 500, lineHeight: 1.6 }}>امتیاز با موفقیت دریافت شد.</Typography>
        </Box>
      </Snackbar>
    </>
  );
}
