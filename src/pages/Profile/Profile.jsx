import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Button,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../supabase";
import { useNavigate, useLocation } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSuccess = queryParams.get("checkout") === "success";

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", py: 8 }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            textAlign: "center",
          }}
        >
          {isSuccess && (
            <Alert
              severity="success"
              icon={<CheckCircleIcon fontSize="inherit" />}
              sx={{ mb: 4, borderRadius: "16px", textAlign: "left" }}
            >
              <AlertTitle sx={{ fontWeight: "bold" }}>
                Subscription Activated!
              </AlertTitle>
              Welcome to the Saffron & Sage family. Your premium features are
              now unlocked.
            </Alert>
          )}
          <Avatar
            sx={{
              width: 100,
              height: 100,
              mx: "auto",
              mb: 3,
              bgcolor: "#FFDBCF",
              color: "#802A00",
            }}
          >
            <PersonIcon sx={{ fontSize: 50 }} />
          </Avatar>

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 1, color: "#1a1a1a" }}
          >
            {user?.user_metadata?.full_name || "User"}
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
            {user?.email}
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              startIcon={<LogoutIcon />}
              onClick={handleSignOut}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: "12px",
                bgcolor: "#802A00",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#5c1e00",
                },
              }}
            >
              Sign Out
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
