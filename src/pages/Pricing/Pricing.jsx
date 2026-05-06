import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import PricingCard from "./components/PricingCard";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import { tiers } from "./pricingData";

export default function Pricing() {
  const { t } = useTranslation();
  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh" }}>
      {/* Hero */}
      <Hero></Hero>

      {/* Cards */}
      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {tiers.map((tier) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={tier.title}
              sx={{ display: "flex" }}
            >
              <PricingCard tier={tier} />
            </Grid>
          ))}
        </Grid>

        {/* FAQ */}
        <FAQ></FAQ>

        {/* CTA */}
        <Box
          sx={{
            mt: 12,
            textAlign: "center",
            p: { xs: 5, md: 8 },
            borderRadius: "32px",
            background: "linear-gradient(135deg, #802A00 0%, #b83d00 100%)",
            boxShadow: "0 20px 60px rgba(128,42,0,0.25)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "white",
              mb: 1.5,
              fontFamily: "noto serif",
              fontSize: { xs: "1.6rem", md: "2rem" },
            }}
          >
            {t("pricing.cta.title")}
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              mb: 4,
              maxWidth: 460,
              mx: "auto",
            }}
          >
            {t("pricing.cta.subtitle")}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                py: 1.6,
                px: 5,
                borderRadius: "14px",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                bgcolor: "white",
                color: "#802A00",
                "&:hover": { bgcolor: "#FFDBCF" },
              }}
            >
              {t("pricing.cta.start_trial")}
            </Button>
            <Button
              variant="outlined"
              sx={{
                py: 1.6,
                px: 5,
                borderRadius: "14px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                color: "white",
                borderColor: "rgba(255,255,255,0.45)",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {t("pricing.cta.contact")}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
