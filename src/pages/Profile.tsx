import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SyncIcon from "@mui/icons-material/Sync";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";
import { useRef } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import Avatar from "../assets/avatar.png";

// ─── Shared Section Box ───────────────────────────────────────────────────────
interface SectionBoxProps {
  title: string;
  children: React.ReactNode;
  minHeight?: number | string;
}
const COLORS = {
  headerBar: "#F2F3F7",
  pageBg: "#eef0f3",
  cardBg: "#ffffff",
  softBorder: "#e6e8eb",
  fieldBg: "#f3f4f6",
  textPrimary: "#232830",
  textSecondary: "#7c828b",
  gradientStart: "#f5a340",
  gradientEnd: "#e8712a",
  chipBg: "#ffffff",
  logoutBg: "#fdeceb",
  logoutText: "#e25c53",
};

function SectionBox({ title, children, minHeight }: SectionBoxProps) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        background: "#fff",
        minHeight,
      }}
    >
      <Box
        sx={{
          background: "#F2F3F7",
          px: 2,
          py: 1.7,
        }}
      >
        <Typography
          sx={{
            color: COLORS.textPrimary,
            fontSize: "0.82rem",
            fontWeight: 600,
            textAlign: "left",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>{children}</Box>
    </Box>
  );
}

// ─── Info Row ────────────────────────────────────────────────────────────────
interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 0.6,
        borderBottom: "1px solid #f0f0f0",
        "&:last-child": { borderBottom: "none" },
        direction: "rtl",
      }}
    >
      <Typography sx={{ fontSize: "0.78rem", color: "#555", fontWeight: 500 }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: "0.78rem", color: "#333", direction: "ltr" }}>
        {value}
      </Typography>
    </Box>
  );
}

// ─── Security Menu Item ───────────────────────────────────────────────────────
interface MenuItemRowProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function MenuItemRow({ icon, title, subtitle }: MenuItemRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        py: 1,
        borderBottom: "1px solid #f0f0f0",
        "&:last-child": { borderBottom: "none" },
        cursor: "pointer",
        "&:hover": { background: "#fafafa" },
        borderRadius: "6px",
        px: 0.5,
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#bbb",
          fontSize: "0.7rem",
          flexShrink: 0,
        }}
      >
        ‹
      </Box>

      <Box sx={{ flexGrow: 1, textAlign: "left" }}>
        <Typography
          sx={{ fontSize: "0.78rem", fontWeight: 600, color: "#333" }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "0.7rem", color: "#999" }}>
          {subtitle}
        </Typography>
      </Box>
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
    </Box>
  );
}

// ─── Bank Card ────────────────────────────────────────────────────────────────
interface BankCardProps {
  bankName: string;
  accountType: string;
  accountNumber: string;
  cardNumber: string;
  logoColor: string;
  logoText: string;
}

function BankCard({
  bankName,
  accountType,
  accountNumber,
  cardNumber,
  logoColor,
  logoText,
}: BankCardProps) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        background: "#fff",
        direction: "rtl",
      }}
    >
      {/* Logo header */}
      <Box
        sx={{
          height: 70,
          background: logoColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: 1,
          }}
        >
          {logoText}
        </Typography>
      </Box>
      {/* Bank info */}
      <Box sx={{ p: 1.5 }}>
        <Typography
          sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#333", mb: 0.5 }}
        >
          {bankName}
        </Typography>
        <Typography sx={{ fontSize: "0.7rem", color: "#888", mb: 1 }}>
          {accountType}
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography sx={{ fontSize: "0.68rem", color: "#666", mb: 0.3 }}>
          شماره حساب
        </Typography>
        <Typography
          sx={{
            fontSize: "0.72rem",
            color: "#333",
            direction: "ltr",
            textAlign: "left",
            mb: 0.5,
          }}
        >
          {accountNumber}
        </Typography>
        <Typography sx={{ fontSize: "0.68rem", color: "#666", mb: 0.3 }}>
          شماره کارت
        </Typography>
        <Typography
          sx={{
            fontSize: "0.72rem",
            color: "#333",
            direction: "ltr",
            textAlign: "left",
          }}
        >
          {cardNumber}
        </Typography>
      </Box>
    </Box>
  );
}

