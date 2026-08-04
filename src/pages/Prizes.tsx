import { Box, Button, Container, Dialog, DialogContent, IconButton, Snackbar, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClubFooter from "../components/Club/ClubFooter";
import { RightArrowIcon, ChevronLeftIcon, LotteryIcon, PercentIcon, RocketIcon, SearchIcon } from "../components/Club/icons";
import { clubColors } from "../theme";
import productEarbuds from "../assets/club/product-earbuds.png";
import productPhone from "../assets/club/product-phone.png";
import productVault from "../assets/club/product-vault.png";
import productWatch from "../assets/club/product-watch.png";

type ModalItem = {
  title: string;
  subtitle: string;
  image: string;
  brand?: string;
  brandColor?: string;
  percent?: string;
  oldPrice?: string;
  pointsLabel: string;
  productTitle: string;
  productDescription: string;
  usageText: string;
  rules: string[];
};

type DiscountItem = {
  id: string;
  title: string;
  subtitle: string;
  points: number;
  validity: string;
  badgeTitle: string;
  badgeColor: string;
  image: string;
  percent?: string;
  disabled?: boolean;
};

type PrizeItem = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  chances: number;
  cost: number;
  image: string;
  days: number;
  hours: number;
};

const DISCOUNTS: DiscountItem[] = [
  {
    id: "digipay",
    title: "کد تخفیف ۳۵۰ هزار تومانی دیجی‌پی",
    subtitle: "بدون محدودیت سبد خرید",
    points: 100000,
    validity: "مدت اعتبار: بدون انقضا",
    badgeTitle: "دیجی‌پی",
    badgeColor: "#2D72D9",
    image: productPhone,
  },
  {
    id: "digikala",
    title: "کد تخفیف ۳۵۰ هزار تومانی دیجی‌کالا",
    subtitle: "بدون محدودیت سبد خرید",
    points: 100000,
    validity: "مدت اعتبار: بدون انقضا",
    badgeTitle: "دیجی‌کالا",
    badgeColor: "#E44759",
    image: productWatch,
  },
  {
    id: "snapp",
    title: "کد تخفیف ۳۵۰ هزار تومانی اسنپ",
    subtitle: "بدون محدودیت سبد خرید",
    points: 250000,
    validity: "مدت اعتبار: بدون انقضا",
    badgeTitle: "Snapp!",
    badgeColor: "#24B874",
    image: productEarbuds,
    percent: "۵۰٪",
  },
  {
    id: "expired",
    title: "۵۰٪ تخفیف خرید اشتراک",
    subtitle: "ویژه کاربران جدید",
    points: 0,
    validity: "مدت اعتبار: منقضی شده",
    badgeTitle: "Snapp!",
    badgeColor: "#CFCFCF",
    image: productVault,
    disabled: true,
  },
];

const LOTTERY_ITEMS: PrizeItem[] = [
  {
    id: "earbuds",
    tag: "قرعه‌کشی",
    title: "هندزفری بلوتوثی وان پلاس",
    subtitle: "T20 App Edition",
    chances: 1,
    cost: 10,
    image: productEarbuds,
    days: 12,
    hours: 12,
  },
  {
    id: "phone",
    tag: "قرعه‌کشی",
    title: "گوشی همراه",
    subtitle: "Galaxy S23 Ultra",
    chances: 1,
    cost: 10,
    image: productPhone,
    days: 12,
    hours: 12,
  },
  {
    id: "watch",
    tag: "قرعه‌کشی",
    title: "ساعت هوشمند",
    subtitle: "Apple Watch Series 10",
    chances: 1,
    cost: 10,
    image: productWatch,
    days: 12,
    hours: 12,
  },
  {
    id: "fund",
    tag: "قرعه‌کشی",
    title: "۲۰۰ واحد صندوق",
    subtitle: "اوج ملت",
    chances: 5,
    cost: 300,
    image: productVault,
    days: 12,
    hours: 12,
  },
];

