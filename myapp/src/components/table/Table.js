import React, { useState } from "react";
import Spinner from "../common/Spinner";

function Table() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return <h1>Table ne</h1>;
}

export default Table;
