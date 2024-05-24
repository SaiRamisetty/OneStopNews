import "./App.css";
import Navbar from "../src/Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";

function App() {
  let pageSize = 6;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#132BCF"
          height={3.5}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/OneStopNews"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="home"
                category="general"
              />
            }
          />
          <Route
            path="/General"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="general"
                category="general"
              />
            }
          >
            General
          </Route>
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="business"
                category="business"
              />
            }
          >
            Business
          </Route>
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="entertainment"
                category="entertainment"
              />
            }
          >
            Entertainment
          </Route>
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="health"
                category="health"
              />
            }
          >
            Health
          </Route>
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="science"
                category="science"
              />
            }
          >
            Science
          </Route>
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="sports"
                category="sports"
              />
            }
          >
            Sports
          </Route>
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                key="technology"
                category="technology"
              />
            }
          >
            Technology
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
