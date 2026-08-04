import { Box, Button, Card, Chip, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";

import imgDownload181 from "../imports/dashboard/1.png";
// import img1 from "../imports/dashboard/3f5b81f1960918261f69ce332427702efb1e70de.png";
// import imgMakeNumber35 from "../imports/dashboard/176b1d6be6ba811c4dd8ea22334ef693c6c6470a.png";
// import imgImage538 from "../imports/dashboard/783a834e0a453ccdae6f402d9741293dd058bd6c.png";
// import imgMakeNumber36 from "../imports/dashboard/3e73286fee88c342cb02c7cc0f652f724243eebb.png";
import FundCard2 from "./FundCard2";

import ojMellat from "../imports/dashboard/ojMellat.png"
import andokhteh from "../imports/dashboard/andokhteh.png"
import zarin from "../imports/dashboard/zarin.png"

const c = {
  orange: "#f26822",
  orangeLight: "#fff2eb",
  green: "#1ac475",
  greenLight: "#edfff7",
  red: "#ea1017",
  redLight: "#fff2f0",
  navy: "#1a1a2e",
  gray: "#6d6e71",
  lightGray: "#949699",
  bgGray: "#fafafa",
  border: "rgba(0,0,0,0.08)",
  yellow: "#ffb700",
  pastelGreen: "#85e0a3",
  pastelRed: "#fa8c82",
};


const fundCards: FundCardData[] = [
  {
    logo: ojMellat,
    tags: ["درآمد ثابت", "ETF"],
    stats: [
      { label: "بازدهی سالانه (تقریبی)", value: "+38٪" },
      { label: "بازدهی ماهانه (تقریبی)", value: "+2.8٪" },
      { label: "هر واحد ابطال", value: "1,100,000" },
      { label: "هر واحد صدور", value: "1,100,000" },
    ],
    buttonVariant: "info",
  },
  {
    logo: andokhteh,
    tags: ["درآمد ثابت", "ETF"],
    stats: [
      { label: "بازدهی سالانه (تقریبی)", value: "+38٪" },
      { label: "بازدهی ماهانه (تقریبی)", value: "+2.8٪" },
      { label: "هر واحد ابطال", value: "1,100,000" },
      { label: "هر واحد صدور", value: "1,100,000" },
    ],
    buttonVariant: "info",
  },
  {
    logo: zarin,
    tags: ["درآمد ثابت", "ETF"],
    stats: [
      { label: "بازدهی سالانه (تقریبی)", value: "+38٪" },
      { label: "بازدهی ماهانه (تقریبی)", value: "+2.8٪" },
      { label: "هر واحد ابطال", value: "1,100,000" },
      { label: "هر واحد صدور", value: "1,100,000" },
    ],
    buttonVariant: "info",
  },
    {
    logo: ojMellat,
    tags: ["درآمد ثابت", "ETF"],
    stats: [
      { label: "بازدهی سالانه (تقریبی)", value: "+38٪" },
      { label: "بازدهی ماهانه (تقریبی)", value: "+2.8٪" },
      { label: "هر واحد ابطال", value: "1,100,000" },
      { label: "هر واحد صدور", value: "1,100,000" },
    ],
    buttonVariant: "info",
  },
  {
    logo: andokhteh,
    tags: ["درآمد ثابت", "ETF"],
    stats: [
      { label: "بازدهی سالانه (تقریبی)", value: "+38٪" },
      { label: "بازدهی ماهانه (تقریبی)", value: "+2.8٪" },
      { label: "هر واحد ابطال", value: "1,100,000" },
      { label: "هر واحد صدور", value: "1,100,000" },
    ],
    buttonVariant: "info",
  },
  {
    logo: zarin,
    tags: ["درآمد ثابت", "ETF"],
    stats: [
      { label: "بازدهی سالانه (تقریبی)", value: "+38٪" },
      { label: "بازدهی ماهانه (تقریبی)", value: "+2.8٪" },
      { label: "هر واحد ابطال", value: "1,100,000" },
      { label: "هر واحد صدور", value: "1,100,000" },
    ],
    buttonVariant: "info",
  },

];


const quickActions = [
  { title: "کارگزاری بانک ملت", subtitle: "واریز و برداشت مانده وجه نقد کارگزاری...." },
  { title: "کارت هدیه سازمانی", subtitle: "برداشت 50,000,000 میلیون تومان در لحظه" },
  { title: "گردش حساب", subtitle: "واریز سود ماهانه ، واریز و برداشت ها ..." },
  { title: "گزارش‌ درخواست ها", subtitle: "تاریخچه درخواست‌‌های صدور و ابطال ..." },
];

const transactions = [
  { amount: "۴۴۵٬۰۰۰٬۰۰۰ ریال", amountColor: "#00a63e", iconBg: "#f0fdf4", isPlus: true, action: "صدور - 25 واحد", date: "۱۴۰۳/۱۰/۱۵" },
  { amount: "‎−۱۷۲٬۰۰۰٬۰۰۰ ریال", amountColor: "#fb2c36", iconBg: "#fef2f2", isPlus: false, action: "ابطال - 10 واحد", date: "۱۴۰۳/۱۰/۱۵" },
  { amount: "۴۴۵٬۰۰۰٬۰۰۰ ریال", amountColor: "#00a63e", iconBg: "#f0fdf4", isPlus: true, action: "صدور - 25 واحد", date: "۱۴۰۳/۱۰/۱۵" },
  { amount: "۴۴۵٬۰۰۰٬۰۰۰ ریال", amountColor: "#00a63e", iconBg: "#f0fdf4", isPlus: true, action: "صدور - 25 واحد", date: "۱۴۰۳/۱۰/۱۵" },
  { amount: "‎−۱۷۲٬۰۰۰٬۰۰۰ ریال", amountColor: "#fb2c36", iconBg: "#fef2f2", isPlus: false, action: "ابطال - 10 واحد", date: "۱۴۰۳/۱۰/۱۵" },
];

function OrangeBar({ height = 6 }: { height?: number }) {
  return (
    <Box
      sx={{
        height,
        width: "100%",
        background: "linear-gradient(90deg, #f26822 0%, #f89521 31%, #f89521 64%, #fbb042 100%)",
        flexShrink: 0,
      }}
    />
  );
}

function HeroSection() {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0 0 50px rgba(0,0,0,0.08)",
        overflow: "hidden",
        border: `1px solid ${c.border}`,
      }}
    >
      <OrangeBar />

      {/* Value row */}
      <Box sx={{ px: 3, pt: 2, pb: 0.5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "8px",
              bgcolor: c.orangeLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ExpandLessIcon sx={{ color: c.orange, fontSize: 16 }} />
          </Box>
          <Typography sx={{ fontSize: 14, color: c.lightGray }}>ارزش کل دارایی‌ها (ریال)</Typography>

        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontSize: 16, color: "#16a34a" }}>
            {`سود امروز (7.25%) 24,000,000 +`}
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: c.navy }}>
            ۲,۴۵۰,۰۰۰,۰۰۰
          </Typography>

        </Box>
        
      </Box>

      {/* Pie + table */}
      <Box sx={{ px: 3, pb: 4, pt: 1, display: "flex", gap: 6, alignItems: "center" }}>
        <Box sx={{ flex: 1 }}>
          {/* Column headers */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pb: 1,
              borderBottom: "1px solid #eaeaea",
              mb: 0.5,
            }}
          >
            {["صندوق", "درصد دارایی", "تعداد واحد", "ارزش دارایی (ریال)"].map((h) => (
              <Typography key={h} sx={{ fontSize: 12, color: "#9599a7" }}>{h}</Typography>
            ))}
          </Box>
          {/* Rows */}
          {[
            { name: "اندوخته ملت", dot: c.yellow, pct: "۳۴٪", units: "۱۲۳,۴۵۶", value: "۲۵۴,۴۵۶,۰۰۰,۰۰۰" },
            { name: "اوج ملت", dot: c.pastelGreen, pct: "۳۴٪", units: "۱۲۳,۴۵۶", value: "۲۵۴,۴۵۶,۰۰۰,۰۰۰" },
            { name: "آتیه ملت", dot: c.pastelRed, pct: "۳۴٪", units: "۱۲۳,۴۵۶", value: "۲۵۴,۴۵۶,۰۰۰,۰۰۰" },
            { name: "مسدود شده", dot: c.red, pct: "۳۴٪", units: "۱۲۳,۴۵۶", value: "۲۵۴,۴۵۶,۰۰۰,۰۰۰" },
          ].map((row) => (
            <Box key={row.name} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 160 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: row.dot, flexShrink: 0 }} />
                <Typography sx={{ fontSize: 12, color: "#26272e" }}>{row.name}</Typography>
              </Box>
              <Typography sx={{ fontSize: 14, fontWeight: 700, color: row.dot, minWidth: 60, textAlign: "center" }}>
                {row.pct}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#26272e" }}>{row.units}</Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#26272e" }}>{row.value}</Typography>
            </Box>
          ))}
        </Box>
        <PortfolioPie />
      </Box>
    </Card>
  );
}

