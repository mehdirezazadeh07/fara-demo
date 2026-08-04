import { createTheme } from "@mui/material/styles";

export const clubColors = {
  orange: "#F26822",
  orangeSoft: "#FFF4EC",
  orangeMuted: "#F5A66A",
  /** Top-bar gradient: pale → rich */
  orangeBarStart: "#F7C09A",
  orangeBarEnd: "#D94E0F",
  border: "#E8E8E8",
  borderLight: "#F0F0F0",
  bg: "#ffffff",
  card: "#FFFFFF",
  text: "#25282D",
  muted: "#9A9A9A",
  mutedDark: "#6D6E71",
  green: "#2E9E7A",
  greenBg: "#E8F6F1",
  pendingBg: "#FFF0E6",
  pendingText: "#E57A2E",
  black: "#1A1A1A",
};

export const theme = createTheme({
  direction: "rtl",

  typography: {
    fontFamily: '"IranSans", Tahoma, sans-serif',
  },
});
