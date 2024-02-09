import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import classes from '../modules/appStructure.module.scss'
function AppStructure(props) {
  return (
    <div className={classes.appStructure}>
      <SideBar /> 
      <div className={classes.appContainer}>
      <NavBar />
     
            <main>{props.children}</main>   
            </div>
    </div>
  );
}

export default AppStructure;
