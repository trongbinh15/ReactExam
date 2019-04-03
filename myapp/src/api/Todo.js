import React, { useState } from "react";

const loadTodos = () => {
  const [data, setData] = useState(null);

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => setData(data))
    .then(
      setTimeout(() => {
        //load lâu lâu tí :))
        //setIsLoading(false);
      }, 1500)
    );
};
