import { useRouteError } from "react-router-dom";

import React from 'react'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>BHAI KYA KAR RAHA H TU</h1>
    </div> 
  )
}

export default Error
