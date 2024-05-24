import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  styled,
  useTheme,
  Typography,
  Tooltip
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  PersonOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const menuItems1 = [
  { text: "Dashboard", icon: <HomeOutlined />, path: "/dashboard" },
  { text: "Manage Team", icon: <PeopleOutlined />, path: "/team" },
  { text: "Contacts Information", icon: <ContactsOutlined />, path: "/contacts" },
];

const menuItems2 = [
  { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
  { text: "FAQ Page", icon: <HelpOutlineOutlined />, path: "/faq" },
];

const menuItems3 = [
  { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
];

const SideBarAdmin1 = ({ open, handleDrawerClose }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid grey",
          transition: "0.25s",
        }}
        alt="Admin Avatar"
        src="https://media.allure.com/photos/5a26c1d8753d0c2eea9df033/3:4/w_1262,h_1683,c_limit/mostbeautiful.jpg"
      />
      <Typography align="center" sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}>
        Admin1
      </Typography>
      <Typography align="center" sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main }}>
        Admin
      </Typography>
      <Divider />

      <List>
        {menuItems1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? (theme.palette.mode === "dark" ? grey[800] : grey[300]) : null,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {menuItems2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? (theme.palette.mode === "dark" ? grey[800] : grey[300]) : null,
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {menuItems3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
          <Tooltip title={open ? null : item.text} placement="left">
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",                px: 2.5,
                bgcolor: location.pathname === item.path ? (theme.palette.mode === "dark" ? grey[800] : grey[300]) : null,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  </Drawer>
);
};

export default SideBarAdmin1;

