import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../pagesAdmin/lineChart/Line";
import React from "react";
import { DownloadOutlined } from "@mui/icons-material";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
      <Paper sx={{ width: "100%", flexGrow: 1 }}>
        <Box
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            color={theme.palette.secondary.main}
            variant="h6"
            fontWeight="bold"
          >
            quantity Generated
          </Typography>
          <Box>
            <IconButton>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Box>
        <Line isDahboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row2;
