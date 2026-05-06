import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../context/AuthContext";

export default function SocialLogin({ type, onError }) {
  const { t } = useTranslation();
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await signInWithGoogle(type === "signup" ? "/" : undefined);
      if (error) throw error;
    } catch (err) {
      onError(err.message || t("auth.errors.google_failed"));
    }
  };

  return (
    <Button
      variant="outlined"
      startIcon={<GoogleIcon />}
      onClick={handleGoogleSignIn}
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
      {type === "signup" ? t("auth.register.google") : t("auth.login.google")}
    </Button>
  );
}
