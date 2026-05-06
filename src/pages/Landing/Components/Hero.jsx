import {
  Box,
  Button,
  OutlinedInput,
  Stack,
  Typography,
  Container,
  Grid,
  InputAdornment,
} from "@mui/material";
import HeroImage from "../../../assets/images/hero.webp";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "var(--cream)" }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Stack
                direction="row"
                spacing={1}
                mb={2}
                sx={{ color: "var(--saffron)" }}
              >
                <AutoAwesomeIcon fontSize="small" />
                <Typography variant="overline" sx={{ fontWeight: 700 }}>
                  {t("hero.badge")}
                </Typography>
              </Stack>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "3rem", md: "4.8rem" },
                  mb: 3.5,
                  lineHeight: 1.1,
                }}
              >
                {t("hero.title_part1")} <br /> {t("hero.title_part2")}{" "}
                <Box
                  component="span"
                  sx={{ color: "var(--saffron)", fontStyle: "italic" }}
                >
                  {t("hero.title_part3")}
                </Box>{" "}
                {t("hero.title_part4")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "var(--warm-gray)",
                  fontSize: "1.15rem",
                  mb: 5,
                  lineHeight: 1.8,
                  maxWidth: 500,
                }}
              >
                {t("hero.subtitle")}
              </Typography>
              <Box
                sx={{
                  bgcolor: "white",
                  p: 1.5,
                  borderRadius: "24px",
                  boxShadow: "0 20px 50px rgba(128, 42, 0, 0.08)",
                  display: "flex",
                  gap: 1.5,
                  flexDirection: { xs: "column", sm: "row" },
                  border: "1px solid rgba(128, 42, 0, 0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 25px 60px rgba(128, 42, 0, 0.12)",
                  },
                }}
              >
                <OutlinedInput
                  fullWidth
                  placeholder={t("hero.search_placeholder")}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "var(--saffron)", ml: 1 }} />
                    </InputAdornment>
                  }
                  sx={{
                    borderRadius: "18px",
                    "& fieldset": { border: "none" },
                    bgcolor: "rgba(128, 42, 0, 0.02)",
                    "& .MuiOutlinedInput-input": {
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  startIcon={<PhotoCameraIcon />}
                  sx={{
                    bgcolor: "var(--saffron)",
                    borderRadius: "18px",
                    px: 5,
                    py: { xs: 1.8, sm: 2 },
                    fontWeight: 800,
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "0 8px 24px rgba(249, 94, 20, 0.25)",
                    "&:hover": {
                      bgcolor: "var(--saffron-dark)",
                      boxShadow: "0 12px 30px rgba(249, 94, 20, 0.35)",
                      transform: "scale(1.02)",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {t("hero.scan_button")}
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  height: { xs: "380px", md: "600px" },
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={HeroImage}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "8s",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />
              </Box>
              
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
