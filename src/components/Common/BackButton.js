import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/")}
      variant="outlined"
      startIcon={<ArrowBackIcon />}
    >
      Back
    </Button>
  );
}
