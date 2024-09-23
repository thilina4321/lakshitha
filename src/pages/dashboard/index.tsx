/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CircularProgress,
  Drawer,
  IconButton,
  Breadcrumbs,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Ensure that localStorage is only accessed on the client side
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const tabs = [
    { name: "Overview", path: "/dashboard/overview" },
    { name: "Connectors", path: "/dashboard/connectors" },
    { name: "Destination", path: "/dashboard/destination" },
    { name: "Account", path: "/dashboard/account" },
  ];

  const handleTabClick = (path: string) => {
    router.push(path);
    if (isMobile) {
      setDrawerOpen(false); // Close drawer on mobile after selecting tab
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  useEffect(() => {
    if (router.pathname === "/dashboard") {
      router.push("/dashboard/overview");
    }
  }, [router]);

  // Breadcrumbs logic using Next.js Link
  const generateBreadcrumbs = () => {
    const pathnames = router.pathname.split("/").filter((x) => x);
    return (
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        className="my-4"
      >
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return isLast ? (
            <Typography color="textPrimary" key={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          ) : (
            <Link href={to} passHref key={to}>
              <Typography color="inherit" className="cursor-pointer hover:underline">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  const SidebarContent = (
    <Box className="w-full p-4 bg-gray-100 h-full space-y-4">
      {/* Close button for the drawer on mobile */}
      {isMobile && (
        <div className="flex justify-center items-center">
          <Typography variant="h6" className="text-gray-900 mb-4 flex-1 ">
            Welcome, Dilesh
          </Typography>

          <IconButton onClick={() => setDrawerOpen(false)} className="mb-4">
            <CloseIcon />
          </IconButton>
        </div>
      )}

      {/* Tabs */}
      {tabs.map((tab) => (
        <div
          key={tab.name}
          onClick={() => handleTabClick(tab.path)}
          className={`w-full flex justify-center text-left py-3 px-6 rounded-lg transition-all duration-200 shadow-sm cursor-pointer ${
            !router?.pathname?.startsWith(tab.path)
              ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
              : ""
          }`}
          style={{
            backgroundColor: router?.pathname?.startsWith(tab.path) ? "#c7d2fe" : "", // Tailwind bg-indigo-100 color in hex
            color: router?.pathname?.startsWith(tab.path) ? "#4338ca" : "", // Tailwind text-indigo-600 color in hex
            fontWeight: router?.pathname?.startsWith(tab.path) ? "bold" : "normal",
          }}
        >
          {tab.name}
        </div>
      ))}

      {isMobile && (
        <Button
          variant="contained"
          color="error"
          startIcon={<ExitToAppIcon />}
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 w-full"
        >
          Sign Out
        </Button>
      )}
    </Box>
  );

  return (
    <Box className="flex flex-col min-h-screen">
      {/* AppBar */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className=" text-gray-900 shadow-sm mb-2 py-4"
        style={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <Toolbar className="flex justify-between px-6">
          <Typography variant="h6" className="font-semibold">
            Middleware Connector
          </Typography>

          {/* AppBar content for desktop: Welcome and Sign Out */}
          {!isMobile && (
            <Box className="flex items-center gap-4">
              <Typography variant="h6" className="text-black font-bold">
                Welcome, Dilesh
              </Typography>
              <Button
                variant="contained"
                color="error"
                startIcon={<ExitToAppIcon />}
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600"
              >
                Sign Out
              </Button>
            </Box>
          )}

          {/* Hamburger menu for mobile */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar and Content Layout */}
      <Box className="flex flex-1">
        {/* Drawer for mobile */}
        <Drawer
          PaperProps={{
            className: isMobile ? "w-full" : "w-1/4", // Full width for mobile, partial width for desktop
          }}
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {SidebarContent}
        </Drawer>

        {/* Sidebar for desktop */}
        {!isMobile && <Box className="w-1/4 bg-gray-100 p-6 shadow-inner">{SidebarContent}</Box>}

        {/* Content Area */}
        <Box
          className={`${
            isMobile ? "flex-1 px-2" : "w-3/4 flex flex-col p-10 bg-white shadow-md rounded-xl ml-4"
          }`}
        >
          {/* Breadcrumbs inside the content section */}
          {/* {generateBreadcrumbs()} */}

          {/* Main content */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
