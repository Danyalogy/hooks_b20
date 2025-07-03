import React, { useEffect, useState } from "react";
import SingleUser from "./Singleuser";
import { ClipLoader } from "react-spinners";

const Api = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = "https://api.github.com/users";

  const getData = async () => {
    setLoading(true);
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ClipLoader size={50} />;
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 container mx-auto">
        {users?.map((item, index) => {
          return <SingleUser {...item} key={item?.id} />;
        })}
      </div>
    </>
  );
};

export default Api;
