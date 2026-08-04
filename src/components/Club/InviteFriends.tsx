import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import qrCode from "../../assets/club/qr-code.png";
import { clubColors } from "../../theme";
import ClubTopBar from "./ClubTopBar";
import { CopyIcon, HistoryUserIcon, SendIcon } from "./icons";

export default function InviteFriends() {
  const [mobile, setMobile] = useState("");
  const inviteCode = "DF4536GT6NM";

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
    } catch {
      /* ignore */
    }
  };

  return (
    <Box
      sx={{
        bgcolor: clubColors.card,
        borderRadius: "16px",
        border: `1px solid ${clubColors.border}`,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
        minHeight: { md: 520 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ClubTopBar />

      <Box
        sx={{
          px: { xs: 1.75, md: 2 },
          pt: 1.75,
          pb: 2.5,
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header: title right, history left (RTL) */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.25 }}>
          <Typography sx={{ fontSize: 15, fontWeight: 700, color: "#1F2430" }}>
            دعوت از دوستان
          </Typography>

          <Box
            component="button"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.6,
              border: 0,
              bgcolor: "transparent",
              cursor: "pointer",
              p: 0,
              color: clubColors.orange,
              fontFamily: "inherit",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            <Typography component="span" sx={{ fontSize: 12, color: clubColors.orange, fontWeight: 500 }}>
              تاریخچه دعوت
            </Typography>
            <HistoryUserIcon />
          </Box>
        </Box>

        <Box sx={{ height: "1px", bgcolor: "#ECECEC", mb: 2.25 }} />

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#1F2430",
            textAlign: "center",
            mb: 2.25,
            lineHeight: 1.8,
          }}
        >
          دوستان خود را دعوت کنید
          <br />
          هدیه بگیرید!
        </Typography>

        {/* Input on right, dark icon button on left (RTL default row) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.25 }}>
          <InputBase
            className="club-invite-input"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="شماره همراه معرف"
            sx={{
              flex: 1,
              height: 42,
              border: "1px solid #E4E4E4",
              borderRadius: "10px",
              px: 1.5,
              fontSize: 13,
              bgcolor: "#FFF",
              "& input": {
                textAlign: "right",
                p: 0,
                color: clubColors.text,
              },
            }}
          />
          <IconButton
            sx={{
              width: 42,
              height: 42,
              borderRadius: "10px",
              bgcolor: "#1F2430",
              flexShrink: 0,
              "&:hover": { bgcolor: "#151922" },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.75 }}>
          <Box
            sx={{
              flex: 1,
              height: 42,
              border: "1px solid #E4E4E4",
              borderRadius: "10px",
              px: 1.5,
              bgcolor: "#FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 0.75,
            }}
          >
            <Typography component="span" sx={{ fontSize: 12, color: "#9A9A9A", whiteSpace: "nowrap" }}>
              کد دعوت شما
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: 13, fontWeight: 700, color: "#1F2430", letterSpacing: 0.4, whiteSpace: "nowrap" }}
            >
              {inviteCode}
            </Typography>
          </Box>
          <IconButton
            onClick={copyCode}
            sx={{
              width: 42,
              height: 42,
              borderRadius: "10px",
              bgcolor: "#1F2430",
              flexShrink: 0,
              "&:hover": { bgcolor: "#151922" },
            }}
          >
            <CopyIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 1,
            pb: 1.5,
          }}
        >
          <Box
            component="img"
            src={qrCode}
            alt="QR Code"
            sx={{
              width: { xs: 148, md: 168 },
              height: { xs: 148, md: 168 },
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      </Box>

      {/* Soft placeholder-like decorative background at bottom */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: "auto 0 0 0",
          height: "42%",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(120% 90% at 0% 100%, rgba(242,104,34,0.10) 0%, rgba(242,104,34,0.00) 55%), radial-gradient(110% 85% at 100% 100%, rgba(242,104,34,0.08) 0%, rgba(242,104,34,0.00) 52%)",
        }}
      />
      <Box
        aria-hidden
        component="svg"
        viewBox="0 0 320 90"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: 78,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <path
          d="M0 70 C40 40, 90 88, 150 58 C210 28, 260 76, 320 48 L320 90 L0 90 Z"
          fill="rgba(242,104,34,0.06)"
        />
        <path
          d="M0 78 C55 55, 110 92, 170 68 C230 44, 280 84, 320 62 L320 90 L0 90 Z"
          fill="rgba(242,104,34,0.05)"
        />
      </Box>
    </Box>
  );
}
