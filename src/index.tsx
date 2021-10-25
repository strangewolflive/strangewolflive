import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import "./index.scss";

const App = () => {
    return (
      <>"Hello"</>
  );
}

const Redirect = ({to}) => {
  useEffect(() => {
    location.href = to;
  });
  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path="twitch" element={<Redirect to="https://twitch.tv/strangewolflive" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("app")
);