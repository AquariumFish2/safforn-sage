import React from "react";
import {
  Box, Button, Stack, Typography, Container,
  Grid, Paper, Avatar,
} from "@mui/material";
import SmartFeatureImage from "../../../assets/images/smart-feature.jfif";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ScienceIcon from "@mui/icons-material/Science";

export default function SmartFeature() {
  return (
    <Box sx={{ py: { xs: 10, md: 18 }, bgcolor: "var(--cream)", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Content Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <AutoAwesomeIcon sx={{ color: "var(--saffron)", fontSize: 20 }} />
                <Typography
                  variant="overline"
                  sx={{ fontWeight: 700, letterSpacing: 3, color: "var(--saffron)" }}
                >
                  AI-Powered Kitchen
                </Typography>
              </Stack>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  mb: 3,
                  lineHeight: 1.15,
                  color: "var(--charcoal)",
                }}
              >
                Halal Scan: From{" "}
                <Box component="span" sx={{ color: "var(--saffron)", fontStyle: "italic" }}>
                  Pantry to Plate
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
                Not sure what to cook? Snap a photo of your ingredients. Our
                intelligent engine instantly suggests healthy, delicious halal
                recipes you can cook right now.
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 5 }}>
                {[
                  "Recognizes fresh produce & staples.",
                  "Filters exclusively for halal eats.",
                  "Prioritizes your health goals.",
                ].map((text, i) => (
                  <Stack key={i} direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        bgcolor: "var(--sage-light)",
                        p: 0.5,
                        borderRadius: "50%",
                        display: "flex",
                      }}
                    >
                      <CheckCircleIcon sx={{ color: "var(--sage)", fontSize: 22 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 600, color: "var(--charcoal)" }}>
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "var(--saffron)",
                  borderRadius: "14px",
                  px: 5,
                  py: 1.8,
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 8px 24px rgba(128, 42, 0, 0.2)",
                  "&:hover": { bgcolor: "var(--saffron-dark)" },
                }}
              >
                Try Halal Scan Now
              </Button>
            </Box>
          </Grid>

          {/* Visual Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              {/* Decorative background */}
              <Box
                sx={{
                  position: "absolute",
                  top: "8%",
                  left: "8%",
                  width: "100%",
                  height: "100%",
                  bgcolor: "var(--saffron-light)",
                  borderRadius: "32px",
                  zIndex: 0,
                  transform: "rotate(3deg)",
                }}
              />

              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.1)",
                  bgcolor: "white",
                  border: "1px solid var(--border)",
                }}
              >
                <Box sx={{ height: { xs: 240, md: 320 }, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={SmartFeatureImage}
                    alt="AI Recognition"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "var(--warm-gray)",
                      fontWeight: 700,
                      letterSpacing: 2,
                      mb: 2,
                      display: "block",
                    }}
                  >
                    AI DETECTION IN PROGRESS…
                  </Typography>

                  <Stack spacing={2}>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{
                        p: 1.5,
                        bgcolor: "var(--saffron-light)",
                        borderRadius: "14px",
                      }}
                    >
                      <Avatar sx={{ bgcolor: "white", color: "var(--saffron)" }}>
                        <LocalDiningIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          Spices & Herbs Detected
                        </Typography>
                        <Typography variant="caption" sx={{ color: "var(--warm-gray)" }}>
                          Matching with 12 recipes…
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{
                        p: 1.5,
                        bgcolor: "var(--sage-light)",
                        borderRadius: "14px",
                      }}
                    >
                      <Avatar sx={{ bgcolor: "white", color: "var(--sage)" }}>
                        <ScienceIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>
                          100% Halal Verified
                        </Typography>
                        <Typography variant="caption" sx={{ color: "var(--warm-gray)" }}>
                          Scanning ingredient database
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
              </Paper>

              {/* Floating Success Badge */}
              <Paper
                elevation={0}
                className="gentle-float"
                sx={{
                  position: "absolute",
                  top: { xs: -12, md: -20 },
                  right: { xs: 8, md: -20 },
                  bgcolor: "var(--sage)",
                  color: "white",
                  p: 2,
                  borderRadius: "16px",
                  zIndex: 2,
                  boxShadow: "0 10px 30px rgba(74, 124, 89, 0.35)",
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckCircleIcon fontSize="small" />
                  <Typography sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
                    Ingredients Matched!
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
