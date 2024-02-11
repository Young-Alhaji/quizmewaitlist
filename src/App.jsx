import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WaitingListPage from "./Pages/WaitingListPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WaitingListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
