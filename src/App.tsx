import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Home from "./components/home";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import ThankYou from "./pages/thank-you";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <>
        <ScrollToTop />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preview/in" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/preview/in/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/preview/in/projects" element={<ProjectsPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/preview/in/thank-you" element={<ThankYou />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </ErrorBoundary>
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
