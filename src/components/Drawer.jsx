import * as React from "react";
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
import { supabase } from "../supabase";
import { useNavigate } from "react-router";

export default function TemporaryDrawer({ showDrawer, handleDrawerClose }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    handleDrawerClose();
    navigate("/");
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
        {["Recipes", "Pricing", "Diets"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {
              if (text === "Recipes") navigate("/recipes");
              if (text === "Pricing") navigate("/pricing");
              if (text === "Diets") navigate("/diets");
            }}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
                navigate("/login");
              }}
              sx={{
                color: "#802A00",
                borderColor: "#802A00",
                "&:hover": { borderColor: "#5c1e00", bgcolor: "#FFDBCF" },
              }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                handleDrawerClose();
                navigate("/register");
              }}
              sx={{
                bgcolor: "#802A00",
                "&:hover": { bgcolor: "#5c1e00" },
              }}
            >
              Sign Up
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
              Profile
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
              Logout
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );

  return (
    <Drawer open={showDrawer} onClose={handleDrawerClose}>
      {DrawerList}
    </Drawer>
  );
}
