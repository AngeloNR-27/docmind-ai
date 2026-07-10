import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import DocumentDetails from "./pages/DocumentDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Landing />} 
        />


        <Route 
          path="/app" 
          element={<Dashboard />} 
        />

        <Route
          path="/app/document/:id"
          element={<DocumentDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;