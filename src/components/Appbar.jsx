import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";

const pages = [
  { name: "Recipes", key: "nav.recipes", path: "/recipes" },
  { name: "Pricing", key: "nav.pricing", path: "/pricing" },
  { name: "Diets", key: "nav.diets", path: "/diets" },
];

function ResponsiveAppBar({ handleDrawerOpen }) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { t, i18n } = useTranslation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "noto serif",
              fontWeight: "bold",
              color: "#802A00",
              cursor: "pointer",
            }}
          >
            Saffron & Sage
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#802A00",
              textDecoration: "none",
            }}
          >
            Saffron & Sage
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  "&:hover": { bgcolor: "#FFDBCF" },
                }}
              >
                {t(page.key)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <IconButton
              onClick={toggleLanguage}
              sx={{ color: "#802A00", mr: 2,borderRadius:4 }}
            >
              <LanguageIcon />
              <Typography variant="body2" sx={{ ml: 0.5, fontWeight: "bold" }}>
                {i18n.language === "en" ? "AR" : "EN"}
              </Typography>
            </IconButton>
            {!user ? (
              <>
                <Button 
                  variant="contained" 
                  sx={{ bgcolor: "#802A00", mr: 2, "&:hover": { bgcolor: "#5c1e00" } }}
                  onClick={() => navigate("/auth?mode=signup")}
                >
                  {t("nav.signup")}
                </Button>
                <Button 
                  sx={{ color: "#802A00" }}
                  onClick={() => navigate("/auth?mode=login")}
                >
                  {t("nav.login")}
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="contained" 
                  sx={{ bgcolor: "#802A00", mr: 2, "&:hover": { bgcolor: "#5c1e00" } }}
                  onClick={() => navigate("/profile")}
                >
                  {t("nav.profile")}
                </Button>
                <Button 
                  sx={{ color: "#802A00" }}
                  onClick={handleSignOut}
                >
                  {t("nav.logout")}
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
