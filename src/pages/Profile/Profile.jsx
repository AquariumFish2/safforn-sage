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
import { useNavigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function Profile() {
  const { t, i18n } = useTranslation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSuccess = queryParams.get("checkout") === "success";

  const handleSignOut = async () => {
    await signOut();
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
              sx={{ mb: 4, borderRadius: "16px", textAlign: i18n.language === 'ar' ? 'right' : 'left' }}
            >
              <AlertTitle sx={{ fontWeight: "bold" }}>
                {t("profile.success_title")}
              </AlertTitle>
              {t("profile.success_desc")}
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
            {user?.user_metadata?.full_name || t("profile.user_placeholder")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
            {user?.email}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
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
              {t("profile.sign_out")}
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
