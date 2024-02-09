import { Route, Routes } from "react-router-dom";




import AppStructure from "./pages/AppStructure";
import ProductList from "./pages/ProductList";
import UserTable from "./pages/UserTable";
import Home from "./pages/Home";
import Users from "./pages/Users";
import CreateCategoryWindow from "./components/CreateCategoryWindow";
import ViewCategory from "./components/ViewCategory";
import NewUser from "./pages/NewUser";





function App(props) {
  return (
  
      <AppStructure>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route  path="/productlist" element={<ProductList />} />
           <Route  path="/usertable" element={<UserTable />} />
          <Route  path="/createcategory" element={<CreateCategoryWindow />} />
           <Route  path="/viewcategory" element={<ViewCategory />} />
          <Route  path="/newuser" element={<NewUser />} />  
        </Routes>
      </AppStructure>
      
  );
}

export default App;
