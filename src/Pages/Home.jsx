import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = ({ setEditIndex, setUpdate, setData, arr, setArr }) => {
  const navigate = useNavigate();

  const [first, setfirst] = useState(false);

  // get the localstorage item first then start mapping
  let b = JSON.parse(localStorage.getItem("item")) || [];
  // console.log("aaaaaaa",b);

  const deleterow = (i) => {
    let copy = [...b];
    copy.splice(i, 1);
    localStorage.setItem("item", JSON.stringify(copy));
    // setArr(copy);
    setfirst(!first);
  };

  const editrow = (e, i) => {
    navigate("/updateproduct");
    setEditIndex(i);
    setUpdate("Update");
    setData(e);
  };

  return (
    <>
      <h1>Product Details</h1>
      <hr />

      <table className="table">
        <thead>
          <tr className="m-4">
            <th scope="col">Serial Number</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {b.map((e, i) => {
            return (
              <tr key={i}>
                <td scope="row">{i + 1}</td>
                <td>
                  <img src={e.image}alt={e.title} style={{ width: "60px", height: "60px", borderRadius:"rounded"}}/>
                </td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.description.slice(0,30)}</td>
                <td>{e.category}</td>
                <td>
                  <MdEdit style={{color:"#116e00"}} onClick={() => editrow(e, i)} />
                </td>
                <td>
                  <MdDelete style={{color:"red"}} onClick={() => deleterow(i)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
