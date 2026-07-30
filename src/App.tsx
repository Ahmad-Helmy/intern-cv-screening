import "./App.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import CandidateDetails from "./pages/candidate-details/candidate-details";
import Candidates from "./pages/candidates/candidates";
import LoginPage from "./pages/login/Login";
import Settings from "./pages/settings/settings";
import PageTemplate from "./UI/DefaultTemplates/DefaultTemplate";

function DefaultTemplate() {
  return (
    <PageTemplate>
      <Outlet />
    </PageTemplate>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route element={<ProtectedRoute />}> */}
        {/* Auth gate */}
        <Route element={<DefaultTemplate />}>
          {/* Sidebar + main */}
          <Route index element={<Navigate to="/candidates" replace />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="candidates/:id" element={<CandidateDetails />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* </Route> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
