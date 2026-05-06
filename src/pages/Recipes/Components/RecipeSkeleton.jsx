import { Grid, Box, Skeleton, Stack } from "@mui/material";

export default function RecipeSkeleton() {
  return (
    <Grid container spacing={4} sx={{ mt: 1 }}>
      {[...Array(6)].map((_, i) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              bgcolor: "white",
              height: "100%",
            }}
          >
            <Skeleton
              variant="rectangular"
              height={220}
              animation="wave"
              sx={{ borderRadius: "20px 20px 0 0" }}
            />
            <Box sx={{ p: 2 }}>
              <Skeleton variant="text" width="80%" height={28} animation="wave" />
              <Skeleton
                variant="text"
                width="50%"
                height={20}
                animation="wave"
                sx={{ mt: 1 }}
              />
              <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
                <Skeleton
                  variant="rounded"
                  width={70}
                  height={24}
                  animation="wave"
                  sx={{ borderRadius: "8px" }}
                />
                <Skeleton
                  variant="rounded"
                  width={90}
                  height={24}
                  animation="wave"
                  sx={{ borderRadius: "8px" }}
                />
              </Stack>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
