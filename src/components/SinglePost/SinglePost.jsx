import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const post = useLoaderData();
  const { title, body } = post;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mb-12">
      <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button onClick={handleBack} className="btn">
              Back Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
