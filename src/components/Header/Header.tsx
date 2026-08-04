import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainHeader from "./MainHeader";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
    </>
  );
}