const CREDIT_ITEMS: PrizeItem[] = [
  {
    id: "credit-fund",
    tag: "خرید اعتبار",
    title: "اعتبار صندوق اوج",
    subtitle: "۲۰۰ واحد صندوق",
    chances: 1,
    cost: 300,
    image: productVault,
    days: 12,
    hours: 12,
  },
  {
    id: "credit-watch",
    tag: "خرید اعتبار",
    title: "اعتبار کالای دیجیتال",
    subtitle: "Apple Watch Series 10",
    chances: 1,
    cost: 120,
    image: productWatch,
    days: 12,
    hours: 12,
  },
  {
    id: "credit-phone",
    tag: "خرید اعتبار",
    title: "اعتبار موبایل",
    subtitle: "Galaxy S23 Ultra",
    chances: 1,
    cost: 180,
    image: productPhone,
    days: 12,
    hours: 12,
  },
  {
    id: "credit-audio",
    tag: "خرید اعتبار",
    title: "اعتبار لوازم جانبی",
    subtitle: "T20 App Edition",
    chances: 1,
    cost: 80,
    image: productEarbuds,
    days: 12,
    hours: 12,
  },
];

function buildModalFromPrize(item: PrizeItem): ModalItem {
  return {
    title: item.title,
    subtitle: item.subtitle.startsWith("مدل") ? item.subtitle : `مدل ${item.subtitle}`,
    image: item.image,
    brand: item.tag,
    brandColor: clubColors.orange,
    pointsLabel: `${item.cost.toLocaleString("fa-IR")} امتیاز`,
    productTitle: `${item.title} (${item.subtitle})`,
    productDescription:
      "این هندزفری با صدای شفاف، طراحی ارگونومیک و باتری بادوام، تجربه‌ای لذت‌بخش از موسیقی و مکالمه را برای شما فراهم می‌کند. اتصال سریع بلوتوث، کیفیت ساخت بالا و مناسب استفاده روزمره از ویژگی‌های اصلی آن است.",
    usageText:
      "پس از دریافت جایزه، کد تخفیف مربوطه در حساب کاربری شما در اپلیکیشن اسنپ فعال خواهد شد و می‌توانید هنگام خرید از آن استفاده کنید.",
    rules: [
      "برای بهره‌مندی کامل از سرویس‌ها، تکمیل اطلاعات حساب کاربری الزامی است.",
      "مسئولیت نگهداری اطلاعات حساب کاربری و رمز عبور بر عهده کاربر است.",
      "پس از ثبت درخواست، امکان بازگشت امتیاز وجود ندارد.",
    ],
  };
}

function buildModalFromDiscount(item: DiscountItem): ModalItem {
  return {
    title: item.title,
    subtitle: item.subtitle,
    image: item.image,
    brand: item.badgeTitle,
    brandColor: item.badgeColor,
    percent: item.percent,
    oldPrice: item.percent ? "۵۰۰,۰۰۰,۰۰۰" : undefined,
    pointsLabel: item.disabled ? "منقضی شده" : `${item.points.toLocaleString("fa-IR")} امتیاز`,
    productTitle: item.title,
    productDescription:
      "کد تخفیف انتخابی پس از تایید برای شما فعال می‌شود. می‌توانید در سرویس مربوطه با رعایت شرایط درج‌شده از آن استفاده کنید و از مزایای باشگاه مشتریان بهره‌مند شوید.",
    usageText:
      "پس از دریافت جایزه، کد تخفیف مربوطه در حساب کاربری شما فعال خواهد شد و می‌توانید هنگام خرید از آن استفاده کنید.",
    rules: [
      "هر کد تخفیف تنها در بازه زمانی و سرویس مشخص‌شده معتبر است.",
      "کد تخفیف قابل انتقال به حساب کاربری دیگر نیست.",
      "پس از دریافت، امکان لغو یا بازگشت امتیاز وجود ندارد.",
    ],
  };
}

function SectionCard({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <Box sx={{ bgcolor: "white", border: `1px solid ${clubColors.border}`, borderRadius: "16px", p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 0.8, mb: 1.5 }}>
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: "8px",
            bgcolor: clubColors.orangeSoft,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 1,
          }}
        >
          {icon}
        </Box>
        <Typography sx={{ fontSize: 20, fontWeight: 700, color: clubColors.text }}>{title}</Typography>
      </Box>
      {children}
    </Box>
  );
}

