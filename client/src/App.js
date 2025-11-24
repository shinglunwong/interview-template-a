import React from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import TemplatePage from "./pages/TemplatePage";

const AppInner = () => {
  const { token } = useAuth();

  if (!token) {
    return <LoginPage />;
  }

  return <TemplatePage />;
};

const App = () => (
  <AuthProvider>
    <AppInner />
  </AuthProvider>
);

export default App;
