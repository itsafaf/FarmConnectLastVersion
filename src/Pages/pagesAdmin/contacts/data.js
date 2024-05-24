
export const columns = [
  { field: "id", headerName: "ID", width: 33 },
  { field: "registrarId", headerName: "Registrar ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
    width: 44
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
  },
];

export const rows = [
  {
    id: 1,
    name: "Ingenieur1",
    email: "ingenieur1@gmail.com",
    age: 35,
    phone: "-",
    address: "-",
    city: "Oran",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Agriculteur1",
    email: "agriculteur1@gmail.com",
    age: 42,
    phone: "-",
    address: "-",
    city: "Tlemcen",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Comerçant1",
    email: "commerçant1@gmail.com",
    age: 45,
    phone: "-",
    address: "-",
    city: "Alger",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Consommateur1",
    email: "consommateur1@gmail.com",
    age: 16,
    phone: "-",
    address: "",
    city: "tipaza",
    registrarId: 123512,
  },
 
];

