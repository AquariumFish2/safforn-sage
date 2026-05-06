import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  Divider,
  Collapse,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PricingCard from "./components/PricingCard";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import { tiers } from "./pricingData";



export default function Pricing() {
  return (
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh" }}>
      {/* Hero */}
      <Hero></Hero>

      {/* Cards */}
      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <Grid container spacing={3} sx={{justifyContent:"center" }}>
          {tiers.map((tier) => (
            <Grid item xs={12} md={4} key={tier.title} sx={{ display: "flex"}}>
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
            Not sure where to start?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 4, maxWidth: 460, mx: "auto" }}>
            Try the Smart plan free for 14 days. No credit card required.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
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
              Start free trial
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
                "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              Contact us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