// ─── Profile Card ─────────────────────────────────────────────────────────────
function ProfileCard() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        background:
          "linear-gradient(160deg, #f5a623 0%, #f7941d 50%, #e8821a 100%)",
        position: "relative",
        minHeight: 340,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top decorative circles */}
      <Box
        sx={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      {/* Profile photo area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 3,
          pb: 0,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Photo container */}
        <Box sx={{ position: "relative", mb: 0 }}>
          <Box
            sx={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(255,255,255,0.9)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              background: "#ddd",
            }}
          >
            {/* Placeholder avatar */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #e0a060 0%, #c07840 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Avatar} />
            </Box>
          </Box>
          {/* Camera button */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <IconButton
            onClick={() => fileInputRef.current?.click()}
            size="small"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 26,
              height: 26,
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              "&:hover": { background: "#f5f5f5" },
              p: 0,
            }}
          >
            <CameraAltIcon sx={{ fontSize: 14, color: "#555" }} />
          </IconButton>
        </Box>

        {/* Concave wave separator */}
        <Box
          sx={{
            width: "100%",
            mt: 2,
            position: "relative",
            height: 32,
            overflow: "hidden",
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 300 32"
            preserveAspectRatio="none"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <path
              d="M0,32 L0,12 Q75,32 150,20 Q225,8 300,20 L300,32 Z"
              fill="#fff"
            />
          </Box>
        </Box>
      </Box>

      {/* White info section */}
      <Box
        sx={{
          background: "#fff",
          flexGrow: 1,
          px: 2,
          pt: 1,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "1rem",
            color: "#222",
            mb: 0.3,
            direction: "rtl",
          }}
        >
          حدیثه عبدی‌پور
        </Typography>
        <Typography
          sx={{
            fontSize: "0.78rem",
            color: "#f5a623",
            fontWeight: 600,
            mb: 1.5,
            direction: "ltr",
          }}
        >
          ۰۹۱۲۱۲۳۴۵۲۵
        </Typography>

        <Typography
          sx={{
            fontSize: "0.72rem",
            color: "#888",
            textAlign: "center",
            mb: 0.5,
            direction: "rtl",
            lineHeight: 1.7,
          }}
        >
          همگام سازی اطلاعات سجام
        </Typography>
        <Typography
          sx={{
            fontSize: "0.68rem",
            color: "#aaa",
            textAlign: "center",
            mb: 2,
            direction: "rtl",
            lineHeight: 1.6,
          }}
        >
          ویرایش اطلاعات درموجودی از طریق سامانه امکان‌پذیر است. لذا تغییر
          اطلاعات خود را از طریق بروزرسانی و تکمیل اطلاعات به روش بروزرسانی
          اقدام نمایید.
        </Typography>

        <Button
          variant="contained"
          endIcon={<SyncIcon sx={{ mx: 1 }} />}
          fullWidth
          sx={{
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "0.75rem",
            py: 0.8,
            mb: 1,
            direction: "rtl",
            "&:hover": { background: "#444" },
          }}
        >
          بروزرسانی اطلاعات
        </Button>
        <Button
          variant="outlined"
          endIcon={<LogoutIcon sx={{ mx: 1 }} />}
          fullWidth
          sx={{
            borderColor: "#f5a623",
            color: "#f5a623",
            borderRadius: "8px",
            fontSize: "0.75rem",
            py: 0.8,
            direction: "rtl",
            "&:hover": { borderColor: "#e8821a", color: "#e8821a" },
          }}
        >
          خروج
        </Button>
      </Box>
    </Box>
  );
}

