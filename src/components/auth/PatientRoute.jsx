import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";

function PatientRoute({ children }) {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      {user?.role === "PATIENT" ? (
        children
      ) : (
        <Navigate to="/" replace />
      )}
    </ProtectedRoute>
  );
}

export default PatientRoute;