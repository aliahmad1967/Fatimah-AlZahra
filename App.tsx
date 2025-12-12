import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DETAILED_CONTENT } from "./data/detailedContent";
import { ContentPage } from "./pages/ContentPage";
import { HomePage } from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/introduction"
            element={<ContentPage data={DETAILED_CONTENT.INTRODUCTION} />}
          />
          <Route
            path="/birth"
            element={<ContentPage data={DETAILED_CONTENT.BIRTH} />}
          />
          <Route
            path="/marriage"
            element={<ContentPage data={DETAILED_CONTENT.MARRIAGE} />}
          />
          <Route
            path="/ordeal"
            element={<ContentPage data={DETAILED_CONTENT.ORDEAL} />}
          />
          <Route
            path="/departure"
            element={<ContentPage data={DETAILED_CONTENT.DEPARTURE} />}
          />
          <Route
            path="/references"
            element={<ContentPage data={DETAILED_CONTENT.REFERENCES} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
