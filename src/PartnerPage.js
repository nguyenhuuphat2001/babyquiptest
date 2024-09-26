// PartnerPage.js
import React from "react";
import { useParams } from "react-router-dom";

const PartnerPage = () => {
  const { id } = useParams(); // Get the id from the URL

  return (
    <div>
      <h1>Partner Details</h1>
      <p>Partner ID: {id}</p>
      {/* Fetch and display more details about the partner using the id */}
    </div>
  );
};

export default PartnerPage;
