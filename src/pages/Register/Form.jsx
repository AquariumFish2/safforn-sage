import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  IconButton,
  InputAdornment,
  Divider,
  Alert,
  CircularProgress,
  Paper,
} from "@mui/material";
import { Link, useNavigate } from "react-router";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { supabase } from "../../supabase";
import imageSource from "../../assets/images/healthy-halal-food.jpg";

export default function FromRegister() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (error) throw error;

      setSuccess("Registration successful! Please check your email to confirm your account.");
      setFormData({ fullName: "", email: "", password: "" });
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });

      if (error) throw error;
    } catch (err) {
      setError(err.message || "Failed to sign up with Google.");
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#FAFAFA" }}>
      {/* Left side - Form */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, sm: 8, md: 12 },
          py: 8,
        }}
      >
        <Stack spacing={4} sx={{ maxWidth: 450, width: "100%", mx: "auto" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer", width: "fit-content", mb: 2 }}
          >
            <RestaurantMenuIcon sx={{ color: "#802A00", fontSize: 32 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#802A00",
                fontFamily: "noto serif",
              }}
            >
              Saffron & Sage
            </Typography>
          </Stack>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1 }}>
              Create an account
            </Typography>
            <Typography sx={{ color: "#666" }}>
              Join us to save your favorite recipes and plan your meals.
            </Typography>
          </Box>

          {error && <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ borderRadius: 2 }}>{success}</Alert>}

          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignUp}
            sx={{
              py: 1.5,
              borderRadius: "12px",
              color: "#444",
              borderColor: "#ddd",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#f5f5f5",
                borderColor: "#ccc",
              },
            }}
          >
            Sign up with Google
          </Button>

          <Divider sx={{ color: "#999", fontSize: "14px", "&::before, &::after": { borderColor: "#eee" } }}>
            or sign up with email
          </Divider>

          <Box component="form" onSubmit={handleEmailSignUp}>
            <Stack spacing={2.5}>
              <TextField
                label="Full Name"
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
                label="Email Address"
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
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
                {loading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
              </Button>
            </Stack>
          </Box>

          <Typography sx={{ textAlign: "center", color: "#666" }}>
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#802A00",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Log in
            </Link>
          </Typography>
        </Stack>
      </Box>

      {/* Right side - Image */}
      <Box
        sx={{
          flex: { xs: "0 0 0%", md: "1 1 50%" },
          display: { xs: "none", md: "block" },
          position: "relative",
          backgroundImage: `url(${imageSource})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(128,42,0,0.2), rgba(128,42,0,0.8))",
            display: "flex",
            alignItems: "flex-end",
            p: 8,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontFamily: "noto serif" }}>
              Nourishing the soul, one halal recipe at a time.
            </Typography>
            <Typography sx={{ fontSize: "16px", opacity: 0.9 }}>
              Discover thousands of meticulously curated halal recipes. From quick weekday dinners to elaborate weekend feasts.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
