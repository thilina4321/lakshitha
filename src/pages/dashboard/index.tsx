import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  console.log(router.pathname, "===");

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

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="flex flex-col min-h-screen bg-gray-50">
      {/* AppBar */}
      <AppBar position="static" elevation={0} className="blue-600 text-white shadow-lg">
        <Toolbar className="flex justify-between px-6">
          <Typography variant="h6" className="font-semibold">
            Middleware Connector
          </Typography>
          <Box className="flex items-center gap-4">
            <Typography variant="body1" className="text-gray-200">
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
        </Toolbar>
      </AppBar>

      {/* Main Layout: Sidebar + Content */}
      <Box className="flex flex-1 mt-6 mx-8">
        {/* Sidebar */}
        <Box className="w-1/4 bg-gradient-to-b from-gray-100 to-gray-200 p-6 rounded-xl shadow-md space-y-4">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              onClick={() => handleTabClick(tab.path)}
              className={`w-full text-left py-4 px-6 rounded-lg transition-all duration-200 ${
                router.pathname.includes(tab.path)
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-white text-gray-900 hover:bg-indigo-100 shadow-sm"
              }`}
            >
              {tab.name}
            </Button>
          ))}
        </Box>

        {/* Content Area */}
        <Box className="w-3/4 flex flex-col justify-start items-start p-10 bg-white shadow-lg rounded-xl ml-8">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
