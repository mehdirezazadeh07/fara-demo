import { Box, Container } from "@mui/material";
import { clubColors } from "../theme";
import ActionBoxes from "../components/Club/ActionBoxes";
import ClubFooter from "../components/Club/ClubFooter";
import InviteFriends from "../components/Club/InviteFriends";
import PointsDetails from "../components/Club/PointsDetails";
import PointsTransactions from "../components/Club/PointsTransactions";
import PromoSlider from "../components/Club/PromoSlider";
import SuggestedPrizes from "../components/Club/SuggestedPrizes";

export default function Club() {
  return (
    <Box sx={{ bgcolor: clubColors.bg, minHeight: "calc(100vh - 80px)", pb: 0 }}>
      <Container
        maxWidth={false}
        sx={{
          pt: { xs: 2, md: 2.5 },
          px: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
            lg: 3,
            xl: 3.5,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(12, minmax(0, 1fr))",
            },
            columnGap: { xs: 0, md: 2.5 },
            rowGap: 2,
            alignItems: "start",
          }}
        >
          {/* Main sections (9/12) — left side on desktop */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minWidth: 0,
              gridColumnStart: { xs: 1, md: 1 },
              gridColumnEnd: { xs: -1, md: 10 },
              order: { xs: 2, md: 1 },
            }}
          >
            <PointsDetails defaultOpen />
            <SuggestedPrizes />
            <ActionBoxes />
            <PointsTransactions />
          </Box>

          {/* Invite + slider (3/12) — right side on desktop (RTL start) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              gridColumnStart: { xs: 1, md: 10 },
              gridColumnEnd: { xs: -1, md: 13 },
              order: { xs: 1, md: 2 },
            }}
          >
            <InviteFriends />
            <PromoSlider />
          </Box>
        </Box>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 0,
            md: 2.5,
            lg: 3,
            xl: 3.5,
          },
        }}
      >
        <ClubFooter />
      </Container>
    </Box>
  );
}
