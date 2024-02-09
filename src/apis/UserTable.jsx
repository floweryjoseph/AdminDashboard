import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import classes from "../modules/UserTable.module.scss";
const UserTable = () => {
  // const [users, setUsers] = useState([]);
  // const url = "http://192.168.2.90:8108/user/getall";
  // async function fetchData() {
  //   const response = await fetch(url, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await response.json();
  //   setUsers(data.userdata);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);



const [users, setUsers] = useState([]);
const url="https://api.learnyn.in/country/getall"
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
  console.log("users",users)
//-------------------------------------------------------------------------------------------
const columns = [
  // { field: "id", headerName: "ID", width: 70 },
  // { field: "userName", headerName: "Username", width: 130 },
  // { field: "email", headerName: "Email", width: 130 },
  // {
  //   field: "mobileno",
  //   headerName: "Mobile Number",
  //   type: "number",
  //   width: 150,
  // },
  // {
  //   field: "createdon",
  //   headerName: "Created On",
  //   width: 160,
  // },



  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "currency", headerName: "Currency", width: 130 },
  {
    field: "dialcode",
    headerName: "dialcode",
    type: "number",
    width: 150,
  },
  {
    field: "capital",
    headerName: "capital",
    width: 160,
  },
];

  return (
    <div className={classes.container}>
      <h1>User Details</h1>
      {/* {users.map((user) => (
        <div className={classes.card}>
          <div className={classes.cardInfo}>
          <h3>{user.name}</h3>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.mobileno}</p>
          <p>{user.createdon}</p>
          </div>
          <div className={classes.cardImage}>
               <img src={user.image} alt="image not found"/>
            </div>
        </div>

      
      ))}
      
      ------------------------------------------------------------------------------------------------
      */}



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
export default UserTable;

