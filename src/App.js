import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Visitors from "./pages/Visitors";
import Error from "./pages/Error";
import WithGuard from "./components/WithGuard";
import Admin from "./pages/Admin";
import VisitorsTable from "./components/VisitorsTable";
import Users from "./components/Users";
import VisitorsDataGrid from "./components/VisitorsDataGrid";
import Places from "./components/Places";
import Login from "./pages/login/Login";

function App() {
  const { isAuth, role } = useSelector((state) => state.auth);
  let mainPath = "";

  if (role === "ROLE_ADMIN") {
    mainPath = "/admin";
  } else if (role === "ROLE_USER") {
    mainPath = "/user";
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Visitors />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/login" element={<Login />} />

        {!isAuth && <Route path="/*" element={<Navigate to="/login" />} />}

        {isAuth && (
          <Route element={<WithGuard />}>
            {/* { role === "ROLE_USER" && (
              <Route path="/user" element={<UserLayout />}>
                <Route index element={<h4>تقارير جهاز مستقبل مصر</h4>} />
                <Route path="report/:id" element={<Iframe />} />
                <Route
                  path="profile/changepassword"
                  element={<ChangePassword />}
                />
                <Route
                  path="showmap"
                  element={
                    <iframe
                      style={{ width: "100%", height: "100%" }}
                      title="gis_map"
                      src={"http://172.16.1.138:9002"}
                    />
                  }
                />
              </Route>
            )} */}

            {(role === "ROLE_ADMIN" || role === "ROLE_USER") && (
              <Route path={`${mainPath}`} element={<Admin />}>
                <Route index element={<VisitorsDataGrid />} />
                <Route path="managevisitors" element={<VisitorsDataGrid />} />
                <Route path="manageplaces" element={<Places />} />
              </Route>
            )}
          </Route>
        )}
        <Route path={`${mainPath}`} element={<Admin />}>
          <Route index element={<VisitorsDataGrid />} />
          <Route path="managevisitors" element={<VisitorsDataGrid />} />
          <Route path="manageplaces" element={<Places />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
