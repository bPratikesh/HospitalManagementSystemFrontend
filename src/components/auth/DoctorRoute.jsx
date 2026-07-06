import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";

function DoctorRoute({ children }) {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      {user?.role === "DOCTOR" ? (
        children
      ) : (
        <Navigate to="/" replace />
      )}
    </ProtectedRoute>
  );
}

export default DoctorRoute;