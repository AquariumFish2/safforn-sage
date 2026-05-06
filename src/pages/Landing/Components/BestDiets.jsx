import {
  Box, Typography, Grid, Button, Stack, Container, Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useTranslation } from "react-i18next";

export default function BestDiets() {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: { xs: 10, md: 18 }, bgcolor: "var(--sage-light)" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }} >
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
                <Stack direction="row" spacing={1} sx={{alignItems:"center"}}>
                  <AutoAwesomeIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {t("best_diets.expert_badge")}
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
                {t("best_diets.overline")}
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
                {t("best_diets.title_part1")}{" "}
                <Box
                  component="span"
                  sx={{ color: "var(--saffron)", fontStyle: "italic" }}
                >
                  {t("best_diets.title_part2")}
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
                {t("best_diets.subtitle")}
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 5 }}>
                {t("best_diets.features", { returnObjects: true }).map((feature, idx) => (
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
                {t("best_diets.cta")}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
