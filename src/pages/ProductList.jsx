import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import classes from "../modules/productList.module.scss";
const ProductList = () => {
  

  const [users, setUsers] = useState([]);
  const url = "https://api.learnyn.in/country/getall";
  async function fetchData() {
    const response = await fetch(url, {
      method: "GET",
      // mode: "cors",
      // headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setUsers(data.responsedata);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log("users", users);
  //-------------------------------------------------------------------------------------------
  const columns = [
   

    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 130,
      renderCell: (params) => {
        return (
          <div
            className={classes.cellWithImg}>
           <img className={classes.cellImg} src={params.row.image}
            alt="Avatar"
         />
         {params.row.name}
         </div>
        );
      },
    },
    { field: "currency", headerName: "Currency", width: 130 },
    {
      field: "dialcode",
      headerName: "dialcode",
      // type: "number",
      width: 150,
    },
    {
      field: "capital",
      headerName: "capital",
      width: 160,
    },
  ];

  return (
    <div className={classes.productList}>
      <h1>Products details</h1>
     

      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
export default ProductList;

