import { Grid, Typography, Box, Skeleton, Stack } from "@mui/material";
import RecipeCard from "./RecipeCard";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export default function RecipeList({ recipes, loading }) {
  if (loading) {
    return (
      <Grid container spacing={3} sx={{ mt: 1}}>
        {[...Array(6)].map((_, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ borderRadius: "20px", overflow: "hidden" }}>
              <Skeleton
                variant="rectangular"
                height={220}
                animation="wave"
                sx={{ borderRadius: "20px 20px 0 0" }}
              />
              <Box sx={{ p: 2 }}>
                <Skeleton variant="text" width="80%" height={28} animation="wave" />
                <Skeleton variant="text" width="50%" height={20} animation="wave" sx={{ mt: 1 }} />
                <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
                  <Skeleton variant="rounded" width={70} height={24} animation="wave" sx={{ borderRadius: "8px" }} />
                  <Skeleton variant="rounded" width={90} height={24} animation="wave" sx={{ borderRadius: "8px" }} />
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!recipes || recipes.length === 0) {
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
        <SentimentDissatisfiedIcon
          sx={{ fontSize: 64, color: "#FFDBCF", mb: 2 }}
        />
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: "#802A00", mb: 1 }}
        >
          No recipes found
        </Typography>
        <Typography sx={{ color: "#999", maxWidth: 400, mx: "auto" }}>
          Try adjusting your search or filters to discover new delicious recipes!
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3} sx={{ mt: 1,justifyContent:"center" }}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id} sx={{}}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}
