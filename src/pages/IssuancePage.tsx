import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Box, Card, Typography, Button, Chip, Tabs, Tab } from "@mui/material";
// @ts-ignore
import rtlPlugin from "stylis-plugin-rtl";
import svgPaths from "../imports/Group1261157301-1/svg-fyrp5ohfta";
import svgPathsDb from "../imports/dashboard/svg-d48flf12a8";
import {useNavigate} from "react-router-dom";
import IssuanceWizard from "../components/Issuance/IssuanceWizard";

const cacheRTL = createCache({
  key: "muirtl-ip",
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#f26822" },
    success: { main: "#1ac475" },
    error: { main: "#ea1017" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: "'IranSans', Tahoma, sans-serif" },
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: "none", fontFamily: "'IranSans', Tahoma, sans-serif" } },
    },
  },
});

const c = {
  orange: "#f26822",
  green: "#1ac475",
  red: "#ea1017",
  navy: "#1a1a2e",
  gray: "#6d6e71",
  lightGray: "#949699",
  border: "rgba(0,0,0,0.08)",
};


function NavPillIcon({ paths, isActive }: { paths: React.ReactNode; isActive?: boolean }) {
  return (
    <Box sx={{ width: 20, height: 20, position: "relative", flexShrink: 0 }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {paths}
      </svg>
    </Box>
  );
}

function HeaderNavBar() {
  const pills = [
    {
      label: "باشگاه مشتریان",
      icon: (
        <>
          <path d={svgPaths.p144eab80} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pfbafc80} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p1298f280} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p25ce9900} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p8291980} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </>
      ),
    },
    {
      label: "فرا بیمه",
      icon: (
        <>
          <path d={svgPaths.p31b37b00} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pea4ac80} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </>
      ),
    },
    {
      label: "سبدگردانی",
      icon: (
        <>
          <path d={svgPaths.p1e0be100} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p282fe80} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p26116400} stroke="#6D6E71" strokeWidth="1.5" />
          <path d="M8.13333 11.6667V14.625" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M11.9667 11.6667V14.625" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.pf0c7c00} stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
        </>
      ),
    },
    {
      label: "کارگزاری ملت",
      icon: (
        <>
          <path d="M5.73333 15.125V13.4" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M10 15.125V11.675" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M14.2667 15.125V9.94167" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p1a31d680} stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p295a2890} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e16c800} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </>
      ),
    },
  ];
  return (
    <Box sx={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "center", pb: "8px", pt: "4px", px: "8px", borderRadius: "9999px", flexShrink: 0, width: "687px" }}>
      {pills.map((pill) => (
        <Box key={pill.label} sx={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", px: "16px", py: "12px", borderRadius: "9999px", bgcolor: "white", boxShadow: "0px 3px 8px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.06)", flexShrink: 0, cursor: "pointer" }}>
          <Typography sx={{ fontSize: 14, color: c.gray, whiteSpace: "nowrap", lineHeight: "24px" }}>{pill.label}</Typography>
          <NavPillIcon paths={pill.icon} />
        </Box>
      ))}
      {/* Active: سرمایه‌گذاری */}
      <Box sx={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", px: "16px", py: "12px", borderRadius: "9999px", bgcolor: c.orange, boxShadow: "0px 4px 12px rgba(242,104,34,0.7)", flexShrink: 0, cursor: "pointer" }}>
        <Typography sx={{ fontSize: 14, color: "white", whiteSpace: "nowrap", lineHeight: "24px" }}>سرمایه‌گذاری</Typography>
        <Box sx={{ width: 24, height: 24, position: "relative" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <path d={svgPaths.p2c82bc00} fill="white" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

function HeaderLogo() {
  return (
    <Box sx={{ width: "91.196px", height: "36.912px", position: "relative", flexShrink: 0 }}>
      <Box sx={{ position: "absolute", top: "-10.84%", left: "-2.19%", right: "-2.19%", bottom: 0 }}>
        <svg width="95.1956" height="40.9117" viewBox="0 0 95.1956 40.9117" fill="none" style={{ display: "block", width: "100%", height: "100%" }}>
          <g filter="url(#ipLogoFilter)">
            <path d={svgPathsDb.p26659080} fill="#727272" />
            <path d={svgPathsDb.p1e4b600} fill="#727272" />
            <path d={svgPathsDb.p37abdd00} fill="#727272" />
            <path d={svgPathsDb.p137bfc00} fill="#727272" />
            <path d={svgPathsDb.p1bfa2a80} fill="#FBB042" />
            <path d={svgPathsDb.p14660000} fill="#F89521" />
            <path d={svgPathsDb.p3326b340} fill="#F26822" />
            <path d={svgPathsDb.p2a7cf700} fill="#EF4237" />
            <path d={svgPathsDb.p23c33500} fill="#5C5C5A" />
            <path d={svgPathsDb.pf220900} fill="#727272" />
            <path d={svgPathsDb.pda94f72} fill="#727272" />
            <path d={svgPathsDb.pfb7d700} fill="#727272" />
          </g>
          <defs>
            <filter id="ipLogoFilter" x="-1.09431e-10" y="0" width="95.1956" height="40.9117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="2" /><feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_453" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_453" result="shape" />
            </filter>
          </defs>
        </svg>
      </Box>
    </Box>
  );
}



// ─────────────────────────────────────────────────────────────────────────────
// Page breadcrumb bar
// ─────────────────────────────────────────────────────────────────────────────
function PageBreadcrumb({ onBack }: { onBack: () => void }) {
  return (
    <Box
      onClick={onBack}
      sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer", userSelect: "none", px: "30px", py: "10px",  bgcolor: "white" }}
    >
      <Box
        sx={{
          width: 28, height: 28, borderRadius: "7px", bgcolor: "#ffe7d9",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="#f26822" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>
      <Typography sx={{ fontSize: 15, fontWeight: 700, color: c.navy }}>صندوق سرمایه‌گذاری اوج ملت</Typography>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Floating label input (styled field border)
// ─────────────────────────────────────────────────────────────────────────────
import { styled } from "@mui/material/styles";

// ... (keep existing imports)

function FloatingInput({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (val: string) => void, placeholder?: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  return (
    <Box
      sx={{
        width: "100%", height: 56, position: "relative",
        border: `1px solid ${isFocused ? c.orange : "#d8d9da"}`,
        borderRadius: "10px", flexShrink: 0,
        transition: "border-color 0.2s",
        direction: "rtl"
      }}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFloating ? placeholder : ""}
        style={{
          width: "100%", height: "100%", border: "none", outline: "none",
          padding: "0 16px", borderRadius: "10px", fontSize: 16,
          backgroundColor: "transparent",
          textAlign: "right",
          direction: "rtl"
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: isFloating ? -10 : 16,
          left: 16,
          right: "auto",
          bgcolor: isFloating ? "white" : "transparent",
          px: isFloating ? "4px" : "0",
          fontSize: isFloating ? 13 : 16,
          color: isFloating ? c.orange : c.gray,
          lineHeight: "20px",
          transition: "all 0.2s",
          pointerEvents: "none"
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stat info row inside the green info boxes
// ─────────────────────────────────────────────────────────────────────────────
function InfoRow({ rightLabel, rightValue, rightUnit, leftLabel, leftValue, leftUnit, valueColor = "#1ac475" }: {
  rightLabel: string; rightValue: string; rightUnit: string;
  leftLabel: string; leftValue: string; leftUnit: string;
  valueColor?: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "12px", width: "100%" }}>
      {/* Right stat */}
      <Box sx={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Typography sx={{ fontSize: 12, color: valueColor, fontWeight: 500 }}>{rightUnit}</Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 700, color: valueColor }}>{rightValue}</Typography>
        </Box>
        <Typography sx={{ fontSize: 14, color: c.lightGray }}>{rightLabel}</Typography>
      </Box>
      {/* Divider */}
      <Box sx={{ width: "1px", height: 16, bgcolor: "#dedfe0", flexShrink: 0 }} />
      {/* Left stat */}
      <Box sx={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Typography sx={{ fontSize: 12, color: valueColor, fontWeight: 500 }}>{leftUnit}</Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 700, color: valueColor }}>{leftValue}</Typography>
        </Box>
        <Typography sx={{ fontSize: 14, color: c.lightGray }}>{leftLabel}</Typography>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Quick Buy Panel (صدور)
// ─────────────────────────────────────────────────────────────────────────────
// ... (keep imports)

function QuickBuyPanel() {
  const [activeTab, setActiveTab] = useState(0); // 0: issuance, 1: cancel
  const [amount, setAmount] = useState("");
  const [referralCode, setReferralCode] = useState("");

  return (
    <Card sx={{ width: 580, borderRadius: "15px", border: `1px solid ${c.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden", flexShrink: 0 }}>
      {/* Orange gradient bar */}
      <Box sx={{ height: 5, background: "linear-gradient(90deg, #f26822 0%, #f89521 31%, #f89521 64%, #fbb042 100%)" }} />

      <Box sx={{ p: "24px", display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
        {/* MUI Tabs */}
        <Tabs
          value={activeTab}
          onChange={(_e, v) => setActiveTab(v)}
          variant="fullWidth"
          sx={{
            width: 530,
            bgcolor: "#e8ebef",
            padding: "5px",
            borderRadius: "12px",
            "& .MuiTab-root": { fontSize: 16, color: c.gray, textTransform: "none" },
            "& .Mui-selected": { color: "#25282d !important" },
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab label="صدور" sx={{ borderRadius: "8px", bgcolor: activeTab === 0 ? "white" : "transparent" }} />
          <Tab label="ابطال" sx={{ borderRadius: "8px", bgcolor: activeTab === 1 ? "white" : "transparent" }} />
        </Tabs>

        {/* Form content */}
        <Box sx={{ width: 530, display: "flex", flexDirection: "column", gap: "32px", alignItems: "flex-end" }}>
          {activeTab === 0 ? (
            <IssuanceWizard />
          ) : (
            <>
              {/* Cancellation Form */}
              <FloatingInput label="تعداد واحد ابطال" value={amount} onChange={setAmount} />

              {/* Cancellation Stats Box */}
              <Box sx={{ width: "100%", bgcolor: "#fff9f6", borderRadius: "10px", border: "1px solid #fcefe7", p: "16px" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}><Typography sx={{color: c.gray}}>تعداد کل</Typography><Typography sx={{fontWeight: 700, color: c.red}}>10,121 واحد</Typography></Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}><Typography sx={{color: c.gray}}>تعداد وثیقه‌شده</Typography><Typography sx={{fontWeight: 700, color: c.red}}>0 واحد</Typography></Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}><Typography sx={{color: c.gray}}>تعداد در انتظار ابطال</Typography><Typography sx={{fontWeight: 700, color: c.red}}>0 واحد</Typography></Box>
                  <Box sx={{ borderTop: "1px dashed #dedfe0", pt: "8px", mt: "8px", display: "flex", justifyContent: "space-between" }}><Typography sx={{color: c.gray}}>تعداد قابل ابطال</Typography><Typography sx={{fontWeight: 700, color: c.red}}>10,121 واحد</Typography></Box>
              </Box>

              {/* Cancellation Info Box */}
              <Box sx={{ width: "100%", bgcolor: "#f9fafb", borderRadius: "10px", border: "1px solid #e9e9ea", p: "16px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <Box sx={{ width: 20, height: 20, borderRadius: "4px", bgcolor: "#a0a0a0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Typography sx={{ color: "white", fontSize: 16, fontWeight: "bold" }}>!</Typography>
                  </Box>
                <Box>
                    <Typography sx={{fontWeight: 700, mb: "4px"}}>زمان‌بندی پرداخت وجه</Typography>
                    <Typography sx={{fontSize: 12, color: c.gray}}>سرمایه‌گذار محترم پرداخت وجه درخواست‌های ابطال متناسب با زمان ثبت در همان روز یا حداکثر تا ساعت ۱۰ روز کاری بعد واریز می‌شود.</Typography>
                    <Button variant="outlined" sx={{ mt: "8px", borderRadius: "8px" }}>جدول زمان‌بندی</Button>
                </Box>
              </Box>

              {/* Cancellation Legal text & Submit button */}
              <Typography sx={{ fontSize: 16, color: "#25282d", textAlign: "left", width: 1 }}>
                ابطال به منزله تایید{" "}
                <span style={{ color: "#d48806", textDecoration: "underline", cursor: "pointer" }}>قوانین و مقررات</span>
                {" "}است.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  bgcolor: `${c.red} !important`,
                  borderRadius: "12px",
                  height: 56,
                  fontSize: 16,
                  color: "white",
                  boxShadow: "none",
                  "&:hover": { boxShadow: "none", bgcolor: c.red }
                }}
              >
                تایید و ادامه
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Fund detail right panel
// ─────────────────────────────────────────────────────────────────────────────

// Bar chart icon (inline SVG mimicking the design's status-up bars)
function BarChartIcon() {
  return (
    <Box sx={{ width: 48, height: 48, borderRadius: "12px", bgcolor: "#fff4ec", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 17V15" stroke="#f26822" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M12 17V13" stroke="#f26822" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M17 17V11" stroke="#f26822" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M2 22h20" stroke="#f26822" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M3 7l4-3 5 4 4-3 5 3" stroke="#f26822" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </Box>
  );
}

function FundHeaderCard() {
  const stats = [
    { label: "بازدهی سالانه موثر", value: "35+", unit: "%", color: "#1ac475" },
    { label: "بازدهی سالانه", value: "30.39+", unit: "%", color: "#1ac475" },
    { label: "هر واحد ابطال", value: "10,172", unit: "ریال", color: "#ea1017" },
    { label: "هر واحد صدور", value: "10,121", unit: "ریال", color: "#1ac475" },
  ];
  return (
    <Card sx={{ width: "100%", borderRadius: "16px", border: `1px solid ${c.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", p: "24px" }}>
      {/* Fund title row */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "24px" }}>
        <BarChartIcon />
        <Box sx={{ textAlign: "right" }}>
          <Typography sx={{ fontSize: 22, fontWeight: 700, color: c.navy }}>اوج ملت</Typography>
          <Typography sx={{ fontSize: 13, color: c.gray }}>صندوق سرمایه‌گذاری</Typography>
        </Box>
      </Box>
      {/* Stats grid */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {stats.map((s) => (
          <Box key={s.label} sx={{ bgcolor: "#f7f8fa", borderRadius: "8px", px: "16px", py: "20px" }}>
            <Box className={"mmm"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

              <Typography sx={{ fontSize: 14, color: c.lightGray }}>{s.label}</Typography>
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 700, color: s.color }}>{s.value}</Typography>
                    <Typography sx={{ fontSize: 14, color: s.color, fontWeight: 500 }}>{s.unit}</Typography>
                </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

// Toggle switch
function CompoundSwitch() {
  const [on, setOn] = useState(false);
  return (
    <Box
      onClick={() => setOn(!on)}
      sx={{
        width: 48, height: 28, borderRadius: "9999px",
        bgcolor: on ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)",
        border: "1px solid rgba(255,255,255,0.4)",
        position: "relative", cursor: "pointer", flexShrink: 0,
        transition: "background 0.2s",
      }}
    >
      <Box sx={{
        position: "absolute", top: "3px",
        left: on ? "4px" : "20px",
        width: 20, height: 20, borderRadius: "50%", bgcolor: "white",
        transition: "left 0.2s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </Box>
  );
}

function OrangeGradientCard() {
  return (
    <Box
      sx={{
        width: "100%", borderRadius: "16px", p: "24px",
        background: "linear-gradient(149deg, rgba(251,176,66,0.9) 0%, rgba(248,149,33,0.9) 50%, rgba(242,104,34,0.9) 100%)",
        display: "flex", flexDirection: "column", gap: "36px",
      }}
    >
      {/* Asset + Units */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          <Typography sx={{ fontSize: 18, color: "white" }}>مبلغ دارایی در صندوق:</Typography>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "baseline" }}>
                <Typography sx={{ fontSize: 20, fontWeight: 900, color: "white" }}>100,122,000</Typography>
                <Typography sx={{ fontSize: 14, color: "white", fontWeight: 500 }}>ریال</Typography>
            </Box>
        </Box>
        <Box sx={{ height: 1, bgcolor: "rgba(255,255,255,0.3)", width: "100%" }} />
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 16, color: "white" }}>تعداد واحد صندوق:</Typography>
            <Box sx={{ display: "flex", gap: "4px", alignItems: "baseline" }}>
                <Typography sx={{ fontSize: 18, fontWeight: 900, color: "white" }}>10,003</Typography>
                <Typography sx={{ fontSize: 14, color: "white", fontWeight: 500 }}>واحد</Typography>
            </Box>
        </Box>
      </Box>

      {/* Compound interest toggle */}
      <Box sx={{ bgcolor: "rgba(255,255,255,0.2)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.3)", px: "8px", py: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
        <CompoundSwitch />
          <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: 14, color: "white", fontWeight: 500, mb: "6px" }}>سود مرکب</Typography>
              <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>سرمایه گذاری مجدد سود تقسیمی</Typography>
          </Box>
      </Box>

      {/* Download certificate button */}
      <Box sx={{ width: "100%", bgcolor: "#fffbe6", borderRadius: "12px", height: 56, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer" }}>
        <Box sx={{ width: 20, height: 20, position: "relative" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <path d={svgPaths.p16a8df00} fill="#D48806" />
            <path d={svgPaths.p362e4dc0} fill="#D48806" />
            <path d={svgPaths.pcc7b170} fill="#D48806" />
            <path d={svgPaths.p13f9fb00} fill="#D48806" />
          </svg>
        </Box>
        <Typography sx={{ fontSize: 16, color: "#d48806" }}>دریافت گواهی</Typography>
      </Box>
    </Box>
  );
}

function FundInfoTable() {
  const rows = [
    { label: "مدیر صندوق", value: "تامین سرمایه بانک ملت" },
    { label: "نوع صندوق", value: "در اوراق بهادار با درآمد ثابت - صدور و ابطالی" },
    { label: "ضامن نقد شوندگی", value: "بانک ملت (سهامی عام)" },
    { label: "دوره تقسیم سود", value: "ماهانه" },
    { label: "متولی صندوق", value: "شرکت مشاور سرمایه گذاری سهم آشنا" },
    { label: "حسابرس", value: "موسسه حسابرسی فراز مشاور دیلمی" },
    { label: "تاریخ آغاز فعالیت", value: "1391/04/11" },
    { label: "حداکثر ارزش دارایی‌های صندوق", value: "393٬780 میلیارد ریال" },
  ];
  return (
    <Card sx={{ width: "100%", borderRadius: "16px", border: `1px solid ${c.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", p: "20px 24px" }}>
      <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#1d293d", textAlign: "left", mb: "12px" }}>اطلاعات صندوق</Typography>
      {rows.map((row, i) => (
        <Box
          key={row.label}
          sx={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            py: "10px",
            borderBottom: i < rows.length - 1 ? "1px solid #f1f5f9" : "none",
          }}
        >
          <Typography sx={{ fontSize: 14, color: c.gray }}>{row.label}</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#25282d" }}>{row.value}</Typography>
        </Box>
      ))}
    </Card>
  );
}

// Simple SVG line chart
function PriceChart() {
  const [activePeriod, setActivePeriod] = useState("1 سال");
  const periods = ["1 سال", "6 ماه", "3 ماه", "1 ماه"];

  // Sample data points for the line chart
  const points = [10000, 10050, 10100, 10080, 10150, 10200, 10180, 10250, 10300, 10280, 10350, 10400, 10380, 10450, 10500, 10480, 10550, 10600, 10580, 10650, 10700, 10680, 10750, 10800];
  const minVal = Math.min(...points);
  const maxVal = Math.max(...points);
  const w = 500;
  const h = 120;
  const pad = 10;

  const toX = (i: number) => pad + (i / (points.length - 1)) * (w - 2 * pad);
  const toY = (v: number) => h - pad - ((v - minVal) / (maxVal - minVal)) * (h - 2 * pad);

  const linePath = points.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const areaPath = `${linePath} L ${toX(points.length - 1)} ${h} L ${toX(0)} ${h} Z`;

  return (
    <Card sx={{ width: "100%", borderRadius: "16px", border: `1px solid ${c.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", p: "20px 24px" }}>
      {/* Header row */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "16px" }}>
          <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#1d293d" }}>نمودار قیمت صندوق</Typography>
          <Box sx={{ display: "flex", gap: "8px" }}>
          {periods.map((p) => (
            <Chip
              key={p}
              label={p}
              size="small"
              onClick={() => setActivePeriod(p)}
              sx={{
                bgcolor: activePeriod === p ? c.orange : "transparent",
                color: activePeriod === p ? "white" : c.gray,
                border: activePeriod === p ? "none" : "1px solid #d8d9da",
                cursor: "pointer",
                fontSize: 12,
                height: 28,
              }}
            />
          ))}
        </Box>

      </Box>

      {/* SVG chart */}
      <Box sx={{ width: "100%", height: 150, position: "relative" }}>
        <svg width="100%" height="150" viewBox={`0 0 ${w} ${h + 20}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f26822" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f26822" stopOpacity="0.01" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#chartGrad)" />
          <path d={linePath} stroke="#f26822" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>

      {/* Legend */}
      <Box sx={{ display: "flex", gap: "16px", justifyContent: "center", mt: "8px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Box sx={{ width: 12, height: 2, bgcolor: "#f26822", borderRadius: 1 }} />
          <Typography sx={{ fontSize: 11, color: c.gray }}>قیمت صدور</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Box sx={{ width: 12, height: 2, bgcolor: "#949699", borderRadius: 1 }} />
          <Typography sx={{ fontSize: 11, color: c.gray }}>قیمت ابطال</Typography>
        </Box>
      </Box>
    </Card>
  );
}

function RecentTransactions() {
  const txs = [
    { action: "خرید", amount: "445,000,000 ریال", status: "در انتظار تایید", color: c.green, bg: "#f0fdf4", iconBg: "#e8f8ef" },
    { action: "فروش", amount: "-172,000,000 ریال", status: "تکمیل شده", color: c.red, bg: "#fff2f0", iconBg: "#fdeae8" },
    { action: "خرید", amount: "445,000,000 ریال", status: "تکمیل شده", color: c.green, bg: "#f0fdf4", iconBg: "#e8f8ef" },
    { action: "خرید", amount: "445,000,000 ریال", status: "تکمیل شده", color: c.green, bg: "#f0fdf4", iconBg: "#e8f8ef" },
    { action: "فروش", amount: "-172,000,000 ریال", status: "تکمیل شده", color: c.red, bg: "#fff2f0", iconBg: "#fdeae8" },
  ];

  return (
    <Card sx={{ width: "100%", borderRadius: "16px", border: `1px solid ${c.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", p: "24px" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "24px" }}>
          <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#1d293d" }}>5 درخواست اخیر</Typography>
          <Chip label="گزارش درخواست‌ها ←" size="medium" sx={{ bgcolor: "#fff4ec", color: c.orange, fontSize: 13, height: 36, px: "8px" }} />
      </Box>
      {txs.map((tx, i) => (
        <Box
          key={i}
          sx={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            py: "16px",
            borderBottom: i < txs.length - 1 ? `1px solid #f8fafc` : "none",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: tx.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d={tx.action === "خرید" ? "M7 17l9-9M9 8h7v7" : "M7 7l9 9M9 16h7V9"} stroke={tx.color === c.green ? "#00a63e" : "#ea1017"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                <Typography sx={{ fontSize: 14, color: "#25282d", fontWeight: 700 }}>{tx.action} - 25 واحد</Typography>
                <Typography sx={{ fontSize: 12, color: c.lightGray }}>1403/10/15</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Chip label={tx.status} size="small" sx={{ bgcolor: tx.color === c.green ? "#e8f8ef" : "#fdeae8", color: tx.color, fontSize: 12, height: 28 }} />
            <Typography sx={{ fontSize: 14, color: tx.color, fontWeight: 700, textAlign: "left", width: 120 }}>{tx.amount}</Typography>
          </Box>
        </Box>
      ))}
    </Card>
  );
}

function Announcements() {
  const items = [
    { text: "افشای اطلاعات بااهمیت - (نقل و انتقال دارایی‌های ثابت شرکت - گروه الف) منتهی به سال مالی 1402/09/30", date: "1391/04/11" },
    { text: "افشای اطلاعات بااهمیت - (نقل و انتقال دارایی‌های ثابت شرکت - گروه الف) منتهی به سال مالی 1402/09/30", date: "1391/04/11" },
    { text: "افشای اطلاعات بااهمیت - (نقل و انتقال دارایی‌های ثابت شرکت - گروه الف) منتهی به سال مالی 1402/09/30", date: "1391/04/11" },
  ];
  return (
    <Card sx={{ width: "100%", borderRadius: "16px", border: `1px solid ${c.border}`, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", p: "20px" }}>
      <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#1d293d", textAlign: "right", mb: "20px" }}>اطلاعیه‌های صندوق</Typography>
      {items.map((item, i) => (
        <Box
          key={i}
          sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              py: "16px",
              justifyContent: "space-between",
              borderBottom: i < items.length - 1 ? "1px solid #f8fafc" : "none",
          }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Typography sx={{ fontSize: 14, color: "#25282d", textAlign: "right" }}>{item.text}</Typography>
                <Typography sx={{ fontSize: 12, color: c.lightGray }}>زمان انتشار : {item.date}</Typography>
            </Box>
          <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: "#fbeadd", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#f26822" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>

        </Box>
      ))}
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page root
// ─────────────────────────────────────────────────────────────────────────────
interface IssuancePageProps {
  onBack: () => void;
}

export default function IssuancePage({ onBack }: IssuancePageProps) {
    const navigate = useNavigate()
    onBack = () => {
        navigate('/')
    }
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <Box dir="rtl" sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
          {/* Header */}
          <Box sx={{ pb: 1 }}>
              <PageBreadcrumb onBack={onBack}/>
          </Box>

          {/* Page content */}
          <Box sx={{ px: "30px", pb: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Breadcrumb */}


            {/* Two-column layout */}
            <Box sx={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
              {/* Left: Quick buy panel */}


              {/* Right: Fund detail panels */}
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px", minWidth: 0 }}>
                <FundHeaderCard />
                <OrangeGradientCard />
                <FundInfoTable />
                <PriceChart />
                <RecentTransactions />
                <Announcements />
              </Box>

                <QuickBuyPanel />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