function InfoRow2({ label, value, alignValueLeft }: any) {
  return (
    <Grid container sx={{ py: 1.1 }}>
      <Grid size={6}>
        <Typography variant="body2" sx={{ color: COLORS.textSecondary }}>
          {label}
        </Typography>
      </Grid>
      <Grid size={6}>
        <Typography
          variant="body2"
          sx={{
            color: COLORS.textPrimary,
            fontWeight: 500,
            textAlign: alignValueLeft ? "left" : "right",
            direction: alignValueLeft ? "ltr" : "inherit",
          }}
        >
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

function HeaderPanel({ title, children, sx }: any) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(20,20,30,0.06)",
        bgcolor: COLORS.cardBg,
        ...sx,
      }}
    >
      <Box
        sx={{
          bgcolor: COLORS.headerBar,
          px: 2.5,
          py: 1.4,
        }}
      >
        <Typography sx={{ color: "#292525", fontWeight: 600, fontSize: 15 }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ px: 2.5, py: 1 }}>{children}</Box>
    </Box>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProfileSettings() {
  const bankAccounts: BankCardProps[] = [
    {
      bankName: "بانک ملت",
      accountType: "بانک ملت",
      accountNumber: "۱۲۳۲۱۲۳۲۱۲",
      cardNumber: "۶۱۰۴-۱۲۳۴-۱۲۳۴-۱۲۳۴",
      logoColor: "#d32f2f",
      logoText: "ملت",
    },
    {
      bankName: "بانک ملت",
      accountType: "بانک ملت",
      accountNumber: "۱۲۳۲۱۲۳۲۱۲",
      cardNumber: "۶۱۰۴-۱۲۳۴-۱۲۳۴-۱۲۳۵",
      logoColor: "#1565c0",
      logoText: "ملی",
    },
    {
      bankName: "بانک ملت",
      accountType: "بانک ملت",
      accountNumber: "۱۲۳۲۱۲۳۲۱۲",
      cardNumber: "۶۱۰۴-۱۲۳۴-۱۲۳۴-۱۲۳۶",
      logoColor: "#2e7d32",
      logoText: "صادرات",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 1.5, md: 3 },
      }}
    >
      <Grid container spacing={2}>
        {/* ستون اول */}
        <Grid size={4}>
          <Grid container sx={{ direction: "column" }} spacing={2}>
            <Grid>
              <ProfileCard />
            </Grid>

            <Grid
              sx={{
                mt: 2.5,
                borderRadius: 3,
                boxShadow: "0 2px 10px rgba(20,20,30,0.06)",
                p: 2.5,
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1 }}>
                همگام سازی اطلاعات سجام
              </Typography>
              <Typography sx={{ fontSize: 12.5, lineHeight: 2, mb: 2 }}>
                ویرایش اطلاعات تنها از طریق سایت سجام امکان‌پذیر است. لذا
                اطلاعاتی که در سایت سجام تغییر دادید، فرآیند به‌روزرسانی را
                انجام دهید. در غیر این صورت نیازی به به‌روزرسانی نیست.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                startIcon={<CachedIcon />}
                sx={{
                  bgcolor: "#1c1f24",
                  borderRadius: 2,
                  py: 1,
                  "&:hover": { bgcolor: "#000" },
                }}
              >
                به‌روزرسانی اطلاعات
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* ستون دوم */}
        <Grid size={8}>
          <Grid container spacing={2} sx={{ height: "100vh" }}>
            <Grid size={8}>
              <HeaderPanel title="اطلاعات کاربری">
                <InfoRow2 label="کد ملی" value="0016054891" />
                <InfoRow2 label="تاریخ تولد" value="۳ تیر ۱۳۶۹" />
                <InfoRow2 label="شماره شناسنامه" value="0016054891" />
                <InfoRow2 label="نام پدر" value="علی" />

                <Box
                  sx={{ borderTop: `1px solid ${COLORS.softBorder}`, my: 1.5 }}
                />

                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 13,
                    color: COLORS.textPrimary,
                    mb: 1,
                  }}
                >
                  اطلاعات تماس
                </Typography>

                <InfoRow2 label="تلفن همراه" value="09129227449" />
                <InfoRow2 label="تلفن ثابت" value="02127313372" />
                <InfoRow2
                  label="آدرس"
                  value="استان تهران- شهر تهران- بخش مرکزی- کلاهدوز، خیابان نعمتی پلاک ۳۳"
                />
                <InfoRow2 label="کدپستی" value="1605423678" />
              </HeaderPanel>
            </Grid>

            <Grid size={4}>
              {/* Security box */}
              <SectionBox title="امنیت و حریم خصوصی" minHeight={140}>
                <MenuItemRow
                  icon={<LockIcon sx={{ fontSize: 18 }} />}
                  title="تغییر کلمه عبور سامانه"
                  subtitle="بیشتر از ۱ هفته پیش"
                />
                <MenuItemRow
                  icon={<LoginIcon sx={{ fontSize: 18 }} />}
                  title="گزارش ورود و خروج به سامانه"
                  subtitle="امروز ۱۳:۲۳ — ۱۴۰۳/۰۳/۱۰"
                />
              </SectionBox>

              {/* Support box */}
              <Box sx={{ mt: 2 }}>
                <SectionBox title="پشتیبانی">
                  <MenuItemRow
                    icon={<SupportAgentIcon sx={{ fontSize: 18 }} />}
                    title="مددکار متقابل"
                    subtitle="پشتیبانی از طریق مددکار ۲۴ ساعته"
                  />
                  <MenuItemRow
                    icon={<PhoneIcon sx={{ fontSize: 18 }} />}
                    title="تماس تلفنی"
                    subtitle="۲۴ ساعته — ۷ روز هفته"
                  />
                </SectionBox>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{width: "100%"}}>
          <Box>
            <Grid size={12}>
              <SectionBox title="حساب‌های بانکی">
                <Grid container spacing={2}>
                  {bankAccounts.map((bank, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                      <BankCard {...bank} />
                    </Grid>
                  ))}
                </Grid>
              </SectionBox>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
