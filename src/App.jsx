import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import HomePage from "./pages/home/HomePage";
import PricingPlanPage from "./pages/pricingPlan/PricingPlanPage";
import FooterComp from "./shared/footer/FooterComp";
import HeaderComp from "./shared/header/HeaderComp";

const App = () => {
  return (
    <div>
      <HeaderComp />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/pricing-plan" element={<PricingPlanPage />} />
        <Route exact path="/check-out" element={<CheckoutPage />} />
      </Routes>
      <FooterComp />
    </div>
  );
};

export default App;
