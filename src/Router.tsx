import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Recipe } from "./pages/recipe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  );
}
