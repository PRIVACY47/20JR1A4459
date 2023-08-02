import { Route } from "react-router-dom";
import { Routes , Link } from "react-router-dom";

import AllTrains from "./components/AllTrains";
import SpecificTrain from "./components/SpecificTrain";

function App() {
  return (
    <div className="bg-gray-900">
    
      <Routes>
        <Route path="/" element={<AllTrains/>} />
        <Route path="/:id" element={<SpecificTrain />} />
      </Routes>
    </div>
  );
}

export default App;
