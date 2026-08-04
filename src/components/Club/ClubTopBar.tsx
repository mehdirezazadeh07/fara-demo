import { Box } from "@mui/material";
import { clubColors } from "../../theme";

/** Shared orange top accent used across Club cards */
export default function ClubTopBar() {
  return (
    <Box
      aria-hidden
      sx={{
        height: 6,
        flexShrink: 0,
        background: `linear-gradient(90deg, ${clubColors.orangeBarStart} 0%, ${clubColors.orange} 48%, ${clubColors.orangeBarEnd} 100%)`,
      }}
    />
  );
}
