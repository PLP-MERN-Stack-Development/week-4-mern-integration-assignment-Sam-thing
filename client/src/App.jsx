import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import UploadImage from "./pages/UploadImage";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import PostCreate from "./pages/PostCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/create" element={<PostCreate />} />
      <Route path="/upload" element={<UploadImage />} />
    </Routes>
  );
}

export default App;

// This is a simple React component that fetches data from the server