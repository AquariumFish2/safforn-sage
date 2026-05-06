import { Box, Stack, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const mealTypes = [
  { label: "meal_types.main_course", value: "main course" },
  { label: "meal_types.side_dish", value: "side dish" },
  { label: "meal_types.dessert", value: "dessert" },
  { label: "meal_types.appetizer", value: "appetizer" },
  { label: "meal_types.salad", value: "salad" },
  { label: "meal_types.breakfast", value: "breakfast" },
  { label: "meal_types.soup", value: "soup" },
  { label: "meal_types.snack", value: "snack" },
];

const diets = [
  { label: "diet_types.vegetarian", value: "vegetarian" },
  { label: "diet_types.vegan", value: "vegan" },
  { label: "diet_types.gluten_free", value: "gluten free" },
  { label: "diet_types.ketogenic", value: "ketogenic" },
  { label: "diet_types.paleo", value: "paleo" },
];

export default function FilterPanel({ 
  showFilters, 
  diet, 
  setDiet, 
  mealType, 
  setMealType, 
  handleSearch, 
  handleClearFilters, 
  hasActiveFilters 
}) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        maxHeight: showFilters ? "300px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease",
        opacity: showFilters ? 1 : 0,
      }}
    >
      <Box
        sx={{
          bgcolor: "#FFF8F5",
          border: "1px solid #FFE0D3",
          borderRadius: "16px",
          p: 3,
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "#802A00" }}
          >
            {t("filters.refine_title")}
          </Typography>
          {hasActiveFilters && (
            <Button
              size="small"
              startIcon={<CloseIcon />}
              onClick={handleClearFilters}
              sx={{
                color: "#802A00",
                textTransform: "none",
                "&:hover": { bgcolor: "#FFDBCF" },
              }}
            >
              {t("filters.clear_all")}
            </Button>
          )}
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ alignItems: { sm: "center" } }}
        >
          <FormControl
            size="small"
            sx={{ minWidth: 180, bgcolor: "white", borderRadius: "12px" }}
          >
            <InputLabel>{t("filters.diet_label")}</InputLabel>
            <Select
              value={diet}
              label={t("filters.diet_label")}
              onChange={(e) => setDiet(e.target.value)}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>{t("filters.any_diet")}</em>
              </MenuItem>
              {diets.map((d) => (
                <MenuItem key={d.value} value={d.value}>
                  {t(d.label)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            size="small"
            sx={{ minWidth: 180, bgcolor: "white", borderRadius: "12px" }}
          >
            <InputLabel>{t("filters.meal_label")}</InputLabel>
            <Select
              value={mealType}
              label={t("filters.meal_label")}
              onChange={(e) => setMealType(e.target.value)}
              sx={{ borderRadius: "12px" }}
            >
              <MenuItem value="">
                <em>{t("filters.any_meal")}</em>
              </MenuItem>
              {mealTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {t(type.label)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              bgcolor: "#802A00",
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              "&:hover": { bgcolor: "#5c1e00" },
            }}
          >
            {t("filters.apply")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
