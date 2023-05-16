import Add from "Pages/Add";
import Detail from "Pages/Detail";
import Edit from "Pages/Edit";
import Login from "Pages/Login";
import Main from "Pages/Main";
import Table from "Pages/Table";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/list/main" element={<Main />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/list/total" element={<Main />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
