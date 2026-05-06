import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";

const RecipesContext = createContext({});

const RECIPES_PER_PAGE = 9;

export const RecipesProvider = ({ children }) => {
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

  // Handle page changes
  useEffect(() => {
    if (page > 1) {
      fetchRecipes(filters, page);
    }
  }, [page]);

  const handleFilterChange = (newFilters) => {
    const params = new URLSearchParams();
    if (newFilters.query) params.set("query", newFilters.query);
    if (newFilters.diet) params.set("diet", newFilters.diet);
    if (newFilters.mealType) params.set("type", newFilters.mealType);
    
    window.history.pushState({}, "", `${location.pathname}?${params.toString()}`);
    
    setFilters(newFilters);
    setPage(1);
    fetchRecipes(newFilters, 1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(totalResults / RECIPES_PER_PAGE);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        loading,
        filters,
        page,
        totalResults,
        totalPages,
        handleFilterChange,
        handlePageChange,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipesContext);