function PortfolioPie() {
  const segments = [
    { pct: 34, color: c.yellow },
    { pct: 34, color: c.pastelGreen },
    { pct: 16, color: c.pastelRed },
    { pct: 16, color: c.red },
  ];
  const r = 50;
  const cx = 66;
  const cy = 66;
  let cum = 0;

  const arc = (start: number, end: number) => {
    const rad = (pct: number) => ((pct * 3.6 - 90) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(rad(start));
    const y1 = cy + r * Math.sin(rad(start));
    const x2 = cx + r * Math.cos(rad(end));
    const y2 = cy + r * Math.sin(rad(end));
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${end - start > 50 ? 1 : 0} 1 ${x2} ${y2} Z`;
  };

  return (
    <Box sx={{ position: "relative", width: 132, height: 132, flexShrink: 0 }}>
      <svg width="132" height="132" viewBox="0 0 132 132">
        {segments.map((seg, i) => {
          const s = cum;
          cum += seg.pct;
          return <path key={i} d={arc(s, cum)} fill={seg.color} />;
        })}
        <circle cx={cx} cy={cy} r={40} fill="white" />
        <circle cx={cx} cy={cy} r={52.4} fill="none" stroke="#9599A7" strokeWidth="0.8" />
      </svg>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: 11, color: "#747474", lineHeight: 1.5 }}>ترکیب دارایی</Typography>
        <Typography sx={{ fontSize: 11, color: "#747474", lineHeight: 1.5 }}>در 4 صندوق</Typography>
      </Box>
    </Box>
  );
}

function NavChevron() {
  return (
    <Box
      sx={{
        width: 32,
        height: 32,
        borderRadius: 9999,
        bgcolor: c.orangeLight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <ChevronRightIcon sx={{ color: c.orange, fontSize: 16 }} />
    </Box>
  );
}

interface StatCellProps {
  label: string;
  value: string;
  bg?: string;
  valueColor?: string;
}

interface FundCardData {
  logo: React.ReactNode;
  tags: string[];
  stats: StatCellProps[];
  buttonVariant: "info" | "buy-sell" | "buy-only";
}
function StatCell({ label, value, bg = c.bgGray, valueColor = "#25282d" }: StatCellProps) {
  return (
    <Box sx={{ bgcolor: bg, borderRadius: "10px", p: "7px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 0.5, flex: 1 }}>
      <Typography sx={{ fontSize: 9, color: c.lightGray }}>{label}</Typography>
      <Typography sx={{ fontSize: 11, fontWeight: 700, color: valueColor }}>{value}</Typography>
    </Box>
  );
}

function FundCard({ logo, tags, stats, buttonVariant, onIssuance }: FundCardData & { onIssuance?: () => void }) {
  return (
    // <FundCard2 />

        <Box sx={{ position: "relative", flexShrink: 0, width: 316 }}>
      {/* Gold top area */}
      <Box
        sx={{
          width: "100%",
          height: 118,
          borderRadius: "22px",
          background: "radial-gradient(ellipse at 20% 50%, #fff 26%, #efdbb7 100%)",
        }}
      />
      {/* White card */}
      <Card
        sx={{
          mt: "-70px",
          borderRadius: "22px",
          boxShadow: "0 1px 1.4px rgba(0,0,0,0.1)",
          border: `1px solid ${c.border}`,
          pt: "15px",
          pb: "19px",
          px: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Header row: tags + logo */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: "#f2f3f5",
                  border: "0.75px solid #dbe0e7",
                  height: 18,
                  fontSize: 9,
                  "& .MuiChip-label": { px: "6px" },
                }}
              />
            ))}
          </Box>
          <Box sx={{ height: 24, display: "flex", alignItems: "center" }}>{logo}</Box>
        </Box>

        {/* Stats grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7.5px 10px", width: "100%" }}>
          {stats.map((s, i) => <StatCell key={i} {...s} />)}
        </Box>

        {/* Buttons */}
        {buttonVariant === "info" && (
          <Button fullWidth variant="outlined" sx={{ borderColor: "#d8d9da", color: "#1b1e22", borderRadius: "7px", fontSize: 12.65, py: 1 }}>
            اطلاعات بیشتر
          </Button>
        )}
        {buttonVariant === "buy-sell" && (
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <Button fullWidth sx={{ bgcolor: c.redLight, color: c.red, borderRadius: "8px", fontSize: 13, py: 1, "&:hover": { bgcolor: "#ffe4e1" } }}>
              ابطال
            </Button>
            <Button fullWidth variant="contained" onClick={onIssuance} sx={{ bgcolor: c.green, color: "white", borderRadius: "8px", fontSize: 13, py: 1, "&:hover": { bgcolor: "#17b068" } }}>
              صدور
            </Button>
          </Box>
        )}
        {buttonVariant === "buy-only" && (
          <Button fullWidth variant="contained" onClick={onIssuance} sx={{ bgcolor: c.green, color: "white", borderRadius: "7px", fontSize: 12.65, py: 1, "&:hover": { bgcolor: "#17b068" } }}>
            صدور
          </Button>
        )}
      </Card>
    </Box>

  );
}



function MyFundsSection({ onIssuance }: { onIssuance?: () => void }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: 520,
        borderRadius: "15px",
        border: `1px solid ${c.border}`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2.5, py: 1.5, borderBottom: `1px solid ${c.border}`, flexShrink: 0 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 700, color: c.navy }}>
          صندوق‌های سرمایه‌گذاری
        </Typography>
        
        <Box sx={{ display: "flex", gap: 0.75 }}>
          <NavChevron />
          <Box
            sx={{
              width: 32, height: 32, borderRadius: 9999, bgcolor: c.orangeLight,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            }}
          >
            <ChevronLeftIcon sx={{ color: c.orange, fontSize: 16 }} />
          </Box>
        </Box>
      </Box>

      {/* Scrollable cards */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          px: 2,
          pb: 2,
          pt: 1,
          overflowX: "auto",
          flex: 1,
          alignItems: "flex-end",
          "&::-webkit-scrollbar": { height: 6 },
          "&::-webkit-scrollbar-thumb": { bgcolor: "#e0e0e0", borderRadius: 3 },
        }}
      >
        {fundCards.map((card, i) => (
          // <FundCard key={i} {...card} onIssuance={onIssuance} />
          <FundCard2 {...card} />
        ))}
      </Box>
    </Card>
  );
}

function QuickActionsRow() {
  return (
    <Box sx={{ display: "flex", gap: 2.5, width: "100%" }}>
      {quickActions.map((qa) => (
        <Card
          key={qa.title}
          sx={{
            flex: 1,
            height: 78,
            borderRadius: "15px",
            border: `1px solid ${c.border}`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            px: 2.5,
            py: 1.875,
            cursor: "pointer",
            "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
          }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 700, color: c.navy }}>{qa.title}</Typography>
          <Typography sx={{ fontSize: 12, color: "#6b7280" }}>{qa.subtitle}</Typography>
        </Card>
      ))}
    </Box>
  );
}

function TransactionsSection() {
  return (
    <Card
      sx={{
        flex: 1,
        height: 317,
        borderRadius: "15px",
        border: `1px solid ${c.border}`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ px: 2.5, py: 2, borderBottom: `1px solid ${c.border}`, display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 700, color: c.navy }}>تراکنش در انتظار</Typography>
      </Box>
      <Box sx={{ overflowY: "auto", flex: 1 }}>
        {transactions.map((tx, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 2.5,
              py: 1.5,
              borderBottom: "1px solid #f8fafc",
            }}
          >
            <Typography sx={{ fontSize: 12, fontWeight: 700, color: tx.amountColor, minWidth: 130 }}>
              {tx.amount}
            </Typography>
            <Chip
              label="در انتظار تایید"
              size="small"
              sx={{
                bgcolor: "#fffbe6",
                border: "0.72px solid #ffe58f",
                color: "#d48806",
                fontSize: 8.65,
                height: 17,
                "& .MuiChip-label": { px: "5.77px" },
              }}
            />
            <Box sx={{ flex: 1 }} />
            <Box sx={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: 12, fontWeight: 500, color: "#1d293d" }}>{tx.action}</Typography>
              <Typography sx={{ fontSize: 12, color: "#90a1b9" }}>{tx.date}</Typography>
            </Box>
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "8px",
                bgcolor: tx.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {tx.isPlus
                ? <NorthEastIcon sx={{ fontSize: 14, color: "#00A63E" }} />
                : <SouthEastIcon sx={{ fontSize: 14, color: "#FB2C36" }} />
              }
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

function ProfitCalculator() {
  const tabs = ["خزانه", "آتیه", "اندوخته", "اوج"];
  const activeTab = 3;

  return (
    <Card
      sx={{
        width: 468,
        height: 317,
        borderRadius: "15px",
        border: `1px solid ${c.border}`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <OrangeBar height={5} />
      <Box sx={{ px: 2.5, py: 2, borderBottom: `1px solid ${c.border}`, display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 700, color: c.navy }}>محاسبه‌گر سود</Typography>
      </Box>

      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
        {/* Segment control */}
        <Box sx={{ bgcolor: "#e8ebef", borderRadius: "10px", p: "4px", display: "flex", gap: 0.5 }}>
          {tabs.map((tab, i) => (
            <Box
              key={tab}
              sx={{
                flex: 1,
                borderRadius: "6px",
                py: 1,
                textAlign: "center",
                bgcolor: i === activeTab ? "white" : "transparent",
                boxShadow: i === activeTab ? "0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.04)" : "none",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: 14, color: i === activeTab ? c.navy : c.gray }}>{tab}</Typography>
            </Box>
          ))}
        </Box>

        {/* Number inputs */}
        <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
          {[
            { label: "مدت سرمایه‌گذاری (ماه)", value: "12" },
            { label: "مبلغ سرمایه‌گذاری (ریال)", value: "5000000" },
          ].map((inp) => (
            <Box key={inp.label} sx={{ width: 215 }}>
              <Typography sx={{ fontSize: 11, color: "#6b7280", mb: 0.75, textAlign: "right" }}>
                {inp.label}
              </Typography>
              <Box
                sx={{
                  bgcolor: "#f9fafb",
                  borderRadius: "10px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  px: 1.5,
                  py: 1.25,
                }}
              >
                <Typography sx={{ fontSize: 13, fontWeight: 700, color: c.navy, textAlign: "right" }}>
                  {inp.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Result */}
        <Box
          sx={{
            bgcolor: "#fffbf3",
            border: "0.5px solid #ff8037",
            borderRadius: "15px",
            px: 1.5,
            py: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {[
            { value: "۱ میلیون ریال", label: "بازدهی تخمینی ماهانه" },
            { value: "۱ میلیون ریال", label: "بازدهی تخمینی سالانه" },
          ].map((row) => (
            <Box key={row.label} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#ff8037" }}>{row.value}</Typography>
              <Typography sx={{ fontSize: 11, color: "#6b7280" }}>{row.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default function Home({ onIssuance }: { onIssuance?: () => void }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: "30px",
        pb: "30px",
        display: "flex",
        flexDirection: "column",
        marginTop: 2,
        gap: 2,
      }}
    >
      <HeroSection />
      <MyFundsSection onIssuance={onIssuance} />
      <QuickActionsRow />
      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
        <TransactionsSection />
        <ProfitCalculator />
      </Box>
    </Box>
  );
}
