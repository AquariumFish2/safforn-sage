import React from "react";
import {
  Box, Typography, Stack, Avatar, Rating, Paper,
  Container, Button, IconButton,
} from "@mui/material";
import hijabChef from "../../../assets/images/hijab-chef.jpg";
import AddIcon from "@mui/icons-material/Add";

const CHEFS = [
  {
    id: 1,
    name: "Chef Tariq",
    specialty: "Authentic Halal Grill",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 2,
    name: "Chef Fatima",
    specialty: "Middle Eastern Pastry",
    rating: 5,
    image: hijabChef,
  },
  {
    id: 3,
    name: "Chef Yusuf",
    specialty: "Mediterranean Fusion",
    rating: 4,
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

export default function AmazingChefs() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "var(--sage-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          bgcolor: "var(--sage-mist)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: "var(--sage)", fontWeight: 700, letterSpacing: 3 }}
          >
            Meet the Masters
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              mt: 1,
              color: "var(--charcoal)",
            }}
          >
            Follow the Most{" "}
            <Box component="span" sx={{ color: "var(--saffron)" }}>
              Amazing Chefs
            </Box>
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems={{ xs: "center", md: "stretch" }}
        >
          {CHEFS.map((chef, index) => {
            const isFeatured = index === 1;
            return (
              <Box
                key={chef.id}
                sx={{
                  position: "relative",
                  width: { xs: "90%", sm: "70%", md: isFeatured ? "360px" : "300px" },
                  textAlign: "center",
                  transition: "all 0.4s ease",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 4, md: isFeatured ? 5 : 4 },
                    borderRadius: "28px",
                    bgcolor: "white",
                    border: isFeatured
                      ? "2px solid var(--saffron)"
                      : "1px solid var(--border)",
                    boxShadow: isFeatured
                      ? "0 20px 48px rgba(128, 42, 0, 0.1)"
                      : "0 8px 24px rgba(0,0,0,0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 24px 48px rgba(128, 42, 0, 0.12)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", display: "inline-block", mb: 3 }}>
                    <Avatar
                      src={chef.image}
                      alt={chef.name}
                      sx={{
                        width: isFeatured ? { xs: 130, md: 150 } : { xs: 110, md: 120 },
                        height: isFeatured ? { xs: 130, md: 150 } : { xs: 110, md: 120 },
                        border: isFeatured
                          ? "4px solid var(--saffron)"
                          : "4px solid var(--sage-light)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      }}
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 2,
                        right: 2,
                        bgcolor: "var(--saffron)",
                        color: "white",
                        "&:hover": { bgcolor: "var(--saffron-dark)" },
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      fontWeight: 400,
                      mb: 0.5,
                      color: "var(--charcoal)",
                    }}
                  >
                    {chef.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "var(--warm-gray)", mb: 2, fontWeight: 500 }}
                  >
                    {chef.specialty}
                  </Typography>

                  <Rating
                    value={chef.rating}
                    readOnly
                    precision={0.5}
                    size="small"
                    sx={{ mb: 3, "& .MuiRating-iconFilled": { color: "var(--saffron)" } }}
                  />

                  <Button
                    variant={isFeatured ? "contained" : "outlined"}
                    sx={{
                      mt: "auto",
                      borderRadius: "14px",
                      px: 4,
                      py: 1.2,
                      textTransform: "none",
                      fontWeight: 700,
                      color: isFeatured ? "white" : "var(--saffron)",
                      bgcolor: isFeatured ? "var(--saffron)" : "transparent",
                      borderColor: "var(--saffron)",
                      "&:hover": {
                        bgcolor: isFeatured ? "var(--saffron-dark)" : "var(--saffron-light)",
                        borderColor: "var(--saffron)",
                      },
                    }}
                  >
                    View Profile
                  </Button>
                </Paper>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
