import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSearchParams, useLocation } from "react-router";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AuthLogo from "./components/AuthLogo";
import AuthSideContent from "./components/AuthSideContent";

export default function Auth() {
  const { i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  // Use a default state based on the search param 'mode'
  const [mode, setMode] = useState(searchParams.get("mode") === "signup" ? "signup" : "login");

  // Sync internal state with URL parameter
  useEffect(() => {
    const currentMode = searchParams.get("mode");
    setMode(currentMode === "signup" ? "signup" : "login");
  }, [searchParams]);

  const handleToggleMode = (newMode) => {
    setSearchParams({ mode: newMode });
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#FAFAFA", direction: i18n.dir() }}>
      {/* Left side - Form Container */}
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
          <AuthLogo />
          {mode === "login" ? (
            <LoginForm onToggleMode={handleToggleMode} />
          ) : (
            <RegisterForm onToggleMode={handleToggleMode} />
          )}
        </Stack>
      </Box>

      {/* Right side - Extracted Component */}
      <AuthSideContent />
    </Box>
  );
}
