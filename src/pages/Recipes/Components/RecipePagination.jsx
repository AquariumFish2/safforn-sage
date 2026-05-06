import { Box, Pagination } from "@mui/material";
import { useRecipes } from "../../../context/RecipesContext";

export default function RecipePagination() {
  const { totalPages, page, handlePageChange, loading } = useRecipes();

  if (totalPages <= 1 || loading) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
        mb: 2,
      }}
    >
      <Pagination
        count={totalPages > 50 ? 50 : totalPages}
        page={page}
        onChange={handlePageChange}
        size="large"
        sx={{
          "& .MuiPaginationItem-root": {
            fontWeight: 600,
            borderRadius: "12px",
            mx: 0.3,
            "&:hover": {
              bgcolor: "#FFDBCF",
            },
            "&.Mui-selected": {
              bgcolor: "#802A00",
              color: "white",
              "&:hover": {
                bgcolor: "#5c1e00",
              },
            },
          },
        }}
      />
    </Box>
  );
}
