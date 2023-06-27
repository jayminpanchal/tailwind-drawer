import { Navigate, Route, Routes } from "react-router-dom";
import MainContent from "../../components/MainContent";
import Sidebar from "../../components/Sidebar";
import Dashboard from "../Dashboard";
import Catalogs from "../Catalogs";
import Vendors from "../Vendors";
import Users from "../Users";
import Views from "../Views";
import Tenants from "../Tenants";
import Applications from "../Applications";

function App() {
  return (
    <div className="w-screen h-full bg-default">
      <div className="flex flex-1 h-full w-full">
        <Sidebar />
        <MainContent>
          <div className="relative flex flex-1 h-full w-full flex-col">
            <Routes>
              <Route path="/">
                <Route index element={<Dashboard />} />
                <Route path="catalogs" element={<Catalogs />} />
                <Route path="vendors" element={<Vendors />} />
                <Route path="users" element={<Users />} />
                <Route path="views" element={<Views />} />
                <Route path="tenants" element={<Tenants />} />
                <Route path="applications" element={<Applications />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </MainContent>
      </div>
    </div>
  );
}

export default App;
