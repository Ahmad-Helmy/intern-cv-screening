import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import DefaultTemplate from "./UI/DefaultTemplates/DefaultTemplate";
import ProtectedRoute from "./routes/ProtectedRoute";
import CandidateDetails from "./pages/candidate-details/candidate-details";
import Candidates from "./pages/candidates/candidates";
import LoginPage from "./pages/login/Login";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* two nested pathless routes: the auth gate, then the chrome. A route
          with no path is a layout, not a destination. */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DefaultTemplate />}>
          <Route index element={<Navigate to="/candidates" replace />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="candidates/:id" element={<CandidateDetails />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/candidates" replace />} />
    </Routes>
  );
}

export default App;
