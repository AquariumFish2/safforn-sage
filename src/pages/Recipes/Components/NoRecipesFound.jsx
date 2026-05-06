import { Box, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { useTranslation } from "react-i18next";

export default function NoRecipesFound() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        mt: 6,
        mb: 4,
        textAlign: "center",
        py: 8,
        bgcolor: "#FFF8F5",
        borderRadius: "20px",
        border: "1px dashed #FFD0BC",
      }}
    >
      <SentimentDissatisfiedIcon sx={{ fontSize: 64, color: "#FFDBCF", mb: 2 }} />
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#802A00", mb: 1 }}>
        {t("recipe_list.no_recipes_found")}
      </Typography>
      <Typography sx={{ color: "#999", maxWidth: 400, mx: "auto" }}>
        {t("recipe_list.no_recipes_desc")}
      </Typography>
    </Box>
  );
}
