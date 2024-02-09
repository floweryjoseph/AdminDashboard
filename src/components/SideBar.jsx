import classes from "../modules/sidebar.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import ListAltIcon from "@mui/icons-material/ListAlt"; //orders
import SyncAltIcon from "@mui/icons-material/SyncAlt"; //logs
import CategoryIcon from "@mui/icons-material/Category";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';

// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <span className={classes.logo}>Shopping Cart</span>
      </div>
      <hr></hr>
      <div className={classes.center}>
        <ul>
          <p className={classes.title}>MAIN</p>
          <li>
            <DashboardIcon className={classes.icon} />
           
            <Link to = '/'>
              <span>Dashboard</span>
              </Link>

          </li>
          <p className={classes.title}>LISTS</p>
          <li>
            <PersonIcon className={classes.icon} />
            <Link to = '/usertable'>
              <span>Users</span>
              </Link>
          </li>
          <li>
            <InventoryIcon className={classes.icon} />
            <Link to = '/productlist'><span>Products</span></Link>
          </li>

          {/* <Accordion>
            <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header">
              <Typography>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Add New Category</Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography>View Category</Typography>
            </AccordionDetails>
          </Accordion> */}

          <li>
          <CategoryIcon className={classes.icon} />
          <span> <Accordion /></span>
          
          </li>


          <li>
            <ListAltIcon className={classes.icon} />

            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={classes.icon} />
            <span>Delivery</span>
          </li>
          <p className={classes.title}>USEFUL</p>
          <li>
            <QueryStatsIcon className={classes.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className={classes.icon} />
            <span>Notifications</span>
          </li>
          <p className={classes.title}>SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodIcon className={classes.icon} />
            <span>System Health</span>
          </li>
          <li>
            <SyncAltIcon className={classes.icon} />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className={classes.icon} />
            <span>Settings</span>
          </li>
          <p className={classes.title}>USER</p>
          <li>
            <PeopleIcon className={classes.icon} />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className={classes.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={classes.bottom}>
        <div className={classes.colorOptions}></div>
        <div className={classes.colorOptions}></div>
      </div>
    </div>
  );
};

export default SideBar;
