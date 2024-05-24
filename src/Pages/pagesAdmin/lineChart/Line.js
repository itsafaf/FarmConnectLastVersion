 
 
import React from "react";
import { Box, useTheme } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Products",
    color: "hsl(4, 70%, 50%)",
    data: [
      {
        x: "Dimanche",
        y: 79,
      },
      {
        x: "Lundi",
        y: 28,
      },
      {
        x: "Mardi",
        y: 15,
      },
      {
        x: "Mercredi",
        y: 73,
      },
      {
        x: "Jeudi",
        y: 34,
      },
      {
        x: "Vendredi",
        y: 98,
      },
      {
        x: "Samedi",
        y: 44,
      },
    ],
  },
  {
    id: "Equipements",
    color: "hsl(205, 70%, 50%)",
    data: [
      {
        x: "Dimanche",
        y: 78,
      },
      {
        x: "Lundi",
        y: 22,
      },
      {
        x: "Mardi",
        y: 65,
      },
      {
        x: "Mercredi",
        y: 13,
      },
      {
        x: "Jeudi",
        y: 89,
      },
      {
        x: "Vendredi",
        y: 78,
      },
      {
        x: "Samedi",
        y: 31,
      },
      {
        x: "",
        y: 47,
      },
    ],
  },
  {
    id: "Workforce",
    color: "hsl(39, 70%, 50%)",
    data: [
      {
        x: "Dimanche",
        y: 3,
      },
      {
        x: "Lundi",
        y: 87,
      },
      {
        x: "Mardi",
        y: 59,
      },
      {
        x: "Mercredi",
        y: 94,
      },
      {
        x: "Jeudi",
        y: 58,
      },
      {
        x: "Vendredi",
        y: 46,
      },
      {
        x: "Samedi",
        y: 25,
      },
    ],
  },
  {
    id: "Tutoriels",
    color: "hsl(179, 70%, 50%)",
    data: [
      {
        x: "Dimanche",
        y: 13,
      },
      {
        x: "Lundi",
        y: 71,
      },
      {
        x: "Mardi",
        y: 22,
      },
      {
        x: "Mercredi",
        y: 70,
      },
      {
        x: "Jeudi",
        y: 97,
      },
      {
        x: "Vendredi",
        y: 14,
      },
      {
        x: "Samedi",
        y: 100,
      },
    ],
  },
];

const Line = ({isDahboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard?  "280px"  :  "75vh" }}>
      <ResponsiveLine
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "Days",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
       
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "NombresPostés",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
