import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Stack spacing={3} alignItems="center" justifyContent="center" minHeight="80vh">
        <Typography variant="h3" fontWeight={700}>
          صفحه اصلی
        </Typography>

        <Typography color="text.secondary">
          Header در تمام صفحات قابل مشاهده است.
        </Typography>

        <Button variant="contained" onClick={() => navigate("/profile")}>
          رفتن به پروفایل
        </Button>
      </Stack>
    </Container>
  );
}