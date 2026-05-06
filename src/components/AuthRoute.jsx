import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function AuthRoute({ children }) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}
