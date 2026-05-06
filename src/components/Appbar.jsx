import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabase";

import { useNavigate } from "react-router";

const pages = ["Recipes", "Pricing", "Diets"];

function ResponsiveAppBar({ handleDrawerOpen }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
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
                key={page}
                onClick={() => {
                  if (page === "Recipes") {
                    navigate("/recipes");
                  }
                  if (page === "Pricing") {
                    navigate("/pricing");
                  }
                  if (page === "Diets") {
                    navigate("/diets");
                  }
                }}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  "&:hover": { bgcolor: "#FFDBCF" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
            {!user ? (
              <>
                <Button 
                  variant="contained" 
                  sx={{ bgcolor: "#802A00", mr: 2, "&:hover": { bgcolor: "#5c1e00" } }}
                  onClick={() => navigate("/register")}
                >
                  SignUp
                </Button>
                <Button 
                  sx={{ color: "#802A00" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="contained" 
                  sx={{ bgcolor: "#802A00", mr: 2, "&:hover": { bgcolor: "#5c1e00" } }}
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </Button>
                <Button 
                  sx={{ color: "#802A00" }}
                  onClick={handleSignOut}
                >
                  Logout
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
