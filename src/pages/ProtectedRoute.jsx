import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Remember that 'useEffect' happens after
  // component render. so if we try to return children
  // unconditionally, Then this component will try to render its children
  // like 'User' which does not exists.
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
