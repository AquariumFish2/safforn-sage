import {
  Box,
  Button,
  Stack,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import SmartFeatureImage from "../../../assets/images/smart-feature.jfif";
import CheckIcon from "@mui/icons-material/CheckCircle";
import AutoIcon from "@mui/icons-material/AutoAwesome";
import FoodIcon from "@mui/icons-material/LocalDining";
import LabIcon from "@mui/icons-material/Science";
import { useTranslation } from "react-i18next";

const DetectedItem = ({ icon: Icon, title, desc, color }) => (
  <Stack
    direction="row"
    spacing={2}
    sx={{
      p: 1.5,
      bgcolor: `var(--${color}-light)`,
      borderRadius: "14px",
      alignItems: "center",
    }}
  >
    <Avatar sx={{ bgcolor: "white", color: `var(--${color})` }}>
      <Icon />
    </Avatar>
    <Box>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="caption" sx={{ color: "var(--warm-gray)" }}>
        {desc}
      </Typography>
    </Box>
  </Stack>
);

export default function SmartFeature() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: { xs: 10, md: 18 },
        bgcolor: "var(--cream)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              direction="row"
              spacing={1}
              mb={2}
              sx={{ color: "var(--saffron)" }}
            >
              <AutoIcon fontSize="small" />
              <Typography
                variant="overline"
                sx={{ fontWeight: 700, letterSpacing: 3 }}
              >
                {t("smart_feature.overline")}
              </Typography>
            </Stack>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mb: 3 }}
            >
              {t("smart_feature.title_part1")}{" "}
              <Box
                component="span"
                sx={{ color: "var(--saffron)", fontStyle: "italic" }}
              >
                {t("smart_feature.title_part2")}
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
              {t("smart_feature.subtitle")}
            </Typography>
            <Stack spacing={2} mb={5}>
              {t("smart_feature.list", { returnObjects: true }).map(
                (txt, i) => (
                  <Stack
                    key={i}
                    direction="row"
                    spacing={2}
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "var(--sage-light)",
                        p: 0.5,
                        borderRadius: "50%",
                        display: "flex",
                      }}
                    >
                      <CheckIcon sx={{ color: "var(--sage)", fontSize: 22 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 600 }}>{txt}</Typography>
                  </Stack>
                ),
              )}
            </Stack>
            <Button
              variant="contained"
              sx={{
                bgcolor: "var(--saffron)",
                borderRadius: "14px",
                px: 5,
                py: 1.8,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { bgcolor: "var(--saffron-dark)" },
              }}
            >
              {t("smart_feature.cta")}
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.1)",
                }}
              >
                <Box sx={{ height: { xs: 240, md: 320 }, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={SmartFeatureImage}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ p: 4 }}>
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
                    {t("smart_feature.detection_status")}
                  </Typography>
                  <Stack spacing={2}>
                    <DetectedItem
                      icon={FoodIcon}
                      title={t("smart_feature.detected_item1_title")}
                      desc={t("smart_feature.detected_item1_desc")}
                      color="saffron"
                    />
                    <DetectedItem
                      icon={LabIcon}
                      title={t("smart_feature.detected_item2_title")}
                      desc={t("smart_feature.detected_item2_desc")}
                      color="sage"
                    />
                  </Stack>
                </Box>
              </Paper>
              <Paper
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  bgcolor: "var(--sage)",
                  color: "white",
                  p: 2,
                  borderRadius: "16px",
                  zIndex: 2,
                  boxShadow: "0 10px 30px rgba(74, 124, 89, 0.35)",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <CheckIcon fontSize="small" />
                  <Typography sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
                    {t("smart_feature.matched_badge")}
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
