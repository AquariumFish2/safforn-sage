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
import { useAuth } from "../../../context/AuthContext";
import SocialLogin from "./SocialLogin";

export default function RegisterForm({ onToggleMode }) {
  const { t } = useTranslation();
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });


  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const { error } = await signUp(formData.email, formData.password, formData.fullName);
      if (error) throw error;
      setSuccess(t("auth.errors.register_success"));
      setFormData({ fullName: "", email: "", password: "" });
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1 }}>
          {t("auth.register.title")}
        </Typography>
        <Typography sx={{ color: "#666" }}>
          {t("auth.register.subtitle")}
        </Typography>
      </Box>

      {error && <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ borderRadius: 2 }}>{success}</Alert>}

      <SocialLogin type="signup" onError={setError} />

      <Divider sx={{ color: "#999", fontSize: "14px", "&::before, &::after": { borderColor: "#eee" } }}>
        {t("auth.register.divider")}
      </Divider>

      <Box component="form" onSubmit={handleEmailSignUp}>
        <Stack spacing={2.5}>
          <TextField
            label={t("auth.register.full_name_label")}
            name="fullName"
            value={formData.fullName}
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
            label={t("auth.register.email_label")}
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
            label={t("auth.register.password_label")}
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
            {loading ? <CircularProgress size={24} color="inherit" /> : t("auth.register.button")}
          </Button>
        </Stack>
      </Box>

      <Typography sx={{ textAlign: "center", color: "#666" }}>
        {t("auth.register.has_account")}{" "}
        <Button
          onClick={() => onToggleMode("login")}
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
          {t("auth.register.login_link")}
        </Button>
      </Typography>
    </Stack>
  );
}
