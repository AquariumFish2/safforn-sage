import { Box, Container, Typography, Pagination, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import RecipeFilters from "./Components/RecipeFilters";
import RecipeList from "./Components/RecipeList";

const RECIPES_PER_PAGE = 9;

export default function Recipes() {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ query: "", diet: "", mealType: "" });
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchRecipes = async (currentFilters, currentPage = 1) => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const offset = (currentPage - 1) * RECIPES_PER_PAGE;

      let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${RECIPES_PER_PAGE}&offset=${offset}&addRecipeInformation=true`;

      if (currentFilters.query) {
        url += `&query=${encodeURIComponent(currentFilters.query)}`;
      }
      if (currentFilters.diet) {
        url += `&diet=${encodeURIComponent(currentFilters.diet)}`;
      }
      if (currentFilters.mealType) {
        url += `&type=${encodeURIComponent(currentFilters.mealType)}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.results) {
        setRecipes(data.results);
        setTotalResults(data.totalResults || 0);
      } else {
        setRecipes([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
      setRecipes([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  // Sync filters with URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const diet = params.get("diet") || "";
    const query = params.get("query") || "";
    const mealType = params.get("type") || "";
    
    const newFilters = { query, diet, mealType };
    setFilters(newFilters);
    setPage(1);
    fetchRecipes(newFilters, 1);
  }, [location.search]);

  // Only handle page changes here (fetchRecipes is called in sync effect for filters)
  useEffect(() => {
    if (page > 1) {
      fetchRecipes(filters, page);
    }
  }, [page]);

  const handleFilterChange = (newFilters) => {
    // We navigate to update the URL, and the useEffect above will trigger the fetch
    const params = new URLSearchParams();
    if (newFilters.query) params.set("query", newFilters.query);
    if (newFilters.diet) params.set("diet", newFilters.diet);
    if (newFilters.mealType) params.set("type", newFilters.mealType);
    
    // This updates the URL which then triggers the useEffect for fetching
    window.history.pushState({}, "", `${location.pathname}?${params.toString()}`);
    // Manually trigger the effect if pushState doesn't (or use navigate hook)
    const diet = params.get("diet") || "";
    const query = params.get("query") || "";
    const mealType = params.get("type") || "";
    setFilters({ query, diet, mealType });
    setPage(1);
    fetchRecipes({ query, diet, mealType }, 1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(totalResults / RECIPES_PER_PAGE);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        minHeight: "100vh",
        bgcolor: "#FAFAFA",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
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
            Explore Our Collection
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
            Discover Delicious{" "}
            <Box component="span" sx={{ color: "#802A00" }}>
              Recipes
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
            Find your next favorite meal from thousands of curated recipes,
            tailored to your dietary needs and taste preferences.
          </Typography>
        </Box>

        <RecipeFilters initialFilters={filters} onFilterChange={handleFilterChange} />

        {/* Results Count */}
        {!loading && totalResults > 0 && (
          <Typography
            sx={{
              color: "#999",
              fontSize: "14px",
              mb: 1,
            }}
          >
            Showing{" "}
            <Box component="span" sx={{ fontWeight: 700, color: "#802A00" }}>
              {recipes.length}
            </Box>{" "}
            of{" "}
            <Box component="span" sx={{ fontWeight: 700, color: "#802A00" }}>
              {totalResults}
            </Box>{" "}
            recipes
          </Typography>
        )}

        <RecipeList recipes={recipes} loading={loading} />

        {/* Pagination */}
        {totalPages > 1 && !loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
              mb: 2,
            }}
          >
            <Pagination
              count={totalPages > 50 ? 50 : totalPages}
              page={page}
              onChange={handlePageChange}
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontWeight: 600,
                  borderRadius: "12px",
                  mx: 0.3,
                  "&:hover": {
                    bgcolor: "#FFDBCF",
                  },
                  "&.Mui-selected": {
                    bgcolor: "#802A00",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#5c1e00",
                    },
                  },
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}
