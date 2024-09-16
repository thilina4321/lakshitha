import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  // Default active tab is either from the URL or 'overview'
  const [activeTab, setActiveTab] = useState(router.pathname.split("/")[2] || "overview");

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

  // Redirect to /dashboard/overview if the user is on /dashboard
  useEffect(() => {
    if (router.pathname === "/dashboard") {
      router.push("/dashboard/overview");
    }
  }, [router]);

  return (
    <Box className="flex flex-col min-h-screen">
      {/* AppBar */}
      <AppBar position="static" elevation={0} className="bg-white rounded-lg shadow-md">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" className="text-gray-900">
            Middleware Connector
          </Typography>
          <Typography variant="body1" className="text-gray-800">
            Welcome Dilesh
          </Typography>
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
