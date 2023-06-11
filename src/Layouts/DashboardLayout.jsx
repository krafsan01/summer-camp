import React from "react";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/dashboard/Sidebar";
import Navbar from "../Components/dashboard/Header";

const DashboardLayout = () => {
  return (
    <Box display={"flex"} pos={"fixed"} w={"100%"}>
      <SideBar />
      <Box w={"100%"}>
        <Navbar
        // colorScheme={colorScheme}
        // toggleColorScheme={toggleColorScheme}
        />
        <Box
          w={"100%"}
          p={70}
          h={"100vh"}
          sx={{
            overflowY: "auto",
          }}
        >
          <Outlet></Outlet>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
