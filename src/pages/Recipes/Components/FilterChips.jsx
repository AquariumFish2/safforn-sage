import { Stack, Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRecipes } from "../../../context/RecipesContext";

export default function FilterChips({ query, setQuery, diet, setDiet, mealType, setMealType }) {
  const { t } = useTranslation();
  const { handleFilterChange } = useRecipes();

  const hasActiveFilters = query || diet || mealType;
  if (!hasActiveFilters) return null;

  return (
    <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
      {query && (
        <Chip
          label={`${t("filters.search_chip")}: "${query}"`}
          onDelete={() => {
            setQuery("");
            handleFilterChange({ query: "", diet, mealType });
          }}
          size="small"
          sx={{
            bgcolor: "#802A00",
            color: "white",
            "& .MuiChip-deleteIcon": { color: "rgba(255,255,255,0.7)", "&:hover": { color: "white" } },
          }}
        />
      )}
      {diet && (
        <Chip
          label={`${t("filters.diet_chip")}: ${t(`diet_types.${diet.replace(" ", "_")}`)}`}
          onDelete={() => {
            setDiet("");
            handleFilterChange({ query, diet: "", mealType });
          }}
          size="small"
          sx={{
            bgcolor: "#802A00",
            color: "white",
            "& .MuiChip-deleteIcon": { color: "rgba(255,255,255,0.7)", "&:hover": { color: "white" } },
          }}
        />
      )}
      {mealType && (
        <Chip
          label={`${t("filters.meal_chip")}: ${t(`meal_types.${mealType.replace(" ", "_")}`)}`}
          onDelete={() => {
            setMealType("");
            handleFilterChange({ query, diet, mealType: "" });
          }}
          size="small"
          sx={{
            bgcolor: "#802A00",
            color: "white",
            "& .MuiChip-deleteIcon": { color: "rgba(255,255,255,0.7)", "&:hover": { color: "white" } },
          }}
        />
      )}
    </Stack>
  );
}
