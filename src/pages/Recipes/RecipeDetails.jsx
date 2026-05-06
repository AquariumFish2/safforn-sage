import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Grid,
  Paper,
  Button,
  Skeleton,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return <RecipeDetailsSkeleton />;
  }

  if (!recipe) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "#802A00", fontWeight: 700 }}>
          Recipe not found
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/recipes")}
          sx={{ mt: 3, color: "#802A00" }}
        >
          Back to Recipes
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh", pb: 8 }}>
      {/* Hero Image Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", md: "450px" },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={recipe.image}
          alt={recipe.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(transparent, rgba(0,0,0,0.7))",
          }}
        />
        {/* Back button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/recipes")}
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            bgcolor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "30px",
            color: "#802A00",
            fontWeight: 600,
            textTransform: "none",
            px: 3,
            "&:hover": {
              bgcolor: "white",
            },
          }}
        >
          Back
        </Button>
        {/* Title on image */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: { xs: 3, md: 5 },
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                fontFamily: "noto serif",
                fontSize: { xs: "24px", md: "38px" },
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                lineHeight: 1.2,
              }}
            >
              {recipe.title}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -3, position: "relative", zIndex: 1 }}>
        {/* Stats Bar */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "20px",
            p: { xs: 2, md: 3 },
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
            mb: 4,
          }}
        >
          <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap justifyContent="center">
            {recipe.readyInMinutes && (
              <StatItem
                icon={<AccessTimeIcon sx={{ color: "#F95E14" }} />}
                label="Prep Time"
                value={`${recipe.readyInMinutes} min`}
              />
            )}
            {recipe.servings && (
              <StatItem
                icon={<PeopleIcon sx={{ color: "#802A00" }} />}
                label="Servings"
                value={recipe.servings}
              />
            )}
            {recipe.healthScore !== undefined && (
              <StatItem
                icon={<LocalFireDepartmentIcon sx={{ color: "#F95E14" }} />}
                label="Health Score"
                value={`${recipe.healthScore}%`}
              />
            )}
          </Stack>
          <Button
            variant="outlined"
            startIcon={<FavoriteIcon />}
            sx={{
              borderColor: "#802A00",
              color: "#802A00",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              "&:hover": {
                bgcolor: "#FFDBCF",
                borderColor: "#802A00",
              },
            }}
          >
            Save Recipe
          </Button>
        </Paper>

        {/* Diet Tags */}
        {recipe.diets && recipe.diets.length > 0 && (
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
            {recipe.diets.map((diet) => (
              <Chip
                key={diet}
                label={diet}
                sx={{
                  bgcolor: "#FFF3EE",
                  color: "#802A00",
                  fontWeight: 600,
                  fontSize: "13px",
                  border: "1px solid #FFE0D3",
                  borderRadius: "10px",
                  px: 0.5,
                }}
              />
            ))}
            {recipe.vegetarian && (
              <Chip
                label="Vegetarian"
                sx={{
                  bgcolor: "#E8F5E9",
                  color: "#2E7D32",
                  fontWeight: 600,
                  fontSize: "13px",
                  border: "1px solid #C8E6C9",
                  borderRadius: "10px",
                }}
              />
            )}
          </Stack>
        )}

        <Grid container spacing={4}>
          {/* Ingredients */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: "20px",
                p: 3,
                boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                position: "sticky",
                top: 20,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#802A00",
                  fontFamily: "noto serif",
                  mb: 3,
                }}
              >
                Ingredients
              </Typography>
              <Stack spacing={1.5}>
                {recipe.extendedIngredients?.map((ingredient, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                  >
                    <CheckCircleIcon
                      sx={{ fontSize: 18, color: "#F95E14", mt: 0.3, flexShrink: 0 }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#444", lineHeight: 1.5 }}>
                      {ingredient.original}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Instructions */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: "20px",
                p: { xs: 3, md: 4 },
                boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#802A00",
                  fontFamily: "noto serif",
                  mb: 3,
                }}
              >
                Instructions
              </Typography>

              {recipe.analyzedInstructions?.[0]?.steps ? (
                <Stack spacing={3}>
                  {recipe.analyzedInstructions[0].steps.map((step) => (
                    <Box key={step.number}>
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            bgcolor: "#802A00",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: "14px",
                            flexShrink: 0,
                          }}
                        >
                          {step.number}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            color: "#444",
                            lineHeight: 1.7,
                            pt: 0.5,
                          }}
                        >
                          {step.step}
                        </Typography>
                      </Stack>
                      {step.number !==
                        recipe.analyzedInstructions[0].steps.length && (
                        <Divider sx={{ mt: 3, borderColor: "#f0f0f0" }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              ) : recipe.instructions ? (
                <Typography
                  sx={{ fontSize: "15px", color: "#444", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                />
              ) : (
                <Typography sx={{ color: "#999", fontStyle: "italic" }}>
                  No instructions available for this recipe.
                </Typography>
              )}
            </Paper>

            {/* Summary */}
            {recipe.summary && (
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "20px",
                  p: { xs: 3, md: 4 },
                  mt: 3,
                  boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                  bgcolor: "#FFF8F5",
                  border: "1px solid #FFE0D3",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "#802A00",
                    fontFamily: "noto serif",
                    mb: 2,
                  }}
                >
                  About This Recipe
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: 1.8,
                    "& a": {
                      color: "#F95E14",
                      textDecoration: "none",
                      fontWeight: 600,
                      "&:hover": { textDecoration: "underline" },
                    },
                    "& b": { color: "#802A00" },
                  }}
                  dangerouslySetInnerHTML={{ __html: recipe.summary }}
                />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function StatItem({ icon, label, value }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "14px",
          bgcolor: "#FFF3EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontSize: "11px", color: "#999", fontWeight: 500 }}>
          {label}
        </Typography>
        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px" }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
}

function RecipeDetailsSkeleton() {
  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh" }}>
      <Skeleton variant="rectangular" height={450} animation="wave" />
      <Container maxWidth="lg" sx={{ mt: -3 }}>
        <Paper
          elevation={0}
          sx={{ borderRadius: "20px", p: 3, mb: 4, boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}
        >
          <Stack direction="row" spacing={3}>
            <Skeleton variant="rounded" width={120} height={44} sx={{ borderRadius: "14px" }} />
            <Skeleton variant="rounded" width={120} height={44} sx={{ borderRadius: "14px" }} />
            <Skeleton variant="rounded" width={120} height={44} sx={{ borderRadius: "14px" }} />
          </Stack>
        </Paper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ borderRadius: "20px", p: 3 }}>
              <Skeleton variant="text" width="60%" height={36} />
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} variant="text" width="90%" height={24} sx={{ mt: 1 }} />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ borderRadius: "20px", p: 4 }}>
              <Skeleton variant="text" width="40%" height={36} />
              {[...Array(5)].map((_, i) => (
                <Box key={i} sx={{ mt: 3 }}>
                  <Stack direction="row" spacing={2}>
                    <Skeleton variant="circular" width={36} height={36} />
                    <Skeleton variant="text" width="80%" height={24} />
                  </Stack>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
