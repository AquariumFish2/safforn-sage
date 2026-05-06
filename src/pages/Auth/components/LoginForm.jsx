import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import SocialLogin from "./SocialLogin";

export default function LoginForm({ onToggleMode }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await login(formData.email, formData.password);
      if (error) throw error;
      navigate("/profile");
    } catch (err) {
      setError(err.message || t("auth.errors.login_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1 }}>
          {t("auth.login.welcome")}
        </Typography>
        <Typography sx={{ color: "#666" }}>
          {t("auth.login.subtitle")}
        </Typography>
      </Box>

      {error && <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>}

      <SocialLogin type="login" onError={setError} />

      <Divider sx={{ color: "#999", fontSize: "14px", "&::before, &::after": { borderColor: "#eee" } }}>
        {t("auth.login.divider")}
      </Divider>

      <Box component="form" onSubmit={handleEmailSignIn}>
        <Stack spacing={2.5}>
          <TextField
            label={t("auth.login.email_label")}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "&.Mui-focused fieldset": { borderColor: "#802A00" },
              },
            }}
          />
          <TextField
            label={t("auth.login.password_label")}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"

            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "&.Mui-focused fieldset": { borderColor: "#802A00" },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              py: 1.5,
              borderRadius: "12px",
              bgcolor: "#802A00",
              fontWeight: 600,
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#5c1e00",
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : t("auth.login.button")}
          </Button>
        </Stack>
      </Box>

      <Typography sx={{ textAlign: "center", color: "#666" }}>
        {t("auth.login.no_account")}{" "}
        <Button
          onClick={() => onToggleMode("signup")}
          sx={{
            color: "#802A00",
            textTransform: "none",
            fontWeight: 600,
            p: 0,
            minWidth: 0,
            display: "inline-flex",
            verticalAlign: "baseline",
            "&:hover": { bgcolor: "transparent", textDecoration: "underline" }
          }}
        >
          {t("auth.login.signup_link")}
        </Button>
      </Typography>
    </Stack>
  );
}
