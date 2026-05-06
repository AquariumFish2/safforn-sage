import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import RecipeSkeleton from "./RecipeSkeleton";
import NoRecipesFound from "./NoRecipesFound";

export default function RecipeList({ recipes, loading }) {
  if (loading) {
    return <RecipeSkeleton />;
  }

  if (!recipes || recipes.length === 0) {
    return <NoRecipesFound />;
  }

  return (
    <Grid container spacing={4} sx={{ mt: 1 }}>
      {recipes.map((recipe) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}
