import { Stack, Typography } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useNavigate } from "react-router";

export default function AuthLogo() {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      spacing={1}
      onClick={() => navigate("/")}
      sx={{ alignItems: "center", cursor: "pointer", width: "fit-content", mb: 2 }}
    >
      <RestaurantMenuIcon sx={{ color: "#802A00", fontSize: 32 }} />
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#802A00",
          fontFamily: "noto serif",
        }}
      >
        Saffron & Sage
      </Typography>
    </Stack>
  );
}
