import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { useState } from "react";
import ResponsiveAppBar from "./Appbar";
import TemporaryDrawer from "./Drawer";
import Footer from "./Footer";

export default function Layout() {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setShowDrawer(true);
  };

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  return (
    <Box>
      <ResponsiveAppBar handleDrawerOpen={handleDrawerOpen}></ResponsiveAppBar>
      <TemporaryDrawer
        handleDrawerClose={handleDrawerClose}
        showDrawer={showDrawer}
      ></TemporaryDrawer>
      
      <Box sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>

      <Footer></Footer>
    </Box>
  );
}
