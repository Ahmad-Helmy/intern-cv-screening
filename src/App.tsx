import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import CandidateDetails from "./pages/candidate-details/candidate-details";
import Candidates from "./pages/candidates/candidates";
import LoginPage from "./pages/login/Login";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/candidates" element={<Candidates />} />
      <Route path="/candidates/:id" element={<CandidateDetails />} />
      <Route path="/settings" element={<Settings />} />

      {/* the default destination, and the catch-all for anything unknown */}
      <Route path="/" element={<Navigate to="/candidates" replace />} />
      <Route path="*" element={<Navigate to="/candidates" replace />} />
    </Routes>
  );
}

export default App;
