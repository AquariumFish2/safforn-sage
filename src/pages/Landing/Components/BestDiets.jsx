import React from "react";
import {
  Box, Typography, Grid, Button, Stack, Container, Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const FEATURES = [
  "Customized meal plans based on your caloric needs",
  "Over 1,000+ keto, vegan, and balanced recipes",
  "Weekly grocery lists perfectly matched to your diet",
  "Track your daily macros seamlessly in our app",
];

export default function BestDiets() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 18 },
        bgcolor: "var(--sage-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: "300px",
          height: "300px",
          bgcolor: "var(--sage-mist)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Image Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "0 24px 56px rgba(0,0,0,0.1)",
                  border: "1px solid var(--border)",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200"
                  alt="Healthy Diet Meal"
                  sx={{ width: "100%", display: "block" }}
                />
              </Box>

              {/* Floating Accent Card */}
              <Paper
                elevation={0}
                className="gentle-float"
                sx={{
                  position: "absolute",
                  top: { xs: -16, md: -28 },
                  right: { xs: 8, md: -28 },
                  p: 2.5,
                  borderRadius: "18px",
                  bgcolor: "var(--saffron)",
                  color: "white",
                  display: { xs: "none", sm: "block" },
                  zIndex: 3,
                  boxShadow: "0 16px 36px rgba(128, 42, 0, 0.25)",
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <AutoAwesomeIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Certified Expert Plans
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>

          {/* Content Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "var(--sage-dark)",
                  fontWeight: 700,
                  letterSpacing: 3,
                  mb: 1,
                  display: "block",
                }}
              >
                Lifestyle & Planning
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  mb: 3,
                  lineHeight: 1.15,
                  color: "var(--charcoal)",
                }}
              >
                Follow the Best{" "}
                <Box
                  component="span"
                  sx={{ color: "var(--saffron)", fontStyle: "italic" }}
                >
                  Diets & Planning
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "var(--warm-gray)",
                  fontSize: "1.1rem",
                  mb: 5,
                  lineHeight: 1.8,
                }}
              >
                Discover tailored nutritional plans to hit your health goals.
                Whether you're looking for Keto, Mediterranean, or a Balanced
                Vegan diet, our experts have hand-crafted the perfect path for
                you.
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 5 }}>
                {FEATURES.map((feature, idx) => (
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: "center" }}
                    key={idx}
                  >
                    <Box
                      sx={{
                        bgcolor: "white",
                        p: 0.5,
                        borderRadius: "50%",
                        display: "flex",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                      }}
                    >
                      <CheckCircleIcon sx={{ color: "var(--sage)", fontSize: 20 }} />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "var(--charcoal)" }}
                    >
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: "14px",
                  px: 5,
                  py: 1.8,
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  bgcolor: "var(--saffron)",
                  boxShadow: "0 8px 24px rgba(128, 42, 0, 0.2)",
                  "&:hover": { bgcolor: "var(--saffron-dark)" },
                }}
              >
                Explore All Meal Plans
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
