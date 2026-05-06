import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecipes } from "../../../context/RecipesContext";
import SearchBox from "./SearchBox";
import FilterPanel from "./FilterPanel";
import FilterChips from "./FilterChips";

export default function RecipeFilters() {
  const { filters, handleFilterChange } = useRecipes();
  const [query, setQuery] = useState(filters.query || "");
  const [diet, setDiet] = useState(filters.diet || "");
  const [mealType, setMealType] = useState(filters.mealType || "");
  const [showFilters, setShowFilters] = useState(false);

  // Sync with context (important for URL navigation)
  useEffect(() => {
    setQuery(filters.query || "");
    setDiet(filters.diet || "");
    setMealType(filters.mealType || "");
    if (filters.diet || filters.mealType) {
      setShowFilters(true);
    }
  }, [filters]);

  const handleSearch = () => {
    handleFilterChange({ query, diet, mealType });
  };

  const handleClearFilters = () => {
    setQuery("");
    setDiet("");
    setMealType("");
    handleFilterChange({ query: "", diet: "", mealType: "" });
  };

  const hasActiveFilters = query || diet || mealType;

  return (
    <Box sx={{ mb: 5 }}>
      <SearchBox 
        query={query} 
        setQuery={setQuery} 
        handleSearch={handleSearch} 
        showFilters={showFilters} 
        setShowFilters={setShowFilters} 
      />

      <FilterPanel 
        showFilters={showFilters} 
        diet={diet} 
        setDiet={setDiet} 
        mealType={mealType} 
        setMealType={setMealType} 
        handleSearch={handleSearch} 
        handleClearFilters={handleClearFilters} 
        hasActiveFilters={hasActiveFilters} 
      />

      <FilterChips 
        query={query} 
        setQuery={setQuery} 
        diet={diet} 
        setDiet={setDiet} 
        mealType={mealType} 
        setMealType={setMealType} 
      />
    </Box>
  );
}
