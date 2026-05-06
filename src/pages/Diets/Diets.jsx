import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import DietHero from "./Components/DietHero";
import DietNutritionTip from "./Components/DietNutritionTip";
import DietCard from "./Components/DietCard";
import DietCommunity from "./Components/DietCommunity";

const DIET_TYPES = [
  { key: "vegan", color: "#2E7D32", image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { key: "ketogenic", color: "#EF6C00", image: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { key: "paleo", color: "#5D4037", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=853&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { key: "vegetarian", color: "#689F38", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { key: "gluten_free", color: "#D32F2F", image: "https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { key: "pescetarian", color: "#0097A7", image: "https://images.unsplash.com/photo-1749146878422-292fbe4d6d55?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Diets() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [featuredRecipes, setFeaturedRecipes] = useState({});
  const [nutritionTip, setNutritionTip] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

        const recipeResults = await Promise.all(
          DIET_TYPES.map(async (diet) => {
            try {
              const res = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${diet.key.replace("_", " ")}&number=1&addRecipeInformation=true&sort=popularity`
              );
              const data = await res.json();
              return { diet: diet.key, recipe: data.results?.[0] };
            } catch (e) { return { diet: diet.key, recipe: null }; }
          })
        );

        const recipeMap = {};
        recipeResults.forEach(item => {
          recipeMap[item.diet] = item.recipe;
        });
        setFeaturedRecipes(recipeMap);

        try {
          const triviaRes = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`);
          const triviaData = await triviaRes.json();
          console.log(triviaData)
          setNutritionTip(triviaData.text || "Eating a variety of colorful vegetables ensures a wide range of essential nutrients.");
        } catch (e) {
          setNutritionTip("Stay hydrated! Drinking enough water is essential for optimal health and digestion.");
        }

      } catch (err) {
        console.error("Error fetching diet data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh", pb: 12 }}>
      <DietHero />

      <Container sx={{ mt: -8, position: "relative", zIndex: 2 }}>
        <DietNutritionTip loading={loading} nutritionTip={nutritionTip} />

        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 4, textAlign: "center" }}>
          {t("diets_page.choose_path")}
        </Typography>

        <Grid container spacing={4}>
          {DIET_TYPES.map((diet) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={diet.key}>
              <DietCard
                diet={{
                  name: t(`diets_page.diets.${diet.key}.name`),
                  description: t(`diets_page.diets.${diet.key}.description`),
                  color: diet.color,
                  image: diet.image
                }}
                featuredRecipe={featuredRecipes[diet.key]}
                loading={loading}
                onExplore={() => navigate(`/recipes?diet=${diet.key.replace("_", " ")}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <DietCommunity />
    </Box>
  );
}
