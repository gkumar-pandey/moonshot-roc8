import { Toaster } from "react-hot-toast";
import "./App.css";
import DashboardPage from "./pages/dashboardApp/DashboardPage";
import LoginPage from "./pages/dashboardApp/LoginPage";
import SignupPage from "./pages/dashboardApp/SignupPage";
import EmailApp from "./pages/EmailApp/EmailApp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/dataDashboard/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/email" element={<EmailApp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
