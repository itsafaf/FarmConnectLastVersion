import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";
import HeaderAdmin1 from "../../../Components/HeaderAdmin1";

const LineChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <HeaderAdmin1 title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;
