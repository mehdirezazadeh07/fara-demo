import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Stack spacing={3} alignItems="center" justifyContent="center" minHeight="80vh">
        <Typography variant="h4">
          صفحه پیدا نشد
        </Typography>

        <Button variant="contained" onClick={() => navigate("/")}>
          صفحه اصلی
        </Button>
      </Stack>
    </Container>
  );
}