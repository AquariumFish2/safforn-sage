import React from "react";
import { Box, Container, Grid, Typography, Stack, Button, Paper, AvatarGroup, Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function DietCommunity() {
  const navigate = useNavigate();

  const stats = [
    { label: "Healthy Recipes", value: "5,000+", icon: "🥗" },
    { label: "Community Members", value: "12k", icon: "👥" },
    { label: "Certified Nutritionists", value: "48", icon: "🍎" },
  ];

  return (
    <Box sx={{ mt: { xs: 10, md: 20 }, mb: 10, position: "relative", overflow: "hidden" }}>
      {/* Background Decorative Element */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          bgcolor: "#FFDBCF",
          opacity: 0.3,
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Side: Image & Social Proof */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  borderRadius: "40px",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(128, 42, 0, 0.15)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200"
                  alt="Healthy Lifestyle"
                  style={{ width: "100%", display: "block", transform: "scale(1.05)" }}
                />
              </Box>

              {/* Floating Social Proof Card */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  bottom: -30,
                  right: { xs: 10, md: -30 },
                  p: 3,
                  borderRadius: "24px",
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 224, 211, 0.5)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  zIndex: 3,
                  display: { xs: "none", sm: "block" }
                }}
              >
                <Stack spacing={2}>
                  <AvatarGroup max={4}>
                    <Avatar src="https://i.pravatar.cc/150?u=1" />
                    <Avatar src="https://i.pravatar.cc/150?u=2" />
                    <Avatar src="https://i.pravatar.cc/150?u=3" />
                    <Avatar src="https://i.pravatar.cc/150?u=4" />
                  </AvatarGroup>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#802A00" }}>
                    Join 12k+ healthy eaters
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </Grid>

          {/* Right Side: Content & Stats */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography 
                variant="overline" 
                sx={{ color: "#F95E14", fontWeight: 800, letterSpacing: 2, mb: 1, display: "block" }}
              >
                OUR COMMUNITY
              </Typography>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 900, 
                  fontFamily: "noto serif", 
                  color: "#1a1a1a", 
                  mb: 3,
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                  lineHeight: 1.2
                }}
              >
                Transform Your Life with a <br />
                <Box component="span" sx={{ color: "#802A00" }}>Curated Diet</Box>
              </Typography>
              
              <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.8, mb: 5, fontSize: "1.1rem" }}>
                Eating well shouldn't be a chore. We provide science-backed, Halal-focused meal plans 
                that adapt to your unique lifestyle. Join thousands of members who have already 
                discovered their perfect nutritional path.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 6 }}>
                {stats.map((stat, idx) => (
                  <Grid item xs={6} sm={4} key={idx}>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: "#802A00", mb: 0.5 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/recipes")}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: "16px",
                    bgcolor: "#802A00",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#5c1e00", transform: "translateY(-2px)" },
                    transition: "all 0.2s ease"
                  }}
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/pricing")}
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: "16px",
                    color: "#802A00",
                    borderColor: "#802A00",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": { borderColor: "#5c1e00", bgcolor: "#FFDBCF" },
                  }}
                >
                  View Premium Plans
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
