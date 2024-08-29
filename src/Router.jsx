import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SellerDetail from "./Pages/SellerDetail"
import UpdateProduct from "./Pages/UpdateProduct";
import UserDetails from "./Pages/UserDetails";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const Router = () => {
  const [editIndex, setEditIndex] = useState();
  const [data, setData] = useState({
    image: "",
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [arr, setArr] = useState([]);
  const [update, setUpdate] = useState("Submit");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setEditIndex={setEditIndex}
              setUpdate={setUpdate}
              setData={setData}
              arr={arr}
              />
          }
        />
        <Route path="/sellerdetail" element={<SellerDetail/>} />
        <Route
          path="/updateproduct"
          element={
            <UpdateProduct
              editIndex={editIndex}
              update={update}
              setUpdate={setUpdate}
              setData={setData}
              data={data}
              setArr={setArr}
              arr = {arr}
            />
          }
        />
        <Route path="/userdetail" element={<UserDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Router;
