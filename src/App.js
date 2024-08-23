import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Visitors from "./pages/Visitors";
import Error from "./pages/Error";
import WithGuard from "./components/WithGuard";
import Admin from "./pages/Admin";
import VisitorsDataGrid from "./components/VisitorsDataGrid";
import Places from "./components/Places";
import Login from "./pages/login/Login";
import Users from "./components/Users";
// import SuperAdminDashboard from "./pages/SuperAdminDashboard";

function App() {
  const { isAuth, role } = useSelector((state) => state.auth);
  let mainPath = "";

  if (role === "ROLE_ADMIN") {
    mainPath = "/admin";
  } else if (role === "ROLE_USER") {
    mainPath = "/user";
  } else if (role === "ROLE_SUPER_ADMIN") {
    mainPath = "/super-admin";
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/visitors" element={<Visitors />} /> */}
        <Route path="/login" element={<Login />} />

        {!isAuth && <Route path="/*" element={<Navigate to="/login" />} />}

        {isAuth && (
          <Route element={<WithGuard />}>
            {role === "ROLE_USER" && (
              <Route path="/user" element={<Visitors />}>
                {/* Add your user-specific routes here */}
              </Route>
            )}

            {role === "ROLE_ADMIN" && (
              <Route path="/admin" element={<Admin />}>
                <Route index element={<VisitorsDataGrid />} />
                <Route path="managevisitors" element={<VisitorsDataGrid />} />
                <Route path="manageplaces" element={<Places />} />
              </Route>
            )}

            {/* {role === "ROLE_SUPER_ADMIN" && (
              <Route path="/super-admin" element={<SuperAdminDashboard />}>
                
                <Route path="manageusers" element={<Users />} />
                <Route path="manageplaces" element={<Places />} />
              </Route>
            )} */}
          </Route>
        )}

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
