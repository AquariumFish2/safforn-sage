import {
  Box,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const mealTypes = [
  "Main Course",
  "Side Dish",
  "Dessert",
  "Appetizer",
  "Salad",
  "Breakfast",
  "Soup",
  "Snack",
];

const diets = [
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Vegan", value: "vegan" },
  { label: "Gluten Free", value: "gluten free" },
  { label: "Ketogenic", value: "ketogenic" },
  { label: "Paleo", value: "paleo" },
];

export default function RecipeFilters({ onFilterChange, initialFilters = {} }) {
  const [query, setQuery] = useState(initialFilters.query || "");
  const [diet, setDiet] = useState(initialFilters.diet || "");
  const [mealType, setMealType] = useState(initialFilters.mealType || "");
  const [showFilters, setShowFilters] = useState(false);

  // Sync with props (important for URL navigation)
  useEffect(() => {
    setQuery(initialFilters.query || "");
    setDiet(initialFilters.diet || "");
    setMealType(initialFilters.mealType || "");
    // If we have diet or mealType, show the filters panel automatically
    if (initialFilters.diet || initialFilters.mealType) {
      setShowFilters(true);
    }
  }, [initialFilters]);

  const handleSearch = () => {
    onFilterChange({ query, diet, mealType });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearFilters = () => {
    setQuery("");
    setDiet("");
    setMealType("");
    onFilterChange({ query: "", diet: "", mealType: "" });
  };

  const hasActiveFilters = query || diet || mealType;

  return (
    <Box sx={{ mb: 5 }}>
      {/* Hero-style Search Bar */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #802A00 0%, #B8450A 50%, #F95E14 100%)",
          borderRadius: "20px",
          p: { xs: 3, md: 5 },
          mb: 3,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.03)",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: 2, position: "relative", zIndex: 1 }}
        >
          <RestaurantMenuIcon sx={{ color: "#FFDBCF", fontSize: 28 }} />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              fontFamily: "noto serif",
            }}
          >
            What are you craving today?
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ position: "relative", zIndex: 1 }}
        >
          <OutlinedInput
            placeholder="Search for recipes, ingredients..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            startAdornment={
              <SearchIcon sx={{ color: "#999", mr: 1 }} />
            }
            sx={{
              bgcolor: "white",
              borderRadius: "30px",
              flex: 1,
              px: 1,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #F95E14",
              },
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            sx={{
              bgcolor: "#1a1a1a",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              "&:hover": {
                bgcolor: "#333",
                transform: "translateY(-1px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Search
          </Button>
          <IconButton
            onClick={() => setShowFilters(!showFilters)}
            sx={{
              bgcolor: showFilters ? "#FFDBCF" : "rgba(255,255,255,0.15)",
              color: showFilters ? "#802A00" : "white",
              borderRadius: "50%",
              width: 50,
              height: 50,
              "&:hover": {
                bgcolor: showFilters ? "#FFDBCF" : "rgba(255,255,255,0.25)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <TuneIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Expandable Filter Panel */}
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
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: "#802A00" }}
            >
              Refine Your Search
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
                Clear All
              </Button>
            )}
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ sm: "center" }}
          >
            <FormControl
              size="small"
              sx={{ minWidth: 180, bgcolor: "white", borderRadius: "12px" }}
            >
              <InputLabel>Diet Preference</InputLabel>
              <Select
                value={diet}
                label="Diet Preference"
                onChange={(e) => {
                  setDiet(e.target.value);
                }}
                sx={{ borderRadius: "12px" }}
              >
                <MenuItem value="">
                  <em>Any Diet</em>
                </MenuItem>
                {diets.map((d) => (
                  <MenuItem key={d.value} value={d.value}>
                    {d.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              size="small"
              sx={{ minWidth: 180, bgcolor: "white", borderRadius: "12px" }}
            >
              <InputLabel>Meal Type</InputLabel>
              <Select
                value={mealType}
                label="Meal Type"
                onChange={(e) => {
                  setMealType(e.target.value);
                }}
                sx={{ borderRadius: "12px" }}
              >
                <MenuItem value="">
                  <em>Any Meal</em>
                </MenuItem>
                {mealTypes.map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>
                    {type}
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
              Apply Filters
            </Button>
          </Stack>

          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
              {query && (
                <Chip
                  label={`Search: "${query}"`}
                  onDelete={() => setQuery("")}
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
                  label={`Diet: ${diet}`}
                  onDelete={() => setDiet("")}
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
                  label={`Meal: ${mealType}`}
                  onDelete={() => setMealType("")}
                  size="small"
                  sx={{
                    bgcolor: "#802A00",
                    color: "white",
                    "& .MuiChip-deleteIcon": { color: "rgba(255,255,255,0.7)", "&:hover": { color: "white" } },
                  }}
                />
              )}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
}
