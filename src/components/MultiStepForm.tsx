/**
 * Implement your solution here and also feel free to create new files as needed within this folder. Although, this is the entry component that will be tested
 */

import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import { AppProvider } from "../state";
import { Step1 } from "./Step1";

export const MultiStepForm = () => {
  return <div>
     <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppProvider>
  </div>;
};
