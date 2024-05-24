/*import React from "react";
import { Box, CssBaseline } from "@mui/material";
import TopBarAdmin1 from "../Components/TopBarAdmin1";
import SideBarAdmin1 from "../Components/SideBarAdmin1";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState("light");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBarAdmin1 open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
      <SideBarAdmin1 open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminPage;*/

import React from "react";
import { Box, CssBaseline } from "@mui/material";
import TopBarAdmin1 from "../Components/TopBarAdmin1";
import SideBarAdmin1 from "../Components/SideBarAdmin1";
import { Outlet, useLocation } from "react-router-dom";

const AdminPage = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Determine if the current page is the dashboard
  const isDashboardPage = pathname === "/dashboard";

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBarAdmin1 open={open} handleDrawerOpen={handleDrawerOpen} />
      {isDashboardPage ? null : <SideBarAdmin1 open={open} handleDrawerClose={handleDrawerClose} />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminPage;
