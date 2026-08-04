import { Avatar, Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from "react-router-dom";
import svgPaths from "../../imports/dashboard/svg-d48flf12a8";

import imgAvatar from "../../imports/dashboard/profile.png"

// import imgDownload181 from "../imports/داشبورد/fb519101f35db837e23cc446965fb358636525ab.png";
// import img1 from "../imports/داشبورد/3f5b81f1960918261f69ce332427702efb1e70de.png";
// import imgMakeNumber35 from "../imports/داشبورد/176b1d6be6ba811c4dd8ea22334ef693c6c6470a.png";
// import imgImage538 from "../imports/داشبورد/783a834e0a453ccdae6f402d9741293dd058bd6c.png";
// import imgMakeNumber36 from "../imports/داشبورد/3e73286fee88c342cb02c7cc0f652f724243eebb.png";



function HeaderLogo() {
  return (
    <Box sx={{ width: "91.196px", height: "36.912px", position: "relative", flexShrink: 0 }}>
      <Box sx={{ position: "absolute", top: "-10.84%", left: "-2.19%", right: "-2.19%", bottom: 0 }}>
        <svg width="95.1956" height="40.9117" viewBox="0 0 95.1956 40.9117" fill="none" style={{ display: "block", width: "100%", height: "100%" }}>
          <g filter="url(#logoFilter)">
            <path d={svgPaths.p26659080} fill="#727272" />
            <path d={svgPaths.p1e4b600} fill="#727272" />
            <path d={svgPaths.p37abdd00} fill="#727272" />
            <path d={svgPaths.p137bfc00} fill="#727272" />
            <path d={svgPaths.p1bfa2a80} fill="#FBB042" />
            <path d={svgPaths.p14660000} fill="#F89521" />
            <path d={svgPaths.p3326b340} fill="#F26822" />
            <path d={svgPaths.p2a7cf700} fill="#EF4237" />
            <path d={svgPaths.p23c33500} fill="#5C5C5A" />
            <path d={svgPaths.pf220900} fill="#727272" />
            <path d={svgPaths.pda94f72} fill="#727272" />
            <path d={svgPaths.pfb7d700} fill="#727272" />
          </g>
          <defs>
            <filter id="logoFilter" x="-1.09431e-10" y="0" width="95.1956" height="40.9117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
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


function HeaderLayerLeft() {
  return (
    <Box sx={{ width: "67.3px", height: "77.44px", position: "relative", flexShrink: 0 }}>
      <svg width="67.3" height="77.44" viewBox="0 0 67.3 77.44" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g clipPath="url(#clipHR)">
          <path d={svgPaths.p1eef6e00} fill="white" />
        </g>
        <defs>
          <clipPath id="clipHL"><rect width="67.3" height="77.44" fill="white" /></clipPath>
        </defs>
      </svg>
    </Box>
  );
}

function NavPillGift({ active = false }: { active?: boolean }) {
  const navigate = useNavigate();
  const stroke = active ? "white" : "#6D6E71";

  return (
    <Box
      onClick={() => navigate("/club")}
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        px: "16px",
        py: "12px",
        borderRadius: "9999px",
        bgcolor: active ? "#f26822" : "white",
        boxShadow: active
          ? "0px 4px 12px rgba(242,104,34,0.7)"
          : "0px 3px 8px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.06)",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <Typography sx={{ fontSize: 14, color: active ? "white" : "#6d6e71", whiteSpace: "nowrap", lineHeight: "24px" }}>باشگاه مشتریان</Typography>
      <Box sx={{ width: 20, height: 20, position: "relative" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g id="gift">
            <path d={svgPaths.p144eab80} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.pfbafc80} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p1298f280} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p25ce9900} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p8291980} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          </g>
        </svg>
      </Box>
    </Box>
  );
}
function NavPillShield({active = false}) {
    const navigate = useNavigate();
  const stroke = active ? "white" : "#6D6E71";

  return (
    <Box
          onClick={() => navigate("/profile")}

     sx={{
       display: "flex", gap: "8px", alignItems: "center",
        justifyContent: "center", px: "16px", py: "12px",
        borderRadius: "9999px",
        flexShrink: 0, cursor: "pointer",
        bgcolor: active ? "#f26822" : "white",
        boxShadow: active
          ? "0px 4px 12px rgba(242,104,34,0.7)"
          : "0px 3px 8px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.06)",

    }}>
      <Typography sx={{ fontSize: 14, color: active ? "white" : "#6d6e71", whiteSpace: "nowrap", lineHeight: "24px" }}>فرا بیمه</Typography>
      <Box sx={{ width: 20, height: 20, position: "relative" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g id="shield-tick">
            <path d={svgPaths.p31b37b00} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pea4ac80} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </Box>
    </Box>
  );
}

function NavPillBag() {
  return (
    <Box sx={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", px: "16px", py: "12px", borderRadius: "9999px", bgcolor: "white", boxShadow: "0px 3px 8px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.06)", flexShrink: 0, cursor: "pointer" }}>
      <Typography sx={{ fontSize: 14, color: "#6d6e71", whiteSpace: "nowrap", lineHeight: "24px" }}>سبدگردانی</Typography>
      <Box sx={{ width: 20, height: 20, position: "relative" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g id="bag">
            <path d={svgPaths.p1e0be100} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p282fe80} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p26116400} stroke="#6D6E71" strokeWidth="1.5" />
            <path d="M8.13333 11.6667V14.625" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M11.9667 11.6667V14.625" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.pf0c7c00} stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </Box>
    </Box>
  );
}

function NavPillStatusUp() {
  return (
    <Box sx={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", px: "16px", py: "12px", borderRadius: "9999px", bgcolor: "white", boxShadow: "0px 3px 8px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.06)", flexShrink: 0, cursor: "pointer" }}>
      <Typography sx={{ fontSize: 14, color: "#6d6e71", whiteSpace: "nowrap", lineHeight: "24px" }}>کارگزاری ملت</Typography>
      <Box sx={{ width: 20, height: 20, position: "relative" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g id="status-up">
            <path d="M5.73333 15.125V13.4" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M10 15.125V11.675" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M14.2667 15.125V9.94167" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.p1a31d680} stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.p295a2890} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1e16c800} stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </Box>
    </Box>
  );
}

function NavPillActiveInvest({ active = false }: { active?: boolean }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/issuance")}
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
        px: "16px",
        py: "12px",
        borderRadius: "9999px",
        bgcolor: active ? "#f26822" : "white",
        boxShadow: active
          ? "0px 4px 12px rgba(242,104,34,0.7)"
          : "0px 3px 8px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.06)",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <Typography sx={{ fontSize: 14, color: active ? "white" : "#6d6e71", whiteSpace: "nowrap", lineHeight: "24px" }}>سرمایه‌گذاری</Typography>
      <Box sx={{ width: 24, height: 24, position: "relative" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d={svgPaths.p2c82bc00} fill={active ? "white" : "#6D6E71"} />
        </svg>
      </Box>
    </Box>
  );
}

function HeaderNavBar() {
  const { pathname } = useLocation();
  const isClub = pathname.startsWith("/club");
  const isProfile = pathname.startsWith("/profile");
  const isIssuance = pathname.startsWith("/issuance");

  return (
    <Box
      sx={{
        display: "flex", gap: "12px", alignItems: "center", justifyContent: "center",
        pb: "8px", pt: "4px", px: "8px",
        borderRadius: "9999px", flexShrink: 0, width: "687px",
      }}
    >
      <NavPillGift active={isClub} />
      <NavPillShield active={isProfile} />
      <NavPillBag />
      <NavPillStatusUp />
      <NavPillActiveInvest active={isIssuance} />
    </Box>
  );
}
function HeaderLayerRight() {
  return (
    <Box sx={{ width: "67.3px", height: "77.44px", position: "relative", flexShrink: 0 }}>
      <svg width="67.3" height="77.44" viewBox="0 0 67.3 77.44" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g clipPath="url(#clipHL)">
          <path d={svgPaths.p2f3d4600} fill="white" />
        </g>
        <defs>
          <clipPath id="clipHR"><rect width="67.3" height="77.44" fill="white" /></clipPath>
        </defs>
      </svg>
    </Box>
  );
}
function HeaderProfile() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "16px", height: "55.398px", flexShrink: 0 }}>
      {/* Profile circle */}
      <Box
        sx={{
          width: 40, height: 40, borderRadius: "50%",
          bgcolor: "#fafafa", border: "3px solid #f5f5f5",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: 'pointer'
        }}
      >
        <Avatar src={imgAvatar} sx={{ width: 32, height: 32 }} onClick={() => navigate('/profile')} />
      </Box>
      {/* Notification */}
      <Box sx={{ position: "relative", flexShrink: 0 }}>
        <Box
          sx={{
            width: 40, height: 40, borderRadius: "19.875px",
            bgcolor: "#fafafa", border: "0.75px solid #f5f5f5",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <Box sx={{ width: 18, height: 18, position: "relative" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <g id="notification">
                <path d={svgPaths.pcc64600} stroke="#25282D" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.125" />
                <path d={svgPaths.p2627d800} stroke="#25282D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.125" />
                <path d={svgPaths.p32ce5580} stroke="#25282D" strokeMiterlimit="10" strokeWidth="1.125" />
              </g>
            </svg>
          </Box>
        </Box>
        {/* Red dot badge — left:32px top:7.19px relative to the notification box */}
        <Box sx={{ position: "absolute", left: "32px", top: "7.19px", width: 8, height: 8 }}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#EA1017" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default function MainHeader() {
  return (
    <Box
      sx={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        px: "30px", bgcolor: "white", width: "100%", flexShrink: 0,
      }}
    >
      <HeaderLogo />
      {/* Center strip */}
      <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#f5f5f5", gap: "10px", flexShrink: 0 }}>
        <HeaderLayerLeft />
        <HeaderNavBar />
        <HeaderLayerRight />
      </Box>
      <HeaderProfile />

    </Box>

)
}
