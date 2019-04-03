import React, { useState, useEffect } from "react";
import Spinner from "../common/Spinner";

function Table() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setData(data))
      .then(
        setTimeout(() => {
          //load lâu lâu tí :))
          setIsLoading(false);
        }, 1500)
      );
  });

  const handleFilter = e => {
    console.log(e);
    setFilter(e);
  };

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <div className="col-md-8 m-4">
      <div className="m-2 input-group-prepend">
        <span>
          <span class="input-group-text">Filter:</span>
          <input
            type="text"
            className="form-control"
            onChange={e => handleFilter(e.target.value)}
          />
        </span>
      </div>
      <table id="customers" className="table table-bordered table-hover">
        <thead className=" thead-light">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(item => {
              return item.title.includes(filter);
            })
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed ? "Completed" : "Not completed"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
