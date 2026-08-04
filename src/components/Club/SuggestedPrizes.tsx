import { Box, Typography } from "@mui/material";
import productEarbuds from "../../assets/club/product-earbuds.png";
import productPhone from "../../assets/club/product-phone.png";
import productVault from "../../assets/club/product-vault.png";
import productWatch from "../../assets/club/product-watch.png";
import { clubColors } from "../../theme";
import { ChevronLeftIcon } from "./icons";

export type SuggestedPrize = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  minPoints: number;
  chances: number;
  cost: number;
  image: string;
  days: number;
  hours: number;
};

export const SUGGESTED_PRIZES: SuggestedPrize[] = [
  {
    id: "vault",
    tag: "قرعه‌کشی",
    title: "۲۰۰ واحد صندوق",
    subtitle: "آتیه ملت",
    minPoints: 300,
    chances: 5,
    cost: 300,
    image: productVault,
    days: 12,
    hours: 12,
  },
  {
    id: "phone",
    tag: "قرعه‌کشی",
    title: "گوشی همراه",
    subtitle: "Galaxy S23 Ultra",
    minPoints: 300,
    chances: 1,
    cost: 10,
    image: productPhone,
    days: 12,
    hours: 12,
  },
  {
    id: "watch",
    tag: "قرعه‌کشی",
    title: "گوشی همراه",
    subtitle: "Apple Watch Series 10",
    minPoints: 300,
    chances: 1,
    cost: 10,
    image: productWatch,
    days: 12,
    hours: 12,
  },
  {
    id: "earbuds",
    tag: "قرعه‌کشی",
    title: "هندزفری بیسیم تورو",
    subtitle: "مدل T20 App Edition",
    minPoints: 300,
    chances: 1,
    cost: 10,
    image: productEarbuds,
    days: 12,
    hours: 12,
  },
];

function PrizeCard({ prize }: { prize: SuggestedPrize }) {
  return (
    <Box
      sx={{
        minWidth: { xs: 260, sm: 280 },
        flex: "1 1 260px",
        maxWidth: 340,
        bgcolor: clubColors.card,
        border: `1px solid ${clubColors.border}`,
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", gap: 1.5, p: 1.5, alignItems: "flex-start" }}>
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "10px",
            bgcolor: "#F7F7F7",
            flexShrink: 0,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={prize.image}
            alt={prize.title}
            sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center" }}
          />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: 12, color: clubColors.orange, fontWeight: 500, mb: 0.25 }}>
            {prize.tag}
          </Typography>
          <Typography sx={{ fontSize: 13, fontWeight: 700, color: clubColors.text, lineHeight: 1.4 }}>
            {prize.title}
          </Typography>
          <Typography sx={{ fontSize: 12, color: clubColors.mutedDark, lineHeight: 1.4 }}>
            {prize.subtitle}
          </Typography>
          <Typography sx={{ fontSize: 11, color: clubColors.muted, mt: 0.75 }}>
            حداقل امتیاز مورد نیاز: {prize.minPoints.toLocaleString("fa-IR")}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mx: 1.5,
          borderTop: `1px dashed ${clubColors.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 1.25,
        }}
      >
        <Typography sx={{ fontSize: 12, color: clubColors.text }}>
          {prize.chances.toLocaleString("fa-IR")} شانس قرعه‌کشی
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.25, cursor: "pointer" }}>
          <Typography component="span" sx={{ fontSize: 13, fontWeight: 700, color: clubColors.orange }}>
            {prize.cost.toLocaleString("fa-IR")}
          </Typography>
          <Typography component="span" sx={{ fontSize: 12, color: clubColors.text }}>
            امتیاز
          </Typography>
          <ChevronLeftIcon color={clubColors.orange} />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#FAFAFA",
          borderTop: `1px solid ${clubColors.borderLight}`,
          px: 1.5,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: 10, color: clubColors.muted, whiteSpace: "nowrap" }}>
          زمان باقی‌مانده تا قرعه‌کشی
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Box
            sx={{
              bgcolor: clubColors.orangeSoft,
              borderRadius: "6px",
              px: 0.75,
              py: 0.25,
              fontSize: 11,
              color: clubColors.text,
              fontWeight: 500,
            }}
          >
            {prize.days.toLocaleString("fa-IR")} روز
          </Box>
          <Typography sx={{ fontSize: 11, color: clubColors.muted }}>:</Typography>
          <Box
            sx={{
              bgcolor: clubColors.orangeSoft,
              borderRadius: "6px",
              px: 0.75,
              py: 0.25,
              fontSize: 11,
              color: clubColors.text,
              fontWeight: 500,
            }}
          >
            {prize.hours.toLocaleString("fa-IR")} ساعت
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function SuggestedPrizes() {
  return (
    <Box
      sx={{
        bgcolor: clubColors.card,
        borderRadius: "16px",
        border: `1px solid ${clubColors.border}`,
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: 15, fontWeight: 700, color: clubColors.text, mb: 1.25 }}>
        جوایز پیشنهادی
      </Typography>
      <Box sx={{ height: "1px", bgcolor: clubColors.borderLight, mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          overflowX: "auto",
          pb: 1,
          mx: -0.5,
          px: 0.5,
          "&::-webkit-scrollbar": { height: 4 },
          "&::-webkit-scrollbar-thumb": { bgcolor: clubColors.border, borderRadius: 4 },
        }}
      >
        {SUGGESTED_PRIZES.map((prize) => (
          <PrizeCard key={prize.id} prize={prize} />
        ))}
      </Box>

      <Typography
        sx={{
          mt: 1.5,
          fontSize: 12,
          color: clubColors.orange,
          textAlign: "center",
          lineHeight: 1.7,
        }}
      >
        اعضای باشگاه فراسود ملت این امکان را دارند تا امتیازات خود را به جوایز دلخواه تبدیل کنند.
      </Typography>
    </Box>
  );
}
