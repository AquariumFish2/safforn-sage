import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import RecipeFilters from "./Components/RecipeFilters";
import RecipeList from "./Components/RecipeList";
import RecipesHeader from "./Components/RecipesHeader";
import RecipePagination from "./Components/RecipePagination";
import { useRecipes } from "../../context/RecipesContext";

export default function Recipes() {
  const { t } = useTranslation();
  const { recipes, loading, totalResults } = useRecipes();

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        minHeight: "100vh",
        bgcolor: "#FAFAFA",
      }}
    >
      <Container maxWidth="lg">
        <RecipesHeader />
        
        <RecipeFilters />

        {/* Results Count */}
        {!loading && totalResults > 0 && (
          <Typography
            sx={{
              color: "#999",
              fontSize: "14px",
              mb: 1,
            }}
          >
            {t("recipes_page.showing")}{" "}
            <Box component="span" sx={{ fontWeight: 700, color: "#802A00" }}>
              {recipes.length}
            </Box>{" "}
            {t("recipes_page.of")}{" "}
            <Box component="span" sx={{ fontWeight: 700, color: "#802A00" }}>
              {totalResults}
            </Box>{" "}
            {t("recipes_page.recipes_count")}
          </Typography>
        )}

        <RecipeList recipes={recipes} loading={loading} />

        <RecipePagination />
      </Container>
    </Box>
  );
}
