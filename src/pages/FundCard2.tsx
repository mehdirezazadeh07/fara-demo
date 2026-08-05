import { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Avatar, Box, Button, Card, Grid, Stack, Typography } from "@mui/material"
import ojMellat from "../imports/dashboard/ojMellat.png"
import { useNavigate } from "react-router-dom"
const tabs = ["صدور و ابطالی", "درآمد ثابت"]

function BarChartIcon() {
  return (
    <svg width="38" height="36" viewBox="0 0 38 36" fill="none">
      <rect x="0" y="18" width="7" height="18" rx="2" fill="rgba(255,255,255,0.55)" />
      <rect x="9" y="8" width="7" height="28" rx="2" fill="rgba(255,255,255,0.8)" />
      <rect x="18" y="13" width="7" height="23" rx="2" fill="rgba(255,255,255,0.65)" />
      <rect x="27" y="2" width="7" height="34" rx="2" fill="white" />
    </svg>
  )
}

export default function FundCard2({logo}: any) {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate();
  return (
        <Box
          dir="rtl"
          sx={{
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Grid sx={{ width: "40vh" }}>

            {/* ── Golden Header ── */}
            <Box
              sx={{
                background: "linear-gradient(to right, #EFDBB7 0%, #EFDBB7 15%, #EFDBB790 30%, #fff 100%)",
                borderRadius: "20px 20px 0 0",
                px: 4.5,
                pt: 3,
                pb: 3,
                display: "flex",
                flexDirection: "column",
                gap: 1.8,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img style={{width: "100%"}} src={logo} />
                </Box>
                <Box sx={{display: 'flex', fontSize: 8, gap: 2}}>
                        <Box sx={{background: "#F2F3F5", borderRadius: 15, border: 1, borderColor: "gray"}} style={{ padding: "4px 10px"}} >صدور و ابطالی</Box>
                        <Box sx={{background: "#F2F3F5", borderRadius: 15, border: 1, borderColor: "gray"}} style={{ padding: "4px 10px"}}>ETF</Box>
                </Box>
              </Box>

            </Box>

            {/* ── White Card ── */}
            <Card
              elevation={0}
              sx={{
                borderRadius: "0 0 20px 20px",
                p: 2.5,
                background: "#fff",
                boxShadow: "0 6px 28px rgba(0,0,0,0.09)",
              }}
            >
              {/* Top two green info boxes */}
              <Stack direction="row" spacing={1.3} sx={{ mb: 1.5 }}>

                {/* مبلغ دارایی در صندوق */}
                <Box
                  sx={{
                    flex: 2,
                    background: "#f0fdf4",
                    borderRadius: "14px",
                    p: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "0.58rem", color: "#666", mb: 1, fontFamily: "inherit" }}>
                    مبلغ دارایی در صندوق (ریال)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.98rem",
                      fontWeight: 800,
                      color: "#16a34a",
                      fontFamily: "inherit",
                      direction: "ltr",
                      textAlign: "right",
                    }}
                  >
                    ۲۱,۰۰۰,۰۰۰,۰۰۰,۰۰۰,۰۰۰
                  </Typography>
                </Box>
                                {/* سود موثر سالیانه */}
                <Box
                  sx={{
                    flex: 1,
                    background: "#f0fdf4",
                    borderRadius: "14px",
                    p: 1.3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography sx={{ fontSize: "0.56rem", color: "#666", mb: 1, fontFamily: "inherit" }}>
                    سود موثر سالیانه
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 400,
                      color: "#16a34a",
                      lineHeight: 1,
                    }}
                  >
                    ۳۵٪
                  </Typography>
                </Box>

              </Stack>

              {/* Stats row */}
              <Stack
                direction="row"
                sx={{ mb: 2.5, borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0", py: 2 }}
              >
                {[
                  { label: "تعداد واحد شما", value: "۵۲" },
                  { label: "هر واحد ابطال", value: "۱,۱۰۰,۰۰۰" },
                  { label: "هر واحد صدور", value: "۱,۱۰۰,۰۰۰" },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      textAlign: "center",
                      borderRight: i < 2 ? "1px solid #f0f0f0" : "none",
                      px: 0.5,
                    }}
                  >
                    <Typography sx={{ fontSize: "0.65rem", color: "#999", mb: 0.8, fontFamily: "inherit" }}>
                      {item.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        fontFamily: "inherit",
                        direction: "ltr",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Action buttons */}
              <Stack direction="row" spacing={1.5}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => navigate("/issuance")}
                  sx={{
                    borderRadius: "10px",
                    fontSize: "14px",
                    py: 1,
                    fontWeight: 400,
                    color: "#e53935",
                    borderColor: "#fecaca",
                    background: "#fff5f5",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { background: "#fee2e2", borderColor: "#f87171", boxShadow: "none" },
                  }}
                >
                  ابطال
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate("/issuance")}
                  sx={{
                    borderRadius: "10px",
                    fontSize: "14px",
                    py: 1,
                    fontWeight: 400,
                    background: "#22c55e",
                    color: "#fff",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { background: "#16a34a", boxShadow: "none" },
                  }}
                >
                  صدور
                </Button>
              </Stack>
            </Card>

          </Grid>
        </Box>
  )
}
