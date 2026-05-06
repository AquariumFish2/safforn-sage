import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";

export default function TemporaryDrawer({ showDrawer, handleDrawerClose }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSignOut = async () => {
    await signOut();
    handleDrawerClose();
    navigate("/");
  };

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          src="/logo.png"
          sx={{ width: 40, height: 40, bgcolor: "#802A00" }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#802A00",
            fontFamily: "noto serif",
          }}
        >
          Saffron & Sage
        </Typography>
      </Box>

      <List onClick={handleDrawerClose}>
        {[
          { text: "Recipes", key: "nav.recipes", path: "/recipes" },
          { text: "Pricing", key: "nav.pricing", path: "/pricing" },
          { text: "Diets", key: "nav.diets", path: "/diets" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={t(item.key)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <Stack sx={{ p: 2 }} spacing={2}>
        {!user ? (
          <>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => {
                handleDrawerClose();
                navigate("/auth?mode=login");
              }}
              sx={{
                color: "#802A00",
                borderColor: "#802A00",
                "&:hover": { borderColor: "#5c1e00", bgcolor: "#FFDBCF" },
              }}
            >
              {t("nav.login")}
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                handleDrawerClose();
                navigate("/auth?mode=signup");
              }}
              sx={{
                bgcolor: "#802A00",
                "&:hover": { bgcolor: "#5c1e00" },
              }}
            >
              {t("nav.signup")}
            </Button>
          </>
        ) : (
          <>
            <Button
              fullWidth
              variant="text"
              onClick={() => {
                handleDrawerClose();
                navigate("/profile");
              }}
              sx={{ color: "#802A00", justifyContent: "flex-start" }}
              startIcon={<Avatar sx={{ width: 24, height: 24 }} />}
            >
              {t("nav.profile")}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleSignOut}
              sx={{
                color: "#802A00",
                borderColor: "#802A00",
                "&:hover": { borderColor: "#5c1e00", bgcolor: "#FFDBCF" },
              }}
            >
              {t("nav.logout")}
            </Button>
          </>
        )}

        <Divider />

        <Button
          fullWidth
          variant="text"
          onClick={toggleLanguage}
          startIcon={<LanguageIcon />}
          sx={{ color: "#802A00", justifyContent: "flex-start" }}
        >
          {i18n.language === "en" ? "العربية (AR)" : "English (EN)"}
        </Button>
      </Stack>
    </Box>
  );

  return (
    <Drawer open={showDrawer} onClose={handleDrawerClose}>
      {DrawerList}
    </Drawer>
  );
}
