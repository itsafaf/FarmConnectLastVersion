import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pagesAdmin/pieChart/pie";
import React from "react";
import Bar from "../../pagesAdmin/barChart/bar";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "40%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          FarmConnect
        </Typography>

        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          Interface generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          all about interface of FarmConnect
        </Typography>
      </Paper>

      <Paper sx={{flexGrow: 3,minWidth: "300px", width: "30%",  }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Website user static
        </Typography>
        <Bar isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;