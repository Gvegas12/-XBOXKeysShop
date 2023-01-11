import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../data/router";
import { HOME_ROUTE } from "../../data/router/utils/utils.publicRoutes";
import Market from "../components/pages/Market";
import RouterLayout from "./App.Router.Layout";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<RouterLayout />}>
          <Route index element={<Market />} />
          {publicRoutes.map(({ path, Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
