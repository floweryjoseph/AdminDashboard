import { Route, Routes } from "react-router-dom";
import FeaturedChart from "../charts/FeaturedChart";
import NormalChart from "../charts/NormalChart";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import classes from "../modules/home.module.scss";
import ProductList from "./ProductList";
import Table from "./ProductList";
import Widget from "./Widget";
import Users from "./Users";
import List from "./UserList";
import {userData} from "./DummyData";
import UserTable from "../apis/UserTable";
const Home = () => {
  return (
    <div className={classes.home}>
    
      <div className={classes.homeContainer}>
      
        <div className={classes.widgets}>
     
      <Widget type="user"/>
      <Widget type="orders"/>
      <Widget type="earnings"/>
      <Widget type="balance"/>
    </div>
    <div className={classes.charts}>
      <FeaturedChart />
      <NormalChart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
    <div className={classes.listContainer}>
    <div className={classes.listTitle}>Latest transactions</div>
      {/* <ProductList /> */}
    </div>
      </div>
    </div>
  );
};

export default Home;
