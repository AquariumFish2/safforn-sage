import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";
import FromRegister from "./pages/Register/Form";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Landing from "./pages/Landing/Landing";
import Layout from "./components/Layout";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/Recipes/RecipeDetails";
import Pricing from "./pages/Pricing/Pricing";
import Diets from "./pages/Diets/Diets";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipes/:id" element={<RecipeDetails />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="diets" element={<Diets />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="/register"
            element={
              <AuthRoute>
                <FromRegister />
              </AuthRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
