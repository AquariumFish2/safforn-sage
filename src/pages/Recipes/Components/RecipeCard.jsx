import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <Card
      onClick={() => navigate(`/recipes/${recipe.id}`)}
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(128, 42, 0, 0.15)",
          "& .recipe-image": {
            transform: "scale(1.08)",
          },
          "& .recipe-overlay": {
            opacity: 1,
          },
        },
      }}
    >
      {/* Image Container */}
      <Box sx={{ position: "relative", overflow: "hidden", height: 220, flexShrink: 0 }}>
        <CardMedia
          component="img"
          image={recipe.image || "https://via.placeholder.com/345x220"}
          alt={recipe.title}
          className="recipe-image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />

        {/* Gradient Overlay on hover */}
        <Box
          className="recipe-overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
            opacity: 0,
            transition: "opacity 0.35s ease",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 2,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {t("recipe_card.view_recipe")} {i18n.language === "ar" ? "←" : "→"}
          </Typography>
        </Box>

        {/* Favorite button */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
          }}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            width: 36,
            height: 36,
            "&:hover": {
              bgcolor: "white",
              "& .MuiSvgIcon-root": {
                color: "#E53935",
              },
            },
            transition: "all 0.2s ease",
          }}
        >
          <FavoriteIcon sx={{ fontSize: 18, color: "#ccc", transition: "color 0.2s" }} />
        </IconButton>

        {/* Ready time badge */}
        {recipe.readyInMinutes && (
          <Chip
            icon={<AccessTimeIcon sx={{ fontSize: 14, color: "white !important" }} />}
            label={`${recipe.readyInMinutes} ${t("recipe_card.min")}`}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontWeight: 600,
              fontSize: "12px",
              height: 28,
              "& .MuiChip-icon": { ml: 0.5 },
            }}
          />
        )}
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            color: "#1a1a1a",
            fontSize: "16px",
            lineHeight: 1.3,
            mb: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {recipe.title}
        </Typography>

        {/* Diet Tags */}
        <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap>
          {recipe.diets?.slice(0, 2).map((diet) => (
            <Chip
              key={diet}
              label={diet}
              size="small"
              sx={{
                bgcolor: "#FFF3EE",
                color: "#802A00",
                fontWeight: 600,
                fontSize: "11px",
                height: 24,
                borderRadius: "8px",
                border: "1px solid #FFE0D3",
              }}
            />
          ))}
        </Stack>
      </CardContent>

      {/* Bottom Stats Bar */}
      <Box
        sx={{
          px: 2.5,
          pb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #f5f5f5",
          pt: 1.5,
        }}
      >
        {recipe.healthScore !== undefined && (
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <LocalFireDepartmentIcon sx={{ fontSize: 16, color: "#F95E14" }} />
            <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#666" }}>
              {t("recipe_card.health")}: {recipe.healthScore}%
            </Typography>
          </Stack>
        )}
        {recipe.servings && (
          <Typography sx={{ fontSize: "12px", color: "#999" }}>
            {recipe.servings} {t("recipe_card.servings")}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
