import React from "react";
import { Box, Typography, Paper, Divider, Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

export default function DietNutritionTip({ loading, nutritionTip }) {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        bgcolor: "#fff",
        boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
        mb: 8,
        border: "1px solid #FFE0D3",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: "#FFDBCF",
          p: 2,
          borderRadius: "20px",
          color: "#802A00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LightbulbCircleIcon sx={{ fontSize: 48 }} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="overline" sx={{ color: "#F95E14", fontWeight: 800, letterSpacing: 2 }}>
          {t("diets_page.nutrition_tip")}
        </Typography>
        <Typography variant="h6" sx={{ color: "#333", fontWeight: 500, lineHeight: 1.5, mt: 1 }}>
          {loading ? <Skeleton width="80%" /> : `"${nutritionTip}"`}
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" } }} />
      <Box sx={{ textAlign: "center", minWidth: 150 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#802A00" }}>20+</Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>{t("landing.best_diets.overline")}</Typography>
      </Box>
    </Paper>
  );
}
