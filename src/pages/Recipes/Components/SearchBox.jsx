import { Box, Stack, Typography, OutlinedInput, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TuneIcon from "@mui/icons-material/Tune";
import { useTranslation } from "react-i18next";

export default function SearchBox({ query, setQuery, handleSearch, showFilters, setShowFilters }) {
  const { t } = useTranslation();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #802A00 0%, #B8450A 50%, #F95E14 100%)",
        borderRadius: "20px",
        p: { xs: 3, md: 5 },
        mb: 3,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-30%",
          left: "-10%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.03)",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", mb: 2, position: "relative", zIndex: 1 }}
      >
        <RestaurantMenuIcon sx={{ color: "#FFDBCF", fontSize: 28 }} />
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: 600,
            fontFamily: "noto serif",
          }}
        >
          {t("filters.craving_title")}
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <OutlinedInput
          placeholder={t("filters.search_placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          startAdornment={
            <SearchIcon sx={{ color: "#999", mr: 1 }} />
          }
          sx={{
            bgcolor: "white",
            borderRadius: "30px",
            flex: 1,
            px: 1,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "2px solid #F95E14",
            },
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          startIcon={<SearchIcon />}
          sx={{
            bgcolor: "#1a1a1a",
            borderRadius: "30px",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            "&:hover": {
              bgcolor: "#333",
              transform: "translateY(-1px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            },
            transition: "all 0.2s ease",
          }}
        >
          {t("filters.search_button")}
        </Button>
        <IconButton
          onClick={() => setShowFilters(!showFilters)}
          sx={{
            bgcolor: showFilters ? "#FFDBCF" : "rgba(255,255,255,0.15)",
            color: showFilters ? "#802A00" : "white",
            borderRadius: "50%",
            width: 50,
            height: 50,
            "&:hover": {
              bgcolor: showFilters ? "#FFDBCF" : "rgba(255,255,255,0.25)",
            },
            transition: "all 0.2s ease",
          }}
        >
          <TuneIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
