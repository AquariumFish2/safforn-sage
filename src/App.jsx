import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Landing from "./pages/Landing/Landing";
import Layout from "./components/Layout";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/Recipes/RecipeDetails";
import Pricing from "./pages/Pricing/Pricing";
import Diets from "./pages/Diets/Diets";
import { RecipesProvider } from "./context/RecipesContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <RecipesProvider>
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
              path="/auth"
              element={
                <AuthRoute>
                  <Auth />
                </AuthRoute>
              }
            />
          </Routes>
        </RecipesProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
