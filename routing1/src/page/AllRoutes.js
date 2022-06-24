

import {Route, Routes} from "react-router-dom";
import About from "./About";
import Home from "./Home"
import UserPage from "./UserPage";
import Users from "./Users";

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}>Home</Route>
                  <Route path="/about" element={<About/>}>About</Route>
     
                  <Route path="/users" element={<Users/>}>Users</Route>
                  <Route path="/users/:user_id" element={<UserPage/>}>Users</Route>

            </Routes>


        </div>
    )
}
export default AllRoutes; 