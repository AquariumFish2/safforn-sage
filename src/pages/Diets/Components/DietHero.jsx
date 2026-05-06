import React from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function DietHero() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        pt: { xs: 12, md: 20 },
        pb: { xs: 14, md: 22 },
        textAlign: "center",
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(92, 30, 0, 0.8)), url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2000')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { md: "fixed" }, // Subtle parallax effect on desktop
        clipPath: "ellipse(150% 100% at 50% 0%)",
      }}
    >
      <Container maxWidth="md">
        <Chip
          icon={<AutoAwesomeIcon sx={{ color: "white !important", fontSize: "16px" }} />}
          label="Saffron & Sage Lifestyles"
          sx={{
            bgcolor: "rgba(255,255,255,0.15)",
            color: "white",
            fontWeight: 700,
            mb: 3,
            px: 1,
            backdropFilter: "blur(4px)",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontFamily: "noto serif",
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            mb: 3,
            textShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          The Art of{" "}
          <Box component="span" sx={{ color: "#FFDBCF" }}>
            Healthy
          </Box>{" "}
          Eating
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 650, mx: "auto", fontWeight: 400, lineHeight: 1.6 }}
        >
          Discover the perfect balance of nutrition and flavor. Our curated diets are designed 
          to nourish your soul while honoring your dietary choices.
        </Typography>
      </Container>
    </Box>
  );
}
