import React from "react";
import { RouterProvider } from "react-router-dom";
import { RouterObj } from "./RouterInfo";

const Router = () => {
  return (
    <div className="content">
      <RouterProvider router={RouterObj} />
    </div>
  );
};

export default Router;
