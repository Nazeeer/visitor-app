import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Menu,
  Lock,
  Groups,
  AdminPanelSettings,
  Apartment,
  AccountCircle,
} from "@mui/icons-material";
import AdminImage from "../assets/admin.png";
import UserImage from "../assets/user.png";

import Logo from "../assets/foeLogo.png";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SweatAlert from "./SweatAlert";

const iconColor = {
  color: "#FFC100",
};
const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#FFC100" : "black",
  textDecoration: "none",
});

const drawerWidth = 220;
function Sidebar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleLogout = async () => {
    const willDelete = await SweatAlert({
      title: "هل متاكد من تسجيل الخروج ؟",
      icon: "warning",
      dangerMode: true,
    });
    if (willDelete) {
      console.log("yes");
      navigate("/login", { replace: true });
      // dispatch(clearData());
      // dispatch(clearToken());
      // navigate("/", { replace: true });
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src={role === "ROLE_ADMIN" ? AdminImage : UserImage}
          sx={{ margin: "3px" }}
        />
        <Stack alignItems="center" justifyContent="center">
          <Typography variant="body" noWrap component="div" fontWeight="bold">
            محمد سعيد
          </Typography>
          <Typography variant="body1" fontSize="10px" noWrap fontWeight="bold">
            {role === "ROLE_ADMIN" ? "مسؤل" : "مستخدم"}
          </Typography>
        </Stack>
      </Toolbar>
      <Divider />
      <List>
        <NavLink to="managevisitors" style={navLinkStyle}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Groups style={iconColor} />
              </ListItemIcon>
              <ListItemText primary="الزائرين" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/* {role === "ROLE_ADMIN" && (
          <NavLink to="manageusers" style={navLinkStyle}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GroupAdd style={iconColor} />
                </ListItemIcon>
                <ListItemText primary="المستخدمين" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        )} */}
        {role === "ROLE_ADMIN" && (
          <NavLink to="manageplaces" style={navLinkStyle}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Apartment style={iconColor} />
                </ListItemIcon>
                <ListItemText primary="الاماكن" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        )}

        <ListItem disablePadding onClick={() => handleLogout()}>
          <ListItemButton>
            <ListItemIcon>
              <Lock style={iconColor} />
            </ListItemIcon>
            <ListItemText primary="خروج" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      {/* <ToastContainer /> */}
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            borderBottom: ".2px solid #ccc",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="#ddd"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <Menu />
            </IconButton>
            {/* <MyBreadcrumbs /> */}
            <Typography variant="h6" noWrap component="div">
              استعلامات فوج المقر
            </Typography>
            <Box width="90px">
              <img src={Logo} alt="logo" style={{ maxWidth: "100%" }} />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox Projects"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            lang="ar"
            dir="rtl"
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          // component="main"
          sx={{
            flexGrow: 1,
            marginTop: "70px",
            p: 2,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
export default Sidebar;
