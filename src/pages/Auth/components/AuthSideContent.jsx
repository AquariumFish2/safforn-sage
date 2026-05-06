import { Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import imageSource from "../../../assets/images/healthy-halal-food.jpg";

export default function AuthSideContent() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        flex: { xs: "0 0 0%", md: "1 1 50%" },
        display: { xs: "none", md: "block" },
        position: "relative",
        backgroundImage: `url(${imageSource})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(128,42,0,0.2), rgba(128,42,0,0.8))",
          display: "flex",
          alignItems: "flex-end",
          p: 8,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "white",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontFamily: "noto serif" }}>
            {t("auth.side_text.title")}
          </Typography>
          <Typography sx={{ fontSize: "16px", opacity: 0.9 }}>
            {t("auth.side_text.desc")}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
