import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";
import HeaderAdmin1 from "../../../Components/HeaderAdmin1";


const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <HeaderAdmin1
        title="Bar Chart"
        subTitle="les données concernant le nombre d'utilisateurs (agriculteurs, ingénieurs agricoles, commerçants, consommateurs) pour le pays Algérie"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;