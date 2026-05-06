import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Skeleton,
  Stack,
  Avatar,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function DietCard({ diet, featuredRecipe, loading, onExplore }) {
  const { t } = useTranslation();
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "28px",
        overflow: "hidden",
        bgcolor: "#fff",
        border: "1px solid #f0f0f0",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        height: "100%",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        "&:hover": { 
          transform: "translateY(-10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          borderColor: diet.color,
        },
      }}
    >
      <Box sx={{ position: "relative", height: 220 }}>
        <CardMedia
          component="img"
          height="100%"
          image={diet.image}
          alt={diet.name}
          sx={{ filter: "brightness(0.9)" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            bgcolor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(4px)",
            color: diet.color,
            px: 2,
            py: 0.5,
            borderRadius: "30px",
            fontWeight: 800,
            fontSize: "0.75rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          {t("diets_page.diet_card.premium")}
        </Box>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1.5 }}>
          {diet.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", mb: 4, lineHeight: 1.7, fontSize: "0.95rem" }}>
          {diet.description}
        </Typography>

        <Box 
          sx={{ 
            p: 2, 
            borderRadius: "20px", 
            bgcolor: "#FAFAFA", 
            mb: 4, 
            border: "1px dashed #ddd",
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
            <TrendingUpIcon sx={{ color: diet.color, fontSize: 18 }} />
            <Typography variant="caption" sx={{ fontWeight: 800, color: "#999", textTransform: "uppercase" }}>
              {t("diets_page.diet_card.featured_today")}
            </Typography>
          </Stack>
          
          {loading ? (
            <Stack direction="row" spacing={2}>
              <Skeleton variant="rectangular" width={50} height={50} sx={{ borderRadius: "12px" }} />
              <Box sx={{ width: "100%" }}>
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="60%" />
              </Box>
            </Stack>
          ) : (
            featuredRecipe ? (
              <Stack direction="row" spacing={2} sx={{ alignItems: "center", cursor: "pointer" }}>
                <Avatar
                  src={featuredRecipe.image}
                  variant="rounded"
                  sx={{ width: 54, height: 54, borderRadius: "14px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#333", lineHeight: 1.2, mb: 0.5 }}>
                    {featuredRecipe.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#999" }}>
                    {featuredRecipe.readyInMinutes} {t("recipe_card.min")} • {featuredRecipe.healthScore} {t("recipe_card.health")}
                  </Typography>
                </Box>
              </Stack>
            ) : (
              <Typography variant="caption" sx={{ color: "#bbb", fontStyle: "italic" }}>
                {t("diets_page.diet_card.recipe_unavailable")}
              </Typography>
            )
          )}
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={onExplore}
          sx={{
            borderRadius: "16px",
            py: 1.8,
            bgcolor: diet.color,
            boxShadow: `0 8px 20px ${diet.color}33`,
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
            "&:hover": { 
              bgcolor: diet.color, 
              filter: "brightness(0.85)",
              boxShadow: `0 12px 28px ${diet.color}44`,
            },
          }}
        >
          {t("diets_page.diet_card.explore")} {diet.name}
        </Button>
      </CardContent>
    </Card>
  );
}
