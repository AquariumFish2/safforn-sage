import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import QuinoaTabouliImage from "../../../assets/images/quinoa-tabouli.png";
import HeartyLentilStewImage from "../../../assets/images/hearty-lentil-stew.png";
import GrilledHalalChickenSaladImage from "../../../assets/images/grilled-halal-chicken-salad.png";
import FireIcon from "@mui/icons-material/LocalFireDepartment";
import HeartIcon from "@mui/icons-material/FavoriteBorder";
import ArrowIcon from "@mui/icons-material/ArrowForward";

const FOODS = [
  {
    key: "quinoa_tabouli",
    image: QuinoaTabouliImage,
    cals: 240,
    tags: ["vegan"],
  },
  {
    key: "grilled_chicken",
    image: GrilledHalalChickenSaladImage,
    cals: 450,
    tags: ["high_protein"],
  },
  {
    key: "lentil_stew",
    image: HeartyLentilStewImage,
    cals: 320,
    tags: ["comfort"],
  },
];

const RecipeCard = ({ food, t }) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: "24px",
      border: "1px solid var(--border)",
      transition: "0.4s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 24px 48px rgba(128,42,0,0.1)",
        "& .view": { opacity: 1 },
      },
    }}
  >
    <Box sx={{ position: "relative" }}>
      <CardMedia component="img" height="300" image={food.image} />
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          bgcolor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <HeartIcon sx={{ color: "var(--saffron)" }} />
      </IconButton>
      <Box
        className="view"
        sx={{
          position: "absolute",
          bottom: 16,
          left: "10%",
          right: "10%",
          opacity: 0,
          transition: "0.3s",
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
            "&:hover": { bgcolor: "var(--saffron-light)" },
          }}
        >
          {t("food_cards.view_recipe")}
        </Button>
      </Box>
    </Box>
    <CardContent sx={{ p: 3.5 }}>
      <Stack direction="row" spacing={1} mb={2}>
        {food.tags.map((tag) => (
          <Chip
            key={tag}
            label={t(`recipes.tags.${tag}`)}
            size="small"
            sx={{
              bgcolor: "var(--sage-light)",
              color: "var(--sage)",
              fontWeight: 700,
              borderRadius: "8px",
            }}
          />
        ))}
        <Chip
          icon={
            <FireIcon
              sx={{ fontSize: "14px !important", color: "var(--saffron)" }}
            />
          }
          label={`${food.cals} kcal`}
          size="small"
          sx={{
            bgcolor: "var(--saffron-light)",
            color: "var(--saffron)",
            fontWeight: 700,
            borderRadius: "8px",
          }}
        />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontWeight: 400, fontFamily: "'DM Serif Display', serif", mb: 1 }}
      >
        {t(`recipes.${food.key}.name`)}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "var(--warm-gray)",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {t(`recipes.${food.key}.desc`)}
      </Typography>
    </CardContent>
  </Card>
);

export default function FoodCards() {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: "var(--cream)" }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            mb: 7,
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "var(--sage)", fontWeight: 700, letterSpacing: 3 }}
            >
              {t("food_cards.overline")}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mt: 1 }}
            >
              {t("food_cards.title_part1")}{" "}
              <Box component="span" sx={{ color: "var(--saffron)" }}>
                {t("food_cards.title_part2")}
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
                }}
              >
                <ArrowIcon sx={{ fontSize: 16 }} />
              </Box>
            }
            sx={{
              borderColor: "var(--saffron)",
              color: "var(--saffron)",
              borderRadius: "100px",
              px: 3,
              py: 1.2,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                bgcolor: "var(--saffron)",
                color: "white",
                "& .MuiButton-endIcon Box": {
                  bgcolor: "white",
                  color: "var(--saffron)",
                },
              },
            }}
          >
            {t("food_cards.view_all")}
          </Button>
        </Stack>
        <Grid container spacing={4}>
          {FOODS.map((food) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={food.key}>
              <RecipeCard food={food} t={t} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
