import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  // Default active tab is either from the URL or 'overview'
  const [activeTab, setActiveTab] = useState(router.pathname.split("/")[2] || "overview");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If token is not present, redirect to login page
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false); // Stop loading if token is present
    }
  }, [router]);

  const tabs = [
    { name: "Overview", path: "/dashboard/overview" },
    { name: "Connectors", path: "/dashboard/connectors" },
    { name: "Destination", path: "/dashboard/destination" },
    { name: "Account", path: "/dashboard/account" },
  ];

  const handleTabClick = (path: string) => {
    setActiveTab(path.split("/")[2]);
    router.push(path); // Navigate to the clicked tab
  };

  const handleLogout = () => {
    // Remove token from localStorage (or any other authentication mechanism you use)
    localStorage.removeItem("token");

    // Navigate back to login page
    router.push("/login");
  };

  // Redirect to /dashboard/overview if the user is on /dashboard
  useEffect(() => {
    if (router.pathname === "/dashboard") {
      router.push("/dashboard/overview");
    }
  }, [router]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="flex flex-col min-h-screen">
      {/* AppBar */}
      <AppBar position="static" className="bg-white rounded-lg shadow-md">
        <Toolbar className="flex gap-4">
          <Typography variant="h6" className="text-gray-900 flex-1">
            Middleware Connector
          </Typography>
          <Typography variant="body1" className="text-gray-800">
            Welcome Dilesh
          </Typography>

          <Box>
            <Button
              variant="contained"
              color="error"
              startIcon={<ExitToAppIcon />}
              fullWidth
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Layout: Sidebar + Content */}
      <Box className="flex flex-1 mt-4 mx-4">
        {/* Sidebar */}
        <Box className="w-1/4 bg-gray-200 p-4 space-y-4 rounded-lg shadow-lg border-r-2 border-gray-300">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              onClick={() => handleTabClick(tab.path)}
              className={`w-full text-left py-3 ${
                activeTab === tab.path.split("/")[2]
                  ? "bg-indigo-500 text-white font-bold"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              {tab.name}
            </Button>
          ))}
        </Box>

        {/* Content Area */}
        <Box className="w-3/4 flex flex-col justify-start items-start p-8 bg-white shadow-md rounded-lg ml-4 shadow-lg border-2 border-gray-300">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
