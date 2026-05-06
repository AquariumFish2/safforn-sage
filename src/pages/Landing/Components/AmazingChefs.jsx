import {
  Box,
  Typography,
  Stack,
  Avatar,
  Rating,
  Paper,
  Container,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import hijabChef from "../../../assets/images/hijab-chef.jpg";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

const CHEFS = [
  {
    id: 1,
    key: "tariq",
    rating: 4.5,
    recipes: 120,
    followers: "4.8k",
    exp: 12,
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 2,
    key: "fatima",
    rating: 5,
    recipes: 85,
    followers: "12k",
    exp: 8,
    image: hijabChef,
  },
  {
    id: 3,
    key: "yusuf",
    rating: 4.5,
    recipes: 150,
    followers: "3.2k",
    exp: 15,
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

const Stat = ({ val, label }) => (
  <Box sx={{ textAlign: "center" }}>
    <Typography
      sx={{ fontWeight: 800, color: "var(--saffron)", fontSize: "1.1rem" }}
    >
      {val}
    </Typography>
    <Typography
      variant="caption"
      sx={{ color: "var(--warm-gray)", fontWeight: 600 }}
    >
      {label}
    </Typography>
  </Box>
);

const ChefCard = ({ chef, isFeatured, t }) => (
  <Box
    sx={{
      position: "relative",
      width: { xs: "100%", sm: "80%", md: isFeatured ? "360px" : "300px" },
      zIndex: isFeatured ? 2 : 1,
      transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "&:hover": {
        "& .meta": { transform: "translateY(0)", opacity: 1 },
        "& .content": { transform: "translateY(-20px)" },
      },
    }}
  >
    <Paper
      elevation={0}
      sx={{
        borderRadius: "32px",
        bgcolor: "white",
        overflow: "hidden",
        height: "480px",
        position: "relative",
        border: isFeatured
          ? "2px solid var(--saffron)"
          : "1px solid var(--border)",
        boxShadow: isFeatured
          ? "0 20px 60px rgba(128,42,0,0.12)"
          : "0 10px 30px rgba(0,0,0,0.04)",
      }}
    >
      <Stack
        className="content"
        spacing={1}
        sx={{
          p: 4,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.4s",
        }}
      >
        <Box sx={{ position: "relative", mb: 2 }}>
          <Avatar
            src={chef.image}
            sx={{
              width: isFeatured ? 140 : 120,
              height: isFeatured ? 140 : 120,
              border: `4px solid ${isFeatured ? "var(--saffron)" : "var(--sage-light)"}`,
              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
            }}
          />
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              bottom: 4,
              right: 4,
              bgcolor: "var(--saffron)",
              color: "white",
              "&:hover": { bgcolor: "var(--saffron-dark)" },
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 800, fontFamily: "'DM Serif Display', serif" }}
        >
          {t(`chefs.${chef.key}.name`)}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--warm-gray)", fontWeight: 500 }}
        >
          {t(`chefs.${chef.key}.specialty`)}
        </Typography>
        <Rating
          value={chef.rating}
          readOnly
          precision={0.5}
          size="small"
          sx={{
            mb: 2,
            direction: "ltr",
            "& .MuiRating-iconFilled": { color: "var(--saffron)" },
          }}
        />
        <Button
          variant={isFeatured ? "contained" : "outlined"}
          sx={{
            borderRadius: "100px",
            px: 4,
            textTransform: "none",
            fontWeight: 700,
            borderColor: "var(--saffron)",
            bgcolor: isFeatured ? "var(--saffron)" : "transparent",
            color: isFeatured ? "white" : "var(--saffron)",
            "&:hover": {
              bgcolor: isFeatured
                ? "var(--saffron-dark)"
                : "var(--saffron-light)",
            },
          }}
        >
          {t("amazing_chefs.view_profile")}
        </Button>
      </Stack>
      <Stack
        className="meta"
        direction="row"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 30, my: "auto" }}
          />
        }
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          bgcolor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid var(--border)",
          transition: "0.4s",
          opacity: 0,
          transform: "translateY(100%)",
          justifyContent: "space-around",
        }}
      >
        <Stat val={chef.recipes} label={t("amazing_chefs.recipes")} />
        <Stat val={chef.followers} label={t("amazing_chefs.followers")} />
        <Stat val={chef.exp + "+"} label={t("amazing_chefs.exp")} />
      </Stack>
    </Paper>
  </Box>
);

export default function AmazingChefs() {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: "var(--sage-light)" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "var(--sage)", fontWeight: 700, letterSpacing: 3 }}
          >
            {t("amazing_chefs.overline")}
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mt: 1 }}
          >
            {t("amazing_chefs.title_part1")}{" "}
            <Box component="span" sx={{ color: "var(--saffron)" }}>
              {t("amazing_chefs.title_part2")}
            </Box>
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            gap: { xs: 4, md: 8 },
            flexWrap: "wrap",
            mt: 6,
            justifyContent: "center",
            alignItems: { xs: "center", md: "stretch" },
          }}
        >
          {CHEFS.map((chef, i) => (
            <ChefCard key={chef.id} chef={chef} isFeatured={i === 1} t={t} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
