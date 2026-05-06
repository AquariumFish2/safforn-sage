import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function RecipesHeader() {
  const { t } = useTranslation();
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 } }}>
      <Typography
        variant="overline"
        sx={{
          color: "#F95E14",
          fontWeight: 700,
          letterSpacing: 3,
          fontSize: "13px",
        }}
      >
        {t("recipes_page.overline")}
      </Typography>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 800,
          color: "#1a1a1a",
          fontFamily: "noto serif",
          fontSize: { xs: "28px", md: "42px" },
          mt: 1,
        }}
      >
        {t("recipes_page.title_part1")}{" "}
        <Box component="span" sx={{ color: "#802A00" }}>
          {t("recipes_page.title_part2")}
        </Box>
      </Typography>
      <Typography
        sx={{
          color: "#888",
          maxWidth: 520,
          mx: "auto",
          mt: 1.5,
          fontSize: "15px",
          lineHeight: 1.7,
        }}
      >
        {t("recipes_page.subtitle")}
      </Typography>
    </Box>
  );
}
