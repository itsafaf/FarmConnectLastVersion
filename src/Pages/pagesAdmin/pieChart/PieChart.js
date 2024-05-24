import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Pie from "./pie";
import HeaderAdmin1 from "../../../Components/HeaderAdmin1";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <HeaderAdmin1 title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </Box>
  );
};

export default PieChart;
