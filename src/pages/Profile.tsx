import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Stack spacing={3} alignItems="center" justifyContent="center" minHeight="80vh">
        <Typography variant="h4" fontWeight={700}>
          پروفایل
        </Typography>

        <Typography color="text.secondary">
          Header همچنان در بالای صفحه وجود دارد.
        </Typography>

        <Button variant="outlined" onClick={() => navigate("/")}>
          بازگشت به خانه
        </Button>
      </Stack>
    </Container>
  );
}