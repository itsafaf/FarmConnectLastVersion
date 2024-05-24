import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import HeaderAdmin1 from "../../../Components/HeaderAdmin1";

const Invoices = () => {
  return (
<Box>
  
        <HeaderAdmin1 title="INVOICES" subTitle="List of Invoice Balances" />
  
  
        <Box sx={{ height: 650,   mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  
  
  
</Box>

  );
};

export default Invoices;