function DiscountCard({ item, onOpen }: { item: DiscountItem; onOpen: (item: ModalItem) => void }) {
  return (
    <Box
      onClick={() => onOpen(buildModalFromDiscount(item))}
      sx={{
        border: `1px solid ${clubColors.border}`,
        borderRadius: "12px",
        overflow: "hidden",
        bgcolor: "white",
        opacity: item.disabled ? 0.45 : 1,
        cursor: "pointer",
      }}
    >
      <Box sx={{ p: 1.25, display: "flex", gap: 1.25 }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: 13, color: clubColors.text, mb: 0.4, fontWeight: 700, lineHeight: 1.5 }}>{item.title}</Typography>
          <Typography sx={{ fontSize: 11.5, color: clubColors.mutedDark }}>{item.subtitle}</Typography>
        </Box>
        <Box
          sx={{
            width: 74,
            borderRadius: "10px",
            bgcolor: "#F8F8F8",
            overflow: "hidden",
            border: `1px solid ${clubColors.borderLight}`,
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          <Box sx={{ py: 0.45, bgcolor: item.badgeColor, color: "white", fontSize: 11, fontWeight: 700 }}>{item.badgeTitle}</Box>
          <Box sx={{ py: 0.7 }}>
            <Typography sx={{ fontSize: 18, color: item.badgeColor, fontWeight: 700 }}>۲۰۰</Typography>
            <Typography sx={{ fontSize: 10, color: clubColors.muted }}>دویست هزار تومان</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: 1.25,
          py: 0.85,
          borderTop: `1px solid ${clubColors.borderLight}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 11.5, color: clubColors.mutedDark }}>{item.validity}</Typography>
        {!item.disabled && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <Typography sx={{ fontSize: 12, color: clubColors.text }}>امتیاز</Typography>
            <Typography sx={{ fontSize: 12.5, color: clubColors.orange, fontWeight: 700 }}>{item.points.toLocaleString("fa-IR")}</Typography>
            <ChevronLeftIcon color={clubColors.muted} size={13} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

function PrizeListCard({ item, onOpen }: { item: PrizeItem; onOpen: (item: ModalItem) => void }) {
  return (
    <Box
      onClick={() => onOpen(buildModalFromPrize(item))}
      sx={{ border: `1px solid ${clubColors.border}`, borderRadius: "12px", overflow: "hidden", bgcolor: "white", cursor: "pointer" }}
    >
      <Box sx={{ p: 1.25, display: "flex", gap: 1, alignItems: "center" }}>
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 0.4,
          }}
        >
          <Typography sx={{ fontSize: 12, color: clubColors.orange, fontWeight: 400, lineHeight: 1.35 }}>
            {item.tag}
          </Typography>
          <Typography sx={{ fontSize: 13, fontWeight: 400, color: clubColors.text, lineHeight: 1.4 }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 400, color: clubColors.mutedDark, lineHeight: 1.4 }}>
            {item.subtitle}
          </Typography>
        </Box>
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
            src={item.image}
            alt={item.title}
            sx={{ width: "100%", height: "100%", objectFit: "contain", p: 0.5 }}
          />
        </Box>
      </Box>

      <Box sx={{ mx: 1.25, borderTop: `1px dashed ${clubColors.border}`, py: 1.1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
          <ChevronLeftIcon size={13} color={clubColors.muted} />
          <Typography sx={{ fontSize: 13, fontWeight: 700, color: clubColors.orange, paddingLeft: 1, paddingRight: 1 }}>{item.cost.toLocaleString("fa-IR")}</Typography>
          <Typography sx={{ fontSize: 12, color: clubColors.text }}>امتیاز</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
          <Typography sx={{ fontSize: 12, color: clubColors.text }}> شانس قرعه کشی</Typography>
          <Typography sx={{ fontSize: 12, color: clubColors.text }}>{item.chances.toLocaleString("fa-IR")}</Typography>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#FAFAFA", borderTop: `1px solid ${clubColors.borderLight}`, px: 1.25, py: 0.9, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, bgcolor: clubColors.orangeSoft, borderRadius: "999px", px: 1, py: 0.5 }}>
          <Typography sx={{ fontSize: 11.5, color: clubColors.text }}>{item.days.toLocaleString("fa-IR")} روز</Typography>
          <Typography sx={{ fontSize: 11, color: clubColors.muted }}>:</Typography>
          <Typography sx={{ fontSize: 11.5, color: clubColors.text }}>{item.hours.toLocaleString("fa-IR")} ساعت</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography sx={{ fontSize: 10.5, color: clubColors.muted }}>زمان باقی‌مانده تا قرعه‌کشی</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function PrizesGridSection({
  title,
  icon,
  items,
  onOpen,
}: {
  title: string;
  icon: ReactNode;
  items: PrizeItem[];
  onOpen: (item: ModalItem) => void;
}) {
  return (
    <SectionCard title={title} icon={icon}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
          gap: 1.25,
          direction: "ltr",
          "& > *": { direction: "rtl" },
        }}
      >
        {items.map((item) => (
          <PrizeListCard key={`${title}-${item.id}`} item={item} onOpen={onOpen} />
        ))}
      </Box>
    </SectionCard>
  );
}

export default function Prizes() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<ModalItem | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <Box sx={{ bgcolor: clubColors.bg, minHeight: "calc(100vh - 80px)" }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 3 }, px: { xs: 1.5, sm: 2, md: 3 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.25, gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Box
              onClick={() => navigate("/club")}
              sx={{ width: 30, height: 30, borderRadius: "8px", bgcolor: clubColors.orangeSoft, display: "grid", placeItems: "center", flexShrink: 0, cursor: "pointer" }}
            >
              <RightArrowIcon />
            </Box>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: clubColors.text }}>جوایز و هدایا</Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: 220 },
              borderRadius: "999px",
              border: `1px solid ${clubColors.border}`,
              px: 1.5,
              py: 0.65,
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "white",
            }}
          >
            <SearchIcon />
            <Typography sx={{ fontSize: 12, color: clubColors.muted }}>جستجو</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <SectionCard title="کد تخفیف" icon={<PercentIcon />}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
                gap: 1.25,
                direction: "ltr",
                "& > *": { direction: "rtl" },
              }}
            >
              {DISCOUNTS.map((item) => (
                <DiscountCard key={item.id} item={item} onOpen={setSelectedItem} />
              ))}
            </Box>
          </SectionCard>

          <PrizesGridSection title="قرعه‌کشی" icon={<LotteryIcon />} items={LOTTERY_ITEMS} onOpen={setSelectedItem} />
          <PrizesGridSection title="خرید اعتبار" icon={<RocketIcon />} items={CREDIT_ITEMS} onOpen={setSelectedItem} />
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ px: { xs: 0, md: 3 } }}>
        <ClubFooter />
      </Container>

      <Dialog
        open={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        maxWidth="md"
        fullWidth
        slotProps={{
          backdrop: {
            sx: { backdropFilter: "blur(2px)", bgcolor: "rgba(0,0,0,0.35)" },
          },
          paper: {
            sx: {
              borderRadius: "24px !important",
              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              overflow: "hidden",
              m: { xs: 1.5, sm: 2 },
              maxHeight: "calc(100% - 32px)",
            },
          },
        }}
      >
        {selectedItem && (
          <DialogContent sx={{ p: { xs: 3, md: 4.5 }, direction: "rtl", position: "relative" }}>
            {/* Close alone at top corner */}
            <Box sx={{ position: "absolute", top: 15, right: 15 }}>
              <IconButton
                onClick={() => setSelectedItem(null)}
                size="small"
                sx={{
                  width: 24,
                  height: 24,
                  border: `1px solid ${clubColors.border}`,
                  color: clubColors.mutedDark,
                  fontSize: 16,
                  p: 0,
                }}
              >
                ×
              </IconButton>
            </Box>

            {/* Three header items aligned: brand | title | points (swapped sides) */}
            <Box
              sx={{
                direction: "ltr",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "minmax(120px,auto) 1fr minmax(140px,auto)" },
                alignItems: "center",
                columnGap: 2.5,
                rowGap: 1.5,
                mb: 2.5,
              }}
            >
              {/* Physical LEFT: brand / product image */}
              <Box sx={{ justifySelf: { xs: "center", sm: "start" } }}>
                <Box
                  sx={{
                    minWidth: 100,
                    height: 64,
                    px: 1.75,
                    borderRadius: "16px",
                    border: `1px solid ${clubColors.border}`,
                    bgcolor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={selectedItem.image}
                    alt={selectedItem.brand || selectedItem.title}
                    sx={{ width: 40, height: 40, objectFit: "contain" }}
                  />
                  {selectedItem.brand && (
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: selectedItem.brandColor || clubColors.text,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {selectedItem.brand}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Physical CENTER: title + subtitle */}
              <Box sx={{ textAlign: "center", minWidth: 0, direction: "rtl" }}>
                <Typography sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.5 }}>
                  {selectedItem.title}
                </Typography>
                <Typography sx={{ fontSize: 13, color: "#8A8A8A", mt: 0.5, lineHeight: 1.5 }}>
                  {selectedItem.subtitle}
                </Typography>
              </Box>

              {/* Physical RIGHT: percent + points */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", sm: "flex-end" },
                  gap: 1,
                  justifySelf: { xs: "center", sm: "end" },
                }}
              >
                {(selectedItem.percent || selectedItem.oldPrice) && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, direction: "ltr" }}>
                    {selectedItem.oldPrice && (
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "#B0B0B0",
                          textDecoration: "line-through",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {selectedItem.oldPrice}
                      </Typography>
                    )}
                    {selectedItem.percent && (
                      <Box
                        sx={{
                          px: 1.1,
                          py: 0.25,
                          borderRadius: "999px",
                          bgcolor: "#24B874",
                          color: "white",
                          fontSize: 12,
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        {selectedItem.percent}
                      </Box>
                    )}
                  </Box>
                )}

                <Box
                  sx={{
                    px: 1.5,
                    py: 0.55,
                    borderRadius: "10px",
                    border: `1.5px solid ${clubColors.orange}`,
                    color: clubColors.orange,
                    fontWeight: 700,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                    direction: "rtl",
                  }}
                >
                  {selectedItem.pointsLabel}
                </Box>
              </Box>
            </Box>


            <Box sx={{ textAlign: "left", mb: 2.5 }}>
              <Typography sx={{ fontSize: 16, fontWeight: 700, color: clubColors.orange, mb: 1.25, lineHeight: 1.6 }}>
                {selectedItem.productTitle}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#2A2A2A", lineHeight: 2.1 }}>
                {selectedItem.productDescription}
              </Typography>
            </Box>

            <Box sx={{ height: "1px", bgcolor: clubColors.border, mb: 2.75 }} />

            <Box sx={{ textAlign: "left", mb: 2.25 }}>
              <Typography sx={{ fontSize: 15, fontWeight: 700, color: clubColors.orange, mb: 1 }}>
                نحوه استفاده از جایزه
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#2A2A2A", lineHeight: 2.1 }}>
                {selectedItem.usageText}
              </Typography>
            </Box>

            <Box sx={{ textAlign: "left", mb: 3 }}>
              <Typography sx={{ fontSize: 15, fontWeight: 700, color: clubColors.orange, mb: 1 }}>
                قوانین استفاده
              </Typography>
              <Box
                component="ul"
                sx={{
                  m: 0,
                  p: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.75,
                  direction: "ltr",
                }}
              >
                {selectedItem.rules.map((rule) => (
                  <Box
                    key={rule}
                    component="li"
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "#2A2A2A",
                        mt: 1.1,
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ fontSize: 14, color: "#2A2A2A", lineHeight: 2 }}>{rule}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  setSelectedItem(null);
                  setToastOpen(true);
                }}
                sx={{
                  maxWidth: 420,
                  bgcolor: "#2A2F38",
                  color: "white",
                  borderRadius: "12px",
                  py: 1.15,
                  fontSize: 16,
                  fontWeight: 700,
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#1C2129", boxShadow: "none" },
                }}
              >
                دریافت جایزه
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>

      <Snackbar open={toastOpen} autoHideDuration={2800} onClose={() => setToastOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
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
          <Typography sx={{ fontSize: 13.5, fontWeight: 500, lineHeight: 1.6 }}>با موفقیت جایزه دریافت شد.</Typography>
        </Box>
      </Snackbar>
    </Box>
  );
}
