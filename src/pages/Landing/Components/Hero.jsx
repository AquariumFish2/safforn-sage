import React from "react";
import {
  Box, Button, OutlinedInput, Stack, Typography,
  Container, Grid, InputAdornment, Paper,
} from "@mui/material";
import HeroImage from "../../../assets/images/hero.webp";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "auto", md: "92vh" },
        bgcolor: "var(--cream)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Decorative sage shape behind the image */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "52%",
          height: "120%",
          bgcolor: "var(--sage-light)",
          zIndex: 0,
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          display: { xs: "none", md: "block" },
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left — Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: 620 }}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                className="fade-up"
                sx={{ mb: 2.5 }}
              >
                <AutoAwesomeIcon sx={{ color: "var(--saffron)", fontSize: 20 }} />
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 2.5,
                    color: "var(--saffron)",
                    fontSize: "0.8rem",
                  }}
                >
                  AI‑Powered Halal Kitchen
                </Typography>
              </Stack>

              <Typography
                variant="h1"
                className="fade-up"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "3rem", sm: "4rem", md: "4.8rem" },
                  lineHeight: 1.1,
                  mb: 3.5,
                  color: "var(--charcoal)",
                  animationDelay: "0.1s",
                }}
              >
                Nourish Your Soul{" "}
                <br />
                With{" "}
                <Box
                  component="span"
                  sx={{
                    color: "var(--saffron)",
                    fontStyle: "italic",
                  }}
                >
                  Halal
                </Box>{" "}
                Cuisine.
              </Typography>

              <Typography
                variant="body1"
                className="fade-up"
                sx={{
                  color: "var(--warm-gray)",
                  fontSize: "1.15rem",
                  mb: 5,
                  lineHeight: 1.8,
                  maxWidth: 500,
                  animationDelay: "0.2s",
                }}
              >
                Explore thousands of curated healthy recipes designed to fit
                your lifestyle — scan ingredients, discover new dishes, and
                plan meals with the smartest halal food companion.
              </Typography>

              {/* Search Bar */}
              <Box
                className="fade-up"
                sx={{
                  bgcolor: "white",
                  p: 1,
                  borderRadius: "20px",
                  boxShadow: "0 16px 48px rgba(128, 42, 0, 0.08)",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.5,
                  animationDelay: "0.3s",
                }}
              >
                <OutlinedInput
                  fullWidth
                  placeholder="Find recipes, ingredients…"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "var(--saffron)" }} />
                    </InputAdornment>
                  }
                  sx={{
                    borderRadius: "14px",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    bgcolor: "#F9F7F4",
                  }}
                />
                <Button
                  variant="contained"
                  startIcon={<PhotoCameraIcon />}
                  sx={{
                    bgcolor: "var(--saffron)",
                    borderRadius: "14px",
                    px: 4,
                    py: 1.8,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    textTransform: "none",
                    fontSize: "0.95rem",
                    boxShadow: "0 8px 24px rgba(128, 42, 0, 0.25)",
                    "&:hover": { bgcolor: "var(--saffron-dark)" },
                  }}
                >
                  Scan Recipe
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right — Image + Floating Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "380px", md: "600px" },
                  width: "100%",
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={HeroImage}
                  alt="Delicious Halal Food"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 8s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />
                {/* Soft saffron overlay tint */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(128, 42, 0, 0.06)",
                  }}
                />
              </Box>

              {/* Floating Stats Card */}
              <Paper
                elevation={0}
                className="gentle-float"
                sx={{
                  position: "absolute",
                  bottom: { xs: "-12%", md: "8%" },
                  left: { xs: "50%", md: "-8%" },
                  transform: { xs: "translateX(-50%)", md: "none" },
                  p: 2.5,
                  borderRadius: "20px",
                  bgcolor: "white",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                  border: "1px solid var(--border)",
                  zIndex: 2,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      bgcolor: "var(--sage-light)",
                      p: 1.5,
                      borderRadius: "14px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "var(--saffron)", fontWeight: 700, fontFamily: "'DM Serif Display', serif" }}
                    >
                      12k
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "var(--charcoal)" }}>
                      Healthy Recipes
                    </Typography>
                    <Typography variant="caption" sx={{ color: "var(--warm-gray)" }}>
                      Curated by world-class chefs
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
