import React from "react";
import {
  Box, Typography, Container, Grid, Card, CardContent,
  CardMedia, Chip, Stack, Button, IconButton,
} from "@mui/material";
import QuinoaTabouliImage from "../../../assets/images/quinoa-tabouli.png";
import HeartyLentilStewImage from "../../../assets/images/hearty-lentil-stew.png";
import GrilledHalalChickenSaladImage from "../../../assets/images/grilled-halal-chicken-salad.png";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const mockData = [
  {
    name: "Quinoa Tabouli",
    desc: "A refreshing, nutrient-packed take on the classic Middle Eastern salad with fresh herbs and citrus dressing.",
    image: QuinoaTabouliImage,
    cals: 240,
    tags: ["Vegan"],
  },
  {
    name: "Grilled Halal Chicken Salad",
    desc: "Tender, perfectly spiced grilled chicken over a bed of crisp greens with a tahini drizzle.",
    image: GrilledHalalChickenSaladImage,
    cals: 450,
    tags: ["High Protein"],
  },
  {
    name: "Hearty Lentil Stew",
    desc: "A warming, soul-soothing stew packed with fiber-rich lentils, cumin, and aromatic spices.",
    image: HeartyLentilStewImage,
    cals: 320,
    tags: ["Comfort"],
  },
];

export default function FoodCards() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: "var(--cream)" }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            mb: 7,
            justifyContent:"space-between",
            alignItems: { xs: "flex-start", md: "flex-end" }
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "var(--sage)", fontWeight: 700, letterSpacing: 3 }}
            >
              Chef's Selection
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", md: "3.2rem" },
                mt: 1,
                color: "var(--charcoal)",
              }}
            >
              Today's Recommended{" "}
              <Box component="span" sx={{ color: "var(--saffron)" }}>
                Recipes
              </Box>
            </Typography>
          </Box>
          <Button
            variant="outlined"
            endIcon={
              <Box
                sx={{
                  bgcolor: "var(--saffron)",
                  color: "white",
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            }
            sx={{
              borderColor: "var(--saffron)",
              borderWidth: "2px",
              color: "var(--saffron)",
              borderRadius: "100px",
              px: 3,
              py: 1.2,
              fontWeight: 700,
              fontSize: "0.95rem",
              textTransform: "none",
              alignSelf: "flex-end",
              mt: { xs: 3, md: 0 },
              transition: "all 0.3s ease",
              "&:hover": {
                borderWidth: "2px",
                borderColor: "var(--saffron)",
                bgcolor: "var(--saffron)",
                color: "white",
                "& .MuiButton-endIcon .MuiBox-root": {
                  bgcolor: "white",
                  color: "var(--saffron)",
                },
              },
            }}
          >
            View Full Menu
          </Button>
        </Stack>

        <Grid container spacing={4}>
          {mockData.map((food) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={food.name}>
              <RecipeCard food={food} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function RecipeCard({ food }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "24px",
        bgcolor: "white",
        overflow: "hidden",
        height: "100%",
        border: "1px solid var(--border)",
        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 24px 48px rgba(128, 42, 0, 0.1)",
          "& .view-btn": { opacity: 1 },
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="300"
          image={food.image}
          alt={food.name}
          sx={{ objectFit: "cover" }}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            "&:hover": { bgcolor: "white" },
          }}
        >
          <FavoriteBorderIcon sx={{ color: "var(--saffron)" }} />
        </IconButton>

        <Box
          className="view-btn"
          sx={{
            position: "absolute",
            bottom: 16,
            left: "10%",
            right: "10%",
            opacity: 0,
            transition: "all 0.3s ease",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "var(--saffron)",
              borderRadius: "12px",
              fontWeight: 700,
              py: 1.2,
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              "&:hover": { bgcolor: "var(--saffron-light)" },
            }}
          >
            View Recipe
          </Button>
        </Box>
      </Box>

      <CardContent sx={{ p: 3.5 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {food.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: "var(--sage-light)",
                color: "var(--sage)",
                fontWeight: 700,
                fontSize: "0.7rem",
                borderRadius: "8px",
                border: "1px solid var(--sage-mist)",
              }}
            />
          ))}
          <Chip
            icon={
              <LocalFireDepartmentIcon
                sx={{ fontSize: "14px !important", color: "var(--saffron)" }}
              />
            }
            label={`${food.cals} kcal`}
            size="small"
            sx={{
              bgcolor: "var(--saffron-light)",
              color: "var(--saffron)",
              fontWeight: 700,
              fontSize: "0.7rem",
              borderRadius: "8px",
            }}
          />
        </Stack>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            color: "var(--charcoal)",
            mb: 1,
            lineHeight: 1.3,
            fontFamily: "'DM Serif Display', serif",
          }}
        >
          {food.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--warm-gray)",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {food.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
