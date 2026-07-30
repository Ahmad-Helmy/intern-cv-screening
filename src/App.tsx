import "./App.css";
import { Navigate, Route, Routes } from "react-router";
// import { Outlet } from "react-router";
import CandidateDetails from "./pages/candidate-details/candidate-details";
import Candidates from "./pages/candidates/candidates";
import LoginPage from "./pages/login/Login";
import Settings from "./pages/settings/settings";
import PageTemplate from "./UI/DefaultTemplates/DefaultTemplate";
import ProtectedRoute from "./utils/ProtectedComponent";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<PageTemplate />}>
          <Route index element={<Navigate to="/candidates" replace />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="candidates/:id" element={<CandidateDetails />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
