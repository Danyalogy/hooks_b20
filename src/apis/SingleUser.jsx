import React from "react";

const SingleUser = ({ login, avatar_url, url }) => {
  return (
    <>
      <div className="p-5 rounded-md shadow-lg my-3">
        <img src={avatar_url} width={"100%"} alt="" />
        <div className="g-gray-200 p-4"></div>
        <h5 className="text-gray-500 capitalize mb-4">{login}</h5>
        <a
          target="_blank"
          href={url}
          className="bg-blue-500 px-3 py-2  rounded-md text-white text-sm"
        >
          Visit Profile
        </a>
      </div>
    </>
  );
};

export default SingleUser;
