import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import images from "./assets/images";
import Layout from "./components/Layout";
import PageLoader from "./components/PageLoader";
import { UserProvider } from "./contexts/userContext";
import "./styles.css";

const Dashbaord = lazy(() => import("./containers/Dashboard"));
const Users = lazy(() => import("./containers/Users"));
const Cars = lazy(() => import("./containers/Cars"));

export default function App() {
  return (
    <UserProvider>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashbaord />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </Suspense>
      </Layout>
    </UserProvider>
  );
}
