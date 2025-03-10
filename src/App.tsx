import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Home from "./components/home";
import AboutPage from "./components/AboutPage";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview/in" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/preview/in/about" element={<AboutPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
